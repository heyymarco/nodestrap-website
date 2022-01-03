import { useResetableState, Option, ResetButton } from './DemoPanel';
import { EditableControlInitials, EditableControlOptions, useEditableControlStates } from './DemoPanel@EditableControl';

import { SectionDemo } from './common-contents';
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
export const EditableTextControlOptions = (props: { states: ReturnType<typeof useEditableTextControlStates> }) => {
    const { states } = props;
    
    
    
    return (<>
        <EditableControlOptions
            states={states}
        />
    </>);
}



export const SectionDemoEditableTextControl = () => {
    const states = useEditableTextControlStates();
    
    return (
        <SectionDemo>
            <span>Preview</span>
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

            <hr />
            
            <EditableTextControlOptions states={states} />
            
            <ResetButton states={states} />

            <span>Code</span>
            <TypeScriptCode>{`
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
        </SectionDemo>
    );
}