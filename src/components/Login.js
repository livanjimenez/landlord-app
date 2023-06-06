import { Button, Grid, Typography, Paper, Box } from '@mui/material';
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
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{
        minHeight: '100vh',
        padding: '20px',
        marginTop: '20%',
        overflow: 'hidden',
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Box maxWidth={400}>
        <Paper elevation={12} style={{ padding: '20px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Please Login using your Gmail 😄
          </Typography>
          {error && (
            <Typography color="error" align="center">
              {error}
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleGoogleLogin}
          >
            Login with Google
          </Button>
        </Paper>
      </Box>
    </Grid>
  );
}
