import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'


import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkAccordionPage, LinkListPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentNestedComponent, CurrentBaseComponents, LinkAccordionItemPage, SectionVariants, SectionStates, LinkAccordionSeparatorItemPage, LinkUsesIndicatorVariantsPage, SectionPreviewProperty, ParagraphLorem } from '../../../components/common'
import { ListItem } from '@nodestrap/list'
import { Accordion as AccordionOri, AccordionProps, AccordionItem, AccordionSeparatorItem, OrientationName } from '@nodestrap/accordion'
import { TypeScriptCode } from '../../../components/Code'
import ResponsiveProvider from '@nodestrap/responsive'
import { Tips } from '../../../components/Info'
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
    SectionPropertyBreadcrumbStyle,
    SectionPropertyNumberedStyle,
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
                <ParagraphLorem />
            </AccordionItem>,
            <AccordionItem key={1} label='A second item'>
                <p>The detail of second item.</p>
                <ParagraphLorem />
                <ParagraphLorem />
            </AccordionItem>,
            <AccordionItem key={2} label='A third item' theme='success'>
                <p>The detail of third item.</p>
                <ParagraphLorem />
                <ParagraphLorem />
            </AccordionItem>,
            <AccordionItem key={3} label='A fourth item' defaultActive={true}>
                <p>The detail of fourth item.</p>
                <ParagraphLorem />
                <ParagraphLorem />
            </AccordionItem>,
            <AccordionItem key={4} label='A fifth item' theme='danger'>
                <p>The detail of fifth item.</p>
                <ParagraphLorem />
                <ParagraphLorem />
            </AccordionItem>,
        ]
    }
</AccordionOri>
const DummyContents = () => <>
    <ParagraphLorem />
    <ParagraphLorem />
    <ParagraphLorem />
</>



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
                            <AccordionItem label='An inherit theme' >
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem label='An inherit theme' >
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem theme='primary'   label='A primary theme'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem theme='secondary' label='A secondary theme'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem theme='success'   label='A success theme'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem theme='info'      label='A info theme'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem theme='warning'   label='A warning theme'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem theme='danger'    label='A danger theme'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem theme='light'     label='A light theme'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem theme='dark'      label='A dark theme'>
                                <DummyContents />
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Accordion theme='primary'>
    <AccordionItem label='An inherit theme' >
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='An inherit theme' >
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem theme='primary'   label='A primary theme'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem theme='secondary' label='A secondary theme'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem theme='success'   label='A success theme'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem theme='info'      label='A info theme'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem theme='warning'   label='A warning theme'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem theme='danger'    label='A danger theme'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem theme='light'     label='A light theme'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem theme='dark'      label='A dark theme'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
</Accordion>
                    `}</TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <Accordion theme='primary'>
                            <AccordionItem size='sm'        label='A smaller size'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem size={undefined} label='A default size'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem size='lg'        label='A larger size'>
                                <DummyContents />
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Accordion theme='primary'>
    <AccordionItem size='sm'        label='A smaller size'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem size={undefined} label='A default size'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem size='lg'        label='A larger size'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
</Accordion>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <Accordion theme='primary'>
                            <AccordionItem label='A first item'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem label='A second item'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem nude={true} label='A third item (nude)'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem nude={true} label={<>
                                <div style={{ background: 'pink', color: 'black', padding: '1em', display: 'flex', justifyContent: 'center' }}>
                                    a custom component
                                </div>
                            </>}>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem nude={true} label='A fifth item (nude)'>
                                <DummyContents />
                            </AccordionItem>
                        </Accordion>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Accordion theme='primary'>
    <AccordionItem label='A first item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem nude={true} label='A third item (nude)'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem nude={true} label={<>
        <div style={{ background: 'pink', color: 'black', padding: '1em', display: 'flex', justifyContent: 'center' }}>
            a custom component
        </div>
    </>}>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem nude={true} label='A fifth item (nude)'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
</Accordion>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview>
                        <Accordion theme='primary'>
                            <AccordionItem label='A first item'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem label='A second item'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem gradient={true} label='A third item (gradient)'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem gradient={true} label='A fourth item (gradient)'>
                                <DummyContents />
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Accordion theme='primary'>
    <AccordionItem label='A first item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem gradient={true} label='A third item (gradient)'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem gradient={true} label='A fourth item (gradient)'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
</Accordion>

/* enabling gradient at <Accordion> level: */
<Accordion gradient={true} theme='primary'>
    <AccordionItem label='A first item (gradient)'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item (gradient)'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A third item (gradient)'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fourth item (gradient)'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
</Accordion>
                    `}</TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        <Accordion theme='primary'>
                            <AccordionItem label='A first item'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem label='A second item'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem outlined={true}  label='A third item (outlined)'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem outlined={true}  label='A fourth item (outlined)'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem outlined={false} label='A fifth item'>
                                <DummyContents />
                            </AccordionItem>
                        </Accordion>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Accordion theme='primary'>
    <AccordionItem label='A first item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem outlined={true}  label='A third item (outlined)'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem outlined={true}  label='A fourth item (outlined)'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem outlined={false} label='A fifth item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
