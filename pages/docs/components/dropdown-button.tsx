import React, { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkDropdownButtonPage, LinkDropdownPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, LinkCardPage } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import { Tips } from '../../../components/Info'

import Label from '@nodestrap/label'
import { DropdownComponentProps } from '@nodestrap/dropdown'
import DropdownButtonOri, { DropdownButtonProps, OrientationName, DropdownCloseType } from '@nodestrap/dropdown-button'
import Basic from '@nodestrap/basic'
import Form from '@nodestrap/form'
import Button from '@nodestrap/button'
import { setRef } from '@nodestrap/utilities'
import { TextInput, EmailInput } from '@nodestrap/input'
import SelectPopupPlacement from '../../../components/SelectPopupPlacement';
import {
    themeNames,
    SectionPropertyTheme,
    SectionPropertySize,
    SectionPropertyGradient,
    SectionPropertyOutlined,
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
    
    SectionPropertyLazy,
} from '../../../components/common@Popup'
import {
    SectionPropertyChildren,
    
    SectionPropertyNude,
    SectionPropertyOrientation,
    SectionPropertyOrientationBlock,
    SectionPropertyOrientationInline,
    
    SectionPropertyPopupAutoFlip,
    SectionPropertyPopupAutoShift,
    
    SectionPropertyOnActiveChange,
} from '../../../components/common@Dropdown'

import loadable from '@loadable/component'
const DemoDropdownButtonLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@DropdownButton' */'../../../components/DemoPanel@DropdownButton'))



const DropdownButton = (props: DropdownButtonProps) => <DropdownButtonOri {...props} buttonChildren={props.buttonChildren ?? 'Toggle dropdown'} />


type LoginFormCloseType = DropdownCloseType | 'closeBySubmit'|'closeByCancel';
interface LoginFormProps extends DropdownComponentProps<HTMLFormElement, LoginFormCloseType> {
}
const LoginForm = ({ elmRef, tabIndex = -1, onActiveChange }: LoginFormProps) => {
    return (
        <Form
            elmRef={elmRef}
            tabIndex={tabIndex}
            theme='primary'
            enableValidation={false}
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
        </Form>
    );
}

interface OverlayDropdownButtonPreviewProps {
    overlay ?: boolean
}
const OverlayDropdownButtonPreview = ({ overlay = true }: OverlayDropdownButtonPreviewProps) => {
    const [containerRef, isActiveFlip] = useFlipFlop({ defaultState: true });
    const [flip, setFlip] = useState(false);
    const contentRef = useRef<HTMLElement>(null);
    
    
    
    return (
        <Preview
            blockDisplay={true}
            preventShift={!overlay}
        >{(isLoaded) => <>
            <Basic
                elmRef={(elm) => {
                    setRef(containerRef, elm);
                    setRef(contentRef, elm);
                }}
                theme='secondary'
                mild={true}
                style={{
                    textAlign: 'center',
                }}
            >
                A content
            </Basic>
            <DropdownButton
                active={isLoaded ? (isActiveFlip === flip) : true}
                onActiveChange={() => {
                    setFlip(!flip);
                }}
                theme='primary'
                
                targetRef={overlay ? contentRef : undefined}
                popupPlacement='bottom'
                popupOffset={10}
                
                popupAutoFlip={false}
                popupAutoShift={false}
            >
                <LoginForm />
            </DropdownButton>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum laborum quos magni accusamus.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum laborum quos magni accusamus.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum laborum quos magni accusamus.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum laborum quos magni accusamus.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum laborum quos magni accusamus.
            </p>
        </>}</Preview>
    )
};

const DropdownButtonFormChildPreview = () => {
    const [showDropdownButton, setShowDropdownButton] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    return (
        <Preview
            blockDisplay={true}
            preventShift={true}
        >{(isLoaded) => <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button elmRef={buttonRef} theme='primary' onClick={() => setShowDropdownButton(!showDropdownButton)}>
                    Toggle dropdownButton
                </Button>
                <DropdownButton
                    active={isLoaded ? showDropdownButton : true}
                    onActiveChange={(newActive) => setShowDropdownButton(newActive)}
                    theme='primary'
                    
                    targetRef={buttonRef}
                    popupPlacement='bottom'
                    popupOffset={5}
                    
                    popupAutoFlip={false}
                    popupAutoShift={false}
                >
                    <LoginForm />
                </DropdownButton>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum laborum quos magni accusamus.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum laborum quos magni accusamus.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum laborum quos magni accusamus.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum laborum quos magni accusamus.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum laborum quos magni accusamus.
            </p>
        </>}</Preview>
    );
};

