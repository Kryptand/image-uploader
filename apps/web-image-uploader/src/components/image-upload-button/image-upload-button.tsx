import { Event, Component, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'image-upload-button',
  styleUrl: 'image-upload-button.css',
  shadow: true,
})
export class ImageUploadButton {
  @Event() buttonClicked: EventEmitter<void>;
  render() {
    return (
      <button onClick={() => this.buttonClicked.emit()}>
        <slot></slot>
      </button>
    );
  }
}
