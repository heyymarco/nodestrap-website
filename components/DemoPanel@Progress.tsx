import { useResetableState, Option, ResetButton } from './DemoPanel';
import { BasicInitials, BasicOptionProps, BasicOptions, useBasicStates } from './DemoPanel@Basic';

import { Progress, ProgressBar, ProgressStyle, OrientationName } from '@nodestrap/progress'
import { TypeScriptCode } from './Code';



export const progressInitials = {
    orientation   : 'inline'  as OrientationName|undefined,
    progressStyle : undefined as ProgressStyle|undefined,
};
export type ProgressInitials = typeof progressInitials & Partial<BasicInitials>
export const useProgressStates = (initials ?: Partial<ProgressInitials>) => {
    const initials2 : ProgressInitials = {
        ...progressInitials,
        ...initials
    };
    
    const orientation   = useResetableState(initials2.orientation);
    const progressStyle = useResetableState(initials2.progressStyle);

    return {
        ...useBasicStates(initials2),
        
        orientation,
        progressStyle,
    }
}
export type ProgressOptionProps = { states: ReturnType<typeof useProgressStates>, warningEitherMildOutlined?: boolean } & BasicOptionProps
export const ProgressOptions = (props: ProgressOptionProps) => {
    const { states, warningEitherMildOutlined = true } = props;
    
    
    
    return (<>
        <Option
            name='orientation'
            options={['block', 'inline']}
            value={states.orientation[0]}
            setValue={states.orientation[1]}
        />
        <Option
            orientation='block'
            name='progressStyle'
            options={[undefined, 'flat','flush','joined']}
            value={states.progressStyle[0]}
            setValue={states.progressStyle[1]}
        />

        <BasicOptions
            {...props}
        />
    </>);
}



export const DemoProgress = () => {
    const states = useProgressStates();
    
    return (
        <>
            <div className='preview'>
                <Progress
                    orientation={states.orientation[0]}
                    progressStyle={states.progressStyle[0]}
                    
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                    
                    style={{
                        alignSelf: 'stretch',
                    }}
                >
                    <ProgressBar value={30}>
                        30%
                    </ProgressBar>
                </Progress>
                <TypeScriptCode collapsable={false}>{`
<Progress
    orientation=${states.orientation[0] ? `'${states.orientation[0]}'` : '{undefined}'}
    progressStyle=${states.progressStyle[0] ? `'${states.progressStyle[0]}'` : '{undefined}'}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    <ProgressBar value={30}>
        30%
    </ProgressBar>
</Progress>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <ProgressOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoProgress as default }
