import { useResetableState, Option, ResetButton } from './DemoPanel';
import { EditableActionControlInitials, EditableActionControlOptionProps, EditableActionControlOptions, useEditableActionControlStates } from './DemoPanel@EditableActionControl';

import { Range, cssProps as rangeConfig, OrientationName } from '@nodestrap/range'
import { TypeScriptCode } from './Code';



rangeConfig.minInlineSize = '200px' as any;



export const rangeInitials = {
    enableValidation : false as boolean|undefined,
    nude             : true,
    mild             : false,

    orientation      : 'inline'  as OrientationName|undefined,
};
export type RangeInitials = typeof rangeInitials & Partial<EditableActionControlInitials>
export const useRangeStates = (initials ?: Partial<RangeInitials>) => {
    const initials2 : RangeInitials = {
        ...rangeInitials,
        ...initials
    };

    const orientation  = useResetableState(initials2.orientation);

    return {
        ...useEditableActionControlStates(initials2),
        orientation,
    }
}
export type RangeOptionProps = { states: ReturnType<typeof useRangeStates> } & EditableActionControlOptionProps
export const RangeOptions = (props: RangeOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='orientation'
            options={['block', 'inline']}
            value={states.orientation[0]}
            setValue={states.orientation[1]}
        />
        
        <EditableActionControlOptions
            {...props}
            warningEitherMildOutlined={false}
        />
    </>);
}



export const DemoRange = () => {
    const states = useRangeStates();
    
    return (
        <>
            <div className='preview'>
                <Range
                    orientation={states.orientation[0]}
                    
                    press={states.press[0]}
                    enableValidation={states.enableValidation[0]}
                    isValid={states.isValid[0]}
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
                />
                <TypeScriptCode collapsable={false}>{`
<Range
    orientation=${states.orientation[0] ? `'${states.orientation[0]}'` : '{undefined}'}
    
    press={${states.press[0]}}
    enableValidation={${states.enableValidation[0]}}
    isValid={${states.isValid[0]}}
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
/>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <RangeOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoRange as default }
