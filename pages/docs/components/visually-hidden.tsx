import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, DetailSpecItem } from '../../../components/SpecList'

import { SectionInheritedProps, LinkVisuallyHiddenPage, LinkElementPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionIntro, CurrentComponent } from '../../../components/common-contents'



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/visually-hidden' component={<LinkVisuallyHiddenPage />} bases={<LinkElementPage />}>
            <Head>
                <title>VisuallyHidden Component</title>
                <meta name="description" content="Using <VisuallyHidden> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a non visual component for guiding the assistive technologies (such as screen readers).
                </p>
                <p>
                    If possible, <strong>avoid using this component</strong>.<br />
                    Setting the property of <code>{`aria-label='describe something'`}</code> or <code>{`label='describe something'`}</code> is a better solution.
                    However, sometimes, if the description is a complex element (rather than just a simple string), setting up the <code>aria-label</code> or <code>label</code> is not possible.
                    So a <CurrentComponent /> exists to provide an <em>alternative solution</em>.
                </p>
            </SectionIntro>
            <SectionInheritedProps />
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { VisuallyHidden } from '@nodestrap/visually-hidden'

export default function SkipToMain(props) {
    return (
        <VisuallyHidden
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'link'} // override default value of semanticRole to 'link'
            semantictag={props.semanticTag ?? 'div'}    // override default value of semanticTag  to 'div'
        >
            { props.children ?? 'Skip to main content' }
        </VisuallyHidden>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesVisuallyHiddenLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong>.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, states, isNotFocus } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { VisuallyHidden, usesVisuallyHiddenLayout } from '@nodestrap/visually-hidden'

const useSkipToMainSheet = createUseSheet(() => [
    mainComposition(
        style({
            // define your style:
            display : 'inline-block',
            margin  : '1em',
            /* ... */
            
            // only hide the component when not in focus (but still visible for screen readers):
            ...states([
                isNotFocus({
                    ...imports([
                        // import some stuff from <VisuallyHidden>:
                        usesVisuallyHiddenLayout(),
                    ]),
                })
            ]),
            
            /* ... */
        }),
    ),
]);

export default function SkipToMain(props) {
    const sheet = useSkipToMainSheet();
    return (
        <VisuallyHidden {...props} tabIndex={0} mainClass={sheet.main}>
            { props.children }
        </VisuallyHidden>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
