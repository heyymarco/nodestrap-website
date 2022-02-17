import { useResetableState, Option, ResetButton } from './DemoPanel';
import { EditableControlInitials, EditableControlOptionProps, EditableControlOptions, useEditableControlStates } from './DemoPanel@EditableControl';
import { ActionControlInitials, useActionControlStates } from './DemoPanel@ActionControl';

import { EditableActionControl } from '@nodestrap/editable-action-control'
import { TypeScriptCode } from './Code';



export const editableActionControlInitials = {
};
export type EditableActionControlInitials = typeof editableActionControlInitials & Partial<EditableControlInitials> & Partial<ActionControlInitials>
export const useEditableActionControlStates = (initials ?: Partial<EditableActionControlInitials>) => {
    const initials2 : EditableActionControlInitials = {
        ...editableActionControlInitials,
        ...initials
    };

    return {
        ...useEditableControlStates(initials2),
        ...useActionControlStates(initials2),
    }
}
export type EditableActionControlOptionProps = { states: ReturnType<typeof useEditableActionControlStates> } & EditableControlOptionProps
export const EditableActionControlOptions = (props: EditableActionControlOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='press'
            options={[undefined, false, true]}
            value={states.press[0]}
            setValue={states.press[1]}
        />
    
        <EditableControlOptions
            {...props}
        />
    </>);
}



export const DemoEditableActionControl = () => {
    const states = useEditableActionControlStates();
    
    return (
        <>
            <div className='preview'>
                <EditableActionControl
                    press={states.press[0]}
                    enableValidation={states.enableValidation[0]}
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
                >
                    click me
                </EditableActionControl>
                <TypeScriptCode collapsable={false}>{`
<EditableActionControl
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
>
    click me
</EditableActionControl>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <EditableActionControlOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoEditableActionControl as default }
