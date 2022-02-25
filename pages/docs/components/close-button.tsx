import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SectionInheritedProps, LinkCloseButtonPage, LinkButtonIconPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, SectionCustomizingParent, LinkModalCardPage, LinkModalSidePage, LinkAlertPage, SectionConfigureDependsOnIcon } from '../../../components/common'

import loadable from '@loadable/component'
const DemoCloseButtonLazy    = loadable(() => import(/* webpackChunkName: 'DemoPanel@CloseButton' */'../../../components/DemoPanel@CloseButton'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/close-button' component={<LinkCloseButtonPage />} bases={<LinkButtonIconPage />}>
            <Head>
                <title>&lt;CloseButton&gt; Component</title>
                <meta name="description" content="Using <CloseButton> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a modification of <CurrentBaseComponents /> for dismissing content like <LinkModalCardPage />, <LinkModalSidePage />, and <LinkAlertPage />.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoCloseButtonLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionConfigureDependsOnIcon />
            <SectionInheritedProps />
            <SectionCustomizingParent />
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { CloseButton } from '@nodestrap/close-button'

export default function ExitButton(props) {
    return (
        <CloseButton
            {...props} // preserves other properties
            
            theme={props.theme ?? 'danger'} // override default value of theme to 'danger'
        >
            { props.children }
        </CloseButton>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss>{`
import { mainComposition, style, imports, variants, states, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { isPress } from '@nodestrap/action-control'
import { usesButtonIconLayout, usesButtonIconVariants, usesButtonIconStates } from '@nodestrap/button-icon'
import { CloseButton } from '@nodestrap/close-button'

const useExitButtonSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <ButtonIcon>:
            usesButtonIconLayout(),
            usesButtonIconVariants(),
            usesButtonIconStates(),
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

export default function ExitButton(props) {
    const sheet = useExitButtonSheet();
    return (
        <CloseButton {...props} mainClass={sheet.main}>
            { props.children }
        </CloseButton>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
