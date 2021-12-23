import { useResetableState, Option } from './DemoPanel';
import { ControlInitials, ControlOptions, useControlStates } from './DemoPanel@Control';



export const actionControlInitials = {
    press : undefined as boolean|undefined,
};
export type ActionControlInitials = typeof actionControlInitials & Partial<ControlInitials>
export const useActionControlStates = (initials ?: Partial<ActionControlInitials>) => {
    const initials2 : ActionControlInitials = {
        ...actionControlInitials,
        ...initials
    };
    
    const press  = useResetableState(initials2.press);

    return {
        ...useControlStates(initials2),
        press,
    }
}
export const ActionControlOptions = (props: { states: ReturnType<typeof useActionControlStates> }) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='press'
            options={[undefined, false, true]}
            value={states.press[0]}
            setValue={states.press[1]}
        />

        <ControlOptions
            states={states}
        />
    </>);
}