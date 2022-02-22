import { useResetableState, Option, ResetButton } from './DemoPanel';
import { IndicatorInitials, IndicatorOptionProps, IndicatorOptions, useIndicatorStates } from './DemoPanel@Indicator';

import { Card, CardStyle, OrientationName } from '@nodestrap/card'
import { TypeScriptCode } from './Code';



export const cardInitials = {
    orientation : 'block'  as OrientationName|undefined,
    cardStyle   : undefined as CardStyle|undefined,
};
export type CardInitials = typeof cardInitials & Partial<IndicatorInitials>
export const useCardStates = (initials ?: Partial<CardInitials>) => {
    const initials2 : CardInitials = {
        ...cardInitials,
        ...initials
    };
    
    const orientation = useResetableState(initials2.orientation);
    const cardStyle   = useResetableState(initials2.cardStyle);

    return {
        ...useIndicatorStates(initials2),

        orientation,
        cardStyle,
    }
}
export type CardOptionProps = { states: ReturnType<typeof useCardStates> } & IndicatorOptionProps
export const CardOptions = (props: CardOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='orientation'
            options={['block', 'inline']}
            value={states.orientation[0]}
            setValue={states.orientation[1]}
        />
        <Option
            orientation='block'
            name='cardStyle'
            options={[undefined, 'flat','flush','joined']}
            value={states.cardStyle[0]}
            setValue={states.cardStyle[1]}
        />

        <IndicatorOptions
            {...props}
        />
    </>);
}



export const DemoCard = () => {
    const states = useCardStates();
    
    return (
        <>
            <div className='preview'>
                <Card
                    orientation={states.orientation[0]}
                    cardStyle={states.cardStyle[0]}
                    
                    enabled={states.enabled[0]}
                    active={states.active[0]}
                    
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                    
                    header={<>
                        <h4>A Card Demonstration</h4>
                        <p>Just for Fun</p>
                    </>}
                    footer={<>
                        <p>It&apos;s awesome!</p>
                    </>}
                >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                    </p>
                    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                    </p>
                </Card>
                <TypeScriptCode collapsable={false}>{`
<Card
    orientation=${states.orientation[0] ? `'${states.orientation[0]}'` : '{undefined}'}
    cardStyle=${states.cardStyle[0] ? `'${states.cardStyle[0]}'` : '{undefined}'}
    
    enabled={${states.enabled[0]}}
    active={${states.active[0]}}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
    
    header={<>
        <h4>A Card Demonstration</h4>
        <p>Just for Fun</p>
    </>}
    footer={<>
        <p>It&apos;s awesome!</p>
    </>}
>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
</Card>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <CardOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoCard as default }
