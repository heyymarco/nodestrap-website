import { useResetableState, Option, ResetButton } from './DemoPanel';
import { IndicatorInitials, IndicatorOptionProps, IndicatorOptions, useIndicatorStates } from './DemoPanel@Indicator';

import { Popup } from '@nodestrap/popup'
import { TypeScriptCode } from './Code';



export const popupInitials = {
    active   : true as boolean|undefined,
};
export type PopupInitials = typeof popupInitials & Partial<IndicatorInitials>
export const usePopupStates = (initials ?: Partial<PopupInitials>) => {
    const initials2 : PopupInitials = {
        ...popupInitials,
        ...initials
    };

    return {
        ...useIndicatorStates(initials2),
    }
}
export type PopupOptionProps = { states: ReturnType<typeof usePopupStates> } & IndicatorOptionProps
export const PopupOptions = (props: PopupOptionProps) => {
    // const { states } = props;
    
    
    
    return (<>
        <IndicatorOptions
            {...props}
        />
    </>);
}



export const DemoPopup = () => {
    const states = usePopupStates();
    
    return (
        <>
            <div className='preview'>
                <Popup
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
                </Popup>
                <TypeScriptCode collapsable={false}>{`
<Popup
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
</Popup>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <PopupOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoPopup as default }
