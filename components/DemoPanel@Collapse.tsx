import { useRef } from 'react';

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { PopupInitials, PopupOptionProps, PopupOptions, usePopupStates } from './DemoPanel@Popup';

import { Collapse, OrientationName } from '@nodestrap/collapse'
import Button from '@nodestrap/button';
import { ThemeName } from '@nodestrap/basic';
import { TypeScriptCode } from './Code';



export const collapseInitials = {
    theme       : 'success' as ThemeName|undefined,
    
    orientation : 'block'   as OrientationName|undefined,
};
export type CollapseInitials = typeof collapseInitials & Partial<PopupInitials>
export const useCollapseStates = (initials ?: Partial<CollapseInitials>) => {
    const initials2 : CollapseInitials = {
        ...collapseInitials,
        ...initials
    };
    
    const orientation = useResetableState(initials2.orientation);

    return {
        ...usePopupStates(initials2),
        
        orientation,
    }
}
export type CollapseOptionProps = { states: ReturnType<typeof useCollapseStates> } & PopupOptionProps
export const CollapseOptions = (props: CollapseOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='orientation'
            options={['block', 'inline']}
            value={states.orientation[0]}
            setValue={states.orientation[1]}
        />
        
        <PopupOptions
            {...props}
            warningEitherMildOutlined={false}
        />
    </>);
}



export const DemoCollapse = () => {
    const states = useCollapseStates();
    
    return (
        <>
            <div className='preview'>
                <Collapse
                    orientation={states.orientation[0]}
                    
                    enabled={states.enabled[0]}
                    active={states.active[0]}
                    
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                >
                    <p style={{ whiteSpace: 'nowrap' }}>
                        Hello everyone!
                    </p>
                    <p style={{ whiteSpace: 'nowrap' }}>
                        This is an awesome message!
                    </p>
                    <p style={{ whiteSpace: 'nowrap' }}>
                        It supports <strong>any HTML</strong> tags.
                    </p>
                </Collapse>
                <TypeScriptCode collapsable={false}>{`
<Collapse
    orientation=${states.orientation[0] ? `'${states.orientation[0]}'` : '{undefined}'}
    
    enabled={${states.enabled[0]}}
    active={${states.active[0]}}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    <p style={{ whiteSpace: 'nowrap' }}>
        Hello everyone!
    </p>
    <p style={{ whiteSpace: 'nowrap' }}>
        This is an awesome message!
    </p>
    <p style={{ whiteSpace: 'nowrap' }}>
        It supports <strong>any HTML</strong> tags.
    </p>
</Collapse>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <CollapseOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoCollapse as default }
