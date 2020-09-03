import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'image-upload-dropzone',
  styleUrl: 'image-upload-dropzone.css',
  shadow: true,
})
export class ImageUploadDropzone {
  @Prop() caption: string;
  @Element() el: HTMLElement;
  @Prop({ connect: 'ion-router' }) nav: HTMLIonRouterElement;
  selectionLock = false;
  async openFileInput() {
    if (!this.selectionLock) {
      this.selectionLock = true;
      const fileInput = this.el.shadowRoot.getElementById('file-selector');
      fileInput.click();
      this.selectionLock = false;
      const navCtrl: Promise<HTMLIonRouterElement> = (this
        .nav as any).componentOnReady();
      navCtrl.then((nav) => nav.push('/dialog', 'root'));
    }
  }
  render() {
    return (
      <host>
        <div class="drop-area">
          <div class="placeholder-image" onClick={() => this.openFileInput()}>
            <slot name="image-placeholder"></slot>
          </div>
          <div class="caption">{this.caption}</div>
          <input
            type="file"
            class="file-input"
            id="file-selector"
            multiple
            accept="image/*"
          />
        </div>
        <div class="or">or</div>
        <image-upload-button onClick={() => this.openFileInput()}>
          Choose a File
        </image-upload-button>
      </host>
    );
  }
}
