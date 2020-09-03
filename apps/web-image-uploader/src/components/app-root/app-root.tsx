import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  @Element() el: HTMLElement;
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/dialog" component="image-uploader-upload-dialog" />
          <ion-route url="/result" component="image-upload-result" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
