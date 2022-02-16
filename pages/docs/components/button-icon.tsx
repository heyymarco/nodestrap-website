import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, DetailSpecItem, SubSpecList, SimpleSpecItem } from '../../../components/SpecList'

import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkButtonIconPage, LinkButtonPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, SectionSubProperty, LinkReactRouterLinkPage, LinkOriReactRouterLinkPage, LinkOriNextJsLinkPage, SectionCustomizingParent, LinkIconPage, SectionCustomizing } from '../../../components/common-contents'
import { Warning } from '../../../components/Info'

import { TypeScriptCode } from '../../../components/Code'
import { Accordion, AccordionItem } from '@nodestrap/accordion'

import loadable from '@loadable/component'
import { Detail } from '../../../components/Detail'
const DemoButtonIconLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@ButtonIcon' */'../../../components/DemoPanel@ButtonIcon'))
const ButtonIconGalleryLazy = loadable(() => import(/* webpackChunkName: 'Gallery@ButtonIcon' */'../../../components/Gallery@ButtonIcon'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/button-icon' component={<LinkButtonIconPage />} bases={[<LinkButtonPage key={0} />, <LinkIconPage key={1} />]}>
            <Head>
                <title>ButtonIcon Component</title>
                <meta name="description" content="Using <ButtonIcon> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a composite component of <CurrentBaseComponents />.
                </p>
                <p>
                    The functionality is exactly the same as <LinkButtonPage /> but with an additional <LinkIconPage /> for better accessibility to the user eyes.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoButtonIconLazy fallback={<BusyBar />} />
            </SectionDemo>
            <Section title='Predefined Icon Sets'>
                <Detail
                    label='Show icon gallery'
                    
                    theme='primary'
                    mild={true}
                    lazy={true}
                    
                    detailStyle='content'
                >
                    <ButtonIconGalleryLazy fallback={<BusyBar />} />
                </Detail>
            </Section>
            <SectionInheritedProps />
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Foregrounds, Backgrounds &amp; Borders'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>borderRadius</code>
                                <p>The default border-radius.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderRadiusXs</code>
                                <p>The border-radius when <code>{`size='xs'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderRadiusSm</code>
                                <p>The border-radius when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderRadiusLg</code>
                                <p>The border-radius when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderRadiusXl</code>
                                <p>The border-radius when <code>{`size='xl'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Spacings'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>paddingInline</code>
                                <p>The default inner spacing on the left &amp; right.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingBlock</code>
                                <p>The default inner spacing on the top &amp; bottom.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingInlineXs</code>
                                <p>The inner spacing on the left &amp; right when <code>{`size='xs'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingBlockXs</code>
                                <p>The inner spacing on the top &amp; bottom when <code>{`size='xs'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingInlineSm</code>
                                <p>The inner spacing on the left &amp; right when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingBlockSm</code>
                                <p>The inner spacing on the top &amp; bottom when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingInlineLg</code>
                                <p>The inner spacing on the left &amp; right when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingBlockLg</code>
                                <p>The inner spacing on the top &amp; bottom when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingInlineXl</code>
                                <p>The inner spacing on the left &amp; right when <code>{`size='xl'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingBlockXl</code>
                                <p>The inner spacing on the top &amp; bottom when <code>{`size='xl'`}</code>.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>gapInline</code>
                                <p>The default horizontal spacing between <CurrentComponent />&apos;s items (children).</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>gapBlock</code>
                                <p>The default vertical spacing between <CurrentComponent />&apos;s items (children).</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>gapInlineXs</code>
                                <p>The horizontal spacing between <CurrentComponent />&apos;s items (children) when <code>{`size='xs'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>gapBlockXs</code>
                                <p>The vertical spacing between <CurrentComponent />&apos;s items (children) when <code>{`size='xs'`}</code>.</p>
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
                            <SimpleSpecItem>
                                <code>gapInlineXl</code>
                                <p>The horizontal spacing between <CurrentComponent />&apos;s items (children) when <code>{`size='xl'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>gapBlockXl</code>
                                <p>The vertical spacing between <CurrentComponent />&apos;s items (children) when <code>{`size='xl'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Typos'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>fontSize</code>
                                <p>The default text size.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fontSizeXs</code>
                                <p>The text size when <code>{`size='xs'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fontSizeSm</code>
                                <p>The text size when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fontSizeLg</code>
                                <p>The text size when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fontSizeXl</code>
                                <p>The text size when <code>{`size='xl'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
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
