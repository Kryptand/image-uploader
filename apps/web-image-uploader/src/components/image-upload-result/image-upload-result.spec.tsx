import { newSpecPage } from '@stencil/core/testing';
import { ImageUploadResult } from './image-upload-result';

describe('image-upload-result', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ImageUploadResult],
      html: '<image-upload-result></image-upload-result>'
    });
    expect(root).toEqualHtml(`
      <image-upload-result>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </image-upload-result>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ImageUploadResult],
      html: `<image-upload-result first="Stencil" last="'Don't call me a framework' JS"></image-upload-result>`
    });
    expect(root).toEqualHtml(`
      <image-upload-result first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </image-upload-result>
    `);
  });
});
