import React, { useRef } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

// cssfn:
import {
    // compositions:
    compositionOf,
    
    
    
    // styles:
    style,
    
    
    
    // rules:
    rule,
    
    
    
    // combinators:
    children,
    descendants,
}                           from '@cssfn/cssfn'       // cssfn core
import {
    // hooks:
    createUseSheet,
}                           from '@cssfn/react-cssfn' // cssfn for react

import { useFlipFlop } from '../../../components/hooks'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkNavscrollPage, LinkNavPage, SectionOverridingDefaults, ComponentInfoProvider, SectionDerivering, SectionCustomizingParent, SectionIntro, SectionDemo, BusyBar, LinkNavscrollItemPage, SectionVariants, SectionStates, LinkNavscrollSeparatorItemPage, SectionPreviewProperty, CurrentDominantBaseComponent, ParagraphLorem } from '../../../components/common'
import { Navscroll, NavscrollItem, NavscrollSeparatorItem, OrientationName } from '@nodestrap/navscroll'
import { TypeScriptCode } from '../../../components/Code'
import ResponsiveProvider from '@nodestrap/responsive'
import { Tips } from '../../../components/Info'
import Element from '@nodestrap/element'
import {
    SectionPropertyTheme,
    SectionPropertySize,
    SectionPropertyGradient,
    SectionPropertyOutlined,
    SectionPropertyOrientation,
    SectionPropertyOrientationBlock,
    SectionPropertyOrientationInline,
    SectionPropertyOrientationResponsive,
} from '../../../components/common@Basic'
import {
    SectionPropertyActiveNoOutlined,
    SectionPropertyActiveNoMild,
    SectionPropertyEnabled,
} from '../../../components/common@Indicator'
import {
    SectionPropertyNude,
    SectionPropertyMild,
    SectionPropertyListStyle,
    SectionPropertyFlatStyle,
    SectionPropertyFlushStyle,
    SectionPropertyJoinedStyle,
    SectionPropertyContentStyle,
    SectionPropertyBtnStyle,
    SectionPropertyTabStyle,
    SectionPropertyBreadcrumbStyle,
    SectionPropertyBulletStyle,
    SectionPropertyNumberedStyle,
} from '../../../components/common@List'
import {
    SectionPropertyActive,
    
    SectionPropertyChildren,
    SectionPropertyNestedChildren,
    SectionPropertyTargetSelector,
    SectionPropertyTargetFilter,
    SectionPropertyTargetRef,
    SectionPropertyMultipleTargetRef,
    
    SectionPropertyInterpolation,
} from '../../../components/common@Navscroll'

import loadable from '@loadable/component'
const DemoNavscrollLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Navscroll' */'../../../components/DemoPanel@Navscroll'))



