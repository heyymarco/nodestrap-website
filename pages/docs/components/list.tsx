import React, { useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkListPage, LinkIndicatorPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentNestedComponent, CurrentBaseComponents, LinkListItemPage, SectionVariants, SectionStates, LinkListSeparatorItemPage, LinkUsesIndicatorVariantsPage, SectionPreviewProperty } from '../../../components/common'
import { List, ListItem, ListSeparatorItem, OrientationName } from '@nodestrap/list'
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
const DemoListLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@List' */'../../../components/DemoPanel@List'))



const FunctionalTabList = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(3);
    
    
    
    return (
        <List listStyle='tab' actionCtrl={true} orientation='inline' theme='primary'>
            <ListItem active={activeTabIndex === 0} onClick={() => setActiveTabIndex(0)}>
                A first item
            </ListItem>
            <ListItem active={activeTabIndex === 1} onClick={() => setActiveTabIndex(1)}>
                A second item
            </ListItem>
            <ListItem active={activeTabIndex === 2} onClick={() => setActiveTabIndex(2)} theme='success'>
                A third item
            </ListItem>
            <ListItem active={activeTabIndex === 3} onClick={() => setActiveTabIndex(3)}>
                A fourth item
            </ListItem>
            <ListItem active={activeTabIndex === 4} onClick={() => setActiveTabIndex(4)} theme='danger'>
                A fifth item
            </ListItem>
        </List>
    );
};
const ListWithActiveOutlined = () => {
    const [listRef, isActive] = useFlipFlop({ defaultState: true });
    
    
    
    const activeLabel = <Element tag={isActive ? 'span' : 'del'}>active</Element>
    return (
        <List elmRef={listRef} outlined={true} theme='primary'>
            <ListItem>
                A first item (not clickable)
            </ListItem>
            <ListItem active={isActive}>
                A second item (not clickable + { activeLabel })
            </ListItem>
            <ListItem active={isActive} actionCtrl={true} onClick={() => alert('hello world')}>
                A third item (clickable + { activeLabel })
            </ListItem>
            <ListItem active={isActive} actionCtrl={true} href='https://www.google.com'>
                A fourth item (clickable + { activeLabel })
            </ListItem>
            <ListItem active={isActive} enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
                A fifth item item (clickable + { activeLabel } + disabled)
            </ListItem>
            <ListItem active={isActive} enabled={false} theme='danger' actionCtrl={true} href='https://www.google.com'>
                A seventh item item (clickable + { activeLabel } + disabled)
                <p>
                    <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
                </p>
            </ListItem>
        </List>
    );
};
const ListWithActiveMild     = () => {
    const [listRef, isActive] = useFlipFlop({ defaultState: true });
    
    
    
    const activeLabel = <Element tag={isActive ? 'span' : 'del'}>active</Element>
    return (
        <List elmRef={listRef} mild={true} theme='primary'>
            <ListItem>
                A first item (not clickable)
            </ListItem>
            <ListItem active={isActive}>
                A second item (not clickable + { activeLabel })
            </ListItem>
            <ListItem active={isActive} actionCtrl={true} onClick={() => alert('hello world')}>
                A third item (clickable + { activeLabel })
            </ListItem>
            <ListItem active={isActive} actionCtrl={true} href='https://www.google.com'>
                A fourth item (clickable + { activeLabel })
            </ListItem>
            <ListItem active={isActive} enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
                A fifth item item (clickable + { activeLabel } + disabled)
            </ListItem>
            <ListItem active={isActive} enabled={false} theme='danger' actionCtrl={true} href='https://www.google.com'>
                A seventh item item (clickable + { activeLabel } + disabled)
                <p>
                    <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
                </p>
            </ListItem>
        </List>
    );
};



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/list' component={<LinkListPage />} nestedComponent={<LinkListItemPage />} bases={<LinkIndicatorPage />}>
            <Head>
                <title>&lt;List&gt; Component</title>
                <meta name="description" content="Using <List> component" />
            </Head>

            <SectionIntro>
                <p>
                    Displays a series of content.
                </p>
                <p>
                    Here the preview:
                </p>
                <Preview>
                    <List theme='primary'>
                        <ListItem>
                            A first item
                        </ListItem>
                        <ListItem>
                            A second item
                        </ListItem>
                        <ListItem active={true}>
                            A third item
                        </ListItem>
                        <ListItem>
                            A fourth item
                        </ListItem>
                        <ListItem theme='danger'>
                            A fifth item
                        </ListItem>
                    </List>
                </Preview>
            </SectionIntro>
            <SectionDemo>
                <DemoListLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview>
                        <List theme='primary'>
                            <ListItem>
                                An inherit theme
                            </ListItem>
                            <ListItem>
                                An inherit theme
                            </ListItem>
                            <ListItem theme='primary'>
                                A primary theme
                            </ListItem>
                            <ListItem theme='secondary'>
                                A secondary theme
                            </ListItem>
                            <ListItem theme='success'>
                                A success theme
                            </ListItem>
                            <ListItem theme='info'>
                                A info theme
                            </ListItem>
                            <ListItem theme='warning'>
                                A warning theme
                            </ListItem>
                            <ListItem theme='danger'>
                                A danger theme
                            </ListItem>
                            <ListItem theme='light'>
                                A light theme
                            </ListItem>
                            <ListItem theme='dark'>
                                A dark theme
                            </ListItem>
                        </List>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<List theme='primary'>
    <ListItem>
        An inherit theme
    </ListItem>
    <ListItem>
        An inherit theme
    </ListItem>
    <ListItem theme='primary'>
        A primary theme
    </ListItem>
    <ListItem theme='secondary'>
        A secondary theme
    </ListItem>
    <ListItem theme='success'>
        A success theme
    </ListItem>
    <ListItem theme='info'>
        A info theme
    </ListItem>
    <ListItem theme='warning'>
        A warning theme
    </ListItem>
    <ListItem theme='danger'>
        A danger theme
    </ListItem>
    <ListItem theme='light'>
        A light theme
    </ListItem>
    <ListItem theme='dark'>
        A dark theme
    </ListItem>
