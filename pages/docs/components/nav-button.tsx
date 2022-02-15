import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, DetailSpecItem } from '../../../components/SpecList'

import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkNavButtonPage, LinkButtonPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, SectionSubProperty, LinkReactRouterLinkPage, LinkOriReactRouterLinkPage, LinkOriNextJsLinkPage, SectionCustomizingParent } from '../../../components/common-contents'

import { TypeScriptCode } from '../../../components/Code'
import { Accordion, AccordionItem } from '@nodestrap/accordion'

import loadable from '@loadable/component'
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
                    <CurrentComponent /> is a special <CurrentBaseComponents /> for page navigation.
                    It automatically handle the <code>active</code> property based on <strong>current page url</strong> and the <strong>destination url</strong>.
                    So the <CurrentComponent /> is <strong>highlighted</strong> if the current page url <strong>matches</strong> the destination url.
                </p>
                <p>
                    If you assign <code>active</code> property other than <code>undefined</code>, the <CurrentComponent /> become the equivalent as <CurrentBaseComponents />, because you <strong>take over</strong> the <code>active</code> property.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoNavButtonLazy fallback={<BusyBar />} />
            </SectionDemo>
            <Section title='Navigation Properties'>
                <p>
                    In order for <CurrentComponent /> to <strong>work properly</strong> as navigation indicator,
                    the following properties must be <strong>configured correctly</strong>, they are:
                </p>
                <SectionSubProperty property={<>
                    <code>to</code> / <code>href</code> property of <code>{`<Link>`}</code> Component
                </>}>
                    <p>
                        In this context, we also call <code>to</code> / <code>href</code> property as <strong>destination url</strong>.
                        So in <em>another section</em>, the <strong>destination url</strong> is referenced here.
                    </p>
                    <Accordion theme='primary'>
                        <AccordionItem tag='h4' label={<>
                            For <strong>{`React Router`}</strong> User
                        </>}>
                            <p>
                                Inside the <CurrentComponent /> tag, place a <LinkReactRouterLinkPage /> and then assign the <code>{`to='/destination/path'`}</code>.
                            </p>
                            <p>
                                Note: the <LinkReactRouterLinkPage /> is a React Router&apos;s <LinkOriReactRouterLinkPage /> compatible designed for working inside <CurrentComponent />.
                                It has the <strong>same properties</strong> as the <strong>original</strong> one, with some additional tweak.
                                You can <strong>rename</strong> it to <code>{`ReactRouterLink as Link`}</code> to make it more familiar for you.
                            </p>
                            <p>
                                Example:
                            </p>
                            <TypeScriptCode>{`
/* ... */
import { NavButton } from '@nodestrap/nav-button'

// import { Link } from 'react-router-dom'
import { ReactRouterLink as Link } from '@nodestrap/react-router-link'
/* ... */

/* ... */

<NavButton caseSensitive={false} end={false}>
    <Link to='/destination/path'>
        Show the page
    </Link>
</NavButton>
                            `}</TypeScriptCode>
                            <p>
                                Note: You should place the <LinkReactRouterLinkPage /> <strong>inside</strong> the <CurrentComponent />, <strong>not outside</strong>.
                                The <CurrentComponent /> will <strong>detect</strong> the special child, then make a special stuff, and then automatically swap the hierarchy between <CurrentComponent /> and <LinkReactRouterLinkPage />.
                            </p>
                        </AccordionItem>
                        <AccordionItem tag='h4' label={<>
                            For <strong>{`NextJS`}</strong> User
                        </>}>
                            <p>
                                Inside the <CurrentComponent /> tag, place a NextJS&apos;s <LinkOriNextJsLinkPage /> and then assign the <code>{`href='/destination/path'`}</code>.
                            </p>
                            <p>
                                Example:
                            </p>
                            <TypeScriptCode>{`
/* ... */
import { NavButton } from '@nodestrap/nav-button'

import Link from 'next/link'
/* ... */

/* ... */

<NavButton caseSensitive={false} end={false}>
    <Link href='/destination/path'>
        Show the page
    </Link>
</NavButton>
                            `}</TypeScriptCode>
                            <p>
                                Note: You should place the <LinkOriNextJsLinkPage /> <strong>inside</strong> the <CurrentComponent />, <strong>not outside</strong>.
                                The <CurrentComponent /> will <strong>detect</strong> the special child, then make a special stuff, and then automatically swap the hierarchy between <CurrentComponent /> and <LinkOriNextJsLinkPage />.
                            </p>
                        </AccordionItem>
                        <AccordionItem tag='h4' label={<>
                            For <strong>{`GatsbyJs`}</strong> User
                        </>}>
                            <p>
                                Coming soon! We&apos;re still working to support GatsbyJs.
                            </p>
                        </AccordionItem>
                        <AccordionItem tag='h4' label={<>
                            For <strong>{`React Remix`}</strong> User
                        </>}>
                            <p>
                                Coming soon! We&apos;re still working to support GatsbyJs.
                            </p>
                        </AccordionItem>
                    </Accordion>
                </SectionSubProperty>
                <SectionSubProperty property='caseSensitive' specList={
                    <SpecList>
                        <DetailSpecItem code='false'>
                            <p>
                                The string comparison is <strong>case insensitive</strong>.
                                A lowercase character and uppercase character are treated as the <strong>same</strong> thing.
                            </p>
                            <p>
                                This is the <strong>default</strong> value if the <code>caseSensitive</code> value is not specified.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='true'>
                            <p>
                                The string comparison is <strong>case insensitive</strong>.
                                A lowercase character and uppercase character are treated as the <strong>different</strong> thing.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>
                    <p>
                        Defines how the <strong>current page url</strong> and <strong>destination url</strong> are compared by <strong>string sensivity</strong>.
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='end' specList={
                    <SpecList>
                        <DetailSpecItem code='false'>
                            <p>
                                The <strong>destination url</strong> may have one/more sub path(s).
                            </p>
                            <p>
                                If the <strong>current page url</strong> is more specific (has more sub path(s)) than <strong>destination url</strong>, it still matches.
                            </p>
                            <p>
                                This is the <strong>default</strong> value if the <code>end</code> value is not specified and the <strong>destination url</strong> is other than <strong>home page</strong> (<code>{`'/'`}</code> or <code>{`''`}</code>).
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='true'>
                            <p>
                                The <strong>destination url</strong> may not have sub path(s).
                            </p>
                            <p>
                                If the <strong>current page url</strong> is more specific (has more sub path(s)) than <strong>destination url</strong>, it doesn&apos;t match.
                            </p>
                            <p>
                                This is the <strong>default</strong> value if the <code>end</code> value is not specified and the <strong>destination url</strong> is a <strong>home page</strong> (<code>{`'/'`}</code> or <code>{`''`}</code>).
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>
                    <p>
                        Defines whether the <strong>destination url</strong> is a <strong>sub path</strong> or an <strong>exact path</strong>.
                    </p>
                </SectionSubProperty>
            </Section>
            <SectionInheritedProps />
            <SectionCustomizingParent />
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
