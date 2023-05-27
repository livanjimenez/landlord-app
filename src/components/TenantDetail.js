import { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../configs/firebaseConfig";
import { TextField, Button } from "@mui/material";

async function getTenant(tenantId) {
  const tenantDoc = doc(db, "Tenants", tenantId);
  const tenantData = await getDoc(tenantDoc);
  return tenantData.data();
}

async function updateTenant(tenantId, tenantData) {
  const tenantDoc = doc(db, "Tenants", tenantId);
  await setDoc(tenantDoc, tenantData);
}

function TenantDetail({ tenantId, handleClose }) {
  const [tenant, setTenant] = useState({});

  const handleChange = (e) => {
    setTenant({ ...tenant, [e.target.name]: e.target.value });
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
      <Button type="submit">Save Changes</Button>
    </form>
  );
}

export default TenantDetail;
