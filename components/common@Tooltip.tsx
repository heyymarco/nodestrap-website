import React from 'react'

import { CurrentNestedComponent, useComponentInfo, SectionPreviewPropertyProps, ParagraphDefaultValue, SectionPreviewProperty, CurrentComponent } from './common'
import { DetailSpecItem, SpecList } from './SpecList';

import {
    SectionPropertyPopupAutoFlip  as PopupSectionPropertyPopupAutoFlip,
    SectionPropertyPopupAutoShift as PopupSectionPropertyPopupAutoShift,
    
    SectionPropertyActive         as PopupSectionPropertyActive,
} from './common@Popup'



export const SectionPropertyPopupAutoFlip  = ({ defaultValue = true, ...props }: SectionPreviewPropertyProps) => {
    return (
        <PopupSectionPropertyPopupAutoFlip {...props} defaultValue={defaultValue} />
    );
};
export const SectionPropertyPopupAutoShift = ({ defaultValue = true, ...props }: SectionPreviewPropertyProps) => {
    return (
        <PopupSectionPropertyPopupAutoShift {...props} defaultValue={defaultValue} />
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
                        At this state, the <CurrentNestedComponent /> will be automatically shown when the <em>target element</em> is <strong>hovered</strong> or <strong>focused</strong>, otherwise hidden.
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
        } />
    );
};
export const SectionPropertyActiveDelay = ({ titleTag = 'h4', propertySuffix = true, property = 'activeDelay', description, defaultValue = <><code>300</code> milliseconds</>, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} description={
            description
            ??
            <>
                <p>
                    Prevents accidentally showing the <CurrentComponent /> when the cursor <em>quickly hovers over</em> the <strong>target element</strong>.
                </p>
                { (defaultValue !== undefined) && <ParagraphDefaultValue property={property} defaultValue={defaultValue} />}
                <p>
                    This property affects to <strong>hover event</strong>, <strong>focus event</strong>, and re-assigning <code>active</code> property quickly.
                </p>
            </>
        } />
    );
};
export const SectionPropertyPassiveDelay = ({ titleTag = 'h4', propertySuffix = true, property = 'passiveDelay', description, defaultValue = <><code>500</code> milliseconds</>, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} description={
            description
            ??
            <>
                <p>
                    Prevents accidentally hiding the <CurrentComponent /> when the cursor <em>quickly leaves</em> the <strong>target element</strong>.
                </p>
                { (defaultValue !== undefined) && <ParagraphDefaultValue property={property} defaultValue={defaultValue} />}
                <p>
                    This property affects to <strong>leave event</strong>, <strong>blur event</strong>, and re-assigning <code>active</code> property quickly.
                </p>
            </>
        } />
    );
};
