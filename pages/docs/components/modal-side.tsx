import React, { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop, useInViewport } from '../../../components/hooks'

import { SpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkModalPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionVariables, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, ParagraphLorem, LinkModalSidePage, CurrentBaseComponents, LinkCardPage, LinkModalCardPage } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'

import { ModalSide as ModalSideOri, ModalSideProps, SideDialogProps } from '@nodestrap/modal-side'
import Button from '@nodestrap/button'
import Carousel from '@nodestrap/carousel'
import { Card } from '@nodestrap/card'
import { CloseButton } from '@nodestrap/close-button'
import {
    themeNames,
} from '../../../components/common@Basic'
import {
    SectionPropertyBackdropStyle,
    SectionPropertyHiddenStyle,
    SectionPropertyInteractiveStyle,
    SectionPropertyStaticStyle,
    
    SectionPropertyActive,
    SectionPropertyOnActiveChange,
    
    SectionPropertyLazy,
} from '../../../components/common@Modal'
import {
    SectionPropertyTheme,
    SectionPropertySize,
 // SectionPropertyNude,
    SectionPropertyGradient,
    SectionPropertyOutlined,
    SectionPropertyMild,
    
    SectionPropertyEnabled,
    
    SectionPropertyChildren,
    SectionPropertyHeader,
    SectionPropertyFooter,
    SectionPropertyCard,
    SectionPropertyViewportRef,
} from '../../../components/common@ModalCard'
import {
    SectionPropertyModalSideStyle,
    SectionPropertyInlineStart,
    SectionPropertyInlineEnd,
    SectionPropertyBlockStart,
    SectionPropertyBlockEnd,
} from '../../../components/common@ModalSide'

import loadable from '@loadable/component'
const DemoModalSideLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@ModalSide' */'../../../components/DemoPanel@ModalSide'))



const ModalSideWithContent = (props: ModalSideProps) => <ModalSideOri
    {...props}
    theme={props.theme ?? 'primary'}
    header={props.header ?? 'The Title'}
>
    {
        props.children
        ??
        <>
            <p>
                Hello everyone!
            </p>
            <p>
                This is an awesome message!
            </p>
            <ParagraphLorem words={6} />
        </>
    }
</ModalSideOri>

interface ModalSideExProps extends ModalSideProps {
    height ?: string
}
const ModalSide = (props: ModalSideExProps) => {
    const viewportRef = useRef(null);
    
    return (<div ref={viewportRef} style={{ position: 'relative', padding: '1rem', height: (props.height ?? '28rem'), overflow: 'hidden' }} className='media'>
        <ModalSideWithContent
            {...props}
            viewportRef={viewportRef}
        />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
    </div>);
}

const ModalSidePreview = () => {
    const [containerRef, isActiveFlip] = useFlipFlop({ defaultState: true });
    
    
    
    return (
        <Preview
            elmRef={containerRef}
            blockDisplay={true}
        >{(isLoaded) => <>
            <ModalSide
                active={isLoaded ? isActiveFlip : true}
                theme='primary'
            />
        </>}</Preview>
    )
};

interface ModalSideWithWelcomeUIProps {
    viewportRef       ?: React.RefObject<HTMLElement> | HTMLElement | null;
    showModalSideMessage  ?: string
    additionalMessage ?: string
}
const ModalSideWithWelcome = ({ viewportRef: modalSideViewportRef, showModalSideMessage, additionalMessage }: ModalSideWithWelcomeUIProps) => {
    const [viewportRef, isInViewport] = useInViewport();
    const [isModalSideVisible, setModalSideVisible] = useState(false);
    
    return (<div ref={viewportRef} style={{ position: 'relative', padding: '1rem', height: '28rem', overflow: 'hidden' }} className='media'>
        <p style={{ textAlign: 'center' }}>
            <Button
                theme='primary'
                onClick={() => setModalSideVisible(true)}
            >
                {showModalSideMessage ?? 'Show ModalSide'}
            </Button>
        </p>
        <ModalSideWithContent
            active={isModalSideVisible}
            onActiveChange={(newActive, reason) => setModalSideVisible(newActive)}
            viewportRef={(modalSideViewportRef === undefined) ? viewportRef : modalSideViewportRef}
        >
            <p>
                Welcome to ModalSide Dialog.
            </p>
            <p>
                To dismiss this message,<br />
                press <kbd>Esc</kbd> key or click the Close button below:
            </p>
            {additionalMessage && <p>{additionalMessage}</p>}
            <ParagraphLorem words={6} />
        </ModalSideWithContent>
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
    </div>);
}