</Accordion>

/* enabling outlined at <Accordion> level: */
<Accordion outlined={true} theme='primary'>
    <AccordionItem label='A first item (outlined)'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item (outlined)'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A third item (outlined)'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fourth item (outlined)'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fifth item (outlined)'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
</Accordion>
                    `}</TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        <Accordion mild={false} theme='primary'>
                            <AccordionItem label='A first item'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem label='A second item'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem mild={true}  label='A third item (mild)'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem mild={true}  label='A fourth item (mild)'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem mild={false} label='A fifth item'>
                                <DummyContents />
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Accordion mild={false} theme='primary'>
    <AccordionItem label='A first item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem mild={true}  label='A third item (mild)'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem mild={true}  label='A fourth item (mild)'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem mild={false} label='A fifth item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
</Accordion>

/* disabling mild at <Accordion> level: */
<Accordion mild={false} theme='primary'>
    <AccordionItem label='A first item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A third item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fourth item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fifth item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
</Accordion>
                    `}</TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyOrientation>
                    <SectionPropertyOrientationBlock>
                        <Preview>
                            <Accordion orientation='block' theme='primary'>
                                <AccordionItem label='A first item'>
                                    <DummyContents />
                                </AccordionItem>
                                <AccordionItem label='A second item'>
                                    <DummyContents />
                                </AccordionItem>
                                <AccordionItem label='A third item'>
                                    <DummyContents />
                                </AccordionItem>
                                <AccordionItem label='A fourth item'>
                                    <DummyContents />
                                </AccordionItem>
                                <AccordionItem label='A fifth item'>
                                    <DummyContents />
                                </AccordionItem>
                            </Accordion>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Accordion orientation='block' theme='primary'>
    <AccordionItem label='A first item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A third item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fourth item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fifth item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
</Accordion>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationBlock>
                    <SectionPropertyOrientationInline>
                        <Preview blockDisplay={true}>
                            <Accordion orientation='inline' theme='primary'>
                                <AccordionItem label='A first item'>
                                    <DummyContents />
                                </AccordionItem>
                                <AccordionItem label='A second item'>
                                    <DummyContents />
                                </AccordionItem>
                                <AccordionItem label='A third item'>
                                    <DummyContents />
                                </AccordionItem>
                                <AccordionItem label='A fourth item'>
                                    <DummyContents />
                                </AccordionItem>
                                <AccordionItem label='A fifth item'>
                                    <DummyContents />
                                </AccordionItem>
                            </Accordion>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Accordion orientation='inline' theme='primary'>
    <AccordionItem label='A first item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A third item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fourth item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fifth item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
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
                                        <AccordionItem label='A_first_item'>
                                            <DummyContents />
                                        </AccordionItem>
                                        <AccordionItem label='A_second_item'>
                                            <DummyContents />
                                        </AccordionItem>
                                        <AccordionItem label='A_third_item'>
                                            <DummyContents />
                                        </AccordionItem>
                                        <AccordionItem label='A_fourth_item'>
                                            <DummyContents />
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
            <AccordionItem label='A_first_item'>
                <p>...</p>
                <p>...</p>
                <p>...</p>
            </AccordionItem>
            <AccordionItem label='A_second_item'>
                <p>...</p>
                <p>...</p>
                <p>...</p>
            </AccordionItem>
            <AccordionItem label='A_third_item'>
                <p>...</p>
                <p>...</p>
                <p>...</p>
            </AccordionItem>
            <AccordionItem label='A_fourth_item'>
                <p>...</p>
                <p>...</p>
                <p>...</p>
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
    <AccordionItem label='A first item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A third item' theme='success'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fourth item' defaultActive={true}>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fifth item' theme='danger'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
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
    <AccordionItem label='A first item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A third item' theme='success'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fourth item' defaultActive={true}>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fifth item' theme='danger'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
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
    <AccordionItem label='A first item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A third item' theme='success'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fourth item' defaultActive={true}>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fifth item' theme='danger'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
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
    <AccordionItem label='A first item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A third item' theme='success'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fourth item' defaultActive={true}>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fifth item' theme='danger'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
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
    <AccordionItem label='A first item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A third item' theme='success'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fourth item' defaultActive={true}>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fifth item' theme='danger'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
