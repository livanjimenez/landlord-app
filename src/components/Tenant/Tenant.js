import { Card, CardContent, Typography, Grid, Box } from "@mui/material";

const Tenant = ({ tenant }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card style={{ margin: 10 }}>
        <Box height={10} bgcolor={tenant.hasPaid ? "green" : "red"} />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h5" component="h2">
                {tenant.name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary">
                Phone: {tenant.phone}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary">
                Email: {tenant.email}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="p">
                Address: {tenant.address}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Tenant;
