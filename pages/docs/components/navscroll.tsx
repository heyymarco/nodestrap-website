import React from 'react'
import Link from 'next/link'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkNavscrollPage, LinkNavPage, SectionOverridingDefaults, ComponentInfoProvider, SectionDerivering, SectionCustomizingParent, SectionIntro, SectionDemo, BusyBar, LinkNavscrollItemPage, SectionVariants, SectionStates, LinkNavscrollSeparatorItemPage, SectionPreviewProperty, CurrentDominantBaseComponent } from '../../../components/common'
import { ListSeparatorItem as NavscrollSeparatorItem } from '@nodestrap/list'
import { Navscroll, NavscrollItem, /*NavscrollSeparatorItem,*/ OrientationName } from '@nodestrap/navscroll'
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
    SectionPropertyActiveNoOutlined,
    SectionPropertyActiveNoMild,
    SectionPropertyEnabled,
} from '../../../components/common@Indicator'
import {
    SectionPropertyActive,
} from '../../../components/common@NavButton'
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
} from '../../../components/common@List'

import loadable from '@loadable/component'
const DemoNavscrollLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Navscroll' */'../../../components/DemoPanel@Navscroll'))



const NavscrollWithActiveOutlined = () => {
    const [navscrollRef, isActive] = useFlipFlop({ defaultState: true });
    
    
    
    const activeLabel = <Element tag={isActive ? 'span' : 'del'}>active</Element>
    return (
        <Navscroll elmRef={navscrollRef} outlined={true} theme='primary'>
            <NavscrollItem>
                A first item
            </NavscrollItem>
            <NavscrollItem>
                A second item
            </NavscrollItem>
            <NavscrollItem active={isActive}>
                A third item ({ activeLabel })
            </NavscrollItem>
            <NavscrollItem active={isActive} actionCtrl={false}>
                A fourth item ({ activeLabel } + not clickable)
            </NavscrollItem>
            <NavscrollItem active={isActive} enabled={false}>
                A fifth item item ({ activeLabel } + disabled)
            </NavscrollItem>
        </Navscroll>
    );
};
const NavscrollWithActiveMild     = () => {
    const [navscrollRef, isActive] = useFlipFlop({ defaultState: true });
    
    
    
    const activeLabel = <Element tag={isActive ? 'span' : 'del'}>active</Element>
    return (
        <Navscroll elmRef={navscrollRef} mild={true} theme='primary'>
            <NavscrollItem>
                A first item
            </NavscrollItem>
            <NavscrollItem>
                A second item
            </NavscrollItem>
            <NavscrollItem active={isActive}>
                A third item ({ activeLabel })
            </NavscrollItem>
            <NavscrollItem active={isActive} actionCtrl={false}>
                A fourth item ({ activeLabel } + not clickable)
            </NavscrollItem>
            <NavscrollItem active={isActive} enabled={false}>
                A fifth item item ({ activeLabel } + disabled)
            </NavscrollItem>
        </Navscroll>
    );
};



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/navscroll' component={<LinkNavscrollPage />} nestedComponent={<LinkNavscrollItemPage />} bases={<LinkNavPage />}>
            <Head>
                <title>&lt;Navscroll&gt; Component</title>
                <meta name="description" content="Using <Navscroll> component" />
            </Head>

            <SectionIntro>
                <p>
                    Displays a series of navigation link.
                </p>
                <p>
                    Similar to <CurrentDominantBaseComponent /> but for navigating sections within a scrollable container (usually a page).
                </p>
                <p>
                    Here the preview:
                </p>
                <Preview>
                    <Navscroll theme='primary'>
                        <NavscrollItem>
                            First section
                        </NavscrollItem>
                        <NavscrollItem>
                            Second section
                            <Navscroll>
                                <NavscrollItem>
                                    Sub 2-1
                                </NavscrollItem>
                                <NavscrollItem>
                                    Sub 2-2
                                </NavscrollItem>
                                <NavscrollItem>
                                    Sub 2-3
                                </NavscrollItem>
                                <NavscrollItem>
                                    Sub 2-4
                                </NavscrollItem>
                            </Navscroll>
                        </NavscrollItem>
                        <NavscrollItem theme='success'>
                            Thrid section
                        </NavscrollItem>
                        <NavscrollItem>
                            Fourth section
                        </NavscrollItem>
                        <NavscrollItem>
                            Fifth section
                        </NavscrollItem>
                        <NavscrollItem>
                            Sixth section
                        </NavscrollItem>
                        <NavscrollItem actionCtrl={false}>
                            Seventh section (not clickable)
                        </NavscrollItem>
                        <NavscrollItem>
                            Last section
                        </NavscrollItem>
                    </Navscroll>
                </Preview>
                <p>
                    The <strong>Active</strong> item above is <strong>automatically highlighted</strong> because the <em>current URL</em> matches the <code>{`<Link href='/docs/components/navscroll'>`}</code>.<br />
                    See the code below:
                </p>
                <TypeScriptCode>{`
<Navscroll theme='primary'>
    <NavscrollItem>
        <Link href='/'>
            Home
        </Link>
    </NavscrollItem>
    <NavscrollItem>
        <Link href='/about'>
            About
        </Link>
    </NavscrollItem>
    <NavscrollItem>
        <Link href='/docs/components/navscroll'>
            Active
        </Link>
    </NavscrollItem>
    <NavscrollItem>
        <Link href='/download'>
            Download
        </Link>
    </NavscrollItem>
    <NavscrollItem enabled={false} href='https://github.com/nodestrap'>
        Disabled
    </NavscrollItem>
</Navscroll>
                `}</TypeScriptCode>
            </SectionIntro>
            <SectionDemo>
                <DemoNavscrollLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview>
                        <Navscroll theme='primary'>
                            <NavscrollItem>
                                An inherit theme
                            </NavscrollItem>
                            <NavscrollItem>
                                An inherit theme
                            </NavscrollItem>
                            <NavscrollItem theme='primary'>
                                A primary theme
                            </NavscrollItem>
                            <NavscrollItem theme='secondary'>
                                A secondary theme
                            </NavscrollItem>
                            <NavscrollItem theme='success'>
                                A success theme
                            </NavscrollItem>
                            <NavscrollItem theme='info'>
                                A info theme
                            </NavscrollItem>
                            <NavscrollItem theme='warning'>
                                A warning theme
                            </NavscrollItem>
                            <NavscrollItem theme='danger'>
                                A danger theme
                            </NavscrollItem>
                            <NavscrollItem theme='light'>
                                A light theme
                            </NavscrollItem>
                            <NavscrollItem theme='dark'>
                                A dark theme
                            </NavscrollItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Navscroll theme='primary'>
    <NavscrollItem>
        An inherit theme
    </NavscrollItem>
    <NavscrollItem>
        An inherit theme
    </NavscrollItem>
    <NavscrollItem theme='primary'>
        A primary theme
    </NavscrollItem>
    <NavscrollItem theme='secondary'>
        A secondary theme
    </NavscrollItem>
    <NavscrollItem theme='success'>
        A success theme
    </NavscrollItem>
    <NavscrollItem theme='info'>
        A info theme
    </NavscrollItem>
    <NavscrollItem theme='warning'>
        A warning theme
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A danger theme
    </NavscrollItem>
    <NavscrollItem theme='light'>
        A light theme
    </NavscrollItem>
    <NavscrollItem theme='dark'>
        A dark theme
    </NavscrollItem>
