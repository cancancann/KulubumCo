import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import Register3 from '../../asset/Register2.png';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Login = () => {
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState({});
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onSaveClick = () => {
    var data = {
      Username: dataSource?.Username,
      Password: dataSource?.Password,
    };
    axios({ url: 'http://localhost:4000/api/auth/login', data: data, method: 'post' })
      .then((res) => {
        if (res?.data?.success) {
          navigate('/home');
        } else {
          console.log(res);
          enqueueSnackbar('Yanlıs bilgi girdiniz Hata Oluştu!!', { variant: 'error' });
        }
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar(err?.response?.data?.message, { variant: 'error' });
      });
  };
  const dataSourceHandler = (field, value) => {
    setDataSource({ ...dataSource, [field]: value });
  };

  return (
    // En dışı FormPageWrapper ile kaplayacaksın
    <div
      className=" flex content-center items-center justify-center min-h-screen w-full"
      style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${Register3})`,
      }}
    >
      {/*  */}
      <div
        style={{ width: '30%' }}
        className="flex-col items-center justify-center content-center bg-gray-200 font-semibold rounded-2xl  shadow-md shadow-gray-700 px-24 py-12 border-8 border-gray-300 opacity-80"
      >
        <div className="mb-2">
          <h1 className=" flex content-center items-center font-extrabold justify-center">Log In</h1>
        </div>
        <div className="flex items-end justify-center text-center mb-8 w-full">
          <PersonIcon />
          <TextField
            style={{ width: '100%' }}
            // sx={{ input: { color: 'black' } }} // changing font color
            label="Username"
            variant="standard"
            onChange={(e) => dataSourceHandler('Username', e.target.value)}
            value={dataSource?.Username}
          />
        </div>
        <div className="flex items-end justify-center text-center mb-8 w-full">
          <LockIcon />
          <TextField
            style={{ width: '100%' }}
            label="Password"
            variant="standard"
            type="password"
            onChange={(e) => dataSourceHandler('Password', e.target.value)}
            value={dataSource?.Password}
          />
        </div>
        <div>
          <Button
            style={{ borderRadius: '10px', color: 'white', borderColor: 'black', backgroundColor: '#02A28F' }}
            className="w-full"
            onClick={onSaveClick}
            variant="contained"
          >
            Log In
          </Button>
        </div>
        <div>
          <Button
            style={{
              borderRadius: '15px',
              color: 'white',
              borderColor: 'black',
              backgroundColor: '#1A1B22',
              marginTop: '2rem',
            }}
            className="w-full"
            variant="contained"
          >
            Or, sign-in with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
