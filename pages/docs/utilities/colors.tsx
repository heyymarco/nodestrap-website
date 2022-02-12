import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { BusyBar, ComponentInfoProvider, CurrentComponent, LinkColorsPage, SectionDemo, SectionGeneral, SectionIntro } from '../../../components/common-contents'
import { TypeScriptCode, CssCode } from '../../../components/Code'

import { colors } from '@nodestrap/colors'
import { ColorPreview } from '../../../components/ColorPreview'

import loadable from '@loadable/component'
const DemoColorsLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@colors' */'../../../components/DemoPanel@colors'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/colors' packageType='utility' component={<LinkColorsPage />} bases={<LinkColorsPage />}>
            <Head>
                <title>Colors Utility</title>
                <meta name="description" content="Configuring `colors` utility" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a color utility that is shared across other components.
                </p>
                <p>
                    <strong>Changing</strong> the colors <strong>affects all components</strong> that depend on <CurrentComponent />.
                </p>
                <p>
                    The main purpose of this utility is to create <strong>a consistent theme colors</strong> between components.
                </p>
            </SectionIntro>
            <SectionDemo message={
                <p>
                    Move some sliders below!
                    You&apos;ll see our site&apos;s primary color is changed instantly.
                </p>
            }>
                <DemoColorsLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionGeneral title='Defining Theme Colors'>
                <p>
                    There are 8 pre-defined theme colors:<br />
                    {
                        ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']
                        .flatMap((theme, index, themes) => [
                            <ColorPreview key={theme} name={theme} value={(colors as any)[theme]} />,
                            (index < (themes.length - 1)) ? ', ' : null
                        ])
                    }
                </p>
                <p>
                    You can <em>add</em> or <em>modify</em> the <strong>pre-defined theme colors</strong> <em>but</em> we advice <em>not to delete</em> them.
                </p>
                <p>
                    Because the absence of color function <code>color-mod()</code> in the css, so we create a JavaScript function <code>defineTheme()</code>.
                </p>
                <p>
                    Here the code for <em>adding</em> a new theme color or <em>modifying</em> the existing ones: 
                </p>
                <TypeScriptCode>{`
import { defineTheme } from '@nodestrap/colors'

defineTheme('primary', '#0000ff'); // set \`primary\` color to rgb blue (pure blue)
defineTheme('cool', '#00ff00'); // add \`cool\` color to green
                `}</TypeScriptCode>
                <p>
                    For deleting a specific theme color, just pass <code>null</code> or <code>undefined</code> to the second parameter:
                </p>
                <TypeScriptCode>{`
import { defineTheme } from '@nodestrap/colors'

defineTheme('cool', null); // delete cool color
                `}</TypeScriptCode>
                <p>
                    When you define a theme color through <code>defineTheme()</code>, let&apos;s say <code>primary</code> color, 1 primary color and 4 sub primary colors are created:
                </p>
                <ol>
                    <li>
                        <p>
                            <ColorPreview name={'primary'} value={colors.primary} /> - the exact color you have set.<br />
                            Usually used for background color and icon color.
                        </p>
                    </li>
                    <li>
                        <p>
                            <ColorPreview name={'primaryText'} value={colors.primaryText} /> - the foreground color against <ColorPreview name='primary' value={colors.primary} />, might be <ColorPreview name='dark' value={colors.dark} /> or <ColorPreview name='light' value={colors.light} />.<br />
                            Usually used for foreground (text) color and horizontal line.
                        </p>
                    </li>
                    <li>
                        <p>
                            <ColorPreview name={'primaryThin'} value={colors.primaryThin} /> - the semi transparent version of <ColorPreview name='primary' value={colors.primary} />, driven by <code>config.thinLevel</code>.<br />
                            Usually used for focus ring indicator.
                        </p>
                    </li>
                    <li>
                        <p>
                            <ColorPreview name={'primaryMild'} value={colors.primaryMild} /> - the mild (mixed with <ColorPreview value={colors.backg} /> <code>backg</code>) version of <ColorPreview name='primary' value={colors.primary} />, driven by <code>config.mildLevel</code>.<br />
                            Usually used for background color of article.
                        </p>
                    </li>
                    <li>
                        <p>
                            <ColorPreview name={'primaryBold'} value={colors.primaryBold} /> - the bold (mixed with <ColorPreview value={colors.foreg} /> <code>foreg</code>) version of <ColorPreview name='primary' value={colors.primary} />, driven by <code>config.boldLevel</code>.<br />
                            Usually used for border color and separator.
                        </p>
                    </li>
                </ol>
                <p>
                    There are some config you can tweak for producing the <em>sub theme colors</em>:
                </p>
                <TypeScriptCode>{`
import { config, defineTheme } from '@nodestrap/colors'

config.thinLevel = 0.5; // 0.0 = full transparent, 1.0 = full opaque
config.mildLevel = 0.8; // 0.0 = same as base color, 1.0 = same as colors.backg
config.boldLevel = 0.8; // 0.0 = same as base color, 1.0 = same as colors.foreg

defineTheme('primary', '#0000ff');
                `}</TypeScriptCode>
                <p>
                    The <code>config</code> are live!
                    Any changes before/after calling the <code>defineTheme()</code> will be applied to corresponding <em>base color</em>.
                </p>
            </SectionGeneral>
            <SectionGeneral title='Defining Background Color'>
                <p>
                    This color defines the common background color of your site.
                    Set to light color for making light theme, or dark color for dark theme (night mode).
                </p>
                <p>
                    We advice set to <strong>high light</strong> (near white) or <strong>high dark</strong> (near black), but <strong>don&apos;t set to near gray</strong>.
                    Because the gray color makes confusing to determie the foreground (text) color.
                    Usually the text color will be dark on the light background and will be light on the dark background.
                </p>
                <p>
                    Here the code for <em>modifying</em> the background color: 
                </p>
                <TypeScriptCode>{`
import { defineBackg } from '@nodestrap/colors'

defineBackg('#000000'); // set \`background\` color to black and the foreground color will be determined automatically
                `}</TypeScriptCode>
                <p>
                    Setting the <code>defineBackg()</code> will automatically set the foreground color to <ColorPreview name='dark' value={colors.dark} /> or <ColorPreview name='light' value={colors.light} /> (making as contrast as possible).
                    But if you don&apos;t want to set the foreground automatically, pass <code>false</code> to the second argument:
                </p>
                <TypeScriptCode>{`
import { defineBackg } from '@nodestrap/colors'

defineBackg('#000000', false); // set \`background\` color to black and don't modify the foreground color automatically
                `}</TypeScriptCode>
                <p>
                    You can also set the <ColorPreview name='dark' value={colors.dark} /> and <ColorPreview name='light' value={colors.light} /> color by this code:
                </p>
                <TypeScriptCode>{`
import { colors } from '@nodestrap/colors'

colors.dark = '#000000' // set \`dark\` color to black
colors.light = '#ffffff' // set \`light\` color to white
                `}</TypeScriptCode>
            </SectionGeneral>
            <SectionGeneral title='Defining Foreground (Text) Color'>
                <p>
                    This color defines the common foreground (text) color of your site.
                    You <em>might not need</em> to use this function because setting the <code>defineBackg()</code> will automatically set the foreground color to <ColorPreview name='dark' value={colors.dark} /> or <ColorPreview name='light' value={colors.light} /> for you.
                    But in some case you might need <code>defineForeg()</code> to control manually.
                </p>
                <TypeScriptCode>{`
import { defineForeg } from '@nodestrap/colors'

defineForeg('#0000aa'); // set \`foreground\` color to dark blue
                `}</TypeScriptCode>
                <p>
                    But instad of setting the foreground color manually, it&apos; better to set the <ColorPreview name='dark' value={colors.dark} /> and <ColorPreview name='light' value={colors.light} /> color
                    and let&apos; the system to choose between the two:
                </p>
                <TypeScriptCode>{`
import { colors } from '@nodestrap/colors'

colors.dark = '#0000aa' // set \`dark\` color to dark blue
colors.light = '#aaaaff' // set \`light\` color to light blue
                `}</TypeScriptCode>
            </SectionGeneral>
            <SectionGeneral title='Consuming (getting) the Colors'>
                <p>
                    Let&apos; say you want to make a custom component and need to get some colors in <CurrentComponent /> for color consistency.
                    You can do like this:
                </p>
                <TypeScriptCode>{`
import { colors } from '@nodestrap/colors'

export default function MyComponent(props) {
    return (
        <div style={{
            backgroundColor : colors.primary,
            color           : colors.primaryText,
            border          : \`solid 1px \${colors.primaryBold}\`
        }}>
            { props.children }
        </div>
    )
}
                `}</TypeScriptCode>
                <p>
                    You can use <strong>CSS in JS</strong>, <strong>Styled Component</strong> or <strong>cssfn</strong> to dynamically create your own css:
                </p>
                <TypeScriptCode>{`
import { compositionOf, layout } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { colors } from '@nodestrap/colors'

const useMySheet = createUseSheet(() => [
    compositionOf('myClass1',
        style({
            backg  : colors.primary,
            foreg  : colors.primaryText,
            border : [['solid', '1px', colors.primaryBold]]
        }),
    )
]);

export default function MyComponent(props) {
    const mySheet = useMySheet();
    return (
        <div className={mySheet.myClass1}>
            { props.children }
        </div>
    )
}
                `}</TypeScriptCode>
            </SectionGeneral>
            <SectionGeneral title='Where the Colors are Actually Stored?'>
                <p>
                    Well, the colors are stored internally in <CurrentComponent /> and dynamically copied into the browser&apos;s <code>:root</code> by default.
                    Here the actual code you can find on browser&apos;s page inspector:
                </p>
                <CssCode>{`
:root {
    --col-blue: #0D6EFD;
    --col-indigo: #6610F2;
    --col-purple: #6F42C1;
    --col-pink: #D63384;
    --col-red: #DC3545;
    --col-orange: #FD7E14;
    --col-yellow: #FFC107;
    --col-green: #198754;
    --col-teal: #20C997;
    --col-cyan: #0DCAF0;
    --col-black: #000000;
    --col-white: #FFFFFF;
    --col-gray: #6C757D;
    --col-grayDark: #343A40;
    --col-primary: var(--col-blue);
    --col-secondary: var(--col-gray);
    --col-success: var(--col-green);
    --col-info: var(--col-cyan);
    --col-warning: var(--col-yellow);
    --col-danger: var(--col-red);
    --col-light: #F8F9FA;
    --col-dark: #212529;
    --col-backg: var(--col-white);
    --col-foreg: var(--col-dark);
    --col-backgThin: rgba(255, 255, 255, 0.5);
    --col-backgMild: var(--col-white);
    --col-backgBold: #4D5154;
    --col-foregThin: rgba(33, 37, 41, 0.5);
    --col-foregMild: #D3D3D4;
    --col-foregBold: var(--col-dark);
    --col-primaryText: var(--col-light);
    --col-secondaryText: var(--col-light);
    --col-successText: var(--col-light);
    --col-infoText: var(--col-dark);
    --col-warningText: var(--col-dark);
    --col-dangerText: var(--col-light);
    --col-lightText: var(--col-dark);
    --col-darkText: var(--col-light);
    --col-primaryThin: rgba(13, 110, 253, 0.5);
    --col-secondaryThin: rgba(108, 117, 125, 0.5);
    --col-successThin: rgba(25, 135, 84, 0.5);
    --col-infoThin: rgba(13, 202, 240, 0.5);
    --col-warningThin: rgba(255, 193, 7, 0.5);
    --col-dangerThin: rgba(220, 53, 69, 0.5);
    --col-lightThin: rgba(248, 249, 250, 0.5);
    --col-darkThin: var(--col-foregThin);
    --col-primaryMild: #CFE2FF;
    --col-secondaryMild: #E2E3E5;
    --col-successMild: #D1E7DD;
    --col-infoMild: #CFF4FC;
    --col-warningMild: #FFF3CD;
    --col-dangerMild: #F8D7DA;
    --col-lightMild: #FEFEFE;
    --col-darkMild: var(--col-foregMild);
    --col-primaryBold: #1D3453;
    --col-secondaryBold: #30353A;
    --col-successBold: #1F3932;
    --col-infoBold: #1D4651;
    --col-warningBold: #4D4422;
    --col-dangerBold: #46282F;
    --col-lightBold: #4C4F53;
    --col-darkBold: var(--col-dark);
}
                `}</CssCode>
                <p>
                    Btw, you <strong>should not</strong> modify our <code>css variables</code> directly!
                    Otherwise any changes you&apos;ve made will be swapped out.
                    Instead use <strong>our API</strong> in the <CurrentComponent /> to get/set/modify the colors.
                    Like this:
                </p>
                <TypeScriptCode>{`
import { colors, cssDecls as colorDecls, cssVals as colorVals } from '@nodestrap/colors'

colors.primary = '#0000ff'; // set the --col-primary in the :root

const valueByRef = colors.primary // get the value of --col-primary in the :root
console.log(valueByRef); // var(--col-primary)

const declaration = colorDecls.primary // get the css property name of --col-primary in the :root
console.log(declaration); // --col-primary

const valueByVal = colors.primary // get the value of --col-primary in the :root
console.log(valueByVal); // #0000ff
                `}</TypeScriptCode>
                <p>
                    And you should modify the colors <em>as soon as possible</em>, usually <strong>after</strong> the <code>import</code> statement.
                    Most the Nodestrap components build the dynamic css at the first render and <strong>cached it</strong> for re-use.
                    So any changes after already cached will not be affected.
                </p>
            </SectionGeneral>
        </ComponentInfoProvider>
    );
}

export default Page
