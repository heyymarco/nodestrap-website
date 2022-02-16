import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, DetailSpecItem } from '../../../components/SpecList'

import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkButtonIconPage, LinkButtonPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, SectionSubProperty, LinkReactRouterLinkPage, LinkOriReactRouterLinkPage, LinkOriNextJsLinkPage, SectionCustomizingParent } from '../../../components/common-contents'
import { Warning } from '../../../components/Info'

import { TypeScriptCode } from '../../../components/Code'
import { Accordion, AccordionItem } from '@nodestrap/accordion'

import loadable from '@loadable/component'
const DemoButtonIconLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@ButtonIcon' */'../../../components/DemoPanel@ButtonIcon'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/button-icon' component={<LinkButtonIconPage />} bases={<LinkButtonPage />}>
            <Head>
                <title>ButtonIcon Component</title>
                <meta name="description" content="Using <ButtonIcon> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a special <CurrentBaseComponents /> for page navigation.
                    It automatically handle the <code>active</code> property based on <strong>current page url</strong> and the <strong>destination url</strong>.
                    So the <CurrentComponent /> will be automatically <strong>highlighted</strong> if the current page url <strong>matches</strong> the destination url.
                </p>
                <p>
                    Note: If you assign <code>active</code> property other than <code>undefined</code>, the <CurrentComponent /> become equivalent as <CurrentBaseComponents />, because you <strong>take over</strong> the <code>active</code> property.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoButtonIconLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionCustomizingParent />
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { ButtonIcon } from '@nodestrap/button-icon'

export default function PurchaseButton(props) {
    return (
        <ButtonIcon
            {...props} // preserves other properties
            
            icon={props.icon ?? 'credit_card'} // override default value of icon to 'credit_card'
            
            theme={props.theme ?? 'success'} // override default value of theme to 'success'
            
            orientation={props.orientation ?? 'block'} // override default value of theme to 'block'
        >
            { props.children }
        </ButtonIcon>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss>{`
import { mainComposition, style, imports, variants, states, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { isPress } from '@nodestrap/action-control'
import { usesButtonLayout, usesButtonVariants, usesButtonStates } from '@nodestrap/button'
import { ButtonIcon } from '@nodestrap/button-icon'

const usePurchaseButtonSheet = createUseSheet(() => [
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

export default function PurchaseButton(props) {
    const sheet = usePurchaseButtonSheet();
    return (
        <ButtonIcon {...props} mainClass={sheet.main}>
            { props.children }
        </ButtonIcon>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
