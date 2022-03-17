import { useRef } from 'react';
import Link from 'next/link'

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { NavInitials, NavOptionProps, NavOptions, useNavStates } from './DemoPanel@Nav';

import { Navscroll, NavscrollItem, ListStyle, OrientationName } from '@nodestrap/navscroll'
import { TypeScriptCode } from './Code';



export const navscrollInitials = {
    orientation : 'block' as OrientationName|undefined,
};
export type NavscrollInitials = typeof navscrollInitials & Partial<NavInitials>
export const useNavscrollStates = (initials ?: Partial<NavscrollInitials>) => {
    const initials2 : NavscrollInitials = {
        ...navscrollInitials,
        ...initials
    };

    return {
        ...useNavStates(initials2),
    }
}
export type NavscrollOptionProps = { states: ReturnType<typeof useNavscrollStates> } & NavOptionProps
export const NavscrollOptions = (props: NavscrollOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <NavOptions
            {...props}
        />
    </>);
}



export const DemoNavscroll = () => {
    const states = useNavscrollStates();
    const hasChildren = states.listStyle2[0] !== 'bullet';
    
    const listStyle : ListStyle[] = [
        states.listStyle1[0],
        states.listStyle2[0]
    ].filter((ls): ls is ListStyle => !!ls);
    return (
        <>
            <div className='preview'>
                <Navscroll
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
                >
                    <NavscrollItem>
                        First section
                    </NavscrollItem>
                    <NavscrollItem>
                        Second section
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
                    <NavscrollItem theme='success'>
                        Thrid section
                    </NavscrollItem>
                    <NavscrollItem>
                        Fourth section
                    </NavscrollItem>
                    <NavscrollItem>
                        Fifth section
                    </NavscrollItem>
                    <NavscrollItem>
                        Sixth section
                    </NavscrollItem>
                    <NavscrollItem actionCtrl={false}>
                        Seventh section (not clickable)
                    </NavscrollItem>
                    <NavscrollItem>
                        Last section
                    </NavscrollItem>
                </Navscroll>
                <TypeScriptCode collapsable={false}>{`
<Navscroll
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
    <NavscrollItem theme='success'>
        Thrid section
    </NavscrollItem>
    <NavscrollItem>
        Fourth section
    </NavscrollItem>
    <NavscrollItem>
        Fifth section
    </NavscrollItem>
    <NavscrollItem>
        Sixth section
    </NavscrollItem>
    <NavscrollItem actionCtrl={false}>
        Seventh section (not clickable)
    </NavscrollItem>
    <NavscrollItem>
        Last section
    </NavscrollItem>
</Navscroll>
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
