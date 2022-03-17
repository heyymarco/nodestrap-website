import React, { useState } from 'react'
import Link from 'next/link'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkNavPage, LinkListPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizingParent, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentNestedComponent, CurrentBaseComponents, LinkNavItemPage, SectionVariants, SectionStates, LinkNavSeparatorItemPage, LinkUsesIndicatorVariantsPage, SectionPreviewProperty, CurrentDominantBaseComponent } from '../../../components/common'
import { Nav, NavProps, NavItem, NavSeparatorItem, OrientationName } from '@nodestrap/nav'
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
    SectionPropertyChildren,
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
    ContentMakeItemsClickable,
    SectionPropertyActionCtrl,
} from '../../../components/common@List'

import loadable from '@loadable/component'
const DemoNavLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Nav' */'../../../components/DemoPanel@Nav'))



const NavWithActiveOutlined = () => {
    const [navRef, isActive] = useFlipFlop({ defaultState: true });
    
    
    
    const activeLabel = <Element tag={isActive ? 'span' : 'del'}>active</Element>
    return (
        <Nav elmRef={navRef} outlined={true} theme='primary'>
            <NavItem>
                A first item
            </NavItem>
            <NavItem>
                A second item
            </NavItem>
            <NavItem active={isActive}>
                A third item ({ activeLabel })
            </NavItem>
            <NavItem active={isActive} actionCtrl={false}>
                A fourth item ({ activeLabel } + not clickable)
            </NavItem>
            <NavItem active={isActive} enabled={false}>
                A fifth item item ({ activeLabel } + disabled)
            </NavItem>
        </Nav>
    );
};
const NavWithActiveMild     = () => {
    const [navRef, isActive] = useFlipFlop({ defaultState: true });
    
    
    
    const activeLabel = <Element tag={isActive ? 'span' : 'del'}>active</Element>
    return (
        <Nav elmRef={navRef} mild={true} theme='primary'>
            <NavItem>
                A first item
            </NavItem>
            <NavItem>
                A second item
            </NavItem>
            <NavItem active={isActive}>
                A third item ({ activeLabel })
            </NavItem>
            <NavItem active={isActive} actionCtrl={false}>
                A fourth item ({ activeLabel } + not clickable)
            </NavItem>
            <NavItem active={isActive} enabled={false}>
                A fifth item item ({ activeLabel } + disabled)
            </NavItem>
        </Nav>
    );
};



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/nav' component={<LinkNavPage />} nestedComponent={<LinkNavItemPage />} bases={<LinkListPage />}>
            <Head>
                <title>&lt;Nav&gt; Component</title>
                <meta name="description" content="Using <Nav> component" />
            </Head>

            <SectionIntro>
                <p>
                    Displays a series of navigation link.
                </p>
                <p>
                    Similar to <CurrentDominantBaseComponent /> but with <u><code>active</code> property managed automatically</u> based on <em>current URL</em>.
                </p>
                <p>
                    Here the preview:
                </p>
                <Preview>
                    <Nav theme='primary'>
                        <NavItem>
                            <Link href='/'>
                                Home
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href='/about'>
                                About
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href='/docs/components/nav'>
                                Active
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href='/download'>
                                Download
                            </Link>
                        </NavItem>
                        <NavItem enabled={false} href='https://github.com/nodestrap'>
                            Disabled
                        </NavItem>
                    </Nav>
                </Preview>
                <p>
                    The <strong>Active</strong> item above is <strong>automatically highlighted</strong> because the <em>current URL</em> matches the <code>{`<Link href='/docs/components/nav'>`}</code>.<br />
                    See the code below:
                </p>
                <TypeScriptCode>{`
<Nav theme='primary'>
    <NavItem>
        <Link href='/'>
            Home
        </Link>
    </NavItem>
    <NavItem>
        <Link href='/about'>
            About
        </Link>
    </NavItem>
    <NavItem>
        <Link href='/docs/components/nav'>
            Active
        </Link>
    </NavItem>
    <NavItem>
        <Link href='/download'>
            Download
        </Link>
    </NavItem>
    <NavItem enabled={false} href='https://github.com/nodestrap'>
        Disabled
    </NavItem>
</Nav>
                `}</TypeScriptCode>
            </SectionIntro>
            <SectionDemo>
                <DemoNavLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionPropertyChildren>
                <Preview>
                    <Nav theme='primary'>
                        <NavItem>
                            <Link href='/'>
                                Home
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href='/about'>
                                About
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href='/docs/components/nav'>
                                {'<Nav>'} Component
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href='/docs/components/list'>
                                {'<List>'} Component
                            </Link>
                        </NavItem>
                    </Nav>
                </Preview>
                <p></p>
                <TypeScriptCode label={<>Show code for <strong>Next JS</strong> user</>}>{`
import { Nav, NavItem } from '@nodestrap/nav'
import Link from 'next/link'

export default function MyPage() {
    return (
        <Nav theme='primary'>
            <NavItem>
                <Link href='/'>
                    Home
                </Link>
            </NavItem>
            <NavItem>
                <Link href='/about'>
                    About
                </Link>
            </NavItem>
            <NavItem>
                <Link href='/docs/components/nav'>
                    {'<Nav>'} Component
                </Link>
            </NavItem>
            <NavItem>
                <Link href='/docs/components/list'>
                    {'<List>'} Component
                </Link>
            </NavItem>
        </Nav>
    );
}
                `}</TypeScriptCode>
                <p></p>
                <TypeScriptCode label={<>Show code for <strong>Gatsby JS</strong> user</>}>{`
// coming soon
                `}</TypeScriptCode>
                <p></p>
                <TypeScriptCode label={<>Show code for <strong>React Router</strong> user</>}>{`
import { Nav, NavItem } from '@nodestrap/nav'

// import { Link } from 'react-router-dom'          // do not use the original <Link>
import { Link } from '@nodestrap/react-router-link' // instead use our compatible <Link>

export default function MyPage() {
    return (
        <Nav theme='primary'>
            <NavItem>
                <Link to='/'>
                    Home
                </Link>
            </NavItem>
            <NavItem>
                <Link to='/about'>
                    About
                </Link>
            </NavItem>
            <NavItem>
                <Link to='/docs/components/nav'>
                    {'<Nav>'} Component
                </Link>
            </NavItem>
            <NavItem>
                <Link to='/docs/components/list'>
                    {'<List>'} Component
                </Link>
            </NavItem>
        </Nav>
    );
}
                `}</TypeScriptCode>
                <p></p>
                <TypeScriptCode label={<>Show code for <strong>React Remix</strong> user</>}>{`
// coming soon
                `}</TypeScriptCode>
            </SectionPropertyChildren>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview>
                        <Nav theme='primary'>
                            <NavItem>
                                An inherit theme
                            </NavItem>
                            <NavItem>
                                An inherit theme
                            </NavItem>
                            <NavItem theme='primary'>
                                A primary theme
                            </NavItem>
                            <NavItem theme='secondary'>
                                A secondary theme
                            </NavItem>
                            <NavItem theme='success'>
                                A success theme
                            </NavItem>
                            <NavItem theme='info'>
                                A info theme
                            </NavItem>
                            <NavItem theme='warning'>
                                A warning theme
                            </NavItem>
                            <NavItem theme='danger'>
                                A danger theme
                            </NavItem>
                            <NavItem theme='light'>
                                A light theme
                            </NavItem>
                            <NavItem theme='dark'>
                                A dark theme
                            </NavItem>
                        </Nav>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Nav theme='primary'>
    <NavItem>
        An inherit theme
    </NavItem>
    <NavItem>
        An inherit theme
    </NavItem>
    <NavItem theme='primary'>
        A primary theme
    </NavItem>
    <NavItem theme='secondary'>
        A secondary theme
    </NavItem>
    <NavItem theme='success'>
        A success theme
    </NavItem>
    <NavItem theme='info'>
        A info theme
    </NavItem>
    <NavItem theme='warning'>
        A warning theme
    </NavItem>
    <NavItem theme='danger'>
        A danger theme
    </NavItem>
    <NavItem theme='light'>
        A light theme
    </NavItem>
    <NavItem theme='dark'>
        A dark theme
    </NavItem>
