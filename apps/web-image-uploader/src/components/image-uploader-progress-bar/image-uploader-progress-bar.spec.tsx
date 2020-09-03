import { newSpecPage } from '@stencil/core/testing';
import { ImageUploaderProgressBar } from './image-uploader-progress-bar';

describe('image-uploader-progress-bar', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ImageUploaderProgressBar],
      html: '<image-uploader-progress-bar></image-uploader-progress-bar>'
    });
    expect(root).toEqualHtml(`
      <image-uploader-progress-bar>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </image-uploader-progress-bar>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ImageUploaderProgressBar],
      html: `<image-uploader-progress-bar first="Stencil" last="'Don't call me a framework' JS"></image-uploader-progress-bar>`
    });
    expect(root).toEqualHtml(`
      <image-uploader-progress-bar first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </image-uploader-progress-bar>
    `);
  });
});
