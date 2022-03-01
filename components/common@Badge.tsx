import React from 'react'

import { CurrentComponent, SectionPreviewPropertyProps, useComponentInfo } from './common'

import {
    SectionPropertySize        as BasicSectionPropertySize,
    SectionPropertyStyleProps,
    SectionPropertyStyle,
    SectionPropertyItemStyleProps,
    SectionPropertyItemStyle,
    SectionPropertyFlatStyle   as BasicSectionPropertyFlatStyle,
    SectionPropertyFlushStyle  as BasicSectionPropertyFlushStyle,
    SectionPropertyJoinedStyle as BasicSectionPropertyJoinedStyle,
} from './common@Basic'
import {
    SectionPropertyMild        as IndicatorSectionPropertyMild,
} from './common@Indicator'



export const SectionPropertySize = ({ moreInfo, ...props }: SectionPreviewPropertyProps) => {
    return (
        <BasicSectionPropertySize {...props} moreInfo={moreInfo ?? <>
            <p>
                Note: the <CurrentComponent />&apos;s size is relative to <strong>parent element font size</strong>,
                using <code>em</code> unit, so it matches the parent size.
            </p>
            <p>
                You can either place the <CurrentComponent /> <strong>inside</strong> the target element or <strong>outside</strong>.
                We recommend place it <strong>inside</strong> (if possible), so the <CurrentComponent />&apos;s size <strong>matches</strong> the target element.
            </p>
        </>} />
    );
};

export const SectionPropertyMild = ({ setByDefault = false, ...props }: SectionPreviewPropertyProps) => {
    return (
        <IndicatorSectionPropertyMild {...props} setByDefault={setByDefault} />
    );
};



const badgeStyle = 'badgeStyle';
export const SectionPropertyBadgeStyle       = ({ styleName = badgeStyle, ...restProps }: SectionPropertyStyleProps) => {
    return (
        <SectionPropertyStyle {...restProps} styleName={styleName} />
    );
};
export const SectionPropertyPillStyle = ({ styleName = badgeStyle, property = 'pill', description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} styleName={styleName} property={property} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to make <CurrentComponent /> more rounded.
                </p>
            </>
        } />
    );
};
export const SectionPropertySquareStyle = ({ styleName = badgeStyle, property = 'square', description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} styleName={styleName} property={property} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to make <CurrentComponent /> look square.
                </p>
                <p>
                    Requires an <strong>empty</strong> children of <CurrentComponent />.
                </p>
            </>
        } />
    );
};
export const SectionPropertyCircleStyle = ({ styleName = badgeStyle, property = 'circle', description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} styleName={styleName} property={property} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to make <CurrentComponent /> look circle.
                </p>
                <p>
                    Requires an <strong>empty</strong> children of <CurrentComponent />.
                </p>
            </>
        } />
    );
};