</Nav>
                    `}</TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <Nav theme='primary'>
                            <NavItem size='sm'>
                                A smaller size
                            </NavItem>
                            <NavItem size={undefined}>
                                A default size
                            </NavItem>
                            <NavItem size='lg'>
                                A larger size
                            </NavItem>
                        </Nav>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Nav theme='primary'>
    <NavItem size='sm'>
        A smaller size
    </NavItem>
    <NavItem size={undefined}>
        A default size
    </NavItem>
    <NavItem size='lg'>
        A larger size
    </NavItem>
</Nav>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <Nav theme='primary'>
                            <NavItem>
                                A first item
                            </NavItem>
                            <NavItem>
                                A second item
                            </NavItem>
                            <NavItem nude={true}>
                                A third item (nude)
                            </NavItem>
                            <NavItem nude={true}>
                                <div style={{ background: 'pink', padding: '1em', display: 'flex', justifyContent: 'center' }}>
                                    hello world
                                </div>
                            </NavItem>
                            <NavItem nude={true}>
                                A fifth item (nude)
                            </NavItem>
                        </Nav>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Nav theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem>
        A second item
    </NavItem>
    <NavItem nude={true}>
        A third item (nude)
    </NavItem>
    <NavItem nude={true}>
        <div style={{ background: 'pink', padding: '1em', display: 'flex', justifyContent: 'center' }}>
            hello world
        </div>
    </NavItem>
    <NavItem nude={true}>
        A fifth item (nude)
    </NavItem>
</Nav>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview>
                        <Nav theme='primary'>
                            <NavItem>
                                A first item
                            </NavItem>
                            <NavItem>
                                A second item
                            </NavItem>
                            <NavItem gradient={true}>
                                A third item (gradient)
                            </NavItem>
                            <NavItem gradient={true}>
                                A fourth item (gradient)
                            </NavItem>
                        </Nav>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Nav theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem>
        A second item
    </NavItem>
    <NavItem gradient={true}>
        A third item (gradient)
    </NavItem>
    <NavItem gradient={true}>
        A fourth item (gradient)
    </NavItem>
</Nav>

/* enabling gradient at <Nav> level: */
<Nav gradient={true} theme='primary'>
    <NavItem>
        A first item (gradient)
    </NavItem>
    <NavItem>
        A second item (gradient)
    </NavItem>
    <NavItem>
        A third item (gradient)
    </NavItem>
    <NavItem>
        A fourth item (gradient)
    </NavItem>
</Nav>
                    `}</TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        <Nav theme='primary'>
                            <NavItem>
                                A first item
                            </NavItem>
                            <NavItem>
                                A second item
                            </NavItem>
                            <NavItem outlined={true}>
                                A third item (outlined)
                            </NavItem>
                            <NavItem outlined={true}>
                                A fourth item (outlined)
                            </NavItem>
                            <NavItem outlined={false}>
                                A fifth item
                            </NavItem>
                        </Nav>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Nav theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem>
        A second item
    </NavItem>
    <NavItem outlined={true}>
        A third item (outlined)
    </NavItem>
    <NavItem outlined={true}>
        A fourth item (outlined)
    </NavItem>
    <NavItem outlined={false}>
        A fifth item
    </NavItem>
