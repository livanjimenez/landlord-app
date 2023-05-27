import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
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
import AddTenantDialog from "./AddTenantDialog";
import TenantDetail from "./TenantDetail";

async function getTenantData() {
  const tenantCollection = collection(db, "Tenants");
  const tenantSnapshot = await getDocs(tenantCollection);
  const tenantList = tenantSnapshot.docs.map((doc) => doc.data());
  return tenantList;
}

function TenantList() {
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const [selectedTenantId, setSelectedTenantId] = useState(null);

  const handleEditClick = (tenantId) => {
    setSelectedTenantId(tenantId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      const data = await getTenantData();
      setTenants(data);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTenantData();
        setTenants(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleDialogOpen}>
        Add Tenant
      </Button>
      <AddTenantDialog open={dialogOpen} handleClose={handleDialogClose} />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Lease Start</TableCell>
              <TableCell>Lease End</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tenants.map((tenant, index) => (
              <TableRow key={index}>
                <TableCell>{tenant.name}</TableCell>
                <TableCell>{tenant.email}</TableCell>
                <TableCell>
                  {new Date(tenant.leaseStart).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(tenant.leaseEnd).toLocaleDateString()}
                </TableCell>
                <Button onClick={() => handleEditClick(tenant.id)}>Edit</Button>
              </TableRow>
            ))}
            <Dialog open={open} onClose={handleClose}>
              <DialogContent>
                <TenantDetail
                  tenantId={selectedTenantId}
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

export default TenantList;
