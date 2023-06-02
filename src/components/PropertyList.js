import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../configs/firebaseConfig";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Typography,
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import AddPropertyDialog from "./AddPropertyDialog";
import PropertyDetail from "./PropertyDetail";

async function getPropertyData() {
  const propertyCollection = collection(db, "Properties");
  const propertySnapshot = await getDocs(propertyCollection);
  const propertyList = propertySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return propertyList;
}

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  const handleEditClick = (propertyId) => {
    setSelectedPropertyId(propertyId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    fetchData();
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getPropertyData();
      setProperties(data);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPropertyData();
        setProperties(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddProperty = async (property) => {
    try {
      const docRef = await addDoc(collection(db, "Properties"), property);
      console.log("Property added with ID: ", docRef.id);
      fetchData();
    } catch (error) {
      console.error("Error adding property: ", error);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <div>
      <Button onClick={handleDialogOpen}>Add Property</Button>
      <AddPropertyDialog
        open={dialogOpen}
        handleClose={handleDialogClose}
        handleAddProperty={handleAddProperty}
      />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>{""}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {properties.map((property, index) => (
              <TableRow key={index}>
                <TableCell>{property.name}</TableCell>
                <TableCell>{property.address}</TableCell>
                <TableCell>{property.price}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEditClick(property.id)}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <Dialog open={open} onClose={handleClose}>
              <DialogContent>
                <PropertyDetail
                  propertyId={selectedPropertyId}
                  handleClose={handleClose}
                />
              </DialogContent>
            </Dialog>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default PropertyList;