</Nav>

/* enabling outlined at <Nav> level: */
<Nav outlined={true} theme='primary'>
    <NavItem>
        A first item (outlined)
    </NavItem>
    <NavItem>
        A second item (outlined)
    </NavItem>
    <NavItem>
        A third item (outlined)
    </NavItem>
    <NavItem>
        A fourth item (outlined)
    </NavItem>
    <NavItem>
        A fifth item (outlined)
    </NavItem>
</Nav>
                    `}</TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        <Nav mild={false} theme='primary'>
                            <NavItem>
                                A first item
                            </NavItem>
                            <NavItem>
                                A second item
                            </NavItem>
                            <NavItem mild={true}>
                                A third item (mild)
                            </NavItem>
                            <NavItem mild={true}>
                                A fourth item (mild)
                            </NavItem>
                            <NavItem mild={false}>
                                A fifth item
                            </NavItem>
                        </Nav>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Nav mild={false} theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem>
        A second item
    </NavItem>
    <NavItem mild={true}>
        A third item (mild)
    </NavItem>
    <NavItem mild={true}>
        A fourth item (mild)
    </NavItem>
    <NavItem mild={false}>
        A fifth item
    </NavItem>
</Nav>

/* disabling mild at <Nav> level: */
<Nav mild={false} theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem>
        A second item
    </NavItem>
    <NavItem>
        A third item
    </NavItem>
    <NavItem>
        A fourth item
    </NavItem>
    <NavItem>
        A fifth item
    </NavItem>
</Nav>
                    `}</TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyOrientation>
                    <SectionPropertyOrientationBlock>
                        <Preview>
                            <Nav orientation='block' theme='primary'>
                                <NavItem>
                                    A first item
                                </NavItem>
                                <NavItem>
                                    A second item
                                </NavItem>
                                <NavItem>
                                    A third item
                                </NavItem>
                                <NavItem>
                                    A fourth item
                                </NavItem>
                                <NavItem>
                                    A fifth item
                                </NavItem>
                            </Nav>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Nav orientation='block' theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem>
        A second item
    </NavItem>
    <NavItem>
        A third item
    </NavItem>
    <NavItem>
        A fourth item
    </NavItem>
    <NavItem>
        A fifth item
    </NavItem>
