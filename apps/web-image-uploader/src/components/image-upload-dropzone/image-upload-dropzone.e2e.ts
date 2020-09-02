import { newE2EPage } from '@stencil/core/testing';

describe('image-upload-dropzone', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<image-upload-dropzone></image-upload-dropzone>');
    const element = await page.find('image-upload-dropzone');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<image-upload-dropzone></image-upload-dropzone>');
    const component = await page.find('image-upload-dropzone');
    const element = await page.find('image-upload-dropzone >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