const useDummyArticleSheet = createUseSheet(() => [
    compositionOf('dummyArticle',
        style({
            border: 'solid 1px black',
            background : 'hsl(200, 90%, 75%)',
            
            
            ...children(['&', 'section:nth-of-type(4)'], {
                display       : 'flex',
                flexDirection : 'column',
                gap           : 0,
                overflowY     : 'auto',
                
                padding       : '10px',

                ...children('section', {
                    flex      : [[0, 0, 'auto']],
                    padding   : '10px',
                }),
            }),
            height            : '250px',
            ...children('section:nth-of-type(4)', {
                height        : '200px',
            }),
            
            
            ...children('section', {
                ...rule(':nth-of-type(3n+1)', {
                    background : 'hsl(350, 90%, 75%)',
                }),
                ...rule(':nth-of-type(3n+2)', {
                    background : 'hsl(120, 90%, 75%)',
                }),
                ...rule(':nth-of-type(3n+3)', {
                    background : 'hsl(39, 90%, 75%)',
                }),
                ...rule(':nth-of-type(4)', {
                    ...children('section', {
                        ...rule(':nth-of-type(3n+1)', {
                            background : 'hsl(084, 90%, 75%)',
                        }),
                        ...rule(':nth-of-type(3n+2)', {
                            background : 'hsl(260, 90%, 75%)',
                        }),
                        ...rule(':nth-of-type(3n+3)', {
                            background : 'hsl(028, 90%, 75%)',
                        }),
                    }),
                }),
            }),
            
            
            ...descendants('section', {
                overflow: 'hidden',
            }),
            ...descendants(['h1', 'h2'], {
                textAlign: 'center',
            }),
            ...descendants('h1', {
                fontSize: '1.25rem',
            }),
            ...descendants('h2', {
                fontSize: '1rem',
            }),
            ...descendants('p', {
                fontSize: '0.5rem',
                textOverflow: 'ellipsis'
            }),
            
            
            ...children('section:nth-of-type(1)', {
                height : '80px',
            }),
            ...children('section:nth-of-type(2)', {
                height : '200px',
            }),
            ...children('section:nth-of-type(3)', {
                height : '400px',
            }),
            ...children('section:nth-of-type(4)', {
                ...children('section:nth-of-type(1)', {
                    height: '200px',
                }),
                ...children('section:nth-of-type(2)', {
                    height: '100px',
                }),
                ...children('section:nth-of-type(3)', {
                    height: '150px',
                }),
                ...children('section:nth-of-type(4)', {
                    height: '100px',
                }),
            }),
            ...children('section:nth-of-type(5)', {
                height : '300px',
            }),
            ...children('section:nth-of-type(6)', {
                height : '100px',
            }),
        }),
    ),
    compositionOf('container',
        style({
            display             : 'grid',
            gridTemplateColumns : [['minmax(min-content, 3fr)', 'minmax(min-content, 2fr)']],
            gridTemplateRows    : [['1fr', 'min-content']],
            gridTemplateAreas   : [[
                '"nav-1 dummy-article"',
                '"nav-1    nav-2     "',
            ]],
            gap                 : '1rem',
            alignItems          : 'center',
            overflow            : 'auto',
            
            ...children('.nav-1', {
                gridArea    : 'nav-1',
            }),
            ...children('.nav-2', {
                gridArea    : 'nav-2',
                justifySelf : 'center',
            }),
            ...children('.dummy-article', { 
                gridArea    : 'dummy-article',
            }),
        }),
    ),
    compositionOf('split2columns',
        style({
            display             : 'grid',
            gridTemplateColumns : [['1fr', '1fr']],
            gridTemplateRows    : [['min-content', '1fr']],
            gridAutoFlow        : 'column',
            columnGap           : '1rem',
            rowGap              : '0.25rem',
            
            ...children('code', {
                textAlign: 'center',
            }),
        }),
    ),
], /*sheetId :*/'2jq3megb8r'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names



const NavscrollWithActiveOutlined = () => {
    const [navscrollRef, isActive] = useFlipFlop({ defaultState: true });
    
    
    
    const activeLabel = <Element tag={isActive ? 'span' : 'del'}>active</Element>
    return (
        <Navscroll elmRef={navscrollRef} outlined={true} theme='primary'>
            <NavscrollItem>
                A first item
            </NavscrollItem>
            <NavscrollItem>
                A second item
            </NavscrollItem>
            <NavscrollItem active={isActive}>
                A third item ({ activeLabel })
            </NavscrollItem>
            <NavscrollItem active={isActive} actionCtrl={false}>
                A fourth item ({ activeLabel } + not clickable)
            </NavscrollItem>
            <NavscrollItem active={isActive} enabled={false}>
                A fifth item item ({ activeLabel } + disabled)
            </NavscrollItem>
        </Navscroll>
    );
};
const NavscrollWithActiveMild     = () => {
    const [navscrollRef, isActive] = useFlipFlop({ defaultState: true });
    
    
    
    const activeLabel = <Element tag={isActive ? 'span' : 'del'}>active</Element>
    return (
        <Navscroll elmRef={navscrollRef} mild={true} theme='primary'>
            <NavscrollItem>
                A first item
            </NavscrollItem>
            <NavscrollItem>
                A second item
            </NavscrollItem>
            <NavscrollItem active={isActive}>
                A third item ({ activeLabel })
            </NavscrollItem>
            <NavscrollItem active={isActive} actionCtrl={false}>
                A fourth item ({ activeLabel } + not clickable)
            </NavscrollItem>
            <NavscrollItem active={isActive} enabled={false}>
                A fifth item item ({ activeLabel } + disabled)
            </NavscrollItem>
        </Navscroll>
    );
};



const Page: NextPage = () => {
    const articleSheet = useDummyArticleSheet();
    const scrollableContainerRef  = useRef<HTMLElement>(null);
    const scrollableContainerRef2 = useRef<HTMLElement>(null);
    const scrollableContainerRef3 = useRef<HTMLElement>(null);
    const scrollableContainerRef4 = useRef<HTMLElement>(null);
    const scrollableContainerRef5 = useRef<HTMLElement>(null);
    
    
    
    return (
        <ComponentInfoProvider packageName='@nodestrap/navscroll' component={<LinkNavscrollPage />} nestedComponent={<LinkNavscrollItemPage />} bases={<LinkNavPage />}>
            <Head>
                <title>&lt;Navscroll&gt; Component</title>
                <meta name="description" content="Using <Navscroll> component" />
            </Head>

            <SectionIntro>
                <p>
                    Displays a series of navigation link for a <em>scrollable container</em>.
                </p>
                <p>
                    Similar to <CurrentDominantBaseComponent /> but for <u>navigating sections within a scrollable container</u> (usually a page).
                </p>
                <p>
                    Here the preview:
                </p>
                <Preview>
                    <div className={articleSheet.container}>
                        <article
                            ref={scrollableContainerRef}
                            
                            className={`${articleSheet.dummyArticle} dummy-article`}
                        >
                            <section>
                                <h1>First section</h1>
                                <ParagraphLorem words={10} />
                            </section>
                            <section>
                                <h1>Second section</h1>
                                <ParagraphLorem words={10} />
                                <ParagraphLorem words={10} />
                                <ParagraphLorem words={10} />
                            </section>
                            <section>
                                <h1>Third section</h1>
                                <ParagraphLorem words={10} />
                                <ParagraphLorem words={10} />
                                <ParagraphLorem words={10} />
                            </section>
                            <section>
                                <h1>Fourth section</h1>
                                <ParagraphLorem words={10} />
                                <section>
                                    <h2>Fourth sub section 1</h2>
                                    <ParagraphLorem words={10} />
                                </section>
                                <section>
                                   <h2> Fourth sub section 2</h2>
                                    <ParagraphLorem words={10} />
                                </section>
                                <section>
                                    <h2>Fourth sub section 3</h2>
                                    <ParagraphLorem words={10} />
                                </section>
                                <section>
                                    <h2>Fourth sub section 4</h2>
                                    <ParagraphLorem words={10} />
                                </section>
                            </section>
                            <section>
                                <h1>Fifth section</h1>
                                <ParagraphLorem words={10} />
                                <ParagraphLorem words={10} />
                                <ParagraphLorem words={10} />
                            </section>
                            <section>
                                <h1>Last section</h1>
                                <ParagraphLorem words={10} />
                            </section>
                        </article>
                        <Navscroll
                            targetRef={scrollableContainerRef}
                            targetSelector='section'
                            theme='primary'
                            
                            classes={['nav-1']}
                        >
                            <NavscrollItem>
                                First section
                            </NavscrollItem>
                            <NavscrollItem>
                                Second section
                            </NavscrollItem>
                            <NavscrollItem>
                                Third section
                            </NavscrollItem>
                            <NavscrollItem>
                                Fourth section
                                <Navscroll>
                                    <NavscrollItem>
                                        Sub 4-1
                                    </NavscrollItem>
                                    <NavscrollItem>
                                        Sub 4-2
                                    </NavscrollItem>
                                    <NavscrollItem>
                                        Sub 4-3
                                    </NavscrollItem>
                                    <NavscrollItem>
                                        Sub 4-4
                                    </NavscrollItem>
                                </Navscroll>
                            </NavscrollItem>
                            <NavscrollItem>
                                Fifth section
                            </NavscrollItem>
                            <NavscrollItem>
                                Last section
                            </NavscrollItem>
                        </Navscroll>
                        <Navscroll
                            targetRef={scrollableContainerRef}
                            targetSelector='section'
                            theme='primary'
                            
                            orientation='inline'
                            listStyle='bullet'
                            classes={['nav-2']}
                        >
                            <NavscrollItem />
                            <NavscrollItem />
                            <NavscrollItem />
                            <NavscrollItem>
                                <Navscroll>
                                    <NavscrollItem />
                                    <NavscrollItem />
                                    <NavscrollItem />
                                    <NavscrollItem />
                                </Navscroll>
                            </NavscrollItem>
                            <NavscrollItem />
                            <NavscrollItem />
                        </Navscroll>
                    </div>
                </Preview>
                <p>
                    The <strong>highlighted item</strong> above is <strong>automatically highlighted</strong> based on the visibility of the <strong>related sections</strong> on the right panel.<br />
                    See the code below:
                </p>
                <TypeScriptCode>{`
const scrollableContainerRef = useRef(null);

/* ... */

<article
    ref={scrollableContainerRef}
>
    <section>
        <h1>First section</h1>
    </section>
    <section>
        <h1>Second section</h1>
    </section>
    <section>
        <h1>Third section</h1>
    </section>
    <section>
        <h1>Fourth section</h1>
        <section>
            <h2>Fourth sub section 1</h2>
        </section>
        <section>
            <h2> Fourth sub section 2</h2>
        </section>
        <section>
            <h2>Fourth sub section 3</h2>
        </section>
        <section>
            <h2>Fourth sub section 4</h2>
        </section>
    </section>
    <section>
        <h1>Fifth section</h1>
    </section>
    <section>
        <h1>Last section</h1>
    </section>
</article>

/* ... */

<Navscroll
    targetRef={scrollableContainerRef}
    targetSelector='section'
    theme='primary'
>
    <NavscrollItem>
        First section
    </NavscrollItem>
    <NavscrollItem>
        Second section
    </NavscrollItem>
    <NavscrollItem>
        Third section
    </NavscrollItem>
    <NavscrollItem>
        Fourth section
        <Navscroll>
            <NavscrollItem>
                Sub 4-1
            </NavscrollItem>
            <NavscrollItem>
                Sub 4-2
            </NavscrollItem>
            <NavscrollItem>
                Sub 4-3
            </NavscrollItem>
            <NavscrollItem>
                Sub 4-4
            </NavscrollItem>
        </Navscroll>
    </NavscrollItem>
    <NavscrollItem>
        Fifth section
    </NavscrollItem>
    <NavscrollItem>
        Last section
    </NavscrollItem>
</Navscroll>
                `}</TypeScriptCode>
            </SectionIntro>
            <SectionDemo>
                <DemoNavscrollLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionPropertyChildren>
                <Preview>
                    <div className={articleSheet.container} style={{ rowGap: 0 }}>
                        <article
                            ref={scrollableContainerRef2}
                            
                            className={`${articleSheet.dummyArticle} dummy-article`}
                        >
                            <section>
                                <h1>First section</h1>
                                <ParagraphLorem words={10} />
                            </section>
                            <section>
                                <h1>Second section</h1>
                                <ParagraphLorem words={10} />
                                <ParagraphLorem words={10} />
                                <ParagraphLorem words={10} />
                            </section>
                            <section>
                                <h1>Third section</h1>
                                <ParagraphLorem words={10} />
                                <ParagraphLorem words={10} />
                                <ParagraphLorem words={10} />
                            </section>
                            <section>
                                <h1>Fourth section</h1>
                                <ParagraphLorem words={10} />
                            </section>
                            <section>
                                <h1>Fifth section</h1>
                                <ParagraphLorem words={10} />
                                <ParagraphLorem words={10} />
                                <ParagraphLorem words={10} />
                            </section>
                            <section>
                                <h1>Last section</h1>
                                <ParagraphLorem words={10} />
                            </section>
                        </article>
                        <Navscroll
                            targetRef={scrollableContainerRef2}
                            targetSelector='section'
                            theme='primary'
                            
                            classes={['nav-1']}
                        >
                            <NavscrollItem>
                                First section
                            </NavscrollItem>
                            <NavscrollItem>
                                Second section
                            </NavscrollItem>
                            <NavscrollItem>
                                Third section
                            </NavscrollItem>
                            <NavscrollItem>
                                Fourth section
                            </NavscrollItem>
                            <NavscrollItem>
                                Fifth section
                            </NavscrollItem>
                            <NavscrollItem>
                                Last section
                            </NavscrollItem>
                        </Navscroll>
                    </div>
                </Preview>
                <p></p>
                <TypeScriptCode>{`
<article>
    <section>
        <h1>First section</h1>
        <p>...</p>
    </section>
    <section>
        <h1>Second section</h1>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </section>
    <section>
        <h1>Third section</h1>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </section>
    <section>
        <h1>Fourth section</h1>
        <p>...</p>
    </section>
    <section>
        <h1>Fifth section</h1>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </section>
    <section>
        <h1>Last section</h1>
        <p>...</p>
    </section>
</article>

/* ... */

<Navscroll>
    <NavscrollItem>
        First section
    </NavscrollItem>
    <NavscrollItem>
        Second section
    </NavscrollItem>
    <NavscrollItem>
        Third section
    </NavscrollItem>
    <NavscrollItem>
        Fourth section
    </NavscrollItem>
    <NavscrollItem>
        Fifth section
    </NavscrollItem>
    <NavscrollItem>
        Last section
    </NavscrollItem>
</Navscroll>
                `}</TypeScriptCode>
                <SectionPropertyNestedChildren>
                    <Preview>
                        <div className={articleSheet.container} style={{ rowGap: 0 }}>
                            <article
                                ref={scrollableContainerRef3}
                                
                                className={`${articleSheet.dummyArticle} dummy-article`}
                            >
                                <section>
                                    <h1>First section</h1>
                                    <ParagraphLorem words={10} />
                                </section>
                                <section>
                                    <h1>Second section</h1>
                                    <ParagraphLorem words={10} />
                                    <ParagraphLorem words={10} />
                                    <ParagraphLorem words={10} />
                                </section>
                                <section>
                                    <h1>Third section</h1>
                                    <ParagraphLorem words={10} />
                                    <ParagraphLorem words={10} />
                                    <ParagraphLorem words={10} />
                                </section>
                                <section>
                                    <h1>Fourth section</h1>
                                    <ParagraphLorem words={10} />
                                    <section>
                                        <h2>Fourth sub section 1</h2>
                                        <ParagraphLorem words={10} />
                                    </section>
                                    <section>
                                    <h2> Fourth sub section 2</h2>
                                        <ParagraphLorem words={10} />
                                    </section>
                                    <section>
                                        <h2>Fourth sub section 3</h2>
                                        <ParagraphLorem words={10} />
                                    </section>
                                    <section>
                                        <h2>Fourth sub section 4</h2>
                                        <ParagraphLorem words={10} />
                                    </section>
                                </section>
                                <section>
                                    <h1>Fifth section</h1>
                                    <ParagraphLorem words={10} />
                                    <ParagraphLorem words={10} />
                                    <ParagraphLorem words={10} />
                                </section>
                                <section>
                                    <h1>Last section</h1>
                                    <ParagraphLorem words={10} />
                                </section>
                            </article>
                            <Navscroll
                                targetRef={scrollableContainerRef3}
                                targetSelector='section'
                                theme='primary'
                                
                                classes={['nav-1']}
                            >
                                <NavscrollItem>
                                    First section
                                </NavscrollItem>
                                <NavscrollItem>
                                    Second section
                                </NavscrollItem>
                                <NavscrollItem>
                                    Third section
                                </NavscrollItem>
                                <NavscrollItem>
                                    Fourth section
                                    <Navscroll>
                                        <NavscrollItem>
                                            Sub 4-1
                                        </NavscrollItem>
                                        <NavscrollItem>
                                            Sub 4-2
                                        </NavscrollItem>
                                        <NavscrollItem>
                                            Sub 4-3
                                        </NavscrollItem>
                                        <NavscrollItem>
                                            Sub 4-4
                                        </NavscrollItem>
                                    </Navscroll>
                                </NavscrollItem>
                                <NavscrollItem>
                                    Fifth section
                                </NavscrollItem>
                                <NavscrollItem>
                                    Last section
                                </NavscrollItem>
                            </Navscroll>
                        </div>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<article>
    <section>
        <h1>First section</h1>
        <p>...</p>
    </section>
    <section>
        <h1>Second section</h1>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </section>
    <section>
        <h1>Third section</h1>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </section>
    <section>
        <h1>Fourth section</h1>
        <p>...</p>
        <section>
            <h2>Fourth sub section 1</h2>
            <p>...</p>
        </section>
        <section>
        <h2> Fourth sub section 2</h2>
            <p>...</p>
        </section>
        <section>
            <h2>Fourth sub section 3</h2>
            <p>...</p>
        </section>
        <section>
            <h2>Fourth sub section 4</h2>
            <p>...</p>
        </section>
    </section>
    <section>
        <h1>Fifth section</h1>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </section>
    <section>
        <h1>Last section</h1>
        <p>...</p>
    </section>
</article>

/* ... */

<Navscroll>
    <NavscrollItem>
        First section
    </NavscrollItem>
    <NavscrollItem>
        Second section
    </NavscrollItem>
    <NavscrollItem>
        Third section
    </NavscrollItem>
    <NavscrollItem>
        Fourth section
        <Navscroll>
            <NavscrollItem>
                Sub 4-1
            </NavscrollItem>
            <NavscrollItem>
                Sub 4-2
            </NavscrollItem>
            <NavscrollItem>
                Sub 4-3
            </NavscrollItem>
            <NavscrollItem>
                Sub 4-4
            </NavscrollItem>
        </Navscroll>
    </NavscrollItem>
    <NavscrollItem>
        Fifth section
    </NavscrollItem>
    <NavscrollItem>
        Last section
    </NavscrollItem>
</Navscroll>
                    `}</TypeScriptCode>
                </SectionPropertyNestedChildren>
                <SectionPropertyTargetSelector>
                    <SectionPropertyTargetFilter />
                </SectionPropertyTargetSelector>
                <SectionPropertyTargetRef>
                    <SectionPropertyMultipleTargetRef>
                        <Preview>
                            <div className={articleSheet.container}>
                                <article
                                    ref={scrollableContainerRef4}
                                    
                                    className={`${articleSheet.dummyArticle} dummy-article`}
                                >
                                    <section>
                                        <h1>First section</h1>
                                        <ParagraphLorem words={10} />
                                    </section>
                                    <section>
                                        <h1>Second section</h1>
                                        <ParagraphLorem words={10} />
                                        <ParagraphLorem words={10} />
                                        <ParagraphLorem words={10} />
                                    </section>
                                    <section>
                                        <h1>Third section</h1>
                                        <ParagraphLorem words={10} />
                                        <ParagraphLorem words={10} />
                                        <ParagraphLorem words={10} />
                                    </section>
                                    <section>
                                        <h1>Fourth section</h1>
                                        <ParagraphLorem words={10} />
                                        <section>
                                            <h2>Fourth sub section 1</h2>
                                            <ParagraphLorem words={10} />
                                        </section>
                                        <section>
                                        <h2> Fourth sub section 2</h2>
                                            <ParagraphLorem words={10} />
                                        </section>
                                        <section>
                                            <h2>Fourth sub section 3</h2>
                                            <ParagraphLorem words={10} />
                                        </section>
                                        <section>
                                            <h2>Fourth sub section 4</h2>
                                            <ParagraphLorem words={10} />
                                        </section>
                                    </section>
                                    <section>
                                        <h1>Fifth section</h1>
                                        <ParagraphLorem words={10} />
                                        <ParagraphLorem words={10} />
                                        <ParagraphLorem words={10} />
                                    </section>
                                    <section>
                                        <h1>Last section</h1>
                                        <ParagraphLorem words={10} />
                                    </section>
                                </article>
                                <Navscroll
                                    targetRef={scrollableContainerRef4}
                                    targetSelector='section'
                                    theme='primary'
                                    
                                    classes={['nav-1']}
                                >
                                    <NavscrollItem>
                                        First section
                                    </NavscrollItem>
                                    <NavscrollItem>
                                        Second section
                                    </NavscrollItem>
                                    <NavscrollItem>
                                        Third section
                                    </NavscrollItem>
                                    <NavscrollItem>
                                        Fourth section
                                        <Navscroll>
                                            <NavscrollItem>
                                                Sub 4-1
                                            </NavscrollItem>
                                            <NavscrollItem>
                                                Sub 4-2
                                            </NavscrollItem>
                                            <NavscrollItem>
                                                Sub 4-3
                                            </NavscrollItem>
                                            <NavscrollItem>
                                                Sub 4-4
                                            </NavscrollItem>
                                        </Navscroll>
                                    </NavscrollItem>
                                    <NavscrollItem>
                                        Fifth section
                                    </NavscrollItem>
                                    <NavscrollItem>
                                        Last section
                                    </NavscrollItem>
                                </Navscroll>
                                <Navscroll
                                    targetRef={scrollableContainerRef4}
                                    targetSelector='section'
                                    theme='primary'
                                    
                                    orientation='inline'
                                    listStyle='bullet'
                                    classes={['nav-2']}
                                >
                                    <NavscrollItem />
                                    <NavscrollItem />
                                    <NavscrollItem />
                                    <NavscrollItem>
                                        <Navscroll>
                                            <NavscrollItem />
                                            <NavscrollItem />
                                            <NavscrollItem />
                                            <NavscrollItem />
                                        </Navscroll>
                                    </NavscrollItem>
                                    <NavscrollItem />
                                    <NavscrollItem />
                                </Navscroll>
                            </div>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
const scrollableContainerRef = useRef(null);

/* ... */

<article
    ref={scrollableContainerRef}
>
    <section>
        <h1>First section</h1>
        <p>...</p>
    </section>
    <section>
        <h1>Second section</h1>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </section>
    <section>
        <h1>Third section</h1>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </section>
    <section>
        <h1>Fourth section</h1>
        <p>...</p>
        <section>
            <h2>Fourth sub section 1</h2>
            <p>...</p>
        </section>
        <section>
        <h2> Fourth sub section 2</h2>
            <p>...</p>
        </section>
        <section>
            <h2>Fourth sub section 3</h2>
            <p>...</p>
        </section>
        <section>
            <h2>Fourth sub section 4</h2>
            <p>...</p>
        </section>
    </section>
    <section>
        <h1>Fifth section</h1>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </section>
    <section>
        <h1>Last section</h1>
        <p>...</p>
    </section>
</article>

/* ... */

<Navscroll
    targetRef={scrollableContainerRef}
    targetSelector='section'
    theme='primary'
>
    <NavscrollItem>
        First section
    </NavscrollItem>
    <NavscrollItem>
        Second section
    </NavscrollItem>
    <NavscrollItem>
        Third section
    </NavscrollItem>
    <NavscrollItem>
        Fourth section
        <Navscroll>
            <NavscrollItem>
                Sub 4-1
            </NavscrollItem>
            <NavscrollItem>
                Sub 4-2
            </NavscrollItem>
            <NavscrollItem>
                Sub 4-3
            </NavscrollItem>
            <NavscrollItem>
                Sub 4-4
            </NavscrollItem>
        </Navscroll>
    </NavscrollItem>
    <NavscrollItem>
        Fifth section
    </NavscrollItem>
    <NavscrollItem>
        Last section
    </NavscrollItem>
</Navscroll>

/* ... */

<Navscroll
    targetRef={scrollableContainerRef}
    targetSelector='section'
    theme='primary'
    
    orientation='inline'
    listStyle='bullet'
>
    <NavscrollItem />
    <NavscrollItem />
    <NavscrollItem />
    <NavscrollItem>
        <Navscroll>
            <NavscrollItem />
            <NavscrollItem />
            <NavscrollItem />
            <NavscrollItem />
        </Navscroll>
    </NavscrollItem>
    <NavscrollItem />
    <NavscrollItem />
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyMultipleTargetRef>
                </SectionPropertyTargetRef>
            </SectionPropertyChildren>
            <SectionPropertyInterpolation>
                <Preview>
                    <div className={articleSheet.container} style={{ rowGap: 0 }}>
                        <article
                            ref={scrollableContainerRef5}
                            
                            className={`${articleSheet.dummyArticle} dummy-article`}
                        >
                            <section>
                                <h1>First section</h1>
                                <ParagraphLorem words={10} />
                            </section>
                            <section>
                                <h1>Second section</h1>
                                <ParagraphLorem words={10} />
                                <ParagraphLorem words={10} />
                                <ParagraphLorem words={10} />
                            </section>
                            <section>
                                <h1>Third section</h1>
                                <ParagraphLorem words={10} />
                                <ParagraphLorem words={10} />
                                <ParagraphLorem words={10} />
                            </section>
                            <section>
                                <h1>Fourth section</h1>
                                <ParagraphLorem words={10} />
                                <section>
                                    <h2>Fourth sub section 1</h2>
                                    <ParagraphLorem words={10} />
                                </section>
                                <section>
                                <h2> Fourth sub section 2</h2>
                                    <ParagraphLorem words={10} />
                                </section>
                                <section>
                                    <h2>Fourth sub section 3</h2>
                                    <ParagraphLorem words={10} />
                                </section>
                                <section>
                                    <h2>Fourth sub section 4</h2>
                                    <ParagraphLorem words={10} />
                                </section>
                            </section>
                            <section>
                                <h1>Fifth section</h1>
                                <ParagraphLorem words={10} />
                                <ParagraphLorem words={10} />
                                <ParagraphLorem words={10} />
                            </section>
                            <section>
                                <h1>Last section</h1>
                                <ParagraphLorem words={10} />
                            </section>
                        </article>
                        <div className={articleSheet.split2columns}>
                            <code>{`interpolation={true}`}</code>
                            <Navscroll
                                interpolation={true}
                                targetRef={scrollableContainerRef5}
                                targetSelector='section'
                                theme='primary'
                                size='sm'
                                
                                classes={['nav-1']}
                            >
                                <NavscrollItem>
                                    First section
                                </NavscrollItem>
                                <NavscrollItem>
                                    Second section
                                </NavscrollItem>
                                <NavscrollItem>
                                    Third section
                                </NavscrollItem>
                                <NavscrollItem>
                                    Fourth section
                                    <Navscroll>
                                        <NavscrollItem>
                                            Sub 4-1
                                        </NavscrollItem>
                                        <NavscrollItem>
                                            Sub 4-2
                                        </NavscrollItem>
                                        <NavscrollItem>
                                            Sub 4-3
                                        </NavscrollItem>
                                        <NavscrollItem>
                                            Sub 4-4
                                        </NavscrollItem>
                                    </Navscroll>
                                </NavscrollItem>
                                <NavscrollItem>
                                    Fifth section
                                </NavscrollItem>
                                <NavscrollItem>
                                    Last section
                                </NavscrollItem>
                            </Navscroll>
                            
                            <code>{`interpolation={false}`}</code>
                            <Navscroll
                                interpolation={false}
                                targetRef={scrollableContainerRef5}
                                targetSelector='section'
                                theme='primary'
                                size='sm'
                                
                                classes={['nav-1']}
                            >
                                <NavscrollItem>
                                    First section
                                </NavscrollItem>
                                <NavscrollItem>
                                    Second section
                                </NavscrollItem>
                                <NavscrollItem>
                                    Third section
                                </NavscrollItem>
                                <NavscrollItem>
                                    Fourth section
                                    <Navscroll>
                                        <NavscrollItem>
                                            Sub 4-1
                                        </NavscrollItem>
                                        <NavscrollItem>
                                            Sub 4-2
                                        </NavscrollItem>
                                        <NavscrollItem>
                                            Sub 4-3
                                        </NavscrollItem>
                                        <NavscrollItem>
                                            Sub 4-4
                                        </NavscrollItem>
                                    </Navscroll>
                                </NavscrollItem>
                                <NavscrollItem>
                                    Fifth section
                                </NavscrollItem>
                                <NavscrollItem>
                                    Last section
                                </NavscrollItem>
                            </Navscroll>
                        </div>
                    </div>
                </Preview>
                <p></p>
                <TypeScriptCode>{`
<Navscroll
    interpolation={true}
    targetRef={scrollableContainerRef}
    targetSelector='section'
>
    <NavscrollItem>
        First section
    </NavscrollItem>
    <NavscrollItem>
        Second section
    </NavscrollItem>
    <NavscrollItem>
        Third section
    </NavscrollItem>
    <NavscrollItem>
        Fourth section
        <Navscroll>
            <NavscrollItem>
                Sub 4-1
            </NavscrollItem>
            <NavscrollItem>
                Sub 4-2
            </NavscrollItem>
            <NavscrollItem>
                Sub 4-3
            </NavscrollItem>
            <NavscrollItem>
                Sub 4-4
            </NavscrollItem>
        </Navscroll>
    </NavscrollItem>
    <NavscrollItem>
        Fifth section
    </NavscrollItem>
    <NavscrollItem>
        Last section
    </NavscrollItem>
</Navscroll>

<Navscroll
    interpolation={false}
    targetRef={scrollableContainerRef}
    targetSelector='section'
>
    <NavscrollItem>
        First section
    </NavscrollItem>
    <NavscrollItem>
        Second section
    </NavscrollItem>
    <NavscrollItem>
        Third section
    </NavscrollItem>
    <NavscrollItem>
        Fourth section
        <Navscroll>
            <NavscrollItem>
                Sub 4-1
            </NavscrollItem>
            <NavscrollItem>
                Sub 4-2
            </NavscrollItem>
            <NavscrollItem>
                Sub 4-3
            </NavscrollItem>
            <NavscrollItem>
                Sub 4-4
            </NavscrollItem>
        </Navscroll>
    </NavscrollItem>
    <NavscrollItem>
        Fifth section
    </NavscrollItem>
    <NavscrollItem>
        Last section
    </NavscrollItem>
</Navscroll>
                `}</TypeScriptCode>
            </SectionPropertyInterpolation>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview>
                        <Navscroll theme='primary'>
                            <NavscrollItem>
                                An inherit theme
                            </NavscrollItem>
                            <NavscrollItem>
                                An inherit theme
                            </NavscrollItem>
                            <NavscrollItem theme='primary'>
                                A primary theme
                            </NavscrollItem>
                            <NavscrollItem theme='secondary'>
                                A secondary theme
                            </NavscrollItem>
                            <NavscrollItem theme='success'>
                                A success theme
                            </NavscrollItem>
                            <NavscrollItem theme='info'>
                                A info theme
                            </NavscrollItem>
                            <NavscrollItem theme='warning'>
                                A warning theme
                            </NavscrollItem>
                            <NavscrollItem theme='danger'>
                                A danger theme
                            </NavscrollItem>
                            <NavscrollItem theme='light'>
                                A light theme
                            </NavscrollItem>
                            <NavscrollItem theme='dark'>
                                A dark theme
                            </NavscrollItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Navscroll theme='primary'>
    <NavscrollItem>
        An inherit theme
    </NavscrollItem>
    <NavscrollItem>
        An inherit theme
    </NavscrollItem>
    <NavscrollItem theme='primary'>
        A primary theme
    </NavscrollItem>
    <NavscrollItem theme='secondary'>
        A secondary theme
    </NavscrollItem>
    <NavscrollItem theme='success'>
        A success theme
    </NavscrollItem>
    <NavscrollItem theme='info'>
        A info theme
    </NavscrollItem>
    <NavscrollItem theme='warning'>
        A warning theme
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A danger theme
    </NavscrollItem>
    <NavscrollItem theme='light'>
        A light theme
    </NavscrollItem>
    <NavscrollItem theme='dark'>
        A dark theme
    </NavscrollItem>
</Navscroll>
                    `}</TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <Navscroll theme='primary'>
                            <NavscrollItem size='sm'>
                                A smaller size
                            </NavscrollItem>
                            <NavscrollItem size={undefined}>
                                A default size
                            </NavscrollItem>
                            <NavscrollItem size='lg'>
                                A larger size
                            </NavscrollItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Navscroll theme='primary'>
    <NavscrollItem size='sm'>
        A smaller size
    </NavscrollItem>
    <NavscrollItem size={undefined}>
        A default size
    </NavscrollItem>
    <NavscrollItem size='lg'>
        A larger size
    </NavscrollItem>
</Navscroll>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <Navscroll theme='primary'>
                            <NavscrollItem>
                                A first item
                            </NavscrollItem>
                            <NavscrollItem>
                                A second item
                            </NavscrollItem>
                            <NavscrollItem nude={true}>
                                A third item (nude)
                            </NavscrollItem>
                            <NavscrollItem nude={true}>
                                <div style={{ background: 'pink', padding: '1em', display: 'flex', justifyContent: 'center' }}>
                                    a custom component
                                </div>
                            </NavscrollItem>
                            <NavscrollItem nude={true}>
                                A fifth item (nude)
                            </NavscrollItem>
                        </Navscroll>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Navscroll theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem nude={true}>
        A third item (nude)
    </NavscrollItem>
    <NavscrollItem nude={true}>
        <div style={{ background: 'pink', padding: '1em', display: 'flex', justifyContent: 'center' }}>
            a custom component
        </div>
    </NavscrollItem>
    <NavscrollItem nude={true}>
        A fifth item (nude)
    </NavscrollItem>
</Navscroll>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview>
                        <Navscroll theme='primary'>
                            <NavscrollItem>
                                A first item
                            </NavscrollItem>
                            <NavscrollItem>
                                A second item
                            </NavscrollItem>
                            <NavscrollItem gradient={true}>
                                A third item (gradient)
                            </NavscrollItem>
                            <NavscrollItem gradient={true}>
                                A fourth item (gradient)
                            </NavscrollItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Navscroll theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem gradient={true}>
        A third item (gradient)
    </NavscrollItem>
    <NavscrollItem gradient={true}>
        A fourth item (gradient)
    </NavscrollItem>
</Navscroll>

/* enabling gradient at <Navscroll> level: */
<Navscroll gradient={true} theme='primary'>
    <NavscrollItem>
        A first item (gradient)
    </NavscrollItem>
    <NavscrollItem>
        A second item (gradient)
    </NavscrollItem>
    <NavscrollItem>
        A third item (gradient)
    </NavscrollItem>
    <NavscrollItem>
        A fourth item (gradient)
    </NavscrollItem>
</Navscroll>
                    `}</TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        <Navscroll theme='primary'>
                            <NavscrollItem>
                                A first item
                            </NavscrollItem>
                            <NavscrollItem>
                                A second item
                            </NavscrollItem>
                            <NavscrollItem outlined={true}>
                                A third item (outlined)
                            </NavscrollItem>
                            <NavscrollItem outlined={true}>
                                A fourth item (outlined)
                            </NavscrollItem>
                            <NavscrollItem outlined={false}>
                                A fifth item
                            </NavscrollItem>
                        </Navscroll>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Navscroll theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem outlined={true}>
        A third item (outlined)
    </NavscrollItem>
    <NavscrollItem outlined={true}>
        A fourth item (outlined)
    </NavscrollItem>
    <NavscrollItem outlined={false}>
        A fifth item
    </NavscrollItem>
</Navscroll>

/* enabling outlined at <Navscroll> level: */
<Navscroll outlined={true} theme='primary'>
    <NavscrollItem>
        A first item (outlined)
    </NavscrollItem>
    <NavscrollItem>
        A second item (outlined)
    </NavscrollItem>
    <NavscrollItem>
        A third item (outlined)
    </NavscrollItem>
    <NavscrollItem>
        A fourth item (outlined)
    </NavscrollItem>
    <NavscrollItem>
        A fifth item (outlined)
    </NavscrollItem>
</Navscroll>
                    `}</TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        <Navscroll mild={false} theme='primary'>
                            <NavscrollItem>
                                A first item
                            </NavscrollItem>
                            <NavscrollItem>
                                A second item
                            </NavscrollItem>
                            <NavscrollItem mild={true}>
                                A third item (mild)
                            </NavscrollItem>
                            <NavscrollItem mild={true}>
                                A fourth item (mild)
                            </NavscrollItem>
                            <NavscrollItem mild={false}>
                                A fifth item
                            </NavscrollItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Navscroll mild={false} theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem mild={true}>
        A third item (mild)
    </NavscrollItem>
    <NavscrollItem mild={true}>
        A fourth item (mild)
    </NavscrollItem>
    <NavscrollItem mild={false}>
        A fifth item
    </NavscrollItem>
</Navscroll>

/* disabling mild at <Navscroll> level: */
<Navscroll mild={false} theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem>
        A third item
    </NavscrollItem>
    <NavscrollItem>
        A fourth item
    </NavscrollItem>
    <NavscrollItem>
        A fifth item
    </NavscrollItem>
</Navscroll>
                    `}</TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyOrientation>
                    <SectionPropertyOrientationBlock>
                        <Preview>
                            <Navscroll orientation='block' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll orientation='block' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem>
        A third item
    </NavscrollItem>
    <NavscrollItem>
        A fourth item
    </NavscrollItem>
    <NavscrollItem>
        A fifth item
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationBlock>
                    <SectionPropertyOrientationInline>
                        <Preview blockDisplay={true}>
                            <Navscroll orientation='inline' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll orientation='inline' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem>
        A third item
    </NavscrollItem>
    <NavscrollItem>
        A fourth item
    </NavscrollItem>
    <NavscrollItem>
        A fifth item
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationInline>
                    <SectionPropertyOrientationResponsive>
                        <Preview>
                            <Tips>
                                <p>
                                    Try to <strong>resize</strong> the <span style={{ background :'pink', border : 'solid 1px darkred', padding: '0.15em' }}>red container</span> below:
                                </p>
                            </Tips>
                            <ResponsiveProvider<OrientationName> fallbacks={[
                                'inline', // the first try, if overflow is detected, then try next
                                'block',  // the last try
                            ]}>{(currentFallback) => (
                                // a <div> to watch for overflows
                                <div style={{
                                    display    : 'block',
                                    overflow   : 'auto',
                                    background : 'pink',
                                    border     : 'solid 1px darkred',
                                    resize     : 'horizontal',
                                    padding    : '1rem',
                                    maxWidth   : '100%',
                                }}>
                                    <Navscroll orientation={currentFallback} theme='primary'>
                                        <NavscrollItem>
                                            A_first_item
                                        </NavscrollItem>
                                        <NavscrollItem>
                                            A_second_item
                                        </NavscrollItem>
                                        <NavscrollItem>
                                            A_third_item
                                        </NavscrollItem>
                                        <NavscrollItem>
                                            A_fourth_item
                                        </NavscrollItem>
                                    </Navscroll>
                                </div>
                            )}</ResponsiveProvider>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<ResponsiveProvider fallbacks={[
    'inline', // the first try, if overflow is detected, then try next
    'block',  // the last try
]}>{(currentFallback) => (
    // a <div> to watch for overflows
    <div style={{
        display    : 'block',
        overflow   : 'auto',
        background : 'pink',
        border     : 'solid 1px darkred',
        resize     : 'horizontal',
        padding    : '1rem',
        maxWidth   : '100%',
    }}>
        <Navscroll orientation={currentFallback} theme='primary'>
            <NavscrollItem>
                A_first_item
            </NavscrollItem>
            <NavscrollItem>
                A_second_item
            </NavscrollItem>
            <NavscrollItem>
                A_third_item
            </NavscrollItem>
            <NavscrollItem>
                A_fourth_item
            </NavscrollItem>
        </Navscroll>
    </div>
)}</ResponsiveProvider>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationResponsive>
                </SectionPropertyOrientation>
                <SectionPropertyListStyle>
                    <SectionPropertyFlatStyle>
                        <TransparentPreview>
                            <Navscroll listStyle='flat' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem theme='success'>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem active={true}>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem theme='danger'>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll listStyle='flat' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem theme='success'>
        A third item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A fourth item
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A fifth item
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyFlatStyle>
                    <SectionPropertyFlushStyle>
                        <TransparentPreview>
                            <Navscroll listStyle='flush' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem theme='success'>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem active={true}>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem theme='danger'>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll listStyle='flush' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem theme='success'>
        A third item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A fourth item
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A fifth item
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyFlushStyle>
                    <SectionPropertyJoinedStyle>
                        <TransparentPreview>
                            <Navscroll listStyle='joined' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem theme='success'>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem active={true}>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem theme='danger'>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll listStyle='joined' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem theme='success'>
        A third item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A fourth item
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A fifth item
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyJoinedStyle>
                    
                    <SectionPropertyContentStyle>
                        <Preview>
                            <Navscroll listStyle='content' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem theme='success'>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem active={true}>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem theme='danger'>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll listStyle='content' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem theme='success'>
        A third item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A fourth item
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A fifth item
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyContentStyle>
                    
                    <SectionPropertyBtnStyle>
                        <Preview>
                            <Navscroll listStyle='btn' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem theme='success'>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem active={true}>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem theme='danger'>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll listStyle='btn' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem theme='success'>
        A third item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A fourth item
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A fifth item
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyBtnStyle>
                    <SectionPropertyTabStyle>
                        <Preview blockDisplay={true}>
                            <Navscroll listStyle='tab' orientation='inline' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem theme='success'>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem active={true}>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem theme='danger'>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll listStyle='tab' orientation='inline' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem theme='success'>
        A third item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A fourth item
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A fifth item
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyTabStyle>
                    <SectionPropertyBreadcrumbStyle>
                        <TransparentPreview blockDisplay={true}>
                            <Navscroll listStyle='breadcrumb' orientation='inline' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem theme='success'>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem active={true}>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem theme='danger'>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll listStyle='breadcrumb' orientation='inline' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem theme='success'>
        A third item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A fourth item
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A fifth item
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyBreadcrumbStyle>
                    <SectionPropertyBulletStyle>
                        <Preview blockDisplay={true}>
                            <Navscroll listStyle='bullet' orientation='inline' theme='primary'>
                                <NavscrollItem />
                                <NavscrollItem />
                                <NavscrollItem theme='success' />
                                <NavscrollItem active={true} />
                                <NavscrollItem theme='danger' />
                            </Navscroll>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll listStyle='bullet' orientation='inline' theme='primary'>
    <NavscrollItem />
    <NavscrollItem />
    <NavscrollItem theme='success' />
    <NavscrollItem active={true} />
    <NavscrollItem theme='danger' />
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyBulletStyle>
                    <SectionPropertyNumberedStyle>
                        <Preview>
                            <Navscroll listStyle='numbered' theme='primary'>
                                <NavscrollItem>
                                    A first item
                                </NavscrollItem>
                                <NavscrollItem>
                                    A second item
                                </NavscrollItem>
                                <NavscrollItem theme='success'>
                                    A third item
                                </NavscrollItem>
                                <NavscrollItem active={true}>
                                    A fourth item
                                </NavscrollItem>
                                <NavscrollItem theme='danger'>
                                    A fifth item
                                </NavscrollItem>
                            </Navscroll>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll listStyle='numbered' theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem theme='success'>
        A third item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A fourth item
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A fifth item
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                        <SectionPreviewProperty titleTag='h5' property={`.void`} properties='Skip Unnecessary Content' description={
                            <p>
                                A <LinkNavscrollSeparatorItemPage /> and <code>.void</code> are skipped by counter.
                            </p>
                        }>
                            <Preview>
                                <Navscroll listStyle={['numbered', 'joined']} theme='primary'>
                                    <NavscrollItem>
                                        A first item
                                    </NavscrollItem>
                                    <NavscrollItem>
                                        A second item
                                    </NavscrollItem>
                                    <NavscrollSeparatorItem />
                                    <NavscrollItem theme='success'>
                                        A third item
                                    </NavscrollItem>
                                    <NavscrollItem theme='warning' classes={['void']}>
                                        An advertisement
                                    </NavscrollItem>
                                    <NavscrollItem theme='danger'>
                                        A fourth item
                                    </NavscrollItem>
                                </Navscroll>
                            </Preview>
                            <p></p>
                            <TypeScriptCode>{`
<Navscroll listStyle={['numbered', 'joined']} theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollSeparatorItem />
    <NavscrollItem theme='success'>
        A third item
    </NavscrollItem>
    <NavscrollItem theme='warning' classes={['void']}>
        An advertisement
    </NavscrollItem>
    <NavscrollItem theme='danger'>
        A fourth item
    </NavscrollItem>
</Navscroll>
                            `}</TypeScriptCode>
                        </SectionPreviewProperty>
                    </SectionPropertyNumberedStyle>
                </SectionPropertyListStyle>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview>
                        <Navscroll theme='primary'>
                            <NavscrollItem>
                                A first item
                            </NavscrollItem>
                            <NavscrollItem>
                                A second item
                            </NavscrollItem>
                            <NavscrollItem active={true}>
                                A third item (active)
                            </NavscrollItem>
                            <NavscrollItem active={true} actionCtrl={false}>
                                A fourth item (active + not clickable)
                            </NavscrollItem>
                            <NavscrollItem active={true} enabled={false}>
                                A fifth item item (active + disabled)
                            </NavscrollItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Navscroll theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A third item (active)
    </NavscrollItem>
    <NavscrollItem active={true} actionCtrl={false}>
        A fourth item (active + not clickable)
    </NavscrollItem>
    <NavscrollItem active={true} enabled={false}>
        A fifth item item (active + disabled)
    </NavscrollItem>
</Navscroll>
                    `}</TypeScriptCode>
                    <SectionPropertyActiveNoOutlined>
                        <TransparentPreview>
                            <NavscrollWithActiveOutlined />
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll outlined={true} theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A third item (active)
    </NavscrollItem>
    <NavscrollItem active={true} actionCtrl={false}>
        A fourth item (active + not clickable)
    </NavscrollItem>
    <NavscrollItem active={true} enabled={false}>
        A fifth item item (active + disabled)
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyActiveNoOutlined>
                    <SectionPropertyActiveNoMild>
                        <Preview>
                            <NavscrollWithActiveMild />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Navscroll mild={true} theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem>
        A second item
    </NavscrollItem>
    <NavscrollItem active={true}>
        A third item (active)
    </NavscrollItem>
    <NavscrollItem active={true} actionCtrl={false}>
        A fourth item (active + not clickable)
    </NavscrollItem>
    <NavscrollItem active={true} enabled={false}>
        A fifth item item (active + disabled)
    </NavscrollItem>
