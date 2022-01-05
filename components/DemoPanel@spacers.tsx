import { useEffect } from 'react';

import { cssVals as spacersVals } from '@nodestrap/spacers'
import { useResetableState, Slider, ResetButton } from './DemoPanel'

import { parseNumber } from '@nodestrap/utilities'

import { Basic } from '@nodestrap/basic'
import { spacers } from '@nodestrap/spacers'



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



export const DemoSpacers = () => {
    const states = useSpacerStates();
    const spacer = states.spacer[0];

    useEffect(() => {
        const handler = setTimeout(() => {
            new Promise<void>((resolve) => {
                spacers.md  = `${spacer}rem` as any;
                spacers.xxs = [['calc(', spacers.md, '/', 8  , ')']] as any,
                spacers.xs  = [['calc(', spacers.md, '/', 4  , ')']] as any,
                spacers.sm  = [['calc(', spacers.md, '/', 2  , ')']] as any,
                spacers.lg  = [['calc(', spacers.md, '*', 1.5, ')']] as any,
                spacers.xl  = [['calc(', spacers.md, '*', 3  , ')']] as any,
                spacers.default = spacers.md;
                resolve();
            });
        }, 10);

        return () => clearTimeout(handler);
    }, [spacer]);

    return (
        <>
            <span>Preview</span>
            <Basic
                theme='secondary'
            >
                <Basic
                    theme='primary'
                >
                    hello world
                </Basic>
            </Basic>

            <SpacerOptions states={states} />

            <ResetButton states={states} />
        </>
    );
}
export { DemoSpacers as default }
