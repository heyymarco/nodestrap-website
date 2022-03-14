import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'
import { Warning } from '../../../components/Info'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkProgressPage, LinkBasicPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, LinkProgressBarPage, CurrentNestedComponent } from '../../../components/common'
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
import { Progress as ProgressOri, ProgressProps, ProgressBar } from '@nodestrap/progress'

import loadable from '@loadable/component'
const DemoProgressLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Progress' */'../../../components/DemoPanel@Progress'))



const Progress = (props: ProgressProps) => <ProgressOri {...props} style={{ justifySelf: 'stretch' }}>
    {props.children ?? <>
        <ProgressBar value={30} />
    </>}
</ProgressOri>



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/progress' component={<LinkProgressPage />} nestedComponent={<LinkProgressBarPage />} bases={<LinkBasicPage />}>
            <Head>
                <title>&lt;Progress&gt; Component</title>
                <meta name="description" content="Using <Progress> component" />
            </Head>

            <SectionIntro>
                <p>
                    Displays the completion progress of a task.
                </p>
                <p>
                    Here the preview:
                </p>
                <Progress theme='primary'>
                    <ProgressBar value={30}>
                        Part 1: 30%
                    </ProgressBar>
                    <ProgressBar value={40} progressBarStyle='striped' running={true}>
                        Part 2: 40%
                    </ProgressBar>
                </Progress>
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
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Progress
    theme='${themeName}'
>
    <ProgressBar value={30} />
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
                            <ProgressBar value={30} />
                        </Progress>
                        <Progress
                            size={undefined}
                            theme='primary'
                        >
                            <ProgressBar value={30} />
                        </Progress>
                        <Progress
                            size='lg'
                            theme='primary'
                        >
                            <ProgressBar value={30} />
                        </Progress>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Progress
    size='sm'
    theme='primary'
>
    <ProgressBar value={30} />
</Progress>

<Progress
    size={undefined}
    theme='primary'
>
    <ProgressBar value={30} />
</Progress>

<Progress
    size='lg'
    theme='primary'
>
    <ProgressBar value={30} />
</Progress>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <Progress
                            nude={true}
                            theme='primary'
                        >
                            <ProgressBar value={30} />
                            <ProgressBar value={40} progressBarStyle='striped' running={true} />
                        </Progress>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Progress
    nude={true}
    theme='primary'
>
    <ProgressBar value={30} />
    <ProgressBar value={40} progressBarStyle='striped' running={true} />
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
                            />
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
    <ProgressBar value={30} />
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
                            />
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
    <ProgressBar value={30} />
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
                            />
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
    <ProgressBar value={30} />
</Progress>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyOrientation>
                    <SectionPropertyOrientationBlock>
                        <Preview stretch={false}>
                            <Progress
                                orientation='block'
                                theme='primary'
                            />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Progress
    orientation='block'
    theme='primary'
>
    <ProgressBar value={30} />
</Progress>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationBlock>
                    <SectionPropertyOrientationInline overflowWarning={false}>
                        <Preview blockDisplay={true}>
                            <Progress
                                orientation='inline'
                                theme='primary'
                            />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Progress
    orientation='inline'
    theme='primary'
