import React, { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop, useInViewport } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkModalPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionVariables, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, ParagraphLorem, LinkModalDialogPage, LinkModalCardPage, LinkModalSidePage, CurrentBaseComponents } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'

import { mainComposition, imports } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { usesContentLayout, usesContentVariants, usesContentChildren } from '@nodestrap/content'

import { DialogProps, usesDialogLayout, usesDialogStates } from '@nodestrap/modal'
import { ModalCard as ModalCardOri, ModalCardCloseType, ModalCardProps } from '@nodestrap/modal-card'
import { Content, ContentProps } from '@nodestrap/content'
import { useExcitedState } from '@nodestrap/basic'
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
    
    SectionPropertyViewportRef,
} from '../../../components/common@Modal'

import loadable from '@loadable/component'
const DemoModalCardLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@ModalCard' */'../../../components/DemoPanel@ModalCard'))



const ModalCardWithContent = (props: ModalCardProps) => <ModalCardOri
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
            <ParagraphLorem words={8} />
        </>
    }
</ModalCardOri>

const ModalCard = (props: ModalCardProps) => {
    const viewportRef = useRef(null);
    
    return (<div ref={viewportRef} style={{ position: 'relative', padding: '1rem', height: '28rem', overflow: 'hidden' }} className='media'>
        <ModalCardWithContent
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

const ModalCardPreview = () => {
    const [containerRef, isActiveFlip] = useFlipFlop({ defaultState: true });
    
    
    
    return (
        <Preview
            elmRef={containerRef}
            blockDisplay={true}
        >{(isLoaded) => <>
            <ModalCard
                active={isLoaded ? isActiveFlip : true}
                theme='primary'
            />
        </>}</Preview>
    )
};

interface ModalCardWithWelcomeUIProps {
    viewportRef       ?: React.RefObject<HTMLElement> | HTMLElement | null;
    showModalCardMessage  ?: string
    additionalMessage ?: string
}
const ModalCardWithWelcome = ({ viewportRef: modalCardViewportRef, showModalCardMessage, additionalMessage }: ModalCardWithWelcomeUIProps) => {
    const [viewportRef, isInViewport] = useInViewport();
    const [isModalCardVisible, setModalCardVisible] = useState(false);
    
    return (<div ref={viewportRef} style={{ position: 'relative', padding: '1rem', height: '28rem', overflow: 'hidden' }} className='media'>
        <p style={{ textAlign: 'center' }}>
            <Button
                theme='primary'
                onClick={() => setModalCardVisible(true)}
            >
                {showModalCardMessage ?? 'Show ModalCard'}
            </Button>
        </p>
        <ModalCardWithContent
            active={isModalCardVisible}
            onActiveChange={(newActive, reason) => setModalCardVisible(newActive)}
            viewportRef={(modalCardViewportRef === undefined) ? viewportRef : (modalCardViewportRef ?? undefined)}
        >
            <p>
                Welcome to ModalCard Dialog.
            </p>
            <p>
                To dismiss this message, press <kbd>Esc</kbd> key or click the Close button below:
            </p>
            {additionalMessage && <p>{additionalMessage}</p>}
            <ParagraphLorem words={8} />
        </ModalCardWithContent>
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
        <ParagraphLorem />
    </div>);
}

const ModalCardWithOnActiveChange = () => {
    const [viewportRef, isInViewport] = useInViewport();
    const [modalCardActive, setModalCardActive] = useState(true);
    
    // re-show the <ModalCard> after 2 seconds:
    useEffect(() => {
        // conditions:
        if (!isInViewport) return;
        if (modalCardActive) return;
        
        // setups:
        const timerHandler = setTimeout(() => setModalCardActive(true), 2000);
        
        // cleanups:
        return () => {
            clearTimeout(timerHandler);
        };
    }, [isInViewport, modalCardActive]);
    
    return (<div ref={viewportRef} style={{ position: 'relative', padding: '1rem', height: '28rem', overflow: 'hidden' }} className='media'>
        <ModalCardWithContent
            active={modalCardActive}
            onActiveChange={(newActive, reason) => setModalCardActive(newActive)}
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



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/modalCard' component={<LinkModalCardPage />} bases={<LinkModalPage />}>
            <Head>
                <title>&lt;ModalCard&gt; Component</title>
                <meta name="description" content="Using <ModalCard> component" />
            </Head>

            <SectionIntro>
                <p>
                    Turns any component to <strong>modalCard dialog</strong> component.
                </p>
                <p>
                    Similar to native <code>{`<dialog>`}</code> but this is the <em>polyfill</em> version with more rich features and fully controllable component.
                </p>
                <p>
                    This is the <em>centered</em> version of <LinkModalSidePage />.
                </p>
                <p>
                    Here the preview:
                </p>
                <ModalCardPreview />
            </SectionIntro>
            <SectionDemo>
                <DemoModalCardLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionPropertyViewportRef>
                <Preview>
                    <ModalCardWithWelcome showModalCardMessage='Show ModalCard on this <article>' />
                </Preview>
                <p></p>
                <Preview>
                    <ModalCardWithWelcome showModalCardMessage='Show ModalCard on whole <body>' viewportRef={null} />
                </Preview>
            </SectionPropertyViewportRef>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <ModalCard
                                theme={themeName}
                                active={true}
                                key={index}
                            >
                                <p>
                                    A <CurrentComponent/> with {themeName} theme.
                                </p>
                                <ParagraphLorem words={8} />
                                <ParagraphLorem words={8} />
                            </ModalCard>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<ModalCard
    theme='${themeName}'
    active={true}
>
    <p>
        A <code>{'<ModalCard>'}</code> with ${themeName} theme.
    </p>
    <p>...</p>
    <p>...</p>
</ModalCard>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <ModalCard
                            size='sm'
                            active={true}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with smaller size.
                            </p>
                            <ParagraphLorem words={8} />
                        </ModalCard>
                        <ModalCard
                            size={undefined}
                            active={true}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with default size.
                            </p>
                            <ParagraphLorem words={8} />
                        </ModalCard>
                        <ModalCard
                            size='lg'
                            active={true}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with larger size.
                            </p>
                            <ParagraphLorem words={8} />
                        </ModalCard>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<ModalCard
    size='sm'
    active={true}
    theme='primary'
>
    <p>
        A <code>{'<ModalCard>'}</code> with smaller size.
    </p>
    <p>...</p>
</ModalCard>

<ModalCard
    size={undefined}
    active={true}
    theme='primary'
>
    <p>
        A <code>{'<ModalCard>'}</code> with default size.
    </p>
    <p>...</p>
</ModalCard>

<ModalCard
    size='lg'
    active={true}
    theme='primary'
>
    <p>
        A <code>{'<ModalCard>'}</code> with larger size.
    </p>
    <p>...</p>
</ModalCard>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyGradient>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <ModalCard
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
<ModalCard
    gradient={true}
    active={true}
    theme='${themeName}'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalCard>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        {themeNames.map((themeName, index) =>
                            <ModalCard
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
<ModalCard
    outlined={true}
    active={true}
    theme='${themeName}'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalCard>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <ModalCard
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
<ModalCard
    mild={false}
    active={true}
    theme='${themeName}'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalCard>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyBackdropStyle>
                    <SectionPropertyHiddenStyle>
                        <Preview>
                            <ModalCard
                                backdropStyle='hidden'
                                active={true}
                                theme='primary'
                            />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<ModalCard
    backdropStyle='hidden'
    active={true}
    theme='primary'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalCard>
                        `}</TypeScriptCode>
                    </SectionPropertyHiddenStyle>
                    <SectionPropertyInteractiveStyle>
                        <Preview>
                            <ModalCard
                                backdropStyle='interactive'
                                active={true}
                                theme='primary'
                            />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<ModalCard
    backdropStyle='interactive'
    active={true}
    theme='primary'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalCard>
                        `}</TypeScriptCode>
                    </SectionPropertyInteractiveStyle>
                    <SectionPropertyStaticStyle>
                        <Preview>
                            <ModalCard
                                backdropStyle='static'
                                active={true}
                                theme='primary'
                            />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<ModalCard
    backdropStyle='static'
    active={true}
    theme='primary'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalCard>
                        `}</TypeScriptCode>
                    </SectionPropertyStaticStyle>
                </SectionPropertyBackdropStyle>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview>
                        <ModalCard
                            active={true}
                            theme='primary'
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<ModalCard
    active={true}
    theme='primary'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalCard>
                    `}</TypeScriptCode>
                    <SectionPropertyOnActiveChange>
                        <Preview blockDisplay={true}>
                            <ModalCardWithOnActiveChange />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
export default function App() {
    const [modalCardActive, setModalCardActive] = useState(true);
    
    // re-show the <ModalCard> after 2 seconds:
    useEffect(() => {
        // conditions:
        if (modalCardActive) return;
        
        // setups:
        const timerHandler = setTimeout(() => setModalCardActive(true), 2000);
        
        // cleanups:
        return () => {
            clearTimeout(timerHandler);
        };
    }, [modalCardActive]);
    
    return (
        <ModalCard
            active={modalCardActive}
            onActiveChange={(newActive, reason) => setModalCardActive(newActive)}
            theme='primary'
        >
            <p>
                Hello everyone!
            </p>
            <p>
                This is an awesome message!
            </p>
            <p>...</p>
        </ModalCard>
    );
};
                        `}</TypeScriptCode>
                    </SectionPropertyOnActiveChange>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview>
                        <ModalCard
                            enabled={false}
                            active={true}
                            theme='primary'
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<ModalCard
    enabled={false}
    active={true}
    theme='primary'
>
    <p>
        Hello everyone!
    </p>
    <p>
        This is an awesome message!
    </p>
    <p>...</p>
</ModalCard>
                    `}</TypeScriptCode>
                </SectionPropertyEnabled>
            </SectionStates>
            <SectionPropertyLazy />
            <SectionVariables specList={
                <SpecList>
                    <DetailSpecItem title='Positions'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>horzAlign</code>
                                <p>The default horizontal align of dialog.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>vertAlign</code>
                                <p>The default vertical align of dialog.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { ModalCard } from '@nodestrap/modal-card'

export default function SuccessDialog(props) {
    return (
        <ModalCard
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
        </ModalCard>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesCardDialogLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent />&apos;s dialog <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesCardDialogVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent />&apos;s dialog such as:<br />
                                <code>SizeVariant</code>, <code>ModalCardVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />&apos;s dialog.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesCardDialogStates()'>
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
import { ModalCard, usesCardDialogLayout, usesCardDialogVariants, usesCardDialogStates, ModalCardProps } from '@nodestrap/modal-card'


const useLoginDialogSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <ModalCard>'s dialog:
            usesCardDialogLayout(),
            usesCardDialogVariants(),
            usesCardDialogStates(),
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

export default function SuccessDialog(props: ModalCardProps) {
    const sheet = useLoginDialogSheet();
    return (
        <ModalCard {...props} mainClass={sheet.main}>
            {props.children ?? <>
                <p>
                    Data updated successfully.
                </p>
            </>}
        </ModalCard>
    );
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
