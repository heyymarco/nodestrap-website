import React from 'react'

import { SectionPreviewPropertyProps } from './common'

import {
    SectionPropertyNude     as BasicSectionPropertyNude,
    SectionPropertyOutlined as BasicSectionPropertyOutlined,
} from './common@Basic'



export const SectionPropertyNude = ({ defaultValue = true, ...props }: SectionPreviewPropertyProps) => {
    return (
        <BasicSectionPropertyNude {...props} defaultValue={defaultValue} />
    );
};
export const SectionPropertyOutlined = ({ defaultValue = true, ...props }: SectionPreviewPropertyProps) => {
    return (
        <BasicSectionPropertyOutlined {...props} defaultValue={defaultValue} />
    );
};
