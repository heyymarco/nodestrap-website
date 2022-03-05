import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkRangePage, LinkEditableActionControlPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionSubProperty, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, SectionVariants, SectionSubPropertyOrientation, SectionThemingProblem, ParagraphDefaultValue } from '../../../components/common'

import loadable from '@loadable/component'
const DemoRangeLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Range' */'../../../components/DemoPanel@Range'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/range' component={<LinkRangePage />} bases={<LinkEditableActionControlPage />}>
            <Head>
                <title>&lt;Range&gt; Component</title>
                <meta name="description" content="Using <Range> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a sliding control for editing a numeric value within a specified range.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoRangeLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionThemingProblem />
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
                            <ParagraphDefaultValue property='orientation' />
                        </DetailSpecItem>
                    </SpecList>
                } />
            </SectionVariants>
            <Section title='Validation Properties'>
                <SectionSubProperty property='min'>
                    <p>
                        Defines the minimum value that is acceptable and valid for the <CurrentComponent /> component.
                    </p>
                    <p>
                        The value must be a valid numeric expression.
                        If the <code>min</code> value is not specified, or an invalid value is specified, the <CurrentComponent /> has no minimum value.
                    </p>
                    <p>
                        If the <code>min</code>&apos;s value is greater than <code>max</code>&apos;s value, sliding right/up the <CurrentComponent /> reduces its value.
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='max'>
                    <p>
                        Defines the maximum value that is acceptable and valid for the <CurrentComponent /> component.
                    </p>
                    <p>
                        The value must be a valid numeric expression.
                        If the <code>max</code> value is not specified, or an invalid value is specified, the <CurrentComponent /> has no maximum value.
                    </p>
                    <p>
                        If the <code>max</code>&apos;s value is less than <code>min</code>&apos;s value, sliding right/up the <CurrentComponent /> reduces its value.
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='step'>
                    <p>
                        Defines the <em>stepping interval</em> when the user slides the <CurrentComponent />.
                    </p>
                    <p>
                        The value must be a valid positive numeric expression.
                        If the <code>step</code> value is not specified, or an invalid value is specified, the <code>step</code> defaults to 1.
                    </p>
                </SectionSubProperty>
            </Section>
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
                    <DetailSpecItem title='Thumbs'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>thumbInlineSize</code>
                                <p>A default thumb width.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>thumbBlockSize</code>
                                <p>A default thumb height.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>thumbBorderRadius</code>
                                <p>A thumb border-radius.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>thumbPaddingInline</code>
                                <p>A thumb inner spacing on the left &amp; right.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>thumbPaddingBlock</code>
                                <p>A thumb inner spacing on the top &amp; bottom.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Range } from '@nodestrap/range'

export default function CustomRange(props) {
    return (
        <Range
            {...props} // preserves other properties
            
            theme={props.theme ?? 'primary'}  // override default value of theme to 'primary'
            mild={props.mild ?? true}         // override default value of mild  to true
            
            min={props.min ?? 50}  // override default value of min  to 50
            max={props.max ?? 100} // override default value of max  to 100
            step={props.step ?? 2} // override default value of step to 2
        />
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesRangeLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesRangeVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesRangeStates()'>
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
import { Range, usesRangeLayout, usesRangeVariants, usesRangeStates } from '@nodestrap/range'

const useCustomRangeSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Range>:
            usesRangeLayout(),
            usesRangeVariants(),
            usesRangeStates(),
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

export default function CustomRange(props) {
    const sheet = useCustomRangeSheet();
    const [isValueValid, setIsValueValid] = useState(false);
    return (
        <Range {...props} mainClass={sheet.main} isValid={isValueValid} />
    );
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