>
    <ProgressBar value={30} />
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
                                <code>backgGrad</code>
                                <p>The default background gradient when <code>{`gradient={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>backgGradBlock</code>
                                <p>The background gradient when <code>{`gradient={true}`}</code> and <code>{`orientation='block'`}</code>.</p>
                            </SimpleSpecItem>
                            
                            
                            <SimpleSpecItem>
                                <code>itemBackgStrippedImg</code>
                                <p>The tiled overlay background when <code>{`progressBarStyle='striped'`}</code>.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>itemBackgStrippedSize</code>
                                <p>The default tiled overlay background size when <code>{`progressBarStyle='striped'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>itemBackgStrippedSizeSm</code>
                                <p>The tiled overlay background size when <code>{`progressBarStyle='striped'`}</code> and <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>itemBackgStrippedSizeLg</code>
                                <p>The tiled overlay background size when <code>{`progressBarStyle='striped'`}</code> and <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Sizes'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>minInlineSize</code>
                                <p>The default minimum width of <CurrentComponent />.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>minBlockSize</code>
                                <p>The default minimum height of <CurrentComponent />.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>minInlineSizeBlock</code>
                                <p>The minimum width of <CurrentComponent /> when <code>{`orientation='block'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>minBlockSizeBlock</code>
                                <p>The minimum height of <CurrentComponent /> when <code>{`orientation='block'`}</code>.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>itemBoxSizing</code>
                                <p>Defines how the total width and height of <CurrentNestedComponent /> is calculated.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>itemMinInlineSize</code>
                                <p>The default minimum width of <CurrentNestedComponent />.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>itemMinBlockSize</code>
                                <p>The default minimum height of <CurrentNestedComponent />.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>itemMinBlockSizeSm</code>
                                <p>The minimum height of <CurrentNestedComponent /> when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>itemMinBlockSizeLg</code>
                                <p>The minimum height of <CurrentNestedComponent /> when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>itemMinBlockSizeBlock</code>
                                <p>The default minimum height of <CurrentNestedComponent /> when <code>{`orientation='block'`}</code>.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>itemMinInlineSizeBlock</code>
                                <p>The default minimum width of <CurrentNestedComponent /> when <code>{`orientation='block'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>itemMinInlineSizeBlockSm</code>
                                <p>The minimum width of <CurrentNestedComponent /> when <code>{`orientation='block'`}</code> and <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>itemMinInlineSizeBlockLg</code>
                                <p>The minimum width of <CurrentNestedComponent /> when <code>{`orientation='block'`}</code> and <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Spacings'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>itemPaddingInline</code>
                                <p>The inner spacing on the left &amp; right of <CurrentNestedComponent />.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>itemPaddingBlock</code>
                                <p>The inner spacing on the top &amp; bottom of <CurrentNestedComponent />.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Animations'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>@keyframes itemRunning</code>
                                <p>A default keyframes name represents <em>running progress keyframes</em> <code>{`running={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>itemAnimRunning</code>
                                <p>A default animation represents <em>running progress animation</em> <code>{`running={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes itemRunningBlock</code>
                                <p>A keyframes name represents <em>running progress keyframes</em> <code>{`running={true}`}</code> and <code>{`orientation='block'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>itemAnimRunningBlock</code>
                                <p>An animation represents <em>running progress animation</em> <code>{`running={true}`}</code> and <code>{`orientation='block'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Progress } from '@nodestrap/progress'

export default function CustomProgress(props) {
    return (
        <Progress
            {...props} // preserves other properties
            
            theme={props.theme ?? 'success'} // override default value of theme to 'success'
            mild={props.mild ?? false}       // override default value of mild  to false
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
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesProgressVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code>, <code>ProgressVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        
                        <DetailSpecItem code='usesProgressBarLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentNestedComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesProgressBarVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentNestedComponent /> such as:<br />
                                <code>ProgressBarVariant</code> and maybe <em>other variants</em> added in the future.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesProgressBarStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentNestedComponent /> such as:<br />
                                <strong>running state</strong> and maybe <em>other states</em> added in the future.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { Progress, usesProgressLayout, usesProgressVariants, usesProgressBarLayout, usesProgressBarVariants, usesProgressBarStates } from '@nodestrap/progress'

const useCustomProgressSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Progress>:
            usesProgressLayout(),
            usesProgressVariants(),
        ]),
        style({
            // then overwrite with your style:
            margin  : '1em',
            /* ... */
            
            ...children('*', {
                ...imports([
                    // import some stuff from <ProgressBar>:
                    usesProgressBarLayout(),
                    usesProgressBarVariants(),
                    usesProgressBarStates(),
                ]),
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
            }),
            
            /* ... */
        }),
    ),
]);

export default function CustomProgress(props) {
    const sheet = useCustomProgressSheet();
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
