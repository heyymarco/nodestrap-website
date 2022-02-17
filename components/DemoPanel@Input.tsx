import { useResetableState, Option, ResetButton } from './DemoPanel';
import { EditableTextControlInitials, EditableTextControlOptionProps, EditableTextControlOptions, useEditableTextControlStates } from './DemoPanel@EditableTextControl';

import { Input } from '@nodestrap/input'
import { TypeScriptCode } from './Code';



export const inputInitials = {
};
export type InputInitials = typeof inputInitials & Partial<EditableTextControlInitials>
export const useInputStates = (initials ?: Partial<InputInitials>) => {
    const initials2 : InputInitials = {
        ...inputInitials,
        ...initials
    };

    return {
        ...useEditableTextControlStates(initials2),
    }
}
export type InputOptionProps = { states: ReturnType<typeof useInputStates> } & EditableTextControlOptionProps
export const InputOptions = (props: InputOptionProps) => {
    return (<>
        <EditableTextControlOptions
            {...props}
        />
    </>);
}



export const DemoInput = () => {
    const states = useInputStates();
    
    return (
        <>
            <div className='preview'>
                <Input
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
                    
                    defaultValue='edit me'
                />
                <TypeScriptCode collapsable={false}>{`
<Input
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
    
    defaultValue='edit me'
/>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <InputOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoInput as default }
