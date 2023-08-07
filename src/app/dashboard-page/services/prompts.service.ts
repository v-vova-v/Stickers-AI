import { Injectable } from '@angular/core';

@Injectable()
export class PromptsService {
  private macbookGeneralPrompt = {
    sticker: {
      object: 'sticker',
      shape: 'square',
      description: '',
      size: {
        width: '10cm',
        height: '10cm',
      },
      colorScheme: {
        border: 'white',
        background: 'transparent',
      },
      quality: 'high',
    },
  };
  macbookStickerPrompt(userRequest: string) {
    this.macbookGeneralPrompt.sticker.description = `Generate a ${userRequest} sticker with a white border for printing aim`;
    const prompt = `${JSON.stringify(this.macbookGeneralPrompt)}`;
    return prompt;
  }
}
