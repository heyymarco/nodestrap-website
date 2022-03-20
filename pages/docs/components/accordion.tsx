import React, { useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkAccordionPage, LinkListPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentNestedComponent, CurrentBaseComponents, LinkAccordionItemPage, SectionVariants, SectionStates, LinkAccordionSeparatorItemPage, LinkUsesIndicatorVariantsPage, SectionPreviewProperty, ParagraphLorem } from '../../../components/common'
import { Accordion as AccordionOri, AccordionProps, AccordionItem, AccordionSeparatorItem, OrientationName } from '@nodestrap/accordion'
import { TypeScriptCode } from '../../../components/Code'
import ResponsiveProvider from '@nodestrap/responsive'
import { Tips } from '../../../components/Info'
import Element from '@nodestrap/element'
import {
    SectionPropertyTheme,
    SectionPropertySize,
    SectionPropertyGradient,
    SectionPropertyOutlined,
    SectionPropertyOrientation,
    SectionPropertyOrientationBlock,
    SectionPropertyOrientationInline,
    SectionPropertyOrientationResponsive,
} from '../../../components/common@Basic'
import {
    SectionPropertyActive,
    SectionPropertyActiveNoOutlined,
    SectionPropertyActiveNoMild,
    SectionPropertyEnabled,
} from '../../../components/common@Indicator'
import {
    SectionPropertyNude,
    SectionPropertyMild,
    SectionPropertyListStyle,
    SectionPropertyFlatStyle,
    SectionPropertyFlushStyle,
    SectionPropertyJoinedStyle,
    SectionPropertyContentStyle,
    SectionPropertyBtnStyle,
    SectionPropertyTabStyle,
    SectionPropertyBreadcrumbStyle,
    SectionPropertyBulletStyle,
    SectionPropertyNumberedStyle,
    ContentMakeItemsClickable,
    SectionPropertyActionCtrl,
} from '../../../components/common@List'

import loadable from '@loadable/component'
const DemoAccordionLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Accordion' */'../../../components/DemoPanel@Accordion'))



const Accordion = (props: AccordionProps) => <AccordionOri
    {...props}
    theme={props.theme ?? 'primary'}
>
    {
        props.children
        ??
        [
            <AccordionItem key={0} label='A first item'>
                <p>The detail of first item.</p>
                <ParagraphLorem />
            </AccordionItem>,
            <AccordionItem key={1} label='A second item'>
                <p>The detail of second item.</p>
                <ParagraphLorem />
            </AccordionItem>,
            <AccordionItem key={2} label='A third item' theme='success'>
                <p>The detail of third item.</p>
                <ParagraphLorem />
            </AccordionItem>,
            <AccordionItem key={3} label='A fourth item' defaultActive={true}>
                <p>The detail of fourth item.</p>
                <ParagraphLorem />
            </AccordionItem>,
            <AccordionItem key={4} label='A fifth item' theme='danger'>
                <p>The detail of fifth item.</p>
                <ParagraphLorem />
            </AccordionItem>,
        ]
    }
</AccordionOri>

