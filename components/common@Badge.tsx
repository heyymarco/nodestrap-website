import React from 'react'

import { SectionPreviewPropertyProps } from './common'

import {
    SectionPropertyMild        as IndicatorSectionPropertyMild,
} from './common@Indicator'



export const SectionPropertyMild = ({ setByDefault = false, ...props }: SectionPreviewPropertyProps) => {
    return (
        <IndicatorSectionPropertyMild {...props} setByDefault={setByDefault} />
    );
};
