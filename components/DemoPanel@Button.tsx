import { useResetableState, Option, ResetButton } from './DemoPanel';
import { ActionControlInitials, ActionControlOptionProps, ActionControlOptions, useActionControlStates } from './DemoPanel@ActionControl';

import { Button, OrientationName, ButtonStyle } from '@nodestrap/button'
import { TypeScriptCode } from './Code';



export const buttonInitials = {
    mild        : false,
    
    orientation : undefined   as OrientationName|undefined,
    btnStyle    : undefined   as ButtonStyle|undefined,
};
export type ButtonInitials = typeof buttonInitials & Partial<ActionControlInitials>
export const useButtonStates = (initials ?: Partial<ButtonInitials>) => {
    const initials2 : ButtonInitials = {
        ...buttonInitials,
        ...initials
    };
    
    const orientation  = useResetableState(initials2.orientation);
    const btnStyle     = useResetableState(initials2.btnStyle);

    return {
        ...useActionControlStates(initials2),
        orientation,
        btnStyle,
    }
}
export type ButtonOptionProps = { states: ReturnType<typeof useButtonStates> } & ActionControlOptionProps
export const ButtonOptions = (props: ButtonOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='orientation'
            options={[undefined, 'block', 'inline']}
            value={states.orientation[0]}
            setValue={states.orientation[1]}
        />
        
        <Option
            name='btnStyle'
            options={[undefined, 'link', 'icon', 'ghost']}
            value={states.btnStyle[0]}
            setValue={states.btnStyle[1]}
        />
        
        <ActionControlOptions
            {...props}
            warningEitherMildOutlined={false}
        />
    </>);
}



export const DemoButton = () => {
    const states   = useButtonStates();
    
    return (
        <>
            <div className='preview'>
                <Button
                    orientation={states.orientation[0]}
                    btnStyle={states.btnStyle[0]}
                    
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
                >
                    Click me!
                    <span>Now!</span>
                </Button>
                <TypeScriptCode collapsable={false}>{`
<Button
    orientation=${states.orientation[0] ? `'${states.orientation[0]}'` : '{undefined}'}
    btnStyle=${states.btnStyle[0] ? `'${states.btnStyle[0]}'` : '{undefined}'}
    
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
>
    Click me!
    <span>Now!</span>
</Button>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <ButtonOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoButton as default }
