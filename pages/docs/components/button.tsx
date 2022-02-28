import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, DetailSpecItem, SimpleSpecItem, SubSpecList } from '../../../components/SpecList'

import { SectionInheritedProps, LinkButtonPage, LinkActionControlPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, SectionVariants, LinkGroupPage, LinkInputPage, SeeDocumentations, LinkCheckPage, LinkRangePage, SectionSubPropertyStyle, SectionSubPropertyOrientation, ParagraphDefaultValue } from '../../../components/common'

import { TypeScriptCode } from '../../../components/Code'
import { Button } from '@nodestrap/button'

import loadable from '@loadable/component'
import { Section, SubSection } from '../../../components/Section'
const DemoButtonLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Button' */'../../../components/DemoPanel@Button'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/button' component={<LinkButtonPage />} bases={<LinkActionControlPage />}>
            <Head>
                <title>&lt;Button&gt; Component</title>
                <meta name="description" content="Using <Button> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a clickable component for performing an action such as deleting, checkout, displaying menu, etc.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoButtonLazy fallback={<BusyBar />} />
            </SectionDemo>
            <Section title={<><CurrentComponent /> as &quot;Button&quot;</>}>
                <p>
                    Usually, when a button is clicked, it should perform an action.
                </p>
                <p>
                    To archive this, assign <code>onClick</code> property to desired function/hander.
                    For example:
                </p>
                <TypeScriptCode>{`
<Button
    theme='primary'
    onClick={() => alert('you have clicked me!')}
>
    Click me!
</Button>
                `}</TypeScriptCode>
                <p>
                    Live demo:
                </p>
                <Button
                    theme='primary'
                    onClick={() => alert('you have clicked me!')}
                >
                    Click me!
                </Button>
            </Section>
            <Section title={<><CurrentComponent /> as &quot;Link&quot;</>}>
                <p>
                    Our <CurrentComponent /> can be styled and/or be functioned as a link.
                </p>
                <p>
                    To archive this, assign <code>{`href='https://your-desired-url.com'`}</code> and assign <code>{`btnStyle='link'`}</code>.
                    For example:
                </p>
                <TypeScriptCode>{`
<Button
    theme='primary'
    href='http://www.google.com'
    btnStyle='link'
>
    Visit Google!
</Button>
                `}</TypeScriptCode>
                <p>
                    Live demo:
                </p>
                <Button
                    theme='primary'
                    href='http://www.google.com'
                    btnStyle='link'
                >
                    Visit Google!
                </Button>
                <p>
                    The button above is rendered and functioned as a <strong>HTML link</strong>.
                    The rendered HTML is something like this:<br />
                    <code>{`<a class='link' href='http://www.google.com'>Visit Google!</a>`}</code>
                </p>

                <SubSection title={<><CurrentComponent /> as &quot;Button Link&quot;</>}>
                    <p>
                        To create a link but <strong>styled as a button</strong>, assign <code>{`href='https://your-desired-url.com'`}</code> and assign <code>btnStyle</code> to a value other than <code>{`'link'`}</code> -or- just unassign it.
                        For example:
                    </p>
                    <TypeScriptCode>{`
<Button
    theme='primary'
    href='http://www.google.com'
>
    Visit Google!
</Button>
                    `}</TypeScriptCode>
                    <p>
                        Live demo:
                    </p>
                    <Button
                        theme='primary'
                        href='http://www.google.com'
                    >
                        Visit Google!
                    </Button>
                    <p>
                        The button above is rendered and functioned as a <strong>HTML link</strong> but <strong>appears as a button</strong>.
                        The rendered HTML is something like this:<br />
                        <code>{`<a href='http://www.google.com'>Visit Google!</a>`}</code>
                    </p>
                </SubSection>
                <SubSection title={<><CurrentComponent /> as &quot;Fake Link&quot;</>}>
                    <p>
                        To create a button but <strong>styled as a link</strong>, assign <code>onClick</code> property to desired function/hander and assign <code>{`btnStyle='link'`}</code>.
                        For example:
                    </p>
                    <TypeScriptCode>{`
<Button
    theme='primary'
    onClick={() => alert('you have clicked me!')}
    btnStyle='link'
>
    Click me!
</Button>
                    `}</TypeScriptCode>
                    <p>
                        Live demo:
                    </p>
                    <Button
                        theme='primary'
                        onClick={() => alert('you have clicked me!')}
                        btnStyle='link'
                    >
                        Click me!
                    </Button>
                    <p>
                        The button above is rendered and functioned as a <strong>HTML button</strong> but <strong>appears as a link</strong>.
                        The rendered HTML is something like this:<br />
                        <code>{`<button class='link' type='button'>Click me!</button>`}</code>
                    </p>
                </SubSection>
            </Section>
            <Section title={<><code>{`<div>`}</code> as &quot;Button&quot;</>}>
                <p>
                    To create almost any HTML elements (<code>{`<div>`}</code>, <code>{`<span>`}</code>, <code>{`<h1>`}</code>, etc) but <strong>styled as a button</strong>, assign <code>onClick</code> property to desired function/hander and assign <code>{`tag='div'`}</code>.
                    For example:
                </p>
                <TypeScriptCode>{`
<Button
    theme='primary'
    onClick={() => alert('you have clicked me!')}
    tag='div'
>
    Click me!
</Button>
                `}</TypeScriptCode>
                <p>
                    Live demo:
                </p>
                <Button
                    theme='primary'
                    onClick={() => alert('you have clicked me!')}
                    tag='div'
                >
                    Click me!
                </Button>
                <p>
                    The button above is rendered as a <strong>HTML div</strong> but <strong>appears as a button</strong>.
                    The rendered HTML is something like this:<br />
                    <code>{`<div role='button'>Click me!</div>`}</code>
                </p>
                <p>
                    Note: A <code>{`role='button'`}</code> property is automatically inserted to preserve the accessibility.
                    To remove/change the <code>role</code>, just assign <code>{`role=''`}</code> or <code>{`role='something'`}</code> to the <CurrentComponent />.
                </p>
            </Section>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionSubPropertyOrientation specList={
                    <SpecList>
                        <DetailSpecItem code='block'>
                            <p>
                                The <CurrentComponent /> orientation is vertical.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='inline'>
                            <p>
                                The <CurrentComponent /> orientation is horizontal.
                            </p>
                            <ParagraphDefaultValue code='orientation' />
                        </DetailSpecItem>
                    </SpecList>
                } />
                <SectionSubPropertyStyle property='btnStyle' specList={
                    <SpecList>
                        <DetailSpecItem code='undefined'>
                            <p>
                                Styling the <CurrentComponent /> with <strong>default appearance</strong>.
                            </p>
                            <ParagraphDefaultValue code='btnStyle' />
                        </DetailSpecItem>
                        <DetailSpecItem code='link'>
                            <p>
                                Styling the <CurrentComponent /> to look similar to native HTML link (anchor).
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='icon'>
                            <p>
                                Styling the <CurrentComponent /> to look similar to clickable icon.
                            </p>
                            <p>
                                Almost similar to <code>{`btnStyle='link'`}</code> but with slightly different foreground color.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='ghost'>
                            <p>
                                Styling the <CurrentComponent /> to look semi transparent.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                } />
            </SectionVariants>
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Spacings'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>gapInline</code>
                                <p>The default horizontal spacing between <CurrentComponent />&apos;s items (children).</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>gapBlock</code>
                                <p>The default vertical spacing between <CurrentComponent />&apos;s items (children).</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>gapInlineSm</code>
                                <p>The horizontal spacing between <CurrentComponent />&apos;s items (children) when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>gapBlockSm</code>
                                <p>The vertical spacing between <CurrentComponent />&apos;s items (children) when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>gapInlineLg</code>
                                <p>The horizontal spacing between <CurrentComponent />&apos;s items (children) when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>gapBlockLg</code>
                                <p>The vertical spacing between <CurrentComponent />&apos;s items (children) when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Typos'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>whiteSpace</code>
                                <p>Defines how a <strong>white space</strong> inside <CurrentComponent /> is handled.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
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
import { Button } from '@nodestrap/button'

export default function DeleteButton(props) {
    return (
        <Button
            {...props} // preserves other properties
            
            theme={props.theme ?? 'danger'} // override default value of theme to 'danger'
            
            orientation={props.orientation ?? 'block'} // override default value of theme to 'block'
        >
            { props.children }
        </Button>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesButtonLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesButtonVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code>, <code>ButtonVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesButtonStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentComponent /> such as:<br />
                                <strong>press</strong>/<strong>release</strong>, and <strong>all states</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, states, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { isPress } from '@nodestrap/action-control'
import { Button, usesButtonLayout, usesButtonVariants, usesButtonStates } from '@nodestrap/button'

const useCoolButtonSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Button>:
            usesButtonLayout(),
            usesButtonVariants(),
            usesButtonStates(),
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
                isPress({
                    // define the style at 'being/fully pressed' state:
                    background-color: 'red',
                    /* ... */
                }),
                /* ... */
            ]),
            
            /* ... */
        }),
    ),
]);

export default function CoolButton(props) {
    const sheet = useCoolButtonSheet();
    return (
        <Button {...props} mainClass={sheet.main}>
            { props.children }
        </Button>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
