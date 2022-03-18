import { useRef } from 'react';
import Link from 'next/link'

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { NavInitials, NavOptionProps, NavOptions, useNavStates } from './DemoPanel@Nav';

import { Navscroll, NavscrollItem, ListStyle, OrientationName } from '@nodestrap/navscroll'
import { TypeScriptCode } from './Code';



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



const useDummyArticleSheet = createUseSheet(() => [
    compositionOf('dummyArticle',
        style({
            border: 'solid 1px black',
            background : 'hsl(200, 90%, 75%)',
            
            
            ...children(['&', 'section:nth-child(4)'], {
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
            ...children('section:nth-child(4)', {
                height        : '200px',
            }),
            
            
            ...children('section', {
                ...rule(':nth-child(3n+1)', {
                    background : 'hsl(350, 90%, 75%)',
                }),
                ...rule(':nth-child(3n+2)', {
                    background : 'hsl(120, 90%, 75%)',
                }),
                ...rule(':nth-child(3n+3)', {
                    background : 'hsl(39, 90%, 75%)',
                }),
                ...rule(':nth-child(4)', {
                    ...children('section', {
                        ...rule(':nth-child(3n+1)', {
                            background : 'hsl(084, 90%, 75%)',
                        }),
                        ...rule(':nth-child(3n+2)', {
                            background : 'hsl(260, 90%, 75%)',
                        }),
                        ...rule(':nth-child(3n+3)', {
                            background : 'hsl(028, 90%, 75%)',
                        }),
                    }),
                }),
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
            
            
            ...children('section:nth-child(1)', {
                height : '80px',
            }),
            ...children('section:nth-child(2)', {
                height : '200px',
            }),
            ...children('section:nth-child(3)', {
                height : '400px',
            }),
            ...children('section:nth-child(4)', {
                ...children('section:nth-child(1)', {
                    height: '200px',
                }),
                ...children('section:nth-child(2)', {
                    height: '100px',
                }),
                ...children('section:nth-child(3)', {
                    height: '150px',
                }),
                ...children('section:nth-child(4)', {
                    height: '100px',
                }),
            }),
            ...children('section:nth-child(5)', {
                height : '300px',
            }),
            ...children('section:nth-child(6)', {
                height : '100px',
            }),
        }),
    ),
    compositionOf('container',
        style({
            display             : 'grid',
            gridTemplateColumns : [['1fr', '1fr']],
            gridTemplateAreas   : [[
                '"nav-1 dummy-article"',
            ]],
            gap                 : '1rem',
            alignItems          : 'center',
            
            ...children('.nav-1', {
                gridArea    : 'nav-1',
            }),
            ...children('.dummy-article', { 
                gridArea    : 'dummy-article',
            }),
        }),
    ),
], /*sheetId :*/'vlx05nzax4'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names




export const navscrollInitials = {
    orientation   : 'block' as OrientationName|undefined,
    interpolation : true    as boolean|undefined,
};
export type NavscrollInitials = typeof navscrollInitials & Partial<NavInitials>
export const useNavscrollStates = (initials ?: Partial<NavscrollInitials>) => {
    const initials2 : NavscrollInitials = {
        ...navscrollInitials,
        ...initials
    };
    
    const interpolation = useResetableState(initials2.interpolation);

    return {
        ...useNavStates(initials2),
        interpolation,
    }
}
export type NavscrollOptionProps = { states: ReturnType<typeof useNavscrollStates> } & NavOptionProps
export const NavscrollOptions = (props: NavscrollOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='interpolation'
            options={[false, true]}
            value={states.interpolation[0]}
            setValue={states.interpolation[1]}
        />
        
        <NavOptions
            {...props}
        />
    </>);
}



export const DemoNavscroll = () => {
    const states = useNavscrollStates();
    const hasChildren = states.listStyle2[0] !== 'bullet';
    
    const articleSheet = useDummyArticleSheet();
    const articleRef = useRef<HTMLElement>(null);
    
    const listStyle : ListStyle[] = [
        states.listStyle1[0],
        states.listStyle2[0]
    ].filter((ls): ls is ListStyle => !!ls);
    return (
        <>
            <div className='preview'>
                <div className={articleSheet.container}>
                    <Navscroll
                        targetRef={articleRef}
                        targetSelector='section'
                        interpolation={states.interpolation[0]}
                        
                        orientation={states.orientation[0]}
                        listStyle={listStyle}
                        actionCtrl={states.actionCtrl[0]}
                        
                        enabled={states.enabled[0]}
                        active={states.active[0]}
                        
                        size={states.size[0]}
                        nude={states.nude[0]}
                        theme={states.theme[0]}
                        gradient={states.gradient[0]}
                        outlined={states.outlined[0]}
                        mild={states.mild[0]}
                        
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
                    <article
                        ref={articleRef}
                        
                        className={`${articleSheet.dummyArticle} dummy-article`}
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
                </div>
                <TypeScriptCode collapsable={false}>{`
<Navscroll
    targetRef={articleRef}
    targetSelector='section'
    interpolation={${states.interpolation[0]}}
    
    orientation=${states.orientation[0] ? `'${states.orientation[0]}'` : '{undefined}'}
    listStyle=${listStyle.length ? ((listStyle.length === 1) ? `'${listStyle}'` : `{[${listStyle.map((ls) => `'${ls}'`).join(', ')}]}`) : '{undefined}'}
    actionCtrl={${states.actionCtrl[0]}}
    
    enabled={${states.enabled[0]}}
    active={${states.active[0]}}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
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
                Sub 2-1
            </NavscrollItem>
            <NavscrollItem>
                Sub 2-2
            </NavscrollItem>
            <NavscrollItem>
                Sub 2-3
            </NavscrollItem>
            <NavscrollItem>
                Sub 2-4
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

<article
    ref={articleRef}
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
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <NavscrollOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoNavscroll as default }
