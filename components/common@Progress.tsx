import React from 'react'

import { CurrentComponent, CurrentNestedComponent, SectionPreviewProperty, SectionPreviewPropertyProps, useComponentInfo } from './common'

import {
    SectionPropertySize              as BasicSectionPropertySize,
    SectionPropertyNude              as BasicSectionPropertyNude,
    SectionPropertyGradient          as BasicSectionPropertyGradient,
    SectionPropertyOutlined          as BasicSectionPropertyOutlined,
    SectionPropertyMild              as BasicSectionPropertyMild,
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
import { Warning } from './Info';



export const SectionPropertySize  = ({ nestedable = false, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <BasicSectionPropertySize {...restProps} nestedable={nestedable} />
    );
};
export const SectionPropertyNude  = ({ nestedable = false, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <BasicSectionPropertyNude {...restProps} nestedable={nestedable} />
    );
};
export const SectionPropertyGradient  = ({ nestedable = false, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <BasicSectionPropertyGradient {...restProps} nestedable={nestedable} />
    );
};
export const SectionPropertyOutlined  = ({ nestedable = false, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <BasicSectionPropertyOutlined {...restProps} nestedable={nestedable} />
    );
};
export const SectionPropertyMild      = ({ nestedable = false, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <BasicSectionPropertyMild {...restProps} nestedable={nestedable} />
    );
};
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
export const SectionPropertyProgressBarStyle = ({ styleName = progressBarStyle, properties = <><CurrentNestedComponent /> Styles</>, component = <CurrentNestedComponent />, ...restProps }: SectionPropertyStyleProps) => {
    return (
        <SectionPropertyStyle {...restProps} styleName={styleName} properties={properties} component={component} />
    );
};
export const SectionPropertyStripedStyle     = ({ styleName = progressBarStyle, property = 'striped', description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} property={property} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${nestedComponentName} ${styleName}='${property}'>`}</code> to apply a stripe pattern.
                </p>
            </>
        } />
    );
};



export const SectionPropertyRunning = ({ property = 'running', properties = 'Running', description, ...restProps }: SectionPreviewPropertyProps) => {
    const { nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    To make <CurrentNestedComponent /> appear running (busy), set <code>{`<${nestedComponentName} progressBarStyle='striped' running={true}>`}</code>.
                </p>
                <Warning>
                    <p>
                        Currently, you need to combine <code>{`running={true}`}</code> with <code>{`progressBarStyle='striped'`}</code> to make the animation visible.
                    </p>
                </Warning>
            </>
        } />
    );
};
