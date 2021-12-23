import React, {  } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { Main } from '../../../components/Main'
import { Section, Section2 } from '../../../components/Section'
import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'
import { TypeScriptCode } from '../../../components/Code'
import { Warning } from '../../../components/Info'

import { SectionInheritedProps, LinkIndicatorPage, LinkBasicPage, LinkIconPage, ParagraphGlobalConfig, ParagraphDerivering, SectionOverridingDefaults, SectionCustomizingCss } from '../../../components/common-contents'

import { DemoPanel, ResetButtonEx } from '../../../components/DemoPanel'
import { Indicator } from '@nodestrap/indicator'
import { IndicatorOptions, useIndicatorStates } from '../../../components/DemoPanel@Indicator'



const Page: NextPage = () => {
    const states = useIndicatorStates();
    
    
    
    return (
        <>
            <Head>
                <title>Indicator Component</title>
                <meta name="description" content="Using <Indicator> component" />
            </Head>

            <Main>
                <Section>
                    <article>
                        <h1>Indicator Component</h1>
                        <p>
                            <LinkIndicatorPage /> is an <strong>abstract</strong> component for <strong>displaying indications</strong> such as <strong>enabled</strong>/<strong>disabled</strong> and <strong>active</strong>/<strong>passive</strong>.
                        </p>
                        <p>
                            In <em>most cases</em>, you should <strong>not use </strong>this component <strong>directly</strong>, instead create your own component by derivering <LinkIndicatorPage />.
                        </p>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Demonstration</h2>
                        <p>
                            Change some controls below!
                            You&apos;ll see the <LinkIndicatorPage /> is customizable.
                        </p>
                        <DemoPanel>
                            <span>Preview</span>
                            <Indicator
                                enabled={states.enabled[0]}
                                active={states.active[0]}
                                
                                size={states.size[0]}
                                nude={states.nude[0]}
                                theme={states.theme[0]}
                                gradient={states.gradient[0]}
                                outlined={states.outlined[0]}
                                mild={states.mild[0]}
                            >
                                hello world
                            </Indicator>

                            <hr />
                            
                            <IndicatorOptions states={states} />
                            
                            <ResetButtonEx states={states} />

                            <span>Code</span>
                            <TypeScriptCode>{`
<Indicator
    enabled={${states.enabled[0]}}
    active={${states.active[0]}}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    hello world
</Indicator>
                            `}</TypeScriptCode>
                        </DemoPanel>
                    </article>
                </Section>
                <SectionInheritedProps component={<LinkIndicatorPage />} base={<LinkBasicPage />} />
                <Section>
                    <article>
                        <h2>State Properties</h2>
                        <p>
                            There&apos;re some properties for <strong>modifying the states</strong> such as <code>enabled</code>, <code>active</code> and <code>readOnly</code>.
                        </p>
                        <Section2>
                            <h3><code>enabled</code> Property</h3>
                            <p>
                                An <code>enabled</code> property influence the component <strong>functionality</strong>.
                            </p>
                            <p>
                                The options are:
                            </p>
                            <SpecList>
                                <DetailSpecItem code='true'>
                                    <p>
                                        At this state, all functionality are <strong>preserved</strong>.
                                        You can fully interact to this component.
                                    </p>
                                    <p>
                                        This is the <strong>default</strong> state if the <code>enabled</code> value is not specified.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='false'>
                                    <p>
                                        At this state, all/almost all functionality are <strong>disabled</strong>.
                                        You cannot interact to this component.
                                    </p>
                                </DetailSpecItem>
                            </SpecList>
                        </Section2>
                        <Section2>
                            <h3><code>active</code> Property</h3>
                            <p>
                                An <code>active</code> property indicates the component is currently <strong>selected</strong> or <strong>on state</strong>.
                            </p>
                            <p>
                                The options are:
                            </p>
                            <SpecList>
                                <DetailSpecItem code='true'>
                                    <p>
                                        At this state, the component is currently <strong>selected</strong> or <strong>on state</strong>.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='false'>
                                    <p>
                                        At this state, the component is currently in <strong>normal state</strong>.
                                    </p>
                                    <p>
                                        This is the <strong>default</strong> state if the <code>active</code> value is not specified.
                                    </p>
                                </DetailSpecItem>
                            </SpecList>
                        </Section2>
                        <Section2>
                            <h3><code>readOnly</code> Property</h3>
                            <p>
                                A <code>readOnly</code> property influence the component <strong>editing functionality</strong>.
                                Similar to <code>disabled</code> but only disabling the editing functionality.
                            </p>
                            <p>
                                The options are:
                            </p>
                            <SpecList>
                                <DetailSpecItem code='true'>
                                    <p>
                                        At this state, the editing functionality is <strong>disabled</strong>.
                                        You cannot  make any changes to this component.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='false'>
                                    <p>
                                        At this state, all editing functionality are <strong>preserved</strong>.
                                        You can make any changes to this component.
                                    </p>
                                    <p>
                                        This is the <strong>default</strong> state if the <code>readOnly</code> value is not specified.
                                    </p>
                                </DetailSpecItem>
                            </SpecList>
                            <p></p>
                            <Warning>
                                <p>
                                    By default, there is <strong>no visual appearance</strong> for indicating <code>readOnly</code> state.
                                </p>
                                <p>
                                    You should add an <LinkIconPage /> or another visual appearance for indicating <code>readOnly</code> state.
                                </p>
                            </Warning>
                        </Section2>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Customizing Indicator Component</h2>
                        <ParagraphGlobalConfig component={<LinkIndicatorPage />} packageName='@nodestrap/indicator' />
                        <SpecList>
                            <DetailSpecItem title='Animations'>
                                <SubSpecList>
                                    <SimpleSpecItem>
                                        <code>filterDisable</code>
                                        <p>A <code>filter</code> to apply when <code>{`enabled={false}`}</code>.</p>
                                    </SimpleSpecItem>
                                    <SimpleSpecItem>
                                        <code>filterActive</code>
                                        <p>A <code>filter</code> to apply when <code>{`active={true}`}</code>.</p>
                                    </SimpleSpecItem>
                                    <SimpleSpecItem>
                                        <code>@keyframes enable</code>
                                        <p>A keyframes name represents <em>enabling keyframes</em>, transition from <code>{`enabled={false}`}</code> to <code>{`enabled={true}`}</code>.</p>
                                    </SimpleSpecItem>
                                    <SimpleSpecItem>
                                        <code>@keyframes disable</code>
                                        <p>A keyframes name represents <em>disabling keyframes</em>, transition from <code>{`enabled={true}`}</code> to <code>{`enabled={false}`}</code>.</p>
                                    </SimpleSpecItem>
                                    <SimpleSpecItem>
                                        <code>@keyframes active</code>
                                        <p>A keyframes name represents <em>activating keyframes</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                                    </SimpleSpecItem>
                                    <SimpleSpecItem>
                                        <code>@keyframes passive</code>
                                        <p>A keyframes name represents <em>deactivating keyframes</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                                    </SimpleSpecItem>
                                    <SimpleSpecItem>
                                        <code>animEnable</code>
                                        <p>An animation represents <em>enabling animation</em>, transition from <code>{`enabled={false}`}</code> to <code>{`enabled={true}`}</code>.</p>
                                    </SimpleSpecItem>
                                    <SimpleSpecItem>
                                        <code>animDisable</code>
                                        <p>An animation represents <em>disabling animation</em>, transition from <code>{`enabled={true}`}</code> to <code>{`enabled={false}`}</code>.</p>
                                    </SimpleSpecItem>
                                    <SimpleSpecItem>
                                        <code>animActive</code>
                                        <p>An animation represents <em>activating animation</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                                    </SimpleSpecItem>
                                    <SimpleSpecItem>
                                        <code>animPassive</code>
                                        <p>An animation represents <em>deactivating animation</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                                    </SimpleSpecItem>
                                </SubSpecList>
                            </DetailSpecItem>
                        </SpecList>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Derivering Indicator Component</h2>
                        <ParagraphDerivering component={<LinkIndicatorPage />} />
                        
                        <SectionOverridingDefaults component={<LinkIndicatorPage />}>{`
import { Indicator } from '@nodestrap/indicator'

export default function OnOffIndicator(props) {
    return (
        <Indicator
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'status'} // override default value of semanticRole to 'status'
            semantictag={props.semanticTag ?? 'span'}     // override default value of semanticTag  to 'span'
            
            theme={props.theme ?? 'danger'} // override default value of theme to 'danger'
            mild={props.mild ?? true}       // override default value of mild  to true
        >
            { props.active ? 'ON' : 'OFF' }
        </Indicator>
    );
}
                        `}</SectionOverridingDefaults>

                        <SectionCustomizingCss component={<LinkIndicatorPage />} specList={
                            <SpecList>
                                <DetailSpecItem code='usesIndicatorLayout()'>
                                    <p>
                                        Returns a <code>StyleCollection</code> object represents a complete <LinkIndicatorPage /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='usesIndicatorVariants()'>
                                    <p>
                                        Returns a <code>StyleCollection</code> object represents the <strong>variants</strong> of <LinkIndicatorPage /> such as:<br />
                                        <code>SizeVariant</code> and <strong>all variants</strong> inherited from <LinkBasicPage />.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='usesIndicatorStates()'>
                                    <p>
                                        Returns a <code>StyleCollection</code> object represents the <strong>states</strong> of <LinkIndicatorPage /> such as:<br />
                                        <strong>enabled</strong>/<strong>disabled</strong> and <strong>active</strong>/<strong>passive</strong>.
                                    </p>
                                </DetailSpecItem>


                                <DetailSpecItem code='isEnabled(styles)'>
                                    <p>
                                        Applies the specified <code>styles</code> when current component is <strong>fully enabled</strong>.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='isEnabling(styles)'>
                                    <p>
                                        Applies the specified <code>styles</code> when current component is <strong>being enabled</strong>.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='isDisabling(styles)'>
                                    <p>
                                        Applies the specified <code>styles</code> when current component is <strong>being disabled</strong>.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='isDisabled(styles)'>
                                    <p>
                                        Applies the specified <code>styles</code> when current component is <strong>fully disabled</strong>.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='isEnable(styles)'>
                                    <p>
                                        Applies the specified <code>styles</code> when current component is <strong>being/fully enabled</strong>.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='isDisable(styles)'>
                                    <p>
                                        Applies the specified <code>styles</code> when current component is <strong>being/fully disabled</strong>.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='isEnablingDisable(styles)'>
                                    <p>
                                        Applies the specified <code>styles</code> when current component is <strong>being enabled</strong> or <strong>being/fully disabled</strong>.
                                    </p>
                                </DetailSpecItem>


                                <DetailSpecItem code='isActived(styles)'>
                                    <p>
                                        Applies the specified <code>styles</code> when current component is <strong>fully activated</strong>.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='isActivating(styles)'>
                                    <p>
                                        Applies the specified <code>styles</code> when current component is <strong>being activated</strong>.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='isPassivating(styles)'>
                                    <p>
                                        Applies the specified <code>styles</code> when current component is <strong>being deactivated</strong>.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='isPassived(styles)'>
                                    <p>
                                        Applies the specified <code>styles</code> when current component is <strong>fully deactivated</strong>.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='isActive(styles)'>
                                    <p>
                                        Applies the specified <code>styles</code> when current component is <strong>being/fully activated</strong>.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='isPassive(styles)'>
                                    <p>
                                        Applies the specified <code>styles</code> when current component is <strong>being/fully deactivated</strong>.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='isActivePassivating(styles)'>
                                    <p>
                                        Applies the specified <code>styles</code> when current component is <strong>being/fully activated</strong> or <strong>being deactivated</strong>.
                                    </p>
                                </DetailSpecItem>
                            </SpecList>
                        }>{`
import { mainComposition, layout, imports, variants, states, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { Indicator, usesIndicatorLayout, usesIndicatorVariants, usesIndicatorStates, isDisable, isActive } from '@nodestrap/indicator'

const useCustomComponentSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // import some stuff from <Indicator>:
            usesIndicatorLayout(),
            usesIndicatorVariants(),
            usesIndicatorStates(),
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
            isDisable([
                layout({
                    // define the style at 'being/fully disabled' state:
                    background-color: 'gray',
                    /* ... */
                }),
            ]),
            isActive([
                layout({
                    // define the style at 'being/fully active' state:
                    background-color: 'red',
                    /* ... */
                }),
            ]),
            /* ... */
        ]),
    ]),
]);

export default function CustomComponent(props) {
    const sheet = useCustomComponentSheet();
    return (
        <Indicator {...props} mainClass={sheet.main}>
            { props.children }
        </Indicator>
    )
}
                        `}</SectionCustomizingCss>
                    </article>
                </Section>
            </Main>
        </>
    )
}

export default Page
