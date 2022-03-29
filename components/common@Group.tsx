import React from 'react'

import { CurrentComponent, CurrentNestedComponent, LinkCollapsePage, LinkDropdownPage, LinkPopupPage, SectionPreviewProperty, SectionPreviewPropertyProps } from './common'
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



export const ParagraphIgnoreProperty = () => (
    <p>
        Note: <CurrentNestedComponent /> may <em>override</em> or <em>ignore</em> this property.
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



export const SectionPropertyChildren = ({ titleTag = 'h2', property = 'children', properties = 'Merges Any Components', description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    <strong>Almost all Nodestrap&apos;s components</strong> can be <CurrentComponent />ed, with some exceptions such as <LinkPopupPage />, <LinkCollapsePage /> and <LinkDropdownPage />.
                </p>
                <p>
                    If you created a custom component that inherits from our component, your component is likely can be <CurrentComponent />ed.
                </p>
            </>
        } />
    );
};
export const SectionPropertyNestedChildren = ({ titleTag = 'h3', property = 'children', properties = 'Multi Level Groups', description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    You can place <strong>several nested</strong> <CurrentComponent />s at any depth with mixed <code>orientation</code>s, <code>theme</code>s, etc.
                </p>
            </>
        } />
    );
};
