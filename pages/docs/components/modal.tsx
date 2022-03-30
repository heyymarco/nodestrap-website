import React, { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop, useInViewport } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkModalPage, LinkIndicatorPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionVariables, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, ParagraphLorem, LinkModalDialogPage, LinkModalCardPage, LinkModalSidePage } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'

import { mainComposition, imports } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { usesExcitedState } from '@nodestrap/basic'
import { usesContentLayout, usesContentVariants, usesContentChildren } from '@nodestrap/content'

import { DialogProps, Modal as ModalOri, ModalCloseType, ModalProps } from '@nodestrap/modal'
import { Content, ContentProps } from '@nodestrap/content'
import { TogglerExcitedProps, useExcitedState } from '@nodestrap/basic'
import Control from '@nodestrap/control'
import Button from '@nodestrap/button'
import { TextInput, EmailInput } from '@nodestrap/input'
import {
    themeNames,
} from '../../../components/common@Basic'
import {
    SectionPropertyTheme,
    SectionPropertySize,
    SectionPropertyNude,
    SectionPropertyGradient,
    SectionPropertyOutlined,
    SectionPropertyMild,
    
    // SectionPropertyChildren,
    // SectionPropertyNestedChildren,
} from '../../../components/common@Group'
import {
    SectionPropertyBackdropStyle,
    SectionPropertyHiddenStyle,
    SectionPropertyInteractiveStyle,
    SectionPropertyStaticStyle,
    
    SectionPropertyActive,
    SectionPropertyOnActiveChange,
    SectionPropertyEnabled,
    
    SectionPropertyLazy,
    
    SectionPropertyChildren,
    
    SectionPropertyViewportRef,
} from '../../../components/common@Modal'

import loadable from '@loadable/component'
const DemoModalLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Modal' */'../../../components/DemoPanel@Modal'))



const useContentPlusSheet = createUseSheet(() => {
    const [excited] = usesExcitedState();
    
    return [
        mainComposition(
            imports([
                // import some stuff from <Content>:
                usesContentLayout(),
                usesContentVariants(),
                usesContentChildren(),
                
                // import excited state
                excited(),
            ]),
        ),
    ];
});
const ContentPlus = (props: ContentProps & TogglerExcitedProps) => {
    const sheet        = useContentPlusSheet();
    const excitedState = useExcitedState(props);
    
    return (
        <Content
            {...props}
            
            mainClass={props.mainClass ?? sheet.main}
            stateClasses={[...(props.stateClasses ?? []),
                excitedState.class,
            ]}
            
            onAnimationEnd={(e) => {
                props.onAnimationEnd?.(e);
                excitedState.handleAnimationEnd(e);
            }}
        />
    )
}
const Modal = (props: ModalProps) => {
    const viewportRef = useRef(null);
    
    return (<div ref={viewportRef} style={{ position: 'relative', padding: '1rem', height: '15rem', overflow: 'hidden' }} className='media'>
        <ModalOri
            {...props}
            theme={props.theme ?? 'primary'}
            viewportRef={viewportRef}
        >
            {
                props.children
                ??
                <Content>
                    <p>
                        Hello everyone!
                    </p>
                    <p>
                        This is an awesome message!
                    </p>
                </Content>
            }
        </ModalOri>
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
    </div>);
}

const ModalPreview = () => {
    const [containerRef, isActiveFlip] = useFlipFlop({ defaultState: true });
    
    
    
    return (
        <Preview
            elmRef={containerRef}
            blockDisplay={true}
        >{(isLoaded) => <>
            <Modal
                active={isLoaded ? isActiveFlip : true}
                theme='primary'
            />
        </>}</Preview>
    )
};

type LoginDialogCloseType = ModalCloseType | 'closeBySubmit'|'closeByCancel';
interface LoginDialogProps extends DialogProps<HTMLFormElement, LoginDialogCloseType> {
    focusable ?: boolean
}
const LoginDialog = ({ elmRef, focusable = false, tabIndex = -1, onActiveChange }: LoginDialogProps) => {
    return (
        <Content
            elmRef={elmRef}
            {...{ tabIndex: focusable ? tabIndex : undefined }}
            style={{
                display             : 'grid',
                gridTemplateColumns : '1fr 1fr',
                gridAutoFlow        : 'row',
                gap                 : '1rem',
                outline             : 'none',
            }}
        >
            <TextInput  placeholder='John Smith'     size='sm' style={{ gridColumnEnd: 'span 2' }} />
            <EmailInput placeholder='john@smith.com' size='sm' style={{ gridColumnEnd: 'span 2' }} />
            <Button
                theme='primary'
                size='sm'
                onClick={() => onActiveChange?.(false, 'closeBySubmit')}
            >
                Submit
            </Button>
            <Button
                theme='secondary'
                size='sm'
                onClick={() => onActiveChange?.(false, 'closeByCancel')}
            >
                Cancel
            </Button>
        </Content>
    );
}

