import { SizeName, ThemeName } from '@nodestrap/basic';
import { useResetableState, Option, ThemeOption, ResetButton } from './DemoPanel'
import { Warning } from './Info';

import { Basic } from '@nodestrap/basic'
import { TypeScriptCode } from './Code';



export const basicInitials = {
    size     : undefined as SizeName|undefined,
    nude     : false,
    theme    : 'primary' as ThemeName|undefined,
    gradient : false,
    outlined : false,
    mild     : false,
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
export const BasicOptions = (props: { states: ReturnType<typeof useBasicStates>, warning?: React.ReactChild|false }) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='size'
            options={['sm', undefined, 'lg']}
            value={states.size[0]}
            setValue={states.size[1]}
        />
        
        <Option
            name='nude'
            options={[false, true]}
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

        { props.warning }

        {(states.outlined[0] && states.mild[0]) && <>
            <span>Warning</span>
            <Warning>
                If both <code>outlined</code> and <code>mild</code> are <code>true</code>, the <code>outlined</code> is
                always <strong>dominant</strong> than <code>mild</code>.
            </Warning>
        </>}
        
        <Option
            name='mild'
            options={[false, true]}
            value={states.mild[0]}
            setValue={states.mild[1]}
        />
    </>);
}



export const DemoBasic = () => {
    const states = useBasicStates();
    
    return (
        <>
            <span>Preview</span>
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

            <hr />
            
            <BasicOptions states={states} />
            
            <ResetButton states={states} />

            <span>Code</span>
            <TypeScriptCode>{`
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
        </>
    );
}
export { DemoBasic as default }
