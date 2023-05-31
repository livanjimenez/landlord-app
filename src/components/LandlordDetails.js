import { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography, Button, Box } from "@mui/material";
import AddTenantDialog from "./AddTenantDialog";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../configs/firebaseConfig";

const LandlordDetails = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getTenantData() {
    const tenantCollection = collection(db, "Tenants");
    const tenantSnapshot = await getDocs(tenantCollection);
    const tenantList = tenantSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return tenantList;
  }

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

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs md={4}>
          <Paper>
            <Box p={2}>
              <Typography variant="h6">Payments</Typography>
              <Typography variant="body1">
                (some payment data, will add later)
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs md={4}>
          <Paper>
            <Box p={2}>
              <Typography variant="h6">Properties</Typography>
              <Typography variant="body1">(number of units)</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs md={4}>
          <Paper>
            <Box p={2}>
              <Typography variant="h6">Tenants</Typography>
              <Typography variant="body1">
                Number of tenants: {tenants.length}
              </Typography>
              <Button onClick={handleDialogOpen}>Add Tenant</Button>
              <AddTenantDialog
                open={dialogOpen}
                handleClose={handleDialogClose}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandlordDetails;
