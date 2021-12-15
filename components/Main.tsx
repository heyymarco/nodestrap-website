// nodestrap components:
import {
    // react components:
    ContainerProps,
    Container,
}                           from '@nodestrap/container'



export interface SectionProps extends ContainerProps {
}
export function Main(props: SectionProps) {
    return (
        <Container
            {...props}
            
            tag={props.tag ?? 'main'}
        />
    );
}
export default Main;