type WelcomeDialogCloseType = ModalCloseType | 'closeByOK';
interface WelcomeDialogProps extends DialogProps<HTMLFormElement, WelcomeDialogCloseType> {
    focusable         ?: boolean
    additionalMessage ?: string
}
const WelcomeDialog = ({ elmRef, focusable = false, tabIndex = -1, onActiveChange, additionalMessage }: WelcomeDialogProps) => {
    return (
        <Content
            elmRef={elmRef}
            {...{ tabIndex: focusable ? tabIndex : undefined }}
            style={{
                outline : 'none',
            }}
            theme='primary'
        >
            <p>
                Welcome to Modal Dialog.
            </p>
            <p>
                To dismiss this message, press <kbd>Esc</kbd> key or click the OK button below:
            </p>
            {additionalMessage && <p>{additionalMessage}</p>}
            <p style={{ textAlign: 'center' }}>
                <Button
                    theme='primary'
                    onClick={() => onActiveChange?.(false, 'closeByOK')}
                >
                    OK
                </Button>
            </p>
        </Content>
    );
}

const ModalWithCustomUI = () => {
    const [viewportRef, isInViewport] = useInViewport();
    const [isModalVisible, setModalVisible] = useState(false);
    
    return (<div ref={viewportRef} style={{ position: 'relative', padding: '1rem', height: '15rem', overflow: 'hidden' }} className='media'>
        <p style={{ textAlign: 'center' }}>
            <Button
                theme='primary'
                onClick={() => setModalVisible(true)}
            >
                Show Modal
            </Button>
        </p>
        <ModalOri
            active={isModalVisible}
            onActiveChange={(newActive, reason) => setModalVisible(newActive)}
            theme='primary'
            viewportRef={viewportRef}
        >
            <LoginDialog focusable={isInViewport} />
        </ModalOri>
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
    </div>);
}

interface ModalWithWelcomeUIProps {
    viewportRef       ?: React.RefObject<HTMLElement> | HTMLElement | null;
    showModalMessage  ?: string
    additionalMessage ?: string
}
const ModalWithWelcomeUI = ({ viewportRef: modalViewportRef, showModalMessage, additionalMessage }: ModalWithWelcomeUIProps) => {
    const [viewportRef, isInViewport] = useInViewport();
    const [isModalVisible, setModalVisible] = useState(false);
    
    return (<div ref={viewportRef} style={{ position: 'relative', padding: '1rem', height: '15rem', overflow: 'hidden' }} className='media'>
        <p style={{ textAlign: 'center' }}>
            <Button
                theme='primary'
                onClick={() => setModalVisible(true)}
            >
                {showModalMessage ?? 'Show Modal'}
            </Button>
        </p>
        <ModalOri
            active={isModalVisible}
            onActiveChange={(newActive, reason) => setModalVisible(newActive)}
            theme='primary'
            viewportRef={(modalViewportRef === undefined) ? viewportRef : (modalViewportRef ?? undefined)}
        >
            <WelcomeDialog focusable={isInViewport} additionalMessage={additionalMessage} />
        </ModalOri>
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
    </div>);
}

