import React, { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop, useInViewport } from '../../../components/hooks'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkDropdownListButtonPage, LinkDropdownPage, SectionOverridingDefaults, ComponentInfoProvider, SectionDerivering, SectionCustomizingParent, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, LinkButtonIconPage, SectionConfigureDependsOnIcon, LinkListPage, LinkDropdownListPage } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import { Tips } from '../../../components/Info'

import DropdownListButtonOri, { DropdownListButtonProps, OrientationName, ListItem, ListSeparatorItem } from '@nodestrap/dropdown-list-button'
import Button from '@nodestrap/button'
import { List, ListProps } from '@nodestrap/list'
import { ButtonIcon, ButtonIconProps } from '@nodestrap/button-icon'
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
    
    SectionPropertyLazy,
} from '../../../components/common@Popup'
import {
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
    
    SectionPropertyActive,
    
    SectionCustomizingButton,
} from '../../../components/common@DropdownButton'
import {
    SectionCustomizingList,
} from '../../../components/common@DropdownList'

import loadable from '@loadable/component'
const DemoDropdownListButtonLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@DropdownListButton' */'../../../components/DemoPanel@DropdownListButton'))



const CenteredButton = (props: ButtonIconProps) => <ButtonIcon {...props} style={{
    justifySelf: 'center',
    ...props.style,
}} />

interface CustomListProps extends ListProps {
    focusable ?: boolean
    tabIndex  ?: number
}
const CustomList = ({ focusable = false, tabIndex, style, ...restProps}: CustomListProps) => {
    return (
        <List
            {...restProps}
            
            {...(focusable ? {
                tabIndex,
            } : {})}
            
            style={{
                whiteSpace: 'nowrap',
                ...style,
            }}
        />
    );
}

const DropdownListButton = (props: DropdownListButtonProps) => <DropdownListButtonOri
    popupAutoFlip={false}
    popupAutoShift={false}
    {...props}
    
    button={props.button ?? <CenteredButton />}
    buttonChildren={props.buttonChildren ?? 'Toggle dropdown'}
    
    list={props.list ?? <CustomList />}
/>


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


