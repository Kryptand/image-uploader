import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-image-upload',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../../dist/libs/web-image-upload/dist',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: '../../../dist/libs/web-image-upload/www',
      serviceWorker: null, // disable service workers
    },
  ],
};