</Nav>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationBlock>
                    <SectionPropertyOrientationInline>
                        <Preview blockDisplay={true}>
                            <Nav orientation='inline' theme='primary'>
                                <NavItem>
                                    A first item
                                </NavItem>
                                <NavItem>
                                    A second item
                                </NavItem>
                                <NavItem>
                                    A third item
                                </NavItem>
                                <NavItem>
                                    A fourth item
                                </NavItem>
                                <NavItem>
                                    A fifth item
                                </NavItem>
                            </Nav>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Nav orientation='inline' theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem>
        A second item
    </NavItem>
    <NavItem>
        A third item
    </NavItem>
    <NavItem>
        A fourth item
    </NavItem>
    <NavItem>
        A fifth item
    </NavItem>
</Nav>
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
                                    <Nav orientation={currentFallback} theme='primary'>
                                        <NavItem>
                                            A_first_item
                                        </NavItem>
                                        <NavItem>
                                            A_second_item
                                        </NavItem>
                                        <NavItem>
                                            A_third_item
                                        </NavItem>
                                        <NavItem>
                                            A_fourth_item
                                        </NavItem>
                                    </Nav>
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
        <Nav orientation={currentFallback} theme='primary'>
            <NavItem>
                A_first_item
            </NavItem>
            <NavItem>
                A_second_item
            </NavItem>
            <NavItem>
                A_third_item
            </NavItem>
            <NavItem>
                A_fourth_item
            </NavItem>
        </Nav>
    </div>
)}</ResponsiveProvider>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationResponsive>
                </SectionPropertyOrientation>
                <SectionPropertyListStyle>
                    <SectionPropertyFlatStyle>
                        <TransparentPreview>
                            <Nav listStyle='flat' theme='primary'>
                                <NavItem>
                                    A first item
                                </NavItem>
                                <NavItem>
                                    A second item
                                </NavItem>
                                <NavItem theme='success'>
                                    A third item
                                </NavItem>
                                <NavItem active={true}>
                                    A fourth item
                                </NavItem>
                                <NavItem theme='danger'>
                                    A fifth item
                                </NavItem>
                            </Nav>
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Nav listStyle='flat' theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem>
        A second item
    </NavItem>
    <NavItem theme='success'>
        A third item
    </NavItem>
    <NavItem active={true}>
        A fourth item
    </NavItem>
    <NavItem theme='danger'>
        A fifth item
    </NavItem>
