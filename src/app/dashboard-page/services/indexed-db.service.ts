import { Injectable } from '@angular/core';
import { from, fromEventPattern, switchMap } from 'rxjs';
import { Sticker } from '../types';

@Injectable()
export class IndexedDBService {
  private db!: IDBDatabase;
  private dbPromise: Promise<IDBDatabase>;
  private dbRequest = indexedDB.open('stickerDocument', 1);

  constructor() {
    this.dbPromise = new Promise((resolve, reject) => {
      const dbRequest = indexedDB.open('stickerDocument', 1);

      dbRequest.onerror = (event) => {
        console.log('DB error:', event);
        reject(event);
      };

      dbRequest.onsuccess = (event) => {
        this.db = dbRequest.result;
        resolve(this.db);
      };

      dbRequest.onupgradeneeded = (event) => {
        this.db = this.dbRequest.result;

        this.db.onerror = () => {
          console.log('db error on onupgradeneeded');
        };

        const objectStore = this.db.createObjectStore('stickerList', {
          keyPath: 'url',
        });

        objectStore.createIndex('url', 'url');
        resolve(this.db);
      };
    });
  }

  addSticker(url: string) {
    const transaction = this.db.transaction('stickerList', 'readwrite');

    transaction.onerror = () => {
      console.log('error om transaction open');
    };

    const objectStore = transaction.objectStore('stickerList');

    objectStore.add({
      url,
    });
  }

  getStickersList() {
    return from(this.dbPromise).pipe(
      switchMap(() => {
        const transaction = this.db.transaction('stickerList', 'readonly');
        const objectStore = transaction.objectStore('stickerList');
        const request: IDBRequest<Sticker[]> = objectStore.getAll();

        return fromEventPattern<Sticker[]>(
          (handler) => {
            request.onsuccess = (event: Event) => {
              handler(request.result);
            };
            request.onerror = (event: Event) => {
              console.error('Error fetching stickers:', request.error);
              handler(request.error);
            };
          },
          () => {}
        );
      })
    );
  }
}
