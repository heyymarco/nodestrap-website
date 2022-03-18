import { useRef } from 'react';
import Link from 'next/link'

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { ListInitials, ListOptionProps, ListOptions, useListStates } from './DemoPanel@List';

import { Nav, NavItem, ListStyle, OrientationName } from '@nodestrap/nav'
import { TypeScriptCode } from './Code';



export const navInitials = {
    orientation : 'inline'  as OrientationName|undefined,
    actionCtrl  : undefined as boolean|undefined,
};
export type NavInitials = typeof navInitials & Partial<ListInitials>
export const useNavStates = (initials ?: Partial<NavInitials>) => {
    const initials2 : NavInitials = {
        ...navInitials,
        ...initials
    };

    return {
        ...useListStates(initials2),
    }
}
export type NavOptionProps = { states: ReturnType<typeof useNavStates> } & ListOptionProps
export const NavOptions = (props: NavOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <ListOptions
            {...props}
        />
    </>);
}



export const DemoNav = () => {
    const states = useNavStates();
    const hasChildren = states.listStyle2[0] !== 'bullet';
    
    const listStyle : ListStyle[] = [
        states.listStyle1[0],
        states.listStyle2[0]
    ].filter((ls): ls is ListStyle => !!ls);
    return (
        <>
            <div className='preview'>
                <Nav
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
                    <NavItem>
                        <Link href='/'>
                            {hasChildren && 'Home'}
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/about'>
                            {hasChildren && 'About'}
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/docs/components/nav'>
                            {hasChildren && 'Active'}
                        </Link>
                    </NavItem>
                    <NavItem enabled={false}>
                        <Link href='/download'>
                            {hasChildren && 'Disabled'}
                        </Link>
                    </NavItem>
                </Nav>
                <TypeScriptCode collapsable={false}>{`
<Nav
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
    <NavItem>
        <Link href='/'${                   hasChildren ? '>\n            Home\n        </Link>'     : ' />'}
    </NavItem>
    <NavItem>
        <Link href='/about'${              hasChildren ? '>\n            About\n        </Link>'    : ' />'}
    <NavItem>
        <Link href='/docs/components/nav'${hasChildren ? '>\n            Active\n        </Link>'   : ' />'}
    </NavItem>
    <NavItem enabled={false}>
        <Link href='/download'${           hasChildren ? '>\n            Disabled\n        </Link>' : ' />'}
    </NavItem>
</Nav>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <NavOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoNav as default }
