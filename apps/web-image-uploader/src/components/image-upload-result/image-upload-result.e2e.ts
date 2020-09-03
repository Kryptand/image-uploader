import { newE2EPage } from '@stencil/core/testing';

describe('image-upload-result', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<image-upload-result></image-upload-result>');
    const element = await page.find('image-upload-result');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<image-upload-result></image-upload-result>');
    const component = await page.find('image-upload-result');
    const element = await page.find('image-upload-result >>> div');
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
