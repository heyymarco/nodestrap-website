import { useResetableState, Option, ResetButton } from './DemoPanel';
import { EditableActionControlInitials, EditableActionControlOptionProps, EditableActionControlOptions, useEditableActionControlStates } from './DemoPanel@EditableActionControl';

import { Check, CheckStyle } from '@nodestrap/check'
import { TypeScriptCode } from './Code';



export const checkInitials = {
    enableValidation : false as boolean|undefined,
    nude             : true,
    mild             : false,

    checkStyle       : undefined as CheckStyle|undefined,
};
export type CheckInitials = typeof checkInitials & Partial<EditableActionControlInitials>
export const useCheckStates = (initials ?: Partial<CheckInitials>) => {
    const initials2 : CheckInitials = {
        ...checkInitials,
        ...initials
    };

    const checkStyle  = useResetableState(initials2.checkStyle);

    return {
        ...useEditableActionControlStates(initials2),
        checkStyle,
    }
}
export type CheckOptionProps = { states: ReturnType<typeof useCheckStates> } & EditableActionControlOptionProps
export const CheckOptions = (props: CheckOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='checkStyle'
            options={[undefined, 'btn', 'togglerBtn', 'switch']}
            value={states.checkStyle[0]}
            setValue={states.checkStyle[1]}
        />
        
        <EditableActionControlOptions
            {...props}
            warningEitherMildOutlined={false}
        />
    </>);
}



export const DemoCheck = () => {
    const states = useCheckStates();
    
    return (
        <>
            <div className='preview'>
                <Check
                    checkStyle={states.checkStyle[0]}
                    
                    press={states.press[0]}
                    enableValidation={states.enableValidation[0]}
                    isValid={states.isValid[0]}
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
                >
                    Select me!
                </Check>
                <TypeScriptCode collapsable={false}>{`
<Check
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
</Check>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <CheckOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoCheck as default }