</List>
                    `}</TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <List theme='primary'>
                            <ListItem size='sm'>
                                A smaller size
                            </ListItem>
                            <ListItem size={undefined}>
                                A default size
                            </ListItem>
                            <ListItem size='lg'>
                                A larger size
                            </ListItem>
                        </List>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<List theme='primary'>
    <ListItem size='sm'>
        A smaller size
    </ListItem>
    <ListItem size={undefined}>
        A default size
    </ListItem>
    <ListItem size='lg'>
        A larger size
    </ListItem>
</List>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <List theme='primary'>
                            <ListItem>
                                A first item
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem nude={true}>
                                A third item (nude)
                            </ListItem>
                            <ListItem nude={true}>
                                <div style={{ background: 'pink', padding: '1em', display: 'flex', justifyContent: 'center' }}>
                                    a custom component
                                </div>
                            </ListItem>
                            <ListItem nude={true}>
                                A fifth item (nude)
                            </ListItem>
                        </List>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<List theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem nude={true}>
        A third item (nude)
    </ListItem>
    <ListItem nude={true}>
        <div style={{ background: 'pink', padding: '1em', display: 'flex', justifyContent: 'center' }}>
            a custom component
        </div>
    </ListItem>
    <ListItem nude={true}>
        A fifth item (nude)
    </ListItem>
</List>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview>
                        <List theme='primary'>
                            <ListItem>
                                A first item
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem gradient={true}>
                                A third item (gradient)
                            </ListItem>
                            <ListItem gradient={true}>
                                A fourth item (gradient)
                            </ListItem>
                        </List>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<List theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem gradient={true}>
        A third item (gradient)
    </ListItem>
    <ListItem gradient={true}>
        A fourth item (gradient)
    </ListItem>
</List>

/* enabling gradient at <List> level: */
<List gradient={true} theme='primary'>
    <ListItem>
        A first item (gradient)
    </ListItem>
    <ListItem>
        A second item (gradient)
    </ListItem>
    <ListItem>
        A third item (gradient)
    </ListItem>
    <ListItem>
        A fourth item (gradient)
    </ListItem>
</List>
                    `}</TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        <List theme='primary'>
                            <ListItem>
                                A first item
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem outlined={true}>
                                A third item (outlined)
                            </ListItem>
                            <ListItem outlined={true}>
                                A fourth item (outlined)
                            </ListItem>
                            <ListItem outlined={false}>
                                A fifth item
                            </ListItem>
                        </List>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<List theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem outlined={true}>
        A third item (outlined)
    </ListItem>
    <ListItem outlined={true}>
        A fourth item (outlined)
    </ListItem>
    <ListItem outlined={false}>
        A fifth item
    </ListItem>
