import { useResetableState, Option, ResetButton } from './DemoPanel';
import { EditableControlInitials, EditableControlOptionProps, EditableControlOptions, useEditableControlStates } from './DemoPanel@EditableControl';

import { EditableTextControl } from '@nodestrap/editable-text-control'
import { TypeScriptCode } from './Code';



export const editableTextControlInitials = {
};
export type EditableTextControlInitials = typeof editableTextControlInitials & Partial<EditableControlInitials>
export const useEditableTextControlStates = (initials ?: Partial<EditableTextControlInitials>) => {
    const initials2 : EditableTextControlInitials = {
        ...editableTextControlInitials,
        ...initials
    };

    return {
        ...useEditableControlStates(initials2),
    }
}
export type EditableTextControlOptionProps = { states: ReturnType<typeof useEditableTextControlStates> } & EditableControlOptionProps
export const EditableTextControlOptions = (props: EditableTextControlOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <EditableControlOptions
            {...props}
        />
    </>);
}



export const DemoEditableTextControl = () => {
    const states = useEditableTextControlStates();
    
    return (
        <>
            <div className='preview'>
                <EditableTextControl
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
                </EditableTextControl>
                <TypeScriptCode collapsable={false}>{`
<EditableTextControl
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
</EditableTextControl>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <EditableTextControlOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoEditableTextControl as default }
