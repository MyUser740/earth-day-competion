import { IonList, IonItem, IonLabel } from '@ionic/react';

export default function SidebarMenu() {
  return (
    <IonList>
      <IonItem button>
        <IonLabel>Sampahku</IonLabel>
      </IonItem>
      <IonItem button>
        <IonLabel>Berita Terkini</IonLabel>
      </IonItem>
      <IonItem button>
        <IonLabel>Pengaturan</IonLabel>
      </IonItem>
      <IonItem button>
        <IonLabel>Bantuan</IonLabel>
      </IonItem>
    </IonList>
  );
}