</List>

/* enabling outlined at <List> level: */
<List outlined={true} theme='primary'>
    <ListItem>
        A first item (outlined)
    </ListItem>
    <ListItem>
        A second item (outlined)
    </ListItem>
    <ListItem>
        A third item (outlined)
    </ListItem>
    <ListItem>
        A fourth item (outlined)
    </ListItem>
    <ListItem>
        A fifth item (outlined)
    </ListItem>
</List>
                    `}</TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        <List mild={false} theme='primary'>
                            <ListItem>
                                A first item
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem mild={true}>
                                A third item (mild)
                            </ListItem>
                            <ListItem mild={true}>
                                A fourth item (mild)
                            </ListItem>
                            <ListItem mild={false}>
                                A fifth item
                            </ListItem>
                        </List>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<List mild={false} theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem mild={true}>
        A third item (mild)
    </ListItem>
    <ListItem mild={true}>
        A fourth item (mild)
    </ListItem>
    <ListItem mild={false}>
        A fifth item
    </ListItem>
</List>

/* disabling mild at <List> level: */
<List mild={false} theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem>
        A third item
    </ListItem>
    <ListItem>
        A fourth item
    </ListItem>
    <ListItem>
        A fifth item
    </ListItem>
</List>
                    `}</TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyOrientation>
                    <SectionPropertyOrientationBlock>
                        <Preview>
                            <List orientation='block' theme='primary'>
                                <ListItem>
                                    A first item
                                </ListItem>
                                <ListItem>
                                    A second item
                                </ListItem>
                                <ListItem>
                                    A third item
                                </ListItem>
                                <ListItem>
                                    A fourth item
                                </ListItem>
                                <ListItem>
                                    A fifth item
                                </ListItem>
                            </List>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<List orientation='block' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem>
        A third item
    </ListItem>
    <ListItem>
        A fourth item
    </ListItem>
    <ListItem>
        A fifth item
    </ListItem>
</List>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationBlock>
                    <SectionPropertyOrientationInline>
                        <Preview blockDisplay={true}>
                            <List orientation='inline' theme='primary'>
                                <ListItem>
                                    A first item
                                </ListItem>
                                <ListItem>
                                    A second item
                                </ListItem>
                                <ListItem>
                                    A third item
                                </ListItem>
                                <ListItem>
                                    A fourth item
                                </ListItem>
                                <ListItem>
                                    A fifth item
                                </ListItem>
                            </List>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<List orientation='inline' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem>
        A third item
    </ListItem>
    <ListItem>
        A fourth item
    </ListItem>
    <ListItem>
        A fifth item
    </ListItem>
</List>
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
                                    <List orientation={currentFallback} theme='primary'>
                                        <ListItem>
                                            A_first_item
                                        </ListItem>
                                        <ListItem>
                                            A_second_item
                                        </ListItem>
                                        <ListItem>
                                            A_third_item
                                        </ListItem>
                                        <ListItem>
                                            A_fourth_item
                                        </ListItem>
                                    </List>
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
        <List orientation={currentFallback} theme='primary'>
            <ListItem>
                A_first_item
            </ListItem>
            <ListItem>
                A_second_item
            </ListItem>
            <ListItem>
                A_third_item
            </ListItem>
            <ListItem>
                A_fourth_item
            </ListItem>
        </List>
    </div>
)}</ResponsiveProvider>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationResponsive>
                </SectionPropertyOrientation>
                <SectionPropertyListStyle>
                    <SectionPropertyFlatStyle>
                        <TransparentPreview>
                            <List listStyle='flat' theme='primary'>
                                <ListItem>
                                    A first item
                                </ListItem>
                                <ListItem>
                                    A second item
                                </ListItem>
                                <ListItem theme='success'>
                                    A third item
                                </ListItem>
                                <ListItem active={true}>
                                    A fourth item
                                </ListItem>
                                <ListItem theme='danger'>
                                    A fifth item
                                </ListItem>
                            </List>
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<List listStyle='flat' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem active={true}>
        A fourth item
    </ListItem>
    <ListItem theme='danger'>
        A fifth item
    </ListItem>
