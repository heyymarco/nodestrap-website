import React, { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkDropdownListPage, LinkDropdownPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import { Tips } from '../../../components/Info'

import Label from '@nodestrap/label'
import DropdownList, { OrientationName, ListItem, ListSeparatorItem } from '@nodestrap/dropdown-list'
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
const DemoDropdownListLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@DropdownList' */'../../../components/DemoPanel@DropdownList'))



const SampleListItems = () => {
    return ([
        <ListItem key={0}>
            A first item (inherit theme)
        </ListItem>,
        <ListItem key={1}>
            A second item (inherit theme)
        </ListItem>,
        <ListSeparatorItem key={2} />,
        <ListItem key={3}>
            A third item (inherit theme)
        </ListItem>,
        <ListItem key={4} theme='danger'>
            A fourth item (danger theme)
        </ListItem>,
        <ListItem key={5} theme='success'>
            A fifth item (success theme)
        </ListItem>,
    ]);
}

interface OverlayDropdownListPreviewProps {
    overlay ?: boolean
}
const OverlayDropdownListPreview = ({ overlay = true }: OverlayDropdownListPreviewProps) => {
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
            <DropdownList
                active={isLoaded ? (isActiveFlip === flip) : true}
                onActiveChange={() => {
                    setFlip(!flip);
                }}
                
                targetRef={overlay ? contentRef : undefined}
                popupPlacement='bottom'
                popupOffset={10}
                
                popupAutoFlip={false}
                popupAutoShift={false}
            >
                { SampleListItems() }
            </DropdownList>
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

const DropdownListFormChildPreview = () => {
    const [showDropdownList, setShowDropdownList] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    return (
        <Preview
            blockDisplay={true}
            preventShift={true}
        >{(isLoaded) => <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button elmRef={buttonRef} theme='primary' onClick={() => setShowDropdownList(!showDropdownList)}>
                    Toggle dropdownList
                </Button>
                <DropdownList
                    active={isLoaded ? showDropdownList : true}
                    onActiveChange={(newActive) => setShowDropdownList(newActive)}
                    
                    targetRef={buttonRef}
                    popupPlacement='bottom'
                    popupOffset={5}
                    
                    popupAutoFlip={false}
                    popupAutoShift={false}
                >
                    { SampleListItems() }
                </DropdownList>
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

const DropdownListPlacementPreview = () => {
    const contentRef = useRef<HTMLElement>(null);
    
    
    
    return (
        <SelectPopupPlacement initialPlacement='bottom'>{(popupPlacement) => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Label elmRef={contentRef} theme='primary' size='lg' style={{ width: '50%', height: '50%' }}>
                A content
            </Label>
            <DropdownList
                active={true}
                size='sm'
                
                targetRef={contentRef}
                popupPlacement={popupPlacement}
                
                popupAutoFlip={false}
                popupAutoShift={false}
            >
                <ListItem>
                    A list item
                </ListItem>
            </DropdownList>
        </div>}</SelectPopupPlacement>
    )
};

const DropdownListOffset = () => {
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
            <DropdownList
                active={true}
                
                targetRef={contentRef}
                popupPlacement='bottom'
                popupOffset={30}
                popupAutoFlip={false}
                popupAutoShift={false}
            >
                <ListItem>
                    A list item
                </ListItem>
                <ListItem>
                    A list item
                </ListItem>
            </DropdownList>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const DropdownListShift = () => {
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
            <DropdownList
                active={true}
                
                targetRef={contentRef}
                popupPlacement='bottom'
                popupShift={100}
                popupAutoFlip={false}
                popupAutoShift={false}
            >
                <ListItem>
                    A list item
                </ListItem>
                <ListItem>
                    A list item
                </ListItem>
            </DropdownList>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const DropdownListAutoFlip = () => {
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
            <DropdownList
                active={true}
                
                targetRef={contentRef}
                popupPlacement='bottom'
                popupAutoFlip={true}
                popupAutoShift={false}
            >
                <ListItem>
                    A list item
                </ListItem>
                <ListItem>
                    A list item
                </ListItem>
            </DropdownList>
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
const DropdownListAutoShift = () => {
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
            <DropdownList
                active={true}
                
                targetRef={contentRef}
                popupPlacement='right'
                popupAutoFlip={false}
                popupAutoShift={true}
            >
                <ListItem>
                    A list item
                </ListItem>
                <ListItem>
                    A list item
                </ListItem>
                <ListSeparatorItem />
                <ListItem>
                    A list item
                </ListItem>
            </DropdownList>
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

interface DropdownListOrientationProps {
    orientation : OrientationName
}
const DropdownListOrientation = ({ orientation }: DropdownListOrientationProps) => {
    const [containerRef, isActiveFlip] = useFlipFlop({ defaultState: true });
    
    
    
    return (
        <Preview
            elmRef={containerRef}
            blockDisplay={true}
            preventShift={true}
        >{(isLoaded) => <>
            <DropdownList
                orientation={orientation}
                active={isLoaded ? isActiveFlip : true}
            >
                { SampleListItems().slice(0, 5) }
            </DropdownList>
        </>}</Preview>
    )
};

const DropdownListWithOnActiveChange = () => {
    const [dropdownListActive, setDropdownListActive] = useState(true);
    
    // re-show the <DropdownList> after 2 seconds:
    useEffect(() => {
        // conditions:
        if (dropdownListActive) return;
        
        // setups:
        const timerHandler = setTimeout(() => setDropdownListActive(true), 2000);
        
        // cleanups:
        return () => {
            clearTimeout(timerHandler);
        };
    }, [dropdownListActive]);
    
    return (
        <DropdownList
            active={dropdownListActive}
            onActiveChange={() => setDropdownListActive(false)}
            theme='primary'
        >
            { SampleListItems() }
        </DropdownList>
    );
};



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/dropdownList' component={<LinkDropdownListPage />} bases={<LinkDropdownPage />}>
            <Head>
                <title>&lt;DropdownList&gt; Component</title>
                <meta name="description" content="Using <DropdownList> component" />
            </Head>

            <SectionIntro>
                <p>
                    Turns any component to <strong>dropdownListable</strong> component.
                </p>
                <p>
                    Similar to <CurrentBaseComponents /> but <em>listens</em> for <kbd>Esc</kbd> key, blur event, and click event to close the <CurrentComponent />.
                </p>
                <p>
                    Here the preview:
                </p>
                <OverlayDropdownListPreview />
            </SectionIntro>
            <SectionDemo>
                <DemoDropdownListLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionPropertyChildren>
                <DropdownListFormChildPreview />
                <p></p>
                <TypeScriptCode>{`
/* ... */

const [isDropdownListVisible, setDropdownListVisible] = useState(false);

/* ... */

<DropdownList
    active={isDropdownListVisible}
    onActiveChange={(newActive, reason) => setDropdownListVisible(newActive)}
>
    <LoginForm />
</DropdownList>

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
                <OverlayDropdownListPreview overlay={false} />
                <p>
                    To workaround for the shifting problem, <CurrentComponent /> can be configured as an <em>overlaying element</em>, like this:
                </p>
                <OverlayDropdownListPreview />
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
                    <DropdownListPlacementPreview />
                </SectionPropertyPopupPlacement>
                <SectionPropertyPopupOffset>
                    <DropdownListOffset />
                </SectionPropertyPopupOffset>
                <SectionPropertyPopupShift>
                    <DropdownListShift />
                </SectionPropertyPopupShift>
                <SectionPropertyPopupAutoFlip>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on <code>{`'bottom'`}</code>,
                            but if you scroll up the <strong>container below</strong>, the <code>popupPlacement</code> will change to <code>{`'top'`}</code>.
                        </p>
                    </Tips>
                    <p></p>
                    <DropdownListAutoFlip />
                </SectionPropertyPopupAutoFlip>
                <SectionPropertyPopupAutoShift>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on exact <code>{`'right'`}</code>,
                            but if you scroll up/down the <strong>container below</strong>, the <code>popupPlacement</code> will shift slightly from its original position.
                        </p>
                    </Tips>
                    <p></p>
                    <DropdownListAutoShift />
                </SectionPropertyPopupAutoShift>
            </Section>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <DropdownList
                                theme={themeName}
                                active={true}
                                key={index}
                            >
                                <ListItem>
                                    A list item
                                </ListItem>
                                <ListItem>
                                    A list item
                                </ListItem>
                            </DropdownList>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<DropdownList
    theme='${themeName}'
    active={true}
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownList>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <DropdownList
                            size='sm'
                            active={true}
                            theme='primary'
                        >
                            <ListItem>
                                A list item
                            </ListItem>
                            <ListItem>
                                A list item
                            </ListItem>
                        </DropdownList>
                        <DropdownList
                            size={undefined}
                            active={true}
                            theme='primary'
                        >
                            <ListItem>
                                A list item
                            </ListItem>
                            <ListItem>
                                A list item
                            </ListItem>
                        </DropdownList>
                        <DropdownList
                            size='lg'
                            active={true}
                            theme='primary'
                        >
                            <ListItem>
                                A list item
                            </ListItem>
                            <ListItem>
                                A list item
                            </ListItem>
                        </DropdownList>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<DropdownList
    size='sm'
    active={true}
    theme='primary'
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownList>

<DropdownList
    size={undefined}
    active={true}
    theme='primary'
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownList>

<DropdownList
    size='lg'
    active={true}
    theme='primary'
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownList>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <DropdownList
                            nude={false}
                            active={true}
                            theme='primary'
                        >
                            <ListItem>
                                A list item
                            </ListItem>
                            <ListItem>
                                A list item
                            </ListItem>
                        </DropdownList>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<DropdownList
    nude={false}
    active={true}
    theme='primary'
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownList>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <DropdownList
                                gradient={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                <ListItem>
                                    A list item
                                </ListItem>
                                <ListItem>
                                    A list item
                                </ListItem>
                            </DropdownList>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<DropdownList
    gradient={true}
    active={true}
    theme='${themeName}'
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownList>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        {themeNames.map((themeName, index) =>
                            <DropdownList
                                outlined={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                <ListItem>
                                    A list item
                                </ListItem>
                                <ListItem>
                                    A list item
                                </ListItem>
                            </DropdownList>
                        )}
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<DropdownList
    outlined={true}
    active={true}
    theme='${themeName}'
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownList>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <DropdownList
                                mild={false}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                <ListItem>
                                    A list item
                                </ListItem>
                                <ListItem>
                                    A list item
                                </ListItem>
                            </DropdownList>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<DropdownList
    mild={false}
    active={true}
    theme='${themeName}'
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownList>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyOrientation>
                    <SectionPropertyOrientationBlock>
                        <DropdownListOrientation orientation='block' />
                        <p></p>
                        <TypeScriptCode>{`
<DropdownList
    orientation='block'
    active={true}
    theme='primary'
>
    <LoginForm />
</DropdownList>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationBlock>
                    <SectionPropertyOrientationInline overflowWarning={false}>
                        <DropdownListOrientation orientation='inline' />
                        <p></p>
                        <TypeScriptCode>{`
<DropdownList
    orientation='inline'
    active={true}
    theme='primary'
>
    <LoginForm />
</DropdownList>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationInline>
                </SectionPropertyOrientation>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview>
                        <DropdownList
                            active={true}
                            theme='primary'
                        >
                            <ListItem>
                                A list item
                            </ListItem>
                            <ListItem>
                                A list item
                            </ListItem>
                        </DropdownList>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<DropdownList
    active={true}
    theme='primary'
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownList>
                    `}</TypeScriptCode>
                    <SectionPropertyOnActiveChange>
                        <Preview preventShift={true}>
                            <DropdownListWithOnActiveChange />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
export default function App() {
    const [dropdownListActive, setDropdownListActive] = useState(true);
    
    // re-show the <DropdownList> after 2 seconds:
    useEffect(() => {
        // conditions:
        if (dropdownListActive) return;
        
        // setups:
        const timerHandler = setTimeout(() => setDropdownListActive(true), 2000);
        
        // cleanups:
        return () => {
            clearTimeout(timerHandler);
        };
    }, [dropdownListActive]);    
    
    return (
        <DropdownList
            active={dropdownListActive}
            onActiveChange={() => setDropdownListActive(false)}
            theme='primary'
        >
            <LoginForm />
        </DropdownList>
    );
}
                        `}</TypeScriptCode>
                    </SectionPropertyOnActiveChange>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview>
                        <DropdownList
                            enabled={false}
                            active={true}
                            theme='primary'
                        >
                            <ListItem>
                                A list item
                            </ListItem>
                            <ListItem>
                                A list item
                            </ListItem>
                        </DropdownList>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<DropdownList
    enabled={false}
    active={true}
    theme='primary'
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownList>
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
    DropdownList,
    DropdownListProps,
    
    DropdownListComponentProps,
    DropdownListCloseType,
} from '@nodestrap/dropdownList'
import Form from '@nodestrap/form'

export default function DropdownListLoginForm(props: DropdownListProps) {
    return (
        <DropdownList
            {...props} // preserves other properties
            
            theme={props.theme ?? 'primary'} // override default value of theme to 'primary'
        >
            { props.children ?? <LoginForm /> }
        </DropdownList>
    );
}

type LoginFormCloseType = DropdownListCloseType | 'closeBySubmit'|'closeByCancel';
interface LoginFormProps extends DropdownListComponentProps<HTMLFormElement, LoginFormCloseType> {
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
                        <DetailSpecItem code='usesDropdownListLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesDropdownListVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesDropdownListStates()'>
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
    DropdownList,
    DropdownListProps,
    
    usesDropdownListLayout,
    usesDropdownListVariants,
    usesDropdownListStates,
    
    DropdownListComponentProps,
    DropdownListCloseType,
} from '@nodestrap/dropdownList'
import Form from '@nodestrap/form'


const useDropdownListLoginFormSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <DropdownList>:
            usesDropdownListLayout(),
            usesDropdownListVariants(),
            usesDropdownListStates(),
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

export default function DropdownListLoginForm(props: DropdownListProps) {
    const sheet = useDropdownListLoginFormSheet();
    return (
        <DropdownList {...props} mainClass={sheet.main}>
            { props.children ?? <LoginForm /> }
        </DropdownList>
    )
}

type LoginFormCloseType = DropdownListCloseType | 'closeBySubmit'|'closeByCancel';
interface LoginFormProps extends DropdownListComponentProps<HTMLFormElement, LoginFormCloseType> {
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
