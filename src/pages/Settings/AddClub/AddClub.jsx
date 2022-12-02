import { Formik } from 'formik';
import React from 'react';
import { addClubSchema } from '../../../schemas/club';
import {
  SettingsInput,
  SettingsSubmitButton,
  SettingsTextarea,
  SettingsTitle,
} from '../components/settingsForm/SettingsForm';
import styles from './addClub.module.scss';
import axios from 'axios';

const InitialValues = {
  ClubName: '',
  ClubMail: '',
  UniversityId: '',
  Description: ''
}

const AddClub = () => {

  const handleSubmit = (values) => {
    axios.post('http://localhost:4000/api/club/',{...values}).then((res)=>{console.log(res.data)}).catch((err)=>{console.log(err.response)})
  }


  return (
    <main style={styles.main}>
      {/* TİTLE */}
      <SettingsTitle text="Kulüp Ekle" />
      {/* FORM */}
      <Formik initialValues={InitialValues} validationSchema={addClubSchema} onSubmit={handleSubmit} >
        {(formik) => (
          <div className={styles.form}>
            {/* FORM CONTAİNER */}
            <div className={styles.formContainer}>
              {/* LEFT */}
              <div className={styles.formLeft}>
                <SettingsInput
                  value={formik.values.UniversityId}
                  name='UniversityId'
                  label="Üniversite İsmi"
                  type="text"
                  placeholder="Çukurova Üniversitesi"
                  onChange={formik.handleChange} />
                <SettingsInput
                  value={formik.values.ClubName}
                  onChange={formik.handleChange}
                  name='ClubName'
                  label="Kulüp İsmi"
                  type="text"
                  placeholder="Okçuluk kulübü" />
              </div>
              {/* RİGHT */}
              <div className={styles.formRight}>
                <SettingsInput
                  value={formik.values.ClubMail}
                  label="Email"
                  type="email"
                  placeholder="hiko@gmail.com"
                  name='ClubMail'
                  onChange={formik.handleChange} />
              </div>
            </div>
            <SettingsTextarea
              name='Description'
              label='Açıklama'
              value={formik.values.Description}
              onChange={formik.handleChange}
              placeholder='Açıklama Yazınız'
            />
            {/* BUTTON */}
              <SettingsSubmitButton style={{marginTop:'1rem'}} type='submit' onClick={formik.handleSubmit}>Save</SettingsSubmitButton>
          </div>
        )}

      </Formik>
    </main>
  );
};

export default AddClub;
