
import { useResetableState, Option, ResetButton } from './DemoPanel';
import { ActionControlInitials, ActionControlOptionProps, ActionControlOptions, useActionControlStates } from './DemoPanel@ActionControl';

import { CloseButton } from '@nodestrap/close-button'
import { TypeScriptCode } from './Code';



export const closeButtonInitials = {
};
export type CloseButtonInitials = typeof closeButtonInitials & Partial<ActionControlInitials>
export const useCloseButtonStates = (initials ?: Partial<CloseButtonInitials>) => {
    const initials2 : CloseButtonInitials = {
        ...closeButtonInitials,
        ...initials
    };

    return {
        ...useActionControlStates(initials2),
    }
}
export type CloseButtonOptionProps = { states: ReturnType<typeof useCloseButtonStates> } & ActionControlOptionProps
export const CloseButtonOptions = (props: CloseButtonOptionProps) => {
    return (<>
        <ActionControlOptions
            {...props}
            warningEitherMildOutlined={false}
        />
    </>);
}



export const DemoCloseButton = () => {
    const states   = useCloseButtonStates();
    
    return (
        <>
            <div className='preview'>
                <CloseButton
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
                />
                <TypeScriptCode collapsable={false}>{`
<CloseButton
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
/>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <CloseButtonOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoCloseButton as default }
