import React from 'react';
import {
  SettingsInput,
  SettingsPhoneSelect,
  SettingsSelect,
  SettingsSubmitButton,
  SettingsTitle,
} from '../components/settingsForm/SettingsForm';
import styles from './profile.module.scss';

const ProfileSettings = () => {
  return (
    <main className={styles.profile}>
      {/* Title */}
      <div className={styles.profileTitle}>
        <SettingsTitle text="Edit Profile" />
        <p>Last update August 1</p>
      </div>
      {/* Form */}

      <form className={styles.form}>
        {/* Container */}
        <div className={styles.formContainer}>
          {/* Left side */}
          <div className={styles.formLeft}>
            {/* firstname surname container */}
            <div className={styles.formLeftRow}>
              <SettingsInput label="Firstname" placeholder="Enter your name" value="Hikmet can" />
              <SettingsInput label="Lastname" placeholder="Enter your lastname" />
            </div>
            {/* university and dateOfBirth */}
            <SettingsSelect label="University" options={universities} />

            <SettingsInput label="Birthdate" placeholder="Your birthday" type="date" />
          </div>
          {/* Right side */}
          <div className={styles.formRight}>
            <SettingsInput label="Email" placeholder="Enter your email" type="email" />
            <SettingsPhoneSelect label="Phone number" options={phones} placeholder="Enter your number" />
            <SettingsSelect label="Department" options={universities} />
          </div>
        </div>
        {/* Button */}
        <SettingsSubmitButton disabled>Save</SettingsSubmitButton>
      </form>
    </main>
  );
};

export default ProfileSettings;

const universities = [
  {
    value: 1,
    text: 'Cukurova University',
  },
  {
    value: 2,
    text: 'Legacy University',
  },
  {
    value: 3,
    text: 'Mersin University',
  },
  {
    value: 4,
    text: 'Adana University',
  },
];

const phones = [
  {
    text: '+90',
    value: '+90',
  },
  {
    text: '+500',
    value: '+500',
  },
  {
    text: '+1',
    value: '+1',
  },
  {
    text: '+20',
    value: '+20',
  },
];
