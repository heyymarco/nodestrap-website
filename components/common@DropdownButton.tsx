import React from 'react'
import { LinkButtonIconPage, SectionPreviewProperty, SectionPreviewPropertyProps } from './common';

import {
    SectionPropertyPopupPlacementProps,
    SectionPropertyPopupPlacement as BasicSectionPropertyPopupPlacement,
    SectionPropertyPopupOffset    as BasicSectionPropertyPopupOffset,
    SectionPropertyPopupShift     as BasicSectionPropertyPopupShift,
} from './common@Popup'



export const SectionPropertyPopupPlacement = ({ relativeTo = <>button</>, ...props }: SectionPropertyPopupPlacementProps) => {
    return (
        <BasicSectionPropertyPopupPlacement {...props} relativeTo={relativeTo} />
    );
};
export const SectionPropertyPopupOffset    = ({ relativeTo = <>button</>, ...props }: SectionPropertyPopupPlacementProps) => {
    return (
        <BasicSectionPropertyPopupOffset {...props} relativeTo={relativeTo} />
    );
};
export const SectionPropertyPopupShift     = ({ relativeTo = <>button</>, ...props }: SectionPropertyPopupPlacementProps) => {
    return (
        <BasicSectionPropertyPopupShift {...props} relativeTo={relativeTo} />
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
