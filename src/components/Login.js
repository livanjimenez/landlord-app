import { Button, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../configs/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleLogin = async () => {
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(
  //       auth,
  //       email,
  //       password,
  //     );
  //     const user = userCredential.user;
  //     await setDoc(doc(db, 'users', user.uid), {
  //       uid: user.uid,
  //       name: user.displayName,
  //       email: user.email,
  //       provider: user.providerData[0].providerId,
  //     });

  //     navigate('/app');
  //   } catch (error) {
  //     setError('Unable to successfully Login');
  //   }
  // };

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await signInWithPopup(
        auth,
        new GoogleAuthProvider(),
      );
      const user = userCredential.user;
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        provider: user.providerData[0].providerId,
      });

      navigate('/app');
    } catch (error) {
      setError('Unable to successfully Login');
    }
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography variant="h4">Login</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <Button onClick={handleGoogleLogin}>Login with Google</Button>
    </Grid>
  );
}
