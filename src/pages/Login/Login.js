import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate, Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Form, { FormInput, FormPageWrapper, FormInfo } from '../../components/Form/Form';
import Button from '../../components/Button';

import { Formik } from 'formik';
import api from '../../api';
import { loginSchema } from '../../schemas/auth';
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
    name: 'Userpassword',
    label: 'Password',
    type: 'password',
  },
];

const Login = ({ ...props }) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const initialFormValues = {
    Username: '',
    Userpassword: '',
  };
  const onSaveClick = (values) => {
    api.auth
      .login(values)
      .then((res) => {
        if (res?.data?.success) {
          enqueueSnackbar(res?.data?.message, { variant: 'success' });
          navigate(paths.home.default);
        }
      })
      .catch((err) => {
        enqueueSnackbar(err?.response?.data?.message || 'Beklenmedik bir hata oluştu!', { variant: 'error' });
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
              <Link to={paths.forgotPassword} className="text-sky-500  w-full text-right block mt-2">
                Şifremi unutttum?
              </Link>
              <Button className="w-full mt-5" onClick={formik.handleSubmit} variant="contained">
                Log In
              </Button>
            </div>
            <div>
              <FormInfo>
                Don't have account?
                <Link to={paths.register} className="ml-2 !text-sky-500">
                  Register
                </Link>
              </FormInfo>
            </div>
          </Form>
        )}
      </Formik>
    </FormPageWrapper>
  );
};

export default Login;
