import React from 'react'

import {
    SectionPreviewIgnorablePropertyProps,
    SectionPropertyTheme    as GroupSectionPropertyTheme,
    SectionPropertySize     as GroupSectionPropertySize,
    SectionPropertyNude     as GroupSectionPropertyNude,
    SectionPropertyGradient as GroupSectionPropertyGradient,
    SectionPropertyOutlined as GroupSectionPropertyOutlined,
    SectionPropertyMild     as GroupSectionPropertyMild,
} from './common@Group'
import {
    SectionPropertyViewportRefProps,
    SectionPropertyViewportRef as ModalSectionPropertyViewportRef,
    
    SectionPropertyEnabled     as ModalSectionPropertyEnabled,
} from './common@Modal'



export const SectionPropertyTheme = ({ ignorable = false, ...restProps }: SectionPreviewIgnorablePropertyProps) => {
    return (
        <GroupSectionPropertyTheme {...restProps} ignorable={ignorable} />
    );
};
export const SectionPropertySize = ({ ignorable = false, ...restProps }: SectionPreviewIgnorablePropertyProps) => {
    return (
        <GroupSectionPropertySize {...restProps} ignorable={ignorable} />
    );
};
export const SectionPropertyNude = ({ ignorable = false, ...restProps }: SectionPreviewIgnorablePropertyProps) => {
    return (
        <GroupSectionPropertyNude {...restProps} ignorable={ignorable} />
    );
};
export const SectionPropertyGradient = ({ ignorable = false, ...restProps }: SectionPreviewIgnorablePropertyProps) => {
    return (
        <GroupSectionPropertyGradient {...restProps} ignorable={ignorable} />
    );
};
export const SectionPropertyOutlined = ({ ignorable = false, ...restProps }: SectionPreviewIgnorablePropertyProps) => {
    return (
        <GroupSectionPropertyOutlined {...restProps} ignorable={ignorable} />
    );
};
export const SectionPropertyMild = ({ ignorable = false, ...restProps }: SectionPreviewIgnorablePropertyProps) => {
    return (
        <GroupSectionPropertyMild {...restProps} ignorable={ignorable} />
    );
};



export const SectionPropertyEnabled = ({ ignorable = false, ...restProps }: SectionPreviewIgnorablePropertyProps) => {
    return (
        <ModalSectionPropertyEnabled {...restProps} ignorable={ignorable} />
    );
};



export const SectionPropertyViewportRef = ({ dummyContent = '<p>...</p>', ...restProps }: SectionPropertyViewportRefProps) => {
    return (
        <ModalSectionPropertyViewportRef {...restProps} dummyContent={dummyContent} />
    );
};
