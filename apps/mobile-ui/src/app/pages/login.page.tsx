import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonList,
  IonPage,
} from '@ionic/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { WifiLoader } from "react-awesome-loaders";

import style from './login.module.scss';

const apiUrl: string =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000';

export default function LoginPage() {
  const [loginState, setLoginState] = useState<
    'start' | 'loading' | 'register' | 'email-confirm'
  >('start');
  const [preLoadingHeight, setPreLoadingHeight] = useState(287.391);
  const history = useHistory();

  return (
    <IonPage>
      <IonContent fullscreen>
        <section className={style['back-img']}></section>
        {loginState === 'start' && (
          <section className={style['loginform']}>
            <div className={style['form'] + ' ion-margin'}>
              <h1>Selamat Datang</h1>
              <p>Silahkan masukan NIK Anda</p>
              <br />
              <IonList>
                <IonItem className="ion-margin">
                  <IonInput
                    label="NIK"
                    labelPlacement="floating"
                    placeholder="NIK Anda"
                  ></IonInput>
                </IonItem>
                <IonButton
                  expand="block"
                  className="ion-margin"
                  onClick={() => {
                    setLoginState('loading');

                    setTimeout(() => {
                      setLoginState('register');
                    }, 4000);
                  }}
                >
                  Lanjut
                </IonButton>
              </IonList>
            </div>
          </section>
        )}
        {loginState === 'loading' && (
          <motion.section
            initial={{ height: preLoadingHeight }}
            animate={{ height: 98 }}
            transition={{ ease: 'easeInOut', duration: 2 }}
            className={style['loginform']}
          >
            <motion.h1
              initial={{
                opacity: 0,
                position: 'relative',
                top: '50%',
                transform: 'translate(30%, -110%)',
              }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 1, delay: 2 }}
            >
              Mohon Tunggu
            </motion.h1>
          </motion.section>
        )}
        {loginState === 'register' && (
          <motion.section
            initial={{ height: 98 }}
            animate={{ height: 451.391 }}
            transition={{ ease: 'easeInOut', duration: 2, delay: 1 }}
            className={style['loginform']}
          >
            <motion.h1
              initial={{
                opacity: 1,
                position: 'relative',
                top: '50%',
                transform: 'translate(30%, -110%)',
              }}
              animate={{ opacity: 0, display: 'none' }}
              transition={{ ease: 'easeInOut', duration: 1 }}
            >
              Mohon Tunggu
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 1, delay: 3 }}
              className={style['form'] + ' ion-margin'}
            >
              <h1>Registrasi Akun</h1>
              <p>
                Silahkan masukan email Anda serta kata sandi yangAnda inginkan
              </p>
              <br />
              <IonList>
                <IonItem className="ion-margin">
                  <IonInput
                    label="Email"
                    labelPlacement="floating"
                    placeholder="Email Anda"
                  ></IonInput>
                </IonItem>
                <IonItem className="ion-margin">
                  <IonInput
                    label="Kata Sandi"
                    labelPlacement="floating"
                    placeholder="Kata Sandi"
                    type="password"
                  ></IonInput>
                </IonItem>
                <IonItem className="ion-margin">
                  <IonInput
                    label="Konfirmasi Kata Sandi"
                    labelPlacement="floating"
                    placeholder="Konfirmasi Kata Sandi"
                    type="password"
                  ></IonInput>
                </IonItem>
                <IonButton
                  expand="block"
                  className="ion-margin"
                  onClick={() => {
                    setPreLoadingHeight(451.391);
                    setLoginState('loading');

                    setTimeout(() => {
                      setLoginState('email-confirm');
                    }, 4000);
                  }}
                >
                  Lanjut
                </IonButton>
              </IonList>
            </motion.div>
          </motion.section>
        )}
        {loginState === 'email-confirm' && (
          <motion.section
            initial={{ height: 98 }}
            animate={{ height: 370.984 }}
            transition={{ ease: 'easeInOut', duration: 2, delay: 1 }}
            className={style['loginform']}
          >
            <motion.h1
              initial={{
                opacity: 1,
                position: 'relative',
                top: '50%',
                transform: 'translate(30%, -110%)',
              }}
              animate={{ opacity: 0, display: 'none' }}
              transition={{ ease: 'easeInOut', duration: 1 }}
            >
              Mohon Tunggu
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 1, delay: 3 }}
              className={style['form'] + ' ion-margin'}
            >
              <h1>Konfirmasi Email</h1>
              <p>Kita sudah mengirimkan kode verifikasi ke email Anda</p>
              <br />
              <IonList>
                <IonItem className="ion-margin">
                  <IonInput
                    label="Kode Verifikasi"
                    labelPlacement="floating"
                    placeholder="Kode Verifikasi"
                  ></IonInput>
                </IonItem>
                <IonButton
                  expand="block"
                  className="ion-margin"
                  onClick={() => {
                    setPreLoadingHeight(370.984);
                    setLoginState('loading');

                    setTimeout(() => {
                      history.push('/home');
                    }, 5000);
                  }}
                >
                  Lanjut
                </IonButton>
                <IonButton
                  expand="block"
                  className="ion-margin"
                  color="tertiary"
                  onClick={() => {
                    setPreLoadingHeight(370.984);
                    setLoginState('loading');
                    setTimeout(() => {
                      setLoginState('email-confirm');
                    }, 4000);
                  }}
                >
                  Kirim Ulang
                </IonButton>
              </IonList>
            </motion.div>
          </motion.section>
        )}
      </IonContent>
    </IonPage>
  );
}
