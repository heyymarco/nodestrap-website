// nodestrap components:
import {
    // react components:
    ContainerProps,
    Container,
}                           from '@nodestrap/container'



export interface SectionProps extends ContainerProps {
}
export function Section(props: SectionProps) {
    return (
        <Container
            {...props}
            
            tag={props.tag ?? 'section'}
            classes={[...(props.classes ?? []),
                'fill',
            ]}
        />
    );
}
export default Section;
