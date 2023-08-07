import { Injectable } from '@angular/core';

import { from, map, switchMap } from 'rxjs';

import { Configuration, CreateImageRequest, OpenAIApi } from 'openai';

import { environment } from 'src/environments/environment';

@Injectable()
export class OpenAIService {
  private config: Configuration;
  private openAIApi: OpenAIApi;

  constructor() {
    this.config = new Configuration({
      apiKey: environment.openAIKey,
    });
    this.openAIApi = new OpenAIApi(this.config);
  }

  createImage(imageRequest: CreateImageRequest) {
    return from(this.openAIApi.createImage(imageRequest)).pipe(
      map((response) => response.data.data),
    );
  }
}
