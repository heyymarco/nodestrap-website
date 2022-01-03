import { useResetableState, Option, ResetButton } from './DemoPanel';
import { EditableControlInitials, EditableControlOptions, useEditableControlStates } from './DemoPanel@EditableControl';
import { ActionControlInitials, useActionControlStates } from './DemoPanel@ActionControl';

import { SectionDemo } from './common-contents';
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
export const EditableActionControlOptions = (props: { states: ReturnType<typeof useEditableActionControlStates> }) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='press'
            options={[undefined, false, true]}
            value={states.press[0]}
            setValue={states.press[1]}
        />
    
        <EditableControlOptions
            states={states}
        />
    </>);
}



export const SectionDemoEditableActionControl = () => {
    const states = useEditableActionControlStates();
    
    return (
        <SectionDemo>
            <span>Preview</span>
            <EditableActionControl
                press={states.press[0]}
                
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

            <hr />
            
            <EditableActionControlOptions states={states} />
            
            <ResetButton states={states} />

            <span>Code</span>
            <TypeScriptCode>{`
<EditableActionControl
    press={${states.press[0]}}

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
        </SectionDemo>
    );
}