</List>
                        `}</TypeScriptCode>
                    </SectionPropertyFlatStyle>
                    <SectionPropertyFlushStyle>
                        <TransparentPreview>
                            <List listStyle='flush' theme='primary'>
                                <ListItem>
                                    A first item
                                </ListItem>
                                <ListItem>
                                    A second item
                                </ListItem>
                                <ListItem theme='success'>
                                    A third item
                                </ListItem>
                                <ListItem active={true}>
                                    A fourth item
                                </ListItem>
                                <ListItem theme='danger'>
                                    A fifth item
                                </ListItem>
                            </List>
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<List listStyle='flush' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem active={true}>
        A fourth item
    </ListItem>
    <ListItem theme='danger'>
        A fifth item
    </ListItem>
</List>
                        `}</TypeScriptCode>
                    </SectionPropertyFlushStyle>
                    <SectionPropertyJoinedStyle>
                        <TransparentPreview>
                            <List listStyle='joined' theme='primary'>
                                <ListItem>
                                    A first item
                                </ListItem>
                                <ListItem>
                                    A second item
                                </ListItem>
                                <ListItem theme='success'>
                                    A third item
                                </ListItem>
                                <ListItem active={true}>
                                    A fourth item
                                </ListItem>
                                <ListItem theme='danger'>
                                    A fifth item
                                </ListItem>
                            </List>
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<List listStyle='joined' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem active={true}>
        A fourth item
    </ListItem>
    <ListItem theme='danger'>
        A fifth item
    </ListItem>
</List>
                        `}</TypeScriptCode>
                    </SectionPropertyJoinedStyle>
                    
                    <SectionPropertyContentStyle>
                        <Preview>
                            <List listStyle='content' theme='primary'>
                                <ListItem>
                                    A first item
                                </ListItem>
                                <ListItem>
                                    A second item
                                </ListItem>
                                <ListItem theme='success'>
                                    A third item
                                </ListItem>
                                <ListItem active={true}>
                                    A fourth item
                                </ListItem>
                                <ListItem theme='danger'>
                                    A fifth item
                                </ListItem>
                            </List>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<List listStyle='content' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem active={true}>
        A fourth item
    </ListItem>
    <ListItem theme='danger'>
        A fifth item
    </ListItem>
</List>
                        `}</TypeScriptCode>
                    </SectionPropertyContentStyle>
                    
                    <SectionPropertyBtnStyle>
                        <Preview>
                            <List listStyle='btn' theme='primary'>
                                <ListItem>
                                    A first item
                                </ListItem>
                                <ListItem>
                                    A second item
                                </ListItem>
                                <ListItem theme='success'>
                                    A third item
                                </ListItem>
                                <ListItem active={true}>
                                    A fourth item
                                </ListItem>
                                <ListItem theme='danger'>
                                    A fifth item
                                </ListItem>
                            </List>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<List listStyle='btn' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem active={true}>
        A fourth item
    </ListItem>
    <ListItem theme='danger'>
        A fifth item
    </ListItem>
</List>
                        `}</TypeScriptCode>
                        <SectionPreviewProperty titleTag='h5' property={`actionCtrl={true}`} properties='Make the Buttons Functional' description={
                            <ContentMakeItemsClickable />
                        }>
                            <Preview>
                                <List listStyle='btn' actionCtrl={true} theme='primary'>
                                    <ListItem>
                                        A first item
                                    </ListItem>
                                    <ListItem actionCtrl={false}>
                                        A second item (not clickable)
                                    </ListItem>
                                    <ListItem theme='success'>
                                        A third item
                                    </ListItem>
                                    <ListItem active={true} href='https://www.google.com'>
                                        A fourth item
                                    </ListItem>
                                    <ListItem theme='danger' onClick={() => alert('hello world')}>
                                        A fifth item
                                    </ListItem>
                                </List>
                            </Preview>
                            <p></p>
                            <TypeScriptCode>{`
<List listStyle='btn' actionCtrl={true} theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem actionCtrl={false}>
        A second item (not clickable)
    </ListItem>
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem active={true} href='https://www.google.com'>
        A fourth item
    </ListItem>
    <ListItem theme='danger' onClick={() => alert('hello world')}>
        A fifth item
    </ListItem>
