import React, {useState} from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');


    const handleRegister = async () => {
        if(password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('/api/register', {email, password});
            setMessage('Registration succesfully');
        } catch (error) {
            setMessage('Registration failed');
        }
    };


    return (
        <Container>
          <Typography variant="h4">Register</Typography>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <TextField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
          />
          <Button onClick={handleRegister} variant="contained" color="primary">
            Register
          </Button>
          {message && <Typography>{message}</Typography>}
        </Container>
      );

};

export default Register;