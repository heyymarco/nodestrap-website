import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { BusyBar, ComponentInfoProvider, CurrentComponent, LinkSpacersPage, SectionDemo, SectionGeneral, SectionIntro } from '../../../components/common-contents'
import { TypeScriptCode, CssCode } from '../../../components/Code'

import loadable from '@loadable/component'
const DemoSpacersLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@spacers' */'../../../components/DemoPanel@spacers'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/spacers' packageType='utility' component={<LinkSpacersPage />} bases={<LinkSpacersPage />}>
            <Head>
                <title>Spacers Utility</title>
                <meta name="description" content="Configuring `spacers` utility" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a spacer utility that is shared across other components.
                </p>
                <p>
                    <strong>Changing</strong> the spacers <strong>affects all components</strong> that depend on <CurrentComponent />.
                </p>
                <p>
                    The main purpose of this utility is to create <strong>a consistent spacer (margin/padding/gap/etc)</strong> between components.
                </p>
            </SectionIntro>
            <SectionDemo message={
                <p>
                    Move some sliders below!
                    You&apos;ll see our site&apos;s margin/padding/gap are changed instantly.
                </p>
            }>
                <DemoSpacersLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionGeneral title='Defining Spacers'>
                <p>
                    There are 8 pre-defined spacer properties:<br />
                    {
                        ['none', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'default']
                        .flatMap((spacer, index, themes) => [
                            <code key={spacer}>{ spacer }</code>,
                            (index < (themes.length - 1)) ? ', ' : null
                        ])
                    }
                </p>
                <p>
                    You can <em>add</em> or <em>modify</em> the <strong>pre-defined spacer properties</strong> <em>but</em> we advice <em>not to delete</em> them.
                </p>
                <p>
                    Here the code for <em>adding</em> a new spacer property or <em>modifying</em> the existing ones: 
                </p>
                <TypeScriptCode>{`
import { spacers } from '@nodestrap/spacers'

spacers.md = '1.5rem'; // set the spacer of \`md\` to 1.5 rem
spacers.xxl = '5rem'; // add a new property \`xxl\` as 5 rem
spacers.default = spacers.md; // set the default spacer to \`md\` (1.5 rem)
                `}</TypeScriptCode>
                <p>
                    For deleting a specific spacer property, just assign <code>null</code> or <code>undefined</code> to the desired property:
                </p>
                <TypeScriptCode>{`
import { spacers } from '@nodestrap/spacers'

spacers.xxl = null; // delete property \`xxl\`
                `}</TypeScriptCode>
            </SectionGeneral>
            <SectionGeneral title='Consuming (getting) the Spacers'>
                <p>
                    Let&apos; say you want to make a custom component and need to get some spacers in <CurrentComponent /> for spacing consistency.
                    You can do like this:
                </p>
                <TypeScriptCode>{`
import { spacers } from '@nodestrap/spacers'

export default function MyComponent(props) {
    return (
        <div style={{
            padding : spacers.default,
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
import { spacers } from '@nodestrap/spacers'

const useMySheet = createUseSheet(() => [
    compositionOf('myClass1',
        style({
            padding : spacers.default,
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
            <SectionGeneral title='Where the Spacers are Actually Stored?'>
                <p>
                    Well, the spacers are stored internally in <CurrentComponent /> and dynamically copied into the browser&apos;s <code>:root</code> by default.
                    Here the actual code you can find on browser&apos;s page inspector:
                </p>
                <CssCode>{`
:root {
    --spc-none: 0px;
    --spc-md: 1rem;
    --spc-default: var(--spc-md);
    --spc-xxs: calc( var(--spc-md) / 8 );
    --spc-xs: calc( var(--spc-md) / 4 );
    --spc-sm: calc( var(--spc-md) / 2 );
    --spc-lg: calc( var(--spc-md) * 1.5 );
    --spc-xl: calc( var(--spc-md) * 3 );
}
                `}</CssCode>
                <p>
                    Btw, you <strong>should not</strong> modify our <code>css variables</code> directly!
                    Otherwise any changes you&apos;ve made will be swapped out.
                    Instead use <strong>our API</strong> in the <CurrentComponent /> to get/set/modify the spacers.
                    Like this:
                </p>
                <TypeScriptCode>{`
import { spacers, cssDecls as spacerDecls, cssVals as spacerVals } from '@nodestrap/spacers'

spacers.md = '1.5rem'; // set the --spc-md in the :root

const valueByRef = spacers.md; // get the value of --spc-md in the :root
console.log(valueByRef); // var(--spc-md)

const declaration = spacerDecls.md; // get the css property name of --spc-md in the :root
console.log(declaration); // --spc-md

const valueByVal = spacerVals.md; // get the value of --spc-md in the :root
console.log(valueByVal); // 1.5rem
                `}</TypeScriptCode>
                <p>
                    And you should modify the spacers <em>as soon as possible</em>, usually <strong>after</strong> the <code>import</code> statement.
                    Most the Nodestrap components build the dynamic css at the first render and <strong>cached it</strong> for re-use.
                    So any changes after already cached will not be affected.
                </p>
            </SectionGeneral>
        </ComponentInfoProvider>
    );
}

export default Page
