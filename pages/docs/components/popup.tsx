import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { TransparentPreview } from '../../../components/TransparentPreview'
import { SectionInheritedProps, LinkPopupPage, LinkIndicatorPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'

import Popup from '@nodestrap/popup'
import {
    themeNames,
    SectionPropertyTheme,
    SectionPropertySize,
    SectionPropertyNude,
    SectionPropertyGradient,
    SectionPropertyOutlined,
} from '../../../components/common@Basic'
import {
    SectionPropertyMild,
    
    SectionPropertyActive,
    SectionPropertyEnabled,
} from '../../../components/common@Indicator'

import loadable from '@loadable/component'
const DemoPopupLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Popup' */'../../../components/DemoPanel@Popup'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/popup' component={<LinkPopupPage />} bases={<LinkIndicatorPage />}>
            <Head>
                <title>&lt;Popup&gt; Component</title>
                <meta name="description" content="Using <Popup> component" />
            </Head>

            <SectionIntro>
                    <p>
                        <CurrentComponent /> is an <strong>abstract</strong> component for <strong>displaying indications</strong> such as <strong>enabled</strong>/<strong>disabled</strong> and <strong>active</strong>/<strong>passive</strong>.
                    </p>
                    <p>
                        In <em>most cases</em>, you should <strong>not use </strong>this component <strong>directly</strong>, instead create your own component by derivering <CurrentComponent />.
                    </p>
            </SectionIntro>
            <SectionDemo>
                <DemoPopupLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    {themeNames.map((themeName) => <>
                        <Popup
                            theme={themeName}
                            active={true}
                        >
                            A {'<Popup>'} with {themeName} theme
                        </Popup>
                        <p></p>
                    </>)}
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Popup
    theme='${themeName}'
    active={true}
>
    A {'<Popup>'} with ${themeName} theme
</Popup>
`
                        ).join('\n')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Popup
                        size='sm'
                        active={true}
                        theme='primary'
                    >
                        A {'<Popup>'} with smaller size
                    </Popup>
                    <p></p>
                    <Popup
                        size={undefined}
                        active={true}
                        theme='primary'
                    >
                        A {'<Popup>'} with default size
                    </Popup>
                    <p></p>
                    <Popup
                        size='lg'
                        active={true}
                        theme='primary'
                    >
                        A {'<Popup>'} with larger size
                    </Popup>
                    <p></p>
                    <TypeScriptCode>{`
<Popup
    size='sm'
    active={true}
    theme='primary'
>
    A {'<Popup>'} with smaller size
</Popup>

<Popup
    size={undefined}
    active={true}
    theme='primary'
>
    A {'<Popup>'} with default size
</Popup>

<Popup
    size='lg'
    active={true}
    theme='primary'
>
    A {'<Popup>'} with larger size
</Popup>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <Popup
                            nude={true}
                            active={true}
                            theme='warning'
                        >
                            hello world
                        </Popup>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Popup
    nude={true}
    active={true}
    theme='warning'
>
    hello world
</Popup>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    {themeNames.map((themeName) => <>
                        <Popup
                            gradient={true}
                            active={true}
                            theme={themeName}
                        >
                            hello world
                        </Popup>
                        <p></p>
                    </>)}
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Popup
    gradient={true}
    active={true}
    theme='${themeName}'
>
    hello world
</Popup>
`
                        ).join('\n')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        {themeNames.map((themeName) => <>
                            <Popup
                                outlined={true}
                                active={true}
                                theme={themeName}
                            >
                                hello world
                            </Popup>
                        </>)}
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Popup
    outlined={true}
    active={true}
    theme='${themeName}'
>
    hello world
</Popup>
`
                        ).join('\n')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    {themeNames.map((themeName) => <>
                        <Popup
                            mild={false}
                            active={true}
                            theme={themeName}
                        >
                            hello world
                        </Popup>
                        <p></p>
                    </>)}
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Popup
    mild={false}
    active={true}
    theme='${themeName}'
