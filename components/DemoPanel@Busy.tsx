import { useRef } from 'react';

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { BadgeInitials, BadgeOptionProps, BadgeOptions, useBadgeStates } from './DemoPanel@Badge';

import type { BadgeStyle } from '@nodestrap/badge';
import { Busy } from '@nodestrap/busy'
import Button from '@nodestrap/button';
import { ThemeName } from '@nodestrap/basic';
import { TypeScriptCode } from './Code';



export const busyInitials = {
    // nude       : true,
    // outlined   : true,
    badgeStyle : 'circle' as BadgeStyle|undefined,
};
export type BusyInitials = typeof busyInitials & Partial<BadgeInitials>
export const useBusyStates = (initials ?: Partial<BusyInitials>) => {
    const initials2 : BusyInitials = {
        ...busyInitials,
        ...initials
    };

    return {
        ...useBadgeStates(initials2),
    }
}
export type BusyOptionProps = { states: ReturnType<typeof useBusyStates> } & BadgeOptionProps
export const BusyOptions = (props: BusyOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <BadgeOptions
            {...props}
            warningEitherMildOutlined={false}
        />
    </>);
}



export const DemoBusy = () => {
    const states = useBusyStates();
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    return (
        <>
            <div className='preview'>
                <Button elmRef={buttonRef} theme='success' mild={true} enabled={false}>
                    Pay now
                </Button>
                <Busy
                    targetRef={buttonRef}
                    popupPlacement='right-start'
                    popupOffset={states.nude[0] ? -10 : -15}
                    popupShift={states.nude[0] ? -5 : -10}
                    
                    enabled={states.enabled[0]}
                    active={states.active[0]}
                    
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                    
                    label='loading...'
                />
                <TypeScriptCode collapsable={false}>{`
export default function App() {
    const buttonRef = useRef(null);
    
    return (
        <Button
            elmRef={buttonRef}
            theme='success'
            mild={true}
            enabled={false}
        >
            Pay now
        </Button>
        <Busy
            targetRef={buttonRef}
            popupPlacement='right-start'
            popupOffset={${states.nude[0] ? -10 : -15}}
            popupShift={${states.nude[0] ? -5 : -10}}
            
            enabled={${states.enabled[0]}}
            active={${states.active[0]}}
            
            size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
            nude={${states.nude[0]}}
            theme='${states.theme[0]}'
            gradient={${states.gradient[0]}}
            outlined={${states.outlined[0]}}
            mild={${states.mild[0]}}
            
            label='loading...'
        />
    );
}
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <BusyOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoBusy as default }
