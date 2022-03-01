import { useRef } from 'react';

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { PopupInitials, PopupOptionProps, PopupOptions, usePopupStates } from './DemoPanel@Popup';

import Tooltip from '@nodestrap/tooltip'
import Button from '@nodestrap/button';
import { ThemeName } from '@nodestrap/basic';
import { TypeScriptCode } from './Code';



export const tooltipInitials = {
    theme      : 'warning' as ThemeName|undefined,
};
export type TooltipInitials = typeof tooltipInitials & Partial<PopupInitials>
export const useTooltipStates = (initials ?: Partial<TooltipInitials>) => {
    const initials2 : TooltipInitials = {
        ...tooltipInitials,
        ...initials
    };

    return {
        ...usePopupStates(initials2),
    }
}
export type TooltipOptionProps = { states: ReturnType<typeof useTooltipStates> } & PopupOptionProps
export const TooltipOptions = (props: TooltipOptionProps) => {
    // const { states } = props;
    
    
    
    return (<>
        <PopupOptions
            {...props}
            warningEitherMildOutlined={false}
        />
    </>);
}



export const DemoTooltip = () => {
    const states = useTooltipStates();
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    return (
        <>
            <div className='preview'>
                <div>
                    <Button elmRef={buttonRef} theme='primary'>
                        Products
                    </Button>
                    <Tooltip
                        targetRef={buttonRef}
                        
                        enabled={states.enabled[0]}
                        active={states.active[0]}
                        
                        size={states.size[0]}
                        nude={states.nude[0]}
                        theme={states.theme[0]}
                        gradient={states.gradient[0]}
                        outlined={states.outlined[0]}
                        mild={states.mild[0]}
                    >
                        This is <strong>awesome</strong>!
                    </Tooltip>
                </div>
                <TypeScriptCode collapsable={false}>{`
export default function App() {
    const buttonRef = useRef(null);
    
    return (
        <Button
            elmRef={buttonRef}
            theme='primary'
        >
            Products
            <Tooltip
                targetRef={buttonRef}
                
                enabled={${states.enabled[0]}}
                active={${states.active[0]}}
                
                size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
                nude={${states.nude[0]}}
                theme='${states.theme[0]}'
                gradient={${states.gradient[0]}}
                outlined={${states.outlined[0]}}
                mild={${states.mild[0]}}
            >
                This is <strong>awesome</strong>!
            </Tooltip>
        </Button>
    );
}
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <TooltipOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoTooltip as default }
