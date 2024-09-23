import { IonPage, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import DashboardPage from './pages/dashboard.page';
import HomePage from './pages/home.page';
import LoginPage from './pages/login.page';
import NewsContent from './pages/news-content.page';
import NewSearch from './pages/news-search.page';
import NewsPage from './pages/news.page';
import UnAuthHomePage from './pages/unauth-home.page';

export default function Router() {
  return (
    <IonPage id="main-content">
      <IonRouterOutlet>
        <Route path="/unauth" component={UnAuthHomePage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/home" component={HomePage} exact />
        <Route path="/dashboard/:locid" component={DashboardPage} exact />
        <Route path="/news" component={NewsPage} exact />
        <Route path="/news-search" component={NewSearch} />
        <Route path="/news-content" component={NewsContent} />
        <Redirect exact from="/" to="/unauth" />
      </IonRouterOutlet>
    </IonPage>
  );
}