</Accordion>
                        `}</TypeScriptCode>
                    </SectionPropertyBtnStyle>
                    <SectionPropertyBreadcrumbStyle>
                        <TransparentPreview blockDisplay={true}>
                            <Accordion listStyle='breadcrumb' orientation='inline' />
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Accordion listStyle='breadcrumb' orientation='inline' theme='primary'>
    <AccordionItem label='A first item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A third item' theme='success'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fourth item' defaultActive={true}>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fifth item' theme='danger'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
</Accordion>
                        `}</TypeScriptCode>
                    </SectionPropertyBreadcrumbStyle>
                    <SectionPropertyNumberedStyle>
                        <Preview>
                            <Accordion listStyle='numbered' />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Accordion listStyle='numbered' theme='primary'>
    <AccordionItem label='A first item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A third item' theme='success'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fourth item' defaultActive={true}>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fifth item' theme='danger'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
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
                                    <AccordionItem label='A first item'>
                                        <DummyContents />
                                    </AccordionItem>
                                    <AccordionItem label='A second item'>
                                        <DummyContents />
                                    </AccordionItem>
                                    <AccordionSeparatorItem />
                                    <AccordionItem theme='success' label='A third item'>
                                        <DummyContents />
                                    </AccordionItem>
                                    <ListItem theme='warning' classes={['void']}>
                                        An advertisement
                                    </ListItem>
                                    <AccordionItem theme='danger' label='A fourth item'>
                                        <DummyContents />
                                    </AccordionItem>
                                </Accordion>
                            </Preview>
                            <p></p>
                            <TypeScriptCode>{`
<Accordion listStyle={['numbered', 'joined']} theme='primary'>
    <AccordionItem label='A first item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionSeparatorItem />
    <AccordionItem theme='success' label='A third item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <ListItem theme='warning' classes={['void']}>
        An advertisement
    </ListItem>
    <AccordionItem theme='danger' label='A fourth item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
</Accordion>
                            `}</TypeScriptCode>
                        </SectionPreviewProperty>
                    </SectionPropertyNumberedStyle>
                </SectionPropertyListStyle>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview>
                        <Accordion theme='primary'>
                            <AccordionItem label='A first item'>
                                <p>The detail of first item.</p>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem label='A second item'>
                                <p>The detail of second item.</p>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem label='A third item (active)' active={true} theme='success'>
                                <p>The detail of third item.</p>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem label='A fourth item (active)' active={true}>
                                <p>The detail of fourth item.</p>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem label='A fifth item (active + disabled)' active={true} enabled={false} theme='danger'>
                                <p>The detail of fifth item.</p>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Accordion theme='primary'>
    <AccordionItem label='A first item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A third item (active)' active={true} theme='success'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fourth item (active)' active={true}>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fifth item (active + disabled)' active={true} enabled={false} theme='danger'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
</Accordion>
                    `}</TypeScriptCode>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview>
                        <Accordion theme='primary'>
                            <AccordionItem label='A first item'>
                                <p>The detail of first item.</p>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem label='A second item'>
                                <p>The detail of second item.</p>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem label='A third item (disabled)' enabled={false} theme='success'>
                                <p>The detail of third item.</p>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem label='A fourth item (disabled)' enabled={false}>
                                <p>The detail of fourth item.</p>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem label='A fifth item (disabled + active)' enabled={false} active={true} theme='danger'>
                                <p>The detail of fifth item.</p>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Accordion theme='primary'>
    <AccordionItem label='A first item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A third item (disabled)' enabled={false} theme='success'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fourth item (disabled)' enabled={false}>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A fifth item (disabled + active)' enabled={false} active={true} theme='danger'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
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