const FunctionalTabAccordion = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(3);
    
    
    
    return (
        <Accordion listStyle='tab' actionCtrl={true} orientation='inline'>
            <AccordionItem active={activeTabIndex === 0} onClick={() => setActiveTabIndex(0)}>
                A first item
            </AccordionItem>
            <AccordionItem active={activeTabIndex === 1} onClick={() => setActiveTabIndex(1)}>
                A second item
            </AccordionItem>
            <AccordionItem active={activeTabIndex === 2} onClick={() => setActiveTabIndex(2)} theme='success'>
                A third item
            </AccordionItem>
            <AccordionItem active={activeTabIndex === 3} onClick={() => setActiveTabIndex(3)}>
                A fourth item
            </AccordionItem>
            <AccordionItem active={activeTabIndex === 4} onClick={() => setActiveTabIndex(4)} theme='danger'>
                A fifth item
            </AccordionItem>
        </Accordion>
    );
};
const AccordionWithActiveOutlined = () => {
    const [accordionRef, isActive] = useFlipFlop({ defaultState: true });
    
    
    
    const activeLabel = <Element tag={isActive ? 'span' : 'del'}>active</Element>
    return (
        <Accordion elmRef={accordionRef} outlined={true}>
            <AccordionItem>
                A first item (not clickable)
            </AccordionItem>
            <AccordionItem active={isActive}>
                A second item (not clickable + { activeLabel })
            </AccordionItem>
            <AccordionItem active={isActive} actionCtrl={true} onClick={() => alert('hello world')}>
                A third item (clickable + { activeLabel })
            </AccordionItem>
            <AccordionItem active={isActive} actionCtrl={true} href='https://www.google.com'>
                A fourth item (clickable + { activeLabel })
            </AccordionItem>
            <AccordionItem active={isActive} enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
                A fifth item item (clickable + { activeLabel } + disabled)
            </AccordionItem>
            <AccordionItem active={isActive} enabled={false} theme='danger' actionCtrl={true} href='https://www.google.com'>
                A seventh item item (clickable + { activeLabel } + disabled)
                <p>
                    <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
                </p>
            </AccordionItem>
        </Accordion>
    );
};
const AccordionWithActiveMild     = () => {
    const [accordionRef, isActive] = useFlipFlop({ defaultState: true });
    
    
    
    const activeLabel = <Element tag={isActive ? 'span' : 'del'}>active</Element>
    return (
        <Accordion elmRef={accordionRef} mild={true}>
            <AccordionItem>
                A first item (not clickable)
            </AccordionItem>
            <AccordionItem active={isActive}>
                A second item (not clickable + { activeLabel })
            </AccordionItem>
            <AccordionItem active={isActive} actionCtrl={true} onClick={() => alert('hello world')}>
                A third item (clickable + { activeLabel })
            </AccordionItem>
            <AccordionItem active={isActive} actionCtrl={true} href='https://www.google.com'>
                A fourth item (clickable + { activeLabel })
            </AccordionItem>
            <AccordionItem active={isActive} enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
                A fifth item item (clickable + { activeLabel } + disabled)
            </AccordionItem>
            <AccordionItem active={isActive} enabled={false} theme='danger' actionCtrl={true} href='https://www.google.com'>
                A seventh item item (clickable + { activeLabel } + disabled)
                <p>
                    <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
                </p>
            </AccordionItem>
        </Accordion>
    );
};



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/accordion' component={<LinkAccordionPage />} nestedComponent={<LinkAccordionItemPage />} bases={<LinkListPage />}>
            <Head>
                <title>&lt;Accordion&gt; Component</title>
                <meta name="description" content="Using <Accordion> component" />
            </Head>

            <SectionIntro>
                <p>
                    Displays a series of content.
                </p>
                <p>
                    Here the preview:
                </p>
                <Preview>
                    <Accordion />
                </Preview>
            </SectionIntro>
            <SectionDemo>
                <DemoAccordionLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview>
                        <Accordion theme='primary'>
                            <AccordionItem>
                                An inherit theme
                            </AccordionItem>
                            <AccordionItem>
                                An inherit theme
                            </AccordionItem>
                            <AccordionItem theme='primary'>
                                A primary theme
                            </AccordionItem>
                            <AccordionItem theme='secondary'>
                                A secondary theme
                            </AccordionItem>
                            <AccordionItem theme='success'>
                                A success theme
                            </AccordionItem>
                            <AccordionItem theme='info'>
                                A info theme
                            </AccordionItem>
                            <AccordionItem theme='warning'>
                                A warning theme
                            </AccordionItem>
                            <AccordionItem theme='danger'>
                                A danger theme
                            </AccordionItem>
                            <AccordionItem theme='light'>
                                A light theme
                            </AccordionItem>
                            <AccordionItem theme='dark'>
                                A dark theme
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Accordion theme='primary'>
    <AccordionItem>
        An inherit theme
    </AccordionItem>
    <AccordionItem>
        An inherit theme
    </AccordionItem>
    <AccordionItem theme='primary'>
        A primary theme
    </AccordionItem>
    <AccordionItem theme='secondary'>
        A secondary theme
    </AccordionItem>
    <AccordionItem theme='success'>
        A success theme
    </AccordionItem>
    <AccordionItem theme='info'>
        A info theme
    </AccordionItem>
    <AccordionItem theme='warning'>
        A warning theme
    </AccordionItem>
    <AccordionItem theme='danger'>
        A danger theme
    </AccordionItem>
    <AccordionItem theme='light'>
        A light theme
    </AccordionItem>
    <AccordionItem theme='dark'>
        A dark theme
    </AccordionItem>
