import { useResetableState, Option, ResetButton } from './DemoPanel';
import { IndicatorInitials, IndicatorOptionProps, IndicatorOptions, useIndicatorStates } from './DemoPanel@Indicator';

import { SizeName } from '@nodestrap/basic';
import { Navbar } from '@nodestrap/navbar'
import { Nav, NavItem } from '@nodestrap/nav'
import Link from 'next/link'
import { TypeScriptCode } from './Code';



export const navbarInitials = {
    size     : 'sm'   as SizeName,
    mild     : false,
};
export type NavbarInitials = typeof navbarInitials & Partial<IndicatorInitials>
export const useNavbarStates = (initials ?: Partial<NavbarInitials>) => {
    const initials2 : NavbarInitials = {
        ...navbarInitials,
        ...initials
    };

    return {
        ...useIndicatorStates(initials2),
    }
}
export type NavbarOptionProps = { states: ReturnType<typeof useNavbarStates> } & IndicatorOptionProps
export const NavbarOptions = (props: NavbarOptionProps) => {
    // const { states } = props;
    
    
    
    return (<>
        <IndicatorOptions
            {...props}
            enableEnableOptions={false}
        />
    </>);
}



export const DemoNavbar = () => {
    const states = useNavbarStates();
    
    return (
        <>
            <div className='preview'>
                <div style={{ width: '100%' }}>
                    <Navbar
                        active={states.active[0]}
                        
                        size={states.size[0]}
                        nude={states.nude[0]}
                        theme={states.theme[0]}
                        gradient={states.gradient[0]}
                        outlined={states.outlined[0]}
                        mild={states.mild[0]}
                    >{(compact) =>
                        <Nav orientation={compact ? 'block' : 'inline'}>
                            <NavItem><Link href='/'>Home</Link></NavItem>
                            <NavItem><Link href='/docs'>Docs</Link></NavItem>
                            <NavItem><Link href='/download'>Download</Link></NavItem>
                            <NavItem><Link href='/about'>About</Link></NavItem>
                            <NavItem href='https://github.com/nodestrap' target='_blank'>GitHub</NavItem>
                            <NavItem href='https://www.npmjs.com/org/nodestrap' target='_blank'>NPM</NavItem>
                        </Nav>
                    }</Navbar>
                </div>
                <TypeScriptCode collapsable={false}>{`
<Navbar
    active={${states.active[0]}}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>{(compact) =>
    <Nav orientation={compact ? 'block' : 'inline'}>
        <NavItem><Link href='/'>Home</Link></NavItem>
        <NavItem><Link href='/docs'>Docs</Link></NavItem>
        <NavItem><Link href='/download'>Download</Link></NavItem>
        <NavItem><Link href='/about'>About</Link></NavItem>
        <NavItem href='https://github.com/nodestrap' target='_blank'>GitHub</NavItem>
        <NavItem href='https://www.npmjs.com/org/nodestrap' target='_blank'>NPM</NavItem>
    </Nav>
}</Navbar>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <NavbarOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoNavbar as default }
