import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'
import { Warning } from '../../../components/Info'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkProgressPage, LinkBasicPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import {
    themeNames,
    SectionPropertyTheme,
    SectionPropertySize,
    SectionPropertyNude,
    SectionPropertyGradient,
    SectionPropertyOutlined,
    SectionPropertyMild,
    SectionPropertyOrientation,
} from '../../../components/common@Basic'
import {
    SectionPropertyOrientationBlock,
    SectionPropertyOrientationInline,
} from '../../../components/common@Progress'
import { Progress, ProgressBar } from '@nodestrap/progress'

import loadable from '@loadable/component'
const DemoProgressLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Progress' */'../../../components/DemoPanel@Progress'))



const WarnNotImplementExited = () => (
    <Warning>
        <p>
            By default <CurrentComponent /> is doesn&apos;t implement this feature, but
            the derived components may do.
        </p>
    </Warning>
);



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/progress' component={<LinkProgressPage />} bases={<LinkBasicPage />}>
            <Head>
                <title>&lt;Progress&gt; Component</title>
                <meta name="description" content="Using <Progress> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is the most progress component in Nodestrap components after the <CurrentBaseComponents />.
                    It provides the progress styling and some progress essentials.
                </p>
                <p>
                    Unlike <CurrentBaseComponents />, <CurrentComponent /> has a default style that you can see visually.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoProgressLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Progress
                                theme={themeName}
                                key={index}
                            >
                                A {'<Progress>'} with {themeName} theme
                            </Progress>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Progress
    theme='${themeName}'
>
    A {'<Progress>'} with ${themeName} theme
</Progress>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <Progress
                            size='sm'
                            theme='primary'
                        >
                            A {'<Progress>'} with smaller size
                        </Progress>
                        <Progress
                            size={undefined}
                            theme='primary'
                        >
                            A {'<Progress>'} with default size
                        </Progress>
                        <Progress
                            size='lg'
                            theme='primary'
                        >
                            A {'<Progress>'} with larger size
                        </Progress>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Progress
    size='sm'
    theme='primary'
>
    A {'<Progress>'} with smaller size
</Progress>

<Progress
    size={undefined}
    theme='primary'
>
    A {'<Progress>'} with default size
</Progress>

<Progress
    size='lg'
    theme='primary'
>
    A {'<Progress>'} with larger size
</Progress>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <Progress
                            nude={true}
                            theme='warning'
                        >
                            hello world
                        </Progress>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Progress
    nude={true}
    theme='warning'
>
    hello world
</Progress>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Progress
                                gradient={true}
                                theme={themeName}
                                key={index}
                            >
                                hello world
                            </Progress>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Progress
    gradient={true}
    theme='${themeName}'
>
    hello world
</Progress>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        {themeNames.map((themeName, index) =>
                            <Progress
                                outlined={true}
                                theme={themeName}
                                key={index}
                            >
                                hello world
                            </Progress>
                        )}
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Progress
    outlined={true}
    theme='${themeName}'
>
    hello world
</Progress>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Progress
                                mild={true}
                                theme={themeName}
                                key={index}
                            >
                                hello world
                            </Progress>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Progress
    mild={true}
    theme='${themeName}'
>
    hello world
</Progress>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyOrientation>
                    <SectionPropertyOrientationBlock>
                        <Preview>
                            <Progress
                                orientation='block'
                                theme='primary'
                            >
                                <ProgressBar value={30}>
                                    30%
                                </ProgressBar>
                            </Progress>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Progress
    orientation='block'
    theme='primary'
>
    <ProgressBar value={30}>
        30%
    </ProgressBar>
</Progress>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationBlock>
                    <SectionPropertyOrientationInline overflowWarning={false}>
                        <Preview blockDisplay={true}>
                            <Progress
                                orientation='inline'
                                theme='primary'
                            >
                                <ProgressBar value={30}>
                                    30%
                                </ProgressBar>
                            </Progress>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Progress
    orientation='inline'
    theme='primary'
>
    <ProgressBar value={30}>
        30%
    </ProgressBar>
</Progress>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationInline>
                </SectionPropertyOrientation>
            </SectionVariants>
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Foregrounds, Backgrounds &amp; Borders'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>foreg</code>
                                <p>The text color.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>backg</code>
                                <p>The background color.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>backgGrad</code>
                                <p>The background gradient when <code>{`gradient={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>border</code>
                                <p>The default border-style, border-width and border-color.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderWidth</code>
                                <p>The thickness of border.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderColor</code>
                                <p>The color of border when <strong>un-themed</strong>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderRadius</code>
                                <p>The default border-radius.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderRadiusSm</code>
                                <p>The border-radius when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderRadiusLg</code>
                                <p>The border-radius when <code>{`size='lg'`}</code>.</p>
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
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Appearances'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>opacity</code>
                                <p>
                                    The opacity level.<br />
                                    <code>{`opacity=0`}</code> is fully transparent, <code>{`opacity=1`}</code> is fully opaque.
                                </p>
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
                                <code>fontSizeSm</code>
                                <p>The text size when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fontSizeLg</code>
                                <p>The text size when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fontFamily</code>
                                <p>The text appearance.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fontWeight</code>
                                <p>The text thickness.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fontStyle</code> &amp; <code>textDecoration</code>
                                <p>The text style such as <em>italic</em>, <em>underline</em>, <em>dashed</em>, etc.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>lineHeight</code>
                                <p>The text height (including the gap between text rows).</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Animations'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>transDuration</code>
                                <p>The default <code>transition-duration</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>transition</code>
                                <p>The default <code>transition</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes none</code>
                                <p>A keyframes name represents <em>an empty keyframes</em>.</p>
                                <p>You should <strong>not to modify</strong> this property (in most cases).</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>filterExcited</code>
                                <p>A <code>filter</code> to apply when <code>{`excited={true}`}</code>.</p>
                                <WarnNotImplementExited />
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes excited</code>
                                <p>A keyframes name represents <em>an excited keyframes</em>.</p>
                                <WarnNotImplementExited />
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animExcited</code>
                                <p>An animation represents <em>excited animation</em>.</p>
                                <WarnNotImplementExited />
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Progress } from '@nodestrap/progress'

export default function SiteSidebar(props) {
    return (
        <Progress
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'complementary'} // override default value of semanticRole to 'complementary'
            semantictag={props.semanticTag ?? 'aside'}           // override default value of semanticTag  to 'aside'
            
            theme={props.theme ?? 'secondary'} // override default value of theme to 'secondary'
            mild={props.mild ?? true}          // override default value of mild  to true
        >
            { props.children }
        </Progress>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesProgressLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesProgressVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code>, <code>NudeVariant</code>, <code>ThemeVariant</code>, <code>GradientVariant</code>, <code>OutlinedVariant</code>, and <code>MildVariant</code>.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { Progress, usesProgressLayout, usesProgressVariants } from '@nodestrap/progress'

const useCustomComponentSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Progress>:
            usesProgressLayout(),
            usesProgressVariants(),
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
            
            /* ... */
        }),
    ),
]);

export default function CustomComponent(props) {
    const sheet = useCustomComponentSheet();
    return (
        <Progress {...props} mainClass={sheet.main}>
            { props.children }
        </Progress>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