</Accordion>
                    `}</TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <Accordion theme='primary'>
                            <AccordionItem size='sm'>
                                A smaller size
                            </AccordionItem>
                            <AccordionItem size={undefined}>
                                A default size
                            </AccordionItem>
                            <AccordionItem size='lg'>
                                A larger size
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Accordion theme='primary'>
    <AccordionItem size='sm'>
        A smaller size
    </AccordionItem>
    <AccordionItem size={undefined}>
        A default size
    </AccordionItem>
    <AccordionItem size='lg'>
        A larger size
    </AccordionItem>
</Accordion>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <Accordion theme='primary'>
                            <AccordionItem>
                                A first item
                            </AccordionItem>
                            <AccordionItem>
                                A second item
                            </AccordionItem>
                            <AccordionItem nude={true}>
                                A third item (nude)
                            </AccordionItem>
                            <AccordionItem nude={true}>
                                <div style={{ background: 'pink', padding: '1em', display: 'flex', justifyContent: 'center' }}>
                                    a custom component
                                </div>
                            </AccordionItem>
                            <AccordionItem nude={true}>
                                A fifth item (nude)
                            </AccordionItem>
                        </Accordion>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Accordion theme='primary'>
    <AccordionItem>
        A first item
    </AccordionItem>
    <AccordionItem>
        A second item
    </AccordionItem>
    <AccordionItem nude={true}>
        A third item (nude)
    </AccordionItem>
    <AccordionItem nude={true}>
        <div style={{ background: 'pink', padding: '1em', display: 'flex', justifyContent: 'center' }}>
            a custom component
        </div>
    </AccordionItem>
    <AccordionItem nude={true}>
        A fifth item (nude)
    </AccordionItem>
</Accordion>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview>
                        <Accordion theme='primary'>
                            <AccordionItem>
                                A first item
                            </AccordionItem>
                            <AccordionItem>
                                A second item
                            </AccordionItem>
                            <AccordionItem gradient={true}>
                                A third item (gradient)
                            </AccordionItem>
                            <AccordionItem gradient={true}>
                                A fourth item (gradient)
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Accordion theme='primary'>
    <AccordionItem>
        A first item
    </AccordionItem>
    <AccordionItem>
        A second item
    </AccordionItem>
    <AccordionItem gradient={true}>
        A third item (gradient)
    </AccordionItem>
    <AccordionItem gradient={true}>
        A fourth item (gradient)
    </AccordionItem>
</Accordion>

/* enabling gradient at <Accordion> level: */
<Accordion gradient={true} theme='primary'>
    <AccordionItem>
        A first item (gradient)
    </AccordionItem>
    <AccordionItem>
        A second item (gradient)
    </AccordionItem>
    <AccordionItem>
        A third item (gradient)
    </AccordionItem>
    <AccordionItem>
        A fourth item (gradient)
    </AccordionItem>
</Accordion>
                    `}</TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        <Accordion theme='primary'>
                            <AccordionItem>
                                A first item
                            </AccordionItem>
                            <AccordionItem>
                                A second item
                            </AccordionItem>
                            <AccordionItem outlined={true}>
                                A third item (outlined)
                            </AccordionItem>
                            <AccordionItem outlined={true}>
                                A fourth item (outlined)
                            </AccordionItem>
                            <AccordionItem outlined={false}>
                                A fifth item
                            </AccordionItem>
                        </Accordion>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Accordion theme='primary'>
    <AccordionItem>
        A first item
    </AccordionItem>
    <AccordionItem>
        A second item
    </AccordionItem>
    <AccordionItem outlined={true}>
        A third item (outlined)
    </AccordionItem>
    <AccordionItem outlined={true}>
        A fourth item (outlined)
    </AccordionItem>
    <AccordionItem outlined={false}>
        A fifth item
    </AccordionItem>
</Accordion>

/* enabling outlined at <Accordion> level: */
<Accordion outlined={true} theme='primary'>
    <AccordionItem>
        A first item (outlined)
    </AccordionItem>
    <AccordionItem>
        A second item (outlined)
    </AccordionItem>
    <AccordionItem>
        A third item (outlined)
    </AccordionItem>
    <AccordionItem>
        A fourth item (outlined)
    </AccordionItem>
    <AccordionItem>
        A fifth item (outlined)
    </AccordionItem>
</Accordion>
                    `}</TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        <Accordion mild={false} theme='primary'>
                            <AccordionItem>
                                A first item
                            </AccordionItem>
                            <AccordionItem>
                                A second item
                            </AccordionItem>
                            <AccordionItem mild={true}>
                                A third item (mild)
                            </AccordionItem>
                            <AccordionItem mild={true}>
                                A fourth item (mild)
                            </AccordionItem>
                            <AccordionItem mild={false}>
                                A fifth item
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Accordion mild={false} theme='primary'>
    <AccordionItem>
        A first item
    </AccordionItem>
    <AccordionItem>
        A second item
    </AccordionItem>
    <AccordionItem mild={true}>
        A third item (mild)
    </AccordionItem>
    <AccordionItem mild={true}>
        A fourth item (mild)
    </AccordionItem>
    <AccordionItem mild={false}>
        A fifth item
    </AccordionItem>
</Accordion>

/* disabling mild at <Accordion> level: */
<Accordion mild={false} theme='primary'>
    <AccordionItem>
        A first item
    </AccordionItem>
    <AccordionItem>
        A second item
    </AccordionItem>
    <AccordionItem>
        A third item
    </AccordionItem>
    <AccordionItem>
        A fourth item
    </AccordionItem>
    <AccordionItem>
        A fifth item
    </AccordionItem>
</Accordion>
                    `}</TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyOrientation>
                    <SectionPropertyOrientationBlock>
                        <Preview>
                            <Accordion orientation='block' theme='primary'>
                                <AccordionItem>
                                    A first item
                                </AccordionItem>
                                <AccordionItem>
                                    A second item
                                </AccordionItem>
                                <AccordionItem>
                                    A third item
                                </AccordionItem>
                                <AccordionItem>
                                    A fourth item
                                </AccordionItem>
                                <AccordionItem>
                                    A fifth item
                                </AccordionItem>
                            </Accordion>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Accordion orientation='block' theme='primary'>
    <AccordionItem>
        A first item
    </AccordionItem>
    <AccordionItem>
        A second item
    </AccordionItem>
    <AccordionItem>
        A third item
    </AccordionItem>
    <AccordionItem>
        A fourth item
    </AccordionItem>
    <AccordionItem>
        A fifth item
    </AccordionItem>