const ModalWithOnActiveChange = () => {
    const [viewportRef, isInViewport] = useInViewport();
    const [modalActive, setModalActive] = useState(true);
    
    // re-show the <Modal> after 2 seconds:
    useEffect(() => {
        // conditions:
        if (!isInViewport) return;
        if (modalActive) return;
        
        // setups:
        const timerHandler = setTimeout(() => setModalActive(true), 2000);
        
        // cleanups:
        return () => {
            clearTimeout(timerHandler);
        };
    }, [isInViewport, modalActive]);
    
    return (<div ref={viewportRef} style={{ position: 'relative', padding: '1rem', height: '15rem', overflow: 'hidden' }} className='media'>
        <ModalOri
            active={modalActive}
            onActiveChange={(newActive, reason) => setModalActive(newActive)}
            theme='primary'
            viewportRef={viewportRef}
        >
            <LoginDialog focusable={isInViewport} />
        </ModalOri>
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
    </div>);
};



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/modal' component={<LinkModalPage />} nestedComponent={<LinkModalDialogPage />} bases={<LinkIndicatorPage />}>
            <Head>
                <title>&lt;Modal&gt; Component</title>
                <meta name="description" content="Using <Modal> component" />
            </Head>

            <SectionIntro>
                <p>
                    Turns any component to <strong>modal dialog</strong> component.
                </p>
                <p>
                    Similar to native <code>{`<dialog>`}</code> but this is the <em>polyfill</em> version with more rich features and fully controllable component.
                </p>
                <p>
                    This is the base component for <LinkModalCardPage /> and <LinkModalSidePage />.<br />
                    <em>In most cases</em>, you don&apos;t need <CurrentComponent /> component, unless you want to create a <strong>custom dialog</strong>.
                </p>
                <p>
                    Here the preview:
                </p>
                <ModalPreview />
            </SectionIntro>
            <SectionDemo>
                <DemoModalLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionPropertyChildren>
                <Preview>
                    <ModalWithCustomUI />
                </Preview>
                <p></p>
                <TypeScriptCode>{`
/* ... */

const [isModalVisible, setModalVisible] = useState(false);

/* ... */

<Modal
    active={isModalVisible}
    onActiveChange={(newActive, reason) => setModalVisible(newActive)}
>
    <LoginDialog />
</Modal>

/* ... */

const LoginDialog = (props) => {
    const {
        elmRef,
        tabIndex = -1,
        onActiveChange,
    } = props;
    
    return (
        <Basic elmRef={elmRef} {...{ tabIndex }} theme={props.theme ?? 'primary'} >
            <TextInput  placeholder='John Smith'     />
            <EmailInput placeholder='john@smith.com' />
            <Button onClick={() => onActiveChange?.(false, 'closeBySubmit')} >
                Submit
            </Button>
            <Button onClick={() => onActiveChange?.(false, 'closeByCancel')} >
                Cancel
            </Button>
        </Basic>
    );
};
                `}</TypeScriptCode>
            </SectionPropertyChildren>
            <SectionPropertyViewportRef>
                <Preview>
                    <ModalWithWelcomeUI showModalMessage='Show Modal on this <article>' />
                </Preview>
                <p></p>
                <Preview>
                    <ModalWithWelcomeUI showModalMessage='Show Modal on whole <body>' viewportRef={null} />
                </Preview>
            </SectionPropertyViewportRef>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Modal
                                theme={themeName}
                                active={true}
                                key={index}
                            >
                                <Content>
                                    <p>
                                        A <CurrentComponent/> with {themeName} theme.
                                    </p>
                                </Content>
                            </Modal>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Modal
    theme='${themeName}'
    active={true}
>
    <Content>
        A <code>{'<Modal>'}</code> with ${themeName} theme.
    </Content>
</Modal>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <Modal
                            size='sm'
                            active={true}
                            theme='primary'
                        >
                            <Content>
                                <p>
                                    A <CurrentComponent/> with smaller size.
                                </p>
                            </Content>
                        </Modal>
                        <Modal
                            size={undefined}
                            active={true}
                            theme='primary'
                        >
                            <Content>
                                <p>
                                    A <CurrentComponent/> with default size.
                                </p>
                            </Content>
                        </Modal>
                        <Modal
                            size='lg'
                            active={true}
                            theme='primary'
                        >
                            <Content>
                                <p>
                                    A <CurrentComponent/> with larger size.
                                </p>
                            </Content>
                        </Modal>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Modal
    size='sm'
    active={true}
    theme='primary'
>
    <Content>
        A <code>{'<Modal>'}</code> with smaller size.
    </Content>
</Modal>

<Modal
    size={undefined}
    active={true}
    theme='primary'
>
    <Content>
        A <code>{'<Modal>'}</code> with default size.
    </Content>
</Modal>

<Modal
    size='lg'
    active={true}
    theme='primary'
>
    <Content>
        A <code>{'<Modal>'}</code> with larger size.
    </Content>
</Modal>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <Modal
                            nude={true}
                            active={true}
                            theme='primary'
                        >
                            <Content>
                                <p>
                                    A nude <CurrentComponent /> 😋
                                </p>
                            </Content>
                        </Modal>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Modal
    nude={true}
    active={true}
    theme='primary'