>
    hello world
</Popup>
`
                        ).join('\n')}
                    </TypeScriptCode>
                </SectionPropertyMild>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Popup
                        active={true}
                        theme='primary'
                    >
                        hello world
                    </Popup>
                    <p></p>
                    <TypeScriptCode>{`
<Popup
    active={true}
    theme='primary'
>
    hello world
</Popup>
                    `}</TypeScriptCode>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Popup
                        enabled={false}
                        active={true}
                        theme='primary'
                    >
                        hello world
                    </Popup>
                    <p></p>
                    <TypeScriptCode>{`
<Popup
    enabled={false}
    active={true}
    theme='primary'
>
    hello world
</Popup>
                    `}</TypeScriptCode>
                </SectionPropertyEnabled>
            </SectionStates>
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Animations'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>filterDisable</code>
                                <p>A <code>filter</code> to apply when <code>{`enabled={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>filterActive</code>
                                <p>A <code>filter</code> to apply when <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes enable</code>
                                <p>A keyframes name represents <em>enabling keyframes</em>, transition from <code>{`enabled={false}`}</code> to <code>{`enabled={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes disable</code>
                                <p>A keyframes name represents <em>disabling keyframes</em>, transition from <code>{`enabled={true}`}</code> to <code>{`enabled={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes active</code>
                                <p>A keyframes name represents <em>activating keyframes</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes passive</code>
                                <p>A keyframes name represents <em>deactivating keyframes</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animEnable</code>
                                <p>An animation represents <em>enabling animation</em>, transition from <code>{`enabled={false}`}</code> to <code>{`enabled={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animDisable</code>
                                <p>An animation represents <em>disabling animation</em>, transition from <code>{`enabled={true}`}</code> to <code>{`enabled={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animActive</code>
                                <p>An animation represents <em>activating animation</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animPassive</code>
                                <p>An animation represents <em>deactivating animation</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Popup } from '@nodestrap/popup'

export default function SurprisePopup(props) {
    return (
        <Popup
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'status'} // override default value of semanticRole to 'status'
            semantictag={props.semanticTag ?? 'span'}     // override default value of semanticTag  to 'span'
            
            theme={props.theme ?? 'danger'} // override default value of theme to 'danger'
            mild={props.mild ?? true}       // override default value of mild  to true
        >
            { props.active ? 'ON' : 'OFF' }
        </Popup>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesPopupLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesPopupVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesPopupStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentComponent /> such as:<br />
                                <strong>enabled</strong>/<strong>disabled</strong> and <strong>active</strong>/<strong>passive</strong>.
                            </p>
                        </DetailSpecItem>


                        <DetailSpecItem code='isEnabled(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>fully enabled</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isEnabling(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being enabled</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isDisabling(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being disabled</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isDisabled(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>fully disabled</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isEnable(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being/fully enabled</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isDisable(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being/fully disabled</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isEnablingDisable(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being enabled</strong> or <strong>being/fully disabled</strong>.
                            </p>
                        </DetailSpecItem>


                        <DetailSpecItem code='isActived(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>fully activated</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isActivating(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being activated</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isPassivating(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being deactivated</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isPassived(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>fully deactivated</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isActive(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being/fully activated</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isPassive(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being/fully deactivated</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isActivePassivating(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being/fully activated</strong> or <strong>being deactivated</strong>.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, states, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { Popup, usesPopupLayout, usesPopupVariants, usesPopupStates, isDisable, isActive } from '@nodestrap/popup'
import { isDisable, isActive } from '@nodestrap/indicator'


const useSurprisePopupSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Popup>:
            usesPopupLayout(),
            usesPopupVariants(),
            usesPopupStates(),
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

export default function SurprisePopup(props) {
    const sheet = useSurprisePopupSheet();
    return (
        <Popup {...props} mainClass={sheet.main}>
            { props.children }
        </Popup>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
