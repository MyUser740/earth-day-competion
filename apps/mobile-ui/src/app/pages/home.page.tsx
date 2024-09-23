import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Sampahku</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonCard>
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
          <IonCardHeader>
            <IonCardTitle>Rumah</IonCardTitle>
            <IonCardSubtitle>
              Jalan Sultan Agung No. 4, Bandung, Jawa Barat
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Deskripsi tidak tersedia.</IonCardContent>

          <IonButton fill="clear" routerLink="/dashboard/1">
            Tinjau Data
          </IonButton>
        </IonCard>
        <IonCard>
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
          <IonCardHeader>
            <IonCardTitle>Kantor (#1)</IonCardTitle>
            <IonCardSubtitle>
              Jalan Sultan Agung No. 4, Bandung, Jawa Barat
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Deskripsi tidak tersedia.</IonCardContent>
          <IonButton fill="clear" routerLink="/dashboard/2">
            Tinjau Data
          </IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