</Navscroll>
                    `}</TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <Navscroll theme='primary'>
                            <NavscrollItem size='sm'>
                                A smaller size
                            </NavscrollItem>
                            <NavscrollItem size={undefined}>
                                A default size
                            </NavscrollItem>
                            <NavscrollItem size='lg'>
                                A larger size
                            </NavscrollItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Navscroll theme='primary'>
    <NavscrollItem size='sm'>
        A smaller size
    </NavscrollItem>
    <NavscrollItem size={undefined}>
        A default size
    </NavscrollItem>
    <NavscrollItem size='lg'>
        A larger size
    </NavscrollItem>
</Navscroll>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <Navscroll theme='primary'>
                            <NavscrollItem>
                                A first item
                            </NavscrollItem>
                            <NavscrollItem>
                                A second item
                            </NavscrollItem>
                            <NavscrollItem nude={true}>
                                A third item (nude)
                            </NavscrollItem>
                            <NavscrollItem nude={true}>
                                <div style={{ background: 'pink', padding: '1em', display: 'flex', justifyContent: 'center' }}>
                                    a custom component
                                </div>
                            </NavscrollItem>
                            <NavscrollItem nude={true}>
                                A fifth item (nude)
                            </NavscrollItem>
                        </Navscroll>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Navscroll theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem nude={true}>
        A third item (nude)
    </NavscrollItem>
    <NavscrollItem nude={true}>
        <div style={{ background: 'pink', padding: '1em', display: 'flex', justifyContent: 'center' }}>
            a custom component
        </div>
    </NavscrollItem>
    <NavscrollItem nude={true}>
        A fifth item (nude)
    </NavscrollItem>
</Navscroll>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview>
                        <Navscroll theme='primary'>
                            <NavscrollItem>
                                A first item
                            </NavscrollItem>
                            <NavscrollItem>
                                A second item
                            </NavscrollItem>
                            <NavscrollItem gradient={true}>
                                A third item (gradient)
                            </NavscrollItem>
                            <NavscrollItem gradient={true}>
                                A fourth item (gradient)
                            </NavscrollItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Navscroll theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem gradient={true}>
        A third item (gradient)
    </NavscrollItem>
    <NavscrollItem gradient={true}>
        A fourth item (gradient)
    </NavscrollItem>
</Navscroll>

/* enabling gradient at <Navscroll> level: */
<Navscroll gradient={true} theme='primary'>
    <NavscrollItem>
        A first item (gradient)
    </NavscrollItem>
    <NavscrollItem>
        A second item (gradient)
    </NavscrollItem>
    <NavscrollItem>
        A third item (gradient)
    </NavscrollItem>
    <NavscrollItem>
        A fourth item (gradient)
    </NavscrollItem>
</Navscroll>
                    `}</TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        <Navscroll theme='primary'>
                            <NavscrollItem>
                                A first item
                            </NavscrollItem>
                            <NavscrollItem>
                                A second item
                            </NavscrollItem>
                            <NavscrollItem outlined={true}>
                                A third item (outlined)
                            </NavscrollItem>
                            <NavscrollItem outlined={true}>
                                A fourth item (outlined)
                            </NavscrollItem>
                            <NavscrollItem outlined={false}>
                                A fifth item
                            </NavscrollItem>
                        </Navscroll>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Navscroll theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem outlined={true}>
        A third item (outlined)
    </NavscrollItem>
    <NavscrollItem outlined={true}>
        A fourth item (outlined)
    </NavscrollItem>
    <NavscrollItem outlined={false}>
        A fifth item
    </NavscrollItem>
