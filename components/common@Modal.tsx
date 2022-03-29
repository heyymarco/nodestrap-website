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
    SectionPropertyActive   as PopupSectionPropertyActive,
    SectionPropertyEnabled  as PopupSectionPropertyEnabled,
    
    SectionPropertyLazyProps,
    SectionPropertyLazy     as PopupSectionPropertyLazy,
} from './common@Popup'
import {
    SectionPropertyNude     as ListSectionPropertyNude,
    SectionPropertyMild     as ListSectionPropertyMild,
} from './common@List'
import {
    ParagraphIgnoreProperty
} from './common@Group'



export const SectionPropertyActive   = ({ nestedable = false, effectNestedable = true, ...props }: SectionPreviewPropertyProps) => {
    return (
        <PopupSectionPropertyActive {...props} nestedable={nestedable} effectNestedable={effectNestedable} />
    );
};
export const SectionPropertyEnabled  = ({ nestedable = false, effectNestedable = true, moreDescription, ...props }: SectionPreviewPropertyProps) => {
    return (
        <PopupSectionPropertyEnabled {...props} nestedable={nestedable} effectNestedable={effectNestedable} moreDescription={
            moreDescription
            ??
            <>
                <ParagraphIgnoreProperty />
            </>
        } />
    );
};



export const SectionPropertyLazy  = ({ nestedable = false, effectNestedable = false, childrenAlias = 'dialog', ...props }: SectionPropertyLazyProps) => {
    return (
        <PopupSectionPropertyLazy {...props} nestedable={nestedable} effectNestedable={effectNestedable} childrenAlias={childrenAlias} />
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
