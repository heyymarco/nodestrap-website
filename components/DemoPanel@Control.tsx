import { useResetableState, Option } from './DemoPanel';
import { IndicatorInitials, IndicatorOptions, useIndicatorStates } from './DemoPanel@Indicator';



export const controlInitials = {
    focus  : undefined as boolean|undefined,
    arrive : undefined as boolean|undefined,
};
export type ControlInitials = typeof controlInitials & Partial<IndicatorInitials>
export const useControlStates = (initials ?: Partial<ControlInitials>) => {
    const initials2 : ControlInitials = {
        ...controlInitials,
        ...initials
    };
    
    const focus  = useResetableState(initials2.focus);
    const arrive = useResetableState(initials2.arrive);

    return {
        ...useIndicatorStates(initials2),
        focus,
        arrive,
    }
}
export const ControlOptions = (props: { states: ReturnType<typeof useControlStates> }) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='focus'
            options={[undefined, false, true]}
            value={states.focus[0]}
            setValue={states.focus[1]}
        />
        
        <Option
            name='arrive'
            options={[undefined, false, true]}
            value={states.arrive[0]}
            setValue={states.arrive[1]}
        />

        <IndicatorOptions
            states={states}
        />
    </>);
}