const ModalSideWithOnActiveChange = () => {
    const [viewportRef, isInViewport] = useInViewport();
    const [modalSideActive, setModalSideActive] = useState(true);
    
    // re-show the <ModalSide> after 2 seconds:
    useEffect(() => {
        // conditions:
        if (!isInViewport) return;
        if (modalSideActive) return;
        
        // setups:
        const timerHandler = setTimeout(() => setModalSideActive(true), 2000);
        
        // cleanups:
        return () => {
            clearTimeout(timerHandler);
        };
    }, [isInViewport, modalSideActive]);
    
    return (<div ref={viewportRef} style={{ position: 'relative', padding: '1rem', height: '28rem', overflow: 'hidden' }} className='media'>
        <ModalSideWithContent
            active={modalSideActive}
            onActiveChange={(newActive, reason) => setModalSideActive(newActive)}
            theme='primary'
            viewportRef={viewportRef}
        />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
    </div>);
};

const ModalSideWithCustomCard = () => {
    const viewportRef = useRef(null);
    
    const CustomCard = ({onActiveChange, ...props}: SideDialogProps) => {
        const handleClose = () => {
            onActiveChange?.(false, 'ui');
        };
        
        return (
            <Card
                header={<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div>
                        <h4>An Interesting Header</h4>
                        <h5>A Subtitle</h5>
                    </div>
                    <CloseButton size={props.size} onClick={handleClose} />
                </div>}
                
                footer={<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div>
                        <p>An interesting summary.</p>
                        <p>This is <em>awesome</em>!</p>
                    </div>
                    <Button size={props.size} onClick={handleClose}>
                        Okay
                    </Button>
                </div>}
            >
                { props.children }
            </Card>
        );
    };
    
    return (<div ref={viewportRef} style={{ position: 'relative', padding: '1rem', height: '28rem', overflow: 'hidden' }} className='media'>
        <ModalSideWithContent
            active={true}
            theme='primary'
            card={<CustomCard />}
            viewportRef={viewportRef}
        />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
    </div>);
};



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/modal-side' component={<LinkModalSidePage />} bases={<LinkModalPage />}>
            <Head>
                <title>&lt;ModalSide&gt; Component</title>
                <meta name="description" content="Using <ModalSide> component" />
            </Head>

            <SectionIntro>
                <p>
                    Displays a <strong>secondary HTML document</strong> on the top of main HTML document.
                </p>
                <p>
                    Similar to native <code>{`<dialog>`}</code> but this is the <em>polyfill</em> version with more rich features and fully controllable component.<br />
                    The <em>dialog UI</em> uses a <LinkCardPage /> component and placed on the side of main document, hence its name is <CurrentComponent />.
                </p>
                <p>
                    This is the <em>side</em> version of <LinkModalCardPage />.
                </p>
                <p>
                    Here the preview:
                </p>
                <ModalSidePreview />
            </SectionIntro>
            <SectionDemo>
                <DemoModalSideLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionPropertyChildren>
                <Preview>
                    <ModalSide
                        active={true}
                        theme='primary'
                        height='35rem'
                    >
                        <p>
                            This is a dummy content.
                        </p>
                        <p>
                            See my gallery:
                        </p>
                        <Carousel classes={['media']} style={{ maxWidth: '20rem' }}>
                            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                        </Carousel>
                        <p>
                            Do you like that?
                        </p>
                    </ModalSide>
                </Preview>
                <p></p>
                <TypeScriptCode>{`
<ModalSide
    active={true}
    theme='primary'
    header='The Title'
>
    <p>
        This is a dummy content.
    </p>
    <p>
        See my gallery:
    </p>
    <Carousel classes={['media']} style={{ maxWidth: '20rem' }}>
        <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
        <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
        <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    </Carousel>
    <p>
        Do you like that?
    </p>
</ModalSide>
                `}</TypeScriptCode>
                <SectionPropertyHeader>
                    <p>
                        A simple header (string):
                    </p>
                    <Preview>
                        <ModalSide
                            active={true}
                            theme='primary'
                            header='An Interesting Header'
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<ModalSide
    active={true}
    theme='primary'
    header='An Interesting Header'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalSide>
                    `}</TypeScriptCode>
                    <p></p>
                    <p>
                        A composite header (JSX):
                    </p>
                    <Preview>
                        <ModalSide
                            active={true}
                            theme='primary'
                            header={<>
                                <h4>An Interesting Header</h4>
                                <h5>A Subtitle</h5>
                            </>}
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<ModalSide
    active={true}
    theme='primary'
    header={<>
        <h4>An Interesting Header</h4>
        <h5>A Subtitle</h5>
    </>}
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalSide>
                    `}</TypeScriptCode>
                </SectionPropertyHeader>
                <SectionPropertyFooter>
                    <p>
                        A simple footer (string):
                    </p>
                    <Preview>
                        <ModalSide
                            active={true}
                            theme='primary'
                            footer='An interesting summary'
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<ModalSide
    active={true}
    theme='primary'
    footer='An interesting summary'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalSide>
                    `}</TypeScriptCode>
                    <p></p>
                    <p>
                        A composite footer (JSX):
                    </p>
                    <Preview>
                        <ModalSide
                            active={true}
                            theme='primary'
                            footer={<>
                                An interesting summary.
                                This is <em>awesome</em>!
                            </>}
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<ModalSide
    active={true}
    theme='primary'
    footer={<>
        An interesting summary.
        This is <em>awesome</em>!
    </>}
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalSide>
                    `}</TypeScriptCode>
                </SectionPropertyFooter>
                <SectionPropertyCard>
                    <Preview>
                        <ModalSideWithCustomCard />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
