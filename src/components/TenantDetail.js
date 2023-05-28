import { useState, useEffect } from "react";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../configs/firebaseConfig";
import { TextField, Button } from "@mui/material";

async function getTenant(tenantId) {
  const tenantDoc = doc(db, "Tenants", tenantId);
  const tenantData = await getDoc(tenantDoc);
  if (tenantData.exists()) {
    const data = tenantData.data();
    return {
      ...data,
      leaseStart: data.leaseStart.toDate(),
      leaseEnd: data.leaseEnd.toDate(),
    };
  } else {
    throw new Error("Tenant not found");
  }
}

async function updateTenant(tenantId, tenantData) {
  const tenantDoc = doc(db, "Tenants", tenantId);
  const tenantDataToSend = {
    ...tenantData,
    leaseStart: Timestamp.fromDate(tenantData.leaseStart),
    leaseEnd: Timestamp.fromDate(tenantData.leaseEnd),
  };
  await setDoc(tenantDoc, tenantDataToSend);
}

function TenantDetail({ tenantId, handleClose }) {
  const [tenant, setTenant] = useState({
    name: "",
    email: "",
    leaseStart: null,
    leaseEnd: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "leaseStart" || e.target.name === "leaseEnd") {
      setTenant({ ...tenant, [e.target.name]: new Date(e.target.value) });
    } else {
      setTenant({ ...tenant, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTenant(tenantId, tenant);
    handleClose();
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTenant(tenantId);
      setTenant(data);
    };

    fetchData();
  }, [tenantId]);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="name"
        label="Name"
        value={tenant.name || ""}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="email"
        label="Email"
        value={tenant.email || ""}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="leaseStart"
        label="Lease Start"
        type="date"
        value={
          tenant.leaseStart ? tenant.leaseStart.toISOString().split("T")[0] : ""
        }
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="leaseEnd"
        label="Lease End"
        type="date"
        value={
          tenant.leaseEnd ? tenant.leaseEnd.toISOString().split("T")[0] : ""
        }
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit">Save Changes</Button>
    </form>
  );
}

export default TenantDetail;
