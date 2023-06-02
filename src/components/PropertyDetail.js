import { useState, useEffect } from "react";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../configs/firebaseConfig";
import { TextField, Button } from "@mui/material";

async function getProperty(propertyId) {
  const propertyDoc = doc(db, "Properties", propertyId);
  const propertyData = await getDoc(propertyDoc);
  if (propertyData.exists()) {
    const data = propertyData.data();
    return {
      ...data,
    };
  } else {
    throw new Error("Property not found");
  }
}

async function updateProperty(propertyId, propertyData) {
  const propertyDoc = doc(db, "Properties", propertyId);
  await setDoc(propertyDoc, propertyData);
}

function PropertyDetail({ propertyId, handleClose }) {
  const [property, setProperty] = useState({
    name: "",
    address: "",
    price: "",
  });

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProperty(propertyId, property);
    handleClose();
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProperty(propertyId);
      setProperty(data);
    };

    fetchData();
  }, [propertyId]);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="name"
        label="Name"
        value={property.name || ""}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="address"
        label="Address"
        value={property.address || ""}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="price"
        label="Price"
        value={property.price || ""}
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit">Save Changes</Button>
    </form>
  );
}

export default PropertyDetail;