</Nav>
                        `}</TypeScriptCode>
                    </SectionPropertyFlatStyle>
                    <SectionPropertyFlushStyle>
                        <TransparentPreview>
                            <Nav listStyle='flush' theme='primary'>
                                <NavItem>
                                    A first item
                                </NavItem>
                                <NavItem>
                                    A second item
                                </NavItem>
                                <NavItem theme='success'>
                                    A third item
                                </NavItem>
                                <NavItem active={true}>
                                    A fourth item
                                </NavItem>
                                <NavItem theme='danger'>
                                    A fifth item
                                </NavItem>
                            </Nav>
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Nav listStyle='flush' theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem>
        A second item
    </NavItem>
    <NavItem theme='success'>
        A third item
    </NavItem>
    <NavItem active={true}>
        A fourth item
    </NavItem>
    <NavItem theme='danger'>
        A fifth item
    </NavItem>
</Nav>
                        `}</TypeScriptCode>
                    </SectionPropertyFlushStyle>
                    <SectionPropertyJoinedStyle>
                        <TransparentPreview>
                            <Nav listStyle='joined' theme='primary'>
                                <NavItem>
                                    A first item
                                </NavItem>
                                <NavItem>
                                    A second item
                                </NavItem>
                                <NavItem theme='success'>
                                    A third item
                                </NavItem>
                                <NavItem active={true}>
                                    A fourth item
                                </NavItem>
                                <NavItem theme='danger'>
                                    A fifth item
                                </NavItem>
                            </Nav>
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Nav listStyle='joined' theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem>
        A second item
    </NavItem>
    <NavItem theme='success'>
        A third item
    </NavItem>
    <NavItem active={true}>
        A fourth item
    </NavItem>
    <NavItem theme='danger'>
        A fifth item
    </NavItem>
</Nav>
                        `}</TypeScriptCode>
                    </SectionPropertyJoinedStyle>
                    
                    <SectionPropertyContentStyle>
                        <Preview>
                            <Nav listStyle='content' theme='primary'>
                                <NavItem>
                                    A first item
                                </NavItem>
                                <NavItem>
                                    A second item
                                </NavItem>
                                <NavItem theme='success'>
                                    A third item
                                </NavItem>
                                <NavItem active={true}>
                                    A fourth item
                                </NavItem>
                                <NavItem theme='danger'>
                                    A fifth item
                                </NavItem>
                            </Nav>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Nav listStyle='content' theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem>
        A second item
    </NavItem>
    <NavItem theme='success'>
        A third item
    </NavItem>
    <NavItem active={true}>
        A fourth item
    </NavItem>
    <NavItem theme='danger'>
        A fifth item
    </NavItem>
</Nav>
                        `}</TypeScriptCode>
                    </SectionPropertyContentStyle>
                    
                    <SectionPropertyBtnStyle>
                        <Preview>
                            <Nav listStyle='btn' theme='primary'>
                                <NavItem>
                                    A first item
                                </NavItem>
                                <NavItem>
                                    A second item
                                </NavItem>
                                <NavItem theme='success'>
                                    A third item
                                </NavItem>
                                <NavItem active={true}>
                                    A fourth item
                                </NavItem>
                                <NavItem theme='danger'>
                                    A fifth item
                                </NavItem>
                            </Nav>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Nav listStyle='btn' theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem>
        A second item
    </NavItem>
    <NavItem theme='success'>
        A third item
    </NavItem>
    <NavItem active={true}>
        A fourth item
    </NavItem>
    <NavItem theme='danger'>
        A fifth item
    </NavItem>
