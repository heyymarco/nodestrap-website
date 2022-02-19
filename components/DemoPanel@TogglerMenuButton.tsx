import { useResetableState, Option, ResetButton } from './DemoPanel';
import { CheckInitials, CheckOptionProps, CheckOptions, useCheckStates } from './DemoPanel@Check';

import { CheckStyle } from '@nodestrap/check';
import { TogglerMenuButton } from '@nodestrap/toggler-menu-button'
import { TypeScriptCode } from './Code';



export const togglerMenuButtonInitials = {
    enableValidation : false as boolean|undefined,
    nude             : false,
    mild             : false,

    checkStyle       : undefined as CheckStyle|undefined,
};
export type TogglerMenuButtonInitials = typeof togglerMenuButtonInitials & Partial<CheckInitials>
export const useTogglerMenuButtonStates = (initials ?: Partial<TogglerMenuButtonInitials>) => {
    const initials2 : TogglerMenuButtonInitials = {
        ...togglerMenuButtonInitials,
        ...initials
    };

    return {
        ...useCheckStates(initials2),
    }
}
export type TogglerMenuButtonOptionProps = { states: ReturnType<typeof useTogglerMenuButtonStates> } & CheckOptionProps
export const TogglerMenuButtonOptions = (props: TogglerMenuButtonOptionProps) => {
    return (<>
        <CheckOptions
            {...props}
            warningEitherMildOutlined={false}
            showValidationCtrl={false}
            showCheckStyleCtrl={false}
        />
    </>);
}



export const DemoTogglerMenuButton = () => {
    const states = useTogglerMenuButtonStates();
    
    return (
        <>
            <div className='preview'>
                <TogglerMenuButton
                    checkStyle={states.checkStyle[0]}
                    
                    press={states.press[0]}
                    focus={states.focus[0]}
                    arrive={states.arrive[0]}
                    enabled={states.enabled[0]}
                    active={states.active[0]}
                    onActiveChange={(newActive) => states.active[1](newActive)}
                    
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                />
                <TypeScriptCode collapsable={false}>{`
<TogglerMenuButton
    checkStyle=${states.checkStyle[0] ? `'${states.checkStyle[0]}'` : '{undefined}'}
    
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
/>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <TogglerMenuButtonOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoTogglerMenuButton as default }
