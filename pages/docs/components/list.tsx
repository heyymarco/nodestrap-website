import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { SectionInheritedProps, LinkListPage, LinkIndicatorPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionProperty, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, LinkListItemPage } from '../../../components/common-contents'

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
