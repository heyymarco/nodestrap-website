import { cssVals as borderVals, borderRadius as radius } from '@nodestrap/borders'
import { parseNumber } from '@nodestrap/utilities'
import { useResetableState, Slider, Option } from './DemoPanel'



export const borderInitials = {
    width  : parseNumber(borderVals.defaultWidth as string) ?? 1,
    radius : parseNumber(radius.cssVals.md as string) ?? 0,
    style  : borderVals.style as string,
};
export type BorderInitials = typeof borderInitials
export const useBorderStates = (initials ?: Partial<BorderInitials>) => {
    const initials2 : BorderInitials = {
        ...borderInitials,
        ...initials
    };

    const width  = useResetableState(initials2.width, 1);
    const radius = useResetableState(initials2.radius, 0.05);
    const style  = useResetableState(initials2.style);

    return {
        width,
        radius,
        style,
    };
}
export const BorderOptions = (props: { states: ReturnType<typeof useBorderStates> }) => {
    const { states } = props;
    
    
    
    return (<>
        <Slider
            name='Border width'
            min={0}
            max={8}
            step={states.width[4]}
            value={states.width[0]}
            setValue={states.width[1]}
        />
        
        <Slider
            name='Border radius'
            min={0}
            max={2}
            step={states.radius[4]}
            value={states.radius[0]}
            setValue={states.radius[1]}
        />

        <Option
            name='Border style'
            options={['none', 'solid', 'dashed', 'dotted']}
            value={states.style[0]}
            setValue={states.style[1]}
        />
    </>);
}