</Navscroll>

/* enabling outlined at <Navscroll> level: */
<Navscroll outlined={true} theme='primary'>
    <NavscrollItem>
        A first item (outlined)
    </NavscrollItem>
    <NavscrollItem>
        A second item (outlined)
    </NavscrollItem>
    <NavscrollItem>
        A third item (outlined)
    </NavscrollItem>
    <NavscrollItem>
        A fourth item (outlined)
    </NavscrollItem>
    <NavscrollItem>
        A fifth item (outlined)
    </NavscrollItem>
</Navscroll>
                    `}</TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        <Navscroll mild={false} theme='primary'>
                            <NavscrollItem>
                                A first item
                            </NavscrollItem>
                            <NavscrollItem>
                                A second item
                            </NavscrollItem>
                            <NavscrollItem mild={true}>
                                A third item (mild)
                            </NavscrollItem>
                            <NavscrollItem mild={true}>
                                A fourth item (mild)
                            </NavscrollItem>
                            <NavscrollItem mild={false}>
                                A fifth item
                            </NavscrollItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Navscroll mild={false} theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem mild={true}>
        A third item (mild)
    </NavscrollItem>
    <NavscrollItem mild={true}>
        A fourth item (mild)
    </NavscrollItem>
    <NavscrollItem mild={false}>
        A fifth item
    </NavscrollItem>
</Navscroll>

/* disabling mild at <Navscroll> level: */
<Navscroll mild={false} theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem>
        A third item
    </NavscrollItem>
    <NavscrollItem>
        A fourth item
    </NavscrollItem>
    <NavscrollItem>
        A fifth item
    </NavscrollItem>
</Navscroll>
                    `}</TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyOrientation>
                    <SectionPropertyOrientationBlock>
                        <Preview>
                            <Navscroll orientation='block' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll orientation='block' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem>
        A third item
    </NavscrollItem>
    <NavscrollItem>
        A fourth item
    </NavscrollItem>
    <NavscrollItem>
        A fifth item
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationBlock>
                    <SectionPropertyOrientationInline>
                        <Preview blockDisplay={true}>
                            <Navscroll orientation='inline' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll orientation='inline' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem>
        A third item
    </NavscrollItem>
    <NavscrollItem>
        A fourth item
    </NavscrollItem>
    <NavscrollItem>
        A fifth item
    </NavscrollItem>
