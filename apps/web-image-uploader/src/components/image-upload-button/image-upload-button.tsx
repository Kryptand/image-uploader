import { Component, h } from '@stencil/core';

@Component({
  tag: 'image-upload-button',
  styleUrl: 'image-upload-button.css',
  shadow: true,
})
export class ImageUploadButton {
  render() {
    return (
      <button>
        <slot></slot>
      </button>
    );
  }
}
