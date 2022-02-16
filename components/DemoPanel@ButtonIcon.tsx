
import type { IconList } from '@nodestrap/icon';
import { useResetableState, Option, ResetButton } from './DemoPanel';
import { ButtonInitials, ButtonOptionProps, ButtonOptions, useButtonStates } from './DemoPanel@Button';

import { ButtonIcon, IconPosition } from '@nodestrap/button-icon'
import { TypeScriptCode } from './Code';



export const buttonIconInitials = {
    icon         : 'face'  as IconList,
    iconPosition : 'start' as IconPosition
};
export type ButtonIconInitials = typeof buttonIconInitials & Partial<ButtonInitials>
export const useButtonIconStates = (initials ?: Partial<ButtonIconInitials>) => {
    const initials2 : ButtonIconInitials = {
        ...buttonIconInitials,
        ...initials
    };

    const icon         = useResetableState(initials2.icon);
    const iconPosition = useResetableState(initials2.iconPosition);

    return {
        ...useButtonStates(initials2),
        icon,
        iconPosition,
    }
}
export type ButtonIconOptionProps = { states: ReturnType<typeof useButtonIconStates> } & ButtonOptionProps
export const ButtonIconOptions = (props: ButtonIconOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='icon'
            options={['face', 'instagram', 'whatsapp', 'elderly', 'email', 'busy']}
            value={states.icon[0]}
            setValue={states.icon[1]}
        />
        <Option
            name='iconPosition'
            options={['start', 'end']}
            value={states.iconPosition[0]}
            setValue={states.iconPosition[1]}
        />
        
        <ButtonOptions
            {...props}
            warningEitherMildOutlined={false}
        />
    </>);
}



export const DemoButtonIcon = () => {
    const states   = useButtonIconStates();
    
    return (
        <>
            <div className='preview'>
                <ButtonIcon
                    icon={states.icon[0]}
                    iconPosition={states.iconPosition[0]}
                    
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
                    {states.icon[0]}
                </ButtonIcon>
                <TypeScriptCode collapsable={false}>{`
<ButtonIcon
    icon=${`'${states.icon[0]}'`}
    iconPosition=${`'${states.iconPosition[0]}'`}

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
    ${states.icon[0]}
</ButtonIcon>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <ButtonIconOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoButtonIcon as default }
