import { NgModule } from '@angular/core';

import { BinanceService } from './services/binance.service';

const SHARED_MODULES = [];

@NgModule({
  imports: [],
  exports: [],
  providers: [BinanceService],
})
export class SharedModule {}
