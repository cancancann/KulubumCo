import React from 'react';
import { SettingsInput, SettingsSubmitButton, SettingsTitle } from '../components/settingsForm/SettingsForm';

const PasswordSecurity = () => {
  return (
    <main>
      <SettingsTitle text="Change password" />
      <form>
        <SettingsInput label="Current Password" />
        <SettingsInput label="New Password" />
        <SettingsInput label="Password Confirm" />
        <SettingsSubmitButton disabled>Change Password</SettingsSubmitButton>
      </form>
    </main>
  );
};

export default PasswordSecurity;