</Accordion>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationBlock>
                    <SectionPropertyOrientationInline>
                        <Preview blockDisplay={true}>
                            <Accordion orientation='inline' theme='primary'>
                                <AccordionItem>
                                    A first item
                                </AccordionItem>
                                <AccordionItem>
                                    A second item
                                </AccordionItem>
                                <AccordionItem>
                                    A third item
                                </AccordionItem>
                                <AccordionItem>
                                    A fourth item
                                </AccordionItem>
                                <AccordionItem>
                                    A fifth item
                                </AccordionItem>
                            </Accordion>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Accordion orientation='inline' theme='primary'>
    <AccordionItem>
        A first item
    </AccordionItem>
    <AccordionItem>
        A second item
    </AccordionItem>
    <AccordionItem>
        A third item
    </AccordionItem>
    <AccordionItem>
        A fourth item
    </AccordionItem>
    <AccordionItem>
        A fifth item
    </AccordionItem>
</Accordion>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationInline>
                    <SectionPropertyOrientationResponsive>
                        <Preview>
                            <Tips>
                                <p>
                                    Try to <strong>resize</strong> the <span style={{ background :'pink', border : 'solid 1px darkred', padding: '0.15em' }}>red container</span> below:
                                </p>
                            </Tips>
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
                                    <Accordion orientation={currentFallback} theme='primary'>
                                        <AccordionItem>
                                            A_first_item
                                        </AccordionItem>
                                        <AccordionItem>
                                            A_second_item
                                        </AccordionItem>
                                        <AccordionItem>
                                            A_third_item
                                        </AccordionItem>
                                        <AccordionItem>
                                            A_fourth_item
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            )}</ResponsiveProvider>
                        </Preview>
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
        <Accordion orientation={currentFallback} theme='primary'>
            <AccordionItem>
                A_first_item
            </AccordionItem>
            <AccordionItem>
                A_second_item
            </AccordionItem>
            <AccordionItem>
                A_third_item
            </AccordionItem>
            <AccordionItem>
                A_fourth_item
            </AccordionItem>
        </Accordion>
    </div>
)}</ResponsiveProvider>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationResponsive>
                </SectionPropertyOrientation>
                <SectionPropertyListStyle>
                    <SectionPropertyFlatStyle>
                        <TransparentPreview>
                            <Accordion listStyle='flat' />
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Accordion listStyle='flat' theme='primary'>
    <AccordionItem>
        A first item
    </AccordionItem>
    <AccordionItem>
        A second item
    </AccordionItem>
    <AccordionItem theme='success'>
        A third item
    </AccordionItem>
    <AccordionItem active={true}>
        A fourth item
    </AccordionItem>
    <AccordionItem theme='danger'>
        A fifth item
    </AccordionItem>
</Accordion>
                        `}</TypeScriptCode>
                    </SectionPropertyFlatStyle>
                    <SectionPropertyFlushStyle>
                        <TransparentPreview>
                            <Accordion listStyle='flush' />
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Accordion listStyle='flush' theme='primary'>
    <AccordionItem>
        A first item
    </AccordionItem>
    <AccordionItem>
        A second item
    </AccordionItem>
    <AccordionItem theme='success'>
        A third item
    </AccordionItem>
    <AccordionItem active={true}>
        A fourth item
    </AccordionItem>
    <AccordionItem theme='danger'>
        A fifth item
    </AccordionItem>
</Accordion>
                        `}</TypeScriptCode>
                    </SectionPropertyFlushStyle>
                    <SectionPropertyJoinedStyle>
                        <TransparentPreview>
                            <Accordion listStyle='joined' />
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Accordion listStyle='joined' theme='primary'>
    <AccordionItem>
        A first item
    </AccordionItem>
    <AccordionItem>
        A second item
    </AccordionItem>
    <AccordionItem theme='success'>
        A third item
    </AccordionItem>
    <AccordionItem active={true}>
        A fourth item
    </AccordionItem>
    <AccordionItem theme='danger'>
        A fifth item
    </AccordionItem>
