import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import axios from 'axios';
import console from 'console';
import $ from 'jquery';
import { useCallback, useState } from 'react';

import styles from './help.module.scss';

type RequestType = {
  prompt: string;
  histories: Array<{ role: 'assistant' | 'user'; msg: string }>;
};

export default function HelpPage() {
  const [history, setHistory] = useState<RequestType['histories']>([]);
  const [message, setMessage] = useState<string>('');
  const [isBotTyping, setBotTyping] = useState<boolean>(false);

  const scrollToBottom = () => {
    const el = document.getElementById('chat-body');

    if (!el) return;

    el.scrollTo(0, el.scrollHeight);
  };

  const sendMessage = useCallback(
    async (e: any) => {
      const currentUserMsg = message;
      setMessage('');

      if (message === '/stop') {
        setHistory([]);
        return;
      }

      //
      console.log(message);

      setHistory((prev) => [
        ...prev,
        {
          role: 'user',
          msg: currentUserMsg,
        },
      ]);

      scrollToBottom();

      await new Promise<void>((res) => setTimeout(() => res(), 2000));
      setBotTyping(true);

      const response = await axios.post(
        'http://localhost:3000/api/llm-chat',
        {
          prompt: message,
          histories: history,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      setBotTyping(false);

      setHistory((prev) => [
        ...prev,
        {
          role: 'assistant',
          msg: response.data,
        },
      ]);

      scrollToBottom();
    },
    [history, message, isBotTyping],
  );

  return (
    <IonPage className={styles['no-scroll']}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Bantuan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        className={`ion-padding ${styles['no-scroll']}`}
        fullscreen
        scrollY={false}
      >
        <div className={styles['chat-body']} id="chat-body">
          <div className={styles['chat-body-inner']}>
            {history.map((message, i) => (
              <div
                className={
                  message.role === 'user'
                    ? `${styles['message']} ${styles['message-out']}`
                    : styles['message']
                }
                key={i}
              >
                <div className={styles['message-avatar']}>
                  <img
                    className={styles['message-avatar-img']}
                    alt=""
                    src="https://offsetcode.com/themes/messenger/2.2.0/assets/img/avatars/11.jpg"
                  />
                </div>
                <div className={styles['message-inner']}>
                  <div className={styles['message-body']}>
                    <div className={styles['message-content']}>
                      <div className={styles['message-text']}>
                        <p>{message.msg}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles['message-footer']}></div>
                </div>
              </div>
            ))}
            {isBotTyping && (
              <div className={styles['message']}>
                <div className={styles['message-avatar']}>
                  <img
                    className={styles['message-avatar-img']}
                    alt=""
                    src="https://offsetcode.com/themes/messenger/2.2.0/assets/img/avatars/11.jpg"
                  />
                </div>
                <div className={styles['message-inner']}>
                  <div className={styles['message-body']}>
                    <div className={styles['message-content']}>
                      <div className={styles['message-text']}>
                        <i>Sedang Mengetik....</i>
                      </div>
                    </div>
                  </div>
                  <div className={styles['message-footer']}></div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles['chat-footer']}>
          <IonGrid>
            <IonRow>
              <IonCol>
                <input
                  type="text"
                  placeholder="Silahka Masukan Pesan"
                  value={message}
                  onInput={(e) => setMessage(e.currentTarget.value)}
                />
              </IonCol>
              <IonCol size="2">
                <IonButton expand="block" onClick={sendMessage}>
                  S
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
}
