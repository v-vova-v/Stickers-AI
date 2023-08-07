import { Component, OnInit, inject } from '@angular/core';
import { IndexedDBService } from '../services/indexed-db.service';
import { Observable } from 'rxjs';
import { Sticker } from '../types';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss'],
})
export class MyCollectionPageComponent implements OnInit {
  indexedDBService: IndexedDBService = inject(IndexedDBService);
  stickersList$!: Observable<Sticker[]>;

  ngOnInit(): void {
    this.stickersList$ = this.indexedDBService.getStickersList();
  }
}