</Navscroll>
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
                                    <Navscroll orientation={currentFallback} theme='primary'>
                                        <NavscrollItem>
                                            A_first_item
                                        </NavscrollItem>
                                        <NavscrollItem>
                                            A_second_item
                                        </NavscrollItem>
                                        <NavscrollItem>
                                            A_third_item
                                        </NavscrollItem>
                                        <NavscrollItem>
                                            A_fourth_item
                                        </NavscrollItem>
                                    </Navscroll>
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
        <Navscroll orientation={currentFallback} theme='primary'>
            <NavscrollItem>
                A_first_item
            </NavscrollItem>
            <NavscrollItem>
                A_second_item
            </NavscrollItem>
            <NavscrollItem>
                A_third_item
            </NavscrollItem>
            <NavscrollItem>
                A_fourth_item
            </NavscrollItem>
        </Navscroll>
    </div>
)}</ResponsiveProvider>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationResponsive>
                </SectionPropertyOrientation>
                <SectionPropertyListStyle>
                    <SectionPropertyFlatStyle>
                        <TransparentPreview>
                            <Navscroll listStyle='flat' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem theme='success'>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem active={true}>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem theme='danger'>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll listStyle='flat' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem theme='success'>
        A third item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A fourth item
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A fifth item
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyFlatStyle>
                    <SectionPropertyFlushStyle>
                        <TransparentPreview>
                            <Navscroll listStyle='flush' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem theme='success'>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem active={true}>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem theme='danger'>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll listStyle='flush' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem theme='success'>
        A third item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A fourth item
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A fifth item
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyFlushStyle>
                    <SectionPropertyJoinedStyle>
                        <TransparentPreview>
                            <Navscroll listStyle='joined' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem theme='success'>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem active={true}>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem theme='danger'>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll listStyle='joined' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem theme='success'>
        A third item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A fourth item
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A fifth item
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyJoinedStyle>
                    
                    <SectionPropertyContentStyle>
                        <Preview>
                            <Navscroll listStyle='content' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem theme='success'>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem active={true}>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem theme='danger'>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll listStyle='content' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem theme='success'>
        A third item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A fourth item
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A fifth item
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyContentStyle>
                    
                    <SectionPropertyBtnStyle>
                        <Preview>
                            <Navscroll listStyle='btn' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem theme='success'>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem active={true}>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem theme='danger'>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll listStyle='btn' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem theme='success'>
        A third item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A fourth item
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A fifth item
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyBtnStyle>
                    <SectionPropertyTabStyle>
                        <Preview blockDisplay={true}>
                            <Navscroll listStyle='tab' orientation='inline' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem theme='success'>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem active={true}>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem theme='danger'>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll listStyle='tab' orientation='inline' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem theme='success'>
        A third item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A fourth item
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A fifth item
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyTabStyle>
                    <SectionPropertyBreadcrumbStyle>
                        <TransparentPreview blockDisplay={true}>
                            <Navscroll listStyle='breadcrumb' orientation='inline' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem theme='success'>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem active={true}>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem theme='danger'>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll listStyle='breadcrumb' orientation='inline' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem theme='success'>
        A third item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A fourth item
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A fifth item
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyBreadcrumbStyle>
                    <SectionPropertyBulletStyle>
                        <Preview blockDisplay={true}>
                            <Navscroll listStyle='bullet' orientation='inline' theme='primary'>
                                <NavscrollItem />
                                <NavscrollItem />
                                <NavscrollItem theme='success' />
                                <NavscrollItem active={true} />
                                <NavscrollItem theme='danger' />
                            </Navscroll>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll listStyle='bullet' orientation='inline' theme='primary'>
    <NavscrollItem />
    <NavscrollItem />
    <NavscrollItem theme='success' />
    <NavscrollItem active={true} />
    <NavscrollItem theme='danger' />
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyBulletStyle>
                    <SectionPropertyNumberedStyle>
                        <Preview>
                            <Navscroll listStyle='numbered' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem theme='success'>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem active={true}>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem theme='danger'>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll listStyle='numbered' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem theme='success'>
        A third item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A fourth item
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A fifth item
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                        <SectionPreviewProperty titleTag='h5' property={`.void`} properties='Skip Unnecessary Content' description={
                            <p>
                                A <LinkNavscrollSeparatorItemPage /> and <code>.void</code> are skipped by counter.
                            </p>
                        }>
                            <Preview>
                                <Navscroll listStyle={['numbered', 'joined']} theme='primary'>
                                    <NavscrollItem>
                                        A first item
                                    </NavscrollItem>
                                    <NavscrollItem>
                                        A second item
                                    </NavscrollItem>
                                    <NavscrollSeparatorItem />
                                    <NavscrollItem theme='success'>
                                        A third item
                                    </NavscrollItem>
                                    <NavscrollItem theme='warning' classes={['void']}>
                                        An advertisement
                                    </NavscrollItem>
                                    <NavscrollItem theme='danger'>
                                        A fourth item
                                    </NavscrollItem>
                                </Navscroll>
                            </Preview>
                            <p></p>
                            <TypeScriptCode>{`
<Navscroll listStyle={['numbered', 'joined']} theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollSeparatorItem />
    <NavscrollItem theme='success'>
        A third item
    </NavscrollItem>
    <NavscrollItem theme='warning' classes={['void']}>
        An advertisement
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A fourth item
    </NavscrollItem>
</Navscroll>
                            `}</TypeScriptCode>
                        </SectionPreviewProperty>
                    </SectionPropertyNumberedStyle>
                </SectionPropertyListStyle>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview>
                        <Navscroll theme='primary'>
                            <NavscrollItem>
                                A first item
                            </NavscrollItem>
                            <NavscrollItem>
                                A second item
                            </NavscrollItem>
                            <NavscrollItem active={true}>
                                A third item (active)
                            </NavscrollItem>
                            <NavscrollItem active={true} actionCtrl={false}>
                                A fourth item (active + not clickable)
                            </NavscrollItem>
                            <NavscrollItem active={true} enabled={false}>
                                A fifth item item (active + disabled)
                            </NavscrollItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Navscroll theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A third item (active)
    </NavscrollItem>
    <NavscrollItem active={true} actionCtrl={false}>
        A fourth item (active + not clickable)
    </NavscrollItem>
    <NavscrollItem active={true} enabled={false}>
        A fifth item item (active + disabled)
    </NavscrollItem>
