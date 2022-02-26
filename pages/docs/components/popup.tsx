import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { TransparentPreview } from '../../../components/TransparentPreview'
import { SectionInheritedProps, LinkPopupPage, LinkIndicatorPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'

import Basic from '@nodestrap/basic'
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
} from '../../../components/common@Indicator'
import {
    SectionPropertyEnabled,
    SectionPropertyActive,
} from '../../../components/common@Popup'

import loadable from '@loadable/component'
const DemoPopupLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Popup' */'../../../components/DemoPanel@Popup'))



const PopupPreview = () => {
    const [popupRef, isActive] = useFlipFlop({ defaultState: true });
    
    
    
    return (
        <Basic
            elmRef={popupRef}
            theme='secondary'
            mild={true}
            style={{
                display        : 'flex',
                flexDirection  : 'column',
                justifyContent : 'center',
                alignItems     : 'normal',
                padding        : '2rem',
                boxSizing      : 'content-box',
                minHeight      : '5rem',
            }}
        >
            <Popup
                active={isActive}
                theme='warning'
            >
                <p style={{ textAlign: 'center' }}>
                    Hopla!
                </p>
                <p style={{ textAlign: 'center' }}>
                    Ho... ho... hoo...
                </p>
            </Popup>
        </Basic>
    );
}



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/popup' component={<LinkPopupPage />} bases={<LinkIndicatorPage />}>
            <Head>
                <title>&lt;Popup&gt; Component</title>
                <meta name="description" content="Using <Popup> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a presentation component for dynamically <strong>showing</strong> &amp; <strong>hiding</strong> a content.
                </p>
                <p>
                    Here the preview:
                </p>
                <PopupPreview />
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
                        ).join('')}
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
                        ).join('')}
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
                        ).join('')}
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
                        ).join('')}
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
                                <code>filterActive</code>
                                <p>A <code>filter</code> to apply when <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes active</code>
                                <p>A keyframes name represents <em>showing keyframes</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes passive</code>
                                <p>A keyframes name represents <em>hiding keyframes</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animActive</code>
                                <p>An animation represents <em>showing animation</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animPassive</code>
                                <p>An animation represents <em>hiding animation</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Popup } from '@nodestrap/popup'

export default function SurpriseMessage(props) {
    return (
        <Popup
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'status'} // override default value of semanticRole to 'status'
            semantictag={props.semanticTag ?? 'span'}     // override default value of semanticTag  to 'span'
            
            theme={props.theme ?? 'warning'} // override default value of theme to 'warning'
            mild={props.mild ?? false}       // override default value of mild  to false
        >
            { props.children }
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
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, states, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { isActive } from '@nodestrap/indicator'
import { Popup, usesPopupLayout, usesPopupVariants, usesPopupStates } from '@nodestrap/popup'


const useSurpriseMessageSheet = createUseSheet(() => [
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

export default function SurpriseMessage(props) {
    const sheet = useSurpriseMessageSheet();
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
