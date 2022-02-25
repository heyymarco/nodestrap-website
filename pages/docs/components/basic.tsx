import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'
import { Warning } from '../../../components/Info'

import { TransparentPreview } from '../../../components/TransparentPreview'
import { SectionInheritedProps, LinkBasicPage, LinkElementPage, LinkColorsPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionSubProperty, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentNestedComponent, CurrentBaseComponents, SectionPropertyProps, useComponentInfo, SectionPreviewPropertyProps, SectionPreviewProperty, LinkResponsiveProviderPage } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import { Basic } from '@nodestrap/basic'

import loadable from '@loadable/component'
const DemoBasicLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Basic' */'../../../components/DemoPanel@Basic'))



const WarnNotImplementExited = () => (
    <Warning>
        <p>
            By default <CurrentComponent /> is doesn&apos;t implement this feature, but
            the derived components may do.
        </p>
    </Warning>
);



export const defaultPropertySuffix = false;
export const SectionPropertyTheme = ({ property = 'theme', properties = 'Themes', description, ...restProps }: SectionPreviewPropertyProps) => {
    const { hasNestedComponent } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} property={property} properties={properties} specList={
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
export const SectionPropertySize = ({ property = 'size', properties = 'Sizes', description, ...restProps }: SectionPreviewPropertyProps) => {
    const { hasNestedComponent } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} property={property} properties={properties} specList={
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
export const SectionPropertyNude = ({ property = 'nude', properties = 'Nude', description, noBorder, ...restProps }: SectionPropertyNudeProps) => {
    const { nestedComponentName } = useComponentInfo();
    
    
    
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
            </>
        } />
    );
};
export const SectionPropertyGradient = ({ property = 'gradient', properties = 'Gradient', description, ...restProps }: SectionPreviewPropertyProps) => {
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
            </>
        } />
    );
};
export const SectionPropertyOutlined = ({ property = 'outlined', properties = 'Outlined', description, ...restProps }: SectionPreviewPropertyProps) => {
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
            </>
        } />
    );
};
export interface SectionPropertyMildProps extends SectionPreviewPropertyProps {
    setByDefault ?: boolean
}
export const SectionPropertyMild = ({ property = 'mild', properties = 'Mild', description, setByDefault = false, ...restProps }: SectionPropertyMildProps) => {
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
                {setByDefault && <p>
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
export const SectionPropertyOrientation = ({ propertySuffix = defaultPropertySuffix, property = 'orientation', properties = 'Orientations', children, ...restProps }: SectionPropertyProps) => {
    const { hasNestedComponent } = useComponentInfo();
    
    
    
    return (
        <SectionSubProperty {...restProps} propertySuffix={propertySuffix} property={property} properties={properties}>
            <p>
                Options for how the <CurrentNestedComponent />{hasNestedComponent && 's'} {hasNestedComponent ? 'are' : 'is'} stacked.
            </p>
            { children }
        </SectionSubProperty>
    );
};
export interface SectionPropertyOrientationProps extends SectionPreviewPropertyProps {
    setByDefault ?: boolean
}
export const SectionPropertyOrientationBlock = ({ titleTag='h4', property = "orientation='block'", properties = <><code>block</code> Orientation</>, description, setByDefault = true, ...restProps }: SectionPropertyOrientationProps) => {
    const { componentName, hasNestedComponent } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    To make <CurrentNestedComponent />{hasNestedComponent && 's'} stacked in <strong>vertical</strong>, set <code>{`<${componentName} orientation='block'>`}</code>.
                </p>
                {setByDefault && <p>
                    This is the <strong>default</strong> value if the <code>orientation</code> value is not specified.
                </p>}
            </>
        } />
    );
};
export const SectionPropertyOrientationInline = ({ titleTag='h4', property = "orientation='inline'", properties = <><code>inline</code> Orientation</>, description, setByDefault = false, ...restProps }: SectionPropertyOrientationProps) => {
    const { componentName, hasNestedComponent } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    To make <CurrentNestedComponent />{hasNestedComponent && 's'} stacked in <strong>vertical</strong>, set <code>{`<${componentName} orientation='inline'>`}</code>.
                </p>
                {setByDefault && <p>
                    This is the <strong>default</strong> value if the <code>orientation</code> value is not specified.
                </p>}
                <Warning>
                    <p>
                        Make sure the page is <strong>wide enough</strong> as the <code>inline</code> orientation may take up a lot of space (width).
                    </p>
                    <p>
                        Insufficient page width can cause distorion of your site&apos;s design.
                    </p>
                    <p>
                        You may need a <LinkResponsiveProviderPage /> to create a <strong>responsive orientation</strong> based on <em>overflow detection</em>.
                    </p>
                </Warning>
            </>
        } />
    );
};
export const SectionPropertyOrientationResponsive = ({ titleTag='h4', property = "orientation={currentFallback}", properties = 'Responsive Orientation', description, ...restProps }: SectionPreviewPropertyProps) => {
    const { hasNestedComponent } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    To make <CurrentNestedComponent />{hasNestedComponent && 's'} stacked in <strong>horizontal</strong> (if the page is wide enough) -or- stacked in <strong>vertical</strong> (if the page is too narrow),
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
}
export const SectionPropertyStyle = ({ propertySuffix = defaultPropertySuffix, styleName, property = styleName, properties = 'Styles', children, ...restProps }: SectionPropertyStyleProps) => {
    return (
        <SectionSubProperty {...restProps} propertySuffix={propertySuffix} property={property} properties={properties}>
            <p>
                The appearance alternatives of <CurrentComponent />.
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



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/basic' component={<LinkBasicPage />} bases={<LinkElementPage />}>
            <Head>
                <title>&lt;Basic&gt; Component</title>
                <meta name="description" content="Using <Basic> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is the most basic component in Nodestrap components after the <CurrentBaseComponents />.
                    It provides the basic styling and some basic essentials.
                </p>
                <p>
                    Unlike <CurrentBaseComponents />, <CurrentComponent /> has a default style that you can see visually.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoBasicLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Basic
                        theme='primary'
                    >
                        A {'<Basic>'} with primary theme
                    </Basic>
                    <p></p>
                    <Basic
                        theme='success'
                    >
                        A {'<Basic>'} with success theme
                    </Basic>
                    <p></p>
                    <Basic
                        theme='danger'
                    >
                        A {'<Basic>'} with danger theme
                    </Basic>
                    <p></p>
                    <TypeScriptCode>{`
<Basic
    theme='primary'
>
    A {'<Basic>'} with primary theme
</Basic>

<Basic
    theme='success'
>
    A {'<Basic>'} with success theme
</Basic>

<Basic
    theme='danger'
>
    A {'<Basic>'} with danger theme
</Basic>
                    `}</TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Basic
                        size='sm'
                        theme='primary'
                    >
                        A {'<Basic>'} with smaller size
                    </Basic>
                    <p></p>
                    <Basic
                        size={undefined}
                        theme='primary'
                    >
                        A {'<Basic>'} with default size
                    </Basic>
                    <p></p>
                    <Basic
                        size='lg'
                        theme='primary'
                    >
                        A {'<Basic>'} with larger size
                    </Basic>
                    <p></p>
                    <TypeScriptCode>{`
<Basic
    size='sm'
    theme='primary'
>
    A {'<Basic>'} with smaller size
</Basic>

<Basic
    size={undefined}
    theme='primary'
>
    A {'<Basic>'} with default size
</Basic>

<Basic
    size='lg'
    theme='primary'
>
    A {'<Basic>'} with larger size
</Basic>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <Basic
                            nude={true}
                            theme='warning'
                        >
                            hello world
                        </Basic>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Basic
    nude={true}
    theme='warning'
>
    hello world
</Basic>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Basic
                        gradient={true}
                        theme='primary'
                    >
                        hello world
                    </Basic>
                    <p></p>
                    <TypeScriptCode>{`
<Basic
    gradient={true}
    theme='primary'
>
    hello world
</Basic>
                    `}</TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        <Basic
                            outlined={true}
                            theme='primary'
                        >
                            hello world
                        </Basic>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Basic
    outlined={true}
    theme='primary'
>
    hello world
</Basic>
                    `}</TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Basic
                        mild={true}
                        theme='primary'
                    >
                        hello world
                    </Basic>
                    <p></p>
                    <TypeScriptCode>{`
<Basic
    mild={true}
    theme='primary'
>
    hello world
</Basic>
                    `}</TypeScriptCode>
                </SectionPropertyMild>
            </SectionVariants>
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Foregrounds, Backgrounds &amp; Borders'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>foreg</code>
                                <p>The text color.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>backg</code>
                                <p>The background color.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>backgGrad</code>
                                <p>The background gradient when <code>{`gradient={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>border</code>
                                <p>The default border-style, border-width and border-color.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderWidth</code>
                                <p>The thickness of border.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderColor</code>
                                <p>The color of border when <strong>un-themed</strong>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderRadius</code>
                                <p>The default border-radius.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderRadiusSm</code>
                                <p>The border-radius when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderRadiusLg</code>
                                <p>The border-radius when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Spacings'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>paddingInline</code>
                                <p>The default inner spacing on the left &amp; right.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingBlock</code>
                                <p>The default inner spacing on the top &amp; bottom.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingInlineSm</code>
                                <p>The inner spacing on the left &amp; right when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingBlockSm</code>
                                <p>The inner spacing on the top &amp; bottom when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingInlineLg</code>
                                <p>The inner spacing on the left &amp; right when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingBlockLg</code>
                                <p>The inner spacing on the top &amp; bottom when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Appearances'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>opacity</code>
                                <p>
                                    The opacity level.<br />
                                    <code>{`opacity=0`}</code> is fully transparent, <code>{`opacity=1`}</code> is fully opaque.
                                </p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Typos'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>fontSize</code>
                                <p>The default text size.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fontSizeSm</code>
                                <p>The text size when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fontSizeLg</code>
                                <p>The text size when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fontFamily</code>
                                <p>The text appearance.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fontWeight</code>
                                <p>The text thickness.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fontStyle</code> &amp; <code>textDecoration</code>
                                <p>The text style such as <em>italic</em>, <em>underline</em>, <em>dashed</em>, etc.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>lineHeight</code>
                                <p>The text height (including the gap between text rows).</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Animations'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>transDuration</code>
                                <p>The default <code>transition-duration</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>transition</code>
                                <p>The default <code>transition</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes none</code>
                                <p>A keyframes name represents <em>an empty keyframes</em>.</p>
                                <p>You should <strong>not to modify</strong> this property (in most cases).</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>filterExcited</code>
                                <p>A <code>filter</code> to apply when <code>{`excited={true}`}</code>.</p>
                                <WarnNotImplementExited />
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes excited</code>
                                <p>A keyframes name represents <em>an excited keyframes</em>.</p>
                                <WarnNotImplementExited />
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animExcited</code>
                                <p>An animation represents <em>excited animation</em>.</p>
                                <WarnNotImplementExited />
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Basic } from '@nodestrap/basic'

export default function SiteSidebar(props) {
    return (
        <Basic
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'complementary'} // override default value of semanticRole to 'complementary'
            semantictag={props.semanticTag ?? 'aside'}           // override default value of semanticTag  to 'aside'
            
            theme={props.theme ?? 'secondary'} // override default value of theme to 'secondary'
            mild={props.mild ?? true}          // override default value of mild  to true
        >
            { props.children }
        </Basic>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesBasicLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesBasicVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code>, <code>NudeVariant</code>, <code>ThemeVariant</code>, <code>GradientVariant</code>, <code>OutlinedVariant</code>, and <code>MildVariant</code>.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { Basic, usesBasicLayout, usesBasicVariants } from '@nodestrap/basic'

const useCustomComponentSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Basic>:
            usesBasicLayout(),
            usesBasicVariants(),
        ]),
        style({
            // then overwrite with your style:
            display : 'inline-block',
            margin  : '1em',
            /* ... */
            
            ...variants([
                rule('.big', {
                    // define the style at 'big' variant:
                    fontSize: 'xx-large',
                    /* ... */
                }),
                rule('.dark', {
                    // define the style at 'dark' variant:
                    background-color : 'black',
                    color            : 'white',
                    /* ... */
                }),
                /* ... */
            ]),
            
            /* ... */
        }),
    ),
]);

export default function CustomComponent(props) {
    const sheet = useCustomComponentSheet();
    return (
        <Basic {...props} mainClass={sheet.main}>
            { props.children }
        </Basic>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
