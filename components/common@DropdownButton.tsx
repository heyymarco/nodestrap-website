import React from 'react'

import { CurrentNestedComponent, LinkButtonIconPage, ParagraphDefaultValue, SectionPreviewProperty, SectionPreviewPropertyProps, useComponentInfo } from './common';
import { DetailSpecItem, SpecList } from './SpecList';

import {
    SectionPropertyPopupPlacementProps,
    SectionPropertyPopupPlacement as BasicSectionPropertyPopupPlacement,
    SectionPropertyPopupOffset    as BasicSectionPropertyPopupOffset,
    SectionPropertyPopupShift     as BasicSectionPropertyPopupShift,
    
    SectionPropertyActive         as PopupSectionPropertyActive,
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



export const SectionPropertyActive  = ({ specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    const { nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <PopupSectionPropertyActive {...restProps} specList={
            specList
            ??
            <SpecList>
                <DetailSpecItem code='undefined'>
                    <p>
                        At this state, the <CurrentNestedComponent /> will be automatically toggled to <strong>show</strong> or <strong>hide</strong>.
                    </p>
                    <ParagraphDefaultValue property='active' />
                </DetailSpecItem>
                <DetailSpecItem code='true'>
                    <p>
                        At this state, the <CurrentNestedComponent /> is currently <strong>shown</strong>.
                    </p>
                </DetailSpecItem>
                <DetailSpecItem code='false'>
                    <p>
                        At this state, the <CurrentNestedComponent /> is currently <strong>hidden</strong>.
                    </p>
                </DetailSpecItem>
            </SpecList>
        } description={
            description
            ??
            <>
                <p>
                    <em>Manually</em> shows/hides the <CurrentNestedComponent />.
                </p>
                <p>
                    To show <CurrentNestedComponent />, set <code>{`<${nestedComponentName} active={true}>`}</code>.
                </p>
                <p>
                    To <em>automatically</em> toggle the visibility of the <CurrentNestedComponent />, do not assign <code>active</code> property -or- assign <code>{`active={undefined}`}</code>.<br />
                    The initial visibility can be set on <code>defaultActive</code> property.
                </p>
            </>
        } />
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
