import { useRef } from 'react';

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { PopupInitials, PopupOptionProps, PopupOptions, usePopupStates } from './DemoPanel@Popup';

import { Badge, BadgeStyle } from '@nodestrap/badge'
import Button from '@nodestrap/button';
import { ThemeName } from '@nodestrap/basic';
import { TypeScriptCode } from './Code';



export const badgeInitials = {
    theme      : 'danger' as ThemeName|undefined,
    mild       : false,

    badgeStyle : undefined as BadgeStyle|undefined,
};
export type BadgeInitials = typeof badgeInitials & Partial<PopupInitials>
export const useBadgeStates = (initials ?: Partial<BadgeInitials>) => {
    const initials2 : BadgeInitials = {
        ...badgeInitials,
        ...initials
    };

    const badgeStyle = useResetableState(initials2.badgeStyle);

    return {
        ...usePopupStates(initials2),
        
        badgeStyle,
    }
}
export type BadgeOptionProps = { states: ReturnType<typeof useBadgeStates> } & PopupOptionProps
export const BadgeOptions = (props: BadgeOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            orientation='block'
            name='badgeStyle'
            options={[undefined, 'pill','square','circle']}
            value={states.badgeStyle[0]}
            setValue={states.badgeStyle[1]}
        />
        
        <PopupOptions
            {...props}
            warningEitherMildOutlined={false}
        />
    </>);
}



export const DemoBadge = () => {
    const states = useBadgeStates();
    const hasChildren = !states.badgeStyle[0] || !['square','circle'].includes(states.badgeStyle[0]);
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    return (
        <>
            <div className='preview'>
                <Button elmRef={buttonRef} theme='primary'>
                    Products
                    <Badge
                        targetRef={buttonRef}
                        popupPlacement='right-start'
                        popupOffset={(hasChildren ? -35 : -15)}
                        popupShift={-10}
                        
                        badgeStyle={states.badgeStyle[0]}
                        
                        enabled={states.enabled[0]}
                        active={states.active[0]}
                        
                        size={states.size[0]}
                        nude={states.nude[0]}
                        theme={states.theme[0]}
                        gradient={states.gradient[0]}
                        outlined={states.outlined[0]}
                        mild={states.mild[0]}
                    >
                        {hasChildren && <>50% off</>}
                    </Badge>
                </Button>
                <TypeScriptCode collapsable={false}>{`
export default function App() {
    const buttonRef = useRef(null);
    
    return (
        <Button
            elmRef={buttonRef}
            theme='primary'
        >
            Products
            <Badge
                targetRef={buttonRef}
                popupPlacement='right-start'
                popupOffset={${(hasChildren ? -35 : -15)}}
                popupShift={-10}
                
                badgeStyle=${states.badgeStyle[0] ? `'${states.badgeStyle[0]}'` : '{undefined}'}
                
                enabled={${states.enabled[0]}}
                active={${states.active[0]}}
                
                size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
                nude={${states.nude[0]}}
                theme='${states.theme[0]}'
                gradient={${states.gradient[0]}}
                outlined={${states.outlined[0]}}
                mild={${states.mild[0]}}
            ${hasChildren
            ?
            `>
                50% off
            </Badge>`
            :
            '/>'}
        </Button>
    );
}
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
