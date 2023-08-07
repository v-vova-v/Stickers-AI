import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { SickerGeneratorPageComponent } from './sticker-generator-page/sticker-generator.component';
import { MyCollectionPageComponent } from './my-collection-page/my-collection.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'sticker-generator',
        component: SickerGeneratorPageComponent,
      },
      {
        path: 'my-collection',
        component: MyCollectionPageComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