</Accordion>
                        `}</TypeScriptCode>
                    </SectionPropertyJoinedStyle>
                    
                    <SectionPropertyContentStyle>
                        <Preview>
                            <Accordion listStyle='content' />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Accordion listStyle='content' theme='primary'>
    <AccordionItem>
        A first item
    </AccordionItem>
    <AccordionItem>
        A second item
    </AccordionItem>
    <AccordionItem theme='success'>
        A third item
    </AccordionItem>
    <AccordionItem active={true}>
        A fourth item
    </AccordionItem>
    <AccordionItem theme='danger'>
        A fifth item
    </AccordionItem>
</Accordion>
                        `}</TypeScriptCode>
                    </SectionPropertyContentStyle>
                    
                    <SectionPropertyBtnStyle>
                        <Preview>
                            <Accordion listStyle='btn' />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Accordion listStyle='btn' theme='primary'>
    <AccordionItem>
        A first item
    </AccordionItem>
    <AccordionItem>
        A second item
    </AccordionItem>
    <AccordionItem theme='success'>
        A third item
    </AccordionItem>
    <AccordionItem active={true}>
        A fourth item
    </AccordionItem>
    <AccordionItem theme='danger'>
        A fifth item
    </AccordionItem>
</Accordion>
                        `}</TypeScriptCode>
                        <SectionPreviewProperty titleTag='h5' property={`actionCtrl={true}`} properties='Make the Buttons Functional' description={
                            <ContentMakeItemsClickable />
                        }>
                            <Preview>
                                <Accordion listStyle='btn' actionCtrl={true} theme='primary'>
                                    <AccordionItem>
                                        A first item
                                    </AccordionItem>
                                    <AccordionItem actionCtrl={false}>
                                        A second item (not clickable)
                                    </AccordionItem>
                                    <AccordionItem theme='success'>
                                        A third item
                                    </AccordionItem>
                                    <AccordionItem active={true} href='https://www.google.com'>
                                        A fourth item
                                    </AccordionItem>
                                    <AccordionItem theme='danger' onClick={() => alert('hello world')}>
                                        A fifth item
                                    </AccordionItem>
                                </Accordion>
                            </Preview>
                            <p></p>
                            <TypeScriptCode>{`
<Accordion listStyle='btn' actionCtrl={true} theme='primary'>
    <AccordionItem>
        A first item
    </AccordionItem>
    <AccordionItem actionCtrl={false}>
        A second item (not clickable)
    </AccordionItem>
    <AccordionItem theme='success'>
        A third item
    </AccordionItem>
    <AccordionItem active={true} href='https://www.google.com'>
        A fourth item
    </AccordionItem>
    <AccordionItem theme='danger' onClick={() => alert('hello world')}>
        A fifth item
    </AccordionItem>
</Accordion>
                            `}</TypeScriptCode>
                        </SectionPreviewProperty>
                    </SectionPropertyBtnStyle>
                    <SectionPropertyTabStyle>
                        <Preview blockDisplay={true}>
                            <Accordion listStyle='tab' orientation='inline' />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Accordion listStyle='tab' orientation='inline' theme='primary'>
    <AccordionItem>
        A first item
    </AccordionItem>
    <AccordionItem>
        A second item
    </AccordionItem>
    <AccordionItem theme='success'>
        A third item
    </AccordionItem>
    <AccordionItem active={true}>
        A fourth item
    </AccordionItem>
    <AccordionItem theme='danger'>
        A fifth item
    </AccordionItem>
</Accordion>
                        `}</TypeScriptCode>
                        <SectionPreviewProperty titleTag='h5' property={`actionCtrl={true}`} properties='Make the Tabs Functional' description={
                            <ContentMakeItemsClickable />
                        }>
                            <Preview blockDisplay={true}>
                                <FunctionalTabAccordion />
                            </Preview>
                            <p></p>
                            <TypeScriptCode>{`
const TabControl = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(3);
    
    return (
        <Accordion listStyle='tab' actionCtrl={true} orientation='inline' theme='primary'>
            <AccordionItem active={activeTabIndex === 0} onClick={() => setActiveTabIndex(0)}>
                A first item
            </AccordionItem>
            <AccordionItem active={activeTabIndex === 1} onClick={() => setActiveTabIndex(1)}>
                A second item
            </AccordionItem>
            <AccordionItem active={activeTabIndex === 2} onClick={() => setActiveTabIndex(2)} theme='success'>
                A third item
            </AccordionItem>
            <AccordionItem active={activeTabIndex === 3} onClick={() => setActiveTabIndex(3)}>
                A fourth item
            </AccordionItem>
            <AccordionItem active={activeTabIndex === 4} onClick={() => setActiveTabIndex(4)} theme='danger'>
                A fifth item
            </AccordionItem>
        </Accordion>
    );
};
                            `}</TypeScriptCode>
                        </SectionPreviewProperty>
                    </SectionPropertyTabStyle>
                    <SectionPropertyBreadcrumbStyle>
                        <TransparentPreview blockDisplay={true}>
                            <Accordion listStyle='breadcrumb' orientation='inline' />
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Accordion listStyle='breadcrumb' orientation='inline' theme='primary'>
    <AccordionItem>
        A first item
    </AccordionItem>
    <AccordionItem>
        A second item
    </AccordionItem>
    <AccordionItem theme='success'>
        A third item
    </AccordionItem>
    <AccordionItem active={true}>
        A fourth item
    </AccordionItem>
    <AccordionItem theme='danger'>
        A fifth item
    </AccordionItem>
