import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { TransparentPreview } from '../../../components/TransparentPreview'
import { SectionInheritedProps, LinkCardPage, LinkIndicatorPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, SectionVariants, SectionStates, LinkResponsiveProviderPage, SectionSubProperty, SectionPropertyProps } from '../../../components/common-contents'
import { Card, OrientationName } from '@nodestrap/card'
import { TypeScriptCode } from '../../../components/Code'
import ResponsiveProvider from '@nodestrap/responsive'
import { Tips, Warning } from '../../../components/Info'
import Element from '@nodestrap/element'
import {
    SectionPropertyTheme    as BasicSectionPropertyTheme,
    SectionPropertySize     as BasicSectionPropertySize,
 // SectionPropertyNude     as BasicSectionPropertyNude,
    SectionPropertyGradient as BasicSectionPropertyGradient,
    SectionPropertyOutlined as BasicSectionPropertyOutlined,
    SectionPropertyMildProps,
    SectionPropertyMild     as BasicSectionPropertyMild,
} from './basic'

import loadable from '@loadable/component'
const DemoCardLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Card' */'../../../components/DemoPanel@Card'))



const DummyContents = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
            </p>
            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
            </p>
        </>
    );
};



const defaultPropertySuffix = false;
export const SectionPropertyTheme = ({ propertySuffix = defaultPropertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <BasicSectionPropertyTheme {...restProps} propertySuffix={propertySuffix} demonstration={<>
            <Card
                theme='danger'
                header={<>
                    A Card with Danger Theme
                </>}
                footer={<>
                    Just for fun!
                </>}
            >
                <DummyContents />
            </Card>
            <p></p>
            <Card
                theme='success'
                header={<>
                    A Card with Success Theme
                </>}
                footer={<>
                    Just for fun!
                </>}
            >
                <DummyContents />
            </Card>
            <p></p>
            <TypeScriptCode>{`
<Card
    theme='danger'
    header={<>
        A Card with Danger Theme
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>

<Card
    theme='success'
    header={<>
        A Card with Success Theme
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
            `}</TypeScriptCode>
        </>} />
    );
};
export const SectionPropertySize = ({ propertySuffix = defaultPropertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <BasicSectionPropertySize {...restProps} propertySuffix={propertySuffix} demonstration={<>
            <Card
                size='sm'
                theme='primary'
                header={<>
                    A Card with Smaller Size
                </>}
                footer={<>
                    Just for fun!
                </>}
            >
                <DummyContents />
            </Card>
            <p></p>
            <Card
                size='lg'
                theme='primary'
                header={<>
                    A Card with Larger Size
                </>}
                footer={<>
                    Just for fun!
                </>}
            >
                <DummyContents />
            </Card>
            <p></p>
            <TypeScriptCode>{`
<Card
    size='sm'
    theme='primary'
    header={<>
        A Card with Smaller Size
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>

<Card
    size='lg'
    theme='primary'
    header={<>
        A Card with Larger Size
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
            `}</TypeScriptCode>
        </>} />
    );
};
/*export const SectionPropertyNude = ({ propertySuffix = defaultPropertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <BasicSectionPropertyNude {...restProps} propertySuffix={propertySuffix} demonstration={<>
            <TransparentPreview>
                <Card
                    nude={true}
                    theme='primary'
                    header={<>
                        A Card with Nude Variant
                    </>}
                    footer={<>
                        Just for fun!
                    </>}
                >
                    <DummyContents />
                </Card>
            </TransparentPreview>
            <p></p>
            <TypeScriptCode>{`
<Card
    nude={true}
    theme='primary'
    header={<>
        A Card with Nude Variant
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
            `}</TypeScriptCode>
        </>}>
            {
                children
                ??
                <>
                    <p>
                        Assigning <code>{`<Card nude={true}>`}</code> makes the <CurrentComponent /> lose its <code>background</code>, <code>padding</code> and <code>border</code>.
                    </p>
                    <p>
                        This is useful if you want to fill the whole <CurrentComponent /> into a container component.
                    </p>
                </>
            }
        </BasicSectionPropertyNude>
    );
};*/
export const SectionPropertyGradient = ({ propertySuffix = defaultPropertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <BasicSectionPropertyGradient {...restProps} propertySuffix={propertySuffix} demonstration={<>
            <Card
                gradient={true}
                theme='primary'
                header={<>
                    A Card with Gradient Variant
                </>}
                footer={<>
                    Just for fun!
                </>}
            >
                <DummyContents />
            </Card>
            <p></p>
            <TypeScriptCode>{`
<Card
    gradient={true}
    theme='primary'
    header={<>
        A Card with Gradient Variant
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
            `}</TypeScriptCode>
        </>}>
            {
                children
                ??
                <>
                    <p>
                        To make <CurrentComponent /> appear 3D, set <code>{`<Card gradient={true}>`}</code>.
                    </p>
                </>
            }
        </BasicSectionPropertyGradient>
    );
};
export const SectionPropertyOutlined = ({ propertySuffix = defaultPropertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <BasicSectionPropertyOutlined {...restProps} propertySuffix={propertySuffix} demonstration={<>
            <TransparentPreview>
                <Card
                    outlined={true}
                    theme='primary'
                    header={<>
                        A Card with Outlined Variant
                    </>}
                    footer={<>
                        Just for fun!
                    </>}
                >
                    <DummyContents />
                </Card>
            </TransparentPreview>
            <p></p>
            <TypeScriptCode>{`
<Card
    outlined={true}
    theme='primary'
    header={<>
        A Card with Outlined Variant
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
            `}</TypeScriptCode>
        </>}>
            {
                children
                ??
                <>
                    <p>
                        To make <CurrentComponent /> appear transparent, set <code>{`<Card outlined={true}>`}</code>.
                    </p>
                </>
            }
        </BasicSectionPropertyOutlined>
    );
};
export const SectionPropertyMild = ({ propertySuffix = defaultPropertySuffix, children, setByDefault, ...restProps }: SectionPropertyMildProps) => {
    return (
        <BasicSectionPropertyMild {...restProps} propertySuffix={propertySuffix} setByDefault={setByDefault ?? true} />
    );
};
export const SectionPropertyOrientation = ({ property, properties, propertySuffix = defaultPropertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <SectionSubProperty {...restProps} propertySuffix={propertySuffix} property={property ?? 'orientation'} properties={properties ?? 'Orientation'}>
            {
                children
                ??
                <>
                    <SectionSubProperty titleTag='h4' propertySuffix={propertySuffix} property={`orientation='block'`} properties={<><code>block</code> Orientation</>} demonstration={<>
                        <Card
                            orientation='block'
                            theme='primary'
                            header={<>
                                A Card with Block Orientation
                            </>}
                            footer={<>
                                Just for fun!
                            </>}
                        >
                            <DummyContents />
                        </Card>
                        <p></p>
                        <TypeScriptCode>{`
<Card
    orientation='block'
    theme='primary'
    header={<>
        A Card with block Orientation
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                        `}</TypeScriptCode>
                    </>}>
                        <p>
                            To make <CurrentComponent /> stacked in <strong>vertical</strong>, set <code>{`<Card orientation='block'>`}</code>.
                        </p>
                        <p>
                            This is the <strong>default</strong> value if the <code>orientation</code> value is not specified.
                        </p>
                    </SectionSubProperty>
                    <SectionSubProperty titleTag='h4' propertySuffix={propertySuffix} property={`orientation='inline'`} properties={<><code>inline</code> Orientation</>} demonstration={<>
                        <div style={{ overflowX: 'auto' }}>
                            <Card
                                orientation='inline'
                                theme='primary'
                                header={<>
                                    A Card with Inline Orientation
                                </>}
                                footer={<>
                                    Just for fun!
                                </>}
                            >
                                <DummyContents />
                            </Card>
                        </div>
                        <p></p>
                        <TypeScriptCode>{`
<Card
    orientation='inline'
    theme='primary'
    header={<>
        A Card with inline Orientation
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                        `}</TypeScriptCode>
                    </>}>
                        <p>
                            To make <CurrentComponent /> stacked in <strong>horizontal</strong>, set <code>{`<Card orientation='inline'>`}</code>.
                        </p>
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
                    </SectionSubProperty>
                    <SectionSubProperty titleTag='h4' propertySuffix={propertySuffix} property={`orientation={currentFallback}`} properties='Responsive Orientation' demonstration={<>
                        <Tips>
                            <p>
                                Try to <strong>resize</strong> the <span style={{ background :'pink', border : 'solid 1px darkred', padding: '0.15em' }}>red container</span> below:
                            </p>
                        </Tips>
                        <p></p>
                        <ResponsiveProvider<OrientationName> fallbacks={[
                            'inline', // the first try, if overflow is detected, then try next
                            'block',  // the last try
                        ]}>{(currentFallback) => (
                            // a <div> to watch for overflows
                            <div style={{
                                display    : 'block',
                                overflow   : 'hidden',
                                background : 'pink',
                                border     : 'solid 1px darkred',
                                resize     : 'horizontal',
                                padding    : '1rem',
                                maxWidth   : '100%',
                            }}>
                                <Card
                                    orientation={currentFallback}
                                    theme='primary'
                                    header={<>
                                        A Card with Responsive Orientation
                                    </>}
                                    footer={<>
                                        Just for fun!
                                    </>}
                                >
                                    <DummyContents />
                                </Card>
                            </div>
                        )}</ResponsiveProvider>
                        <p></p>
                        <TypeScriptCode>{`
<ResponsiveProvider fallbacks={[
    'inline', // the first try, if overflow is detected, then try next
    'block',  // the last try
]}>{(currentFallback) => (
    // a <div> to watch for overflows
    <div style={{
        display    : 'block',
        overflow   : 'hidden',
        background : 'pink',
        border     : 'solid 1px darkred',
        resize     : 'horizontal',
        padding    : '1rem',
        maxWidth   : '100%',
    }}>
        <Card
            orientation={currentFallback}
            theme='primary'
            header={<>
                A Card with Responsive Orientation
            </>}
            footer={<>
                Just for fun!
            </>}
        >
            <p>...</p>
            <img alt='lorem image' src='/images/lorem-image-1.svg' />
            <p>...</p>
        </Card>
    </div>
)}</ResponsiveProvider>
                        `}</TypeScriptCode>
                    </>}>
                        <p>
                            To make <CurrentComponent /> stacked in <strong>horizontal</strong> (if the page is wide enough) -or- stacked in <strong>vertical</strong> (if the page is too narrow),
                            do this trick!
                        </p>
                        <p>
                            With a help of <LinkResponsiveProviderPage />, you can create a <strong>responsive orientation</strong>.
                        </p>
                    </SectionSubProperty>
                </>
            }
        </SectionSubProperty>
    );
};
export const SectionPropertyStyles = ({ property, properties, propertySuffix = defaultPropertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <SectionSubProperty {...restProps} propertySuffix={propertySuffix} property={property ?? 'cardStyle'} properties={properties ?? 'Styles'}>
            {
                children
                ??
                <>
                    <SectionSubProperty titleTag='h4' propertySuffix={propertySuffix} property={`cardStyle='flat'`} properties={<><code>flat</code> Style</>} demonstration={<>
                        <Card
                            cardStyle='flat'
                            theme='primary'
                            header={<>
                                A Card with Flat Style
                            </>}
                            footer={<>
                                Just for fun!
                            </>}
                        >
                            <DummyContents />
                        </Card>
                        <p></p>
                        <TypeScriptCode>{`
<Card
    cardStyle='flat'
    theme='primary'
    header={<>
        A Card with Flat Style
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                        `}</TypeScriptCode>
                    </>}>
                        <p>
                            Set <code>{`<Card cardStyle='flat'>`}</code> to remove the <code>border</code>, <code>border-radius</code>, and <em>separator</em> (a <code>border</code> between <CurrentComponent />&apos;s items).
                        </p>
                    </SectionSubProperty>
                    <SectionSubProperty titleTag='h4' propertySuffix={propertySuffix} property={`cardStyle='flush'`} properties={<><code>flush</code> Style</>} demonstration={<>
                        <Card
                            cardStyle='flush'
                            theme='primary'
                            header={<>
                                A Card with Flush Style
                            </>}
                            footer={<>
                                Just for fun!
                            </>}
                        >
                            <DummyContents />
                        </Card>
                        <p></p>
                        <TypeScriptCode>{`
<Card
    cardStyle='flush'
    theme='primary'
    header={<>
        A Card with Flush Style
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                        `}</TypeScriptCode>
                    </>}>
                        <p>
                            Set <code>{`<Card cardStyle='flush'>`}</code> to remove the <code>border</code> and <code>border-radius</code>.
                        </p>
                    </SectionSubProperty>
                    <SectionSubProperty titleTag='h4' propertySuffix={propertySuffix} property={`cardStyle='joined'`} properties={<><code>joined</code> Style</>} demonstration={<>
                        <Card
                            cardStyle='joined'
                            theme='primary'
                            header={<>
                                A Card with Joined Style
                            </>}
                            footer={<>
                                Just for fun!
                            </>}
                        >
                            <DummyContents />
                        </Card>
                        <p></p>
                        <TypeScriptCode>{`
<Card
    cardStyle='joined'
    theme='primary'
    header={<>
        A Card with Joined Style
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                        `}</TypeScriptCode>
                    </>}>
                        <p>
                            Set <code>{`<Card cardStyle='joined'>`}</code> to remove the <em>separator</em> (a <code>border</code> between <CurrentComponent />&apos;s items).
                        </p>
                    </SectionSubProperty>
                </>
            }
        </SectionSubProperty>
    );
};

