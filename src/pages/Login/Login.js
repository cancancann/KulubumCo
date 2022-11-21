import Button from '@mui/material/Button';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Form, { FormInput, FormPageWrapper } from '../../components/Form/Form';
import { Formik } from 'formik';
import api from '../../api';
import { loginSchema } from '../../schemas/auth';
import ColoredLine from '../../components/ColoredLine/ColoredLine';
import GoogleIcon from '@mui/icons-material/Google';
import paths from '../../Router/paths';

const inputs = [
  {
    icon: PersonIcon,
    name: 'Username',
    label: 'Username',
    type: 'text',
  },
  {
    icon: LockIcon,
    name: 'Password',
    label: 'Password',
    type: 'password',
  },
];

const Login = ({ ...props }) => {
  const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const initialFormValues = {
    Username: '',
    Password: '',
  };
  const onSaveClick = async (values) => {
    api.auth
      .login(values)
      .then((res) => {
        if (res?.data?.success) {
          enqueueSnackbar(res?.data?.message, { variant: 'success' });
          navigate(paths.home.default);
        }
      })
      .catch((err) => {
        enqueueSnackbar('Giriş Hatalı !!', { variant: 'error' });
        enqueueSnackbar(err?.response?.data?.message, { variant: 'error' });
      });
  };

  return (
    // En dışı FormPageWrapper ile kaplayacaksın
    <FormPageWrapper>
      <Formik initialValues={initialFormValues} onSubmit={onSaveClick} validationSchema={loginSchema}>
        {(formik) => (
          <Form title="Log In">
            {inputs.map((input, key) => (
              <FormInput
                key={key}
                {...input}
                onChange={formik.handleChange}
                value={formik.values[input.name]}
                error={formik.errors[input.name]}
                helperText={formik.errors[input.name]}
                style={{ marginTop: '1.5rem' }}
              />
            ))}
            <div>
              <Button
                style={{
                  borderRadius: '10px',
                  color: 'white',
                  borderColor: 'black',
                  backgroundColor: '#02A28F',
                  marginTop: '1.5rem',
                }}
                className="w-full"
                onClick={formik.handleSubmit}
                variant="contained"
              >
                Log In
              </Button>
            </div>
            <ColoredLine text="Or" />
            <div>
              <Button
                style={{
                  borderRadius: '15px',
                  color: 'white',
                  borderColor: 'black',
                  backgroundColor: '#1A1B22',
                  marginTop: '1rem',
                }}
                className="w-full"
                variant="contained"
                startIcon={<GoogleIcon />}
              >
                sign-in with Google
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </FormPageWrapper>
  );
};

export default Login;
