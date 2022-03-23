import type { SizeName, ThemeName } from '@nodestrap/basic';
import { useResetableState, Option, ThemeOption, ResetButton } from './DemoPanel'
import { Warning } from './Info';

import { Basic } from '@nodestrap/basic'
import { Label } from '@nodestrap/label';
import { TypeScriptCode } from './Code';



export const basicInitials = {
    size     : undefined as SizeName|undefined,
    nude     : false     as boolean|undefined,
    theme    : 'primary' as ThemeName|undefined,
    gradient : false,
    outlined : false,
    mild     : false     as boolean|undefined,
};
export type BasicInitials = typeof basicInitials
export const useBasicStates = (initials ?: Partial<BasicInitials>) => {
    const initials2 : BasicInitials = {
        ...basicInitials,
        ...initials
    };

    const size     = useResetableState(initials2.size);
    const nude     = useResetableState(initials2.nude);
    const theme    = useResetableState(initials2.theme);
    const gradient = useResetableState(initials2.gradient);
    const outlined = useResetableState(initials2.outlined);
    const mild     = useResetableState(initials2.mild);

    return {
        size,
        nude,
        theme,
        gradient,
        outlined,
        mild,
    };
}
export type BasicOptionProps = { states: ReturnType<typeof useBasicStates>, warning?: React.ReactChild|false, warningBothMildOutlined?: boolean } & {
    enableUndefinedNude ?: boolean,
    enableUndefinedMild ?: boolean,
}
export const BasicOptions = (props: BasicOptionProps) => {
    const { states, warning, warningBothMildOutlined = true } = props;
    
    
    
    return (<>
        <Option
            name='size'
            options={['sm', undefined, 'lg']}
            value={states.size[0]}
            setValue={states.size[1]}
        />
        
        <Option
            name='nude'
            options={[...((props.enableUndefinedNude ?? false) ? [undefined] : []), false, true]}
            value={states.nude[0]}
            setValue={states.nude[1]}
        />

        <ThemeOption
            value={states.theme[0]}
            setValue={states.theme[1]}
        />
        
        <Option
            name='gradient'
            options={[false, true]}
            value={states.gradient[0]}
            setValue={states.gradient[1]}
        />
        
        <Option
            name='outlined'
            options={[false, true]}
            value={states.outlined[0]}
            setValue={states.outlined[1]}
        />

        { warning }

        {(states.outlined[0] && states.mild[0]) && warningBothMildOutlined && <>
            <Label>Warning</Label>
            <Warning>
                If both <code>outlined</code> and <code>mild</code> are <code>true</code>, the <code>outlined</code> is
                always <strong>dominant</strong> than <code>mild</code>.
            </Warning>
        </>}
        
        <Option
            name='mild'
            options={[...((props.enableUndefinedMild ?? false) ? [undefined] : []), false, true]}
            value={states.mild[0]}
            setValue={states.mild[1]}
        />
    </>);
}



export const DemoBasic = () => {
    const states = useBasicStates();
    
    return (
        <>
            <div className='preview'>
                <Basic
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                >
                    hello world
                </Basic>
                <TypeScriptCode collapsable={false}>{`
<Basic
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    hello world
</Basic>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <BasicOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoBasic as default }
