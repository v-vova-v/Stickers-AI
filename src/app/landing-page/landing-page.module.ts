import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';

import { UiComponentsModule } from 'src/app/ui-components/ui-components.module';

@NgModule({
  declarations: [HeaderComponent, LandingComponent],
  imports: [CommonModule, LandingPageRoutingModule, UiComponentsModule],
})
export class LandingPageModule {}