</List>
                            `}</TypeScriptCode>
                        </SectionPreviewProperty>
                    </SectionPropertyBtnStyle>
                    <SectionPropertyTabStyle>
                        <Preview blockDisplay={true}>
                            <List listStyle='tab' orientation='inline' theme='primary'>
                                <ListItem>
                                    A first item
                                </ListItem>
                                <ListItem>
                                    A second item
                                </ListItem>
                                <ListItem theme='success'>
                                    A third item
                                </ListItem>
                                <ListItem active={true}>
                                    A fourth item
                                </ListItem>
                                <ListItem theme='danger'>
                                    A fifth item
                                </ListItem>
                            </List>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<List listStyle='tab' orientation='inline' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem active={true}>
        A fourth item
    </ListItem>
    <ListItem theme='danger'>
        A fifth item
    </ListItem>
</List>
                        `}</TypeScriptCode>
                        <SectionPreviewProperty titleTag='h5' property={`actionCtrl={true}`} properties='Make the Tabs Functional' description={
                            <ContentMakeItemsClickable />
                        }>
                            <Preview blockDisplay={true}>
                                <FunctionalTabList />
                            </Preview>
                            <p></p>
                            <TypeScriptCode>{`
const TabControl = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(3);
    
    return (
        <List listStyle='tab' actionCtrl={true} orientation='inline' theme='primary'>
            <ListItem active={activeTabIndex === 0} onClick={() => setActiveTabIndex(0)}>
                A first item
            </ListItem>
            <ListItem active={activeTabIndex === 1} onClick={() => setActiveTabIndex(1)}>
                A second item
            </ListItem>
            <ListItem active={activeTabIndex === 2} onClick={() => setActiveTabIndex(2)} theme='success'>
                A third item
            </ListItem>
            <ListItem active={activeTabIndex === 3} onClick={() => setActiveTabIndex(3)}>
                A fourth item
            </ListItem>
            <ListItem active={activeTabIndex === 4} onClick={() => setActiveTabIndex(4)} theme='danger'>
                A fifth item
            </ListItem>
        </List>
    );
};
                            `}</TypeScriptCode>
                        </SectionPreviewProperty>
                    </SectionPropertyTabStyle>
                    <SectionPropertyBreadcrumbStyle>
                        <TransparentPreview blockDisplay={true}>
                            <List listStyle='breadcrumb' orientation='inline' theme='primary'>
                                <ListItem>
                                    A first item
                                </ListItem>
                                <ListItem>
                                    A second item
                                </ListItem>
                                <ListItem theme='success'>
                                    A third item
                                </ListItem>
                                <ListItem active={true}>
                                    A fourth item
                                </ListItem>
                                <ListItem theme='danger'>
                                    A fifth item
                                </ListItem>
                            </List>
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<List listStyle='breadcrumb' orientation='inline' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem active={true}>
        A fourth item
    </ListItem>
    <ListItem theme='danger'>
        A fifth item
    </ListItem>
</List>
                        `}</TypeScriptCode>
                    </SectionPropertyBreadcrumbStyle>
                    <SectionPropertyBulletStyle>
                        <Preview blockDisplay={true}>
                            <List listStyle='bullet' orientation='inline' theme='primary'>
                                <ListItem />
                                <ListItem />
                                <ListItem theme='success' />
                                <ListItem active={true} />
                                <ListItem theme='danger' />
                            </List>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<List listStyle='bullet' orientation='inline' theme='primary'>
    <ListItem />
    <ListItem />
    <ListItem theme='success' />
    <ListItem active={true} />
    <ListItem theme='danger' />
</List>
                        `}</TypeScriptCode>
                    </SectionPropertyBulletStyle>
                    <SectionPropertyNumberedStyle>
                        <Preview>
                            <List listStyle='numbered' theme='primary'>
                                <ListItem>
                                    A first item
                                </ListItem>
                                <ListItem>
                                    A second item
                                </ListItem>
                                <ListItem theme='success'>
                                    A third item
                                </ListItem>
                                <ListItem active={true}>
                                    A fourth item
                                </ListItem>
                                <ListItem theme='danger'>
                                    A fifth item
                                </ListItem>
                            </List>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<List listStyle='numbered' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem active={true}>
        A fourth item
    </ListItem>
    <ListItem theme='danger'>
        A fifth item
    </ListItem>
</List>
                        `}</TypeScriptCode>
                        <SectionPreviewProperty titleTag='h5' property={`.void`} properties='Skip Unnecessary Content' description={
                            <p>
                                A <LinkListSeparatorItemPage /> and <code>.void</code> are skipped by counter.
                            </p>
                        }>
                            <Preview>
                                <List listStyle={['numbered', 'joined']} theme='primary'>
                                    <ListItem>
                                        A first item
                                    </ListItem>
                                    <ListItem>
                                        A second item
                                    </ListItem>
                                    <ListSeparatorItem />
                                    <ListItem theme='success'>
                                        A third item
                                    </ListItem>
                                    <ListItem theme='warning' classes={['void']}>
                                        An advertisement
                                    </ListItem>
                                    <ListItem theme='danger'>
                                        A fourth item
                                    </ListItem>
                                </List>
                            </Preview>
                            <p></p>
                            <TypeScriptCode>{`
