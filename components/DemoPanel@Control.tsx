import { useResetableState, Option, ResetButton } from './DemoPanel';
import { IndicatorInitials, IndicatorOptions, useIndicatorStates } from './DemoPanel@Indicator';

import { Control } from '@nodestrap/control'
import { TypeScriptCode } from './Code';



export const controlInitials = {
    focus  : undefined as boolean|undefined,
    arrive : undefined as boolean|undefined,
};
export type ControlInitials = typeof controlInitials & Partial<IndicatorInitials>
export const useControlStates = (initials ?: Partial<ControlInitials>) => {
    const initials2 : ControlInitials = {
        ...controlInitials,
        ...initials
    };
    
    const focus  = useResetableState(initials2.focus);
    const arrive = useResetableState(initials2.arrive);

    return {
        ...useIndicatorStates(initials2),
        focus,
        arrive,
    }
}
export const ControlOptions = (props: { states: ReturnType<typeof useControlStates> }) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='focus'
            options={[undefined, false, true]}
            value={states.focus[0]}
            setValue={states.focus[1]}
        />
        
        <Option
            name='arrive'
            options={[undefined, false, true]}
            value={states.arrive[0]}
            setValue={states.arrive[1]}
        />

        <IndicatorOptions
            states={states}
        />
    </>);
}



export const DemoControl = () => {
    const states = useControlStates();
    
    return (
        <>
            <span>Preview</span>
            <Control
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
                hello world
            </Control>

            <hr />
            
            <ControlOptions states={states} />
            
            <ResetButton states={states} />

            <span>Code</span>
            <TypeScriptCode>{`
<Control
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
    hello world
</Control>
            `}</TypeScriptCode>
        </>
    );
}
export { DemoControl as default }
