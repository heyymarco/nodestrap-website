import { useResetableState, Option, ResetButton } from './DemoPanel';
import { ContentInitials, ContentOptionProps, ContentOptions, useContentStates } from './DemoPanel@Content';

import { Carousel } from '@nodestrap/carousel'
import { TypeScriptCode } from './Code';



export const carouselInitials = {
};
export type CarouselInitials = typeof carouselInitials & Partial<ContentInitials>
export const useCarouselStates = (initials ?: Partial<CarouselInitials>) => {
    const initials2 : CarouselInitials = {
        ...carouselInitials,
        ...initials
    };

    return {
        ...useContentStates(initials2),
    }
}
export type CarouselOptionProps =  { states: ReturnType<typeof useCarouselStates> } & ContentOptionProps
export const CarouselOptions = (props: CarouselOptionProps) => {
    return (<>
        <ContentOptions
            {...props}
        />
    </>);
}



export const DemoCarousel = () => {
    const states = useCarouselStates();
    
    return (
        <>
            <div className='preview'>
                <Carousel
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                    
                    style={{ maxWidth: '300px', maxHeight: '250px' }}
                >
                    <img alt='lorem image' src='/images/lorem-img/waves-800x600.jpg'  />
                    <img alt='lorem image' src='/images/lorem-img/leaf-800x700.jpg'  />
                    <img alt='lorem image' src='/images/lorem-img/building-800x500.jpg'  />
                    <img alt='lorem image' src='/images/lorem-img/street-800x800.jpg'  />
                    <img alt='lorem image' src='/images/lorem-img/tulip-700x400.jpg'  />
                    <img alt='lorem image' src='/images/lorem-img/water-500x800.jpg'  />
                    <img alt='lorem image' src='/images/lorem-img/wood-700x600.jpg'  />
                </Carousel>
                <TypeScriptCode collapsable={false}>{`
<Carousel
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    <img alt='lorem image' src='/images/lorem-img/waves-800x600.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/leaf-800x700.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/building-800x500.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/street-800x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/tulip-700x400.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/water-500x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/wood-700x600.jpg'  />
</Carousel>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <CarouselOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoCarousel as default }
