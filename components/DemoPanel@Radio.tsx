import { useResetableState, Option, ResetButton } from './DemoPanel';
import { CheckInitials, CheckOptionProps, CheckOptions, useCheckStates } from './DemoPanel@Check';

import { Radio } from '@nodestrap/radio'
import { TypeScriptCode } from './Code';



export const radioInitials = {
};
export type RadioInitials = typeof radioInitials & Partial<CheckInitials>
export const useRadioStates = (initials ?: Partial<RadioInitials>) => {
    const initials2 : RadioInitials = {
        ...radioInitials,
        ...initials
    };

    return {
        ...useCheckStates(initials2),
    }
}
export type RadioOptionProps = { states: ReturnType<typeof useRadioStates> } & CheckOptionProps
export const RadioOptions = (props: RadioOptionProps) => {
    return (<>
        <CheckOptions
            {...props}
            warningEitherMildOutlined={false}
        />
    </>);
}



export const DemoRadio = () => {
    const states = useRadioStates();
    
    return (
        <>
            <div className='preview'>
                <div>
                    <Radio
                        name='theOption'
                        checkStyle={states.checkStyle[0]}
                        
                        press={states.press[0]}
                        enableValidation={states.enableValidation[0]}
                        isValid={states.isValid[0]}
                        focus={states.focus[0]}
                        arrive={states.arrive[0]}
                        enabled={states.enabled[0]}
                        active={states.active[0]}
                        onActiveChange={(newActive) => newActive && states.active[1](true)}
                        
                        size={states.size[0]}
                        nude={states.nude[0]}
                        theme={states.theme[0]}
                        gradient={states.gradient[0]}
                        outlined={states.outlined[0]}
                        mild={states.mild[0]}
                    >
                        Select me!
                    </Radio>
                    <Radio
                        name='theOption'
                        checkStyle={states.checkStyle[0]}
                        
                        press={states.press[0]}
                        enableValidation={states.enableValidation[0]}
                        isValid={states.isValid[0]}
                        focus={states.focus[0]}
                        arrive={states.arrive[0]}
                        enabled={states.enabled[0]}
                        active={(states.active[0] !== undefined) && !states.active[0]}
                        onActiveChange={(newActive) => newActive && states.active[1](false)}
                        
                        size={states.size[0]}
                        nude={states.nude[0]}
                        theme={states.theme[0]}
                        gradient={states.gradient[0]}
                        outlined={states.outlined[0]}
                        mild={states.mild[0]}
                    >
                        Select me!
                    </Radio>
                </div>
                <TypeScriptCode collapsable={false}>{`
<Radio
    name='theOption'
    checkStyle=${states.checkStyle[0] ? `'${states.checkStyle[0]}'` : '{undefined}'}
    
    press={${states.press[0]}}
    enableValidation={${states.enableValidation[0]}}
    isValid={${states.isValid[0]}}
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
    Select me!
</Radio>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <RadioOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoRadio as default }
