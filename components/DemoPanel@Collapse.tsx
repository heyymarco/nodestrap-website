import { useRef } from 'react';

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { PopupInitials, PopupOptionProps, PopupOptions, usePopupStates } from './DemoPanel@Popup';

import { Collapse } from '@nodestrap/collapse'
import Button from '@nodestrap/button';
import { ThemeName } from '@nodestrap/basic';
import { TypeScriptCode } from './Code';



export const collapseInitials = {
    theme      : 'success' as ThemeName|undefined,
};
export type CollapseInitials = typeof collapseInitials & Partial<PopupInitials>
export const useCollapseStates = (initials ?: Partial<CollapseInitials>) => {
    const initials2 : CollapseInitials = {
        ...collapseInitials,
        ...initials
    };

    return {
        ...usePopupStates(initials2),
    }
}
export type CollapseOptionProps = { states: ReturnType<typeof useCollapseStates> } & PopupOptionProps
export const CollapseOptions = (props: CollapseOptionProps) => {
    // const { states } = props;
    
    
    
    return (<>
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
                    enabled={states.enabled[0]}
                    active={states.active[0]}
                    
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
                </Collapse>
                <TypeScriptCode collapsable={false}>{`
<Collapse
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