const DropdownListButtonPreview = () => {
    const [containerRef, isActiveFlip, isInViewport] = useFlipFlop({ defaultState: true });
    const [flip, setFlip] = useState(false);
    
    
    
    return (
        <Preview
            blockDisplay={true}
        >{(isLoaded) => <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DropdownListButton
                    buttonRef={containerRef}
                    
                    active={isLoaded ? (isActiveFlip === flip) : true}
                    onActiveChange={() => {
                        setFlip(!flip);
                    }}
                    theme='primary'
                    
                    popupAutoFlip={false}
                    popupAutoShift={false}
                    
                    list={<CustomList focusable={isInViewport} />}
                >
                    { SampleListItems() }
                </DropdownListButton>
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

const DropdownListButtonPlacementPreview = () => {
    const [showDropdown, setShowDropdown] = useState(true);

    
    
    return (
        <SelectPopupPlacement initialPlacement='bottom'>{(popupPlacement) => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <DropdownListButton
                active={showDropdown}
                onClick={() => setShowDropdown(!showDropdown)}
                theme='primary'
                size='sm'
                
                popupPlacement={popupPlacement}
                
                popupAutoFlip={false}
                popupAutoShift={false}
                
                button={<ButtonIcon size='lg' style={{ width: '50%', height: '50%' }} />}
            >
                <ListItem>
                    {`popupPlacement='${popupPlacement}'`}
                </ListItem>
            </DropdownListButton>
        </div>}</SelectPopupPlacement>
    )
};

const DropdownListButtonOffset = () => {
    const [showDropdown, setShowDropdown] = useState(true);
    
    
    
    return (
        <Preview>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <DropdownListButton
                active={showDropdown}
                onClick={() => setShowDropdown(!showDropdown)}
                theme='primary'
                
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
            </DropdownListButton>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const DropdownListButtonShift = () => {
    const [showDropdown, setShowDropdown] = useState(true);
    
    
    
    return (
        <Preview>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <DropdownListButton
                active={showDropdown}
                onClick={() => setShowDropdown(!showDropdown)}
                theme='primary'
                
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
            </DropdownListButton>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const DropdownListButtonAutoFlip = () => {
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
            <DropdownListButton
                buttonRef={buttonRef}
                
                active={showDropdown}
                onClick={() => setShowDropdown(!showDropdown)}
                theme='primary'
                
                popupAutoFlip={true}
                popupAutoShift={false}
            >
                <ListItem>
                    A list item
                </ListItem>
                <ListItem>
                    A list item
                </ListItem>
            </DropdownListButton>
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
const DropdownListButtonAutoShift = () => {
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
            <DropdownListButton
                buttonRef={buttonRef}
                
                active={showDropdown}
                onClick={() => setShowDropdown(!showDropdown)}
                theme='primary'
                
                orientation='inline'
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
            </DropdownListButton>
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

interface DropdownListButtonOrientationProps {
    orientation : OrientationName
}
const DropdownListButtonOrientation = ({ orientation }: DropdownListButtonOrientationProps) => {
    const [containerRef, isActiveFlip, isInViewport] = useFlipFlop({ defaultState: true });
    const [flip, setFlip] = useState(false);
    
    
    
    return (
        <Preview
            gap='12rem'
        >{(isLoaded) => <>
            <DropdownListButton
                buttonRef={containerRef}
                
                orientation={orientation}
                active={isLoaded ? (isActiveFlip === flip) : true}
                onActiveChange={() => {
                    setFlip(!flip);
                }}
                theme='primary'
                
                list={<CustomList focusable={isInViewport} />}
            >
                { SampleListItems().slice(0, 5) }
            </DropdownListButton>
        </>}</Preview>
    )
};

const DropdownListButtonWithOnActiveChange = () => {
    const [buttonRef, isInViewport] = useInViewport();
    const [dropdownListButtonActive, setDropdownListButtonActive] = useState(true);
    
    // re-show the <DropdownListButton> after 2 seconds:
    useEffect(() => {
        // conditions:
        if (!isInViewport) return;
        if (dropdownListButtonActive) return;
        
        // setups:
        const timerHandler = setTimeout(() => setDropdownListButtonActive(true), 2000);
        
        // cleanups:
        return () => {
            clearTimeout(timerHandler);
        };
    }, [isInViewport, dropdownListButtonActive]);
    
    return (
        <DropdownListButton
            buttonRef={buttonRef}
            
            active={dropdownListButtonActive}
            onActiveChange={(newActive, reason) => setDropdownListButtonActive(newActive)}
            theme='primary'
            
            list={<CustomList focusable={isInViewport} />}
        >
            { SampleListItems() }
        </DropdownListButton>
    );
};



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/dropdownListButton' component={<LinkDropdownListButtonPage />} bases={[<LinkDropdownPage key={0} />, <LinkListPage key={1} />, <LinkButtonIconPage key={2} />]}>
            <Head>
                <title>&lt;DropdownListButton&gt; Component</title>
                <meta name="description" content="Using <DropdownListButton> component" />
            </Head>

            <SectionIntro>
                <p>
                    A <strong>dropdownable</strong> <LinkListPage /> component.
                </p>
                <p>
                    Similar to <LinkDropdownListPage /> but has a toggleable <LinkButtonIconPage />.
                </p>
                <p>
                    Here the preview:
                </p>
                <DropdownListButtonPreview />
            </SectionIntro>
            <SectionDemo>
                <DemoDropdownListButtonLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionConfigureDependsOnIcon />
            <Section title='Customizing the Dropdown Behavior'>
                <p>
                    There are some properties for customizing the behavior of the dropdown, they are:
                </p>
                <SectionPropertyPopupPlacement>
                    <Tips>
                        <p>
                            <strong>Click on the dots</strong> to place the <em>dropdown</em>.
                            There are 12 different placements to choose from.
                        </p>
                    </Tips>
                    <p></p>
                    <DropdownListButtonPlacementPreview />
                </SectionPropertyPopupPlacement>
                <SectionPropertyPopupOffset>
                    <DropdownListButtonOffset />
                </SectionPropertyPopupOffset>
                <SectionPropertyPopupShift>
                    <DropdownListButtonShift />
                </SectionPropertyPopupShift>
                <SectionPropertyPopupAutoFlip>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on <code>{`'bottom'`}</code>,
                            but if you scroll up the <strong>container below</strong>, the <code>popupPlacement</code> will change to <code>{`'top'`}</code>.
                        </p>
                    </Tips>
                    <p></p>
                    <DropdownListButtonAutoFlip />
                </SectionPropertyPopupAutoFlip>
                <SectionPropertyPopupAutoShift>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on exact <code>{`'right'`}</code>,
                            but if you scroll up/down the <strong>container below</strong>, the <code>popupPlacement</code> will shift slightly from its original position.
                        </p>
                    </Tips>
                    <p></p>
                    <DropdownListButtonAutoShift />
                </SectionPropertyPopupAutoShift>
            </Section>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview gap='6rem'>
                        {themeNames.map((themeName, index) =>
                            <DropdownListButton
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
                            </DropdownListButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<DropdownListButton
    theme='${themeName}'
    active={true}
    buttonChildren={<>
        Toggle dropdown
    </>}
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownListButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview gap='7rem'>
                        <DropdownListButton
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
                        </DropdownListButton>
                        <DropdownListButton
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
                        </DropdownListButton>
                        <DropdownListButton
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
                        </DropdownListButton>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<DropdownListButton
    size='sm'
    active={true}
    theme='primary'
    buttonChildren={<>
        Toggle dropdown
    </>}
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownListButton>

<DropdownListButton
    size={undefined}
    active={true}
    theme='primary'
    buttonChildren={<>
        Toggle dropdown
    </>}
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownListButton>

<DropdownListButton
    size='lg'
    active={true}
    theme='primary'
    buttonChildren={<>
        Toggle dropdown
    </>}
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownListButton>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview gap='7rem'>
                        <DropdownListButton
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
                        </DropdownListButton>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<DropdownListButton
    nude={false}
    active={true}
    theme='primary'
    buttonChildren={<>
        Toggle dropdown
    </>}
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownListButton>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview gap='6rem'>
                        {themeNames.map((themeName, index) =>
                            <DropdownListButton
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
                            </DropdownListButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<DropdownListButton
    gradient={true}
    active={true}
    theme='${themeName}'
    buttonChildren={<>
        Toggle dropdown
    </>}
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownListButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview gap='6rem'>
                        {themeNames.map((themeName, index) =>
                            <DropdownListButton
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
                            </DropdownListButton>
                        )}
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<DropdownListButton
    outlined={true}
    active={true}
    theme='${themeName}'
    buttonChildren={<>
        Toggle dropdown
    </>}
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownListButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview gap='6rem'>
                        {themeNames.map((themeName, index) =>
                            <DropdownListButton
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
                            </DropdownListButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<DropdownListButton
    mild={false}
    active={true}
    theme='${themeName}'
    buttonChildren={<>
        Toggle dropdown
    </>}
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownListButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyOrientation>
                    <SectionPropertyOrientationBlock>
                        <DropdownListButtonOrientation orientation='block' />
                        <p></p>
                        <TypeScriptCode>{`
<DropdownListButton
    orientation='block'
    active={true}
    theme='primary'
    buttonChildren={<>
        Toggle dropdown
    </>}
>
    <ListItem>
        A first item (inherit theme)
    </ListItem>
    <ListItem>
        A second item (inherit theme)
    </ListItem>
    <ListSeparatorItem />
    <ListItem>
        A third item (inherit theme)
    </ListItem>
    <ListItem theme='danger'>
        A fourth item (danger theme)
    </ListItem>
    <ListItem theme='success'>
        A fifth item (success theme)
    </ListItem>
</DropdownListButton>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationBlock>
                    <SectionPropertyOrientationInline overflowWarning={false}>
                        <DropdownListButtonOrientation orientation='inline' />
                        <p></p>
                        <TypeScriptCode>{`
<DropdownListButton
    orientation='inline'
    active={true}
    theme='primary'
    buttonChildren={<>
        Toggle dropdown
    </>}
>
    <ListItem>
        A first item (inherit theme)
    </ListItem>
    <ListItem>
        A second item (inherit theme)
    </ListItem>
    <ListSeparatorItem />
    <ListItem>
        A third item (inherit theme)
    </ListItem>
    <ListItem theme='danger'>
        A fourth item (danger theme)
    </ListItem>
    <ListItem theme='success'>
        A fifth item (success theme)
    </ListItem>
</DropdownListButton>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationInline>
                </SectionPropertyOrientation>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview gap='6rem'>
                        <DropdownListButton
                            active={true}
                            theme='primary'
                        >
                            <ListItem>
                                A list item
                            </ListItem>
                            <ListItem>
                                A list item
                            </ListItem>
                        </DropdownListButton>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<DropdownListButton
    active={true}
    theme='primary'
    buttonChildren={<>
        Toggle dropdown
    </>}
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownListButton>
                    `}</TypeScriptCode>
                    <SectionPropertyOnActiveChange>
                        <Preview gap='13rem'>
                            <DropdownListButtonWithOnActiveChange />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
export default function App() {
    const [dropdownListButtonActive, setDropdownListButtonActive] = useState(true);
    
    // re-show the <DropdownListButton> after 2 seconds:
    useEffect(() => {
        // conditions:
        if (dropdownListButtonActive) return;
        
        // setups:
        const timerHandler = setTimeout(() => setDropdownListButtonActive(true), 2000);
        
        // cleanups:
        return () => {
            clearTimeout(timerHandler);
        };
    }, [dropdownListButtonActive]);    
    
    return (
        <DropdownListButton
            active={dropdownListButtonActive}
            onActiveChange={(newActive, reason) => setDropdownListButtonActive(newActive)}
            theme='primary'
            buttonChildren={<>
                Toggle dropdown
            </>}
        >
            <ListItem>
                A first item (inherit theme)
            </ListItem>
            <ListItem>
                A second item (inherit theme)
            </ListItem>
            <ListSeparatorItem />
            <ListItem>
                A third item (inherit theme)
            </ListItem>
            <ListItem theme='danger'>
                A fourth item (danger theme)
            </ListItem>
            <ListItem theme='success'>
                A fifth item (success theme)
            </ListItem>
        </DropdownListButton>
    );
}
                        `}</TypeScriptCode>
                    </SectionPropertyOnActiveChange>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview gap='6rem'>
                        <DropdownListButton
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
                        </DropdownListButton>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<DropdownListButton
    enabled={false}
    active={true}
    theme='primary'
    buttonChildren={<>
        Toggle dropdown
    </>}
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownListButton>
                    `}</TypeScriptCode>
                </SectionPropertyEnabled>
            </SectionStates>
            <SectionPropertyLazy />
            <SectionCustomizingButton>
                <Preview gap='6rem'>
                    <DropdownListButton
                        button={<Button theme='warning' size='lg' active={false}>
                            A custom button
                        </Button>}
                        active={true}
                        theme='primary'
                    >
                        <ListItem>
                            A list item
                        </ListItem>
                        <ListItem>
                            A list item
                        </ListItem>
                    </DropdownListButton>
                </Preview>
                <p></p>
                <TypeScriptCode>{`
<DropdownListButton
    button={<Button theme='warning' size='lg' active={false}>
        A custom button
    </Button>}
    active={true}
    theme='primary'
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownListButton>
                `}</TypeScriptCode>
            </SectionCustomizingButton>
            <SectionCustomizingList>
                <Preview gap='9rem'>
                    <DropdownListButton
                        list={<List theme='warning' mild={false} listStyle={['content', 'numbered']} />}
                        active={true}
                        theme='primary'
                    >
                        <ListItem>
                            A list item
                        </ListItem>
                        <ListItem>
                            A list item
                        </ListItem>
                    </DropdownListButton>
                </Preview>
                <p></p>
                <TypeScriptCode>{`
<DropdownListButton
    list={<List theme='warning' mild={false} listStyle={['content', 'numbered']} />}
    active={true}
    theme='primary'
    buttonChildren={<>
        Toggle dropdown
    </>}
>
    <ListItem>
        A list item
    </ListItem>
    <ListItem>
        A list item
    </ListItem>
</DropdownListButton>
                `}</TypeScriptCode>
            </SectionCustomizingList>
            <SectionCustomizingParent />
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import {
    DropdownListButton,
    DropdownListButtonProps,
    
    DropdownComponentProps,
    DropdownCloseType,
} from '@nodestrap/dropdownListButton'
import Form from '@nodestrap/form'

export default function DropdownMenu(props: DropdownListButtonProps) {
    return (
        <DropdownListButton
            {...props} // preserves other properties
            
            theme={props.theme ?? 'primary'} // override default value of theme to 'primary'
            
            buttonChildren={props.buttonChildren ?? <>
                Login
            </>}
        >
            <ListItem>
                A first item (inherit theme)
            </ListItem>
            <ListItem>
                A second item (inherit theme)
            </ListItem>
            <ListSeparatorItem />
            <ListItem>
                A third item (inherit theme)
            </ListItem>
            <ListItem theme='danger'>
                A fourth item (danger theme)
            </ListItem>
            <ListItem theme='success'>
                A fifth item (success theme)
            </ListItem>
        </DropdownListButton>
    );
}
                `}</SectionOverridingDefaults>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