const CardWithActiveOutlined = () => {
    const [cardRef, isActive] = useFlipFlop({ defaultState: true });
    
    
    
    return (
        <Card
            elmRef={cardRef}
            active={isActive}
            outlined={true}
            theme='primary'
            header={<>
                A Card with <Element tag={isActive ? 'span' : 'del'}>Active State</Element> + Outlined Variant
            </>}
            footer={<>
                Just for fun!
            </>}
        >
            <DummyContents />
        </Card>
    );
};
export const SectionPropertyActive = ({ property, properties, propertySuffix = defaultPropertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <SectionSubProperty {...restProps} propertySuffix={propertySuffix} property={property ?? 'active'} properties={properties ?? 'Active State'} demonstration={<>
            <Card
                active={true}
                theme='primary'
                header={<>
                    A Card with Active State
                </>}
                footer={<>
                    Just for fun!
                </>}
            >
                <DummyContents />
            </Card>
            <p></p>
            <TypeScriptCode>{`
<Card
    active={true}
    theme='primary'
    header={<>
        A Card with Active State
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
            `}</TypeScriptCode>
            <SectionSubProperty titleTag='h4' propertySuffix={propertySuffix} property={property ?? 'outlined'} properties='Active State with Outlined Variant' demonstration={<>
                <TransparentPreview>
                    <CardWithActiveOutlined />
                </TransparentPreview>
                <p></p>
                <TypeScriptCode>{`
<Card
    active={true}
    outlined={true}
    theme='primary'
    header={<>
        A Card with Active State + Outlined Variant
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                `}</TypeScriptCode>
            </>}>
                <p>
                    Assigning <code>{`<Card active={true}>`}</code> will cancel out the <code>outlined</code> variant.
                </p>
            </SectionSubProperty>
        </>}>
            {
                children
                ??
                <>
                    <p>
                        To make <CurrentComponent /> (appear) active, set <code>{`<Card active={true}>`}</code>.
                    </p>
                </>
            }
        </SectionSubProperty>
    );
};
export const SectionPropertyEnabled = ({ property, properties, propertySuffix = defaultPropertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <SectionSubProperty {...restProps} propertySuffix={propertySuffix} property={property ?? 'enabled'} properties={properties ?? 'Disabled State'} demonstration={<>
            <Card
                enabled={false}
                theme='primary'
                header={<>
                    A Card with Disabled State
                </>}
                footer={<>
                    Just for fun!
                </>}
            >
                <DummyContents />
            </Card>
            <p></p>
            <TypeScriptCode>{`
<Card
    enabled={false}
    theme='primary'
    header={<>
        A Card with Disabled State
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
            `}</TypeScriptCode>
        </>}>
            {
                children
                ??
                <>
                    <p>
                        To make <CurrentComponent /> (appear) disabled, set <code>{`<Card enabled={false}>`}</code>.
                    </p>
                </>
            }
        </SectionSubProperty>
    );
};



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/card' component={<LinkCardPage />} bases={<LinkIndicatorPage />}>
            <Head>
                <title>&lt;Card&gt; Component</title>
                <meta name="description" content="Using <Card> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a presentation component for displaying contents with optional header &amp; footer.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoCardLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme />
                <SectionPropertySize />
                {/* <SectionPropertyNude /> */}
                <SectionPropertyGradient />
                <SectionPropertyOutlined />
                <SectionPropertyMild demonstration={<>
                    <Card
                        mild={false}
                        theme='primary'
                        header={<>
                            A Card with not_Mild Variant
                        </>}
                        footer={<>
                            Just for fun!
                        </>}
                    >
                        <DummyContents />
                    </Card>
                    <p></p>
                    <TypeScriptCode>{`
<Card
    mild={false}
    theme='primary'
    header={<>
        A Card with not_Mild Variant
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                    `}</TypeScriptCode>
                </>} />
                <SectionPropertyOrientation />
                <SectionPropertyStyles />
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive />
                <SectionPropertyEnabled />
            </SectionStates>
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Sizes'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>boxSizing</code>
                                <p>Defines how the total width and height of <CurrentComponent /> is calculated.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>blockSize</code>
                                <p>The height of <CurrentComponent />.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Captions'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>captionFilter</code>
                                <p>A <code>filter</code> to apply to <CurrentComponent />&apos;s header &amp; footer.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Typos'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>overflowWrap</code>
                                <p>Defines how a <strong>long word</strong> inside <CurrentComponent /> is handled.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Card } from '@nodestrap/card'

export default function ProductCard(props) {
    return (
        <Card
            {...props} // preserves other properties
            
            theme={props.theme ?? 'success'} // override default value of theme to 'success'
            mild={props.mild ?? false}       // override default value of mild  to false
        >
            { props.children }
        </Card>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesCardLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesCardVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code>, <code>CardVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesCardStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentComponent />.
                            </p>
                            <p>
                                Currently the states are equivalent to <CurrentBaseComponents />&apos;s states.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { Card, usesCardLayout, usesCardVariants, usesCardStates } from '@nodestrap/card'

const useProductCardSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Card>:
            usesCardLayout(),
            usesCardVariants(),
            usesCardStates(),
        ]),
        style({
            // then overwrite with your style:
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

export default function ProductCard(props) {
    const sheet = useProductCardSheet();
    return (
        <Card {...props} mainClass={sheet.main}>
            { props.children }
        </Card>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
