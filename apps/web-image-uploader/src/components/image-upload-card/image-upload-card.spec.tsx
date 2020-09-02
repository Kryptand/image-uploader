import { newSpecPage } from '@stencil/core/testing';
import { ImageUploadCard } from './image-upload-card';

describe('image-upload-card', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ImageUploadCard],
      html: '<image-upload-card></image-upload-card>'
    });
    expect(root).toEqualHtml(`
      <image-upload-card>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </image-upload-card>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ImageUploadCard],
      html: `<image-upload-card first="Stencil" last="'Don't call me a framework' JS"></image-upload-card>`
    });
    expect(root).toEqualHtml(`
      <image-upload-card first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </image-upload-card>
    `);
  });
});
