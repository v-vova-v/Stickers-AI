import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { generateDefaultBase64Placeholders } from '../../sticker-generator-page/base64-images';

@Component({
  selector: 'app-sticker-image',
  templateUrl: './sticker-image.component.html',
  styleUrls: ['./sticker-image.component.scss'],
})
export class StickerImageComponent {
  @Input()
  url: string = generateDefaultBase64Placeholders(1)[0].b64_json!;
  @Input()
  isStickerControls: boolean = true;
  @Output()
  addSticker: EventEmitter<string> = new EventEmitter();
  @ViewChild('stickerTarget')
  stickerElement!: ElementRef;

  addStickerEvent() {
    const url = this.stickerElement.nativeElement.getAttribute('src');
    this.addSticker.emit(url);
  }
}
