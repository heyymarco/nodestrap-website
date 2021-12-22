import { cssVals as spacersVals } from '@nodestrap/spacers'
import { parseNumber } from '@nodestrap/utilities'
import { useResetableState, Slider } from './DemoPanel'



export const spacerInitials = {
    spacer  : parseNumber(spacersVals.md as string) ?? 1,
};
export type SpacerInitials = typeof spacerInitials
export const useSpacerStates = (initials ?: Partial<SpacerInitials>) => {
    const initials2 : SpacerInitials = {
        ...spacerInitials,
        ...initials
    };

    const spacer = useResetableState(initials2.spacer, 0.05);

    return {
        spacer,
    };
}
export const SpacerOptions = (props: { states: ReturnType<typeof useSpacerStates> }) => {
    const { states } = props;
    
    
    
    return (<>
        <Slider
            name='Spacer width'
            min={0}
            max={8}
            step={states.spacer[4]}
            value={states.spacer[0]}
            setValue={states.spacer[1]}
        />
    </>);
}
