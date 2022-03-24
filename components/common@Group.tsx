import React from 'react'

import { CurrentNestedComponent, SectionPreviewPropertyProps } from './common'
import {
    SectionPropertyTheme    as ListSectionPropertyTheme,
    SectionPropertySize     as ListSectionPropertySize,
    SectionPropertyNudeProps,
    SectionPropertyGradient as ListSectionPropertyGradient,
    SectionPropertyOutlined as ListSectionPropertyOutlined,
} from './common@Basic'
import {
    SectionPropertyActive   as IndicatorSectionPropertyActive,
    SectionPropertyEnabled  as IndicatorSectionPropertyEnabled,
} from './common@Indicator'
import {
    SectionPropertyNude     as ListSectionPropertyNude,
    SectionPropertyMild     as ListSectionPropertyMild,
} from './common@List'



const ParagraphIgnoreProperty = () => (
    <p>
        Note: one/more <CurrentNestedComponent />s may <em>override</em> or <em>ignore</em> this property.
    </p>
);



export const SectionPropertyTheme    = ({ nestedable = false, effectNestedable = true, moreDescription, ...props }: SectionPreviewPropertyProps) => {
    return (
        <ListSectionPropertyTheme {...props} nestedable={nestedable} effectNestedable={effectNestedable} moreDescription={
            moreDescription
            ??
            <>
                <ParagraphIgnoreProperty />
            </>
        } />
    );
};
export const SectionPropertySize     = ({ nestedable = false, effectNestedable = true, moreDescription, ...props }: SectionPreviewPropertyProps) => {
    return (
        <ListSectionPropertySize {...props} nestedable={nestedable} effectNestedable={effectNestedable} moreDescription={
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



export const SectionPropertyActive   = ({ nestedable = false, effectNestedable = true, moreDescription, defaultValue = false, ...props }: SectionPreviewPropertyProps) => {
    return (
        <IndicatorSectionPropertyActive {...props} nestedable={nestedable} effectNestedable={effectNestedable} defaultValue={defaultValue} moreDescription={
            moreDescription
            ??
            <>
                <ParagraphIgnoreProperty />
            </>
        } />
    );
};
export const SectionPropertyEnabled  = ({ nestedable = false, effectNestedable = true, moreDescription, defaultValue = false, ...props }: SectionPreviewPropertyProps) => {
    return (
        <IndicatorSectionPropertyEnabled {...props} nestedable={nestedable} effectNestedable={effectNestedable} defaultValue={defaultValue} moreDescription={
            moreDescription
            ??
            <>
                <ParagraphIgnoreProperty />
            </>
        } />
    );
};