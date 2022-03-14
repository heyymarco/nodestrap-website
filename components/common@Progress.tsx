import React from 'react'

import { CurrentComponent, CurrentNestedComponent, SectionPreviewPropertyProps, useComponentInfo } from './common'

import {
    SectionPropertyOrientationProps,
    SectionPropertyOrientationBlock  as BasicSectionPropertyOrientationBlock,
    SectionPropertyOrientationInlineProps,
    SectionPropertyOrientationInline as BasicSectionPropertyOrientationInline,
    
    SectionPropertyStyleProps,
    SectionPropertyStyle,
    SectionPropertyItemStyleProps,
    SectionPropertyFlatStyle   as BasicSectionPropertyFlatStyle,
    SectionPropertyFlushStyle  as BasicSectionPropertyFlushStyle,
    SectionPropertyJoinedStyle as BasicSectionPropertyJoinedStyle,
    SectionPropertyItemStyle,
} from './common@Basic'



export const SectionPropertyOrientationBlock = ({ defaultValue = false, ...props }: SectionPreviewPropertyProps & SectionPropertyOrientationProps) => {
    return (
        <BasicSectionPropertyOrientationBlock {...props} defaultValue={defaultValue} />
    );
};

export const SectionPropertyOrientationInline = ({ defaultValue = true, ...props }: SectionPropertyOrientationInlineProps & SectionPropertyOrientationProps) => {
    return (
        <BasicSectionPropertyOrientationInline {...props} defaultValue={defaultValue} />
    );
};



const progressStyle = 'progressStyle';
export const SectionPropertyProgressStyle   = ({ styleName = progressStyle, properties = <><CurrentComponent /> Styles</>, ...restProps }: SectionPropertyStyleProps) => {
    return (
        <SectionPropertyStyle {...restProps} styleName={styleName} properties={properties} />
    );
};
export const SectionPropertyFlatStyle   = ({ styleName = progressStyle, ...restProps }: SectionPropertyItemStyleProps) => {
    return (
        <BasicSectionPropertyFlatStyle {...restProps} styleName={styleName} />
    );
};
export const SectionPropertyFlushStyle  = ({ styleName = progressStyle, ...restProps }: SectionPropertyItemStyleProps) => {
    return (
        <BasicSectionPropertyFlushStyle {...restProps} styleName={styleName} />
    );
};
export const SectionPropertyJoinedStyle = ({ styleName = progressStyle, ...restProps }: SectionPropertyItemStyleProps) => {
    return (
        <BasicSectionPropertyJoinedStyle {...restProps} styleName={styleName} />
    );
};



const progressBarStyle = 'progressBarStyle';
export const SectionPropertyProgressBarStyle   = ({ styleName = progressBarStyle, properties = <><CurrentNestedComponent /> Styles</>, component = <CurrentNestedComponent />, ...restProps }: SectionPropertyStyleProps) => {
    return (
        <SectionPropertyStyle {...restProps} styleName={styleName} properties={properties} component={component} />
    );
};
export const SectionPropertyStripedStyle   = ({ property = 'striped'  , description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    const styleName = restProps.styleName;
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} property={property} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to apply a stripe pattern.
                </p>
            </>
        } />
    );
};
