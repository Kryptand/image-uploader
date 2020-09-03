import { Component, h, State } from '@stencil/core';
const fallbackCopyTextToClipboard = (text) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
};
const copyTextToClipboard = (text) => {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    () => {
      console.log('Async: Copying to clipboard was successful!');
    },
    (err) => {
      console.error('Async: Could not copy text: ', err);
    }
  );
};
const getAllUrlParams = (url?: string) => {
  // get query string from url (optional) or window
  let queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  const obj = {};

  // if query string exists
  if (queryString) {
    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    const arr = queryString.split('&');

    for (let i = 0; i < arr.length; i++) {
      // separate the keys and the values
      const a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      let paramName = a[0];
      let paramValue = typeof a[1] === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {
        // create key if it doesn't exist
        const key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          const index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string') {
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
};
const BASE_BACKEND_URL = 'https://backend.url/images/';
@Component({
  tag: 'image-upload-result',
  styleUrl: 'image-upload-result.css',
  shadow: true,
})
export class ImageUploadResult {
  @State() isSuccess: boolean = true;
  @State() imgPath: string = 'https://asdasdassadadsasdasdadsdadas';
  copyLink() {
    copyTextToClipboard(this.imgPath);
    alert('Link was copied to clipboard');
  }
  async componentWillLoad() {
    const params: any = getAllUrlParams();
    const { imageid, state } = params;
    this.imgPath = BASE_BACKEND_URL + imageid;
    this.isSuccess = state === 'success';
  }
  render() {
    if (this.isSuccess) {
      return (
        <host>
          <div class="content-wrapper">
            <image-upload-card>
              <div class="header" slot="title">
                <div class="icon">
                  <svg
                    enable-background="new 0 0 158.5 158.8"
                    version="1.1"
                    viewBox="0 0 158.5 158.8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m158.5 79.4c0 43.9-35.5 79.4-79.3 79.4-43.9 0-79.2-35.4-79.2-79.5 0-43.7 35.4-79.2 79-79.3 43.7-0.1 79.5 35.6 79.5 79.4z"
                      fill="#219553"
                    />
                    <path
                      d="m131.3 47.2c0.1 3.2-1.3 5-3 6.7-19.7 19.7-39.3 39.4-58.9 59-4 4-8.1 4.1-12.2 0.1-9.3-9.1-18.4-18.3-27.5-27.5-3.6-3.7-3.5-8.4-0.3-11.5 3.3-3.2 7.8-3 11.5 0.6 6.4 6.3 12.9 12.5 19.1 19.1 2.6 2.7 4 2.7 6.7 0 16.7-17 33.5-33.7 50.4-50.5 4.9-4.9 11.8-3.8 13.8 2 0.3 0.7 0.3 1.7 0.4 2z"
                      fill="#F9F9FA"
                    />
                  </svg>
                </div>
                <h1 class="result-subscription">Uploaded Successfully!</h1>
              </div>
              <div class="content" slot="content">
                <div class="preview">
                  <img
                    src="https://www.w3schools.com/images/w3schools_green.jpg"
                    alt="W3Schools.com"
                  />
                </div>
                <div class="image-link">
                  <input
                    class="link"
                    type="text"
                    disabled
                    value={this.imgPath}
                  />
                  <image-upload-button onClick={() => this.copyLink()}>
                    Copy Link
                  </image-upload-button>
                </div>
              </div>
            </image-upload-card>
          </div>
        </host>
      );
    } else {
      return (
        <div class="content-wrapper">
          <image-upload-card>
            <div class="header" slot="title">
              <div class="icon">
                <svg
                  enable-background="new 0 0 158.5 158.8"
                  version="1.1"
                  viewBox="0 0 158.5 158.8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m158.6 79.6c0 43.9-35.5 79.4-79.3 79.4-43.9 0-79.2-35.4-79.1-79.5 0-43.7 35.4-79.2 79-79.3s79.4 35.7 79.4 79.4z"
                    fill="#B21924"
                  />
                  <path
                    d="m37.9 116.5c-0.1-1.5 0.6-2.5 1.5-3.4 8.5-8.3 16.9-16.6 25.4-24.9 2.6-2.6 5.2-5.2 7.9-7.7 0.7-0.6 0.7-0.9 0-1.6l-33.3-32.7c-1.6-1.6-2-3.4-1.1-5.1 1.2-2.3 4.3-2.9 6.3-1.3 0.3 0.3 0.6 0.6 0.9 0.8 11 10.8 21.9 21.5 32.9 32.3 0.8 0.8 1.1 0.7 1.8 0 11-10.9 22.1-21.7 33.1-32.5 1.1-1.1 2.4-1.7 4-1.5 1.6 0.3 2.7 1.2 3.2 2.7s0.2 2.8-0.8 4l-0.8 0.8c-11 10.9-21.9 21.7-32.9 32.4-0.7 0.6-0.7 1 0 1.6 11.1 10.8 22.1 21.7 33.2 32.6 1.6 1.5 2 3.3 1.2 5-1.2 2.4-4.4 3.1-6.5 1.3-0.3-0.2-0.5-0.5-0.8-0.8-11-10.8-21.9-21.5-32.9-32.3-0.7-0.7-1.1-0.6-1.8 0-11 11-22.1 21.8-33.2 32.7-2.4 2.3-5.9 1.7-7-1.2-0.2-0.5-0.2-0.9-0.3-1.2z"
                    fill="#FEFEFE"
                  />
                </svg>
              </div>
              <h1 class="result-subscription">Oops, an error occured!</h1>
            </div>
            <div class="content" slot="content">
              <div class="preview">Please try again later.</div>
            </div>
          </image-upload-card>
        </div>
      );
    }
  }
}
