import { useResetableState, Option, ResetButton } from './DemoPanel';
import { PopupInitials, PopupOptionProps, PopupOptions, usePopupStates } from './DemoPanel@Popup';

import { Badge } from '@nodestrap/badge'
import { ThemeName } from '@nodestrap/basic';
import { TypeScriptCode } from './Code';



export const badgeInitials = {
    theme    : 'danger' as ThemeName|undefined,
    mild     : false,
};
export type BadgeInitials = typeof badgeInitials & Partial<PopupInitials>
export const useBadgeStates = (initials ?: Partial<BadgeInitials>) => {
    const initials2 : BadgeInitials = {
        ...badgeInitials,
        ...initials
    };

    return {
        ...usePopupStates(initials2),
    }
}
export type BadgeOptionProps = { states: ReturnType<typeof useBadgeStates> } & PopupOptionProps
export const BadgeOptions = (props: BadgeOptionProps) => {
    // const { states } = props;
    
    
    
    return (<>
        <PopupOptions
            {...props}
            warningEitherMildOutlined={false}
        />
    </>);
}



export const DemoBadge = () => {
    const states = useBadgeStates();
    
    return (
        <>
            <div className='preview'>
                <Badge
                    enabled={states.enabled[0]}
                    active={states.active[0]}
                    
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                >
                    hello world
                </Badge>
                <TypeScriptCode collapsable={false}>{`
<Badge
    enabled={${states.enabled[0]}}
    active={${states.active[0]}}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    hello world
</Badge>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <BadgeOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoBadge as default }
