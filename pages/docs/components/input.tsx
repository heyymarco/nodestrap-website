import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkInputPage, LinkEditableTextControlPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionSubProperty, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, LinkDropdownListPage, LinkDropdownListButtonPage, ParagraphDefaultValue } from '../../../components/common'
import { Warning } from '../../../components/Info'

import loadable from '@loadable/component'
const DemoInputLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Input' */'../../../components/DemoPanel@Input'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/input' component={<LinkInputPage />} bases={<LinkEditableTextControlPage />}>
            <Head>
                <title>&lt;Input&gt; Component</title>
                <meta name="description" content="Using <Input> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a <strong>text like editor</strong> with a <strong>validation icon</strong>.
                </p>
                <p>
                    There are some built in input format such as <strong>email</strong>, <strong>number</strong>, <strong>url</strong>, <strong>password</strong>, <strong>time</strong>, etc.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoInputLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <Section title='Format Properties'>
                <SectionSubProperty property='type' specList={
                    <SpecList>
                        <DetailSpecItem code='text'>
                            <p>
                                A single-line text field.
                            </p>
                            <p>
                                Line-breaks are automatically removed from the input value.
                            </p>
                            <ParagraphDefaultValue property='type' />
                        </DetailSpecItem>
                        <DetailSpecItem code='search'>
                            <p>
                                A single-line text field for entering search strings.
                            </p>
                            <p>
                                Line-breaks are automatically removed from the input value.
                            </p>
                            <p>
                                Displays a search icon instead of enter key on some devices with dynamic keypads.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='password'>
                            <p>
                                A single-line text field whose value is obscured.
                            </p>
                            <p>
                                Will alert user if site is not secure.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='email'>
                            <p>
                                A field for editing an email address.
                            </p>
                            <p>
                                Looks like <code>{`type='text'`}</code>, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='tel'>
                            <p>
                                A field for editing a telephone number.
                            </p>
                            <p>
                                Looks like <code>{`type='text'`}</code>, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='url'>
                            <p>
                                A field for editing a URL.
                            </p>
                            <p>
                                Looks like <code>{`type='text'`}</code>, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='number'>
                            <p>
                                A field for editing a number.
                            </p>
                            <p>
                                Looks like <code>{`type='text'`}</code>, but has validation parameters and numeric keyboard in supporting browsers and devices with dynamic keyboards.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='time'>
                            <p>
                                A field for editing a time value with no time zone.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='week'>
                            <p>
                                A field for editing a date consisting of a week-year number and a week number with no time zone.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='date'>
                            <p>
                                A field for editing a date (year, month, and day, with no time).
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='datetime-local'>
                            <p>
                                A field for editing a date and time, with no time zone.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='month'>
                            <p>
                                A field for editing a month and year, with no time zone.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>
                    <p>
                        Defines the type of <CurrentComponent /> to render.
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='placeholder'>
                    <p>
                        Displays a brief hint to the user as to what kind of information is expected in the <CurrentComponent />.
                    </p>
                    <p>
                        It should be a word or short phrase that provides a hint as to the expected type of data, rather than an explanation or prompt.
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='autoComplete'>
                    <p>
                        Suggests what kind of the browser should provide automated assistance in filling out form field values, as well as guidance to the browser on what kind of information to expect in the <CurrentComponent />.
                    </p>
                    <p>
                        The source of the suggested values is generally up to the browser, typically values come from past values entered by the user, but they may also come from pre-configured values.
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='list'>
                    <p>
                        Defines the <code>id</code> of a <code>{`<datalist>`}</code> element located in the same document.
                    </p>
                    <p>
                        A <code>{`<datalist>`}</code> provides a list of predefined values to suggest to the user for the <CurrentComponent />.
                    </p>
                    <p>
                        Any values in the <code>{`<datalist>`}</code> that are not compatible with the <CurrentComponent />&apos;s <code>type</code> are not included in the suggested options.
                    </p>
                    <Warning>
                        <p>
                            In <strong>React applications</strong>, the <code>list</code> property may be <strong>less useful</strong> since the developers can create a custom complementary component with better appearance.
                        </p>
                        <p>
                            A <LinkDropdownListPage /> and <LinkDropdownListButtonPage /> may be suitable for displaying the suggested options.
                        </p>
                    </Warning>
                </SectionSubProperty>
            </Section>
            <Section title='Validation Properties'>
                <SectionSubProperty property='min'>
                    <p>
                        Defines the minimum value that is acceptable and valid for the <CurrentComponent /> component.
                    </p>
                    <p>
                        The value must be a valid expression of the corresponding <code>type</code> of <CurrentComponent />.
                        If the <code>min</code> value is not specified, or an invalid value is specified, the <CurrentComponent /> has no minimum value.
                        The <code>min</code>&apos;s value (if present) must be less than or equal to <code>max</code>&apos;s value, otherwise the value will never be valid.
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='max'>
                    <p>
                        Defines the maximum value that is acceptable and valid for the <CurrentComponent /> component.
                    </p>
                    <p>
                        The value must be a valid expression of the corresponding <code>type</code> of <CurrentComponent />.
                        If the <code>max</code> value is not specified, or an invalid value is specified, the <CurrentComponent /> has no maximum value.
                        The <code>max</code>&apos;s value (if present) must be greater than or equal to <code>min</code>&apos;s value, otherwise the value will never be valid.
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='step'>
                    <p>
                        Defines the <em>stepping interval</em> when the user clicks the up/down spinner button, and validates the difference of the <code>type</code> of <code>{`'time'`}</code>/<code>{`'week'`}</code>/<code>{`'date'`}</code>/<code>{`'datetime-local'`}</code>/<code>{`'month'`}</code>.
                    </p>
                    <p>
                        The value must be a valid positive range expression of the corresponding <code>type</code> of <CurrentComponent />.
                        If the <code>step</code> value is not specified, or an invalid value is specified, the <code>step</code> defaults to 1 for <code>type</code> of <code>{`'number'`}</code>, and
                        1 unit type (minute, week, month, day) for the <code>type</code> of <code>{`'time'`}</code>/<code>{`'week'`}</code>/<code>{`'date'`}</code>/<code>{`'datetime-local'`}</code>/<code>{`'month'`}</code>.
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='pattern'>
                    <p>
                        Defines a <em>regular expression</em> pattern for the <CurrentComponent />&apos;s value should match.
                        If a non empty value doesn&apos;t conform to the constraints set by the <code>pattern</code> value,
                        the <code>ValidityState</code>&apos;s <code>patternMismatch</code> property will be <code>true</code>.
                    </p>
                    <p>
                        The <code>pattern</code> is a property for the <code>type</code> of <code>{`'text'`}</code>, <code>{`'tel'`}</code>, <code>{`'email'`}</code>, <code>{`'url'`}</code>, <code>{`'password'`}</code>, and <code>{`'search'`}</code>.
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
            
            defaultValue={props.defaultValue ?? 'Edit me!'}
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
            <Section title='Shortcuts'>
                <p>
                    There are some aliases for making <CurrentComponent /> code more readable:
                </p>
                <SpecList>
                    {
                        ['Text','Search','Password','Email','Tel','Url','Number','Time','Week','Date','DateTime','Month']
                        .map((type, index) => (
                            <SimpleSpecItem key={index}>
                                <code>{`<${type}Input>`}</code> or <code>{`<${type}>`}</code>
                                <p>
                                    Equivalent to <code>{`<Input type='${(type === 'DateTime') ? 'datetime-local' : type.toLowerCase()}'>`}</code>.
                                </p>
                            </SimpleSpecItem>
                        ))
                    }
                </SpecList>
            </Section>
        </ComponentInfoProvider>
    );
}

export default Page
