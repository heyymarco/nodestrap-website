import { useRef } from 'react';

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { PopupInitials, PopupOptionProps, PopupOptions, usePopupStates } from './DemoPanel@Popup';

import { Modal } from '@nodestrap/modal'
import { ThemeName } from '@nodestrap/basic';
import { TypeScriptCode } from './Code';



export const modalInitials = {
    theme       : 'primary' as ThemeName|undefined,
};
export type ModalInitials = typeof modalInitials & Partial<PopupInitials>
export const useModalStates = (initials ?: Partial<ModalInitials>) => {
    const initials2 : ModalInitials = {
        ...modalInitials,
        ...initials
    };
    
    return {
        ...usePopupStates(initials2),
    }
}
export type ModalOptionProps = { states: ReturnType<typeof useModalStates> } & PopupOptionProps
export const ModalOptions = (props: ModalOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <PopupOptions
            {...props}
            warningEitherMildOutlined={false}
        />
    </>);
}



export const DemoModal = () => {
    const states = useModalStates();
    
    return (
        <>
            <div className='preview'>
                <Modal
                    enabled={states.enabled[0]}
                    active={states.active[0]}
                    
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                >
                    <p style={{ whiteSpace: 'nowrap' }}>
                        Hello everyone!
                    </p>
                    <p style={{ whiteSpace: 'nowrap' }}>
                        This is an awesome message!
                    </p>
                    <p style={{ whiteSpace: 'nowrap' }}>
                        It supports <strong>any HTML</strong> tags.
                    </p>
                </Modal>
                <TypeScriptCode collapsable={false}>{`
<Modal
    enabled={${states.enabled[0]}}
    active={${states.active[0]}}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    <p style={{ whiteSpace: 'nowrap' }}>
        Hello everyone!
    </p>
    <p style={{ whiteSpace: 'nowrap' }}>
        This is an awesome message!
    </p>
    <p style={{ whiteSpace: 'nowrap' }}>
        It supports <strong>any HTML</strong> tags.
    </p>
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
