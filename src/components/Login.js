import { Button, TextField, Grid, Typography } from "@mui/material";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../configs/firebaseConfig";
import { doc, setDoc, getFirestore } from "firebase/firestore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        provider: user.providerData[0].providerId,
      });
      alert("Login success!");
    } catch (error) {
      alert("Error logging in!");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await signInWithPopup(
        auth,
        new GoogleAuthProvider()
      );
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        provider: user.providerData[0].providerId,
      });
      alert("Login success!");
    } catch (error) {
      alert("Error logging in!");
    }
  };

  // TODO: Add logic for user sign up

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography variant="h4">Login</Typography>
      {/* <TextField label="Email" value={email} onChange={handleEmailChange} />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button onClick={handleLogin}>Login</Button> */}
      <Button onClick={handleGoogleLogin}>Login with Google</Button>
    </Grid>
  );
}
