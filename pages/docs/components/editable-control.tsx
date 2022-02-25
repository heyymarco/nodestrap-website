import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkEditableControlPage, LinkControlPage, ParagraphDefaultValue, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionSubProperty, SectionStates, SectionIntro, LinkValidationProviderPage, ExternalLink, SectionProperty, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents } from '../../../components/common'

import loadable from '@loadable/component'
const DemoEditableControlLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@EditableControl' */'../../../components/DemoPanel@EditableControl'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/editable-control' component={<LinkEditableControlPage />} bases={<LinkControlPage />}>
            <Head>
                <title>&lt;EditableControl&gt; Component</title>
                <meta name="description" content="Using <EditableControl> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is an <strong>abstract</strong> component of <strong>editable component</strong> with <strong>validation</strong>. It has some validation indicators such as <strong>valid</strong>/<strong>invalid</strong>/<strong>uncheck</strong> and inherited indicators from <CurrentBaseComponents />.
                </p>
                <p>
                    In <em>most cases</em>, you should <strong>not use </strong>this component <strong>directly</strong>, instead create your own component by derivering <CurrentComponent />.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoEditableControlLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionStates>
                <SectionSubProperty property='enableValidation' specList={
                    <SpecList>
                    <DetailSpecItem code='true'>
                        <p>
                            Set to this value, all validation functionalities are <strong>preserved</strong>.
                            You can see the validation indicator in case of success or error.
                            Usually shows a green background if successful and shows a red background if an error.
                            The implemented components may add an icon for displaying the validation status.
                        </p>
                        <p>
                            This is the <strong>default</strong> value if the <code>enableValidation</code> value is not specified.
                        </p>
                    </DetailSpecItem>
                    <DetailSpecItem code='false'>
                        <p>
                            Set to this value, all validation functionalities are <strong>disabled</strong>.
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
                        Influences the component <strong>validation functionalities</strong>.
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='isValid' specList={
                    <SpecList>
                        <DetailSpecItem code='undefined'>
                            <p>
                                Set to this value will :<br />
                                <strong>Shows</strong> the <strong>valid indicator</strong> when the control validity&apos;s is <strong>valid</strong>,<br />
                                <strong>Shows</strong> the <strong>invalid indicator</strong> when the control validity&apos;s is <strong>invalid</strong>, and<br />
                                <strong>Hides</strong> when <code>{`enableValidation={false}`}</code>.
                            </p>
                            <p>
                                The control validity is taken from <code>.validity.valid</code> property exposed on corresponding <strong>DOM element</strong> (if implemented).
                                So, if you set <code>{`tag='input'`}</code> or <code>{`tag='textarea'`}</code> or any <strong>DOM elements</strong> that support <strong>client side validation</strong>, the validation is applied automatically without you to write your custom validation logic (<em>uncontrollable</em> validation - uncontrolled by you but controlled by browser).
                            </p>
                            <ParagraphDefaultValue code='isValid' />
                        </DetailSpecItem>
                        <DetailSpecItem code='null'>
                            <p>
                                Set to this value <strong>always hides</strong> the validation indicator <strong>even if</strong> the control is actually <strong>valid</strong> or <strong>invalid</strong>.
                            </p>
                            <p>
                                This is the same effect as setting <code>{`enableValidation={false}`}</code>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='true'>
                            <p>
                                Set to this value <strong>always shows</strong> the <strong>valid indicator</strong> <strong>even if</strong> the control is actually <strong>invalid</strong> or <strong>unchecked</strong>.
                            </p>
                            <p>
                                If <code>{`enableValidation={false}`}</code> then the <code>isValid</code> is forced to <code>{`isValid={null}`}</code>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='false'>
                            <p>
                                Set to this value <strong>always shows</strong> the <strong>invalid indicator</strong> <strong>even if</strong> the control is actually <strong>valid</strong> or <strong>unchecked</strong>.
                            </p>
                            <p>
                                If <code>{`enableValidation={false}`}</code> then the <code>isValid</code> is forced to <code>{`isValid={null}`}</code>.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>
                    <p>
                        Indicates the control&apos;s value is currently in <strong>valid or invalid</strong> state.
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
                            the current control&apos;s <code>enableValidation</code> is <strong>forced</strong> to <code>false</code>, so
                            the current control&apos;s validation functionalities are <strong>always disabled</strong>.
                        </p>
                        <p>
                            If the <LinkValidationProviderPage />&apos;s is <code>{`isValid={true}`}</code> or <code>{`isValid={false}`}</code> or <code>{`isValid={null}`}</code> then
                            the current control&apos;s <code>isValid</code> is <strong>forced</strong> to that value, so
                            the current control&apos;s validation status is <strong>always overriden</strong>.
                        </p>
                        <p>
                            This is the <strong>default</strong> value if the <code>inheritValidation</code> value is not specified.
                        </p>
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
                <SectionSubProperty property='required' specList={
                    <SpecList>
                    <DetailSpecItem code='true'>
                        <p>
                            Set to this value, <strong>forcing</strong> the user to assign a value into the component.
                        </p>
                        <p>
                            If the user <strong>omit to assign</strong> the value, an <strong>invalid</strong> state will be <strong>triggered</strong>.
                        </p>
                    </DetailSpecItem>
                    <DetailSpecItem code='false'>
                        <p>
                            Set to this value, let the user <strong>decide</strong> whether or not to assign a value into the component.
                        </p>
                        <p>
                            If the user <strong>omit to assign</strong> the value, an <strong>invalid</strong> state will <strong>not</strong> be <strong>triggered</strong>.
                        </p>
                        <p>
                            This is the <strong>default</strong> value if the <code>required</code> value is not specified.
                        </p>
                    </DetailSpecItem>
                </SpecList>
                }>
                    <p>
                        Indicates that the user must assign a value for the (input) component before the owning form can be submitted.
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='customValidator'>
                    <p>
                        Provides a <strong>callback function</strong> for validating the value of the component.
                    </p>
                    <p>
                        This is an <strong>additional validation</strong> beside the browser&apos;s native validation.
                        If you want to do a <strong>fully custom validation</strong> - without needing the result of browser&apos;s native validation,
                        please consider to manipulate the <code>isValid</code> property.
                    </p>
                    <p>
                        There are 2 parameters passed into the <em>callback function</em>:
                    </p>
                    <SpecList>
                        <DetailSpecItem code={<><code>state</code> : <code>ValidityState</code></>}>
                            <p>
                                A validation result returned from browser&apos;s native validation.
                            </p>
                            <p>
                                For more details about the type of <code>ValidityState</code>, which is the <em>type</em> of <code>state</code>, see: <ExternalLink href='https://developer.mozilla.org/en-US/docs/Web/API/ValidityState'>MDN documentation</ExternalLink>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code={<><code>value</code> : <code>string</code></>}>
                            <p>
                                A string represents the value of current component.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                    <p>
                        The the <em>callback function</em> must return <code>true</code> (represents <strong>valid</strong>), or <code>false</code> (represents <strong>invalid</strong>), or <code>null</code> (represents <strong>uncheck</strong>).
                    </p>
                </SectionSubProperty>
            </Section>
            <Section title='Value Properties'>
                <SectionSubProperty property='defaultValue'>
                    <p>
                        Defines the <strong>initial value</strong> of the (input) component.
                        The specified value may be <strong>modified</strong> by user <em>without</em> being <strong>controllable</strong> by the (React) application level.
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='value'>
                    <p>
                        Defines the <strong>runtime value</strong> of the (input) component.
                        The value is determined by your (React) application state - usually using React&apos; <code>useState()</code>.
                    </p>
                    <p>
                        You <em>may</em> need to listen the <code>onChange</code> property (or another events) in order to respond the user input and then save the changes into your application state (your <code>useState()</code>).
                    </p>
                    <p>
                        <em>In most cases</em>, the <code>value</code> and <code>onChange</code> properties are <em>brother and sister</em> you should take care of.
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='onChange'>
                    <p>
                        Defines the <strong>callback function</strong> for responding the user input of the component.
                    </p>
                    <p>
                        This callback will be executed <em>each time</em> the user makes a value change on the component.
                        Any changes performed programmatically will not trigger the callback.
                    </p>
                    <p>
                        <em>In most cases</em>, you should store the new value into your application state (your <code>useState()</code>).
                    </p>
                </SectionSubProperty>
            </Section>
            <Section title='Form Submission Properties'>
                <SectionSubProperty property='name'>
                    <p>
                        Defines the <strong>identifier</strong> used by the server to identify the fields in form submissions.
                    </p>
                    <p>
                        If this property isn&apos;t specified or an empty string, the component&apos;s value is not submitted with the form!
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='form'>
                    <p>
                        Defines the form&apos; <code>id</code> that is the owner of the component in the same document.
                    </p>
                    <p>
                        If this property isn&apos;t specified, the component is associated with the nearest containing form, if any.
                    </p>
                </SectionSubProperty>
            </Section>
            <SectionProperty property='autoFocus'>
                <p>
                    Indicates that the component should automatically have focus when the page has finished loading.
                </p>
                <p>
                    <strong>No more than one</strong> component in the document may have the autofocus property.
                    If put on more than one component, the first one with the property receives focus.
                </p>
            </SectionProperty>
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Animations'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>@keyframes valid</code>
                                <p>A keyframes name represents <em>do-validating keyframes</em>, transition from <strong>uncheck</strong> to <strong>valid</strong>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes unvalid</code>
                                <p>A keyframes name represents <em>un-validating keyframes</em>, transition from <strong>valid</strong> to <strong>uncheck</strong>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes invalid</code>
                                <p>A keyframes name represents <em>do-invalidating keyframes</em>, transition from <strong>uncheck</strong> to <strong>invalid</strong>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes uninvalid</code>
                                <p>A keyframes name represents <em>un-invalidating keyframes</em>, transition from <strong>invalid</strong> to <strong>uncheck</strong>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animValid</code>
                                <p>An animation represents <em>do-validating animation</em>, transition from <strong>uncheck</strong> to <strong>valid</strong>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animUnvalid</code>
                                <p>An animation represents <em>un-validating animation</em>, transition from <strong>valid</strong> to <strong>uncheck</strong>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animValid</code>
                                <p>An animation represents <em>do-invalidating animation</em>, transition from <strong>uncheck</strong> to <strong>invalid</strong>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animUnvalid</code>
                                <p>An animation represents <em>un-invalidating animation</em>, transition from <strong>invalid</strong> to <strong>uncheck</strong>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { EditableControl } from '@nodestrap/editable-control'

export default function TextEditor(props) {
    return (
        <EditableControl
            { ...{ type: 'text' }, ...props } // preserves other properties
            
            semanticRole={props.semanticRole ?? 'textbox'} // override default value of semanticRole to 'textbox'
            semantictag={props.semanticTag   ?? 'input'}   // override default value of semanticTag  to 'input'
            
            theme={props.theme ?? 'primary'} // override default value of theme to 'primary'
            mild={props.mild ?? true}        // override default value of mild  to true
        >
            Edit me!
        </EditableControl>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesEditableControlLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesEditableControlVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesEditableControlStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentComponent /> such as:<br />
                                <strong>valid</strong>/<strong>un-valid</strong>/<strong>invalid</strong>/<strong>un-invalid</strong>, and <strong>all states</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>


                        <DetailSpecItem code='isValided(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>fully valided</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isValidating(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being valided</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isUnvalidating(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being un-valided</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isUnvalided(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>fully un-valided</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isValid(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being/fully valided</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isUnvalid(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being/fully un-valided</strong>.
                            </p>
                        </DetailSpecItem>


                        <DetailSpecItem code='isInvalided(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>fully invalided</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isInvalidating(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being invalided</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isUninvalidating(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being un-invalided</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isUninvalided(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>fully un-invalided</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isInvalid(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being/fully invalided</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isUninvalid(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being/fully un-invalided</strong>.
                            </p>
                        </DetailSpecItem>

                        <DetailSpecItem code='isNoValidation(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component has <strong>no validation</strong> applied.<br />
                                Neither <strong>valid</strong> nor <strong>invalid</strong>.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, states, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { EditableControl, usesEditableControlLayout, usesEditableControlVariants, usesEditableControlStates, isValid, isInvalid } from '@nodestrap/editable-control'

const useTextEditorSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <EditableControl>:
            usesEditableControlLayout(),
            usesEditableControlVariants(),
            usesEditableControlStates(),
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

export default function TextEditor(props) {
    const sheet = useTextEditorSheet();
    const [isTextValid, setIsTextValid] = useState(false);
    return (
        <EditableControl {...props} mainClass={sheet.main} tag='textarea' defaultValue='Edit me...' isValid={isTextValid} />
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