import { ModalSide, SideDialogProps } from '@nodestrap/modal-side'
import { Card } from '@nodestrap/card'
import { Button } from '@nodestrap/button'
import { CloseButton } from '@nodestrap/close-button'

/* ... */

const CustomCard = ({onActiveChange, ...props}: SideDialogProps) => {
    const handleClose = () => {
        onActiveChange?.(false, 'ui');
    };
    
    return (
        <Card
            header={<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                    <h4>An Interesting Header</h4>
                    <h5>A Subtitle</h5>
                </div>
                <CloseButton size={props.size} onClick={handleClose} />
            </div>}
            
            footer={<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                    <p>An interesting summary.</p>
                    <p>This is <em>awesome</em>!</p>
                </div>
                <Button size={props.size} onClick={handleClose}>
                    Okay
                </Button>
            </div>}
        >
            { props.children }
        </Card>
    );
};

/* ... */

<ModalSide
    active={true}
    theme='primary'
    card={<CustomCard />}
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalSide>
                    `}</TypeScriptCode>
                </SectionPropertyCard>
            </SectionPropertyChildren>
            <SectionPropertyViewportRef>
                <Preview>
                    <ModalSideWithWelcome showModalSideMessage='Show ModalSide on this <article>' />
                </Preview>
                <p></p>
                <Preview>
                    <ModalSideWithWelcome showModalSideMessage='Show ModalSide on whole <body>' viewportRef={null} />
                </Preview>
            </SectionPropertyViewportRef>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <ModalSide
                                theme={themeName}
                                active={true}
                                key={index}
                            >
                                <p>
                                    A <CurrentComponent/> with {themeName} theme.
                                </p>
                                <ParagraphLorem words={6} />
                                <ParagraphLorem words={6} />
                            </ModalSide>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<ModalSide
    theme='${themeName}'
    active={true}
    header='The Title'
>
    <p>
        A <code>{'<ModalSide>'}</code> with ${themeName} theme.
    </p>
    <p>...</p>
    <p>...</p>
</ModalSide>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <ModalSide
                            size='sm'
                            active={true}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with smaller size.
                            </p>
                            <ParagraphLorem words={6} />
                        </ModalSide>
                        <ModalSide
                            size={undefined}
                            active={true}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with default size.
                            </p>
                            <ParagraphLorem words={6} />
                        </ModalSide>
                        <ModalSide
                            size='lg'
                            active={true}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with larger size.
                            </p>
                            <ParagraphLorem words={6} />
                        </ModalSide>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<ModalSide
    size='sm'
    active={true}
    theme='primary'
    header='The Title'
>
    <p>
        A <code>{'<ModalSide>'}</code> with smaller size.
    </p>
    <p>...</p>
</ModalSide>

<ModalSide
    size={undefined}
    active={true}
    theme='primary'
    header='The Title'
>
    <p>
        A <code>{'<ModalSide>'}</code> with default size.
    </p>
    <p>...</p>
</ModalSide>

<ModalSide
    size='lg'
    active={true}
    theme='primary'
    header='The Title'
>
    <p>
        A <code>{'<ModalSide>'}</code> with larger size.
    </p>
    <p>...</p>
</ModalSide>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyGradient>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <ModalSide
                                gradient={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<ModalSide
    gradient={true}
    active={true}
    theme='${themeName}'
    header='The Title'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalSide>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        {themeNames.map((themeName, index) =>
                            <ModalSide
                                outlined={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            />
                        )}
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<ModalSide
    outlined={true}
    active={true}
    theme='${themeName}'
    header='The Title'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalSide>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <ModalSide
                                mild={false}
                                active={true}
                                theme={themeName}
                                key={index}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<ModalSide
    mild={false}
    active={true}
    theme='${themeName}'
    header='The Title'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalSide>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyBackdropStyle>
                    <SectionPropertyHiddenStyle>
                        <Preview>
                            <ModalSide
                                backdropStyle='hidden'
                                active={true}
                                theme='primary'
                            />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<ModalSide
    backdropStyle='hidden'
    active={true}
    theme='primary'
    header='The Title'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalSide>
                        `}</TypeScriptCode>
                    </SectionPropertyHiddenStyle>
                    <SectionPropertyInteractiveStyle>
                        <Preview>
                            <ModalSide
                                backdropStyle='interactive'
                                active={true}
                                theme='primary'
                            />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<ModalSide
    backdropStyle='interactive'
    active={true}
    theme='primary'
    header='The Title'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalSide>
                        `}</TypeScriptCode>
                    </SectionPropertyInteractiveStyle>
                    <SectionPropertyStaticStyle>
                        <Preview>
                            <ModalSide
                                backdropStyle='static'
                                active={true}
                                theme='primary'
                            />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<ModalSide
    backdropStyle='static'
    active={true}
    theme='primary'
    header='The Title'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalSide>
                        `}</TypeScriptCode>
                    </SectionPropertyStaticStyle>
                </SectionPropertyBackdropStyle>
                <SectionPropertyModalSideStyle>
                    <SectionPropertyInlineStart>
                        <Preview>
                            <ModalSide
                                modalSideStyle='inlineStart'
                                active={true}
                                theme='primary'
                            />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<ModalSide
    modalSideStyle='inlineStart'
    active={true}
    theme='primary'
    header='The Title'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalSide>
                        `}</TypeScriptCode>
                    </SectionPropertyInlineStart>
                    <SectionPropertyInlineEnd>
                        <Preview>
                            <ModalSide
                                modalSideStyle='inlineEnd'
                                active={true}
                                theme='primary'
                            />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<ModalSide
    modalSideStyle='inlineEnd'
    active={true}
    theme='primary'
    header='The Title'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalSide>
                        `}</TypeScriptCode>
                    </SectionPropertyInlineEnd>
                    <SectionPropertyBlockStart>
                        <Preview>
                            <ModalSide
                                modalSideStyle='blockStart'
                                active={true}
                                theme='primary'
                            />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<ModalSide
    modalSideStyle='blockStart'
    active={true}
    theme='primary'
    header='The Title'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalSide>
                        `}</TypeScriptCode>
                    </SectionPropertyBlockStart>
                    <SectionPropertyBlockEnd>
                        <Preview>
                            <ModalSide
                                modalSideStyle='blockEnd'
                                active={true}
                                theme='primary'
                            />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<ModalSide
    modalSideStyle='blockEnd'
    active={true}
    theme='primary'
    header='The Title'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalSide>
                        `}</TypeScriptCode>
                    </SectionPropertyBlockEnd>
                </SectionPropertyModalSideStyle>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview>
                        <ModalSide
                            active={true}
                            theme='primary'
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<ModalSide
    active={true}
    theme='primary'
    header='The Title'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalSide>
                    `}</TypeScriptCode>
                    <SectionPropertyOnActiveChange>
                        <Preview blockDisplay={true}>
                            <ModalSideWithOnActiveChange />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
export default function App() {
    const [modalSideActive, setModalSideActive] = useState(true);
    
    // re-show the <ModalSide> after 2 seconds:
    useEffect(() => {
        // conditions:
        if (modalSideActive) return;
        
        // setups:
        const timerHandler = setTimeout(() => setModalSideActive(true), 2000);
        
        // cleanups:
        return () => {
            clearTimeout(timerHandler);
        };
    }, [modalSideActive]);
    
    return (
        <ModalSide
            active={modalSideActive}
            onActiveChange={(newActive, reason) => setModalSideActive(newActive)}
            theme='primary'
            header='The Title'
        >
            <p>
                Hello everyone!
            </p>
            <p>
                This is an awesome message!
            </p>
            <p>...</p>
        </ModalSide>
    );
};
                        `}</TypeScriptCode>
                    </SectionPropertyOnActiveChange>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview>
                        <ModalSide
                            enabled={false}
                            active={true}
                            theme='primary'
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<ModalSide
    enabled={false}
    active={true}
    theme='primary'
    header='The Title'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalSide>
                    `}</TypeScriptCode>
                </SectionPropertyEnabled>
            </SectionStates>
            <SectionPropertyLazy />
            <SectionVariables specList={
                <SpecList>
                    <SimpleSpecItem>
                        -- no config yet --
                    </SimpleSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { ModalSide } from '@nodestrap/modal-side'

export default function SuccessDialog(props) {
    return (
        <ModalSide
            {...props} // preserves other properties
            
            theme={props.theme ?? 'success'} // override default value of theme to 'success'
            mild={props.mild ?? false}       // override default value of mild  to false
            
            header={props.header ?? 'Success'}
        >
            {props.children ?? <>
                <p>
                    Data updated successfully.
                </p>
            </>}
        </ModalSide>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesSideDialogLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent />&apos;s dialog <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesSideDialogVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent />&apos;s dialog such as:<br />
                                <code>SizeVariant</code>, <code>ModalSideVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />&apos;s dialog.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesSideDialogStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentComponent />&apos;s dialog such as:<br />
                                <strong>excited</strong>.
                            </p>
                        </DetailSpecItem>
                        
                        <DetailSpecItem code='usesCardBackdropLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent />&apos;s backdrop <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesCardBackdropVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent />&apos;s backdrop such as:<br />
                                <code>SizeVariant</code> and <code>BackdropVariant</code>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesCardBackdropStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentComponent />.
                            </p>
                            <p>
                                Currently the states are equivalent to <CurrentBaseComponents /> backdrop&apos;s states.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, rule, children } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { ModalSide, usesSideDialogLayout, usesSideDialogVariants, usesSideDialogStates, ModalSideProps } from '@nodestrap/modal-side'


const useLoginDialogSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <ModalSide>'s dialog:
            usesSideDialogLayout(),
            usesSideDialogVariants(),
            usesSideDialogStates(),
        ]),
        style({
            // then overwrite with your style:
            ...children('[role="dialog"]>article>.body', {
                display      : 'grid',
                gap          : '1rem',
                gridAutoFlow : 'column',
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
                    backgroundColor : 'black',
                    color           : 'white',
                    /* ... */
                }),
                /* ... */
            ]),
            
            /* ... */
        }),
    ),
]);

export default function SuccessDialog(props: ModalSideProps) {
    const sheet = useLoginDialogSheet();
    return (
        <ModalSide {...props} mainClass={sheet.main}>
            {props.children ?? <>
                <p>
                    Data updated successfully.
                </p>
            </>}
        </ModalSide>
    );
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
