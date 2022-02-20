import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { SubSection } from '../../../components/Section'
import { SectionInheritedProps, LinkListPage, LinkIndicatorPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, LinkListItemPage, SectionVariants, SectionStates, TransparentPreview, SectionSubPropertyOrientation, LinkResponsiveProviderPage, SectionSubPropertyStyle, LinkContentPage, LinkButtonPage, LinkListSeparatorItemPage } from '../../../components/common-contents'
import { List, ListItem, OrientationName } from '@nodestrap/list'
import { TypeScriptCode } from '../../../components/Code'
import ResponsiveProvider from '@nodestrap/responsive'
import { Warning } from '../../../components/Info'

import loadable from '@loadable/component'
const DemoListLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@List' */'../../../components/DemoPanel@List'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/list' component={<LinkListPage />} bases={<LinkIndicatorPage />}>
            <Head>
                <title>&lt;List&gt; Component</title>
                <meta name="description" content="Using <List> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a presentation component for displaying a series of content.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoListLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionVariants>
                <SubSection title='Themes'>
                    <p>
                        By default, the <code>theme</code> of <LinkListItemPage /> is <strong>inherit</strong> from <CurrentComponent />, but
                        you can set the individual <code>theme</code> of <strong>each</strong> <LinkListItemPage />.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
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
                </SubSection>
                <SubSection title='Sizes'>
                    <p>
                        By default, the <code>size</code> of <LinkListItemPage /> is <strong>inherit</strong> from <CurrentComponent />, but
                        you can set the individual <code>size</code> of <strong>each</strong> <LinkListItemPage />.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
                    <List theme='primary'>
                        <ListItem>
                            An inherit size
                        </ListItem>
                        <ListItem>
                            An inherit size
                        </ListItem>
                        <ListItem size='sm'>
                            A smaller size
                        </ListItem>
                        <ListItem size='lg'>
                            A larger size
                        </ListItem>
                    </List>
                    <p></p>
                    <TypeScriptCode>{`
<List theme='primary'>
    <ListItem>
        An inherit size
    </ListItem>
    <ListItem>
        An inherit size
    </ListItem>
    <ListItem size='sm'>
        A smaller size
    </ListItem>
    <ListItem size='lg'>
        A larger size
    </ListItem>
</List>
                    `}</TypeScriptCode>
                </SubSection>
                <SubSection title='Nude'>
                    <p>
                        Assigning <code>{`<ListItem nude={true}>`}</code> makes the <LinkListItemPage /> lose its <code>background</code> and <code>padding</code>.
                    </p>
                    <p>
                        This is useful if you want to fill the <LinkListItemPage /> with a custom component.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
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
                                    hello world
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
            hello world
        </div>
    </ListItem>
    <ListItem nude={true}>
        A fifth item (nude)
    </ListItem>
