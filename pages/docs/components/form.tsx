import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkFormPage, LinkContentPage, ParagraphDefaultValue, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionSubProperty, SectionStates, SectionIntro, LinkValidationProviderPage, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, LinkInputPage, LinkCheckPage, LinkRangePage, LinkRadioPage } from '../../../components/common'

import loadable from '@loadable/component'
const DemoFormLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Form' */'../../../components/DemoPanel@Form'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/form' component={<LinkFormPage />} bases={<LinkContentPage />}>
            <Head>
                <title>&lt;Form&gt; Component</title>
                <meta name="description" content="Using <Form> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a container component for submitting information.
                    It has some validation indicators such as <strong>valid</strong>/<strong>invalid</strong>/<strong>uncheck</strong>.
                </p>
                <p>
                    Usually it has some input controls such as <LinkInputPage />, <LinkCheckPage />, <LinkRadioPage />, <LinkRangePage />, etc.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoFormLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionStates>
                <SectionSubProperty property='enableValidation' specList={
                    <SpecList>
                    <DetailSpecItem code='true'>
                        <p>
                            Set to this value, all validation functionalities are <strong>preserved</strong>, including its child controls.
                            You can see the validation indicator in case of success or error.
                            Usually shows a green background if successful and shows a red background if an error.
                            The implemented components may add an icon for displaying the validation status.
                        </p>
                        <ParagraphDefaultValue code='enableValidation' />
                    </DetailSpecItem>
                    <DetailSpecItem code='false'>
                        <p>
                            Set to this value, all validation functionalities are <strong>disabled</strong>, including its child controls.
                            The validation indicator will not shown even if the state is successful or error.
                        </p>
                        <p>
                            Usually, at the initial form submission, the <code>enableValidation</code> is set to <code>false</code> and then
                            when a submit button is clicked, the <code>enableValidation</code> is set to <code>true</code>, so the web user can see something was okay or something needs to be revised.
                        </p>
                    </DetailSpecItem>
                </SpecList>
                }>
                    <p>
                        Influences the form <strong>validation functionalities</strong>, including its child controls.
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='isValid' specList={
                    <SpecList>
                        <DetailSpecItem code='undefined'>
                            <p>
                                Set to this value will :<br />
                                <strong>Shows</strong> the <strong>valid indicator</strong> when the form state is <strong>valid</strong>,<br />
                                <strong>Shows</strong> the <strong>invalid indicator</strong> when the form state is <strong>invalid</strong>, and<br />
                                <strong>Hides</strong> when <code>{`enableValidation={false}`}</code>.
                            </p>
                            <p>
                                Any invalid state on the <CurrentComponent />&apos;s child controls causes the <CurrentComponent /> in invalid state.
                            </p>
                            <ParagraphDefaultValue code='isValid' />
                        </DetailSpecItem>
                        <DetailSpecItem code='null'>
                            <p>
                                Set to this value <strong>always hides</strong> the validation indicator <strong>even if</strong> the form is actually <strong>valid</strong> or <strong>invalid</strong>.
                            </p>
                            <p>
                                This is the same effect as setting <code>{`enableValidation={false}`}</code>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='true'>
                            <p>
                                Set to this value <strong>always shows</strong> the <strong>valid indicator</strong> <strong>even if</strong> the form is actually <strong>invalid</strong> or <strong>unchecked</strong>.
                            </p>
                            <p>
                                If <code>{`enableValidation={false}`}</code> then the <code>isValid</code> is forced to <code>{`isValid={null}`}</code>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='false'>
                            <p>
                                Set to this value <strong>always shows</strong> the <strong>invalid indicator</strong> <strong>even if</strong> the form is actually <strong>valid</strong> or <strong>unchecked</strong>.
                            </p>
                            <p>
                                If <code>{`enableValidation={false}`}</code> then the <code>isValid</code> is forced to <code>{`isValid={null}`}</code>.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>
                    <p>
                        Indicates the form state is currently in <strong>valid or invalid</strong> state.
                    </p>
                    <p>
                        You can use this property to implement a <strong>custom validation</strong> (combined with React&apos;s <code>useState()</code>).
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='inheritValidation' specList={
                    <SpecList>
                    <DetailSpecItem code='true'>
                        <p>
                            Set to this value:
                        </p>
                        <p>
                            If the <LinkValidationProviderPage />&apos;s is <code>{`enableValidation={false}`}</code> then
                            the current <CurrentComponent />&apos;s <code>enableValidation</code> is <strong>forced</strong> to <code>false</code>, so
                            the current <CurrentComponent />&apos;s validation functionalities are <strong>always disabled</strong>.
                        </p>
                        <p>
                            If the <LinkValidationProviderPage />&apos;s is <code>{`isValid={true}`}</code> or <code>{`isValid={false}`}</code> or <code>{`isValid={null}`}</code> then
                            the current <CurrentComponent />&apos;s <code>isValid</code> is <strong>forced</strong> to that value, so
                            the current <CurrentComponent />&apos;s validation status is <strong>always overriden</strong>.
                        </p>
                        <ParagraphDefaultValue code='inheritValidation' />
                    </DetailSpecItem>
                    <DetailSpecItem code='false'>
                        <p>
                            Set to this value, all validation functionalities &amp; status are <strong>depend on</strong> <code>isValid</code> property.
                        </p>
                        <p>
                            The states of <LinkValidationProviderPage /> is <strong>ignored</strong>.
                        </p>
                    </DetailSpecItem>
                </SpecList>
                }>
                    <p>
                        Influences the <code>enableValidation</code> property when <code>{`enableValidation={undefined}`}</code> or <code>{`enableValidation={true}`}</code> by <LinkValidationProviderPage /> container (if any).
                    </p>
                </SectionSubProperty>
            </SectionStates>
            <Section title='Validation Properties'>
                <SectionSubProperty property='customValidator'>
                    <p>
                        Provides a <strong>callback function</strong> for validating the <CurrentComponent />.
                    </p>
                    <p>
                        This is an <strong>additional validation</strong> beside the browser&apos;s native validation.
                        If you want to do a <strong>fully custom validation</strong> - without needing the result of browser&apos;s native validation,
                        please consider to manipulate the <code>isValid</code> property.
                    </p>
                    <p>
                        There is 1 parameter passed into the <em>callback function</em>:
                    </p>
                    <SpecList>
                        <DetailSpecItem code={<><code>isValid</code> : <code>ValResult</code></>}>
                            <p>
                                A validation result returned from browser&apos;s native validation.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                    <p>
                        The the <em>callback function</em> must return <code>true</code> (represents <strong>valid</strong>), or <code>false</code> (represents <strong>invalid</strong>), or <code>null</code> (represents <strong>uncheck</strong>).
                    </p>
                </SectionSubProperty>
            </Section>
            <SectionCustomizing specList={
                <SpecList>
                <SimpleSpecItem>
                    -- no config yet --
                </SimpleSpecItem>
            </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Form } from '@nodestrap/form'

export default function RegisterForm(props) {
    return (
        <Form
            theme={props.theme ?? 'primary'} // override default value of theme to 'primary'
            mild={props.mild ?? false}       // override default value of mild  to false
        >
            { props.children }
        </Form>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesFormLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesFormVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesFormStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentComponent /> such as:<br />
                                <strong>valid</strong>/<strong>un-valid</strong>/<strong>invalid</strong>/<strong>un-invalid</strong>.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, states, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { isValid, isInvalid } from '@nodestrap/editable-control'
import { Form, usesFormLayout, usesFormVariants, usesFormStates } from '@nodestrap/form'

const useRegisterFormSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Form>:
            usesFormLayout(),
            usesFormVariants(),
            usesFormStates(),
        ]),
        style({
            // then overwrite with your style:
            display : 'inline-block',
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
            ...states([
                isValid({
                    // define the style at 'being/fully valided' state:
                    background-color: 'green',
                    /* ... */
                }),
                isInvalid({
                    // define the style at 'being/fully invalided' state:
                    background-color: 'red',
                    /* ... */
                }),
                /* ... */
            ]),
            
            /* ... */
        }),
    ),
]);

export default function RegisterForm(props) {
    const sheet = useRegisterFormSheet();
    const [isFormValid, setIsFormValid] = useState(false);
    return (
        <Form {...props} mainClass={sheet.main} isValid={isFormValid}>
            { props.children }
        </Form>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
