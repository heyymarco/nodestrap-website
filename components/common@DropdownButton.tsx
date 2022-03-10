import React from 'react'

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
