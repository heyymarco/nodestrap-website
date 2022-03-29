import React, { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkModalPage, LinkPopupPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionVariables, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, ParagraphLorem } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import { Tips } from '../../../components/Info'

import Label from '@nodestrap/label'
import { Modal as ModalOri, ModalProps } from '@nodestrap/modal'
import Basic from '@nodestrap/basic'
import Content from '@nodestrap/content'
import SelectPopupPlacement from '../../../components/SelectPopupPlacement';
import {
    themeNames,
    SectionPropertyTheme,
    SectionPropertySize,
    SectionPropertyNude,
    SectionPropertyGradient,
    SectionPropertyOutlined,
    SectionPropertyOrientation,
    SectionPropertyOrientationBlock,
    SectionPropertyOrientationInline,
} from '../../../components/common@Basic'
import {
    SectionPropertyMild,
} from '../../../components/common@Indicator'
import {
    SectionPropertyEnabled,
    SectionPropertyActive,
    
    SectionPropertyTargetRef,
    SectionPropertyPopupPlacement,
    SectionPropertyPopupOffset,
    SectionPropertyPopupShift,
    SectionPropertyPopupAutoFlip,
    SectionPropertyPopupAutoShift,
    
    SectionPropertyLazy,
} from '../../../components/common@Popup'

import loadable from '@loadable/component'
import Button from '@nodestrap/button'
const DemoModalLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Modal' */'../../../components/DemoPanel@Modal'))



const Modal = (props: ModalProps) => {
    const viewportRef = useRef(null);
    
    return (<div ref={viewportRef} style={{ position: 'relative', padding: '1rem', height: '15rem', overflow: 'hidden' }} className='media'>
        <ModalOri
            {...props}
            theme={props.theme ?? 'primary'}
            viewportRef={viewportRef}
        >
            <Content>
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
                    </>
                }
            </Content>
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



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/modal' component={<LinkModalPage />} bases={<LinkPopupPage />}>
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
                    Here the preview:
                </p>
                <ModalPreview />
            </SectionIntro>
            <SectionDemo>
                <DemoModalLazy fallback={<BusyBar />} />
            </SectionDemo>
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
                                <p>
                                    A <CurrentComponent/> with {themeName} theme.
                                </p>
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
                            <p>
                                A <CurrentComponent/> with smaller size.
                            </p>
                        </Modal>
                        <Modal
                            size={undefined}
                            active={true}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with default size.
                            </p>
                        </Modal>
                        <Modal
                            size='lg'
                            active={true}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with larger size.
                            </p>
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
                            <p>
                                A nude <CurrentComponent /> 😋
                            </p>
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
                                <p>
                                    Hello world!
                                </p>
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
                                <p>
                                    Hello world!
                                </p>
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
                                <p>
                                    Hello world!
                                </p>
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
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview>
                        <Modal
                            active={true}
                            theme='primary'
                        >
                            <p>
                                Hello world!
                            </p>
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
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview>
                        <Modal
                            enabled={false}
                            active={true}
                            theme='primary'
                        >
                            <p>
                                Hello world!
                            </p>
                        </Modal>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Modal
    enabled={false}
    active={true}
    theme='primary'
>
    <Content>
        Hello world!
    </Content>
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

            semanticRole={props.semanticRole ?? 'form'} // override default value of semanticRole to 'form'
            semantictag={props.semanticTag ?? 'form'}   // override default value of semanticTag  to 'form'
            
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

export default function LoginDialog(props) {
    const sheet = useLoginDialogSheet();
    return (
        <Modal {...props}>
            <Basic rule='dialog' mainClass={sheet.main}>
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
        </Modal>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
