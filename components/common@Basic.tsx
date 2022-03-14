import React from 'react'


import { Component } from './common'
import { SpecList, DetailSpecItem } from './SpecList'
import { Warning } from './Info'

import { LinkColorsPage, SectionSubProperty, CurrentComponent, CurrentNestedComponent, SectionPropertyProps, useComponentInfo, SectionPreviewPropertyProps, SectionPreviewProperty, LinkResponsiveProviderPage, ParagraphDefaultValue } from './common'
import type { ThemeName } from '@nodestrap/basic';



export const defaultPropertySuffix = false;
export const themeNames: ThemeName[] = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
];
export const SectionPropertyTheme = ({ property = 'theme', properties = 'Themes', specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    const { hasNestedComponent } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} property={property} properties={properties} specList={
            specList
            ??
            <SpecList>
                <DetailSpecItem code='undefined' theme='primary'>
                    <p>Uses the nearest ancestor&apos;s <code>theme</code>.</p>
                </DetailSpecItem>
                <DetailSpecItem code='primary' theme='primary'>
                    <p>Sets the <code>foreground color</code>, <code>background color</code> and <code>border color</code> to <strong>primary</strong> theme.</p>
                    <p>The <strong>primary</strong> theme represents your <strong>website color</strong>.</p>
                </DetailSpecItem>
                <DetailSpecItem code='secondary' theme='secondary'>
                    <p>Sets the <code>foreground color</code>, <code>background color</code> and <code>border color</code> to <strong>secondary</strong> theme.</p>
                    <p>The <strong>secondary</strong> theme represents your <strong>website alternative color</strong>.</p>
                </DetailSpecItem>
                <DetailSpecItem code='success' theme='success'>
                    <p>Sets the <code>foreground color</code>, <code>background color</code> and <code>border color</code> to <strong>success</strong> theme.</p>
                    <p>The <strong>success</strong> theme represents a <strong>success result</strong> to website user.</p>
                </DetailSpecItem>
                <DetailSpecItem code='info' theme='info'>
                    <p>Sets the <code>foreground color</code>, <code>background color</code> and <code>border color</code> to <strong>info</strong> theme.</p>
                    <p>The <strong>info</strong> theme represents a <strong>general information</strong> to website user.</p>
                </DetailSpecItem>
                <DetailSpecItem code='warning' theme='warning'>
                    <p>Sets the <code>foreground color</code>, <code>background color</code> and <code>border color</code> to <strong>warning</strong> theme.</p>
                    <p>The <strong>warning</strong> theme represents a <strong>warning message</strong> or <strong>notify something that could cause an error</strong> to website user.</p>
                </DetailSpecItem>
                <DetailSpecItem code='danger' theme='danger'>
                    <p>Sets the <code>foreground color</code>, <code>background color</code> and <code>border color</code> to <strong>danger</strong> theme.</p>
                    <p>The <strong>danger</strong> theme represents an <strong>error result</strong> to website user.</p>
                </DetailSpecItem>
                <DetailSpecItem code='light' theme='light'>
                    <p>Sets the <code>foreground color</code>, <code>background color</code> and <code>border color</code> to <strong>light</strong> theme.</p>
                    <p>The <strong>light</strong> theme doen&apos;t have a meaning, just for helping a text content againts a dark background or image.</p>
                </DetailSpecItem>
                <DetailSpecItem code='dark' theme='dark'>
                    <p>Sets the <code>foreground color</code>, <code>background color</code> and <code>border color</code> to <strong>dark</strong> theme.</p>
                    <p>The <strong>dark</strong> theme doen&apos;t have a meaning, just for helping a text content againts a light background or image.</p>
                </DetailSpecItem>
            </SpecList>
        } description={
            description
            ??
            <>
                <p>
                    Changes the <strong>contextual theme</strong> of <CurrentNestedComponent />.
                </p>
                {hasNestedComponent && <>
                    <p>
                        By default, the <code>theme</code> of <CurrentNestedComponent /> is <strong>inherit</strong> from <CurrentComponent />, but
                        you can set the individual <code>theme</code> of <strong>each</strong> <CurrentNestedComponent />.
                    </p>
                    <p>
                        You can also set the <code>theme</code> at <CurrentComponent /> level, so the default <code>theme</code> of entire <CurrentNestedComponent />s are the same as <CurrentComponent />.
                    </p>
                </>}
            </>
        } />
    );
};
export const SectionPropertySize = ({ property = 'size', properties = 'Sizes', specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    const { hasNestedComponent } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} property={property} properties={properties} specList={
            specList
            ??
            <SpecList>
                <DetailSpecItem code='undefined'>
                    <p>Uses default size.</p>
                </DetailSpecItem>
                <DetailSpecItem code='sm'>
                    <p>Makes the <code>font-size</code>, <code>padding</code> and <code>border-radius</code> are <strong>smaller</strong> than the default.</p>
                </DetailSpecItem>
                <DetailSpecItem code='lg'>
                    <p>Makes the <code>font-size</code>, <code>padding</code> and <code>border-radius</code> are <strong>bigger</strong> than the default.</p>
                </DetailSpecItem>
            </SpecList>
        } description={
            description
            ??
            <>
                <p>
                    Changes the <strong>default size</strong> of <CurrentNestedComponent />.
                </p>
                {hasNestedComponent && <>
                    <p>
                        By default, the <code>size</code> of <CurrentNestedComponent /> is <strong>inherit</strong> from <CurrentComponent />, but
                        you can set the individual <code>size</code> of <strong>each</strong> <CurrentNestedComponent />.
                    </p>
                    <p>
                        You can also set the <code>size</code> at <CurrentComponent /> level, so the default <code>size</code> of entire <CurrentNestedComponent />s are the same as <CurrentComponent />.
                    </p>
                </>}
            </>
        } />
    );
};
export interface SectionPropertyNudeProps extends SectionPreviewPropertyProps {
    noBorder ?: boolean
}
export const SectionPropertyNude = ({ property = 'nude', properties = 'Nude', description, defaultValue = false, noBorder, ...restProps }: SectionPropertyNudeProps) => {
    const { componentName, nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Assigning <code>{`<${nestedComponentName} nude={true}>`}</code> makes the <CurrentNestedComponent /> lose its {!noBorder && <><code>border</code>, </>}<code>padding</code> and <code>background</code>.
                </p>
                <p>
                    This is useful if you want to fill the whole <CurrentNestedComponent /> with a custom component.
                </p>
                {defaultValue && <p>
                    Note: the <code>{`nude={true}`}</code> is <strong>already set by default</strong> at <CurrentComponent />, so to disable it assign <code>{`<${componentName} nude={false}>`}</code>.
                </p>}
            </>
        } />
    );
};
export const SectionPropertyGradient = ({ property = 'gradient', properties = 'Gradient', description, defaultValue = false, ...restProps }: SectionPreviewPropertyProps) => {
    const { componentName, hasNestedComponent, nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    To make <CurrentNestedComponent /> appear 3D, set <code>{`<${nestedComponentName} gradient={true}>`}</code>.
                </p>
                {hasNestedComponent && <p>
                    You can also set the <code>gradient</code> at <code>{`<${componentName} gradient={true}>`}</code>, so the entire <CurrentNestedComponent />s are 3D.
                </p>}
                {defaultValue && <p>
                    Note: the <code>{`gradient={true}`}</code> is <strong>already set by default</strong> at <CurrentComponent />, so to disable it assign <code>{`<${componentName} gradient={false}>`}</code>.
                </p>}
            </>
        } />
    );
};
export const SectionPropertyOutlined = ({ property = 'outlined', properties = 'Outlined', description, defaultValue = false, ...restProps }: SectionPreviewPropertyProps) => {
    const { componentName, hasNestedComponent, nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    To make <CurrentNestedComponent /> appear transparent and make the <code>border</code> and <code>text color</code> more contrast, set <code>{`<${nestedComponentName} outlined={true}>`}</code>.
                </p>
                {hasNestedComponent && <p>
                    You can also set the <code>outlined</code> at <code>{`<${componentName} outlined={true}>`}</code>, so the entire <CurrentNestedComponent />s are transparent.
                </p>}
                {defaultValue && <p>
                    Note: the <code>{`outlined={true}`}</code> is <strong>already set by default</strong> at <CurrentComponent />, so to disable it assign <code>{`<${componentName} outlined={false}>`}</code>.
                </p>}
            </>
        } />
    );
};
export const SectionPropertyMild = ({ property = 'mild', properties = 'Mild', description, defaultValue = false, ...restProps }: SectionPreviewPropertyProps) => {
    const { componentName, hasNestedComponent, nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    To make <CurrentNestedComponent /> look smoother (text friendly) and make the <code>text color</code> more contrast, set <code>{`<${nestedComponentName} mild={true}>`}</code>.
                </p>
                {hasNestedComponent && <p>
                    You can also set the <code>mild</code> at <code>{`<${componentName} mild={true}>`}</code>, so the entire <CurrentNestedComponent />s look smoother.
                </p>}
                {defaultValue && <p>
                    Note: the <code>{`mild={true}`}</code> is <strong>already set by default</strong> at <CurrentComponent />, so to disable it assign <code>{`<${componentName} mild={false}>`}</code>.
                </p>}
                <p>
                    The <em>smoother</em> means <em>near to white</em> on <em>light background</em> and <em>near to black</em> on <em>dark background</em>.<br />
                    You can <LinkColorsPage>adjust the background color here</LinkColorsPage>.
                </p>
            </>
        } />
    );
};
export interface SectionPropertyOrientationProps {
    orientationStuff ?: string
}
export const SectionPropertyOrientation = ({ propertySuffix = defaultPropertySuffix, orientationStuff = 'faced', property = 'orientation', properties = 'Orientations', children, ...restProps }: SectionPropertyProps & SectionPropertyOrientationProps) => {
    const { hasNestedComponent } = useComponentInfo();
    
    
    
    return (
        <SectionSubProperty {...restProps} propertySuffix={propertySuffix} property={property} properties={properties}>
            <p>
                Options for how the <CurrentNestedComponent />{hasNestedComponent && 's'} {hasNestedComponent ? 'are' : 'is'} {orientationStuff}.
            </p>
            { children }
        </SectionSubProperty>
    );
};
export const SectionPropertyOrientationBlock = ({ titleTag='h4', orientationStuff = 'faced', property = "orientation='block'", properties = <><code>block</code> Orientation</>, description, defaultValue = true, ...restProps }: SectionPreviewPropertyProps & SectionPropertyOrientationProps) => {
    const { componentName, hasNestedComponent } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    To make <CurrentNestedComponent />{hasNestedComponent && 's'} {orientationStuff} in <strong>vertical</strong>, set <code>{`<${componentName} orientation='block'>`}</code>.
                </p>
                {defaultValue && <ParagraphDefaultValue property='orientation' />}
            </>
        } />
    );
};
export interface SectionPropertyOrientationInlineProps extends SectionPreviewPropertyProps {
    overflowWarning ?: boolean
}
export const SectionPropertyOrientationInline = ({ titleTag='h4', orientationStuff = 'faced', property = "orientation='inline'", properties = <><code>inline</code> Orientation</>, description, defaultValue = false, overflowWarning = true, ...restProps }: SectionPropertyOrientationInlineProps & SectionPropertyOrientationProps) => {
    const { componentName, hasNestedComponent } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    To make <CurrentNestedComponent />{hasNestedComponent && 's'} {orientationStuff} in <strong>horizontal</strong>, set <code>{`<${componentName} orientation='inline'>`}</code>.
                </p>
                {defaultValue && <ParagraphDefaultValue property='orientation' />}
                {overflowWarning && <Warning>
                    <p>
                        Make sure the page is <strong>wide enough</strong> as the <code>inline</code> orientation may take up a lot of space (width).
                    </p>
                    <p>
                        Insufficient page width can cause distorion of your site&apos;s design.
                    </p>
                    <p>
                        You may need a <LinkResponsiveProviderPage /> to create a <strong>responsive orientation</strong> based on <em>overflow detection</em>.
                    </p>
                </Warning>}
            </>
        } />
    );
};
export const SectionPropertyOrientationResponsive = ({ titleTag='h4', orientationStuff = 'faced', property = "orientation={currentFallback}", properties = 'Responsive Orientation', description, ...restProps }: SectionPreviewPropertyProps & SectionPropertyOrientationProps) => {
    const { hasNestedComponent } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    To make <CurrentNestedComponent />{hasNestedComponent && 's'} {orientationStuff} in <strong>horizontal</strong> (if the page is wide enough) -or- {orientationStuff} in <strong>vertical</strong> (if the page is too narrow),
                    do this trick!
                </p>
                <p>
                    With a help of <LinkResponsiveProviderPage />, you can create a <strong>responsive orientation</strong>.
                </p>
            </>
        } />
    );
};
export interface SectionPropertyStyleProps extends SectionPropertyProps {
    styleName ?: string
    component ?: Component
}
export const SectionPropertyStyle = ({ propertySuffix = defaultPropertySuffix, styleName, property = styleName, properties = 'Styles', component = <CurrentComponent />, children, ...restProps }: SectionPropertyStyleProps) => {
    return (
        <SectionSubProperty {...restProps} propertySuffix={propertySuffix} property={property} properties={properties}>
            <p>
                The appearance alternatives of {component}.
            </p>
            { children }
        </SectionSubProperty>
    );
};
export interface SectionPropertyItemStyleProps extends SectionPreviewPropertyProps, Pick<SectionPropertyStyleProps, 'styleName'> {
}
export const SectionPropertyItemStyle = ({ titleTag='h4', styleName, property, properties, ...restProps }: SectionPropertyItemStyleProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={`${styleName}='${property}'`} properties={properties ?? <><code>{property}</code> Style</>} />
    );
};
export const SectionPropertyFlatStyle   = ({ property = 'flat'  , description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName, hasNestedComponent } = useComponentInfo();
    const styleName = restProps.styleName;
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} property={property} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to remove the <code>border</code>, <code>border-radius</code>, and <em>separator</em> (a <code>border</code> between {hasNestedComponent ? <><CurrentNestedComponent />s</> : <><CurrentComponent />&apos;s items</>}).
                </p>
            </>
        } />
    );
};
export const SectionPropertyFlushStyle  = ({ property = 'flush' , description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    const styleName = restProps.styleName;
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} property={property} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to remove the <code>border</code> and <code>border-radius</code>.
                </p>
            </>
        } />
    );
};
export const SectionPropertyJoinedStyle = ({ property = 'joined', description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName, hasNestedComponent } = useComponentInfo();
    const styleName = restProps.styleName;
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} property={property} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to remove the <em>separator</em> (a <code>border</code> between {hasNestedComponent ? <><CurrentNestedComponent />s</> : <><CurrentComponent />&apos;s items</>}).
                </p>
            </>
        } />
    );
};
