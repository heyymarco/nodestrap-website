import { useRef } from 'react';

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { ModalInitials, ModalOptionProps, ModalOptions, useModalStates } from './DemoPanel@Modal';

import { ModalCardStyle, ModalCard } from '@nodestrap/modal-card'
import { Content } from '@nodestrap/content'
import type {
    Prop,
}                           from '@cssfn/css-types'   // ts defs support for cssfn
import { ThemeName } from '@nodestrap/basic';
import { TypeScriptCode } from './Code';
import { ParagraphLorem } from './common';



export const modalCardInitials = {
    modalCardStyle : undefined as ModalCardStyle|undefined,
    horzAlign      : 'center' as Prop.JustifyItems,
    vertAlign      : 'center' as Prop.AlignItems,
};
export type ModalCardInitials = typeof modalCardInitials & Partial<ModalInitials>
export const useModalCardStates = (initials ?: Partial<ModalCardInitials>) => {
    const initials2 : ModalCardInitials = {
        ...modalCardInitials,
        ...initials
    };
    
    const horzAlign      = useResetableState(initials2.horzAlign);
    const vertAlign      = useResetableState(initials2.vertAlign);
    const modalCardStyle = useResetableState(initials2.modalCardStyle);
    
    return {
        ...useModalStates(initials2),
        horzAlign,
        vertAlign,
        modalCardStyle,
    }
}
export type ModalCardOptionProps = { states: ReturnType<typeof useModalCardStates> } & ModalOptionProps
export const ModalCardOptions = (props: ModalCardOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='horzAlign'
            options={['start', 'center', 'end']}
            value={states.horzAlign[0]}
            setValue={states.horzAlign[1]}
        />
        <Option
            name='vertAlign'
            options={['start', 'center', 'end']}
            value={states.vertAlign[0]}
            setValue={states.vertAlign[1]}
        />
        <Option
            name='modalCardStyle'
            options={[undefined, 'scrollable']}
            value={states.modalCardStyle[0]}
            setValue={states.modalCardStyle[1]}
        />
        
        <ModalOptions
            {...props}
            warningEitherMildOutlined={false}
        />
    </>);
}



export const DemoModalCard = () => {
    const states = useModalCardStates();
    const viewportRef = useRef(null);
    
    return (
        <>
            <div className='preview'>
                <div ref={viewportRef} style={{ position: 'relative', padding: '1rem', width: '100%', height: '15rem', overflow: 'hidden', flex: '0 0 auto', background: 'white' }}>
                    <ModalCard
                        horzAlign={states.horzAlign[0]}
                        vertAlign={states.vertAlign[0]}
                        modalCardStyle={states.modalCardStyle[0]}
                        backdropStyle={states.backdropStyle[0]}
                        
                        enabled={states.enabled[0]}
                        active={states.active[0]}
                        onActiveChange={(newActive) => states.active[1](newActive)}
                        
                        size={states.size[0]}
                        nude={states.nude[0]}
                        theme={states.theme[0]}
                        gradient={states.gradient[0]}
                        outlined={states.outlined[0]}
                        mild={states.mild[0]}
                        
                        viewportRef={viewportRef}
                    >
                        <Content>
                            <p>
                                Hello everyone!
                            </p>
                            <p>
                                This is an awesome message!
                            </p>
                        </Content>
                    </ModalCard>
                    <ParagraphLorem />
                    <ParagraphLorem />
                    <ParagraphLorem />
                    <ParagraphLorem />
                    <ParagraphLorem />
                </div>
                <TypeScriptCode collapsable={false}>{`
<ModalCard
    horzAlign={${states.horzAlign[0]}}
    vertAlign={${states.vertAlign[0]}}
    modalCardStyle=${states.modalCardStyle[0] ? `'${states.modalCardStyle[0]}'` : '{undefined}'}
    backdropStyle=${states.backdropStyle[0] ? `'${states.backdropStyle[0]}'` : '{undefined}'}
    
    enabled={${states.enabled[0]}}
    active={${states.active[0]}}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    <Content>
        <p>
            Hello everyone!
        </p>
        <p>
            This is an awesome message!
        </p>
    </Content>
</ModalCard>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <ModalCardOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoModalCard as default }
