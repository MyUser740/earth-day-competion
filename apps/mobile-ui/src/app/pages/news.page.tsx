import {
  IonBadge,
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
import $ from 'jquery';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import style from './news.module.scss';

export default function NewsPage() {
  const history = useHistory();
  const [news, setNews] = useState<string>('');

  useEffect(() => {
    $('.owl-carousel').owlCarousel({
      loop: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      dots: false,
    });
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Berita Terkini</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonSearchbar
                animated
                placeholder="Cari Berita di Sini"
                onIonChange={(e: { detail: { value: string } }) => {
                  if (!e.detail.value || e.detail.value === '') return;
                  setNews(e.detail.value);
                  history.push('/news-search', { q: e.detail.value });
                }}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div className="owl-carousel owl-theme">
                <div className="item">
                  <IonCard>
                    <img
                      alt="Silhouette of mountains"
                      src="https://ionicframework.com/docs/img/demos/card-media.png"
                    />
                    <IonCardHeader>
                      <IonCardTitle>TPU Cigadung Overload</IonCardTitle>
                      <IonCardSubtitle>
                        <IonLabel color="danger" style={{ fontSize: '14px' }}>
                          HOTS
                        </IonLabel>
                      </IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                      Lorem ipsum dolor, sit amet consectetur ...{' '}
                      <a href="#">Selengkapnya</a>
                    </IonCardContent>
                  </IonCard>
                </div>

                <div className="item">
                  <IonCard>
                    <img
                      alt="Silhouette of mountains"
                      src="https://ionicframework.com/docs/img/demos/card-media.png"
                    />
                    <IonCardHeader>
                      <IonCardTitle>TPU Cigadung Overload</IonCardTitle>
                      <IonCardSubtitle>
                        <IonLabel color="danger" style={{ fontSize: '14px' }}>
                          TERBARU
                        </IonLabel>
                      </IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                      Lorem ipsum dolor, sit amet consectetur ...{' '}
                      <a href="#">Selengkapnya</a>
                    </IonCardContent>
                  </IonCard>
                </div>

                <div className="item">
                  <IonCard>
                    <img
                      alt="Silhouette of mountains"
                      src="https://ionicframework.com/docs/img/demos/card-media.png"
                    />
                    <IonCardHeader>
                      <IonCardTitle>TPU Cigadung Overload</IonCardTitle>
                      <IonCardSubtitle>
                        <IonLabel color="danger" style={{ fontSize: '14px' }}>
                          VIRAL
                        </IonLabel>
                      </IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                      Lorem ipsum dolor, sit amet consectetur ...{' '}
                      <a href="#">Selengkapnya</a>
                    </IonCardContent>
                  </IonCard>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h1>
                <IonLabel slot="start">Berita Terkini</IonLabel>
              </h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonList inset lines="none">
                <IonItem className={style['news-item']}>
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

                <IonItem className={style['news-item']}>
                  <IonThumbnail slot="end" className={style['news-img']}>
                    <img
                      alt="Silhouette of mountains"
                      src="https://ionicframework.com/docs/img/demos/card-media.png"
                    />
                  </IonThumbnail>
                  <div className={style['news-title']}>
                    <IonBadge color="warning">TANTANGAN</IonBadge>
                    <IonLabel>Lomba Recycle Kota Bandung</IonLabel>
                    <IonButton>Lihat</IonButton>
                  </div>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
