import { useResetableState, Option, ResetButton } from './DemoPanel';
import { ButtonInitials, ButtonOptionProps, ButtonOptions, useButtonStates } from './DemoPanel@Button';

import { NavButton } from '@nodestrap/nav-button'
import { TypeScriptCode } from './Code';

import Link from 'next/link'



export const navButtonInitials = {
    href          : '/docs/components/nav-button',
    caseSensitive : false,
    end           : false,
};
export type NavButtonInitials = typeof navButtonInitials & Partial<ButtonInitials>
export const useNavButtonStates = (initials ?: Partial<NavButtonInitials>) => {
    const initials2 : NavButtonInitials = {
        ...navButtonInitials,
        ...initials
    };

    const href           = useResetableState(initials2.href);
    const caseSensitive  = useResetableState(initials2.caseSensitive);
    const end            = useResetableState(initials2.end);

    return {
        ...useButtonStates(initials2),
        href,
        caseSensitive,
        end,
    }
}
export type NavButtonOptionProps = { states: ReturnType<typeof useNavButtonStates> } & ButtonOptionProps
export const NavButtonOptions = (props: NavButtonOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            orientation='block'
            name='to/href'
            options={['/docs/components/nav-button', '/docs/COMPONENTS', '/docs/about']}
            value={states.href[0]}
            setValue={states.href[1]}
        />
        
        <Option
            name='caseSensitive'
            options={[false, true]}
            value={states.caseSensitive[0]}
            setValue={states.caseSensitive[1]}
        />
        
        <Option
            name='end'
            options={[false, true]}
            value={states.end[0]}
            setValue={states.end[1]}
        />
        
        <ButtonOptions
            {...props}
        />
    </>);
}



export const DemoNavButton = () => {
    const states   = useNavButtonStates();
    
    return (
        <>
            <div className='preview'>
                <NavButton
                    caseSensitive={states.caseSensitive[0]}
                    end={states.end[0]}
                    
                    orientation={states.orientation[0]}
                    btnStyle={states.btnStyle[0]}
                    
                    press={states.press[0]}
                    focus={states.focus[0]}
                    arrive={states.arrive[0]}
                    enabled={states.enabled[0]}
                    active={states.active[0]}
                    
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                >
                    <Link
                        href={states.href[0]}
                    >
                        Show documentation
                    </Link>
                </NavButton>
                <TypeScriptCode collapsable={false}>{`
<NavButton
    caseSensitive='${states.caseSensitive[0]}'
    end='${states.end[0]}'
    
    orientation=${states.orientation[0] ? `'${states.orientation[0]}'` : '{undefined}'}
    btnStyle=${states.btnStyle[0] ? `'${states.btnStyle[0]}'` : '{undefined}'}
    
    press={${states.press[0]}}
    focus={${states.focus[0]}}
    arrive={${states.arrive[0]}}
    enabled={${states.enabled[0]}}
    active={${states.active[0]}}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    <Link
        href='${states.href[0]}'
    >
        Show documentation
    </Link>
</NavButton>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <NavButtonOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoNavButton as default }
