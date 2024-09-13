import { IonPage, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';

import UnAuthHomePage from './pages/unauth-home.page';
import LoginPage from './pages/login.page';
import HomePage from './pages/home.page';
import DashboardPage from './pages/dashboard.page';
import NewsPage from './pages/news.page';

export default function Router() {
  return (
    <IonPage id="main-content">
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/unauth" render={() => <UnAuthHomePage />} />
          <Route path="/login" render={() => <LoginPage />} />
          <Route path="/home" render={() => <HomePage />} />
          <Route path="/dashboard/:locid" render={() => <DashboardPage />} />
          <Route path="/news" render={() => <NewsPage />} />
          <Redirect exact from="/" to="/unauth" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonPage>
  );
}
