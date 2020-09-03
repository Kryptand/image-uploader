/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
    }
    interface AppRoot {
    }
    interface ImageUploadButton {
    }
    interface ImageUploadCard {
    }
    interface ImageUploadDropzone {
        "caption": string;
    }
    interface ImageUploadResult {
    }
    interface ImageUploaderProgressBar {
    }
    interface ImageUploaderUploadDialog {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLImageUploadButtonElement extends Components.ImageUploadButton, HTMLStencilElement {
    }
    var HTMLImageUploadButtonElement: {
        prototype: HTMLImageUploadButtonElement;
        new (): HTMLImageUploadButtonElement;
    };
    interface HTMLImageUploadCardElement extends Components.ImageUploadCard, HTMLStencilElement {
    }
    var HTMLImageUploadCardElement: {
        prototype: HTMLImageUploadCardElement;
        new (): HTMLImageUploadCardElement;
    };
    interface HTMLImageUploadDropzoneElement extends Components.ImageUploadDropzone, HTMLStencilElement {
    }
    var HTMLImageUploadDropzoneElement: {
        prototype: HTMLImageUploadDropzoneElement;
        new (): HTMLImageUploadDropzoneElement;
    };
    interface HTMLImageUploadResultElement extends Components.ImageUploadResult, HTMLStencilElement {
    }
    var HTMLImageUploadResultElement: {
        prototype: HTMLImageUploadResultElement;
        new (): HTMLImageUploadResultElement;
    };
    interface HTMLImageUploaderProgressBarElement extends Components.ImageUploaderProgressBar, HTMLStencilElement {
    }
    var HTMLImageUploaderProgressBarElement: {
        prototype: HTMLImageUploaderProgressBarElement;
        new (): HTMLImageUploaderProgressBarElement;
    };
    interface HTMLImageUploaderUploadDialogElement extends Components.ImageUploaderUploadDialog, HTMLStencilElement {
    }
    var HTMLImageUploaderUploadDialogElement: {
        prototype: HTMLImageUploaderUploadDialogElement;
        new (): HTMLImageUploaderUploadDialogElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-root": HTMLAppRootElement;
        "image-upload-button": HTMLImageUploadButtonElement;
        "image-upload-card": HTMLImageUploadCardElement;
        "image-upload-dropzone": HTMLImageUploadDropzoneElement;
        "image-upload-result": HTMLImageUploadResultElement;
        "image-uploader-progress-bar": HTMLImageUploaderProgressBarElement;
        "image-uploader-upload-dialog": HTMLImageUploaderUploadDialogElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppRoot {
    }
    interface ImageUploadButton {
    }
    interface ImageUploadCard {
    }
    interface ImageUploadDropzone {
        "caption"?: string;
    }
    interface ImageUploadResult {
    }
    interface ImageUploaderProgressBar {
    }
    interface ImageUploaderUploadDialog {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-root": AppRoot;
        "image-upload-button": ImageUploadButton;
        "image-upload-card": ImageUploadCard;
        "image-upload-dropzone": ImageUploadDropzone;
        "image-upload-result": ImageUploadResult;
        "image-uploader-progress-bar": ImageUploaderProgressBar;
        "image-uploader-upload-dialog": ImageUploaderUploadDialog;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "image-upload-button": LocalJSX.ImageUploadButton & JSXBase.HTMLAttributes<HTMLImageUploadButtonElement>;
            "image-upload-card": LocalJSX.ImageUploadCard & JSXBase.HTMLAttributes<HTMLImageUploadCardElement>;
            "image-upload-dropzone": LocalJSX.ImageUploadDropzone & JSXBase.HTMLAttributes<HTMLImageUploadDropzoneElement>;
            "image-upload-result": LocalJSX.ImageUploadResult & JSXBase.HTMLAttributes<HTMLImageUploadResultElement>;
            "image-uploader-progress-bar": LocalJSX.ImageUploaderProgressBar & JSXBase.HTMLAttributes<HTMLImageUploaderProgressBarElement>;
            "image-uploader-upload-dialog": LocalJSX.ImageUploaderUploadDialog & JSXBase.HTMLAttributes<HTMLImageUploaderUploadDialogElement>;
        }
    }
}
