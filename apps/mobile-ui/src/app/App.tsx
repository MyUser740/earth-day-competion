import {
  IonApp,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.scss';

import Router from './router';
import SidebarMenu from './menu';

export function App() {
  return (
    <IonApp>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <TransitionGroup>
            <CSSTransition classNames="fade" timeout={300}>
              <SidebarMenu />
            </CSSTransition>
          </TransitionGroup>
        </IonContent>
      </IonMenu>
      <Router />
    </IonApp>
  );
}

export default App;
