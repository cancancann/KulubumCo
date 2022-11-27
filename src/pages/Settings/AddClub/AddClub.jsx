import React from 'react'
import { SettingsInput, SettingsPhoneSelect, SettingsSubmitButton, SettingsTitle } from '../components/settingsForm/SettingsForm';
import styles from './addClub.module.scss';


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


const AddClub = () => {
    return (
        <main style={styles.main}>
            {/* TİTLE */}
            <SettingsTitle text='Kulüp Ekle' />
            {/* FORM */}
            <form className={styles.form}>
                {/* FORM CONTAİNER */}
                <div className={styles.formContainer}>
                    {/* LEFT */}
                    <div className={styles.formLeft}>
                        <SettingsInput label='Üniversite İsmi' type='text' placeholder='Çukurova Üniversitesi' />
                        <SettingsInput label='Kulüp İsmi' type='text' placeholder='Okçuluk kulübü' />
                        <SettingsInput label='Kulüpteki Rolünüz' type='text' placeholder='Kulüp Başkanı' />
                        <SettingsInput label='Kulüpteki Rolünüzü Kanıtlayacak Belge' type='text' placeholder='Dosyanızı buraya sürükleyin ve seçin.' />
                    </div>
                    {/* RİGHT */}
                    <div className={styles.formRight}>
                        <SettingsInput label='Email' type='email' placeholder='hiko@gmail.com' />
                        <SettingsPhoneSelect label='Phone Number' options={phones} placeholder='5315231331'  />
                    </div>
                </div>
                {/* BUTTON */}
                <SettingsSubmitButton>Save</SettingsSubmitButton>
            </form>
        </main>
    )
}


export default AddClub