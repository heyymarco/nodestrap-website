import { useResetableState, Option, ResetButton } from './DemoPanel';
import { ControlInitials, ControlOptionProps, ControlOptions, useControlStates } from './DemoPanel@Control';

import { EditableControl } from '@nodestrap/editable-control'
import { TypeScriptCode } from './Code';



export const editableControlInitials = {
    enableValidation : true as boolean|undefined,
    isValid          : undefined as boolean|undefined,
};
export type EditableControlInitials = typeof editableControlInitials & Partial<ControlInitials>
export const useEditableControlStates = (initials ?: Partial<EditableControlInitials>) => {
    const initials2 : EditableControlInitials = {
        ...editableControlInitials,
        ...initials
    };
    
    const enableValidation = useResetableState(initials2.enableValidation);
    const isValid          = useResetableState(initials2.isValid);

    return {
        ...useControlStates(initials2),
        enableValidation,
        isValid,
    }
}
export type EditableControlOptionProps = { states: ReturnType<typeof useEditableControlStates>, showValidationCtrl?: boolean } & ControlOptionProps
export const EditableControlOptions = (props: EditableControlOptionProps) => {
    const { states, showValidationCtrl = true } = props;
    
    
    
    return (<>
        {showValidationCtrl && <>
            <Option
                name='enableValidation'
                options={[false, true]}
                value={states.enableValidation[0]}
                setValue={states.enableValidation[1]}
            />
            <Option
                name='isValid'
                options={[undefined, false, true]}
                value={states.isValid[0]}
                setValue={states.isValid[1]}
            />
        </>}

        <ControlOptions
            {...props}
        />
    </>);
}



export const DemoEditableControl = () => {
    const states = useEditableControlStates();
    
    return (
        <>
            <div className='preview'>
                <EditableControl
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
                    
                    {...{ contentEditable: true }}
                >
                    edit me
                </EditableControl>
                <TypeScriptCode collapsable={false}>{`
<EditableControl
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
    
    {...{ contentEditable: true }}
>
    edit me
</EditableControl>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <EditableControlOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoEditableControl as default }
