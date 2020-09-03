import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'image-uploader-upload-dialog',
  styleUrl: 'image-uploader-upload-dialog.css',
  shadow: true,
})
export class ImageUploaderUploadDialog {
  @Prop({ connect: 'ion-router' }) nav: HTMLIonRouterElement;
  async componentWillLoad() {
    const navCtrl: Promise<HTMLIonRouterElement> = (this
      .nav as any).componentOnReady();
    setTimeout(
      () => navCtrl.then((nav) => nav.push('/result?state=success', 'root')),
      5000
    );
  }
  render() {
    return (
      <host>
        <div class="wrapper">
          <h1 class="title">Uploading...</h1>
          <image-uploader-progress-bar />
        </div>
      </host>
    );
  }
}
