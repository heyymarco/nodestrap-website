import { useRef } from 'react';

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { PopupInitials, PopupOptionProps, PopupOptions, usePopupStates } from './DemoPanel@Popup';

import { Alert } from '@nodestrap/alert'
import Button from '@nodestrap/button';
import { ThemeName } from '@nodestrap/basic';
import { TypeScriptCode } from './Code';



export const alertInitials = {
    theme      : 'success' as ThemeName|undefined,
};
export type AlertInitials = typeof alertInitials & Partial<PopupInitials>
export const useAlertStates = (initials ?: Partial<AlertInitials>) => {
    const initials2 : AlertInitials = {
        ...alertInitials,
        ...initials
    };

    return {
        ...usePopupStates(initials2),
    }
}
export type AlertOptionProps = { states: ReturnType<typeof useAlertStates> } & PopupOptionProps
export const AlertOptions = (props: AlertOptionProps) => {
    // const { states } = props;
    
    
    
    return (<>
        <PopupOptions
            {...props}
            warningEitherMildOutlined={false}
        />
    </>);
}



export const DemoAlert = () => {
    const states = useAlertStates();
    
    return (
        <>
            <div className='preview'>
                <Alert
                    enabled={states.enabled[0]}
                    active={states.active[0]}
                    onActiveChange={(newActive) => states.active[1](newActive)}
                    
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                >
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />
                        Nihil, dolore hic excepturi doloribus voluptas consectetur debitis incidunt minus sit.
                    </p>
                    <p>
                        Quae, aspernatur aliquam. Dicta, repudiandae nostrum? Nulla vel laborum alias cupiditate.
                    </p>
                </Alert>
                <TypeScriptCode collapsable={false}>{`
<Alert
    enabled={${states.enabled[0]}}
    active={${states.active[0]}}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />
        Nihil, dolore hic excepturi doloribus voluptas consectetur debitis incidunt minus sit.
    </p>
    <p>
        Quae, aspernatur aliquam. Dicta, repudiandae nostrum? Nulla vel laborum alias cupiditate.
    </p>
</Alert>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <AlertOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoAlert as default }
