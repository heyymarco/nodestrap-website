import { useResetableState, Option, ResetButton } from './DemoPanel';
import { ButtonInitials, ButtonOptionProps, ButtonOptions, useButtonStates } from './DemoPanel@Button';

import { NavButton } from '@nodestrap/nav-button'
import { TypeScriptCode } from './Code';

import Link from 'next/link'



export const navButtonInitials = {
};
export type NavButtonInitials = typeof navButtonInitials & Partial<ButtonInitials>
export const useNavButtonStates = (initials ?: Partial<NavButtonInitials>) => {
    const initials2 : NavButtonInitials = {
        ...navButtonInitials,
        ...initials
    };

    return {
        ...useButtonStates(initials2),
    }
}
export type NavButtonOptionProps = { states: ReturnType<typeof useNavButtonStates> } & ButtonOptionProps
export const NavButtonOptions = (props: NavButtonOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='orientation'
            options={[undefined, 'block', 'inline']}
            value={states.orientation[0]}
            setValue={states.orientation[1]}
        />
        
        <Option
            name='btnStyle'
            options={[undefined, 'link', 'icon', 'ghost']}
            value={states.btnStyle[0]}
            setValue={states.btnStyle[1]}
        />
        
        <ButtonOptions
            {...props}
            warningEitherMildOutlined={false}
        />
    </>);
}



export const DemoNavButton = () => {
    const states   = useNavButtonStates();
    
    return (
        <>
            <div className='preview'>
                <NavButton
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
                    <Link href='/docs/components/nav-button'>Home</Link>
                </NavButton>
                <TypeScriptCode collapsable={false}>{`
<NavButton
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
    <Link href='/docs/components/nav-button'>Home</Link>
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
