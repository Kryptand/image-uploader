import { newSpecPage } from '@stencil/core/testing';
import { ImageUploaderUploadDialog } from './image-uploader-upload-dialog';

describe('image-uploader-upload-dialog', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ImageUploaderUploadDialog],
      html: '<image-uploader-upload-dialog></image-uploader-upload-dialog>'
    });
    expect(root).toEqualHtml(`
      <image-uploader-upload-dialog>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </image-uploader-upload-dialog>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ImageUploaderUploadDialog],
      html: `<image-uploader-upload-dialog first="Stencil" last="'Don't call me a framework' JS"></image-uploader-upload-dialog>`
    });
    expect(root).toEqualHtml(`
      <image-uploader-upload-dialog first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </image-uploader-upload-dialog>
    `);
  });
});
