import React from "react";
import Tenant from "./Tenant";
import { Grid, Container } from "@mui/material";

function TenantList({ tenants }) {
  return (
    <Container>
      <Grid container spacing={3}>
        {tenants.map((tenant) => (
          <Tenant key={tenant.id} tenant={tenant} />
        ))}
      </Grid>
    </Container>
  );
}

export default TenantList;
