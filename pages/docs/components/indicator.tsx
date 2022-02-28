import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkIndicatorPage, LinkBasicPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'

import Element from '@nodestrap/element'
import Indicator from '@nodestrap/indicator'
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
    SectionPropertyActiveNoOutlined,
    SectionPropertyActiveNoMild,
    SectionPropertyEnabled,
    SectionPropertyReadOnly,
} from '../../../components/common@Indicator'

import loadable from '@loadable/component'
const DemoIndicatorLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Indicator' */'../../../components/DemoPanel@Indicator'))



const IndicatorWithActiveOutlined = () => {
    const [indicatorRef, isActive] = useFlipFlop({ defaultState: true });
    
    
    
    return (
        <Indicator
            elmRef={indicatorRef}
            active={isActive}
            outlined={true}
            theme='primary'
        >
            An &lt;Indicator&gt; with <Element tag={isActive ? 'span' : 'del'}>Active State</Element> + Outlined Variant
        </Indicator>
    );
};
const IndicatorWithActiveMild     = () => {
    const [indicatorRef, isActive] = useFlipFlop({ defaultState: true });
    
    
    
    return (
        <Indicator
            elmRef={indicatorRef}
            active={isActive}
            mild={true}
            theme='primary'
        >
            An &lt;Indicator&gt; with <Element tag={isActive ? 'span' : 'del'}>Active State</Element> + Mild Variant
        </Indicator>
    );
};



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/indicator' component={<LinkIndicatorPage />} bases={<LinkBasicPage />}>
            <Head>
                <title>&lt;Indicator&gt; Component</title>
                <meta name="description" content="Using <Indicator> component" />
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
                <DemoIndicatorLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Indicator
                                theme={themeName}
                                key={index}
                            >
                                An {'<Indicator>'} with {themeName} theme
                            </Indicator>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Indicator
    theme='${themeName}'
>
    An {'<Indicator>'} with ${themeName} theme
</Indicator>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <Indicator
                            size='sm'
                            theme='primary'
                        >
                            An {'<Indicator>'} with smaller size
                        </Indicator>
                        <Indicator
                            size={undefined}
                            theme='primary'
                        >
                            An {'<Indicator>'} with default size
                        </Indicator>
                        <Indicator
                            size='lg'
                            theme='primary'
                        >
                            An {'<Indicator>'} with larger size
                        </Indicator>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Indicator
    size='sm'
    theme='primary'
>
    An {'<Indicator>'} with smaller size
</Indicator>

<Indicator
    size={undefined}
    theme='primary'
>
    An {'<Indicator>'} with default size
</Indicator>

<Indicator
    size='lg'
    theme='primary'
>
    An {'<Indicator>'} with larger size
</Indicator>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <Indicator
                            nude={true}
                            theme='warning'
                        >
                            hello world
                        </Indicator>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Indicator
    nude={true}
    theme='warning'
>
    hello world
</Indicator>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Indicator
                                gradient={true}
                                theme={themeName}
                                key={index}
                            >
                                hello world
                            </Indicator>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Indicator
    gradient={true}
    theme='${themeName}'
>
    hello world
</Indicator>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        {themeNames.map((themeName, index) =>
                            <Indicator
                                outlined={true}
                                theme={themeName}
                                key={index}
                            >
                                hello world
                            </Indicator>
                        )}
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Indicator
    outlined={true}
    theme='${themeName}'
>
    hello world
</Indicator>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Indicator
                                mild={false}
                                theme={themeName}
                                key={index}
                            >
                                hello world
                            </Indicator>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Indicator
    mild={false}
    theme='${themeName}'
>
    hello world
</Indicator>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview>
                        <Indicator
                            active={true}
                            theme='primary'
                        >
                            hello world
                        </Indicator>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Indicator
    active={true}
    theme='primary'
>
    hello world
</Indicator>
                    `}</TypeScriptCode>
                    <SectionPropertyActiveNoOutlined>
                        <TransparentPreview>
                            <IndicatorWithActiveOutlined />
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Indicator
    active={true}
    outlined={true}
    theme='primary'
>
    hello world
</Indicator>
                        `}</TypeScriptCode>
                    </SectionPropertyActiveNoOutlined>
                    <SectionPropertyActiveNoMild>
                        <Preview>
                            <IndicatorWithActiveMild />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Indicator
    active={true}
    mild={true}
    theme='primary'
>
    hello world
</Indicator>
                        `}</TypeScriptCode>
                    </SectionPropertyActiveNoMild>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview>
                        <Indicator
                            enabled={false}
                            theme='primary'
                        >
                            hello world
                        </Indicator>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Indicator
    enabled={false}
    theme='primary'
>
    hello world
</Indicator>
                    `}</TypeScriptCode>
                </SectionPropertyEnabled>
                <SectionPropertyReadOnly />
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
import { Indicator } from '@nodestrap/indicator'

export default function OnOffIndicator(props) {
    return (
        <Indicator
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'status'} // override default value of semanticRole to 'status'
            semantictag={props.semanticTag ?? 'span'}     // override default value of semanticTag  to 'span'
            
            theme={props.theme ?? 'danger'} // override default value of theme to 'danger'
            mild={props.mild ?? true}       // override default value of mild  to true
        >
            { props.active ? 'ON' : 'OFF' }
        </Indicator>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesIndicatorLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesIndicatorVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesIndicatorStates()'>
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
import { Indicator, usesIndicatorLayout, usesIndicatorVariants, usesIndicatorStates, isDisable, isActive } from '@nodestrap/indicator'

const useCustomComponentSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Indicator>:
            usesIndicatorLayout(),
            usesIndicatorVariants(),
            usesIndicatorStates(),
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

export default function CustomComponent(props) {
    const sheet = useCustomComponentSheet();
    return (
        <Indicator {...props} mainClass={sheet.main}>
            { props.children }
        </Indicator>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
