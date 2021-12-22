import type { NextPage } from 'next'
import Head from 'next/head'
import { TypeScriptCode, CssCode } from '../../../components/Code'
import { borders, borderRadiuses as radiuses } from '@nodestrap/borders'
import React, { useEffect } from 'react'
import { Main } from '../../../components/Main'
import { Section } from '../../../components/Section'
import { DemoPanel, ResetButtonEx } from '../../../components/DemoPanel'
import { BorderOptions, useBorderStates } from '../../../components/DemoPanel@borders'
import { Basic } from '@nodestrap/basic'



const BordersPage: NextPage = () => {
    const states = useBorderStates();
    const width = states.width[0];
    const radius = states.radius[0];

    useEffect(() => {
        const handler = setTimeout(() => {
            new Promise<void>((resolve) => {
                borders.defaultWidth = `${width}px` as any;
                borders.default      = [[borders.style, borders.defaultWidth, borders.color]] as any;
                borders.style        = states.style[0] as any;
                resolve();
            });
        }, 10);

        return () => clearTimeout(handler);
    }, [width, states.style[0]]);
    useEffect(() => {
        const handler = setTimeout(() => {
            new Promise<void>((resolve) => {
                radiuses.md          = `${radius}rem` as any;
                resolve();
            });
        }, 10);

        return () => clearTimeout(handler);
    }, [radius]);
    

    
    
    return (
        <>
            <Head>
                <title>Borders Utility</title>
                <meta name="description" content="Configuring `borders` utility" />
            </Head>

            <Main>
                <Section>
                    <article>
                        <h1>Borders Utility</h1>
                        <p>
                            <code>@nodestrap/borders</code> is a border (stroke) utility that is shared across other components.
                        </p>
                        <p>
                            <strong>Changing</strong> the borders <strong>affects all components</strong> that depend on <code>@nodestrap/borders</code>.
                        </p>
                        <p>
                            The main purpose of this utility is to create <strong>a consistent border (stroke)</strong> between components.
                        </p>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Demonstration</h2>
                        <p>
                            Move some sliders/controls below!
                            You&apos;ll see our site&apos;s border is changed instantly.
                        </p>
                        <DemoPanel>
                            <span>Preview</span>
                            <Basic
                                theme='primary'
                            >
                                hello world
                            </Basic>

                            <hr />

                            <BorderOptions states={states} />

                            <ResetButtonEx states={states} />
                        </DemoPanel>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Defining Borders</h2>
                        <p>
                            There are 8 pre-defined border properties:<br />
                            {
                                ['none', 'hair', 'thin', 'bold', 'color', 'style', 'defaultWidth', 'default']
                                .flatMap((border, index, themes) => [
                                    <code key={border}>{ border }</code>,
                                    (index < (themes.length - 1)) ? ', ' : null
                                ])
                            }
                            <br />
                            And 7 pre-defined border radius properties:<br />
                            {
                                ['none', 'sm', 'md', 'lg', 'pill', 'circle', 'default']
                                .flatMap((border, index, themes) => [
                                    <code key={border}>{ border }</code>,
                                    (index < (themes.length - 1)) ? ', ' : null
                                ])
                            }
                        </p>
                        <p>
                            You can <em>add</em> or <em>modify</em> the <strong>pre-defined border properties</strong> and <strong>pre-defined border radius properties</strong> <em>but</em> we advice <em>not to delete</em> them.
                        </p>
                        <p>
                            Here the code for <em>adding</em> a new border property or <em>modifying</em> the existing ones: 
                        </p>
                        <TypeScriptCode>{`
import { borders, borderRadiuses } from '@nodestrap/borders'

borders.bold = '8px'; // set the thickness of \`bold\` to 8 px
borders.ultraBold = '15px'; // add a new property \`ultraBold\` as 15 px
borders.style = 'dashed'; // set the border style to dashed
borders.defaultWidth = borders.bold; // set the default thickness to \`bold\` (8 px)
borders.default = [[borders.style, borders.defaultWidth, borders.color]]; // set the default border

borderRadiuses.lg = '0.8rem'; // set the border radius of \`lg\` to 0.8 rem
borderRadiuses.xxl = '3rem'; // add a new property \`xxl\` as 3 rem
borderRadiuses.default = borderRadiuses.lg; // set the default border radius to \`lg\` (0.8 rem)
                        `}</TypeScriptCode>
                        <p>
                            For deleting a specific border property, just assign <code>null</code> or <code>undefined</code> to the desired property:
                        </p>
                        <TypeScriptCode>{`
import { borders, borderRadiuses } from '@nodestrap/borders'

borders.ultraBold = null; // delete property \`ultraBold\`

borderRadiuses.xxl = null; // delete property \`xxl\`
                        `}</TypeScriptCode>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Consuming (getting) the Borders</h2>
                        <p>
                            Let&apos; say you want to make a custom component and need to get some borders in <code>@nodestrap/borders</code> for border consistency.
                            You can do like this:
                        </p>
                        <TypeScriptCode>{`
import { borders, borderRadiuses } from '@nodestrap/borders'

export default function MyComponent(props) {
    return (
        <div style={{
            borderStyle : borders.style,
            borderColor : borders.color,
            borderWidth : borders.hair
        }}>
            <span style={{
                border       : borders.default
                borderRadius : borderRadiuses.default,
            }}>
                { props.children }
            </span>
        </div>
    )
}
                        `}</TypeScriptCode>
                        <p>
                            You can use <strong>CSS in JS</strong>, <strong>Styled Component</strong> or <strong>CSSFN</strong> to dynamically create your own css:
                        </p>
                        <TypeScriptCode>{`
import { compositionOf, layout } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { borders, borderRadiuses } from '@nodestrap/borders'

const useMySheet = createUseSheet(() => [
    compositionOf('myClass1', [
        layout({
            borderStyle  : borders.style,
            borderColor  : borders.color,
            borderWidth  : borders.hair,
            borderRadius : borderRadiuses.default,
        }),
    ])
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
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Where the Borders are Actually Stored?</h2>
                        <p>
                            Well, the borders are stored internally in <code>@nodestrap/borders</code> and dynamically copied into the browser&apos;s <code>:root</code> by default.
                            Here the actual code you can find on browser&apos;s page inspector:
                        </p>
                        <CssCode>{`
:root {
    --bd-none: 0px;
    --bd-hair: 1px;
    --bd-thin: 2px;
    --bd-bold: 4px;
    --bd-color: currentColor;
    --bd-style: solid;
    --bd-defaultWidth: var(--bd-hair);
    --bd-default: var(--bd-style) var(--bd-hair) var(--bd-color);
}
:root {
    --bd-rd-none: 0px;
    --bd-rd-sm: 0.2rem;
    --bd-rd-md: 0.25rem;
    --bd-rd-lg: 0.3rem;
    --bd-rd-pill: 50rem;
    --bd-rd-circle: 50%;
    --bd-rd-default: var(--bd-rd-md);
}
                        `}</CssCode>
                        <p>
                            Btw, you <strong>should not</strong> modify our <code>css variables</code> directly!
                            Otherwise any changes you&apos;ve made will be swapped out.
                            Instead use <strong>our API</strong> in the <code>@nodestrap/borders</code> to get/set/modify the borders.
                            Like this:
                        </p>
                        <TypeScriptCode>{`
import { borders, cssDecls as borderDecls, cssVals as borderVals } from '@nodestrap/borders'

borders.thin = '3px'; // set the --bd-thin in the :root

const valueByRef = borders.thin; // get the value of --bd-thin in the :root
console.log(valueByRef); // var(--bd-thin)

const declaration = borderDecls.thin; // get the css property name of --bd-thin in the :root
console.log(declaration); // --bd-thin

const valueByVal = borderVals.thin; // get the value of --bd-thin in the :root
console.log(valueByVal); // 3px
                        `}</TypeScriptCode>
                        <p>
                            And you should modify the borders <em>as soon as possible</em>, usually <strong>after</strong> the <code>import</code> statement.
                            Most the Nodestrap components build the dynamic css at the first render and <strong>cached it</strong> for re-use.
                            So any changes after already cached will not be affected.
                        </p>
                    </article>
                </Section>
            </Main>
        </>
    )
}

export default BordersPage
