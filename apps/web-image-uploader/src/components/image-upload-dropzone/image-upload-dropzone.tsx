import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'image-upload-dropzone',
  styleUrl: 'image-upload-dropzone.css',
  shadow: true,
})
export class ImageUploadDropzone {
  @Prop() caption: string;
  @Element() el: HTMLInputElement;
  openFileInput() {}
  render() {
    return (
      <host>
        <div class="drop-area">
          <div class="placeholder-image">
            <slot name="image-placeholder"></slot>
          </div>
          <div class="caption">{this.caption}</div>
          <input type="file" class="file-input" multiple accept="image/*" />
        </div>
        <div class="or">or</div>
        <image-upload-button>Choose a File</image-upload-button>
      </host>
    );
  }
}