>
    <Content>
        A nude <code>{'<Modal>'}</code> 😋
    </Content>
</Modal>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Modal
                                gradient={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                <Content>
                                    <p>
                                        Hello world!
                                    </p>
                                </Content>
                            </Modal>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Modal
    gradient={true}
    active={true}
    theme='${themeName}'
>
    <Content>
        Hello world!
    </Content>
</Modal>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        {themeNames.map((themeName, index) =>
                            <Modal
                                outlined={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                <Content>
                                    <p>
                                        Hello world!
                                    </p>
                                </Content>
                            </Modal>
                        )}
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Modal
    outlined={true}
    active={true}
    theme='${themeName}'
>
    <Content>
        Hello world!
    </Content>
</Modal>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Modal
                                mild={false}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                <Content>
                                    <p>
                                        Hello world!
                                    </p>
                                </Content>
                            </Modal>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Modal
    mild={false}
    active={true}
    theme='${themeName}'
>
    <Content>
        Hello world!
    </Content>
</Modal>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyBackdropStyle>
                    <SectionPropertyHiddenStyle>
                        <Preview>
                            <Modal
                                backdropStyle='hidden'
                                active={true}
                                theme='primary'
                            />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Modal
    backdropStyle='hidden'
    active={true}
    theme='primary'
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
                    </SectionPropertyHiddenStyle>
                    <SectionPropertyInteractiveStyle>
                        <Preview>
                            <Modal
                                backdropStyle='interactive'
                                active={true}
                                theme='primary'
                            />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Modal
    backdropStyle='interactive'
    active={true}
    theme='primary'
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
                    </SectionPropertyInteractiveStyle>
                    <SectionPropertyStaticStyle>
                        <Preview>
                            <Modal
                                backdropStyle='static'
                                active={true}
                                theme='primary'
                            >
                                <ContentPlus>
                                    <p>
                                        Hello everyone!
                                    </p>
                                    <p>
                                        This is an awesome message!
                                    </p>
                                </ContentPlus>
                            </Modal>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
import { mainComposition, imports } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { TogglerExcitedProps, usesExcitedState, useExcitedState } from '@nodestrap/basic'
import { Content, ContentProps, usesContentLayout, usesContentVariants, usesContentChildren } from '@nodestrap/content'
import { Modal } from '@nodestrap/modal'

/* ... */

const ContentPlus = (props: ContentProps & TogglerExcitedProps) => {
    const sheet        = useContentPlusSheet();
    const excitedState = useExcitedState(props);
    
    return (
        <Content
            {...props}
            
            mainClass={props.mainClass ?? sheet.main}
            stateClasses={[...(props.stateClasses ?? []),
                excitedState.class,
            ]}
            
            onAnimationEnd={(e) => {
                props.onAnimationEnd?.(e);
                excitedState.handleAnimationEnd(e);
            }}
        />
    )
};
const useContentPlusSheet = createUseSheet(() => {
    const [excited] = usesExcitedState();
    
    return [
        mainComposition(
            imports([
                // import some stuff from <Content>:
                usesContentLayout(),
                usesContentVariants(),
                usesContentChildren(),
                
                // import excited state
                excited(),
            ]),
        ),
    ];
});

/* ... */

<Modal
    backdropStyle='static'
    active={true}
    theme='primary'
>
    <ContentPlus>
        <p>
            Hello everyone!
        </p>
        <p>
            This is an awesome message!
        </p>
    </ContentPlus>
</Modal>
                        `}</TypeScriptCode>
                    </SectionPropertyStaticStyle>
                </SectionPropertyBackdropStyle>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview>
                        <Modal
                            active={true}
                            theme='primary'
                        >
                            <Content>
                                <p>
                                    Hello world!
                                </p>
                            </Content>
                        </Modal>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Modal
    active={true}
    theme='primary'
>
    <Content>
        Hello world!
    </Content>
</Modal>
                    `}</TypeScriptCode>
                    <SectionPropertyOnActiveChange>
                        <Preview blockDisplay={true}>
                            <ModalWithOnActiveChange />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
export default function App() {
    const [modalActive, setModalActive] = useState(true);
    
    // re-show the <Modal> after 2 seconds:
    useEffect(() => {
        // conditions:
        if (modalActive) return;
        
        // setups:
        const timerHandler = setTimeout(() => setModalActive(true), 2000);
        
        // cleanups:
        return () => {
            clearTimeout(timerHandler);
        };
    }, [modalActive]);
    
    return (
        <Modal
            active={modalActive}
            onActiveChange={(newActive, reason) => setModalActive(newActive)}
            theme='primary'
        >
            <LoginDialog />
        </Modal>
    );
};
                        `}</TypeScriptCode>
                    </SectionPropertyOnActiveChange>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview>
                        <Modal
                            enabled={false}
                            active={true}
                            theme='primary'
                        >
                            <Control>
                                <p>
                                    Hello world!
                                </p>
                            </Control>
                        </Modal>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Modal
    enabled={false}
    active={true}
    theme='primary'
>
    <Control>
        Hello world!
    </Control>
</Modal>
                    `}</TypeScriptCode>
                </SectionPropertyEnabled>
            </SectionStates>
            <SectionPropertyLazy />
            <SectionVariables specList={
                <SpecList>
                    <DetailSpecItem title='Foregrounds, Backgrounds &amp; Borders'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>backg</code>
                                <p>A <code>background</code> to apply to the backdrop, usually a dark color, so the content behind the dialog appears dimmed.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>componentBoxShadow</code>
                                <p>A <code>boxShadow</code> to apply to the dialog, so the dialog appears hovered.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Animations'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>@keyframes active</code>
                                <p>A default keyframes name represents <em>showing keyframes</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes passive</code>
                                <p>A default keyframes name represents <em>hiding keyframes</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animActive</code>
                                <p>A default animation represents <em>showing animation</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animPassive</code>
                                <p>A default animation represents <em>hiding animation</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Modal } from '@nodestrap/modal'

