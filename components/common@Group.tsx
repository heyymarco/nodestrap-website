import React from 'react'

import { SectionPreviewPropertyProps } from './common'
import {
    SectionPropertyTheme    as ListSectionPropertyTheme,
    SectionPropertySize     as ListSectionPropertySize,
    SectionPropertyNudeProps,
    SectionPropertyGradient as ListSectionPropertyGradient,
    SectionPropertyOutlined as ListSectionPropertyOutlined,
} from './common@Basic'
import {
    SectionPropertyNude     as ListSectionPropertyNude,
    SectionPropertyMild     as ListSectionPropertyMild,
} from './common@List'



const ParagraphIgnoreProperty = () => (
    <p>
        Note: one/more <em>nested component</em> may <em>override</em> or <em>ignore</em> this property.
    </p>
);



export const SectionPropertyTheme    = ({ moreDescription, ...props }: SectionPreviewPropertyProps) => {
    return (
        <ListSectionPropertyTheme {...props} moreDescription={
            moreDescription
            ??
            <>
                <ParagraphIgnoreProperty />
            </>
        } />
    );
};
export const SectionPropertySize     = ({ moreDescription, ...props }: SectionPreviewPropertyProps) => {
    return (
        <ListSectionPropertySize {...props} moreDescription={
            moreDescription
            ??
            <>
                <ParagraphIgnoreProperty />
            </>
        } />
    );
};
export const SectionPropertyNude     = ({ nestedable = false, effectNestedable = true, moreDescription, ...props }: SectionPropertyNudeProps) => {
    return (
        <ListSectionPropertyNude {...props} nestedable={nestedable} effectNestedable={effectNestedable} moreDescription={
            moreDescription
            ??
            <>
                <ParagraphIgnoreProperty />
            </>
        } />
    );
};
export const SectionPropertyGradient = ({ nestedable = false, effectNestedable = true, moreDescription, ...props }: SectionPreviewPropertyProps) => {
    return (
        <ListSectionPropertyGradient {...props} nestedable={nestedable} effectNestedable={effectNestedable} moreDescription={
            moreDescription
            ??
            <>
                <ParagraphIgnoreProperty />
            </>
        } />
    );
};
export const SectionPropertyOutlined = ({ nestedable = false, effectNestedable = true, moreDescription, ...props }: SectionPreviewPropertyProps) => {
    return (
        <ListSectionPropertyOutlined {...props} nestedable={nestedable} effectNestedable={effectNestedable} moreDescription={
            moreDescription
            ??
            <>
                <ParagraphIgnoreProperty />
            </>
        } />
    );
};
export const SectionPropertyMild     = ({ nestedable = false, effectNestedable = true, moreDescription, defaultValue = false, ...props }: SectionPreviewPropertyProps) => {
    return (
        <ListSectionPropertyMild {...props} nestedable={nestedable} effectNestedable={effectNestedable} defaultValue={defaultValue} moreDescription={
            moreDescription
            ??
            <>
                <ParagraphIgnoreProperty />
            </>
        } />
    );
};
