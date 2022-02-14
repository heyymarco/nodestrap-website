import { ThemeName } from '@nodestrap/basic';
import { useResetableState, Option, ResetButton } from './DemoPanel';
import { BasicInitials, BasicOptions, useBasicStates } from './DemoPanel@Basic';

import { Label, LabelStyle } from '@nodestrap/label'
import { TypeScriptCode } from './Code';



export const labelInitials = {
    theme      : 'secondary' as ThemeName|undefined,
    mild       : true,
    
    labelStyle : undefined   as LabelStyle|undefined,
};
export type LabelInitials = typeof labelInitials & Partial<BasicInitials>
export const useLabelStates = (initials ?: Partial<LabelInitials>) => {
    const initials2 : LabelInitials = {
        ...labelInitials,
        ...initials
    };
    
    const labelStyle  = useResetableState(initials2.labelStyle);

    return {
        ...useBasicStates(initials2),
        labelStyle,
    }
}
export const LabelOptions = (props: { states: ReturnType<typeof useLabelStates> }) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='labelStyle'
            options={[undefined, 'content']}
            value={states.labelStyle[0]}
            setValue={states.labelStyle[1]}
        />
        
        <BasicOptions
            states={states}
        />
    </>);
}



export const DemoLabel = () => {
    const states = useLabelStates();
    
    return (
        <>
            <div className='preview'>
                <Label
                    labelStyle={states.labelStyle[0]}
                    
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                >
                    hello world
                </Label>
                <TypeScriptCode collapsable={false}>{`
<Label
    labelStyle=${states.labelStyle[0] ? `'${states.labelStyle[0]}'` : '{undefined}'}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    hello world
</Label>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <LabelOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoLabel as default }