export default function LoginDialog(props) {
    return (
        <Modal
            {...props} // preserves other properties
            
            theme={props.theme ?? 'primary'} // override default value of theme to 'primary'
            mild={props.mild ?? false}       // override default value of mild  to false
        >
            <div role='dialog'>
                <TextInput  placeholder='John Smith'     size='sm' />
                <EmailInput placeholder='john@smith.com' size='sm' />
                <Button
                    theme='primary'
                    size='sm'
                >
                    Submit
                </Button>
                <Button
                    theme='secondary'
                    size='sm'
                >
                    Cancel
                </Button>
            </div>
        </Modal>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesDialogLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent />&apos;s dialog <strong>layout</strong> except its <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesDialogStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentComponent />&apos;s dialog such as:<br />
                                <strong>excited</strong>.
                            </p>
                        </DetailSpecItem>
                        
                        <DetailSpecItem code='usesBackdropLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent />&apos;s backdrop <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesBackdropVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent />&apos;s backdrop such as:<br />
                                <code>SizeVariant</code> and <code>BackdropVariant</code>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesBackdropStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentComponent />&apos;s backdrop such as:<br />
                                <strong>active</strong> and <strong>passive</strong>.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, rule, children } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { Basic } from '@nodestrap/basic'
import { Modal, usesBackdropLayout, usesBackdropVariants, usesBackdropStates } from '@nodestrap/modal'


const useLoginDialogSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Modal>'s dialog:
            usesDialogLayout(),
            usesDialogStates(),
        ]),
        style({
            // then overwrite with your style:
            display             : 'grid',
            gridTemplateColumns : '1fr 1fr',
            gridAutoFlow        : 'row',
            gap                 : '1rem',
            outline             : 'none',
            
            ...children('.input', {
                gridColumnEnd: 'span 2',
            }),
            
            /* ... */
            
            ...variants([
                rule('.big', {
                    // define the style at 'big' variant:
                    fontSize: 'xx-large',
                    /* ... */
                }),
                rule('.dark', {
                    // define the style at 'dark' variant:
                    background-color : 'black',
                    color            : 'white',
                    /* ... */
                }),
                /* ... */
            ]),
            
            /* ... */
        }),
    ),
]);

function LoginDialog(props) {
    const sheet = useLoginDialogSheet();
    return (
        <Basic {...props} rule='dialog' mainClass={sheet.main} theme={props.theme ?? 'primary'} >
            <TextInput  placeholder='John Smith'     size='sm' classes={['input]} />
            <EmailInput placeholder='john@smith.com' size='sm' classes={['input]} />
            <Button
                theme='primary'
                size='sm'
            >
                Submit
            </Button>
            <Button
                theme='secondary'
                size='sm'
            >
                Cancel
            </Button>
        </Basic>
    )
}

export default function LoginModal(props) {
    return (
        <Modal {...props}>
            <LoginDialog />
        </Modal>
    );
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
