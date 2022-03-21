import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkAccordionPage, LinkListPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionIntro, SectionDemo, BusyBar, CurrentNestedComponent, LinkAccordionItemPage, SectionVariants, SectionStates, LinkAccordionSeparatorItemPage, SectionPreviewProperty, ParagraphLorem, LinkListItemPage, LinkCollapsePage } from '../../../components/common'
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
    SectionPropertyEnabled,
} from '../../../components/common@Indicator'
import {
    SectionPropertyActive,
} from '../../../components/common@DropdownButton'
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
                    Displays a series of <em>foldable</em> content.
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
                                <div style={{ background: 'lightgreen', color: 'black', padding: '1em', display: 'flex', justifyContent: 'center' }}>
                                    an another custom component
                                </div>
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
        <div style={{ background: 'lightgreen', color: 'black', padding: '1em', display: 'flex', justifyContent: 'center' }}>
            an another custom component
        </div>
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
                            <AccordionItem label='A first item (default)'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem label='A second item (default)'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem mild={true}  label='A third item (mild)'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem mild={true}  label='A fourth item (mild)'>
                                <DummyContents />
                            </AccordionItem>
                            <AccordionItem mild={false} label='A fifth item (not mild)'>
                                <DummyContents />
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Accordion mild={false} theme='primary'>
    <AccordionItem label='A first item (default)'>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label='A second item (default)'>
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
    <AccordionItem mild={false} label='A fifth item (not mild)'>
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
                            <Accordion orientation='inline' theme='primary' style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
                                <AccordionItem label={<>A<br />first<br />item</>}>
                                    <p>hello<br />horizontal<br />accordion</p>
                                </AccordionItem>
                                <AccordionItem label={<>A<br />second<br />item</>}>
                                    <p>hello<br />horizontal<br />accordion</p>
                                </AccordionItem>
                                <AccordionItem label={<>A<br />third<br />item</>}>
                                    <p>hello<br />horizontal<br />accordion</p>
                                </AccordionItem>
                                <AccordionItem label={<>A<br />fourth<br />item</>}>
                                    <p>hello<br />horizontal<br />accordion</p>
                                </AccordionItem>
                                <AccordionItem label={<>A<br />fifth<br />item</>}>
                                    <p>hello<br />horizontal<br />accordion</p>
                                </AccordionItem>
                            </Accordion>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Accordion orientation='inline' theme='primary'>
    <AccordionItem label={<>A<br />first<br />item</>}>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label={<>A<br />second<br />item</>}>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label={<>A<br />third<br />item</>}>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label={<>A<br />fourth<br />item</>}>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem label={<>A<br />fifth<br />item</>}>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
</Accordion>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationInline>
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
                            <Accordion listStyle='breadcrumb' />
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Accordion listStyle='breadcrumb' theme='primary'>
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
                    <SimpleSpecItem>
                        -- no config yet --
                    </SimpleSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Accordion } from '@nodestrap/accordion'

export default function ToDoList(props) {
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
                        <DetailSpecItem code='usesAccordionItemLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentNestedComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesAccordionItemVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentNestedComponent /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <LinkCollapsePage /> and <LinkListItemPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesAccordionItemStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentNestedComponent />.
                            </p>
                            <p>
                                Currently the states are equivalent to <LinkCollapsePage />&apos;s states.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { Accordion, AccordionItem, usesAccordionItemLayout, usesAccordionItemVariants, usesAccordionItemStates } from '@nodestrap/accordion'

const useToDoListItemSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <AccordionItem>:
            usesAccordionItemLayout(),
            usesAccordionItemVariants(),
            usesAccordionItemStates(),
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

export default function ToDoListItem(props) {
    const sheet = useToDoListItemSheet();
    return (
        <AccordionItem {...props} mainClass={sheet.main}>
            { props.children }
        </AccordionItem>
    )
}
export { Accordion as ToDoList }
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
