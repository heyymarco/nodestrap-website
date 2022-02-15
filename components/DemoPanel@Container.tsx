import { useResetableState, Option, ResetButton } from './DemoPanel';
import { BasicInitials, BasicOptionProps, BasicOptions, useBasicStates } from './DemoPanel@Basic';

import { Container } from '@nodestrap/container'
import { TypeScriptCode } from './Code';



export const containerInitials = {
    mild     : true,
};
export type ContainerInitials = typeof containerInitials & Partial<BasicInitials>
export const useContainerStates = (initials ?: Partial<ContainerInitials>) => {
    const initials2 : ContainerInitials = {
        ...containerInitials,
        ...initials
    };

    return {
        ...useBasicStates(initials2),
    }
}
export type ContainerOptionProps = { states: ReturnType<typeof useContainerStates> } & BasicOptionProps
export const ContainerOptions = (props: ContainerOptionProps) => {
    return (<>
        <BasicOptions
            {...props}
        />
    </>);
}



export const DemoContainer = () => {
    const states = useContainerStates();
    
    return (
        <>
            <div className='preview'>
                <Container
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                >
                    <div style={{ background: 'yellow' }}>
                        hello world
                    </div>
                </Container>
                <TypeScriptCode collapsable={false}>{`
<Container
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    <div style={{ background: 'yellow' }}>
        hello world
    </div>
</Container>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <ContainerOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoContainer as default }
