import React from 'react'

import { LinkCardPage, useComponentInfo } from './common';

import {
    SectionPropertyStyleProps,
    SectionPropertyStyle,
    
    SectionPropertyItemStyleProps,
    SectionPropertyItemStyle,
} from './common@Basic'



const modalSideStyle = 'modalSideStyle';
export const SectionPropertyModalSideStyle  = ({ styleName = modalSideStyle, properties = 'Card Styles', component = <LinkCardPage />, ...restProps }: SectionPropertyStyleProps) => {
    return (
        <SectionPropertyStyle {...restProps} styleName={styleName} properties={properties} component={component} />
    );
};
export const SectionPropertyInlineStart = ({ styleName = modalSideStyle, property = 'inlineStart', properties = <><LinkCardPage /> on Left Side</>, description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} styleName={styleName} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to place the <LinkCardPage /> on the left (<code>ltr</code> mode, English) or on the right (<code>rtl</code> mode, Arabic).
                </p>
            </>
        } />
    );
};
export const SectionPropertyInlineEnd = ({ styleName = modalSideStyle, property = 'inlineEnd', properties = <><LinkCardPage /> on Right Side</>, description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} styleName={styleName} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to place the <LinkCardPage /> on the right (<code>ltr</code> mode, English) or on the left (<code>rtl</code> mode, Arabic).
                </p>
            </>
        } />
    );
};
export const SectionPropertyBlockStart = ({ styleName = modalSideStyle, property = 'blockStart', properties = <><LinkCardPage /> on Top Side</>, description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} styleName={styleName} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to place the <LinkCardPage /> on the top.
                </p>
            </>
        } />
    );
};
export const SectionPropertyBlockEnd = ({ styleName = modalSideStyle, property = 'blockEnd', properties = <><LinkCardPage /> on Bottom Side</>, description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} styleName={styleName} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to place the <LinkCardPage /> on the bottom.
                </p>
            </>
        } />
    );
};
