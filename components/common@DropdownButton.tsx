import React from 'react'
import { LinkButtonIconPage, SectionPreviewProperty, SectionPreviewPropertyProps } from './common';

import {
    SectionPropertyPopupPlacementProps,
    SectionPropertyPopupPlacement as BasicSectionPropertyPopupPlacement,
    SectionPropertyPopupOffset    as BasicSectionPropertyPopupOffset,
    SectionPropertyPopupShift     as BasicSectionPropertyPopupShift,
} from './common@Popup'



export const SectionPropertyPopupPlacement = ({ relativeTo = <em>button</em>, hoverElm = <em>dropdown</em>, ...props }: SectionPropertyPopupPlacementProps) => {
    return (
        <BasicSectionPropertyPopupPlacement {...props} relativeTo={relativeTo} hoverElm={hoverElm} />
    );
};
export const SectionPropertyPopupOffset    = ({ relativeTo = <em>button</em>, hoverElm = <em>dropdown</em>, ...props }: SectionPropertyPopupPlacementProps) => {
    return (
        <BasicSectionPropertyPopupOffset {...props} relativeTo={relativeTo} hoverElm={hoverElm} />
    );
};
export const SectionPropertyPopupShift     = ({ relativeTo = <em>button</em>, hoverElm = <em>dropdown</em>, ...props }: SectionPropertyPopupPlacementProps) => {
    return (
        <BasicSectionPropertyPopupShift {...props} relativeTo={relativeTo} hoverElm={hoverElm} />
    );
};



export const SectionCustomizingButton = ({ titleTag = 'h2', propertySuffix = false, property = 'button', properties = 'Customizing the Button', description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    You can replace the default <LinkButtonIconPage /> with your <strong>custom button</strong>.
                </p>
                <p>
                    Assign the <code>{property}</code> property with your <strong>custom button JSX</strong>.
                </p>
            </>
        } />
    );
};
