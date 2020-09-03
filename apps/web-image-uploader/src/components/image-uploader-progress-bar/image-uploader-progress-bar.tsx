import { Component, h } from '@stencil/core';

@Component({
  tag: 'image-uploader-progress-bar',
  styleUrl: 'image-uploader-progress-bar.css',
  shadow: true,
})
export class ImageUploaderProgressBar {
  render() {
    return (
      <host>
        <div class="progress-bar">
          <div class="inner-bar" />
        </div>
      </host>
    );
  }
}
