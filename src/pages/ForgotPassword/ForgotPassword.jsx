import Form, { FormInput, FormPageWrapper } from '../../components/Form/Form';

import EmailIcon from '@mui/icons-material/Email';

import Button from './../../components/Button';

const ForgotPassword = () => {
  return (
    <FormPageWrapper>
      <Form title="Forgot Password?">
        <FormInput icon={EmailIcon} name="email" label="Email address" type="text" />
        <Button
          variant="contained"
          className="w-full"
          style={{
            borderRadius: '10px',
            color: 'white',
            borderColor: 'black',
            backgroundColor: '#02A28F',
            marginTop: '1.5rem',
          }}
          startIcon={<EmailIcon />}
        >
          Send code
        </Button>
      </Form>
    </FormPageWrapper>
  );
};

export default ForgotPassword;
