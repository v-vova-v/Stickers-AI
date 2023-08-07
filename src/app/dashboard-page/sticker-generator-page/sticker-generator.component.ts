import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { OpenAIService } from '../services/open-ai.service';
import { EMPTY, startWith, switchMap } from 'rxjs';

import { InputModel } from 'src/app/ui-components/dynamic-form/dynamic-form-models';
import { PromptsService } from '../services/prompts.service';
import { ImagesResponseDataInner } from 'openai';

import { generateDefaultBase64Placeholders } from './base64-images';
import { IndexedDBService } from '../services/indexed-db.service';

@Component({
  selector: 'app-sitcker-generator-page',
  templateUrl: './sticker-generator.component.html',
  styleUrls: ['./sticker-generator.component.scss'],
})
export class SickerGeneratorPageComponent {
  openAIService: OpenAIService = inject(OpenAIService);
  promptsService: PromptsService = inject(PromptsService);
  domSanitizer: DomSanitizer = inject(DomSanitizer);
  indexedDBService: IndexedDBService = inject(IndexedDBService);
  isLoading: boolean = false;

  stickers: ImagesResponseDataInner[] = [];
  formModel: InputModel[] = [
    {
      controlType: 'text',
      name: 'imagePrompt',
      type: 'input',
      label: 'Describe your sticker',
      value: '',
      required: true,
    },
  ];
  prompt: string = '';

  generateImage(form: { imagePrompt?: string }) {
    const { imagePrompt } = form;
    this.isLoading = true;
    this.stickers = [];
    this.openAIService
      .createImage({
        prompt: this.promptsService.macbookStickerPrompt(
          this.domSanitizer.sanitize(4, imagePrompt as string) || ''
        ),
        response_format: 'b64_json',
        size: '256x256',
        n: 4,
      })
      .pipe(
        switchMap((data) => {
          this.isLoading = false;
          this.stickers = data;
          return EMPTY
        })
      )
      .subscribe();
  }

  addSticker(url: string) {
    this.indexedDBService.addSticker(url);
  }
}
