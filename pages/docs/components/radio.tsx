import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { SectionInheritedProps, LinkRadioPage, LinkCheckPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionVariables, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, LinkFormPage } from '../../../components/common'

import loadable from '@loadable/component'
const DemoRadioLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Radio' */'../../../components/DemoPanel@Radio'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/radio' component={<LinkRadioPage />} bases={<LinkCheckPage />}>
            <Head>
                <title>&lt;Radio&gt; Component</title>
                <meta name="description" content="Using <Radio> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a special <CurrentBaseComponents /> component with allowed <strong>only one item checked</strong> in the <CurrentComponent /> group.
                </p>
                <p>
                    Some <CurrentComponent />s with the same <code>name</code>&apos;s value and within the same <LinkFormPage /> are treated in one group.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoRadioLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionVariables specList={
                <SpecList>
                    <DetailSpecItem title='Indicators'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>img</code>
                                <p>The default <strong>radio mark</strong> image.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Radio } from '@nodestrap/radio'

export default function CustomRadio(props) {
    return (
        <Radio
            {...props} // preserves other properties
            
            theme={props.theme ?? 'danger'}  // override default value of theme to 'danger'
            mild={props.mild ?? true}        // override default value of mild  to true
        >
            { props.children }
        </Radio>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesRadioLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesRadioVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesRadioStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentComponent /> such as:<br />
                                <strong>active</strong>/<strong>passive</strong>, and <strong>all states</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, states } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { isValid, isInvalid } from '@nodestrap/editable-control'
import { Radio, usesRadioLayout, usesRadioVariants, usesRadioStates } from '@nodestrap/radio'

const useCustomRadioSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Radio>:
            usesRadioLayout(),
            usesRadioVariants(),
            usesRadioStates(),
        ]),
        style({
            // then overwrite with your style:
            margin  : '1em',
            /* ... */
            
            ...states([
                isValid({
                    // define the style at 'being/fully valided' state:
                    background: 'darkgreen',
                    /* ... */
                }),
                isInvalid({
                    // define the style at 'being/fully invalided' state:
                    background: 'darkred',
                    /* ... */
                }),
                /* ... */
            ]),
            
            /* ... */
        }),
    ),
]);

export default function CustomRadio(props) {
    const sheet = useCustomRadioSheet();
    return (
        <Radio {...props} mainClass={sheet.main}>
            { props.children }
        </Radio>
    );
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
