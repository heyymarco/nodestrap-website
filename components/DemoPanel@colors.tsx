import { cssVals as colorVals } from '@nodestrap/colors'
import Color from 'color'
import { useResetableState, Slider } from './DemoPanel'



export const colorInitials = (() => {
    const color = Color(colorVals.blue);
    return {
        hue: color.hue(),
        sat: color.saturationl(),
        lgt: color.lightness(),
    };
})();
export type ColorInitials = typeof colorInitials
export const useColorStates = (initials ?: Partial<ColorInitials>) => {
    const initials2 : ColorInitials = {
        ...colorInitials,
        ...initials
    };

    const hue = useResetableState(initials2.hue, 1);
    const sat = useResetableState(initials2.sat, 1);
    const lgt = useResetableState(initials2.lgt, 1);

    return {
        hue,
        sat,
        lgt,
    };
}
export const ColorOptions = (props: { states: ReturnType<typeof useColorStates> }) => {
    const { states } = props;
    
    
    
    return (<>
        <Slider
            name='Hue'
            min={0}
            max={360}
            step={states.hue[4]}
            value={states.hue[0]}
            setValue={states.hue[1]}
        />
        
        <Slider
            name='Saturation'
            min={0}
            max={100}
            step={states.sat[4]}
            value={states.sat[0]}
            setValue={states.sat[1]}
        />

        <Slider
            name='Lightness'
            min={0}
            max={100}
            step={states.lgt[4]}
            value={states.lgt[0]}
            setValue={states.lgt[1]}
        />
    </>);
}
