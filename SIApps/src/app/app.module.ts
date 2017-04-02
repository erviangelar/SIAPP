import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Import Pages
import { HomePage } from '../pages/home/home';
import { CoalPTRPage } from '../pages/coal-ptr/coal-ptr';
import { CoalRTPPage } from '../pages/coal-rtp/coal-rtp';
import { CoalRTP2Page } from '../pages/coal-rtp2/coal-rtp2';
import { EWHLoaderEvaluationPage } from '../pages/ewh-loader-evaluation/ewh-loader-evaluation';
import { EWHTrailerByPitPage } from '../pages/ewh-trailer-by-pit/ewh-trailer-by-pit';
import { FleetProAchievementPage } from '../pages/fleet-pro-achievement/fleet-pro-achievement';
import { GapBridgeLPAPage } from '../pages/gap-bridge-lpa/gap-bridge-lpa';
import { LoginPage } from '../pages/login/login';
import { MaintanancePage } from '../pages/maintanance/maintanance';
import { NumOfFleetEvaluationPage } from '../pages/num-of-fleet-evaluation/num-of-fleet-evaluation';
import { ObRemovalPage } from '../pages/ob-removal/ob-removal';
import { ObRemovalBySitePage } from '../pages/ob-removal-by-site/ob-removal-by-site';
import { ProAchieveByPitPage } from '../pages/pro-achieve-by-pit/pro-achieve-by-pit';
import { ProAchieveByProcessPage } from '../pages/pro-achieve-by-process/pro-achieve-by-process';
import { ProductionDefinitionPage } from '../pages/production-definition/production-definition';
import { ProductivityEvaluationPage } from '../pages/productivity-evaluation/productivity-evaluation';
import { SideMenuPage } from '../pages/side-menu/side-menu';
import { StandbyPage } from '../pages/standby/standby';
import { SumOfFleetAchievementPage } from '../pages/sum-of-fleet-achievement/sum-of-fleet-achievement';
import { TabsPage } from '../pages/tabs/tabs';
import { TabsMenuPage } from '../pages/tabs-menu/tabs-menu';
import { TestPagePage } from '../pages/test-page/test-page';
import { TabsIconPage } from '../pages/test-page/test-page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CoalPTRPage,
    CoalRTPPage,
    CoalRTP2Page,
    EWHLoaderEvaluationPage,
    EWHTrailerByPitPage,
    FleetProAchievementPage,
    GapBridgeLPAPage,
    LoginPage,
    MaintanancePage,
    NumOfFleetEvaluationPage,
    ObRemovalPage,
    ObRemovalBySitePage,
    ProAchieveByPitPage,
    ProAchieveByProcessPage,
    ProductionDefinitionPage,
    ProductivityEvaluationPage,
    SideMenuPage,
    StandbyPage,
    SumOfFleetAchievementPage,
    TabsPage,
    TabsMenuPage,
    TestPagePage,
    TabsIconPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CoalPTRPage,
    CoalRTPPage,
    CoalRTP2Page,
    EWHLoaderEvaluationPage,
    EWHTrailerByPitPage,
    FleetProAchievementPage,
    GapBridgeLPAPage,
    LoginPage,
    MaintanancePage,
    NumOfFleetEvaluationPage,
    ObRemovalPage,
    ObRemovalBySitePage,
    ProAchieveByPitPage,
    ProAchieveByProcessPage,
    ProductionDefinitionPage,
    ProductivityEvaluationPage,
    SideMenuPage,
    StandbyPage,
    SumOfFleetAchievementPage,
    TabsPage,
    TabsMenuPage,
    TestPagePage,
    TabsIconPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
