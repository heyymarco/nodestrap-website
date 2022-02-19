import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { SectionInheritedProps, LinkCheckPage, LinkEditableActionControlPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, SectionVariants, SectionThemingProblem, SectionSubPropertyStyle, LinkButtonPage } from '../../../components/common-contents'

import loadable from '@loadable/component'
const DemoCheckLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Check' */'../../../components/DemoPanel@Check'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/check' component={<LinkCheckPage />} bases={<LinkEditableActionControlPage />}>
            <Head>
                <title>Check Component</title>
                <meta name="description" content="Using <Check> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a toggleable control for indicating a something is selected or not.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoCheckLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionThemingProblem />
            <SectionInheritedProps />
            <SectionVariants>
                <SectionSubPropertyStyle property='checkStyle' specList={
                    <SpecList>
                        <DetailSpecItem code='undefined'>
                            <p>
                                Styling the <CurrentComponent /> with <strong>default appearance</strong>.
                            </p>
                            <p>
                                This is the <strong>default</strong> value if the <code>checkStyle</code> value is not specified.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='btn'>
                            <p>
                                Styling the <CurrentComponent /> to look similar to <LinkButtonPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='togglerBtn'>
                            <p>
                                Almost similar to <code>{`checkStyle='btn'`}</code> but with <strong>pressed</strong> style when <strong>actived</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='switch'>
                            <p>
                                Styling the <CurrentComponent /> to look as sliding switch button.
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
                                <code>spacing</code>
                                <p>The spacing between <CurrentComponent />&apos;s <strong>indicator</strong> and <strong>label</strong>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Indicators'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>img</code>
                                <p>the default <strong>check mark</strong> image.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>switchImg</code>
                                <p>the <strong>check mark</strong> image when <code>{`checkStyle='switch'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Animations'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>filterCheck</code>
                                <p>A <code>filter</code> to apply to <em>check mark indicator</em> when <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>filterClear</code>
                                <p>A <code>filter</code> to apply to <em>check mark indicator</em> when <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>transfCheck</code>
                                <p>A <code>transform</code> to apply to <em>check mark indicator</em> when <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>transfClear</code>
                                <p>A <code>transform</code> to apply to <em>check mark indicator</em> when <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes check</code>
                                <p>A keyframes name represents <em>checking keyframes</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes clear</code>
                                <p>A keyframes name represents <em>clearing keyframes</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animCheck</code>
                                <p>An animation represents <em>checking animation</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animClear</code>
                                <p>An animation represents <em>clearing animation</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>switchFilterCheck</code>
                                <p>A <code>filter</code> to apply to <em>switch mark indicator</em> when <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>switchFilterClear</code>
                                <p>A <code>filter</code> to apply to <em>switch mark indicator</em> when <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>switchTransfCheck</code>
                                <p>A <code>transform</code> to apply to <em>switch mark indicator</em> when <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>switchTransfClear</code>
                                <p>A <code>transform</code> to apply to <em>switch mark indicator</em> when <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes switchCheck</code>
                                <p>A keyframes name represents <em>switching on keyframes</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes switchClear</code>
                                <p>A keyframes name represents <em>switching off keyframes</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>switchAnimCheck</code>
                                <p>An animation represents <em>switching on animation</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>switchAnimClear</code>
                                <p>An animation represents <em>switching off animation</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Check } from '@nodestrap/check'

export default function CustomCheckbox(props) {
    return (
        <Check
            {...props} // preserves other properties
            
            theme={props.theme ?? 'danger'}  // override default value of theme to 'danger'
            mild={props.mild ?? true}        // override default value of mild  to true
        >
            { props.children }
        </Check>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesCheckLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesCheckVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code>, <code>CheckVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesCheckStates()'>
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
import { Check, usesCheckLayout, usesCheckVariants, usesCheckStates } from '@nodestrap/check'

const useCustomCheckboxSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Check>:
            usesCheckLayout(),
            usesCheckVariants(),
            usesCheckStates(),
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

export default function CustomCheckbox(props) {
    const sheet = useCustomCheckboxSheet();
    return (
        <Check {...props} mainClass={sheet.main}>
            { props.children }
        </Check>
    );
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
