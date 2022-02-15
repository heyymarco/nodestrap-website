import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, DetailSpecItem, SimpleSpecItem, SubSpecList } from '../../../components/SpecList'

import { SectionInheritedProps, LinkNavButtonPage, LinkButtonPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, SectionVariants, LinkGroupPage, LinkInputPage, SeeDocumentations, LinkCheckPage, LinkRangePage, SectionSubPropertyStyle, SectionSubPropertyOrientation } from '../../../components/common-contents'

import { TypeScriptCode } from '../../../components/Code'
import { NavButton } from '@nodestrap/nav-button'

import loadable from '@loadable/component'
import { Section, SubSection } from '../../../components/Section'
const DemoNavButtonLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@NavButton' */'../../../components/DemoPanel@NavButton'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/nav-button' component={<LinkNavButtonPage />} bases={<LinkButtonPage />}>
            <Head>
                <title>NavButton Component</title>
                <meta name="description" content="Using <NavButton> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a clickable component for performing an action such as deleting, checkout, displaying menu, etc.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoNavButtonLazy fallback={<BusyBar />} />
            </SectionDemo>
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
                            <p>
                                This is the <strong>default</strong> appearance if the <code>orientation</code> value is not specified.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                } />
                <SectionSubPropertyStyle property='btnStyle' specList={
                    <SpecList>
                        <DetailSpecItem code='undefined'>
                            <p>
                                Styling the <CurrentComponent /> with <strong>default appearance</strong>.
                            </p>
                            <p>
                                This is the <strong>default</strong> appearance if the <code>btnStyle</code> value is not specified.
                            </p>
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
import { NavButton } from '@nodestrap/nav-button'

export default function CoolNavButton(props) {
    return (
        <NavButton
            {...props} // preserves other properties
            
            theme={props.theme ?? 'danger'} // override default value of theme to 'danger'
            
            orientation={props.orientation ?? 'block'} // override default value of theme to 'block'
        >
            { props.children }
        </NavButton>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss>{`
import { mainComposition, style, imports, variants, states, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { usesButtonLayout, usesButtonVariants, usesButtonStates, isPress } from '@nodestrap/button'
import { NavButton } from '@nodestrap/nav-button'

const useCoolNavButtonSheet = createUseSheet(() => [
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

export default function CoolNavButton(props) {
    const sheet = useCoolNavButtonSheet();
    return (
        <NavButton {...props} mainClass={sheet.main}>
            { props.children }
        </NavButton>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
