import React from 'react'

import { SectionPreviewPropertyProps } from './common'

import {
    SectionPropertyOrientationProps,
    SectionPropertyOrientationBlock  as BasicSectionPropertyOrientationBlock,
    SectionPropertyOrientationInlineProps,
    SectionPropertyOrientationInline as BasicSectionPropertyOrientationInline,
} from './common@Basic'



export const SectionPropertyOrientationBlock = ({ defaultValue = false, ...props }: SectionPreviewPropertyProps & SectionPropertyOrientationProps) => {
    return (
        <BasicSectionPropertyOrientationBlock {...props} defaultValue={defaultValue} />
    );
};

export const SectionPropertyOrientationInline = ({ defaultValue = true, ...props }: SectionPropertyOrientationInlineProps & SectionPropertyOrientationProps) => {
    return (
        <BasicSectionPropertyOrientationInline {...props} defaultValue={defaultValue} />
    );
};
