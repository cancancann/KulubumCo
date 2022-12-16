import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

import EmailIcon from '@mui/icons-material/Email';
import PeopleIcon from '@mui/icons-material/People';

import Button from '../../components/Button';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';
import Form, { FormInput, FormInfo, FormControl, FormPageWrapper } from '../../components/Form/Form';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { registerSchema } from '../../schemas/auth';
import api from '../../api';
import paths from '../../Router/paths';
import { useFormUniversities } from '../../context/dataContext';

// İnline style Login klasorunun altında css file eklenecek

const initialFormValues = {
  Username: '',
  Userpassword: '',
  Email: '',
  PasswordConfirm: '',
  Universite: '',
};

const Register = ({ ...props }) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const universityOptions = useFormUniversities();

  const onSaveClick = (values) => {
    const body = {
      Username: values.Username,
      Userpassword: values.Userpassword,
      Email: values.Email,
      Universite: values.Universite,
    };
    api.auth
      .register(body)
      .then((res) => {
        if (res?.data?.success) {
          enqueueSnackbar(res?.data?.message, { variant: 'success' });
          navigate(paths.home.default);
        }
      })
      .catch((err) => {
        enqueueSnackbar(err?.response?.data?.message, { variant: 'error' });
      });
  };

  return (
    <FormPageWrapper>
      <Formik
        initialValues={initialFormValues}
        onSubmit={onSaveClick}
        validateOnChange={false}
        validationSchema={registerSchema}
        enableReinitialize
      >
        {(formik) => (
          <Form title="Register">
            <FormInput
              value={formik.values.Username}
              onChange={formik.handleChange}
              name="Username"
              error={formik.errors.Username}
              helperText={formik.errors.Username}
              type="text"
              icon={PersonIcon}
              placeholder="Enter your Username"
            />

            <FormInput
              value={formik.values.Email}
              onChange={formik.handleChange}
              name="Email"
              error={formik.errors.Email}
              helperText={formik.errors.Email}
              type="email"
              icon={EmailIcon}
              placeholder="Enter your Email"
            />

            <FormInput
              value={formik.values.Userpassword}
              onChange={formik.handleChange}
              name="Userpassword"
              error={formik.errors.Userpassword}
              helperText={formik.errors.Userpassword}
              type="password"
              icon={LockIcon}
              placeholder="Enter your Password"
            />

            <FormInput
              value={formik.values.PasswordConfirm}
              onChange={formik.handleChange}
              name="PasswordConfirm"
              error={formik.errors.PasswordConfirm}
              helperText={formik.errors.PasswordConfirm}
              type="password"
              icon={LockIcon}
              placeholder="Şifreyi Tekrar Gİriniz.."
            />

            <FormControl
              label="Universite"
              name="Universite"
              icon={PeopleIcon}
              items={universityOptions}
              error={formik.errors.Universite}
              onChange={(e) => formik.setFieldValue('Universite', e.target.value)}
            />

            <Button className="w-full opacity-100" onClick={formik.handleSubmit} variant="contained" type="submit">
              {formik.isSubmitting ? 'Submitting...' : 'Register'}
            </Button>
            <FormInfo>
              Already have account?
              <Link to={paths.login} className="ml-2 text-sky-500">
                Login
              </Link>
            </FormInfo>
          </Form>
        )}
      </Formik>
    </FormPageWrapper>
  );
};

export default Register;