</Accordion>
                        `}</TypeScriptCode>
                    </SectionPropertyBreadcrumbStyle>
                    <SectionPropertyBulletStyle>
                        <Preview blockDisplay={true}>
                            <Accordion listStyle='bullet' orientation='inline' theme='primary'>
                                <AccordionItem />
                                <AccordionItem />
                                <AccordionItem theme='success' />
                                <AccordionItem active={true} />
                                <AccordionItem theme='danger' />
                            </Accordion>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Accordion listStyle='bullet' orientation='inline' theme='primary'>
    <AccordionItem />
    <AccordionItem />
    <AccordionItem theme='success' />
    <AccordionItem active={true} />
    <AccordionItem theme='danger' />
</Accordion>
                        `}</TypeScriptCode>
                    </SectionPropertyBulletStyle>
                    <SectionPropertyNumberedStyle>
                        <Preview>
                            <Accordion listStyle='numbered' />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Accordion listStyle='numbered' theme='primary'>
    <AccordionItem>
        A first item
    </AccordionItem>
    <AccordionItem>
        A second item
    </AccordionItem>
    <AccordionItem theme='success'>
        A third item
    </AccordionItem>
    <AccordionItem active={true}>
        A fourth item
    </AccordionItem>
    <AccordionItem theme='danger'>
        A fifth item
    </AccordionItem>
</Accordion>
                        `}</TypeScriptCode>
                        <SectionPreviewProperty titleTag='h5' property={`.void`} properties='Skip Unnecessary Content' description={
                            <p>
                                A <LinkAccordionSeparatorItemPage /> and <code>.void</code> are skipped by counter.
                            </p>
                        }>
                            <Preview>
                                <Accordion listStyle={['numbered', 'joined']} theme='primary'>
                                    <AccordionItem>
                                        A first item
                                    </AccordionItem>
                                    <AccordionItem>
                                        A second item
                                    </AccordionItem>
                                    <AccordionSeparatorItem />
                                    <AccordionItem theme='success'>
                                        A third item
                                    </AccordionItem>
                                    <AccordionItem theme='warning' classes={['void']}>
                                        An advertisement
                                    </AccordionItem>
                                    <AccordionItem theme='danger'>
                                        A fourth item
                                    </AccordionItem>
                                </Accordion>
                            </Preview>
                            <p></p>
                            <TypeScriptCode>{`
<Accordion listStyle={['numbered', 'joined']} theme='primary'>
    <AccordionItem>
        A first item
    </AccordionItem>
    <AccordionItem>
        A second item
    </AccordionItem>
    <AccordionSeparatorItem />
    <AccordionItem theme='success'>
        A third item
    </AccordionItem>
    <AccordionItem theme='warning' classes={['void']}>
        An advertisement
    </AccordionItem>
    <AccordionItem theme='danger'>
        A fourth item
    </AccordionItem>
