import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import EmailIcon from '@mui/icons-material/Email';
import PeopleIcon from '@mui/icons-material/People';

import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';
import Form, { FormInput, FormInfo, FormControl, FormPageWrapper } from '../../components/Form/Form';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { registerSchema } from '../../schemas/auth';
import api from '../../api';

// İnline style Login klasorunun altında css file eklenecek

const initialFormValues = {
  Username: '',
  Password: '',
  Email: '',
  PasswordConfirm: '',
  BirthOfDate: '',
  Gender: '',
  University: '',
  Department: '',
};

const Register = ({ ...props }) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const onSaveClick = async (values) => {
    api.auth
      .register(values)
      .then((res) => {
        if (res?.data?.success) {
          enqueueSnackbar(res?.data?.message, { variant: 'success' });
          navigate('/home');
        }
      })
      .catch((err) => {
        enqueueSnackbar('Kayıtta Hata Oluştu!!', { variant: 'error' });
        enqueueSnackbar(err?.response?.data?.message, { variant: 'error' });
      });
  };

  return (
    <FormPageWrapper>
      <Formik initialValues={initialFormValues} onSubmit={onSaveClick} validationSchema={registerSchema}>
        {(formik) => (
          <Form title="Register">
            {inputs.map((input, key) => (
              <FormInput
                key={key}
                {...input}
                onChange={formik.handleChange}
                value={formik.values[input.name]}
                error={formik.errors[input.name]}
                helperText={formik.errors[input.name]}
              />
            ))}

            <FormControl
              label="Gender"
              name="Gender"
              error={formik.errors.Gender}
              icon={PeopleIcon}
              items={genderOptions}
              onChange={(e) => formik.setFieldValue('Gender', e.target.value)}
            />
            <FormControl
              label="University"
              name="University"
              icon={PeopleIcon}
              items={universityOptions}
              error={formik.errors.University}
              onChange={(e) => formik.setFieldValue('University', e.target.value)}
            />
            <FormControl
              label="Department"
              name="Department"
              icon={PeopleIcon}
              items={departmentOptions}
              onChange={(e) => formik.setFieldValue('Department', e.target.value)}
            />

            <Button
              style={{ borderRadius: '10px', color: 'black', borderColor: 'black', backgroundColor: '#02A28F' }}
              className="w-full opacity-100"
              onClick={formik.handleSubmit}
              variant="contained"
            >
              {formik.isSubmitting ? 'Submitting...' : 'Register'}
            </Button>
            <FormInfo>
              Already have account?
              <Link to="/login" className="ml-2 text-sky-500">
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
  {
    icon: LockIcon,
    name: 'PasswordConfirm',
    label: 'PasswordConfirm',
    type: 'password',
  },
  {
    icon: EmailIcon,
    name: 'Email',
    label: 'Email',
    type: 'email',
  },
  {
    icon: CalendarMonthIcon,
    name: 'BirthOfDate',
    label: 'Doğum tarihi',
    type: 'date',
  },
];

const genderOptions = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
];
const universityOptions = [
  {
    value: 'CU',
    label: 'Cukurova University',
  },

  {
    value: 'ITU',
    label: 'Istanbul Technic University',
  },
  {
    value: 'ODTU',
    label: ' Middle East Technic University',
  },
];
const departmentOptions = [
  {
    value: 'CENG',
    label: 'Computer Engineering',
  },

  {
    value: 'EEENG',
    label: 'Electric Electronic Engineering',
  },
  {
    value: 'MENG',
    label: ' Mechanic Engineering',
  },
];