<List listStyle={['numbered', 'joined']} theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListSeparatorItem />
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem theme='warning' classes={['void']}>
        An advertisement
    </ListItem>
    <ListItem theme='danger'>
        A fourth item
    </ListItem>
</List>
                            `}</TypeScriptCode>
                        </SectionPreviewProperty>
                    </SectionPropertyNumberedStyle>
                </SectionPropertyListStyle>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActionCtrl>
                    <Preview>
                        <List theme='primary'>
                            <ListItem>
                                A first item (not clickable)
                            </ListItem>
                            <ListItem>
                                A second item (not clickable)
                            </ListItem>
                            <ListItem actionCtrl={true} onClick={() => alert('hello world')}>
                                A third item (clickable)
                            </ListItem>
                            <ListItem actionCtrl={true} href='https://www.google.com'>
                                A fourth item (clickable)
                            </ListItem>
                            <ListItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
                                A fifth item item (clickable)
                            </ListItem>
                            <ListItem active={true} theme='danger' actionCtrl={true} href='https://www.google.com'>
                                A seventh item item (clickable)
                            </ListItem>
                        </List>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<List theme='primary'>
    <ListItem>
        A first item (not clickable)
    </ListItem>
    <ListItem>
        A second item (not clickable)
    </ListItem>
    <ListItem actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable)
    </ListItem>
    <ListItem actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable)
    </ListItem>
    <ListItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable)
    </ListItem>
    <ListItem active={true} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable)
    </ListItem>
</List>

/* alternate code but with the similar result: */
<List theme='primary' actionCtrl={true}>
    <ListItem actionCtrl={false}>
        A first item (not clickable)
    </ListItem>
    <ListItem actionCtrl={false}>
        A second item (not clickable)
    </ListItem>
    <ListItem  onClick={() => alert('hello world')}>
        A third item (clickable)
    </ListItem>
    <ListItem href='https://www.google.com'>
        A fourth item (clickable)
    </ListItem>
    <ListItem active={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable)
    </ListItem>
    <ListItem active={true} theme='danger' href='https://www.google.com'>
        A seventh item item (clickable)
    </ListItem>
</List>
                    `}</TypeScriptCode>
                </SectionPropertyActionCtrl>
                <SectionPropertyActive>
                    <Preview>
                        <List theme='primary'>
                            <ListItem>
                                A first item (not clickable)
                            </ListItem>
                            <ListItem active={true}>
                                A second item (not clickable + active)
                            </ListItem>
                            <ListItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
                                A third item (clickable + active)
                            </ListItem>
                            <ListItem active={true} actionCtrl={true} href='https://www.google.com'>
                                A fourth item (clickable + active)
                            </ListItem>
                            <ListItem active={true} enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
                                A fifth item item (clickable + active + disabled)
                            </ListItem>
                            <ListItem active={true} enabled={false} theme='danger' actionCtrl={true} href='https://www.google.com'>
                                A seventh item item (clickable + active + disabled)
                                <p>
                                    <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
                                </p>
                            </ListItem>
                        </List>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<List theme='primary'>
    <ListItem>
        A first item (not clickable)
    </ListItem>
    <ListItem active={true}>
        A second item (not clickable + active)
    </ListItem>
    <ListItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable + active)
    </ListItem>
    <ListItem active={true} actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable + active)
    </ListItem>
    <ListItem active={true} enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable + active + disabled)
    </ListItem>
    <ListItem active={true} enabled={false} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable + active + disabled)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </ListItem>
</List>

/* alternate code but with the similar result: */
<List active={true} theme='primary'>
    <ListItem active={false} inheritActive={false}>
        A first item (not clickable)
    </ListItem>
    <ListItem>
        A second item (not clickable + active)
    </ListItem>
    <ListItem actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable + active)
    </ListItem>
    <ListItem actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable + active)
    </ListItem>
    <ListItem enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable + active + disabled)
    </ListItem>
    <ListItem enabled={false} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable + active + disabled)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </ListItem>
