import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { SectionInheritedProps, LinkTogglerMenuButtonPage, LinkCheckPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, LinkNavbarPage } from '../../../components/common-contents'

import loadable from '@loadable/component'
const DemoTogglerMenuButtonLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@TogglerMenuButton' */'../../../components/DemoPanel@TogglerMenuButton'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/toggler-menu-button' component={<LinkTogglerMenuButtonPage />} bases={<LinkCheckPage />}>
            <Head>
                <title>TogglerMenuButton Component</title>
                <meta name="description" content="Using <TogglerMenuButton> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a toggleable menu button designed for <LinkNavbarPage />.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoTogglerMenuButtonLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Animations'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>svgTopTransfIn</code>
                                <p>A <code>transform</code> to apply to <em>top line of svg</em> when <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>svgMidTransfIn</code>
                                <p>A <code>transform</code> to apply to <em>middle line of svg</em> when <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>svgBtmTransfIn</code>
                                <p>A <code>transform</code> to apply to <em>bottom line of svg</em> when <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>svgTopTransfOut</code>
                                <p>A <code>transform</code> to apply to <em>top line of svg</em> when <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>svgMidTransfOut</code>
                                <p>A <code>transform</code> to apply to <em>middle line of svg</em> when <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>svgBtmTransfOut</code>
                                <p>A <code>transform</code> to apply to <em>bottom line of svg</em> when <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            
                            
                            <SimpleSpecItem>
                                <code>@keyframes svgTopIn</code>
                                <p>A keyframes name represents <em>toggling on keyframes</em> to <em>top line of svg</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes svgMidIn</code>
                                <p>A keyframes name represents <em>toggling on keyframes</em> to <em>middle line of svg</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes svgBtmIn</code>
                                <p>A keyframes name represents <em>toggling on keyframes</em> to <em>bottom line of svg</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>@keyframes svgTopOut</code>
                                <p>A keyframes name represents <em>toggling off keyframes</em> to <em>top line of svg</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes svgMidOut</code>
                                <p>A keyframes name represents <em>toggling off keyframes</em> to <em>middle line of svg</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes svgBtmOut</code>
                                <p>A keyframes name represents <em>toggling off keyframes</em> to <em>bottom line of svg</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            
                            
                            <SimpleSpecItem>
                                <code>svgTopAnimIn</code>
                                <p>An animation represents <em>toggling on animation</em> to <em>top line of svg</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>svgMidAnimIn</code>
                                <p>An animation represents <em>toggling on animation</em> to <em>middle line of svg</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>svgBtmAnimIn</code>
                                <p>An animation represents <em>toggling on animation</em> to <em>bottom line of svg</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>svgTopAnimOut</code>
                                <p>An animation represents <em>toggling off animation</em> to <em>top line of svg</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>svgMidAnimOut</code>
                                <p>An animation represents <em>toggling off animation</em> to <em>middle line of svg</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>svgBtmAnimOut</code>
                                <p>An animation represents <em>toggling off animation</em> to <em>bottom line of svg</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>animActive</code>
                                <p>An animation represents <em>toggling on animation</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animPassive</code>
                                <p>An animation represents <em>toggling off animation</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { TogglerMenuButton } from '@nodestrap/toggler-menu-button'

export default function CustomTogglerMenuButton(props) {
    return (
        <TogglerMenuButton
            {...props} // preserves other properties
            
            theme={props.theme ?? 'danger'}  // override default value of theme to 'danger'
            mild={props.mild ?? true}        // override default value of mild  to true
        >
            { props.children }
        </TogglerMenuButton>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesTogglerMenuButtonLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesTogglerMenuButtonVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesTogglerMenuButtonStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentComponent /> such as:<br />
                                <strong>active</strong>/<strong>passive</strong>, and <strong>all states</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, states } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { isDisable, isActive } from '@nodestrap/indicator'
import { TogglerMenuButton, usesTogglerMenuButtonLayout, usesTogglerMenuButtonVariants, usesTogglerMenuButtonStates } from '@nodestrap/toggler-menu-button'

const useCustomTogglerMenuButtonSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <TogglerMenuButton>:
            usesTogglerMenuButtonLayout(),
            usesTogglerMenuButtonVariants(),
            usesTogglerMenuButtonStates(),
        ]),
        style({
            // then overwrite with your style:
            margin  : '1em',
            /* ... */
            
            ...states([
                isDisable({
                    // define the style at 'being/fully disabled' state:
                    background-color: 'gray',
                    /* ... */
                }),
                isActive({
                    // define the style at 'being/fully active' state:
                    background-color: 'red',
                    /* ... */
                }),
                /* ... */
            ]),
            
            /* ... */
        }),
    ),
]);

export default function CustomTogglerMenuButton(props) {
    const sheet = useCustomTogglerMenuButtonSheet();
    return (
        <TogglerMenuButton {...props} mainClass={sheet.main}>
            { props.children }
        </TogglerMenuButton>
    );
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
