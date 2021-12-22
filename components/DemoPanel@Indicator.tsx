import { useResetableState, Option } from './DemoPanel';
import { basicInitials, BasicInitials, BasicOptions, useBasicStates } from './DemoPanel@Basic';
import { Warning } from './Info';



export const indicatorInitials = {
    mild     : true,

    enabled  : true,
    active   : false,
    readOnly : false,
};
export type IndicatorInitials = typeof indicatorInitials & BasicInitials
export const useIndicatorStates = (initials ?: Partial<IndicatorInitials>) => {
    const initials2 : IndicatorInitials = {
        ...basicInitials,
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
export const IndicatorOptions = (props: { states: ReturnType<typeof useIndicatorStates> }) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='enabled'
            options={[false, true]}
            value={states.enabled[0]}
            setValue={states.enabled[1]}
        />
        
        <Option
            name='active'
            options={[false, true]}
            value={states.active[0]}
            setValue={states.active[1]}
        />
        
        <Option
            name='readOnly'
            options={[false, true]}
            value={states.readOnly[0]}
            setValue={states.readOnly[1]}
        />

        <BasicOptions
            states={states}
            warning={(!states.outlined[0] && !states.mild[0]) && <>
                <span>Warning</span>
                <Warning>
                    Either <code>outlined</code> or <code>mild</code> should be <code>true</code> to
                    be able to see the effect of <code>active=true</code>.
                </Warning>
            </>}
        />
    </>);
}