import React from 'react'

import { SectionPreviewPropertyProps, SectionPropertyProps } from './common'

import {
    SectionPropertyNudeProps,
    SectionPropertyNude                    as BasicSectionPropertyNude,
    
    SectionPropertyOrientationProps,
    SectionPropertyOrientation             as BasicSectionPropertyOrientation,
    SectionPropertyOrientationBlock        as BasicSectionPropertyOrientationBlock,
    SectionPropertyOrientationInlineProps,
    SectionPropertyOrientationInline       as BasicSectionPropertyOrientationInline,
} from './common@Basic';
import {
    SectionPropertyPopupAutoFlip  as PopupSectionPropertyPopupAutoFlip,
    SectionPropertyPopupAutoShift as PopupSectionPropertyPopupAutoShift,
} from './common@Popup'



export const SectionPropertyNude = ({ defaultValue = true, ...restProps }: SectionPropertyNudeProps) => {
    return (
        <BasicSectionPropertyNude {...restProps} defaultValue={defaultValue} />
    );
};
export const SectionPropertyOrientation       = ({ orientationStuff = 'collapsing', ...restProps }: SectionPropertyProps & SectionPropertyOrientationProps) => {
    return (
        <BasicSectionPropertyOrientation {...restProps} orientationStuff={orientationStuff} />
    );
};
export const SectionPropertyOrientationBlock  = ({ orientationStuff = 'collapsing', ...restProps }: SectionPreviewPropertyProps & SectionPropertyOrientationProps) => {
    return (
        <BasicSectionPropertyOrientationBlock {...restProps} orientationStuff={orientationStuff} />
    );
};
export const SectionPropertyOrientationInline = ({ orientationStuff = 'collapsing', ...restProps }: SectionPropertyOrientationInlineProps & SectionPropertyOrientationProps) => {
    return (
        <BasicSectionPropertyOrientationInline {...restProps} orientationStuff={orientationStuff} />
    );
}; 



export const SectionPropertyPopupAutoFlip  = ({ defaultValue = true, ...props }: SectionPreviewPropertyProps) => {
    return (
        <PopupSectionPropertyPopupAutoFlip {...props} defaultValue={defaultValue} />
    );
};
export const SectionPropertyPopupAutoShift = ({ defaultValue = true, ...props }: SectionPreviewPropertyProps) => {
    return (
        <PopupSectionPropertyPopupAutoShift {...props} defaultValue={defaultValue} />
    );
};
