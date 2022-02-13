import { useResetableState, Option, ResetButton } from './DemoPanel';
import { ControlInitials, ControlOptions, useControlStates } from './DemoPanel@Control';

import { ActionControl } from '@nodestrap/action-control'
import { TypeScriptCode } from './Code';



export const actionControlInitials = {
    press : undefined as boolean|undefined,
};
export type ActionControlInitials = typeof actionControlInitials & Partial<ControlInitials>
export const useActionControlStates = (initials ?: Partial<ActionControlInitials>) => {
    const initials2 : ActionControlInitials = {
        ...actionControlInitials,
        ...initials
    };
    
    const press  = useResetableState(initials2.press);

    return {
        ...useControlStates(initials2),
        press,
    }
}
export const ActionControlOptions = (props: { states: ReturnType<typeof useActionControlStates> }) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='press'
            options={[undefined, false, true]}
            value={states.press[0]}
            setValue={states.press[1]}
        />

        <ControlOptions
            states={states}
        />
    </>);
}



export const DemoActionControl = () => {
    const states = useActionControlStates();
    
    return (
        <>
            <div className='preview'>
                <ActionControl
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
                    click me
                </ActionControl>
                <TypeScriptCode collapsable={false}>{`
<ActionControl
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
    click me
</ActionControl>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <ActionControlOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoActionControl as default }