</Navscroll>
                    `}</TypeScriptCode>
                    <SectionPropertyActiveNoOutlined>
                        <TransparentPreview>
                            <NavscrollWithActiveOutlined />
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll outlined={true} theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A third item (active)
    </NavscrollItem>
    <NavscrollItem active={true} actionCtrl={false}>
        A fourth item (active + not clickable)
    </NavscrollItem>
    <NavscrollItem active={true} enabled={false}>
        A fifth item item (active + disabled)
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyActiveNoOutlined>
                    <SectionPropertyActiveNoMild>
                        <Preview>
                            <NavscrollWithActiveMild />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll mild={true} theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A third item (active)
    </NavscrollItem>
    <NavscrollItem active={true} actionCtrl={false}>
        A fourth item (active + not clickable)
    </NavscrollItem>
    <NavscrollItem active={true} enabled={false}>
        A fifth item item (active + disabled)
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyActiveNoMild>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview>
                        <Navscroll theme='primary'>
                            <NavscrollItem>
                                A first item
                            </NavscrollItem>
                            <NavscrollItem enabled={false}>
                                A second item (disabled)
                            </NavscrollItem>
                            <NavscrollItem enabled={false} active={true}>
                                A third item (disabled + active)
                            </NavscrollItem>
                            <NavscrollItem enabled={false} active={true} actionCtrl={false}>
                                A fourth item (disabled + active + not clickable)
                            </NavscrollItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Navscroll theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem enabled={false}>
        A second item (disabled)
    </NavscrollItem>
    <NavscrollItem enabled={false} active={true}>
        A third item (disabled + active)
    </NavscrollItem>
    <NavscrollItem enabled={false} active={true} actionCtrl={false}>
        A fourth item (disabled + active + not clickable)
    </NavscrollItem>
</Navscroll>
                    `}</TypeScriptCode>
                </SectionPropertyEnabled>
            </SectionStates>
            <SectionCustomizingParent />
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Navscroll } from '@nodestrap/navscroll'

export default function SiteNavscroll(props) {
    return (
        <Navscroll
            {...props} // preserves other properties
            
            theme={props.theme ?? 'success'} // override default value of theme to 'success'
            mild={props.mild ?? false}       // override default value of mild  to false
        >
            { props.children }
        </Navscroll>
    );
}
                `}</SectionOverridingDefaults>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