</Nav>
                        `}</TypeScriptCode>
                    </SectionPropertyBtnStyle>
                    <SectionPropertyTabStyle>
                        <Preview blockDisplay={true}>
                            <Nav listStyle='tab' orientation='inline' theme='primary'>
                                <NavItem>
                                    A first item
                                </NavItem>
                                <NavItem>
                                    A second item
                                </NavItem>
                                <NavItem theme='success'>
                                    A third item
                                </NavItem>
                                <NavItem active={true}>
                                    A fourth item
                                </NavItem>
                                <NavItem theme='danger'>
                                    A fifth item
                                </NavItem>
                            </Nav>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Nav listStyle='tab' orientation='inline' theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem>
        A second item
    </NavItem>
    <NavItem theme='success'>
        A third item
    </NavItem>
    <NavItem active={true}>
        A fourth item
    </NavItem>
    <NavItem theme='danger'>
        A fifth item
    </NavItem>
</Nav>
                        `}</TypeScriptCode>
                    </SectionPropertyTabStyle>
                    <SectionPropertyBreadcrumbStyle>
                        <TransparentPreview blockDisplay={true}>
                            <Nav listStyle='breadcrumb' orientation='inline' theme='primary'>
                                <NavItem>
                                    A first item
                                </NavItem>
                                <NavItem>
                                    A second item
                                </NavItem>
                                <NavItem theme='success'>
                                    A third item
                                </NavItem>
                                <NavItem active={true}>
                                    A fourth item
                                </NavItem>
                                <NavItem theme='danger'>
                                    A fifth item
                                </NavItem>
                            </Nav>
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Nav listStyle='breadcrumb' orientation='inline' theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem>
        A second item
    </NavItem>
    <NavItem theme='success'>
        A third item
    </NavItem>
    <NavItem active={true}>
        A fourth item
    </NavItem>
    <NavItem theme='danger'>
        A fifth item
    </NavItem>
</Nav>
                        `}</TypeScriptCode>
                    </SectionPropertyBreadcrumbStyle>
                    <SectionPropertyBulletStyle>
                        <Preview blockDisplay={true}>
                            <Nav listStyle='bullet' orientation='inline' theme='primary'>
                                <NavItem />
                                <NavItem />
                                <NavItem theme='success' />
                                <NavItem active={true} />
                                <NavItem theme='danger' />
                            </Nav>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Nav listStyle='bullet' orientation='inline' theme='primary'>
    <NavItem />
    <NavItem />
    <NavItem theme='success' />
    <NavItem active={true} />
    <NavItem theme='danger' />
</Nav>
                        `}</TypeScriptCode>
                    </SectionPropertyBulletStyle>
                    <SectionPropertyNumberedStyle>
                        <Preview>
                            <Nav listStyle='numbered' theme='primary'>
                                <NavItem>
                                    A first item
                                </NavItem>
                                <NavItem>
                                    A second item
                                </NavItem>
                                <NavItem theme='success'>
                                    A third item
                                </NavItem>
                                <NavItem active={true}>
                                    A fourth item
                                </NavItem>
                                <NavItem theme='danger'>
                                    A fifth item
                                </NavItem>
                            </Nav>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Nav listStyle='numbered' theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem>
        A second item
    </NavItem>
    <NavItem theme='success'>
        A third item
    </NavItem>
    <NavItem active={true}>
        A fourth item
    </NavItem>
    <NavItem theme='danger'>
        A fifth item
    </NavItem>
</Nav>
                        `}</TypeScriptCode>
                        <SectionPreviewProperty titleTag='h5' property={`.void`} properties='Skip Unnecessary Content' description={
                            <p>
                                A <LinkNavSeparatorItemPage /> and <code>.void</code> are skipped by counter.
                            </p>
                        }>
                            <Preview>
                                <Nav listStyle={['numbered', 'joined']} theme='primary'>
                                    <NavItem>
                                        A first item
                                    </NavItem>
                                    <NavItem>
                                        A second item
                                    </NavItem>
                                    <NavSeparatorItem />
                                    <NavItem theme='success'>
                                        A third item
                                    </NavItem>
                                    <NavItem theme='warning' classes={['void']}>
                                        An advertisement
                                    </NavItem>
                                    <NavItem theme='danger'>
                                        A fourth item
                                    </NavItem>
                                </Nav>
                            </Preview>
                            <p></p>
                            <TypeScriptCode>{`
