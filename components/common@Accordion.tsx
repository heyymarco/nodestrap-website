import React from 'react'

import { CurrentComponent, LinkCollapsePage, SectionPreviewProperty, SectionPreviewPropertyProps } from './common'

import {
    SectionPropertyLazyProps,
    SectionPropertyLazy         as PopupSectionPropertyLazy,
} from './common@Popup'



export const SectionPropertyOnActiveChange = ({ titleTag = 'h4', propertySuffix = true, property = 'onActiveChange', specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} description={
            description
            ??
            <>
                <p>
                    Fires when the user clicks the <strong>label</strong> on the <CurrentComponent />.
                </p>
                <p>
                    You have to implement an <em>event handler</em> to change your state, then the state changes the <code>active</code> property.
                </p>
            </>
        } />
    );
};



export const SectionPropertyLazy = ({ description, activeAlias = 'expanded', passiveAlias = 'folded', ...restProps }: SectionPropertyLazyProps) => {
    return (
        <PopupSectionPropertyLazy activeAlias={activeAlias} passiveAlias={passiveAlias} {...restProps} />
    );
};



export const SectionCustomizingCollapse = ({ titleTag = 'h2', propertySuffix = false, property = 'collapse', properties = 'Customizing the Collapse', description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    You can replace the default <LinkCollapsePage /> with your <strong>custom collapse</strong>.
                </p>
                <p>
                    Assign the <code>{property}</code> property with your <strong>custom collapse JSX</strong>.
                </p>
            </>
        } />
    );
};