</Navscroll>
                        `}</TypeScriptCode>
                    </SectionPropertyActiveNoMild>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview>
                        <Navscroll theme='primary'>
                            <NavscrollItem>
                                A first item
                            </NavscrollItem>
                            <NavscrollItem enabled={false}>
                                A second item (disabled)
                            </NavscrollItem>
                            <NavscrollItem enabled={false} active={true}>
                                A third item (disabled + active)
                            </NavscrollItem>
                            <NavscrollItem enabled={false} active={true} actionCtrl={false}>
                                A fourth item (disabled + active + not clickable)
                            </NavscrollItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Navscroll theme='primary'>
    <NavscrollItem>
        A first item
    </NavscrollItem>
    <NavscrollItem enabled={false}>
        A second item (disabled)
    </NavscrollItem>
    <NavscrollItem enabled={false} active={true}>
        A third item (disabled + active)
    </NavscrollItem>
    <NavscrollItem enabled={false} active={true} actionCtrl={false}>
        A fourth item (disabled + active + not clickable)
    </NavscrollItem>
</Navscroll>
                    `}</TypeScriptCode>
                </SectionPropertyEnabled>
            </SectionStates>
            <SectionCustomizingParent />
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Navscroll } from '@nodestrap/navscroll'

export default function SiteNavscroll(props) {
    return (
        <Navscroll
            {...props} // preserves other properties
            
            theme={props.theme ?? 'success'} // override default value of theme to 'success'
            mild={props.mild ?? false}       // override default value of mild  to false
        >
            { props.children }
        </Navscroll>
    );
}
                `}</SectionOverridingDefaults>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
