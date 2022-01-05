import { useEffect } from 'react';

import { cssVals as colorVals } from '@nodestrap/colors'
import { useResetableState, Slider, ResetButton } from './DemoPanel'

import Color from 'color'

import { Basic } from '@nodestrap/basic'
import { defineTheme } from '@nodestrap/colors'


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



export const DemoColors = () => {
    const states = useColorStates();
    const hue = states.hue[0];
    const sat = states.sat[0];
    const lgt = states.lgt[0];

    useEffect(() => {
        const handler = setTimeout(() => {
            new Promise<void>((resolve) => {
                defineTheme('primary', Color.hsl(hue, sat, lgt));
                resolve();
            });
        }, 10);

        return () => clearTimeout(handler);
    }, [hue, sat, lgt]);
    
    return (
        <>
            <span>Preview</span>
            <Basic
                theme='primary'
            >
                hello world
            </Basic>

            <hr />

            <ColorOptions states={states} />

            <ResetButton states={states} />
        </>
    );
}
export { DemoColors as default }
