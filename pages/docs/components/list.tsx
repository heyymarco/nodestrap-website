import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Section, SubSection } from '../../../components/Section'
import { SectionInheritedProps, LinkListPage, LinkIndicatorPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionProperty, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, LinkListItemPage } from '../../../components/common-contents'
import { List, ListItem } from '@nodestrap/list'
import { TypeScriptCode } from '../../../components/Code'

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
            <Section title={<>Manipulating the <LinkListItemPage /></>}>
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
                <SubSection title='Links and Buttons'>
                    <p>
                        To make each <LinkListItemPage /> clickable, set <code>{`<ListItem actionCtrl={true}>`}</code>.
                    </p>
                    <p>
                        You can also set the <code>actionCtrl</code> at <code>{`<List actionCtrl={true}>`}</code>, so the default value of <code>actionCtrl</code> in the <LinkListItemPage /> will be the same as the parent.
                    </p>
                    <p>
                        To handle the click action of the <LinkListItemPage />, assign <code>onClick</code> to the desired <strong>handler function</strong> -or- assign <code>href</code> to the desired <strong>URL</strong>.
                    </p>
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
                <SubSection title='Disabled Items'>
                </SubSection>
            </Section>
            <SectionInheritedProps />
            <SectionProperty property='actionCtrl'>
                <p>
                    Defines the default value of <code>actionCtrl</code> property of <LinkListItemPage />.
                </p>
            </SectionProperty>
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
