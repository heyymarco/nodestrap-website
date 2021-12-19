import type { NextPage } from 'next'
import Head from 'next/head'
import React, {  } from 'react'
import { Main } from '../../../components/Main'
import { Section } from '../../../components/Section'
import { TypeScriptCode } from '../../../components/Code'
import { SpecList, DetailSpecItem } from '../../../components/SpecList'


const StripoutsPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Stripouts Utility</title>
                <meta name="description" content="Using `stripouts` utility" />
            </Head>

            <Main>
                <Section>
                    <article>
                        <h1>Stripouts Utility</h1>
                        <p>
                            <code>@nodestrap/stripouts</code> is a utility for resetting browser default style to an unstyled element.
                        </p>
                        <p>
                            The default styles in <code>&lt;button&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, etc are great,<br />
                            but in some cases we need to <em>un-style</em> them as something like an unstyled <code>&lt;div&gt;</code>.
                        </p>
                        <p>
                            Once we&apos;ve <em>un-styled</em> them, we can override ones with <em>own styles</em> without worrying about inconsistency across browsers.
                        </p>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h1>List of Strippable Elements</h1>
                        <SpecList>
                            <DetailSpecItem code='stripoutLink()' excerpt='Removes browser&apos;s default style on link (anchor)'>
                                <p>example:</p>
                                <TypeScriptCode>{`
import { stripoutLink } from '@nodestrap/stripouts'
import { mainComposition, imports, layout, rules, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'

const useAwesomeLinkSheet = createUseSheet(() => [
    mainComposition([
        imports([
            stripoutLink(),
        ]),
        layout({
            display : 'inline',
            color   : 'red',
        }),
        rules([
            rule([':hover', ':active'], [
                layout({
                    color: 'darkred',
                }),
            ]),
        ]),
    ])
]);

export default function AwesomeLink(props) {
    const sheet = useAwesomeLinkSheet();
    return (
        <a className={sheet.main} {...props}>
            { props.children }
        </a>
    );
}
                                `}</TypeScriptCode>
                            </DetailSpecItem>
                            <DetailSpecItem code='stripoutControl()' excerpt='Removes browser&apos;s default style on control (button, checkbox, etc)'>
                                <p>example:</p>
                                <TypeScriptCode>{`
import { stripoutControl } from '@nodestrap/stripouts'
import { mainComposition, imports, layout, rules, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'

const useAwesomeCheckboxSheet = createUseSheet(() => [
    mainComposition([
        imports([
            stripoutControl(),
        ]),
        layout({
            display    : 'inline-block',
            width      : '30px',
            height     : '30px',
            background : 'lightblue',
        }),
        rules([
            rule(':checked', [
                layout({
                    background : 'darkblue',
                }),
            ]),
        ]),
    ])
]);

export default function AwesomeCheckbox(props) {
    const sheet = useAwesomeCheckboxSheet();
    return (
        <input type='checkbox' className={sheet.main} {...props} />
    );
}
                                `}</TypeScriptCode>
                            </DetailSpecItem>
                            <DetailSpecItem code='stripoutTextbox()' excerpt='Removes browser&apos;s default style on textbox (input type=&apos;text|email|search|etc&apos;)'>
                                <p>example:</p>
                                <TypeScriptCode>{`
import { stripoutTextbox } from '@nodestrap/stripouts'
import { mainComposition, imports, layout, rules, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'

const useAwesomeTextboxSheet = createUseSheet(() => [
    mainComposition([
        imports([
            stripoutTextbox(),
        ]),
        layout({
            display    : 'inline-block',
            width      : '200px',
            height     : '30px',
            background : 'lightblue',
            textAlign  : 'left',
        }),
        rules([
            rule([':hover', ':focus'], [
                layout({
                    background : 'skyblue',
                }),
            ]),
        ]),
    ])
]);

export default function AwesomeTextbox(props) {
    const sheet = useAwesomeTextboxSheet();
    return (
        <input type='text' className={sheet.main} {...props} />
    );
}
                                `}</TypeScriptCode>
                            </DetailSpecItem>
                            <DetailSpecItem code='stripoutRange()' excerpt='Removes browser&apos;s default style on range (input type=&apos;range&apos;)'>
                                <p>example:</p>
                                <TypeScriptCode>{`
import { stripoutRange } from '@nodestrap/stripouts'
import { mainComposition, imports, layout, children, rules, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'

const useAwesomeRangeSheet = createUseSheet(() => [
    mainComposition([
        imports([
            stripoutRange(),
        ]),
        layout({
            display    : 'inline-block',
            width      : '200px',
            height     : '30px',
            background : 'lightblue',

            ...children(['::-webkit-slider-thumb', '::-moz-range-thumb', '::-ms-thumb'], [
                layout({
                    display    : 'block',
                    width      : '25px',
                    height     : '25px',
                    background : 'darkblue',
                }),
            ], { groupSelectors: false }), // any invalid selector does not cause the whole selectors to fail
        }),
        rules([
            rule([':hover', ':focus'], [
                layout({
                    background : 'skyblue',
                }),
            ]),
        ]),
    ])
]);

export default function AwesomeRange(props) {
    const sheet = useAwesomeRangeSheet();
    return (
        <input type='range' className={sheet.main} {...props} />
    );
}
                                `}</TypeScriptCode>
                            </DetailSpecItem>
                            <DetailSpecItem code='stripoutList()' excerpt='Removes browser&apos;s default style on list (ul &amp; ol)'>
                                <p>example:</p>
                                <TypeScriptCode>{`
import React from 'react'
import { stripoutList } from '@nodestrap/stripouts'
import { mainComposition, imports, layout, children } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'

const useAwesomeListSheet = createUseSheet(() => [
    mainComposition([
        imports([
            stripoutList(),
        ]),
        layout({
            display     : 'block',
            background  : 'lightblue',
            paddingLeft : '30px',

            ...children('li', [
                layout({
                    display    : 'block',
                    border     : [['solid', '1px', 'darkblue']],
                }),
            ]),
        }),
    ])
]);

export default function AwesomeList(props) {
    const sheet = useAwesomeListSheet();
    return (
        <ul className={sheet.main} {...props}>
            { React.Children.map(props.children, (child) => <li>{ child }</li>) }
        </ul>
    );
}
                                `}</TypeScriptCode>
                            </DetailSpecItem>
                            <DetailSpecItem code='stripoutFigure()' excerpt='Removes browser&apos;s default style on figure'>
                                <p>example:</p>
                                <TypeScriptCode>{`
import { stripoutFigure } from '@nodestrap/stripouts'
import { mainComposition, imports, layout } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'

const useAwesomeFigureSheet = createUseSheet(() => [
    mainComposition([
        imports([
            stripoutFigure(),
        ]),
        layout({
            display    : 'block',
            background : 'lightblue',
            border     : [['solid', '1px', 'darkblue']],
            padding    : '10px',
        }),
    ])
]);

export default function AwesomeFigure(props) {
    const sheet = useAwesomeFigureSheet();
    return (
        <figure className={sheet.main} {...props}>
            { props.children }
        </figure>
    );
}
                                `}</TypeScriptCode>
                            </DetailSpecItem>
                            <DetailSpecItem code='stripoutFocusableElement()' excerpt='Removes browser&apos;s default style on focus indicator on any focusable elements'>
                                <p>example:</p>
                                <TypeScriptCode>{`
import { stripoutFocusableElement } from '@nodestrap/stripouts'
import { mainComposition, imports, layout, rules, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'

const useAwesomeElementSheet = createUseSheet(() => [
    mainComposition([
        imports([
            stripoutFocusableElement(),
        ]),
        layout({
            display    : 'inline-block',
            width      : '100px',
            height     : '50px',
            background : 'lightblue',
        }),
        rules([
            rule(':focus', [
                layout({
                    background : 'darkblue',
                }),
            ]),
        ]),
    ])
]);

export default function AwesomeElement(props) {
    const sheet = useAwesomeElementSheet();
    return (
        <div tabIndex={0} className={sheet.main} {...props}>
            { props.children }
        </div>
    );
}
                                `}</TypeScriptCode>
                            </DetailSpecItem>
                            <DetailSpecItem code='stripoutScrollbar()' excerpt='Removes browser&apos;s scrollbar on any scrollable element'>
                                <p>example:</p>
                                <TypeScriptCode>{`
import { stripoutScrollbar } from '@nodestrap/stripouts'
import { mainComposition, imports, layout } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'

const useAwesomeContainerSheet = createUseSheet(() => [
    mainComposition([
        imports([
            stripoutScrollbar(),
        ]),
        layout({
            display    : 'inline-block',
            width      : '500px',
            height     : '300px',
            background : 'lightblue',
            overflow   : 'scroll',
        }),
    ])
]);

export default function AwesomeContainer(props) {
    const sheet = useAwesomeContainerSheet();
    return (
        <div tabIndex={0} className={sheet.main} {...props}>
            { props.children }
        </div>
    );
}
                                `}</TypeScriptCode>
                            </DetailSpecItem>
                            <DetailSpecItem code='stripoutImage()' excerpt='Removes browser&apos;s default style on image (img)'>
                                <p>example:</p>
                                <TypeScriptCode>{`
import { stripoutImage } from '@nodestrap/stripouts'
import { mainComposition, imports, layout } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'

const useAwesomeImageSheet = createUseSheet(() => [
    mainComposition([
        imports([
            stripoutImage(),
        ]),
        layout({
            display : 'inline-block',
            width   : '100px',
            height  : '100px',
            border  : [['solid', '1px', 'darkblue']],
        }),
    ])
]);

export default function AwesomeImage(props) {
    const sheet = useAwesomeImageSheet();
    return (
        <img className={sheet.main} {...props} />
    );
}
                                `}</TypeScriptCode>
                            </DetailSpecItem>
                        </SpecList>
                    </article>
                </Section>
            </Main>
        </>
    )
}

export default StripoutsPage
