import React, { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop, useInViewport } from '../../../components/hooks'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkDropdownButtonPage, LinkDropdownPage, SectionOverridingDefaults, ComponentInfoProvider, SectionDerivering, SectionCustomizingParent, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, LinkButtonIconPage, SectionConfigureDependsOnIcon, CurrentDominantBaseComponent } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import { Tips } from '../../../components/Info'

import { DropdownComponentProps } from '@nodestrap/dropdown'
import DropdownButtonOri, { DropdownButtonProps, OrientationName, DropdownCloseType } from '@nodestrap/dropdown-button'
import Form from '@nodestrap/form'
import Button from '@nodestrap/button'
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
import {
    SectionPropertyPopupPlacement,
    SectionPropertyPopupOffset,
    SectionPropertyPopupShift,
    
    SectionCustomizingButton,
} from '../../../components/common@DropdownButton'

import loadable from '@loadable/component'
const DemoDropdownButtonLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@DropdownButton' */'../../../components/DemoPanel@DropdownButton'))



const DropdownButton = (props: DropdownButtonProps) => <DropdownButtonOri
    popupAutoFlip={false}
    popupAutoShift={false}
    {...props}
    
    buttonChildren={props.buttonChildren ?? 'Toggle dropdown'}
/>


type LoginFormCloseType = DropdownCloseType | 'closeBySubmit'|'closeByCancel';
interface LoginFormProps extends DropdownComponentProps<HTMLFormElement, LoginFormCloseType> {
    focusable ?: boolean
}
const LoginForm = ({ elmRef, focusable = false, tabIndex = -1, onActiveChange }: LoginFormProps) => {
    return (
        <Form
            elmRef={elmRef}
            tabIndex={focusable ? tabIndex : undefined}
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

const DropdownButtonPreview = () => {
    const [containerRef, isActiveFlip, isInViewport] = useFlipFlop({ defaultState: true });
    const [flip, setFlip] = useState(false);
    
    
    
    return (
        <Preview
            blockDisplay={true}
        >{(isLoaded) => <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DropdownButton
                    buttonRef={containerRef}
                    
                    active={isLoaded ? (isActiveFlip === flip) : true}
                    onActiveChange={() => {
                        setFlip(!flip);
                    }}
                    theme='primary'
                    
                    popupAutoFlip={false}
                    popupAutoShift={false}
                    
                    style={{
                        justifySelf: 'center',
                    }}
                >
                    <LoginForm focusable={isInViewport} />
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
    )
};

const DropdownButtonFormChildPreview = () => {
    const [buttonRef, isInViewport] = useInViewport();
    const [showDropdownButton, setShowDropdownButton] = useState(false);
    
    return (
        <Preview
            blockDisplay={true}
        >{(isLoaded) => <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DropdownButton
                    buttonRef={buttonRef}
                    
                    active={isLoaded ? showDropdownButton : true}
                    onActiveChange={(newActive) => setShowDropdownButton(newActive)}
                    theme='primary'
                    
                    popupAutoFlip={false}
                    popupAutoShift={false}
                >
                    <LoginForm focusable={isInViewport} />
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
                buttonRef={buttonRef}
                
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
                buttonRef={buttonRef}
                
                active={showDropdown}
                onClick={() => setShowDropdown(!showDropdown)}
                nude={false}
                theme='primary'
                
                orientation='inline'
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
    const [containerRef, isActiveFlip, isInViewport] = useFlipFlop({ defaultState: true });
    const [flip, setFlip] = useState(false);
    
    
    
    return (
        <Preview
            gap='12rem'
        >{(isLoaded) => <>
            <DropdownButton
                buttonRef={containerRef}
                
                orientation={orientation}
                active={isLoaded ? (isActiveFlip === flip) : true}
                onActiveChange={() => {
                    setFlip(!flip);
                }}
                theme='primary'
            >
                <LoginForm focusable={isInViewport} />
            </DropdownButton>
        </>}</Preview>
    )
};

const DropdownButtonWithOnActiveChange = () => {
    const [buttonRef, isInViewport] = useInViewport();
    const [dropdownButtonActive, setDropdownButtonActive] = useState(true);
    
    // re-show the <DropdownButton> after 2 seconds:
    useEffect(() => {
        // conditions:
        if (!isInViewport) return;
        if (dropdownButtonActive) return;
        
        // setups:
        const timerHandler = setTimeout(() => setDropdownButtonActive(true), 2000);
        
        // cleanups:
        return () => {
            clearTimeout(timerHandler);
        };
    }, [isInViewport, dropdownButtonActive]);
    
    return (
        <DropdownButton
            buttonRef={buttonRef}
            
            active={dropdownButtonActive}
            onActiveChange={(newActive, reason) => setDropdownButtonActive(newActive)}
            theme='primary'
        >
            <LoginForm focusable={isInViewport} />
        </DropdownButton>
    );
};



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/dropdownButton' component={<LinkDropdownButtonPage />} bases={[<LinkDropdownPage key={0} />, <LinkButtonIconPage key={1} />]}>
            <Head>
                <title>&lt;DropdownButton&gt; Component</title>
                <meta name="description" content="Using <DropdownButton> component" />
            </Head>

            <SectionIntro>
                <p>
                    Turns any component to <strong>dropdownable</strong> component.
                </p>
                <p>
                    Similar to <CurrentDominantBaseComponent /> but has a toggleable <LinkButtonIconPage />.
                </p>
                <p>
                    Here the preview:
                </p>
                <DropdownButtonPreview />
            </SectionIntro>
            <SectionDemo>
                <DemoDropdownButtonLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionConfigureDependsOnIcon />
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
    buttonChildren={<>
        Toggle dropdown
    </>}
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
            <Section title='Customizing the Dropdown Behavior'>
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
                            The <code>popupPlacement</code> is on <code>{`'bottom'`}</code>,
                            but if you scroll up the <strong>container below</strong>, the <code>popupPlacement</code> will change to <code>{`'top'`}</code>.
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
    buttonChildren={<>
        Toggle dropdown
    </>}
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
    buttonChildren={<>
        Toggle dropdown
    </>}
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
    buttonChildren={<>
        Toggle dropdown
    </>}
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
    buttonChildren={<>
        Toggle dropdown
    </>}
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
                            nude={true}
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
    nude={true}
    active={true}
    theme='primary'
    buttonChildren={<>
        Toggle dropdown
    </>}
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
    buttonChildren={<>
        Toggle dropdown
    </>}
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
    buttonChildren={<>
        Toggle dropdown
    </>}
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
    buttonChildren={<>
        Toggle dropdown
    </>}
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
    buttonChildren={<>
        Toggle dropdown
    </>}
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
    buttonChildren={<>
        Toggle dropdown
    </>}
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
    buttonChildren={<>
        Toggle dropdown
    </>}
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
            onActiveChange={(newActive, reason) => setDropdownButtonActive(newActive)}
            theme='primary'
            buttonChildren={<>
                Toggle dropdown
            </>}
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
    buttonChildren={<>
        Toggle dropdown
    </>}
>
    <p>
        Hello world!
    </p>
</DropdownButton>
                    `}</TypeScriptCode>
                </SectionPropertyEnabled>
            </SectionStates>
            <SectionPropertyLazy />
            <SectionCustomizingButton>
                <Preview gap='4rem'>
                    <DropdownButton
                        button={<Button theme='warning' size='lg' active={false}>
                            A custom button
                        </Button>}
                        nude={false}
                        active={true}
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
    button={<Button theme='warning' size='lg' active={false}>
        A custom button
    </Button>}
    nude={false}
    active={true}
    theme='primary'
>
    <p>
        Hello world!
    </p>
</DropdownButton>
                `}</TypeScriptCode>
            </SectionCustomizingButton>
            <SectionCustomizingParent />
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import {
    DropdownButton,
    DropdownButtonProps,
    
    DropdownComponentProps,
    DropdownCloseType,
} from '@nodestrap/dropdownButton'
import Form from '@nodestrap/form'

export default function LoginButton(props: DropdownButtonProps) {
    return (
        <DropdownButton
            {...props} // preserves other properties
            
            theme={props.theme ?? 'primary'} // override default value of theme to 'primary'
            
            buttonChildren={props.buttonChildren ?? <>
                Login
            </>}
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
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
