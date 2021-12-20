import type { NextPage } from 'next'
import Head from 'next/head'
import React, {  } from 'react'
import { Main } from '../../../components/Main'
import { Section } from '../../../components/Section'
import { SpecList, SimpleSpecItem } from '../../../components/SpecList'
import { TypeScriptCode } from '../../../components/Code'


const BreakpointsPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Breakpoints Utility</title>
                <meta name="description" content="Using `breakpoints` utility" />
            </Head>

            <Main>
                <Section>
                <article>
                        <h1>Breakpoints Utility</h1>
                        <p>
                            <code>@nodestrap/breakpoints</code> is a utility for determining which layout/style to apply based on device (viewport) width.
                        </p>
                        <p>
                            You might want to create <strong>several versions of design</strong>, each of which has a specific target device such as <em>desktop version</em>, <em>tablet version</em>, <em>mobile version</em>, and so on.
                        </p>
                        <p>
                            To make <strong>a consistent breakpoint configuration</strong> between components, here the <code>@nodestrap/breakpoints</code> comes to help.<br />
                            <strong>Changing</strong> the configuration in <code>@nodestrap/breakpoints</code> <strong>affects all components</strong> that depend on it.
                        </p>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Defining Breakpoints</h2>
                        <p>
                            There are 6 pre-defined breakpoint properties:<br />
                            {
                                ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
                                .flatMap((spacer, index, themes) => [
                                    <code key={spacer}>{ spacer }</code>,
                                    (index < (themes.length - 1)) ? ', ' : null
                                ])
                            }
                        </p>
                        <p>
                            You can <em>add</em> or <em>modify</em> the <strong>pre-defined breakpoint properties</strong> <em>but</em> we advice <em>not to modify/delete</em> the <code>xs</code> one - which is the <em>default</em> breakpoint if nothing else matches.
                        </p>
                        <p>
                            Here the code for <em>adding</em> a new breakpoint property or <em>modifying</em> the existing ones: 
                        </p>
                        <TypeScriptCode>{`
import { breakpoints } from '@nodestrap/breakpoints'

breakpoints.md = 1024; // set the breakpoint of \`md\` to 1024 px
breakpoints.xxxl = 1920; // add a new property \`xxxl\` as 1920 px
                        `}</TypeScriptCode>
                        <p>
                            For deleting a specific breakpoint property, just assign <code>null</code> or <code>undefined</code> to the desired property:
                        </p>
                        <TypeScriptCode>{`
import { breakpoints } from '@nodestrap/breakpoints'

breakpoints.xxxl = null; // delete property \`xxxl\`
                        `}</TypeScriptCode>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Consuming (getting) the Breakpoints</h2>
                        <p>
                            Let&apos; say you want to make a custom component and need to switch some styles based on the configured breakpoints in <code>@nodestrap/breakpoints</code>.
                            You can do like this:
                        </p>
                        <TypeScriptCode>{`
import { compositionOf, layout, variants } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { breakpoints, isScreenWidthAtLeast } from '@nodestrap/breakpoints'

const useMySheet = createUseSheet(() => [
    compositionOf('myClass1', [
        layout({
            /* the default layout */
            display             : 'grid',
            gridTemplateColumns : [['1fr', '1fr']],
            gridTemplateRows    : [['20px', '1fr', '20px']],
            gridTemplateAreas   : [[
                '"...... ...."',
                '"poster form"',
                '"...... ...."',
            ]],
        }),
        variants([
            !!breakpoints.lg && isScreenWidthAtLeast('lg', [
                layout({
                    /* the layout for 'lg' screen */
                    display             : 'grid',
                    gridTemplateColumns : [['3fr', '1fr']],
                    gridTemplateRows    : [['40px', '1fr', 'min-content', '40px']],
                    gridTemplateAreas   : [[
                        '"...... ...."',
                        '"poster form"',
                        '"foot   foot"',
                        '"...... ...."',
                    ]],
                }),
            ]),
            !!breakpoints.xl && isScreenWidthAtLeast('xl', [
                layout({
                    /* the layout for 'xl' screen */
                    display             : 'grid',
                    gridTemplateColumns : [['4fr', '1fr']],
                    gridTemplateRows    : [['50px', '1fr', 'min-content', '50px']],
                    gridTemplateAreas   : [[
                        '"...... ...."',
                        '"poster form"',
                        '"foot   foot"',
                        '"...... ...."',
                    ]],
                }),
            ]),
        ]),
    ]),
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
                        <p>
                            There are several functions you can use for making responsive design:
                        </p>
                        <SpecList>
                            <SimpleSpecItem>
                                <code>isScreenWidthAtLeast</code>(<code>breakpointName</code>, <code>styles</code>)
                                <p>Applies the specified <code>styles</code> if the device&apos;s screen width is <strong>bigger/equal</strong> to the specified <code>breakpointName</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>isScreenWidthSmallerThan</code>(<code>breakpointName</code>, <code>styles</code>)
                                <p>Applies the specified <code>styles</code> if the device&apos;s screen width is <strong>smaller</strong> than the specified <code>breakpointName</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>isScreenWidthBetween</code>(<code>lowerBreakpointName</code>, <code>upperBreakpointName</code>, <code>styles</code>)
                                <p>Applies the specified <code>styles</code> if the device&apos;s screen width is <strong>within (inclusive)</strong> the specified <code>lowerBreakpointName</code> and <code>upperBreakpointName</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>isScreenWidth</code>(<code>breakpointName</code>, <code>styles</code>)
                                <p>Applies the specified <code>styles</code> if the device&apos;s screen width is <strong>bigger/equal</strong> to the specified <code>breakpointName</code> but <strong>smaller</strong> than the next <code>breakpointName</code>.</p>
                            </SimpleSpecItem>
                        </SpecList>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Where the Breakpoints are Actually Stored?</h2>
                        <p>
                            Well, the breakpoints are stored internally in <code>@nodestrap/breakpoints</code> only.
                            Unlike other utilities that use the power of <em>css variables</em>, <code>@nodestrap/breakpoints</code> is currently relies on JavaScript object for storage.
                            The <em>css variables</em> doesn&apos;t work on <code>@media</code> selector.
                            Here the actual code stored internally:
                        </p>
                        <TypeScriptCode>{`
export const breakpoints = {
    xs  : 0,
    sm  : 576,
    md  : 768,
    lg  : 992,
    xl  : 1200,
    xxl : 1400,
};
                        `}</TypeScriptCode>
                        <p>
                            Btw, you should modify the breakpoints <em>as soon as possible</em>, usually <strong>after</strong> the <code>import</code> statement.
                            Most the Nodestrap components build the dynamic css at the first render and <strong>cached it</strong> for re-use.
                            So any changes after already cached will not be affected.
                        </p>
                    </article>
                </Section>
            </Main>
        </>
    )
}

export default BreakpointsPage
