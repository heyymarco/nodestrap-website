import { useResetableState, Option, ResetButton } from './DemoPanel';
import { BasicInitials, BasicOptions, useBasicStates } from './DemoPanel@Basic';

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
export const ContainerOptions = (props: { states: ReturnType<typeof useContainerStates> }) => {
    const { states } = props;
    
    
    
    return (<>
        <BasicOptions
            states={states}
        />
    </>);
}



export const DemoContainer = () => {
    const states = useContainerStates();
    
    return (
        <>
            <span>Preview</span>
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

            <hr />
            
            <ContainerOptions states={states} />
            
            <ResetButton states={states} />

            <span>Code</span>
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
        </>
    );
}
export { DemoContainer as default }
