import {
  IonApp,
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.scss';

import SidebarMenu from './menu';
import Router from './router';

export function App() {
  return (
    <IonApp>
      <IonReactRouter>
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
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
