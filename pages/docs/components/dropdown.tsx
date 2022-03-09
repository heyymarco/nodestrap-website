import React, { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkDropdownPage, LinkCollapsePage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import { Tips } from '../../../components/Info'

import Label from '@nodestrap/label'
import Dropdown, { OrientationName, DropdownComponentProps, DropdownCloseType } from '@nodestrap/dropdown'
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
const DemoDropdownLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Dropdown' */'../../../components/DemoPanel@Dropdown'))



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

interface OverlayDropdownPreviewProps {
    overlay ?: boolean
}
const OverlayDropdownPreview = ({ overlay = true }: OverlayDropdownPreviewProps) => {
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
            <Dropdown
                active={isLoaded ? (isActiveFlip === flip) : true}
                onActiveChange={() => {
                    setFlip(!flip);
                }}
                theme='success'
                
                targetRef={overlay ? contentRef : undefined}
                popupPlacement='bottom'
                popupOffset={10}
                
                popupAutoFlip={false}
                popupAutoShift={false}
            >
                <LoginForm />
            </Dropdown>
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

const DropdownFormChildPreview = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    return (
        <Preview
            blockDisplay={true}
            preventShift={true}
        >{(isLoaded) => <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button elmRef={buttonRef} theme='primary' onClick={() => setShowDropdown(!showDropdown)}>
                    Toggle dropdown
                </Button>
                <Dropdown
                    active={isLoaded ? showDropdown : true}
                    onActiveChange={(newActive) => setShowDropdown(newActive)}
                    theme='success'
                    
                    targetRef={buttonRef}
                    popupPlacement='bottom'
                    popupOffset={5}
                    
                    popupAutoFlip={false}
                    popupAutoShift={false}
                >
                    <LoginForm />
                </Dropdown>
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

const DropdownPlacementPreview = () => {
    const contentRef = useRef<HTMLElement>(null);
    
    
    
    return (
        <SelectPopupPlacement initialPlacement='bottom'>{(popupPlacement) => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Label elmRef={contentRef} theme='primary' size='lg' style={{ width: '50%', height: '50%' }}>
                A content
            </Label>
            <Dropdown
                active={true}
                nude={false}
                theme='success'
                size='sm'
                
                targetRef={contentRef}
                popupPlacement={popupPlacement}
                
                popupAutoFlip={false}
                popupAutoShift={false}
            >
                <p>
                    {`popupPlacement='${popupPlacement}'`}
                </p>
            </Dropdown>
        </div>}</SelectPopupPlacement>
    )
};

const DropdownOffset = () => {
    const contentRef = useRef<HTMLElement>(null);
    
    
    
    return (
        <Preview>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Label elmRef={contentRef} theme='primary' size='lg'>
                A content
            </Label>
            <Dropdown
                active={true}
                nude={false}
                theme='success'
                
                targetRef={contentRef}
                popupPlacement='bottom'
                popupOffset={30}
                popupAutoFlip={false}
                popupAutoShift={false}
            >
                <p>
                    hello world!
                </p>
            </Dropdown>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const DropdownShift = () => {
    const contentRef = useRef<HTMLElement>(null);
    
    
    
    return (
        <Preview>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Label elmRef={contentRef} theme='primary' size='lg'>
                A content
            </Label>
            <Dropdown
                active={true}
                nude={false}
                theme='success'
                
                targetRef={contentRef}
                popupPlacement='bottom'
                popupShift={100}
                popupAutoFlip={false}
                popupAutoShift={false}
            >
                <p>
                    hello world!
                </p>
            </Dropdown>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const DropdownAutoFlip = () => {
    const contentRef = useRef<HTMLElement>(null);
    
    
    
    useEffect(() => {
        const timeoutHanlder = setTimeout(() => {
            const container = contentRef.current?.parentElement;
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
            <Label elmRef={contentRef} theme='primary' size='lg'>
                A content
            </Label>
            <Dropdown
                active={true}
                nude={false}
                theme='success'
                
                targetRef={contentRef}
                popupPlacement='bottom'
                popupAutoFlip={true}
                popupAutoShift={false}
            >
                <p>
                    hello world!
                </p>
            </Dropdown>
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
const DropdownAutoShift = () => {
    const contentRef = useRef<HTMLElement>(null);
    
    
    
    useEffect(() => {
        const timeoutHanlder = setTimeout(() => {
            const container = contentRef.current?.parentElement;
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
            <Label elmRef={contentRef} theme='primary' size='lg' style={{ width: '50%' }}>
                A content
            </Label>
            <Dropdown
                active={true}
                nude={false}
                theme='success'
                
                targetRef={contentRef}
                popupPlacement='right'
                popupAutoFlip={false}
                popupAutoShift={true}
            >
                <p>
                    hello<br />
                    world<br />
                    <br />
                    hello<br />
                    everyone<br />
                </p>
            </Dropdown>
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

interface DropdownOrientationProps {
    orientation : OrientationName
}
const DropdownOrientation = ({ orientation }: DropdownOrientationProps) => {
    const [containerRef, isActiveFlip] = useFlipFlop({ defaultState: true });
    
    
    
    return (
        <Preview
            elmRef={containerRef}
            blockDisplay={true}
            preventShift={true}
        >{(isLoaded) => <>
            <Dropdown
                orientation={orientation}
                active={isLoaded ? isActiveFlip : true}
                theme='success'
            >
                <LoginForm />
            </Dropdown>
        </>}</Preview>
    )
};

const DropdownWithOnActiveChange = () => {
    const [dropdownActive, setDropdownActive] = useState(true);
    
    // re-show the <Dropdown> after 2 seconds:
    useEffect(() => {
        // conditions:
        if (dropdownActive) return;
        
        // setups:
        const timerHandler = setTimeout(() => setDropdownActive(true), 2000);
        
        // cleanups:
        return () => {
            clearTimeout(timerHandler);
        };
    }, [dropdownActive]);
    
    return (
        <Dropdown
            active={dropdownActive}
            onActiveChange={() => setDropdownActive(false)}
            theme='primary'
        >
            <LoginForm />
        </Dropdown>
    );
};



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/dropdown' component={<LinkDropdownPage />} bases={<LinkCollapsePage />}>
            <Head>
                <title>&lt;Dropdown&gt; Component</title>
                <meta name="description" content="Using <Dropdown> component" />
            </Head>

            <SectionIntro>
                <p>
                    Turns any component to <strong>dropdownable</strong> component.
                </p>
                <p>
                    Similar to <CurrentBaseComponents /> but <em>listens</em> for <kbd>Esc</kbd> key, blur event, and click event to close the <CurrentComponent />.
                </p>
                <p>
                    Here the preview:
                </p>
                <OverlayDropdownPreview />
            </SectionIntro>
            <SectionDemo>
                <DemoDropdownLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionPropertyChildren>
                <DropdownFormChildPreview />
                <p></p>
                <TypeScriptCode>{`
/* ... */

const [isDropdownVisible, setDropdownVisible] = useState(false);

/* ... */

<Dropdown
    active={isDropdownVisible}
    onActiveChange={(newActive, reason) => setDropdownVisible(newActive)}
>
    <LoginForm />
</Dropdown>

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
            <Section title={<>Overlaying <CurrentComponent /></>}>
                <p>
                    By default the <CurrentComponent /> flows as a normal document element, thus
                    during <em>showing</em>/<em>hiding</em> transition, the <CurrentComponent /> <strong>shifts</strong> the position of <em>next siblings</em>.
                </p>
                <p>
                    The preview below illustrates the <CurrentComponent /> <strong>shifts</strong> the position of the <strong>paragraphs</strong>:
                </p>
                <OverlayDropdownPreview overlay={false} />
                <p>
                    To workaround for the shifting problem, <CurrentComponent /> can be configured as an <em>overlaying element</em>, like this:
                </p>
                <OverlayDropdownPreview />
                <p>
                    To make the <CurrentComponent /> overlaying on a specific element, configure the following properties:
                </p>
                <SectionPropertyTargetRef />
                <SectionPropertyPopupPlacement>
                    <Tips>
                        <p>
                            <strong>Click on the dots</strong> to place the <CurrentComponent />.
                            There are 12 different placements to choose from.
                        </p>
                    </Tips>
                    <p></p>
                    <DropdownPlacementPreview />
                </SectionPropertyPopupPlacement>
                <SectionPropertyPopupOffset>
                    <DropdownOffset />
                </SectionPropertyPopupOffset>
                <SectionPropertyPopupShift>
                    <DropdownShift />
                </SectionPropertyPopupShift>
                <SectionPropertyPopupAutoFlip>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on <code>{`'bottom'`}</code>,
                            but if you scroll up the <strong>container below</strong>, the <code>popupPlacement</code> will change to <code>{`'bottom'`}</code>.
                        </p>
                    </Tips>
                    <p></p>
                    <DropdownAutoFlip />
                </SectionPropertyPopupAutoFlip>
                <SectionPropertyPopupAutoShift>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on exact <code>{`'right'`}</code>,
                            but if you scroll up/down the <strong>container below</strong>, the <code>popupPlacement</code> will shift slightly from its original position.
                        </p>
                    </Tips>
                    <p></p>
                    <DropdownAutoShift />
                </SectionPropertyPopupAutoShift>
            </Section>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Dropdown
                                theme={themeName}
                                active={true}
                                nude={false}
                                key={index}
                            >
                                <p>
                                    A <CurrentComponent/> with {themeName} theme.
                                </p>
                            </Dropdown>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Dropdown
    theme='${themeName}'
    active={true}
    nude={false}
>
    <p>
        A <code>{'<Dropdown>'}</code> with ${themeName} theme.
    </p>
</Dropdown>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <Dropdown
                            size='sm'
                            active={true}
                            nude={false}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with smaller size.
                            </p>
                        </Dropdown>
                        <Dropdown
                            size={undefined}
                            active={true}
                            nude={false}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with default size.
                            </p>
                        </Dropdown>
                        <Dropdown
                            size='lg'
                            active={true}
                            nude={false}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with larger size.
                            </p>
                        </Dropdown>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Dropdown
    size='sm'
    active={true}
    nude={false}
    theme='primary'
>
    <p>
        A <code>{'<Dropdown>'}</code> with smaller size.
    </p>
</Dropdown>

<Dropdown
    size={undefined}
    active={true}
    nude={false}
    theme='primary'
>
    <p>
        A <code>{'<Dropdown>'}</code> with default size.
    </p>
</Dropdown>

<Dropdown
    size='lg'
    active={true}
    nude={false}
    theme='primary'
>
    <p>
        A <code>{'<Dropdown>'}</code> with larger size.
    </p>
</Dropdown>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <Dropdown
                            nude={true}
                            active={true}
                            theme='primary'
                        >
                            <p>
                                A nude <CurrentComponent /> 😋
                            </p>
                        </Dropdown>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Dropdown
    nude={true}
    active={true}
    theme='primary'
>
    <p>
        A nude <code>{'<Dropdown>'}</code> 😋
    </p>
</Dropdown>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Dropdown
                                gradient={true}
                                active={true}
                                nude={false}
                                theme={themeName}
                                key={index}
                            >
                                <p>
                                    Hello world!
                                </p>
                            </Dropdown>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Dropdown
    gradient={true}
    active={true}
    nude={false}
    theme='${themeName}'
>
    <p>
        Hello world!
    </p>
</Dropdown>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        {themeNames.map((themeName, index) =>
                            <Dropdown
                                outlined={true}
                                active={true}
                                nude={false}
                                theme={themeName}
                                key={index}
                            >
                                <p>
                                    Hello world!
                                </p>
                            </Dropdown>
                        )}
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Dropdown
    outlined={true}
    active={true}
    nude={false}
    theme='${themeName}'
>
    <p>
        Hello world!
    </p>
</Dropdown>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Dropdown
                                mild={false}
                                active={true}
                                nude={false}
                                theme={themeName}
                                key={index}
                            >
                                <p>
                                    Hello world!
                                </p>
                            </Dropdown>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Dropdown
    mild={false}
    active={true}
    nude={false}
    theme='${themeName}'
>
    <p>
        Hello world!
    </p>
</Dropdown>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyOrientation>
                    <SectionPropertyOrientationBlock>
                        <DropdownOrientation orientation='block' />
                        <p></p>
                        <TypeScriptCode>{`
<Dropdown
    orientation='block'
    active={true}
    theme='primary'
>
    <LoginForm />
</Dropdown>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationBlock>
                    <SectionPropertyOrientationInline overflowWarning={false}>
                        <DropdownOrientation orientation='inline' />
                        <p></p>
                        <TypeScriptCode>{`
<Dropdown
    orientation='inline'
    active={true}
    theme='primary'
>
    <LoginForm />
</Dropdown>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationInline>
                </SectionPropertyOrientation>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview>
                        <Dropdown
                            active={true}
                            nude={false}
                            theme='primary'
                        >
                            <p>
                                Hello world!
                            </p>
                        </Dropdown>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Dropdown
    active={true}
    nude={false}
    theme='primary'
>
    <p>
        Hello world!
    </p>
</Dropdown>
                    `}</TypeScriptCode>
                    <SectionPropertyOnActiveChange>
                        <Preview preventShift={true}>
                            <DropdownWithOnActiveChange />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
export default function App() {
    const [dropdownActive, setDropdownActive] = useState(true);
    
    // re-show the <Dropdown> after 2 seconds:
    useEffect(() => {
        // conditions:
        if (dropdownActive) return;
        
        // setups:
        const timerHandler = setTimeout(() => setDropdownActive(true), 2000);
        
        // cleanups:
        return () => {
            clearTimeout(timerHandler);
        };
    }, [dropdownActive]);    
    
    return (
        <Dropdown
            active={dropdownActive}
            onActiveChange={() => setDropdownActive(false)}
            theme='primary'
        >
            <LoginForm />
        </Dropdown>
    );
}
                        `}</TypeScriptCode>
                    </SectionPropertyOnActiveChange>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview>
                        <Dropdown
                            enabled={false}
                            active={true}
                            nude={false}
                            theme='primary'
                        >
                            <p>
                                Hello world!
                            </p>
                        </Dropdown>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Dropdown
    enabled={false}
    active={true}
    nude={false}
    theme='primary'
>
    <p>
        Hello world!
    </p>
</Dropdown>
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
    Dropdown,
    DropdownProps,
    
    DropdownComponentProps,
    DropdownCloseType,
} from '@nodestrap/dropdown'
import Form from '@nodestrap/form'

export default function DropdownLoginForm(props: DropdownProps) {
    return (
        <Dropdown
            {...props} // preserves other properties
            
            theme={props.theme ?? 'primary'} // override default value of theme to 'primary'
        >
            { props.children ?? <LoginForm /> }
        </Dropdown>
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
                        <DetailSpecItem code='usesDropdownLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesDropdownVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesDropdownStates()'>
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
    Dropdown,
    DropdownProps,
    
    usesDropdownLayout,
    usesDropdownVariants,
    usesDropdownStates,
    
    DropdownComponentProps,
    DropdownCloseType,
} from '@nodestrap/dropdown'
import Form from '@nodestrap/form'


const useDropdownLoginFormSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Dropdown>:
            usesDropdownLayout(),
            usesDropdownVariants(),
            usesDropdownStates(),
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

export default function DropdownLoginForm(props: DropdownProps) {
    const sheet = useDropdownLoginFormSheet();
    return (
        <Dropdown {...props} mainClass={sheet.main}>
            { props.children ?? <LoginForm /> }
        </Dropdown>
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
