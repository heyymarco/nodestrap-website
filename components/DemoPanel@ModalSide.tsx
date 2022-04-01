import { useRef, useState } from 'react';

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { ModalCardInitials, ModalCardOptionProps, ModalCardOptions, useModalCardStates } from './DemoPanel@ModalCard';

import { ModalSideStyle, ModalSide } from '@nodestrap/modal-side'
import { SizeName } from '@nodestrap/basic';
import { Check } from '@nodestrap/check';
import { TypeScriptCode } from './Code';
import { ParagraphLorem } from './common';



export const modalSideInitials = {
    modalSideStyle : 'inlineStart' as ModalSideStyle|undefined,
};
export type ModalSideInitials = typeof modalSideInitials & Partial<ModalCardInitials>
export const useModalSideStates = (initials ?: Partial<ModalSideInitials>) => {
    const initials2 : ModalSideInitials = {
        ...modalSideInitials,
        ...initials
    };
    
    const modalSideStyle = useResetableState(initials2.modalSideStyle);
    
    return {
        ...useModalCardStates(initials2),
        modalSideStyle,
    }
}
export type ModalSideOptionProps = { states: ReturnType<typeof useModalSideStates> } & ModalCardOptionProps
export const ModalSideOptions = (props: ModalSideOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='modalSideStyle'
            options={[undefined, 'inlineStart','inlineEnd','blockStart','blockEnd']}
            value={states.modalSideStyle[0]}
            setValue={states.modalSideStyle[1]}
        />
        
        <ModalCardOptions
            {...props}
            warningEitherMildOutlined={false}
        />
    </>);
}



export const DemoModalSide = () => {
    const states = useModalSideStates();
    const viewportRef = useRef(null);
    const [simulateTall, setSimulateTall] = useState(false);
    const [simulateWide, setSimulateWide] = useState(false);
    
    return (
        <>
            <div className='preview'>
                <div ref={viewportRef} style={{ position: 'relative', padding: '0.5rem', width: '100%', height: '30rem', overflow: 'hidden', flex: '0 0 auto', background: 'white' }}>
                    <ModalSide
                        modalSideStyle={states.modalSideStyle[0]}
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
                        
                        header='The Title'
                        
                        viewportRef={viewportRef}
                    >
                        <p>
                            Hello everyone!
                        </p>
                        <p>
                            This is an awesome message!
                        </p>
                        <p>
                            <Check active={simulateTall} onActiveChange={setSimulateTall}>
                                Simulate tall content
                            </Check>
                            <br />
                            <Check active={simulateWide} onActiveChange={setSimulateWide}>
                                Simulate wide content
                            </Check>
                        </p>
                        {simulateWide && <p style={{ whiteSpace: 'nowrap' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis autem cum exercitationem illo nihil tempore nemo impedit.
                        </p>}
                        {simulateTall && <p style={{ whiteSpace: 'normal', width: '1px' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis autem cum exercitationem illo nihil tempore nemo impedit.
                        </p>}
                    </ModalSide>
                    <ParagraphLorem />
                    <ParagraphLorem />
                    <ParagraphLorem />
                    <ParagraphLorem />
                    <ParagraphLorem />
                </div>
                <TypeScriptCode collapsable={false}>{`
<ModalSide
    modalSideStyle=${states.modalSideStyle[0] ? `'${states.modalSideStyle[0]}'` : '{undefined}'}
    backdropStyle=${states.backdropStyle[0] ? `'${states.backdropStyle[0]}'` : '{undefined}'}
    
    enabled={${states.enabled[0]}}
    active={${states.active[0]}}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
    
    header='The Title'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
</ModalSide>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <ModalSideOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoModalSide as default }
