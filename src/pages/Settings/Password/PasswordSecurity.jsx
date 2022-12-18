import { useFormik } from 'formik';
import React from 'react';
import { SettingsInput, SettingsSubmitButton, SettingsTitle } from '../components/settingsForm/SettingsForm';
import { changePasswordSchema } from '../../../schemas/auth';
import api from '../../../api';
import { useSnackbar } from 'notistack';
import { useAuth } from '../../../context/authContext';

const PasswordSecurity = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { invalidateCookie } = useAuth();

  const formik = useFormik({
    validateOnChange: true,
    validationSchema: changePasswordSchema,
    initialValues: { oldPassword: '', newPassword: '', newPasswordConfirm: '' },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      api.user
        .changePassword(values)
        .then(() => {
          enqueueSnackbar('Şifre değiştirme işlemi başarılı!', { variant: 'success' });
          invalidateCookie();
          resetForm();
        })
        .catch((e) => enqueueSnackbar(e.response.data?.message || 'Beklenmedik bir hata oluştu!', { variant: 'error' }))
        .finally(() => setSubmitting(false));
    },
  });

  return (
    <main>
      <SettingsTitle text="Change password" />
      <form onSubmit={formik.handleSubmit} style={{ marginBottom: '1rem' }}>
        <SettingsInput
          value={formik.values.oldPassword}
          error={formik.errors.oldPassword}
          name="oldPassword"
          onChange={formik.handleChange}
          label="Current Password"
          type="password"
        />
        <SettingsInput
          value={formik.values.newPassword}
          error={formik.errors.newPassword}
          name="newPassword"
          onChange={formik.handleChange}
          label="New Password"
          type="password"
        />
        <SettingsInput
          value={formik.values.newPasswordConfirm}
          name="newPasswordConfirm"
          error={formik.errors.newPasswordConfirm}
          onChange={formik.handleChange}
          label="Password Confirm"
          type="password"
        />
        <SettingsSubmitButton type="submit" disabled={formik.isSubmitting || !formik.isValid}>
          Change Password
        </SettingsSubmitButton>
      </form>
    </main>
  );
};

export default PasswordSecurity;
