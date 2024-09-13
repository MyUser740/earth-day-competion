import { IonHeader, IonToolbar, IonItem, IonButtons, IonList, IonMenuButton, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonLabel, IonSearchbar } from '@ionic/react';
import { useEffect } from 'react';
import $ from 'jquery';

export default function NewsPage() {
  useEffect(() => {
    $('.owl-carousel').owlCarousel({
      loop: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      dots: false
    })
  }, []);
  return (
    <>
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
              <IonSearchbar animated placeholder="Cari Berita di Sini" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div className="owl-carousel owl-theme">
                <div className="item">
                  <IonCard>
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                    <IonCardHeader>
                      <IonCardTitle>TPU Cigadung Overload</IonCardTitle>
                      <IonCardSubtitle>
                        <IonLabel color="danger" style={{ fontSize: '14px' }}>HOTS</IonLabel>
                      </IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt voluptatibus consectetur, sit temporibus et, quo ad culpa ipsam modi dolorem maiores obcaecati fuga nisi vero doloribus? Amet nesciunt ipsum quis.</IonCardContent>
                  </IonCard>
                </div>

                <div className="item">
                  <IonCard>
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                    <IonCardHeader>
                      <IonCardTitle>TPU Cigadung Overload</IonCardTitle>
                      <IonCardSubtitle>
                        <IonLabel color="danger" style={{ fontSize: '14px' }}>TERBARU</IonLabel>
                      </IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt voluptatibus consectetur, sit temporibus et, quo ad culpa ipsam modi dolorem maiores obcaecati fuga nisi vero doloribus? Amet nesciunt ipsum quis.</IonCardContent>
                  </IonCard>
                </div>

                <div className="item">
                  <IonCard>
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                    <IonCardHeader>
                      <IonCardTitle>TPU Cigadung Overload</IonCardTitle>
                      <IonCardSubtitle>
                        <IonLabel color="danger" style={{ fontSize: '14px' }}>VIRAL</IonLabel>
                      </IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt voluptatibus consectetur, sit temporibus et, quo ad culpa ipsam modi dolorem maiores obcaecati fuga nisi vero doloribus? Amet nesciunt ipsum quis.</IonCardContent>
                  </IonCard>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-padding">
              <h1>
                <IonLabel>Berita Terkini</IonLabel>
              </h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-padding">
              <IonList inset>
                <IonItem>
                  <IonRow>
                    <IonCol size="25%">Test</IonCol>
                    <IonCol size="75%">Test</IonCol>
                  </IonRow>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
}