</Accordion>
                            `}</TypeScriptCode>
                        </SectionPreviewProperty>
                    </SectionPropertyNumberedStyle>
                </SectionPropertyListStyle>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActionCtrl>
                    <Preview>
                        <Accordion theme='primary'>
                            <AccordionItem>
                                A first item (not clickable)
                            </AccordionItem>
                            <AccordionItem>
                                A second item (not clickable)
                            </AccordionItem>
                            <AccordionItem actionCtrl={true} onClick={() => alert('hello world')}>
                                A third item (clickable)
                            </AccordionItem>
                            <AccordionItem actionCtrl={true} href='https://www.google.com'>
                                A fourth item (clickable)
                            </AccordionItem>
                            <AccordionItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
                                A fifth item item (clickable)
                            </AccordionItem>
                            <AccordionItem active={true} theme='danger' actionCtrl={true} href='https://www.google.com'>
                                A seventh item item (clickable)
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Accordion theme='primary'>
    <AccordionItem>
        A first item (not clickable)
    </AccordionItem>
    <AccordionItem>
        A second item (not clickable)
    </AccordionItem>
    <AccordionItem actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable)
    </AccordionItem>
    <AccordionItem actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable)
    </AccordionItem>
    <AccordionItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable)
    </AccordionItem>
    <AccordionItem active={true} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable)
    </AccordionItem>
</Accordion>

/* alternate code but with the similar result: */
<Accordion theme='primary' actionCtrl={true}>
    <AccordionItem actionCtrl={false}>
        A first item (not clickable)
    </AccordionItem>
    <AccordionItem actionCtrl={false}>
        A second item (not clickable)
    </AccordionItem>
    <AccordionItem  onClick={() => alert('hello world')}>
        A third item (clickable)
    </AccordionItem>
    <AccordionItem href='https://www.google.com'>
        A fourth item (clickable)
    </AccordionItem>
    <AccordionItem active={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable)
    </AccordionItem>
    <AccordionItem active={true} theme='danger' href='https://www.google.com'>
        A seventh item item (clickable)
    </AccordionItem>
</Accordion>
                    `}</TypeScriptCode>
                </SectionPropertyActionCtrl>
                <SectionPropertyActive>
                    <Preview>
                        <Accordion theme='primary'>
                            <AccordionItem>
                                A first item (not clickable)
                            </AccordionItem>
                            <AccordionItem active={true}>
                                A second item (not clickable + active)
                            </AccordionItem>
                            <AccordionItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
                                A third item (clickable + active)
                            </AccordionItem>
                            <AccordionItem active={true} actionCtrl={true} href='https://www.google.com'>
                                A fourth item (clickable + active)
                            </AccordionItem>
                            <AccordionItem active={true} enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
                                A fifth item item (clickable + active + disabled)
                            </AccordionItem>
                            <AccordionItem active={true} enabled={false} theme='danger' actionCtrl={true} href='https://www.google.com'>
                                A seventh item item (clickable + active + disabled)
                                <p>
                                    <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
                                </p>
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Accordion theme='primary'>
    <AccordionItem>
        A first item (not clickable)
    </AccordionItem>
    <AccordionItem active={true}>
        A second item (not clickable + active)
    </AccordionItem>
    <AccordionItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable + active)
    </AccordionItem>
    <AccordionItem active={true} actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable + active)
    </AccordionItem>
    <AccordionItem active={true} enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable + active + disabled)
    </AccordionItem>
    <AccordionItem active={true} enabled={false} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable + active + disabled)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </AccordionItem>
</Accordion>

/* alternate code but with the similar result: */
<Accordion active={true} theme='primary'>
    <AccordionItem active={false} inheritActive={false}>
        A first item (not clickable)
    </AccordionItem>
    <AccordionItem>
        A second item (not clickable + active)
    </AccordionItem>
    <AccordionItem actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable + active)
    </AccordionItem>
    <AccordionItem actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable + active)
    </AccordionItem>
    <AccordionItem enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable + active + disabled)
    </AccordionItem>
    <AccordionItem enabled={false} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable + active + disabled)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </AccordionItem>
</Accordion>
                    `}</TypeScriptCode>
                    <SectionPropertyActiveNoOutlined>
                        <TransparentPreview>
                            <AccordionWithActiveOutlined />
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Accordion outlined={true} theme='primary'>
    <AccordionItem>
        A first item (not clickable)
    </AccordionItem>
    <AccordionItem active={true}>
        A second item (not clickable + active)
    </AccordionItem>
    <AccordionItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable + active)
    </AccordionItem>
    <AccordionItem active={true} actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable + active)
    </AccordionItem>
    <AccordionItem active={true} enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable + active + disabled)
    </AccordionItem>
    <AccordionItem active={true} enabled={false} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable + active + disabled)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </AccordionItem>
</Accordion>
                        `}</TypeScriptCode>
                    </SectionPropertyActiveNoOutlined>
                    <SectionPropertyActiveNoMild>
                        <Preview>
                            <AccordionWithActiveMild />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Accordion mild={true} theme='primary'>
    <AccordionItem>
        A first item (not clickable)
    </AccordionItem>
    <AccordionItem active={true}>
        A second item (not clickable + active)
    </AccordionItem>
    <AccordionItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable + active)
    </AccordionItem>
    <AccordionItem active={true} actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable + active)
    </AccordionItem>
    <AccordionItem active={true} enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable + active + disabled)
    </AccordionItem>
    <AccordionItem active={true} enabled={false} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable + active + disabled)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </AccordionItem>
