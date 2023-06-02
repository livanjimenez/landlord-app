import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { useState } from "react";
import { db } from "../configs/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

async function addProperty(propertyData) {
  const propertyCollection = collection(db, "Properties");
  await addDoc(propertyCollection, propertyData);
}

function AddPropertyDialog({ open, handleClose }) {
  const [propertyData, setPropertyData] = useState({
    name: "",
    address: "",
    price: "",
  });

  const handleChange = (e) => {
    setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProperty(propertyData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Property</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Name"
            value={propertyData.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="address"
            label="Address"
            value={propertyData.address}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="price"
            label="Price"
            value={propertyData.price}
            onChange={handleChange}
            fullWidth
          />
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddPropertyDialog;
