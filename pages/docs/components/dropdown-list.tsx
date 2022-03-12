import React, { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop, useInViewport } from '../../../components/hooks'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkDropdownListPage, LinkDropdownPage, SectionOverridingDefaults, ComponentInfoProvider, SectionDerivering, SectionCustomizingParent, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, LinkListPage, CurrentDominantBaseComponent } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import { Tips } from '../../../components/Info'

import Label from '@nodestrap/label'
import DropdownList, { OrientationName, ListItem, ListSeparatorItem } from '@nodestrap/dropdown-list'
import Basic from '@nodestrap/basic'
import Button from '@nodestrap/button'
import { List, ListProps } from '@nodestrap/list'
import { setRef } from '@nodestrap/utilities'
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



interface CustomListProps extends ListProps {
    focusable ?: boolean
    tabIndex  ?: number
}
const CustomList = ({ focusable = false, tabIndex, ...restProps}: CustomListProps) => {
    return (
        <List
            {...restProps}
            
            {...(focusable ? {
                tabIndex,
            } : {})}
        />
    );
}
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
    const [containerRef, isActiveFlip, isInViewport] = useFlipFlop({ defaultState: true });
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
                
                list={<CustomList focusable={isInViewport} />}
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
                
                list={<CustomList />}
            >
                <ListItem>
                    {`popupPlacement='${popupPlacement}'`}
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
                
                list={<CustomList />}
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
                
                list={<CustomList />}
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
                
                list={<CustomList />}
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
                
                list={<CustomList />}
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
    const [containerRef, isActiveFlip, isInViewport] = useFlipFlop({ defaultState: true });
    
    
    
    return (
        <Preview
            elmRef={containerRef}
            blockDisplay={true}
            preventShift={true}
        >{(isLoaded) => <>
            <DropdownList
                orientation={orientation}
                active={isLoaded ? isActiveFlip : true}
                
                list={<CustomList focusable={isInViewport} />}
            >
                { SampleListItems().slice(0, 5) }
            </DropdownList>
        </>}</Preview>
    )
};

const DropdownListWithOnActiveChange = () => {
    const [containerRef, isInViewport] = useInViewport();
    const [dropdownListActive, setDropdownListActive] = useState(true);
    
    // re-show the <DropdownList> after 2 seconds:
    useEffect(() => {
        // conditions:
        if (!isInViewport) return;
        if (dropdownListActive) return;
        
        // setups:
        const timerHandler = setTimeout(() => setDropdownListActive(true), 2000);
        
        // cleanups:
        return () => {
            clearTimeout(timerHandler);
        };
    }, [isInViewport, dropdownListActive]);
    
    return (<>
        <div ref={containerRef}>
        </div>
        <DropdownList
            active={dropdownListActive}
            onActiveChange={(newActive, reason) => setDropdownListActive(newActive)}
            theme='primary'
            
            list={<CustomList focusable={isInViewport} />}
        >
            { SampleListItems() }
        </DropdownList>
    </>);
};



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/dropdownList' component={<LinkDropdownListPage />} bases={[<LinkDropdownPage key={0} />, <LinkListPage key={1} />]}>
            <Head>
                <title>&lt;DropdownList&gt; Component</title>
                <meta name="description" content="Using <DropdownList> component" />
            </Head>

            <SectionIntro>
                <p>
                    A <strong>dropdownable</strong> <LinkListPage /> component.
                </p>
                <p>
                    Similar to <CurrentDominantBaseComponent /> but uses <LinkListPage /> as the <em>dropdown UI</em>.
                </p>
                <p>
                    Here the preview:
                </p>
                <OverlayDropdownListPreview />
            </SectionIntro>
            <SectionDemo>
                <DemoDropdownListLazy fallback={<BusyBar />} />
            </SectionDemo>
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
            onActiveChange={(newActive, reason) => setDropdownListActive(newActive)}
            theme='primary'
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
            <SectionCustomizingParent />
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import {
    DropdownList,
    DropdownListProps,
} from '@nodestrap/dropdownList'
import Form from '@nodestrap/form'

export default function DropdownMenu(props: DropdownListProps) {
    return (
        <DropdownList
            {...props} // preserves other properties
            
            theme={props.theme ?? 'primary'} // override default value of theme to 'primary'
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
        </DropdownList>
    );
}
                `}</SectionOverridingDefaults>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
