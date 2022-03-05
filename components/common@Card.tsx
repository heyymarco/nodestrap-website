import React from 'react'

import { SectionPreviewPropertyProps } from './common';
import {
    SectionPropertyMild        as BasicSectionPropertyMild,
    SectionPropertyStyleProps,
    SectionPropertyStyle,
    SectionPropertyItemStyleProps,
    SectionPropertyFlatStyle   as BasicSectionPropertyFlatStyle,
    SectionPropertyFlushStyle  as BasicSectionPropertyFlushStyle,
    SectionPropertyJoinedStyle as BasicSectionPropertyJoinedStyle,
} from './common@Basic'



export const SectionPropertyMild = ({ defaultValue = true, ...props }: SectionPreviewPropertyProps) => {
    return (
        <BasicSectionPropertyMild {...props} defaultValue={defaultValue} />
    );
};
const cardStyle = 'cardStyle';
export const SectionPropertyCardStyle   = ({ styleName = cardStyle, ...restProps }: SectionPropertyStyleProps) => {
    return (
        <SectionPropertyStyle {...restProps} styleName={styleName} />
    );
};
export const SectionPropertyFlatStyle   = ({ styleName = cardStyle, ...restProps }: SectionPropertyItemStyleProps) => {
    return (
        <BasicSectionPropertyFlatStyle {...restProps} styleName={styleName} />
    );
};
export const SectionPropertyFlushStyle  = ({ styleName = cardStyle, ...restProps }: SectionPropertyItemStyleProps) => {
    return (
        <BasicSectionPropertyFlushStyle {...restProps} styleName={styleName} />
    );
};
export const SectionPropertyJoinedStyle = ({ styleName = cardStyle, ...restProps }: SectionPropertyItemStyleProps) => {
    return (
        <BasicSectionPropertyJoinedStyle {...restProps} styleName={styleName} />
    );
};
