import React, { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkDropdownPage, LinkCollapsePage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, LinkCardPage } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import { Tips } from '../../../components/Info'

import Label from '@nodestrap/label'
import Dropdown, { OrientationName, DropdownComponentProps, DropdownCloseType } from '@nodestrap/dropdown'
import Basic from '@nodestrap/basic'
import Button from '@nodestrap/button'
import { TextInput, EmailInput } from '@nodestrap/input'
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
const DemoDropdownLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Dropdown' */'../../../components/DemoPanel@Dropdown'))



interface ExampleDropdownUiProps extends DropdownComponentProps<HTMLElement, DropdownCloseType | 'close-by-btn'> {
}
const ExampleDropdownUi = ({ elmRef, tabIndex = -1, onActiveChange }: ExampleDropdownUiProps) => {
    return (
        <Basic<HTMLElement>
            elmRef={elmRef}
            {...{
                tabIndex,
            }}
            theme='primary'
            mild={true}
            style={{
                display       : 'flex',
                flexDirection : 'column',
                gap           : '1rem',
                outline       : 'none',
            }}
        >
            <p style={{ whiteSpace: 'nowrap' }}>
                Hello World
            </p>
            <TextInput  placeholder='John Smith'     size='sm' enableValidation={false} />
            <EmailInput placeholder='john@smith.com' size='sm' enableValidation={false} />
            <Button
                theme='secondary'
                size='sm'
                onClick={() => onActiveChange?.(false, 'close-by-btn')}
            >
                Close
            </Button>
        </Basic>
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
            elmRef={containerRef}
            blockDisplay={true}
            preventShift={!overlay}
        >{(isLoaded) => <>
            <Basic elmRef={contentRef} theme='secondary' mild={true} style={{ textAlign: 'center' }}>
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
            >
                <ExampleDropdownUi />
            </Dropdown>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum laborum quos magni accusamus.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cum nulla, tenetur nisi dolorem fuga ad dicta nobis, itaque, esse repellat. Sint commodi eum quos assumenda. Voluptatem quos facere officiis.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cum nulla, tenetur nisi dolorem fuga ad dicta nobis, itaque, esse repellat. Sint commodi eum quos assumenda. Voluptatem quos facere officiis.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cum nulla, tenetur nisi dolorem fuga ad dicta nobis, itaque, esse repellat. Sint commodi eum quos assumenda. Voluptatem quos facere officiis.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cum nulla, tenetur nisi dolorem fuga ad dicta nobis, itaque, esse repellat. Sint commodi eum quos assumenda. Voluptatem quos facere officiis.
            </p>
        </>}</Preview>
    )
};

const DropdownPlacementPreview = () => {
    const contentRef = useRef<HTMLElement>(null);
    
    
    
    return (
        <SelectPopupPlacement>{(popupPlacement) => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                popupPlacement='top'
                popupOffset={30}
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
                popupPlacement='top'
                popupShift={100}
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
        const container = contentRef.current?.parentElement;
        if (!container) return;
        if (container.style.height) return;
        container.style.boxSizing = 'content-box';
        container.style.height = `${container.clientHeight / 3}px`;
        container.scrollTop = (container.scrollHeight - container.clientHeight) / 2;
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
                popupPlacement='top'
                popupAutoFlip={true}
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
        const container = contentRef.current?.parentElement;
        if (!container) return;
        if (container.style.height) return;
        container.style.boxSizing = 'content-box';
        container.style.height = `${container.clientHeight / 3}px`;
        container.scrollTop = (container.scrollHeight - container.clientHeight) / 2;
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
                <ExampleDropdownUi />
            </Dropdown>
        </>}</Preview>
    )
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
                    By default, the <CurrentComponent /> is <code>{`nude={true}`}</code>, so
                    you should add a <strong>visible container element</strong> to <em>visualize</em> the <strong>dropdowned UI</strong>.<br />
                    For example: A <LinkCardPage /> inside <CurrentComponent />, it becomes a <u>dropdownable <LinkCardPage /></u>.
                </p>
                <p>
                    Here the preview:
                </p>
                <OverlayDropdownPreview />
            </SectionIntro>
            <SectionDemo>
                <DemoDropdownLazy fallback={<BusyBar />} />
            </SectionDemo>
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
                            The <code>popupPlacement</code> is on <code>{`'top'`}</code>,
                            but if you scroll down the <strong>container below</strong>, the <code>popupPlacement</code> will change to <code>{`'bottom'`}</code>.
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
    <div>
        <p style={{ whiteSpace: 'nowrap' }}>
            Hello everyone!
        </p>
        <p style={{ whiteSpace: 'nowrap' }}>
            This is an awesome message!
        </p>
        <p style={{ whiteSpace: 'nowrap' }}>
            It supports <strong>any HTML</strong> tags.
        </p>
    </div>
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
    <div>
        <p style={{ whiteSpace: 'nowrap' }}>
            Hello everyone!
        </p>
        <p style={{ whiteSpace: 'nowrap' }}>
            This is an awesome message!
        </p>
        <p style={{ whiteSpace: 'nowrap' }}>
            It supports <strong>any HTML</strong> tags.
        </p>
    </div>
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
    theme='primary'
>
    <p>
        Hello world!
    </p>
</Dropdown>
                    `}</TypeScriptCode>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview>
                        <Dropdown
                            enabled={false}
                            active={true}
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
                    <DetailSpecItem title='Animations'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>filterActive</code>
                                <p>A <code>filter</code> to apply when <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            
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
                            
                            <SimpleSpecItem>
                                <code>@keyframes activeInline</code>
                                <p>A keyframes name represents <em>showing keyframes</em> when <code>{`orientation='inline'`}</code>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes passiveInline</code>
                                <p>A keyframes name represents <em>hiding keyframes</em> when <code>{`orientation='inline'`}</code>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animActiveInline</code>
                                <p>An animation represents <em>showing animation</em> when <code>{`orientation='inline'`}</code>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animPassiveInline</code>
                                <p>An animation represents <em>hiding animation</em> when <code>{`orientation='inline'`}</code>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Dropdown } from '@nodestrap/dropdown'

export default function PopupLoginForm(props) {
    return (
        <Dropdown
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'form'} // override default value of semanticRole to 'form'
            semantictag={props.semanticTag ?? 'form'}   // override default value of semanticTag  to 'form'
            
            theme={props.theme ?? 'primary'} // override default value of theme to 'primary'
            mild={props.mild ?? false}       // override default value of mild  to false
        >
            { props.children }
        </Dropdown>
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
                                <code>SizeVariant</code>, <code>OrientationVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesDropdownStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentComponent /> such as:<br />
                                <strong>active</strong>/<strong>passive</strong> and <strong>all states</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, states, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { isActive } from '@nodestrap/indicator'
import { Dropdown, usesDropdownLayout, usesDropdownVariants, usesDropdownStates } from '@nodestrap/dropdown'


const usePopupLoginFormSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Dropdown>:
            usesDropdownLayout(),
            usesDropdownVariants(),
            usesDropdownStates(),
        ]),
        style({
            // then overwrite with your style:
            display : 'grid',
            margin  : '1em',
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
            ...states([
                isActive({
                    // define the style at 'being/fully active' state:
                    border-color: 'red',
                    /* ... */
                }),
                /* ... */
            ]),
            
            /* ... */
        }),
    ),
]);

export default function PopupLoginForm(props) {
    const sheet = usePopupLoginFormSheet();
    return (
        <Dropdown {...props} mainClass={sheet.main}>
            { props.children }
        </Dropdown>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
