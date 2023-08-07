import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { MainComponent } from './components/main/main.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { StickerImageComponent } from './components/sticker-image/sticker-image.component';

import { OpenAIService } from './services/open-ai.service';
import { PromptsService } from './services/prompts.service';
import { IndexedDBService } from './services/indexed-db.service';

import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { UiComponentsModule } from '../ui-components/ui-components.module';

import { SickerGeneratorPageComponent } from './sticker-generator-page/sticker-generator.component';
import { MyCollectionPageComponent } from './my-collection-page/my-collection.component';

@NgModule({
  declarations: [
    MainComponent,
    SickerGeneratorPageComponent,
    MyCollectionPageComponent,
    SidebarMenuComponent,
    StickerImageComponent,
  ],
  providers: [OpenAIService, PromptsService, IndexedDBService],
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    UiComponentsModule,
    MatIconModule,
  ],
})
export class DashboardPageModule {}
