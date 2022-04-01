import React from 'react'
import { LinkActionControlPage, LinkButtonPage, LinkCardPage, LinkCloseButtonPage, SectionPreviewProperty, SectionPreviewPropertyProps, useComponentInfo } from './common';
import {
    SectionPropertyStyleProps,
    SectionPropertyStyle,
    
    SectionPropertyItemStyleProps,
    SectionPropertyItemStyle,
} from './common@Basic'
import {
    SectionPreviewIgnorablePropertyProps,
    SectionPropertyTheme    as GroupSectionPropertyTheme,
    SectionPropertySize     as GroupSectionPropertySize,
    SectionPropertyNude     as GroupSectionPropertyNude,
    SectionPropertyGradient as GroupSectionPropertyGradient,
    SectionPropertyOutlined as GroupSectionPropertyOutlined,
    SectionPropertyMild     as GroupSectionPropertyMild,
} from './common@Group'
import {
    SectionPropertyChildren    as ModalSectionPropertyChildren,
    SectionPropertyViewportRefProps,
    SectionPropertyViewportRef as ModalSectionPropertyViewportRef,
    
    SectionPropertyEnabled     as ModalSectionPropertyEnabled,
} from './common@Modal'



const modalSideStyle = 'modalSideStyle';
export const SectionPropertyModalSideStyle  = ({ styleName = modalSideStyle, properties = 'Card Styles', component = <LinkCardPage />, ...restProps }: SectionPropertyStyleProps) => {
    return (
        <SectionPropertyStyle {...restProps} styleName={styleName} properties={properties} component={component} />
    );
};
export const SectionPropertyScrollableStyle = ({ styleName = modalSideStyle, property = 'scrollable', properties = 'Scrolling Long Content', description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} styleName={styleName} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to add horizontal and/or vertical scrollbars to the <LinkCardPage /> when its content is too wide/tall.
                </p>
            </>
        } />
    );
};
