import { IonItem, IonLabel, IonList } from '@ionic/react';

export default function SidebarMenu() {
  return (
    <IonList>
      <IonItem button routerLink="/home">
        <IonLabel>Sampahku</IonLabel>
      </IonItem>
      <IonItem button routerLink="/news">
        <IonLabel>Berita Terkini</IonLabel>
      </IonItem>
      <IonItem button routerLink="/help">
        <IonLabel>Bantuan</IonLabel>
      </IonItem>
    </IonList>
  );
}
