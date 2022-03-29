import { useRef } from 'react';

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { PopupInitials, PopupOptionProps, PopupOptions, usePopupStates } from './DemoPanel@Popup';

import { BackdropStyle, Modal } from '@nodestrap/modal'
import { Content } from '@nodestrap/content'
import { ThemeName } from '@nodestrap/basic';
import { TypeScriptCode } from './Code';
import { ParagraphLorem } from './common';



export const modalInitials = {
    theme         : 'primary' as ThemeName|undefined,
    backdropStyle : undefined as BackdropStyle|undefined,
};
export type ModalInitials = typeof modalInitials & Partial<PopupInitials>
export const useModalStates = (initials ?: Partial<ModalInitials>) => {
    const initials2 : ModalInitials = {
        ...modalInitials,
        ...initials
    };
    
    const backdropStyle = useResetableState(initials2.backdropStyle);
    
    return {
        ...usePopupStates(initials2),
        backdropStyle,
    }
}
export type ModalOptionProps = { states: ReturnType<typeof useModalStates> } & PopupOptionProps
export const ModalOptions = (props: ModalOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='backdropStyle'
            options={[undefined, 'hidden', 'interactive', 'static']}
            value={states.backdropStyle[0]}
            setValue={states.backdropStyle[1]}
        />
        
        <PopupOptions
            {...props}
            warningEitherMildOutlined={false}
        />
    </>);
}



export const DemoModal = () => {
    const states = useModalStates();
    const viewportRef = useRef(null);
    
    return (
        <>
            <div className='preview'>
                <div ref={viewportRef} style={{ position: 'relative', padding: '1rem', width: '100%', height: '15rem', overflow: 'hidden', flex: '0 0 auto', background: 'white' }}>
                    <Modal
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
                    </Modal>
                    <ParagraphLorem />
                    <ParagraphLorem />
                    <ParagraphLorem />
                    <ParagraphLorem />
                    <ParagraphLorem />
                </div>
                <TypeScriptCode collapsable={false}>{`
<Modal
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
</Modal>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <ModalOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoModal as default }
