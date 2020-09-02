import { newSpecPage } from '@stencil/core/testing';
import { ImageUploadDropzone } from './image-upload-dropzone';

describe('image-upload-dropzone', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ImageUploadDropzone],
      html: '<image-upload-dropzone></image-upload-dropzone>'
    });
    expect(root).toEqualHtml(`
      <image-upload-dropzone>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </image-upload-dropzone>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ImageUploadDropzone],
      html: `<image-upload-dropzone first="Stencil" last="'Don't call me a framework' JS"></image-upload-dropzone>`
    });
    expect(root).toEqualHtml(`
      <image-upload-dropzone first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </image-upload-dropzone>
    `);
  });
});
