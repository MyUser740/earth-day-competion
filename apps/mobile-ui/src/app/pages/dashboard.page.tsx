import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonModal,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonGrid,
  IonCol,
  IonRow,
} from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';

import trashImg from '../../assets/graphics/trash.jpg';
import CO2Img from '../../assets/graphics/CO2_gas.jpeg';
import moneyImg from '../../assets/graphics/trashdump.webp';

export default function DashboardPage() {
  const { locid: id } = useParams<{ locid: string }>();

  const [showMDLTrash, setShowMDLTrash] = useState(false);
  const [showFineTrash, setShowFineTrash] = useState(false);

  return (
    <>
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
          <IonCardHeader>
            <IonCardTitle>
              {id === '1' ? `Rumah (Jenis A1)` : 'Kantor (#1) (Jenis A1)'}
            </IonCardTitle>
            <IonCardSubtitle>
              Jalan Sultan Agung No. 4, Bandung, Jawa Barat
            </IonCardSubtitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <img alt="Trash" src={trashImg} />
          <IonCardHeader>
            <IonCardTitle>25,74 kg / 20,10 kg</IonCardTitle>
            <IonCardSubtitle>
              Total Sampah yang Anda Buang pada Bulan Ini
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Perhitungan massa sampah yang Anda budang dan sudah diproses.
          </IonCardContent>

          <IonButton fill="clear" onClick={() => setShowMDLTrash(true)}>
            Tinjau Lebih Lanjut
          </IonButton>
        </IonCard>

        <IonCard>
          <img alt="Fees" src={moneyImg} />
          <IonCardHeader>
            <IonCardTitle>IDR 5.847,12</IonCardTitle>
            <IonCardSubtitle>
              Denda yang Harus di Bayar pada Lokasi Ini
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Akumulasi total denda yang harus di bayar pada bulan dan lokasi ini.
          </IonCardContent>

          <IonButton fill="clear" onClick={() => setShowFineTrash(true)}>
            Tinjau Lebih Lanjut
          </IonButton>
        </IonCard>

        <IonCard>
          <img alt="Fees" src={CO2Img} />
          <IonCardHeader>
            <IonCardTitle>0,89 kg</IonCardTitle>
            <IonCardSubtitle>
              Massa Karbon Dioksida yang Dihasilkan
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Total massa karbon dioksida yang disumbangkan dari lokasi ini selama
            bulan ini.
          </IonCardContent>
        </IonCard>
      </IonContent>
      {/* Modals */}

      <IonModal isOpen={showMDLTrash} data-name="trash total">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Data Sampahku</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setShowMDLTrash(false)}>
                Tutup
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonListHeader>
              <IonLabel>Akumulasi Sampah di TPU</IonLabel>
            </IonListHeader>
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonLabel style={{ fontWeight: 'bold' }}>
                      Lokasi TPU
                    </IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonLabel style={{ fontWeight: 'bold' }}>
                      Massa Sampah Anda
                    </IonLabel>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonLabel>TPU Cikutra</IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonLabel color="medium">15,00 kg</IonLabel>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonLabel>TPU Nagrog</IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonLabel color="medium">10,74 kg</IonLabel>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonLabel style={{ fontWeight: 'bold' }}>Total</IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonLabel style={{ fontWeight: 'bold' }}>25,74 kg</IonLabel>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </IonList>
        </IonContent>
      </IonModal>

      <IonModal isOpen={showFineTrash} data-name="trash total">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Akumulasi Denda</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setShowFineTrash(false)}>
                Tutup
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonListHeader>
              <IonLabel>Akumulasi Denda</IonLabel>
            </IonListHeader>
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonLabel>Kelebihan Kuota Sampah 5,64 kg</IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonLabel color="medium">IDR 5.640,00</IonLabel>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonLabel>
                      Massa sampah diluar kategori rumah tangga (A1) 0,1 kg.
                    </IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonLabel color="medium">IDR 200,00</IonLabel>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonLabel>Denda tambahan keterlambatan membayar</IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonLabel color="medium">IDR 7.12</IonLabel>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonLabel style={{ fontWeight: 'bold' }}>Total</IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonLabel style={{ fontWeight: 'bold' }}>
                      IDR 5.847,12
                    </IonLabel>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </IonList>
          <h1>
            <IonLabel style={{ fontWeight: 'bold' }}>Pembayaran Denda</IonLabel>
          </h1>
          <p style={{ textAlign: 'justify', fontSize: '20px' }}>
            Pembayaran denda dilakukan dengan mengunjungi TPU terdekat atau
            kantor kelurahan.{' '}
            <IonLabel color="danger">
              Keterlambatan akan memberikan denda tambahan serta keterlambatan
              lebih dari 6 bulan, berakibatkan sampah Anda tidak akan diproses.
            </IonLabel>
          </p>
        </IonContent>
      </IonModal>
    </>
  );
}
