import React from 'react'

import { CurrentComponent, SectionPreviewPropertyProps } from './common'

import {
    SectionPropertyMild        as BasicSectionPropertyMild,
} from './common@Basic'
import {
    MediaList,
    
    SectionPropertyMediaProps,
    SectionPropertyMedia          as ContentSectionPropertyMedia,
    SectionPropertyMediaCustomProps,
    SectionPropertyMediaCustom    as ContentSectionPropertyMediaCustom,
    SectionPropertyMediaExcludingProps,
    SectionPropertyMediaExcluding as ContentSectionPropertyMediaExcluding,
} from './common@Content'




export const SectionPropertyMild = ({ defaultValue = true, ...props }: SectionPreviewPropertyProps) => {
    return (
        <BasicSectionPropertyMild {...props} defaultValue={defaultValue} />
    );
};



export const SectionPropertyMedia          = ({ treatment=<><strong>styled to fill the available width &amp;s height</strong> of <CurrentComponent />, while maintaining its <code>aspect-ratio</code></>, ...restProps }: SectionPropertyMediaProps) => {
    return (
        <ContentSectionPropertyMedia {...restProps} treatment={treatment} />
    );
};
export const SectionPropertyMediaCustom          = ({ warnDisplayBlock = false, ...restProps }: SectionPropertyMediaCustomProps) => {
    return (
        <ContentSectionPropertyMediaCustom {...restProps} warnDisplayBlock={warnDisplayBlock} />
    );
};
export const SectionPropertyMediaExcluding          = ({ ...restProps }: SectionPropertyMediaExcludingProps) => {
    return (
        <ContentSectionPropertyMediaExcluding {...restProps} />
    );
};

