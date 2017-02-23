import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MyWorkoutsPage } from '../myworkout/myworkout';
import { AddWorkoutPage } from '../addworkout/addworkout';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MyWorkoutsPage;
  tab2Root: any = AddWorkoutPage;
  tab3Root: any = AboutPage;

  constructor() {

  }
}
