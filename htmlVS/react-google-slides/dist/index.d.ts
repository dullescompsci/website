import React from 'react';
export declare type ReactGoogleSlidesProps = {
    slidesLink: string;
    loop?: boolean;
    slideDuration?: number;
    showControls?: boolean;
    position?: number;
    height?: string | number;
    width?: string | number;
    containerStyle?: object | null;
};
declare const ReactGoogleSlides: React.FC<ReactGoogleSlidesProps>;
export default ReactGoogleSlides;