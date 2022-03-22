import { useResetableState, Option, ResetButton } from './DemoPanel';
import { BasicInitials, BasicOptionProps, BasicOptions, useBasicStates } from './DemoPanel@Basic';
import { Warning } from './Info';

import { Indicator } from '@nodestrap/indicator'
import { Label } from '@nodestrap/label';
import { TypeScriptCode } from './Code';



export const indicatorInitials = {
    mild     : true,

    enabled  : true,
    active   : undefined as boolean|undefined,
    readOnly : false,
};
export type IndicatorInitials = typeof indicatorInitials & Partial<BasicInitials>
export const useIndicatorStates = (initials ?: Partial<IndicatorInitials>) => {
    const initials2 : IndicatorInitials = {
        ...indicatorInitials,
        ...initials
    };
    
    const enabled  = useResetableState(initials2.enabled);
    const active   = useResetableState(initials2.active);
    const readOnly = useResetableState(initials2.readOnly);

    return {
        ...useBasicStates(initials2),
        enabled,
        active,
        readOnly,
    }
}
export type IndicatorOptionProps = { states: ReturnType<typeof useIndicatorStates>, warningEitherMildOutlined?: boolean } & BasicOptionProps
export const IndicatorOptions = (props: IndicatorOptionProps) => {
    const { states, warningEitherMildOutlined = true } = props;
    
    
    
    return (<>
        <Option
            name='enabled'
            options={[false, true]}
            value={states.enabled[0]}
            setValue={states.enabled[1]}
        />
        
        <Option
            name='active'
            options={[undefined, false, true]}
            value={states.active[0]}
            setValue={states.active[1]}
        />

        <BasicOptions
            {...props}
            warning={(!states.outlined[0] && !states.mild[0]) && warningEitherMildOutlined && <>
                <Label>Warning</Label>
                <Warning>
                    Either <code>outlined</code> or <code>mild</code> should be <code>true</code> to
                    be able to see the effect of <code>active=true</code>.
                </Warning>
            </>}
        />
    </>);
}



export const DemoIndicator = () => {
    const states = useIndicatorStates();
    
    return (
        <>
            <div className='preview'>
                <Indicator
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
                </Indicator>
                <TypeScriptCode collapsable={false}>{`
<Indicator
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
</Indicator>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <IndicatorOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoIndicator as default }
