import { useResetableState, Option, ResetButton } from './DemoPanel';
import { ControlInitials, ControlOptions, useControlStates } from './DemoPanel@Control';

import { EditableControl } from '@nodestrap/editable-control'
import { TypeScriptCode } from './Code';



export const editableControlInitials = {
    isValid : undefined as boolean|undefined,
};
export type EditableControlInitials = typeof editableControlInitials & Partial<ControlInitials>
export const useEditableControlStates = (initials ?: Partial<EditableControlInitials>) => {
    const initials2 : EditableControlInitials = {
        ...editableControlInitials,
        ...initials
    };
    
    const isValid = useResetableState(initials2.isValid);

    return {
        ...useControlStates(initials2),
        isValid,
    }
}
export const EditableControlOptions = (props: { states: ReturnType<typeof useEditableControlStates> }) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='isValid'
            options={[undefined, false, true]}
            value={states.isValid[0]}
            setValue={states.isValid[1]}
        />

        <ControlOptions
            states={states}
        />
    </>);
}



export const DemoEditableControl = () => {
    const states = useEditableControlStates();
    
    return (
        <>
            <span>Preview</span>
            <EditableControl
                isValid={states.isValid[0]}
                
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
                
                {...{ contentEditable: true }}
            >
                edit me
            </EditableControl>

            <hr />
            
            <EditableControlOptions states={states} />
            
            <ResetButton states={states} />

            <span>Code</span>
            <TypeScriptCode collapsable={false}>{`
<EditableControl
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
    
    {...{ contentEditable: true }}
>
    edit me
</EditableControl>
            `}</TypeScriptCode>
        </>
    );
}
export { DemoEditableControl as default }
