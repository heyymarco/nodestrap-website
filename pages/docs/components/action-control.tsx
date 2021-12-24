import React, {  } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { Main } from '../../../components/Main'
import { Section } from '../../../components/Section'
import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'
import { TypeScriptCode } from '../../../components/Code'

import { SectionInheritedProps, LinkActionControlPage, LinkControlPage, ParagraphDefaultValue, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionSubProperty, SectionStates } from '../../../components/common-contents'

import { DemoPanel, ResetButtonEx } from '../../../components/DemoPanel'
import { ActionControl } from '@nodestrap/action-control'
import { ActionControlOptions, useActionControlStates } from '../../../components/DemoPanel@ActionControl'



const Page: NextPage = () => {
    const states = useActionControlStates();
    
    
    
    return (
        <ComponentInfoProvider packageName='@nodestrap/action-control' component={<LinkActionControlPage />} base={<LinkControlPage />}>
            <Head>
                <title>ActionControl Component</title>
                <meta name="description" content="Using <ActionControl> component" />
            </Head>

            <Main>
                <Section>
                    <article>
                        <h1>ActionControl Component</h1>
                        <p>
                            <LinkActionControlPage /> is an <strong>abstract</strong> component of <strong>clickable</strong> component. It has some control indicators such as <strong>press</strong>/<strong>release</strong> and inherited indicators from <LinkControlPage />.
                        </p>
                        <p>
                            In <em>most cases</em>, you should <strong>not use </strong>this component <strong>directly</strong>, instead create your own component by derivering <LinkActionControlPage />.
                        </p>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Demonstration</h2>
                        <p>
                            Change some controls below!
                            You&apos;ll see the <LinkActionControlPage /> is customizable.
                        </p>
                        <DemoPanel>
                            <span>Preview</span>
                            <ActionControl
                                press={states.press[0]}
                                
                                focus={states.focus[0]}
                                arrive={states.arrive[0]}

                                enabled={states.enabled[0]}
                                active={states.active[0]}
                                
                                size={states.size[0]}
                                nude={states.nude[0]}
                                theme={states.theme[0]}
                                gradient={states.gradient[0]}
                                outlined={states.outlined[0]}
                                mild={states.mild[0]}
                            >
                                click me
                            </ActionControl>

                            <hr />
                            
                            <ActionControlOptions states={states} />
                            
                            <ResetButtonEx states={states} />

                            <span>Code</span>
                            <TypeScriptCode>{`
<ActionControl
    press={${states.press[0]}}
    
    focus={${states.focus[0]}}
    arrive={${states.arrive[0]}}
    
    enabled={${states.enabled[0]}}
    active={${states.active[0]}}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    click me
</ActionControl>
                            `}</TypeScriptCode>
                        </DemoPanel>
                    </article>
                </Section>
                <SectionInheritedProps component={<LinkActionControlPage />} base={<LinkControlPage />} />
                <SectionStates>
                    <SectionSubProperty property='press' specList={
                        <SpecList>
                            <DetailSpecItem code='undefined'>
                                <p>
                                    Set to this value will <strong>show</strong> the pressed indicator when the control is <strong>being pressed</strong> (by user) and <strong>hide</strong> one when it&apos;s <strong>released</strong>.
                                </p>
                                <ParagraphDefaultValue code='press' />
                            </DetailSpecItem>
                            <DetailSpecItem code='true'>
                                <p>
                                    Set to this value <strong>always shows</strong> the pressed indicator <strong>even if</strong> the control is actually <strong>was released</strong> (by user).
                                </p>
                            </DetailSpecItem>
                            <DetailSpecItem code='false'>
                                <p>
                                    Set to this value <strong>always hides</strong> the pressed indicator <strong>even if</strong> the control is actually <strong>being pressed</strong> (by user).
                                </p>
                            </DetailSpecItem>
                        </SpecList>
                    }>
                        <p>
                            Indicates the control is currently <strong>being pressed</strong> (by user).
                        </p>
                    </SectionSubProperty>
                </SectionStates>
                <SectionCustomizing specList={
                    <SpecList>
                        <DetailSpecItem title='Accessibilities'>
                            <SubSpecList>
                                <SimpleSpecItem>
                                    <code>cursor</code>
                                    <p>A <code>cursor</code> to apply.</p>
                                </SimpleSpecItem>
                            </SubSpecList>
                        </DetailSpecItem>
                        <DetailSpecItem title='Animations'>
                            <SubSpecList>
                                <SimpleSpecItem>
                                    <code>filterPress</code>
                                    <p>A <code>filter</code> to apply when the user is <strong>pressing</strong> the control and <code>{`press={undefined}`}</code> <em>-or-</em> when forced <code>{`press={true}`}</code>.</p>
                                </SimpleSpecItem>
                                <SimpleSpecItem>
                                    <code>@keyframes press</code>
                                    <p>A keyframes name represents <em>pressing keyframes</em>, transition from <strong>released</strong> to <strong>pressed</strong>.</p>
                                </SimpleSpecItem>
                                <SimpleSpecItem>
                                    <code>@keyframes release</code>
                                    <p>A keyframes name represents <em>releasing keyframes</em>, transition from <strong>pressed</strong> to <strong>released</strong>.</p>
                                </SimpleSpecItem>
                                <SimpleSpecItem>
                                    <code>animPress</code>
                                    <p>An animation represents <em>pressing animation</em>, transition from <strong>released</strong> to <strong>pressed</strong>.</p>
                                </SimpleSpecItem>
                                <SimpleSpecItem>
                                    <code>animRelease</code>
                                    <p>An animation represents <em>releasing animation</em>, transition from <strong>pressed</strong> to <strong>released</strong>.</p>
                                </SimpleSpecItem>
                            </SubSpecList>
                        </DetailSpecItem>
                    </SpecList>
                }/>
                <SectionDerivering>
                    <SectionOverridingDefaults>{`
import { ActionControl } from '@nodestrap/action-control'

export default function CoolButton(props) {
    return (
        <ActionControl
            {...props} // preserves other properties
            
            semanticRole={props.semanticRole ?? 'button'} // override default value of semanticRole to 'button'
            semantictag={props.semanticTag ?? 'button'}   // override default value of semanticTag  to 'button'
            
            theme={props.theme ?? 'primary'} // override default value of theme to 'primary'
            mild={props.mild ?? false}       // override default value of mild  to false
            
            onClick={(e) => {
                console.log('hello world!');
            }}
        >
            Click me!
        </ActionControl>
    );
}
                    `}</SectionOverridingDefaults>

                    <SectionCustomizingCss specList={
                        <SpecList>
                            <DetailSpecItem code='usesActionControlLayout()'>
                                <p>
                                    Returns a <code>StyleCollection</code> object represents a complete <LinkActionControlPage /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                                </p>
                            </DetailSpecItem>
                            <DetailSpecItem code='usesActionControlVariants()'>
                                <p>
                                    Returns a <code>StyleCollection</code> object represents the <strong>variants</strong> of <LinkActionControlPage /> such as:<br />
                                    <code>SizeVariant</code> and <strong>all variants</strong> inherited from <LinkControlPage />.
                                </p>
                            </DetailSpecItem>
                            <DetailSpecItem code='usesActionControlStates()'>
                                <p>
                                    Returns a <code>StyleCollection</code> object represents the <strong>states</strong> of <LinkActionControlPage /> such as:<br />
                                    <strong>press</strong>/<strong>release</strong>, and <strong>all states</strong> inherited from <LinkControlPage />.
                                </p>
                            </DetailSpecItem>


                            <DetailSpecItem code='isPressed(styles)'>
                                <p>
                                    Applies the specified <code>styles</code> when current component is <strong>fully pressed</strong>.
                                </p>
                            </DetailSpecItem>
                            <DetailSpecItem code='isPressing(styles)'>
                                <p>
                                    Applies the specified <code>styles</code> when current component is <strong>being pressed</strong>.
                                </p>
                            </DetailSpecItem>
                            <DetailSpecItem code='isReleasing(styles)'>
                                <p>
                                    Applies the specified <code>styles</code> when current component is <strong>being released</strong>.
                                </p>
                            </DetailSpecItem>
                            <DetailSpecItem code='isReleased(styles)'>
                                <p>
                                    Applies the specified <code>styles</code> when current component is <strong>fully released</strong>.
                                </p>
                            </DetailSpecItem>
                            <DetailSpecItem code='isPress(styles)'>
                                <p>
                                    Applies the specified <code>styles</code> when current component is <strong>being/fully pressed</strong>.
                                </p>
                            </DetailSpecItem>
                            <DetailSpecItem code='isRelease(styles)'>
                                <p>
                                    Applies the specified <code>styles</code> when current component is <strong>being/fully released</strong>.
                                </p>
                            </DetailSpecItem>
                            <DetailSpecItem code='isPressReleasing(styles)'>
                                <p>
                                    Applies the specified <code>styles</code> when current component is <strong>being/fully pressed</strong> or <strong>being released</strong>.
                                </p>
                            </DetailSpecItem>
                        </SpecList>
                    }>{`
import { mainComposition, layout, imports, variants, states, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { ActionControl, usesActionControlLayout, usesActionControlVariants, usesActionControlStates, isPress } from '@nodestrap/action-control'

const useCoolButtonSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // import some stuff from <ActionControl>:
            usesActionControlLayout(),
            usesActionControlVariants(),
            usesActionControlStates(),
        ]),
        layout({
            // then overwrite with your style:
            display : 'inline-block',
            margin  : '1em',
            /* ... */
        }),
        variants([
            rule('.big', [
                layout({
                    // define the style at 'big' variant:
                    fontSize: 'xx-large',
                    /* ... */
                }),
            ]),
            rule('.dark', [
                layout({
                    // define the style at 'dark' variant:
                    background-color : 'black',
                    color            : 'white',
                    /* ... */
                }),
            ]),
            /* ... */
        ]),
        states([
            isPress([
                layout({
                    // define the style at 'being/fully pressed' state:
                    background-color: 'red',
                    /* ... */
                }),
            ]),
            /* ... */
        ]),
    ]),
]);

export default function CoolButton(props) {
    const sheet = useCoolButtonSheet();
    return (
        <ActionControl {...props} mainClass={sheet.main}>
            { props.children }
        </ActionControl>
    )
}
                    `}</SectionCustomizingCss>
                </SectionDerivering>
            </Main>
        </ComponentInfoProvider>
    )
}

export default Page
