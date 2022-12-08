import { Formik } from 'formik';
import React, { useState } from 'react';
import { addClubSchema } from '../../../schemas/club';
import {
  SettingsInput,
  SettingsResponse,
  SettingsSubmitButton,
  SettingsTextarea,
  SettingsTitle,
} from '../components/settingsForm/SettingsForm';
import styles from './addClub.module.scss';
import api from '../../../api';

const InitialValues = {
  ClubName: '',
  ClubMail: '',
  UniversityId: '',
  Description: '',
};

const responseInitial = {
  success: false,
  message: '',
};

const AddClub = () => {
  const [response, setResponse] = useState(responseInitial);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values, actions) => {
    setLoading(true);
    setResponse(responseInitial);
    api.clubs
      .create(values)
      .then((res) => {
        setResponse({ success: true, message: res.data.message });
        actions.resetForm();
      })
      .catch((err) => {
        setResponse({ success: false, message: err.response.data.message.toString() });
      })
      .finally(() => setLoading(false));
  };

  return (
    <main style={styles.main}>
      {/* TİTLE */}
      <SettingsTitle text="Kulüp Ekle" />
      {/* FORM */}
      <Formik
        initialValues={InitialValues}
        validationSchema={addClubSchema}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <div className={styles.form}>
            {/* FORM CONTAİNER */}
            <div className={styles.formContainer}>
              {/* LEFT */}
              <div className={styles.formLeft}>
                <SettingsInput
                  value={formik.values.UniversityId}
                  name="UniversityId"
                  label="Üniversite İsmi"
                  type="text"
                  placeholder="Çukurova Üniversitesi"
                  error={formik.errors.UniversityId}
                  onChange={formik.handleChange}
                />
                <SettingsInput
                  value={formik.values.ClubName}
                  onChange={formik.handleChange}
                  name="ClubName"
                  label="Kulüp İsmi"
                  type="text"
                  placeholder="Okçuluk kulübü"
                  error={formik.errors.ClubName}
                />
              </div>
              {/* RİGHT */}
              <div className={styles.formRight}>
                <SettingsInput
                  value={formik.values.ClubMail}
                  label="Email"
                  type="email"
                  placeholder="hiko@gmail.com"
                  name="ClubMail"
                  onChange={formik.handleChange}
                  error={formik.errors.ClubMail}
                />
              </div>
            </div>
            <SettingsTextarea
              name="Description"
              label="Açıklama"
              value={formik.values.Description}
              onChange={formik.handleChange}
              placeholder="Açıklama Yazınız"
              error={formik.errors.Description}
            />
            <SettingsResponse message={response.message} success={response.success} />
            {/* BUTTON */}
            <SettingsSubmitButton
              disabled={loading}
              style={{ marginTop: '1rem' }}
              type="submit"
              onClick={formik.handleSubmit}
            >
              {loading ? 'Kaydediliyor...' : 'Kaydet'}
            </SettingsSubmitButton>
          </div>
        )}
      </Formik>
    </main>
  );
};

export default AddClub;
