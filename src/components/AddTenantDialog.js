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
import { collection, addDoc, Timestamp } from "firebase/firestore";

async function addTenant(tenantData) {
  const tenantCollection = collection(db, "Tenants");
  await addDoc(tenantCollection, tenantData);
}

function AddTenantDialog({ open, handleClose }) {
  const [tenantData, setTenantData] = useState({
    name: "",
    email: "",
    leaseStart: null,
    leaseEnd: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "leaseStart" || e.target.name === "leaseEnd") {
      setTenantData({
        ...tenantData,
        [e.target.name]: new Date(e.target.value),
      });
    } else {
      setTenantData({ ...tenantData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tenantDataToSend = {
      ...tenantData,
      leaseStart: Timestamp.fromDate(tenantData.leaseStart),
      leaseEnd: Timestamp.fromDate(tenantData.leaseEnd),
    };
    await addTenant(tenantDataToSend);
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
          <TextField
            name="leaseStart"
            // label="Lease Start"
            type="date"
            value={
              tenantData.leaseStart
                ? tenantData.leaseStart.toISOString().split("T")[0]
                : ""
            }
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="leaseEnd"
            // label="Lease End"
            type="date"
            value={
              tenantData.leaseEnd
                ? tenantData.leaseEnd.toISOString().split("T")[0]
                : ""
            }
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