<Nav listStyle={['numbered', 'joined']} theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem>
        A second item
    </NavItem>
    <NavSeparatorItem />
    <NavItem theme='success'>
        A third item
    </NavItem>
    <NavItem theme='warning' classes={['void']}>
        An advertisement
    </NavItem>
    <NavItem theme='danger'>
        A fourth item
    </NavItem>
</Nav>
                            `}</TypeScriptCode>
                        </SectionPreviewProperty>
                    </SectionPropertyNumberedStyle>
                </SectionPropertyListStyle>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview>
                        <Nav theme='primary'>
                            <NavItem>
                                A first item
                            </NavItem>
                            <NavItem>
                                A second item
                            </NavItem>
                            <NavItem active={true}>
                                A third item (active)
                            </NavItem>
                            <NavItem active={true} actionCtrl={false}>
                                A fourth item (active + not clickable)
                            </NavItem>
                            <NavItem active={true} enabled={false}>
                                A fifth item item (active + disabled)
                            </NavItem>
                        </Nav>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Nav theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem>
        A second item
    </NavItem>
    <NavItem active={true}>
        A third item (active)
    </NavItem>
    <NavItem active={true} actionCtrl={false}>
        A fourth item (active + not clickable)
    </NavItem>
    <NavItem active={true} enabled={false}>
        A fifth item item (active + disabled)
    </NavItem>
</Nav>
                    `}</TypeScriptCode>
                    <SectionPropertyActiveNoOutlined>
                        <TransparentPreview>
                            <NavWithActiveOutlined />
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Nav outlined={true} theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem>
        A second item
    </NavItem>
    <NavItem active={true}>
        A third item (active)
    </NavItem>
    <NavItem active={true} actionCtrl={false}>
        A fourth item (active + not clickable)
    </NavItem>
    <NavItem active={true} enabled={false}>
        A fifth item item (active + disabled)
    </NavItem>
</Nav>
                        `}</TypeScriptCode>
                    </SectionPropertyActiveNoOutlined>
                    <SectionPropertyActiveNoMild>
                        <Preview>
                            <NavWithActiveMild />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Nav mild={true} theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem>
        A second item
    </NavItem>
    <NavItem active={true}>
        A third item (active)
    </NavItem>
    <NavItem active={true} actionCtrl={false}>
        A fourth item (active + not clickable)
    </NavItem>
    <NavItem active={true} enabled={false}>
        A fifth item item (active + disabled)
    </NavItem>
</Nav>
                        `}</TypeScriptCode>
                    </SectionPropertyActiveNoMild>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview>
                        <Nav theme='primary'>
                            <NavItem>
                                A first item
                            </NavItem>
                            <NavItem enabled={false}>
                                A second item (disabled)
                            </NavItem>
                            <NavItem enabled={false} active={true}>
                                A third item (disabled + active)
                            </NavItem>
                            <NavItem enabled={false} active={true} actionCtrl={false}>
                                A fourth item (disabled + active + not clickable)
                            </NavItem>
                        </Nav>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Nav theme='primary'>
    <NavItem>
        A first item
    </NavItem>
    <NavItem enabled={false}>
        A second item (disabled)
    </NavItem>
    <NavItem enabled={false} active={true}>
        A third item (disabled + active)
    </NavItem>
    <NavItem enabled={false} active={true} actionCtrl={false}>
        A fourth item (disabled + active + not clickable)
    </NavItem>
</Nav>
                    `}</TypeScriptCode>
                </SectionPropertyEnabled>
            </SectionStates>
            <SectionCustomizingParent />
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Nav } from '@nodestrap/nav'

export default function SiteNav(props) {
    return (
        <Nav
            {...props} // preserves other properties
            
            theme={props.theme ?? 'success'} // override default value of theme to 'success'
            mild={props.mild ?? false}       // override default value of mild  to false
        >
            { props.children }
        </Nav>
    );
}
                `}</SectionOverridingDefaults>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