</Accordion>
                        `}</TypeScriptCode>
                    </SectionPropertyActiveNoMild>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview>
                        <Accordion theme='primary'>
                            <AccordionItem>
                                A first item (not clickable)
                            </AccordionItem>
                            <AccordionItem enabled={false}>
                                A second item (not clickable + disabled)
                            </AccordionItem>
                            <AccordionItem enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
                                A third item (clickable + disabled)
                            </AccordionItem>
                            <AccordionItem enabled={false} actionCtrl={true} href='https://www.google.com'>
                                A fourth item (clickable + disabled)
                                <p>
                                    <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
                                </p>
                            </AccordionItem>
                            <AccordionItem enabled={false} active={true} actionCtrl={true} onClick={() => alert('hello world')}>
                                A fifth item item (clickable + disabled + active)
                            </AccordionItem>
                            <AccordionItem enabled={false} active={true} theme='danger' actionCtrl={true} href='https://www.google.com'>
                                A seventh item item (clickable + disabled + active)
                                <p>
                                    <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
                                </p>
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Accordion theme='primary'>
    <AccordionItem>
        A first item (not clickable)
    </AccordionItem>
    <AccordionItem enabled={false}>
        A second item (not clickable + disabled)
    </AccordionItem>
    <AccordionItem enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable + disabled)
    </AccordionItem>
    <AccordionItem enabled={false} actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable + disabled)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </AccordionItem>
    <AccordionItem enabled={false} active={true} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable + disabled + active)
    </AccordionItem>
    <AccordionItem enabled={false} active={true} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable + disabled + active)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </AccordionItem>
</Accordion>

/* alternate code but with the similar result: */
<Accordion enabled={false} theme='primary'>
    <AccordionItem enabled={true} inheritEnabled={false}>
        A first item (not clickable)
    </AccordionItem>
    <AccordionItem>
        A second item (not clickable + disabled)
    </AccordionItem>
    <AccordionItem actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable + disabled)
    </AccordionItem>
    <AccordionItem actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable + disabled)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </AccordionItem>
    <AccordionItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable + disabled + active)
    </AccordionItem>
    <AccordionItem active={true} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable + disabled + active)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </AccordionItem>
</Accordion>
                    `}</TypeScriptCode>
                </SectionPropertyEnabled>
            </SectionStates>
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Button Styles'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>btnSpacing</code>
                                <p>The default spacing between buttons.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>btnSpacingSm</code>
                                <p>The spacing between buttons when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>btnSpacingLg</code>
                                <p>The spacing between buttons when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Tab Styles'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>tabTextAlign</code>
                                <p>The text alignment of tabs.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>tabBorderRadius</code>
                                <p>The default border-radius of tabs.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>tabBorderRadiusSm</code>
                                <p>The border-radius of tabs when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>tabBorderRadiusLg</code>
                                <p>The border-radius of tabs when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Breadcrumb Styles'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>breadcrumbPaddingInline</code>
                                <p>The default inner spacing on the left &amp; right of breadcrumb items.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>breadcrumbPaddingBlock</code>
                                <p>The default inner spacing on the top &amp; bottom of breadcrumb items.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>breadcrumbPaddingInlineSm</code>
                                <p>The inner spacing on the left &amp; right of breadcrumb items when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>breadcrumbPaddingBlockSm</code>
                                <p>The inner spacing on the top &amp; bottom of breadcrumb items when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>breadcrumbPaddingInlineLg</code>
                                <p>The inner spacing on the left &amp; right of breadcrumb items when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>breadcrumbPaddingBlockLg</code>
                                <p>The inner spacing on the top &amp; bottom of breadcrumb items when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>breadcrumbSeparatorImg</code>
                                <p>The background-image of separator.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>breadcrumbSeparatorInlineSize</code>
                                <p>The width of separator.</p>
                                <p>The height is calculated automatically by its <code>aspect-ratio</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>breadcrumbSeparatorMarginInline</code>
                                <p>The left &amp; right margin of separator.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Bullet Styles'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>bulletSpacing</code>
                                <p>The default spacing between bullets.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>bulletSpacingSm</code>
                                <p>The spacing between bullets when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>bulletSpacingLg</code>
                                <p>The spacing between bullets when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>bulletPadding</code>
                                <p>The default inner spacing of bullets.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>bulletPaddingSm</code>
                                <p>The inner spacing of bullets when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>bulletPaddingLg</code>
                                <p>The inner spacing of bullets when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Numbered Styles'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>numberedContent</code>
                                <p>A custom content of <code>::before</code> element of each <CurrentNestedComponent />.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Accordion } from '@nodestrap/accordion'

export default function ProductAccordion(props) {
    return (
        <Accordion
            {...props} // preserves other properties
            
            theme={props.theme ?? 'success'} // override default value of theme to 'success'
            mild={props.mild ?? false}       // override default value of mild  to false
        >
            { props.children }
        </Accordion>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesAccordionLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesAccordionBasicVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> but <strong>excluding variants</strong> from <LinkUsesIndicatorVariantsPage />.
                            </p>
                            <p>
                                Equivalent to <code>usesAccordionVariants()</code> <strong>minus</strong> <LinkUsesIndicatorVariantsPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesAccordionVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code>, <code>AccordionVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                            <p>
                                Equivalent to <code>usesAccordionBasicVariants()</code> <strong>plus</strong> <LinkUsesIndicatorVariantsPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesAccordionStates()'>
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
import { Accordion, usesAccordionLayout, usesAccordionVariants, usesAccordionStates } from '@nodestrap/accordion'

const useProductAccordionSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Accordion>:
            usesAccordionLayout(),
            usesAccordionVariants(),
            usesAccordionStates(),
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

export default function ProductAccordion(props) {
    const sheet = useProductAccordionSheet();
    return (
        <Accordion {...props} mainClass={sheet.main}>
            { props.children }
        </Accordion>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