</List>
                    `}</TypeScriptCode>
                </SubSection>
                <SubSection title='Gradient'>
                    <p>
                        To make <LinkListItemPage /> appear 3D, set <code>{`<ListItem gradient={true}>`}</code>.
                    </p>
                    <p>
                        You can also set the <code>gradient</code> at <code>{`<List gradient={true}>`}</code>, so the whole <CurrentComponent /> is 3D.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
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
                </SubSection>
                <SubSection title='Outlined'>
                    <p>
                        To make <LinkListItemPage /> appear transparent, set <code>{`<ListItem outlined={true}>`}</code>.
                    </p>
                    <p>
                        You can also set the <code>outlined</code> at <code>{`<List outlined={true}>`}</code>, so the whole <CurrentComponent /> is transparent.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
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
                </SubSection>
                <SubSection title='Mild'>
                    <p>
                        To make <LinkListItemPage /> look smoother (text friendly), set <code>{`<ListItem mild={true}>`}</code>.
                    </p>
                    <p>
                        You can also set the <code>mild</code> at <code>{`<List mild={true}>`}</code>, so the whole <CurrentComponent /> looks smoother.<br />
                        Note: the <code>{`mild={true}`}</code> is <strong>already set by default</strong> in <CurrentComponent />, so to disable it assign <code>{`<List mild={false}>`}</code>
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
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
                </SubSection>
                <SectionSubPropertyOrientation property={<>Orientation</>} specList={
                    <SpecList>
                        <DetailSpecItem code='block'>
                            <p>
                                The <CurrentComponent /> orientation is vertical.
                            </p>
                            <p>
                                This is the <strong>default</strong> value if the <code>orientation</code> value is not specified.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='inline'>
                            <p>
                                The <CurrentComponent /> orientation is horizontal.
                            </p>
                            <Warning>
                                <p>
                                    Make sure the page is wide enough as the <code>inline</code> orientation may take up a lot of space (width).
                                </p>
                                <p>
                                    Insufficient page width can cause distorion of your site&apos;s design.
                                </p>
                                <p>
                                    You may need a <LinkResponsiveProviderPage /> to create <strong>dynamic orientation</strong> based on <em>overflow detection</em>.
                                </p>
                            </Warning>
                        </DetailSpecItem>
                    </SpecList>
                } moreInfo={<>
                    <p>
                        Here the demonstration:
                    </p>
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
                    </List>
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
</List>
                    `}</TypeScriptCode>
                    <SubSection titleTag='h4' title='Dynamic Orientation'>
                        <p>
                            With a help of <LinkResponsiveProviderPage />, you can create a <em>dynamic orientation</em>.
                        </p>
                        <p>
                            Here the demonstration:
                        </p>
                        <Warning>
                            <p>
                                Try to <strong>resize</strong> the <span style={{ background :'pink', border : 'solid 1px darkred', padding: '0.15em' }}>red container</span> below:
                            </p>
                        </Warning>
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
                                    <ListItem>
                                        A_fifth_item
                                    </ListItem>
                                </List>
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
            <ListItem>
                A_fifth_item
            </ListItem>
        </List>
    </div>
)}</ResponsiveProvider>
                        `}</TypeScriptCode>
                        </SubSection>
                </>}>
                    <p>
                        To change the orientation of <CurrentComponent /> to horizontal, set <code>{`<List orientation='inline'>`}</code>.
                    </p>
                </SectionSubPropertyOrientation>
                <SectionSubPropertyStyle property={<>Styles</>} specList={
                    <SpecList>
                        <DetailSpecItem code='undefined'>
                            <p>
                                Styling the <CurrentComponent /> with <strong>default appearance</strong>.
                            </p>
                            <p>
                                This is the <strong>default</strong> value if the <code>listStyle</code> value is not specified.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='flat'>
                            <p>
                                Removes the <code>border</code>, <code>border-radius</code>, and <code>border</code> between <LinkListItemPage />s (separator).
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='flush'>
                            <p>
                                Removes the <code>border</code> and <code>border-radius</code>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='joined'>
                            <p>
                                Removes the <code>border</code> between <LinkListItemPage />s (separator).
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='content'>
                            <p>
                                Styling the <CurrentComponent /> to look similar to <LinkContentPage />&apos;s appearance (usually with wider paddings).
                            </p>
                            <p>
                                Basically it merges the <CurrentComponent />&apos;s style + <LinkContentPage />&apos;s style.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='btn'>
                            <p>
                                Styling the <LinkListItemPage /> to look similar to <LinkButtonPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='tab'>
                            <p>
                                Styling the <CurrentComponent /> to look similar to <em>a tabbed interface</em>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='breadcrumb'>
                            <p>
                                Styling the <CurrentComponent /> to look similar to <em>breadcrumb</em>.
                            </p>
                            <p>
                                Requires <code>{`<List orientation='inline'>`}</code>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='bullet'>
                            <p>
                                Styling the <LinkListItemPage /> to look similar to <em>bullet</em>.
                            </p>
                            <p>
                                Requires an empty <code>children</code> of <LinkListItemPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='numbered'>
                            <p>
                                Add a number (a counter) on each <LinkListItemPage />.
                            </p>
                            <p>
                                The <LinkListSeparatorItemPage />(s) are not counted.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                } />
            </SectionVariants>
            <SectionStates>
                <SubSection title='Links and Buttons'>
                    <p>
                        To make <LinkListItemPage /> clickable, set <code>{`<ListItem actionCtrl={true}>`}</code>.
                    </p>
                    <p>
                        You can also set the <code>actionCtrl</code> at <code>{`<List actionCtrl={true}>`}</code>, so the default value of <code>actionCtrl</code> in the <LinkListItemPage /> will be the same as the parent.
                    </p>
                    <p>
                        To handle the click action of the <LinkListItemPage />, assign <code>onClick</code> to the desired <strong>handler function</strong> -or- assign <code>href</code> to the desired <strong>URL</strong>.
                    </p>
                    <Warning>
                        <p>
                            Assigning <code>{`actionCtrl={true}`}</code> and <code>href</code> makes the <LinkListItemPage /> rendered as <code>{`<a>`}</code>.
                        </p>
                        <p>
                            Assigning <code>{`actionCtrl={true}`}</code> without assigning <code>href</code> makes the <LinkListItemPage /> rendered as <code>{`<div role='button'>`}</code>.
                        </p>
                        <p>
                            Assigning <code>{`actionCtrl={true}`}</code> and <code>{`tag='button'`}</code> without assigning <code>href</code> makes the <LinkListItemPage /> rendered as <code>{`<button>`}</code>.
                        </p>
                    </Warning>
                    <p>
                        Here the demonstration:
                    </p>
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
                </SubSection>
                <SubSection title='Active Items'>
                    <p>
                        To make <LinkListItemPage /> (appear) active, set <code>{`<ListItem active={true}>`}</code>.
                    </p>
                    <p>
                        You can also set the <code>active</code> at <code>{`<List active={true}>`}</code>, so the whole <CurrentComponent /> is active.<br />
                        To make an exception in a/some <LinkListItemPage />(s), set <code>{`<ListItem active={false} inheritActive={false}>`}</code>.<br />
                        Note: the <code>{`inheritActive={false}`}</code> prevents the active state on <CurrentComponent /> affecting the <LinkListItemPage />.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
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
                        </ListItem>
                    </List>
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
    </ListItem>
</List>
                    `}</TypeScriptCode>
                    <SubSection titleTag='h4' title={<>Active Items with Outlined <CurrentComponent /></>}>
                        <p>
                            Assigning <code>{`<ListItem active={true}>`}</code> will cancel out the <code>outlined</code> variant.
                        </p>
                        <p>
                            Here the demonstration:
                        </p>
                        <TransparentPreview>
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
                                </ListItem>
                            </List>
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
    </ListItem>
</List>
                        `}</TypeScriptCode>
                    </SubSection>
                </SubSection>
                <SubSection title='Disabled Items'>
                    <p>
                        To make <LinkListItemPage /> (appear) disabled, set <code>{`<ListItem enabled={false}>`}</code>.
                    </p>
                    <p>
                        You can also set the <code>enabled</code> at <code>{`<List enabled={false}>`}</code>, so the whole <CurrentComponent /> is disabled.<br />
                        To make an exception in a/some <LinkListItemPage />(s), set <code>{`<ListItem enabled={true} inheritEnabled={false}>`}</code>.<br />
                        Note: the <code>{`inheritEnabled={false}`}</code> prevents the disabled state on <CurrentComponent /> affecting the <LinkListItemPage />.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
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
                </SubSection>
            </SectionStates>
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Styles'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>ghostOpacity</code>
                                <p>The default opacity level when <code>{`btnStyle='ghost'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>ghostOpacityArrive</code>
                                <p>The opacity level when <code>{`btnStyle='ghost'`}</code> and a pointer is on the <CurrentComponent />.</p>
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
                        <DetailSpecItem code='usesListVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
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
