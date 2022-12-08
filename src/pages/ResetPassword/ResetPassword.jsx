import React from 'react'
import Form, { FormInput, FormPageWrapper } from '../../components/Form/Form'
import LockIcon from '@mui/icons-material/Lock';
import Button from '../../components/Button';
const ResetPassword = () => {
    return (
        <FormPageWrapper>
            <Form title='Reset Password'>
                <FormInput icon={LockIcon} name='password' type='password' placeholder='Enter Your new Password' />
                <FormInput icon={LockIcon} name='password' type='password'  placeholder='Enter Your new Password'/>
                <div className='flex justify-center text-center'>
                    <Button
                        variant="contained"
                        style={{
                            width:"40%"
                        }}
                    >
                        Accept
                    </Button>
                </div>
            </Form>
        </FormPageWrapper>
    )
}

export default ResetPassword