import React from 'react'

import { CurrentNestedComponent, LinkContentPage, LinkButtonPage, useComponentInfo, SectionPreviewProperty, SectionPreviewPropertyProps } from './common'
import { Warning } from './Info'
import {
    SectionPropertyNudeProps,
    SectionPropertyNude        as BasicSectionPropertyNude,
    SectionPropertyMild        as BasicSectionPropertyMild,
    SectionPropertyStyleProps,
    SectionPropertyStyle,
    SectionPropertyItemStyleProps,
    SectionPropertyItemStyle,
    SectionPropertyFlatStyle   as BasicSectionPropertyFlatStyle,
    SectionPropertyFlushStyle  as BasicSectionPropertyFlushStyle,
    SectionPropertyJoinedStyle as BasicSectionPropertyJoinedStyle,
} from './common@Basic'



export const SectionPropertyNude = ({ noBorder = true, ...props }: SectionPropertyNudeProps) => {
    return (
        <BasicSectionPropertyNude {...props} noBorder={noBorder} />
    );
};
export const SectionPropertyMild = ({ defaultValue = true, ...props }: SectionPreviewPropertyProps) => {
    return (
        <BasicSectionPropertyMild {...props} defaultValue={defaultValue} />
    );
};
const listStyle = 'listStyle';
export const SectionPropertyListStyle       = ({ styleName = listStyle, ...restProps }: SectionPropertyStyleProps) => {
    return (
        <SectionPropertyStyle {...restProps} styleName={styleName} />
    );
};
export const SectionPropertyFlatStyle       = ({ styleName = listStyle, ...restProps }: SectionPropertyItemStyleProps) => {
    return (
        <BasicSectionPropertyFlatStyle {...restProps} styleName={styleName} />
    );
};
export const SectionPropertyFlushStyle      = ({ styleName = listStyle, ...restProps }: SectionPropertyItemStyleProps) => {
    return (
        <BasicSectionPropertyFlushStyle {...restProps} styleName={styleName} />
    );
};
export const SectionPropertyJoinedStyle     = ({ styleName = listStyle, ...restProps }: SectionPropertyItemStyleProps) => {
    return (
        <BasicSectionPropertyJoinedStyle {...restProps} styleName={styleName} />
    );
};
export const SectionPropertyContentStyle    = ({ styleName = listStyle, property = 'content'   , description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} styleName={styleName} property={property} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to style the <CurrentNestedComponent /> to look similar to <LinkContentPage /> (usually with wider paddings).
                </p>
                <p>
                    Basically it merges the <CurrentNestedComponent />&apos;s style + <LinkContentPage />&apos;s style.
                </p>
            </>
        } />
    );
};
export const SectionPropertyBtnStyle        = ({ styleName = listStyle, property = 'btn'       , description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} styleName={styleName} property={property} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to style the <CurrentNestedComponent /> to look similar to <LinkButtonPage />.
                </p>
                <p>
                    Basically it merges the <CurrentNestedComponent />&apos;s style + <LinkButtonPage />&apos;s style.
                </p>
            </>
        } />
    );
};
export const SectionPropertyTabStyle        = ({ styleName = listStyle, property = 'tab'       , description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} styleName={styleName} property={property} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to style the <CurrentNestedComponent /> to look similar to <em>a tabbed interface</em>.
                </p>
            </>
        } />
    );
};
export const SectionPropertyBreadcrumbStyle = ({ styleName = listStyle, property = 'breadcrumb', description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} styleName={styleName} property={property} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to style the <CurrentNestedComponent /> to look similar to <em>a breadcrumb</em>.
                </p>
            </>
        } />
    );
};
export const SectionPropertyBulletStyle     = ({ styleName = listStyle, property = 'bullet'    , description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} styleName={styleName} property={property} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to style the <CurrentNestedComponent /> to look similar to <em>a bullet</em>.
                </p>
                <p>
                    Requires an <strong>empty</strong> children of <CurrentNestedComponent />.
                </p>
            </>
        } />
    );
};
export const SectionPropertyNumberedStyle   = ({ styleName = listStyle, property = 'numbered'  , description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} styleName={styleName} property={property} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to add a number (a counter) on each <CurrentNestedComponent />.
                </p>
            </>
        } />
    );
};

export const ContentMakeItemsClickable       = () => {
    const { componentName, hasNestedComponent, nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <>
            <p>
                To make <CurrentNestedComponent /> clickable, set <code>{`<${nestedComponentName} actionCtrl={true}>`}</code>.
            </p>
            <p>
                You can also set the <code>actionCtrl</code> at <code>{`<${componentName} actionCtrl={true}>`}</code>, so the default value of <code>actionCtrl</code> in the <CurrentNestedComponent /> will be the same as the parent.
            </p>
            <p>
                To handle the click action of the <CurrentNestedComponent />, assign <code>onClick</code> to the desired <strong>handler function</strong> -or- assign <code>href</code> to the desired <strong>URL</strong>.
            </p>
            <Warning>
                <p>
                    Assigning <code>{`actionCtrl={true}`}</code> and <code>href</code> makes the <CurrentNestedComponent /> rendered as <code>{`<a>`}</code>.
                </p>
                <p>
                    Assigning <code>{`actionCtrl={true}`}</code> without assigning <code>href</code> makes the <CurrentNestedComponent /> rendered as <code>{`<div role='button'>`}</code>.
                </p>
                <p>
                    Assigning <code>{`actionCtrl={true}`}</code> and <code>{`tag='button'`}</code> makes the <CurrentNestedComponent /> rendered as <code>{`<button>`}</code>.
                </p>
            </Warning>
        </>
    );
};
export const SectionPropertyActionCtrl       = ({ property = 'actionCtrl', properties = 'Links and Buttons'                    , description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} property={property} properties={properties} description={
            description
            ??
            <>
                <ContentMakeItemsClickable />
            </>
        } />
    );
};
