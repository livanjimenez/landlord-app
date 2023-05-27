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

async function addTenant(tenantData) {
  const tenantCollection = collection(db, "Tenants");
  await addDoc(tenantCollection, tenantData);
}

function AddTenantDialog({ open, handleClose }) {
  const [tenantData, setTenantData] = useState({
    name: "",
    email: "",
    leaseStart: "",
    leaseEnd: "",
  });

  const handleChange = (e) => {
    setTenantData({ ...tenantData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTenant(tenantData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Tenant</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Name"
            value={tenantData.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="email"
            label="Email"
            value={tenantData.email}
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

export default AddTenantDialog;
