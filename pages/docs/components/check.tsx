import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkCheckPage, LinkEditableActionControlPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionSubProperty, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, SectionVariants, SectionSubPropertyOrientation, SectionThemingProblem, SectionSubPropertyStyle, LinkButtonPage } from '../../../components/common-contents'

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
                                Almost similar to <code>{`checkStyle='btn'`}</code> but with <strong>pressed</strong> style when actived.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='switch'>
                            <p>
                                Styling the <CurrentComponent /> to look as sliding button.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                } />
            </SectionVariants>
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Accessibilities'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>cursor</code>
                                <p>A default <code>cursor</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>cursorBlock</code>
                                <p>A <code>cursor</code> when <code>{`orientation='block'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Sizes'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>minInlineSize</code>
                                <p>A default minimum width.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>minBlockSize</code>
                                <p>A default minimum height.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>minInlineSizeBlock</code>
                                <p>A minimum width when <code>{`orientation='block'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>minBlockSizeBlock</code>
                                <p>A minimum height when <code>{`orientation='block'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Tracks'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>trackInlineSize</code>
                                <p>A default track width.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>trackBlockSize</code>
                                <p>A default track height.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>trackInlineSizeBlock</code>
                                <p>A track width when <code>{`orientation='block'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>trackBlockSizeBlock</code>
                                <p>A track height when <code>{`orientation='block'`}</code>.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>trackBorderRadius</code>
                                <p>A track border-radius.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>trackPaddingInline</code>
                                <p>A track inner spacing on the left &amp; right.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>trackPaddingBlock</code>
                                <p>A track inner spacing on the top &amp; bottom.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>tracklowerFilter</code>
                                <p>A track filter on the left/bottom.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>trackupperFilter</code>
                                <p>A track filter on the right/top.</p>
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
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
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
        <Check {...props} mainClass={sheet.main} />
    );
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