</List>
                    `}</TypeScriptCode>
                    <SectionPropertyActiveNoOutlined>
                        <TransparentPreview>
                            <ListWithActiveOutlined />
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<List outlined={true} theme='primary'>
    <ListItem>
        A first item (not clickable)
    </ListItem>
    <ListItem active={true}>
        A second item (not clickable + active)
    </ListItem>
    <ListItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable + active)
    </ListItem>
    <ListItem active={true} actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable + active)
    </ListItem>
    <ListItem active={true} enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable + active + disabled)
    </ListItem>
    <ListItem active={true} enabled={false} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable + active + disabled)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </ListItem>
</List>
                        `}</TypeScriptCode>
                    </SectionPropertyActiveNoOutlined>
                    <SectionPropertyActiveNoMild>
                        <Preview>
                            <ListWithActiveMild />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<List mild={true} theme='primary'>
    <ListItem>
        A first item (not clickable)
    </ListItem>
    <ListItem active={true}>
        A second item (not clickable + active)
    </ListItem>
    <ListItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable + active)
    </ListItem>
    <ListItem active={true} actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable + active)
    </ListItem>
    <ListItem active={true} enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable + active + disabled)
    </ListItem>
    <ListItem active={true} enabled={false} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable + active + disabled)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </ListItem>
</List>
                        `}</TypeScriptCode>
                    </SectionPropertyActiveNoMild>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview>
                        <List theme='primary'>
                            <ListItem>
                                A first item (not clickable)
                            </ListItem>
                            <ListItem enabled={false}>
                                A second item (not clickable + disabled)
                            </ListItem>
                            <ListItem enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
                                A third item (clickable + disabled)
                            </ListItem>
                            <ListItem enabled={false} actionCtrl={true} href='https://www.google.com'>
                                A fourth item (clickable + disabled)
                                <p>
                                    <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
                                </p>
                            </ListItem>
                            <ListItem enabled={false} active={true} actionCtrl={true} onClick={() => alert('hello world')}>
                                A fifth item item (clickable + disabled + active)
                            </ListItem>
                            <ListItem enabled={false} active={true} theme='danger' actionCtrl={true} href='https://www.google.com'>
                                A seventh item item (clickable + disabled + active)
                                <p>
                                    <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
                                </p>
                            </ListItem>
                        </List>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<List theme='primary'>
    <ListItem>
        A first item (not clickable)
    </ListItem>
    <ListItem enabled={false}>
        A second item (not clickable + disabled)
    </ListItem>
    <ListItem enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable + disabled)
    </ListItem>
    <ListItem enabled={false} actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable + disabled)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </ListItem>
    <ListItem enabled={false} active={true} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable + disabled + active)
    </ListItem>
    <ListItem enabled={false} active={true} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable + disabled + active)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </ListItem>
</List>

/* alternate code but with the similar result: */
<List enabled={false} theme='primary'>
    <ListItem enabled={true} inheritEnabled={false}>
        A first item (not clickable)
    </ListItem>
    <ListItem>
        A second item (not clickable + disabled)
    </ListItem>
    <ListItem actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable + disabled)
    </ListItem>
    <ListItem actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable + disabled)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </ListItem>
    <ListItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable + disabled + active)
    </ListItem>
    <ListItem active={true} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable + disabled + active)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </ListItem>
</List>
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
import { List } from '@nodestrap/list'

export default function ProductList(props) {
    return (
        <List
            {...props} // preserves other properties
            
            theme={props.theme ?? 'success'} // override default value of theme to 'success'
            mild={props.mild ?? false}       // override default value of mild  to false
        >
            { props.children }
        </List>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesListLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesListBasicVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> but <strong>excluding variants</strong> from <LinkUsesIndicatorVariantsPage />.
                            </p>
                            <p>
                                Equivalent to <code>usesListVariants()</code> <strong>minus</strong> <LinkUsesIndicatorVariantsPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesListVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code>, <code>ListVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                            <p>
                                Equivalent to <code>usesListBasicVariants()</code> <strong>plus</strong> <LinkUsesIndicatorVariantsPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesListStates()'>
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
import { List, usesListLayout, usesListVariants, usesListStates } from '@nodestrap/list'

const useProductListSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <List>:
            usesListLayout(),
            usesListVariants(),
            usesListStates(),
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

export default function ProductList(props) {
    const sheet = useProductListSheet();
    return (
        <List {...props} mainClass={sheet.main}>
            { props.children }
        </List>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
