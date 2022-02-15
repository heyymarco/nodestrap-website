import { useResetableState, Option, ResetButton } from './DemoPanel';
import { ContentInitials, ContentOptionProps, ContentOptions, useContentStates } from './DemoPanel@Content';

import { Masonry, OrientationName } from '@nodestrap/masonry'
import { TypeScriptCode } from './Code';



export const masonryInitials = {
    orientation : undefined   as OrientationName|undefined,
};
export type MasonryInitials = typeof masonryInitials & Partial<ContentInitials>
export const useMasonryStates = (initials ?: Partial<MasonryInitials>) => {
    const initials2 : MasonryInitials = {
        ...masonryInitials,
        ...initials
    };
    
    const orientation  = useResetableState(initials2.orientation);

    return {
        ...useContentStates(initials2),
        orientation,
    }
}
export type MasonryOptionProps = { states: ReturnType<typeof useMasonryStates> } & ContentOptionProps
export const MasonryOptions = (props: MasonryOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='orientation'
            options={[undefined, 'block', 'inline']}
            value={states.orientation[0]}
            setValue={states.orientation[1]}
        />
        
        <ContentOptions
            {...props}
        />
    </>);
}



export const DemoMasonry = () => {
    const states   = useMasonryStates();
    const isInline = (states.orientation[0] === 'inline');
    
    return (
        <>
            <div className='preview'>
                <Masonry
                    style={{
                        [(states.orientation[0] === 'inline') ? 'height'    : 'width'   ] : '100%',
                        [(states.orientation[0] === 'inline') ? 'minHeight' : 'minWidth'] : '300px',
                        [(states.orientation[0] === 'inline') ? 'maxHeight' : 'maxWidth'] : '500px',
                    }}
                    orientation={states.orientation[0]}
                    
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                >
                    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ [isInline ? 'width': 'height']: '100px' }} />
                    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ [isInline ? 'width': 'height']: '60px' }} />
                    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ [isInline ? 'width': 'height']: '200px' }} />
                    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ [isInline ? 'width': 'height']: '170px' }} />
                    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ [isInline ? 'width': 'height']: '50px' }} />
                    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ [isInline ? 'width': 'height']: '120px' }} />
                    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ [isInline ? 'width': 'height']: '90px' }} />
                    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ [isInline ? 'width': 'height']: '150px' }} />
                </Masonry>
                <TypeScriptCode collapsable={false}>{`
<Masonry
    style={{
        ${isInline ? 'height   ' : 'width   '} : '100%',
        ${isInline ? 'minHeight' : 'minWidth'} : '300px',
        ${isInline ? 'maxHeight' : 'maxWidth'} : '500px',
    }}
    orientation=${states.orientation[0] ? `'${states.orientation[0]}'` : '{undefined}'}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ ${isInline ? 'width': 'height'}: '100px' }} />
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ ${isInline ? 'width': 'height'}: '60px' }} />
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ ${isInline ? 'width': 'height'}: '200px' }} />
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ ${isInline ? 'width': 'height'}: '170px' }} />
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ ${isInline ? 'width': 'height'}: '50px' }} />
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ ${isInline ? 'width': 'height'}: '120px' }} />
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ ${isInline ? 'width': 'height'}: '90px' }} />
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ ${isInline ? 'width': 'height'}: '150px' }} />
</Masonry>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <MasonryOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoMasonry as default }
