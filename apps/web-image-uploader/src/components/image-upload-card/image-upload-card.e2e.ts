import { newE2EPage } from '@stencil/core/testing';

describe('image-upload-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<image-upload-card></image-upload-card>');
    const element = await page.find('image-upload-card');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<image-upload-card></image-upload-card>');
    const component = await page.find('image-upload-card');
    const element = await page.find('image-upload-card >>> div');
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
