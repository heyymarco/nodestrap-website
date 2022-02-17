import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkInputPage, LinkEditableTextControlPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionSubProperty, SectionIntro, ExternalLink, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents } from '../../../components/common-contents'

import loadable from '@loadable/component'
const DemoInputLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Input' */'../../../components/DemoPanel@Input'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/input' component={<LinkInputPage />} bases={<LinkEditableTextControlPage />}>
            <Head>
                <title>Input Component</title>
                <meta name="description" content="Using <Input> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a <strong>text like editor</strong> with a <strong>validation icon</strong>.
                </p>
                <p>
                    There are some built in input format such as <strong>email</strong>, <strong>number</strong>, <strong>url</strong>, <strong>time</strong>, etc.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoInputLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <Section title='Validation Properties'>
                <SectionSubProperty property='min'>
                    <p>
                        Defines the minimum value the user can enter into the <CurrentComponent /> component.
                    </p>
                    <p>
                        The value must be an integer value of 0 or higher.
                        If the <code>min</code> value is not specified, or an invalid value is specified, the value is assumed to be <code>{`min={0}`}</code>.
                        The value (if present) must be less than or equal to <code>max</code>, otherwise the value will never be valid.
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='max'>
                    <p>
                        Defines the maximum value the user can enter into the <CurrentComponent /> component.
                    </p>
                    <p>
                        The value must be an integer value of 0 or higher.
                        If the <code>max</code> value is not specified, or an invalid value is specified, the value is assumed to be <strong>infinity</strong>.
                        The value (if present) must be greater than or equal to <code>min</code>, otherwise the value will never be valid.
                    </p>
                </SectionSubProperty>
            </Section>
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Foregrounds, Backgrounds &amp; Borders'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>backgGrad</code>
                                <p>The background gradient when <code>{`gradient={true}`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Input } from '@nodestrap/input'

export default function CustomInput(props) {
    return (
        <Input
            {...props} // preserves other properties
            
            theme={props.theme ?? 'primary'}  // override default value of theme to 'primary'
            mild={props.mild ?? false}        // override default value of mild  to false
            
            defaultValue='Edit me!'
        />
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesInputLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesInputVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesInputStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentComponent />.
                            </p>
                            <p>
                                Currently the states are equivalent to <CurrentBaseComponents />&apos;s states.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, states } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { isValid, isInvalid } from '@nodestrap/editable-control'
import { Input, usesInputLayout, usesInputVariants, usesInputStates } from '@nodestrap/input'

const useCustomInputSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Input>:
            usesInputLayout(),
            usesInputVariants(),
            usesInputStates(),
        ]),
        style({
            // then overwrite with your style:
            display : 'inline-block',
            margin  : '1em',
            /* ... */
            
            ...states([
                isValid({
                    // define the style at 'being/fully valided' state:
                    color: 'darkgreen',
                    /* ... */
                }),
                isInvalid({
                    // define the style at 'being/fully invalided' state:
                    color: 'darkred',
                    /* ... */
                }),
                /* ... */
            ]),
            
            /* ... */
        }),
    ),
]);

export default function CustomInput(props) {
    const sheet = useCustomInputSheet();
    const [isValueValid, setIsValueValid] = useState(false);
    return (
        <Input {...props} mainClass={sheet.main} isValid={isValueValid} />
    );
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
