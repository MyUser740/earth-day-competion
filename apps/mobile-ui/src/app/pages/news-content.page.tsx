import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonPopover,
  IonRow,
  IonText,
  IonTextarea,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import EmojiPicker from 'emoji-picker-react';

import style from './news-content.module.scss';

export default function NewsContent() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Isi Berita</IonTitle>
          <IonButtons slot="end">
            <IonButton>Bagikan</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <div className={style['news-thumbnail']}>
          <img
            alt="testing only"
            src="https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_wired.png,fl_progressive,g_face,h_1080,q_80,w_1920/v1653072271/wired_wired-news-and-science-the-trash-cycle.jpg"
          />
        </div>
        <h1 className={style['news-title']}>
          <IonLabel>Lorem Ipsum</IonLabel>
        </h1>
        <p className={style['news-content']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          cupiditate accusantium, nostrum, laudantium distinctio explicabo non
          ipsum fugiat repellendus officia facilis ipsam, magnam asperiores
          debitis? Deserunt, nulla. Provident, recusandae doloremque.
        </p>
        <hr />
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Komentar</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton fill="outline" expand="block" shape="round" size="small">
              Tambahkan Komentar
            </IonButton>
            <IonItem>
              <IonThumbnail>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                />
              </IonThumbnail>
              <div style={{ marginLeft: '10px', maxWidth: '185px' }}>
                <h2>
                  <IonLabel style={{ fontWeight: 'bold' }}>@Username</IonLabel>
                  <IonText>Wah bagus! gdcfgdfgdfdfgdfgsdfsdfsdfsdfsdf</IonText>
                </h2>
              </div>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
