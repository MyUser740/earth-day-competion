import {
  IonBadge,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonRow,
  IonSearchbar,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import style from './news-search.module.scss';

export default function NewSearch() {
  const history = useHistory<{ q: string; id: number }>();
  const viewContent = useCallback(
    (id: number) => history.push(`/news-content`, { id: id } as any),
    [history],
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Pencarian Berita</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonSearchbar
                placeholder="Cari Berita di Sini"
                value={
                  history.location.state ? history.location.state.q || '' : ''
                }
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonList>
              <IonItem>
                <IonThumbnail slot="end" className={style['news-img']}>
                  <img
                    alt="Silhouette of mountains"
                    src="https://ionicframework.com/docs/img/demos/card-media.png"
                  />
                </IonThumbnail>
                <div className={style['news-title']}>
                  <IonBadge>INFORMASI</IonBadge>
                  <IonLabel>Lomba Recycle Kota Bandung</IonLabel>
                  <IonButton onClick={() => viewContent(1)}>Lihat</IonButton>
                </div>
              </IonItem>
              <IonItem>
                <IonThumbnail slot="end" className={style['news-img']}>
                  <img
                    alt="Silhouette of mountains"
                    src="https://ionicframework.com/docs/img/demos/card-media.png"
                  />
                </IonThumbnail>
                <div className={style['news-title']}>
                  <IonBadge>INFORMASI</IonBadge>
                  <IonLabel>Lomba Recycle Kota Bandung</IonLabel>
                  <IonButton>Lihat</IonButton>
                </div>
              </IonItem>
              <IonItem>
                <IonThumbnail slot="end" className={style['news-img']}>
                  <img
                    alt="Silhouette of mountains"
                    src="https://ionicframework.com/docs/img/demos/card-media.png"
                  />
                </IonThumbnail>
                <div className={style['news-title']}>
                  <IonBadge>INFORMASI</IonBadge>
                  <IonLabel>Lomba Recycle Kota Bandung</IonLabel>
                  <IonButton>Lihat</IonButton>
                </div>
              </IonItem>
            </IonList>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
