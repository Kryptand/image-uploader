import { newSpecPage } from '@stencil/core/testing';
import { ImageUploadButton } from './image-upload-button';

describe('image-upload-button', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ImageUploadButton],
      html: '<image-upload-button></image-upload-button>'
    });
    expect(root).toEqualHtml(`
      <image-upload-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </image-upload-button>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ImageUploadButton],
      html: `<image-upload-button first="Stencil" last="'Don't call me a framework' JS"></image-upload-button>`
    });
    expect(root).toEqualHtml(`
      <image-upload-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </image-upload-button>
    `);
  });
});