const DropdownButtonPlacementPreview = () => {
    const [showDropdown, setShowDropdown] = useState(true);

    
    
    return (
        <SelectPopupPlacement initialPlacement='bottom'>{(popupPlacement) => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <DropdownButton
                active={showDropdown}
                onClick={() => setShowDropdown(!showDropdown)}
                nude={false}
                theme='primary'
                size='sm'
                
                popupPlacement={popupPlacement}
                
                popupAutoFlip={false}
                popupAutoShift={false}
            >
                <p>
                    {`popupPlacement='${popupPlacement}'`}
                </p>
            </DropdownButton>
        </div>}</SelectPopupPlacement>
    )
};

const DropdownButtonOffset = () => {
    const [showDropdown, setShowDropdown] = useState(true);
    
    
    
    return (
        <Preview>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <DropdownButton
                active={showDropdown}
                onClick={() => setShowDropdown(!showDropdown)}
                nude={false}
                theme='primary'
                
                popupOffset={30}
                popupAutoFlip={false}
                popupAutoShift={false}
                
                style={{
                    justifySelf: 'center',
                }}
            >
                <p>
                    hello world!
                </p>
            </DropdownButton>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const DropdownButtonShift = () => {
    const [showDropdown, setShowDropdown] = useState(true);
    
    
    
    return (
        <Preview>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <DropdownButton
                active={showDropdown}
                onClick={() => setShowDropdown(!showDropdown)}
                nude={false}
                theme='primary'
                
                popupShift={100}
                popupAutoFlip={false}
                popupAutoShift={false}
                
                style={{
                    justifySelf: 'center',
                }}
            >
                <p>
                    hello world!
                </p>
            </DropdownButton>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const DropdownButtonAutoFlip = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [showDropdown, setShowDropdown] = useState(true);
    
    
    
    useEffect(() => {
        const timeoutHanlder = setTimeout(() => {
            const container = buttonRef.current?.parentElement;
            if (!container) return;
            if (container.style.height) return;
            container.style.boxSizing = 'content-box';
            container.style.height = `${container.clientHeight / 3}px`;
            container.scrollTop = (container.scrollHeight - container.clientHeight) / 2;
        }, 0);
        
        return () => clearTimeout(timeoutHanlder);
    }, []);
    
    
    
    return (
        <Preview>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <DropdownButton
                elmRef={buttonRef}
                
                active={showDropdown}
                onClick={() => setShowDropdown(!showDropdown)}
                nude={false}
                theme='primary'
                
                popupAutoFlip={true}
                popupAutoShift={false}
                
                style={{
                    justifySelf: 'center',
                }}
            >
                <p>
                    hello world!
                </p>
            </DropdownButton>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const DropdownButtonAutoShift = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [showDropdown, setShowDropdown] = useState(true);
    
    
    
    useEffect(() => {
        const timeoutHanlder = setTimeout(() => {
            const container = buttonRef.current?.parentElement;
            if (!container) return;
            if (container.style.height) return;
            container.style.boxSizing = 'content-box';
            container.style.height = `${container.clientHeight / 3}px`;
            container.scrollTop = (container.scrollHeight - container.clientHeight) / 2;
        }, 0);
        
        return () => clearTimeout(timeoutHanlder);
    }, []);
    
    
    
    return (
        <Preview>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <DropdownButton
                elmRef={buttonRef}
                
                active={showDropdown}
                onClick={() => setShowDropdown(!showDropdown)}
                nude={false}
                theme='primary'
                
                popupPlacement='right'
                popupAutoFlip={false}
                popupAutoShift={true}
                
                style={{
                    justifySelf: 'center',
                }}
            >
                <p>
                    hello<br />
                    world<br />
                    <br />
                    hello<br />
                    everyone<br />
                </p>
            </DropdownButton>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};

interface DropdownButtonOrientationProps {
    orientation : OrientationName
}
const DropdownButtonOrientation = ({ orientation }: DropdownButtonOrientationProps) => {
    const [containerRef, isActiveFlip] = useFlipFlop({ defaultState: true });
    
    
    
    return (
        <Preview
            elmRef={containerRef}
            gap='12rem'
        >{(isLoaded) => <>
            <DropdownButton
                orientation={orientation}
                active={isLoaded ? isActiveFlip : true}
                theme='primary'
            >
                <LoginForm />
            </DropdownButton>
        </>}</Preview>
    )
};

const DropdownButtonWithOnActiveChange = () => {
    const [dropdownButtonActive, setDropdownButtonActive] = useState(true);
    
    // re-show the <DropdownButton> after 2 seconds:
    useEffect(() => {
        // conditions:
        if (dropdownButtonActive) return;
        
        // setups:
        const timerHandler = setTimeout(() => setDropdownButtonActive(true), 2000);
        
        // cleanups:
        return () => {
            clearTimeout(timerHandler);
        };
    }, [dropdownButtonActive]);
    
    return (
        <DropdownButton
            active={dropdownButtonActive}
            onActiveChange={() => setDropdownButtonActive(false)}
            theme='primary'
        >
            <LoginForm />
        </DropdownButton>
    );
};



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/dropdownButton' component={<LinkDropdownButtonPage />} bases={<LinkDropdownPage />}>
            <Head>
                <title>&lt;DropdownButton&gt; Component</title>
                <meta name="description" content="Using <DropdownButton> component" />
            </Head>

            <SectionIntro>
                <p>
                    Turns any component to <strong>dropdownButtonable</strong> component.
                </p>
                <p>
                    Similar to <CurrentBaseComponents /> but <em>listens</em> for <kbd>Esc</kbd> key, blur event, and click event to close the <CurrentComponent />.
                </p>
                <p>
                    Here the preview:
                </p>
                <OverlayDropdownButtonPreview />
            </SectionIntro>
            <SectionDemo>
                <DemoDropdownButtonLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionPropertyChildren>
                <DropdownButtonFormChildPreview />
                <p></p>
                <TypeScriptCode>{`
/* ... */

const [isDropdownButtonVisible, setDropdownButtonVisible] = useState(false);

/* ... */

<DropdownButton
    active={isDropdownButtonVisible}
    onActiveChange={(newActive, reason) => setDropdownButtonVisible(newActive)}
>
    <LoginForm />
</DropdownButton>

/* ... */

const LoginForm = (props) => {
    const {
        elmRef,
        tabIndex = -1,
        onActiveChange,
    } = props;
    
    return (
        <Form elmRef={elmRef} tabIndex={tabIndex} >
            <TextInput  placeholder='John Smith'     />
            <EmailInput placeholder='john@smith.com' />
            <Button onClick={() => onActiveChange?.(false, 'closeBySubmit')} >
                Submit
            </Button>
            <Button onClick={() => onActiveChange?.(false, 'closeByCancel')} >
                Cancel
            </Button>
        </Form>
    );
};
                `}</TypeScriptCode>
            </SectionPropertyChildren>
            <Section title='Customizing the Dropdown'>
                <p>
                    There are some properties for customizing the behavior of the dropdown, they are:
                </p>
                <SectionPropertyPopupPlacement>
                    <Tips>
                        <p>
                            <strong>Click on the dots</strong> to place the <CurrentComponent />.
                            There are 12 different placements to choose from.
                        </p>
                    </Tips>
                    <p></p>
                    <DropdownButtonPlacementPreview />
                </SectionPropertyPopupPlacement>
                <SectionPropertyPopupOffset>
                    <DropdownButtonOffset />
                </SectionPropertyPopupOffset>
                <SectionPropertyPopupShift>
                    <DropdownButtonShift />
                </SectionPropertyPopupShift>
                <SectionPropertyPopupAutoFlip>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on <code>{`'top'`}</code>,
                            but if you scroll up the <strong>container below</strong>, the <code>popupPlacement</code> will change to <code>{`'bottom'`}</code>.
                        </p>
                    </Tips>
                    <p></p>
                    <DropdownButtonAutoFlip />
                </SectionPropertyPopupAutoFlip>
                <SectionPropertyPopupAutoShift>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on exact <code>{`'right'`}</code>,
                            but if you scroll up/down the <strong>container below</strong>, the <code>popupPlacement</code> will shift slightly from its original position.
                        </p>
                    </Tips>
                    <p></p>
                    <DropdownButtonAutoShift />
                </SectionPropertyPopupAutoShift>
            </Section>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview gap='4rem'>
                        {themeNames.map((themeName, index) =>
                            <DropdownButton
                                theme={themeName}
                                active={true}
                                nude={false}
                                key={index}
                            >
                                <p>
                                    A <CurrentComponent/> with {themeName} theme.
                                </p>
                            </DropdownButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<DropdownButton
    theme='${themeName}'
    active={true}
    nude={false}
>
    <p>
        A <code>{'<DropdownButton>'}</code> with ${themeName} theme.
    </p>
</DropdownButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview gap='5rem'>
                        <DropdownButton
                            size='sm'
                            active={true}
                            nude={false}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with smaller size.
                            </p>
                        </DropdownButton>
                        <DropdownButton
                            size={undefined}
                            active={true}
                            nude={false}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with default size.
                            </p>
                        </DropdownButton>
                        <DropdownButton
                            size='lg'
                            active={true}
                            nude={false}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with larger size.
                            </p>
                        </DropdownButton>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<DropdownButton
    size='sm'
    active={true}
    nude={false}
    theme='primary'
>
    <p>
        A <code>{'<DropdownButton>'}</code> with smaller size.
    </p>
</DropdownButton>

<DropdownButton
    size={undefined}
    active={true}
    nude={false}
    theme='primary'
>
    <p>
        A <code>{'<DropdownButton>'}</code> with default size.
    </p>
</DropdownButton>

<DropdownButton
    size='lg'
    active={true}
    nude={false}
    theme='primary'
>
    <p>
        A <code>{'<DropdownButton>'}</code> with larger size.
    </p>
</DropdownButton>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview gap='4rem'>
                        <DropdownButton
                            active={true}
                            theme='primary'
                        >
                            <p>
                                A nude <CurrentComponent /> 😋
                            </p>
                        </DropdownButton>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<DropdownButton
    active={true}
    theme='primary'
>
    <p>
        A nude <code>{'<DropdownButton>'}</code> 😋
    </p>
</DropdownButton>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview gap='4rem'>
                        {themeNames.map((themeName, index) =>
                            <DropdownButton
                                gradient={true}
                                active={true}
                                nude={false}
                                theme={themeName}
                                key={index}
                            >
                                <p>
                                    Hello world!
                                </p>
                            </DropdownButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<DropdownButton
    gradient={true}
    active={true}
    nude={false}
    theme='${themeName}'
>
    <p>
        Hello world!
    </p>
</DropdownButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview gap='4rem'>
                        {themeNames.map((themeName, index) =>
                            <DropdownButton
                                outlined={true}
                                active={true}
                                nude={false}
                                theme={themeName}
                                key={index}
                            >
                                <p>
                                    Hello world!
                                </p>
                            </DropdownButton>
                        )}
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<DropdownButton
    outlined={true}
    active={true}
    nude={false}
    theme='${themeName}'
>
    <p>
        Hello world!
    </p>
</DropdownButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview gap='4rem'>
                        {themeNames.map((themeName, index) =>
                            <DropdownButton
                                mild={false}
                                active={true}
                                nude={false}
                                theme={themeName}
                                key={index}
                            >
                                <p>
                                    Hello world!
                                </p>
                            </DropdownButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<DropdownButton
    mild={false}
    active={true}
    nude={false}
    theme='${themeName}'
>
    <p>
        Hello world!
    </p>
</DropdownButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyOrientation>
                    <SectionPropertyOrientationBlock>
                        <DropdownButtonOrientation orientation='block' />
                        <p></p>
                        <TypeScriptCode>{`
<DropdownButton
    orientation='block'
    active={true}
    theme='primary'
>
    <LoginForm />
</DropdownButton>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationBlock>
                    <SectionPropertyOrientationInline overflowWarning={false}>
                        <DropdownButtonOrientation orientation='inline' />
                        <p></p>
                        <TypeScriptCode>{`
<DropdownButton
    orientation='inline'
    active={true}
    theme='primary'
>
    <LoginForm />
</DropdownButton>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationInline>
                </SectionPropertyOrientation>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview gap='4rem'>
                        <DropdownButton
                            active={true}
                            nude={false}
                            theme='primary'
                        >
                            <p>
                                Hello world!
                            </p>
                        </DropdownButton>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<DropdownButton
    active={true}
    nude={false}
    theme='primary'
>
    <p>
        Hello world!
    </p>
</DropdownButton>
                    `}</TypeScriptCode>
                    <SectionPropertyOnActiveChange>
                        <Preview gap='12rem'>
                            <DropdownButtonWithOnActiveChange />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
export default function App() {
    const [dropdownButtonActive, setDropdownButtonActive] = useState(true);
    
    // re-show the <DropdownButton> after 2 seconds:
    useEffect(() => {
        // conditions:
        if (dropdownButtonActive) return;
        
        // setups:
        const timerHandler = setTimeout(() => setDropdownButtonActive(true), 2000);
        
        // cleanups:
        return () => {
            clearTimeout(timerHandler);
        };
    }, [dropdownButtonActive]);    
    
    return (
        <DropdownButton
            active={dropdownButtonActive}
            onActiveChange={() => setDropdownButtonActive(false)}
            theme='primary'
        >
            <LoginForm />
        </DropdownButton>
    );
}
                        `}</TypeScriptCode>
                    </SectionPropertyOnActiveChange>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview gap='4rem'>
                        <DropdownButton
                            enabled={false}
                            active={true}
                            nude={false}
                            theme='primary'
                        >
                            <p>
                                Hello world!
                            </p>
                        </DropdownButton>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<DropdownButton
    enabled={false}
    active={true}
    nude={false}
    theme='primary'
>
    <p>
        Hello world!
    </p>
</DropdownButton>
                    `}</TypeScriptCode>
                </SectionPropertyEnabled>
            </SectionStates>
            <SectionPropertyLazy />
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Foregrounds, Backgrounds &amp; Borders'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>boxShadow</code>
                                <p>A <code>boxShadow</code> to apply, so the <CurrentComponent /> appears hovered.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import {
    DropdownButton,
    DropdownButtonProps,
    
    DropdownComponentProps,
    DropdownCloseType,
} from '@nodestrap/dropdownButton'
import Form from '@nodestrap/form'

export default function DropdownButtonLoginForm(props: DropdownButtonProps) {
    return (
        <DropdownButton
            {...props} // preserves other properties
            
            theme={props.theme ?? 'primary'} // override default value of theme to 'primary'
        >
            { props.children ?? <LoginForm /> }
        </DropdownButton>
    );
}

type LoginFormCloseType = DropdownCloseType | 'closeBySubmit'|'closeByCancel';
interface LoginFormProps extends DropdownComponentProps<HTMLFormElement, LoginFormCloseType> {
}
const LoginForm = ({ elmRef, tabIndex = -1, onActiveChange }: LoginFormProps) => {
    return (
        <Form
            elmRef={elmRef}
            tabIndex={tabIndex}
            theme='primary'
            enableValidation={false}
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
        </Form>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesDropdownButtonLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesDropdownButtonVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesDropdownButtonStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentComponent />.
                            </p>
                            <p>
                                Currently the states are equivalent to <CurrentBaseComponents />&apos;s states.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, children } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import {
    DropdownButton,
    DropdownButtonProps,
    
    usesDropdownButtonLayout,
    usesDropdownButtonVariants,
    usesDropdownButtonStates,
    
    DropdownComponentProps,
    DropdownCloseType,
} from '@nodestrap/dropdownButton'
import Form from '@nodestrap/form'


const useDropdownButtonLoginFormSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <DropdownButton>:
            usesDropdownButtonLayout(),
            usesDropdownButtonVariants(),
            usesDropdownButtonStates(),
        ]),
        style({
            // then overwrite with your style:
            
            ...children('form', {
                display             : 'grid',
                gridTemplateColumns : '1fr 1fr',
                gridAutoFlow        : 'row',
                gap                 : '1rem',
                outline             : 'none',
                /* ... */
            }),
            
            /* ... */
        }),
    ),
]);

export default function DropdownButtonLoginForm(props: DropdownButtonProps) {
    const sheet = useDropdownButtonLoginFormSheet();
    return (
        <DropdownButton {...props} mainClass={sheet.main}>
            { props.children ?? <LoginForm /> }
        </DropdownButton>
    )
}

type LoginFormCloseType = DropdownCloseType | 'closeBySubmit'|'closeByCancel';
interface LoginFormProps extends DropdownComponentProps<HTMLFormElement, LoginFormCloseType> {
}
const LoginForm = ({ elmRef, tabIndex = -1, onActiveChange }: LoginFormProps) => {
    return (
        <Form
            elmRef={elmRef}
            tabIndex={tabIndex}
            theme='primary'
            enableValidation={false}
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
        </Form>
    );
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
