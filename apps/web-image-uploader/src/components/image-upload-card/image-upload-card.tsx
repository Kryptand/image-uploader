import { Component, h } from '@stencil/core';

@Component({
  tag: 'image-upload-card',
  styleUrl: 'image-upload-card.css',
  shadow: true,
})
export class ImageUploadCard {
  render() {
    return (
      <host>
        <div class="wrapper">
          <div class="title">
            <slot name="title" />
          </div>
          <div class="subtitle">
            <slot name="subtitle" />
          </div>
          <div class="content">
            <slot name="content" />
          </div>
        </div>
      </host>
    );
  }
}
