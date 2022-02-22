import React, { useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { SubSection } from '../../../components/Section'
import { SectionInheritedProps, LinkListPage, LinkIndicatorPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, LinkListItemPage, SectionVariants, SectionStates, TransparentPreview, LinkResponsiveProviderPage, LinkContentPage, LinkButtonPage, LinkListSeparatorItemPage, LinkUsesIndicatorVariantsPage, SectionSubProperty, SectionPropertyProps } from '../../../components/common-contents'
import { List, ListItem, ListSeparatorItem, OrientationName } from '@nodestrap/list'
import { TypeScriptCode } from '../../../components/Code'
import ResponsiveProvider from '@nodestrap/responsive'
import { Warning } from '../../../components/Info'
import { SectionPropertyGradient as BasicSectionPropertyGradient, SectionPropertyMild as BasicSectionPropertyMild, SectionPropertyNude as BasicSectionPropertyNude, SectionPropertyOutlined as BasicSectionPropertyOutlined, SectionPropertySize as BasicSectionPropertySize, SectionPropertyTheme as BasicSectionPropertyTheme } from './basic'

import loadable from '@loadable/component'
const DemoListLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@List' */'../../../components/DemoPanel@List'))



export const SectionPropertyTheme = ({ propertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <BasicSectionPropertyTheme {...restProps} propertySuffix={propertySuffix ?? false} demonstration={<>
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
        </>}>
            {
                children
                ??
                <>
                    <p>
                        By default, the <code>theme</code> of <LinkListItemPage /> is <strong>inherit</strong> from <CurrentComponent />, but
                        you can set the individual <code>theme</code> of <strong>each</strong> <LinkListItemPage />.
                    </p>
                    <p>
                        You can also set the <code>theme</code> at <CurrentComponent /> level, so the default <code>theme</code> of entire <LinkListItemPage />s are the same.<br />
                    </p>
                </>
            }
        </BasicSectionPropertyTheme>
    );
};
export const SectionPropertySize = ({ propertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <BasicSectionPropertySize {...restProps} propertySuffix={propertySuffix ?? false} demonstration={<>
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
        </>}>
            {
                children
                ??
                <>
                    <p>
                        By default, the <code>size</code> of <LinkListItemPage /> is <strong>inherit</strong> from <CurrentComponent />, but
                        you can set the individual <code>size</code> of <strong>each</strong> <LinkListItemPage />.
                    </p>
                    <p>
                        You can also set the <code>size</code> at <CurrentComponent /> level, so the default <code>size</code> of entire <LinkListItemPage />s are the same.<br />
                    </p>
                </>
            }
        </BasicSectionPropertySize>
    );
};
export const SectionPropertyNude = ({ propertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <BasicSectionPropertyNude {...restProps} propertySuffix={propertySuffix ?? false} demonstration={<>
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
        </>}>
            {
                children
                ??
                <>
                    <p>
                        Assigning <code>{`<ListItem nude={true}>`}</code> makes the <LinkListItemPage /> lose its <code>background</code> and <code>padding</code>.
                    </p>
                    <p>
                        This is useful if you want to fill the whole <LinkListItemPage /> with a custom component.
                    </p>
                </>
            }
        </BasicSectionPropertyNude>
    );
};
export const SectionPropertyGradient = ({ propertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <BasicSectionPropertyGradient {...restProps} propertySuffix={propertySuffix ?? false} demonstration={<>
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
        </>}>
            {
                children
                ??
                <>
                    <p>
                        To make <LinkListItemPage /> appear 3D, set <code>{`<ListItem gradient={true}>`}</code>.
                    </p>
                    <p>
                        You can also set the <code>gradient</code> at <code>{`<List gradient={true}>`}</code>, so the entire <LinkListItemPage />s are 3D.
                    </p>
                </>
            }
        </BasicSectionPropertyGradient>
    );
};
export const SectionPropertyOutlined = ({ propertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <BasicSectionPropertyOutlined {...restProps} propertySuffix={propertySuffix ?? false} demonstration={<>
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
        </>}>
            {
                children
                ??
                <>
                    <p>
                        To make <LinkListItemPage /> appear transparent, set <code>{`<ListItem outlined={true}>`}</code>.
                    </p>
                    <p>
                        You can also set the <code>outlined</code> at <code>{`<List outlined={true}>`}</code>, so the entire <LinkListItemPage />s are transparent.
                    </p>
                </>
            }
        </BasicSectionPropertyOutlined>
    );
};
export const SectionPropertyMild = ({ propertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <BasicSectionPropertyMild {...restProps} propertySuffix={propertySuffix ?? false} demonstration={<>
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
        </>}>
            {
                children
                ??
                <>
                    <p>
                        To make <LinkListItemPage /> look smoother (text friendly), set <code>{`<ListItem mild={true}>`}</code>.
                    </p>
                    <p>
                        You can also set the <code>mild</code> at <code>{`<List mild={true}>`}</code>, so the entire <LinkListItemPage />s look smoother.<br />
                        Note: the <code>{`mild={true}`}</code> is <strong>already set by default</strong> at <CurrentComponent />, so to disable it assign <code>{`<List mild={false}>`}</code>.
                    </p>
                </>
            }
        </BasicSectionPropertyMild>
    );
};
export const SectionPropertyOrientation = ({ property, properties, propertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <SectionSubProperty {...restProps} propertySuffix={propertySuffix ?? false} property={property ?? 'orientation'} properties={properties ?? 'Orientation'}>
            {
                children
                ??
                <>
                    <SubSection titleTag='h4' title={<><code>block</code> Orientation</>}>
                        <p>
                            To make <LinkListItemPage /> stacked in <strong>vertical</strong>, set <code>{`<List orientation='block'>`}</code>.
                        </p>
                        <p>
                            This is the <strong>default</strong> value if the <code>orientation</code> value is not specified.
                        </p>
                        <p>
                            Here the demonstration:
                        </p>
                        <List orientation='block' theme='primary'>
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
                        <p></p>
                        <TypeScriptCode>{`
<List orientation='block' theme='primary'>
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
                        `}</TypeScriptCode>
                    </SubSection>
                    <SubSection titleTag='h4' title={<><code>inline</code> Orientation</>}>
                        <p>
                            To make <LinkListItemPage /> stacked in <strong>horizontal</strong>, set <code>{`<List orientation='inline'>`}</code>.
                        </p>
                        <Warning>
                            <p>
                                Make sure the page is <strong>wide enough</strong> as the <code>inline</code> orientation may take up a lot of space (width).
                            </p>
                            <p>
                                Insufficient page width can cause distorion of your site&apos;s design.
                            </p>
                            <p>
                                You may need a <LinkResponsiveProviderPage /> to create <strong>dynamic orientation</strong> based on <em>overflow detection</em>.
                            </p>
                        </Warning>
                        <p>
                            Here the demonstration:
                        </p>
                        <div style={{ overflowX: 'auto' }}>
                            <List orientation='inline' theme='primary'>
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
                        <p></p>
                        <TypeScriptCode>{`
<List orientation='inline' theme='primary'>
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
                        `}</TypeScriptCode>
                    </SubSection>
                    <SubSection titleTag='h4' title='Dynamic Orientation'>
                        <p>
                            To make <LinkListItemPage /> stacked in <strong>horizontal</strong> (if the page is wide enough) -or- stacked in <strong>vertical</strong> (if the page is too narrow),
                            do this trick!
                        </p>
                        <p>
                            With a help of <LinkResponsiveProviderPage />, you can create a <strong>dynamic orientation</strong>.
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
                </>
            }
        </SectionSubProperty>
    );
};
export const SectionPropertyStyles = ({ property, properties, propertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <SectionSubProperty {...restProps} propertySuffix={propertySuffix ?? false} property={property ?? 'listStyle'} properties={properties ?? 'Styles'}>
            {
                children
                ??
                <>
                    <SubSection titleTag='h4' title={<><code>flat</code> Style</>}>
                        <p>
                            Set <code>{`<List listStyle='flat'>`}</code> to remove the <code>border</code>, <code>border-radius</code>, and <em>separator</em> (a <code>border</code> between <LinkListItemPage />s).
                        </p>
                        <p>
                            Here the demonstration:
                        </p>
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
                    </SubSection>
                    <SubSection titleTag='h4' title={<><code>flush</code> Style</>}>
                        <p>
                            Set <code>{`<List listStyle='flush'>`}</code> to remove the <code>border</code> and <code>border-radius</code>.
                        </p>
                        <p>
                            Here the demonstration:
                        </p>
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
                    </SubSection>
                    <SubSection titleTag='h4' title={<><code>joined</code> Style</>}>
                        <p>
                            Set <code>{`<List listStyle='joined'>`}</code> to remove the <em>separator</em> (a <code>border</code> between <LinkListItemPage />s).
                        </p>
                        <p>
                            Here the demonstration:
                        </p>
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
                    </SubSection>
                    
                    <SubSection titleTag='h4' title={<><code>content</code> Style</>}>
                        <p>
                            Set <code>{`<List listStyle='content'>`}</code> to style the <LinkListItemPage /> to look similar to <LinkContentPage /> (usually with wider paddings).
                        </p>
                        <p>
                            Basically it merges the <LinkListItemPage />&apos;s style + <LinkContentPage />&apos;s style.
                        </p>
                        <p>
                            Here the demonstration:
                        </p>
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
                    </SubSection>
                    <SubSection titleTag='h4' title={<><code>btn</code> Style</>}>
                        <p>
                            Set <code>{`<List listStyle='btn'>`}</code> to style the <LinkListItemPage /> to look similar to <LinkButtonPage />.
                        </p>
                        <p>
                            Basically it merges the <LinkListItemPage />&apos;s style + <LinkButtonPage />&apos;s style.
                        </p>
                        <p>
                            Here the demonstration:
                        </p>
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
                        <SubSection titleTag='h5' title='Make the Buttons Functional'>
                            <ContentMakeListItemClickable />
                            <p>
                                Here the demonstration:
                            </p>
                            <List listStyle='btn' actionCtrl={true} theme='primary'>
                                <ListItem>
                                    A first item
                                </ListItem>
                                <ListItem actionCtrl={false}>
                                    A second item (non clickable)
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
                            <p></p>
                            <TypeScriptCode>{`
<List listStyle='btn' actionCtrl={true} theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem actionCtrl={false}>
        A second item (non clickable)
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
                        </SubSection>
                    </SubSection>
                    
                    <SubSection titleTag='h4' title={<><code>tab</code> Style</>}>
                        <p>
                            Set <code>{`<List listStyle='tab'>`}</code> to style the <LinkListItemPage /> to look similar to <em>a tabbed interface</em>.
                        </p>
                        <p>
                            Here the demonstration:
                        </p>
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
                        <SubSection titleTag='h5' title='Make the Tabs Functional'>
                            <ContentMakeListItemClickable />
                            <p>
                                Here the demonstration:
                            </p>
                            {(() => {
                                const [activeTabIndex, setActiveTabIndex] = useState(3);
                                
                                return (
                                    <List listStyle='tab' actionCtrl={true} orientation='inline' theme='primary'>
                                        <ListItem active={activeTabIndex === 0} onClick={() => setActiveTabIndex(0)}>
                                            A first item
                                        </ListItem>
                                        <ListItem active={activeTabIndex === 1} onClick={() => setActiveTabIndex(1)}>
                                            A second item
                                        </ListItem>
                                        <ListItem theme='success' active={activeTabIndex === 2} onClick={() => setActiveTabIndex(2)}>
                                            A third item
                                        </ListItem>
                                        <ListItem active={activeTabIndex === 3} onClick={() => setActiveTabIndex(3)}>
                                            A fourth item
                                        </ListItem>
                                        <ListItem theme='danger' active={activeTabIndex === 4} onClick={() => setActiveTabIndex(4)}>
                                            A fifth item
                                        </ListItem>
                                    </List>
                                );
                            })()}
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
            <ListItem theme='success' active={activeTabIndex === 2} onClick={() => setActiveTabIndex(2)}>
                A third item
            </ListItem>
            <ListItem active={activeTabIndex === 3} onClick={() => setActiveTabIndex(3)}>
                A fourth item
            </ListItem>
            <ListItem theme='danger' active={activeTabIndex === 4} onClick={() => setActiveTabIndex(4)}>
                A fifth item
            </ListItem>
        </List>
    );
};
                            `}</TypeScriptCode>
                        </SubSection>
                    </SubSection>
                    <SubSection titleTag='h4' title={<><code>breadcrumb</code> Style</>}>
                        <p>
                            Set <code>{`<List listStyle='breadcrumb'>`}</code> to style the <LinkListItemPage /> to look similar to <em>a breadcrumb</em>.
                        </p>
                        <p>
                            Requires <code>{`<List orientation='inline'>`}</code>.
                        </p>
                        <p>
                            Here the demonstration:
                        </p>
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
                    </SubSection>
                    <SubSection titleTag='h4' title={<><code>bullet</code> Style</>}>
                        <p>
                            Set <code>{`<List listStyle='bullet'>`}</code> to style the <LinkListItemPage /> to look similar to <em>a bullet</em>.
                        </p>
                        <p>
                            Requires an <strong>empty</strong> children of <LinkListItemPage />.
                        </p>
                        <p>
                            Here the demonstration:
                        </p>
                        <List listStyle='bullet' orientation='inline' theme='primary'>
                            <ListItem />
                            <ListItem />
                            <ListItem theme='success' />
                            <ListItem active={true} />
                            <ListItem theme='danger' />
                        </List>
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
                    </SubSection>
                    
                    <SubSection titleTag='h4' title={<><code>numbered</code> Style</>}>
                        <p>
                            Add a number (a counter) on each <LinkListItemPage />.
                        </p>
                        <p>
                            Here the demonstration:
                        </p>
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
                        <SubSection titleTag='h5' title='Skip Unnecessary Content'>
                            <p>
                                A <LinkListSeparatorItemPage /> and <code>.void</code> are skipped by counter.
                            </p>
                            <p>
                                Here the demonstration:
                            </p>
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
                        </SubSection>
                    </SubSection>
                </>
            }
        </SectionSubProperty>
    );
};

const ContentMakeListItemClickable = () => {
    return (
        <>
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
        </>
    )
};
export const SectionPropertyActionCtrl = ({ property, properties, propertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <SectionSubProperty {...restProps} propertySuffix={propertySuffix ?? false} property={property ?? 'actionCtrl'} properties={properties ?? 'Links and Buttons'}>
            {
                children
                ??
                <>
                    <ContentMakeListItemClickable />
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
                </>
            }
        </SectionSubProperty>
    );
};
export const SectionPropertyActive = ({ property, properties, propertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <SectionSubProperty {...restProps} propertySuffix={propertySuffix ?? false} property={property ?? 'actionCtrl'} properties={properties ?? 'Active Items'}>
            {
                children
                ??
                <>
                    <p>
                        To make <LinkListItemPage /> (appear) active, set <code>{`<ListItem active={true}>`}</code>.
                    </p>
                    <p>
                        You can also set the <code>active</code> at <code>{`<List active={true}>`}</code>, so the entire <LinkListItemPage />s are active.<br />
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
                </>
            }
        </SectionSubProperty>
    );
};
export const SectionPropertyEnabled = ({ property, properties, propertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <SectionSubProperty {...restProps} propertySuffix={propertySuffix ?? false} property={property ?? 'actionCtrl'} properties={properties ?? 'Disabled Items'}>
            {
                children
                ??
                <>
                    <p>
                        To make <LinkListItemPage /> (appear) disabled, set <code>{`<ListItem enabled={false}>`}</code>.
                    </p>
                    <p>
                        You can also set the <code>enabled</code> at <code>{`<List enabled={false}>`}</code>, so the entire <LinkListItemPage />s are disabled.<br />
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
                </>
            }
        </SectionSubProperty>
    );
};



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
                <SectionPropertyTheme />
                <SectionPropertySize />
                <SectionPropertyNude />
                <SectionPropertyGradient />
                <SectionPropertyOutlined />
                <SectionPropertyMild />
                <SectionPropertyOrientation />
                <SectionPropertyStyles />
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActionCtrl />
                <SectionPropertyActive />
                <SectionPropertyEnabled />
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
                                <p>A custom content of <code>::before</code> element of each <LinkListItemPage />.</p>
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
