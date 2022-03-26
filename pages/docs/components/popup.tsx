import React, { useEffect, useRef } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkPopupPage, LinkIndicatorPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionVariables, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import { Tips } from '../../../components/Info'

import Label from '@nodestrap/label'
import Popup from '@nodestrap/popup'
import Button from '@nodestrap/button'
import SelectPopupPlacement from '../../../components/SelectPopupPlacement';
import {
    themeNames,
    SectionPropertyTheme,
    SectionPropertySize,
    SectionPropertyNude,
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
    SectionPropertyPopupAutoFlip,
    SectionPropertyPopupAutoShift,
    
    SectionPropertyLazy,
} from '../../../components/common@Popup'

import loadable from '@loadable/component'
const DemoPopupLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Popup' */'../../../components/DemoPanel@Popup'))



interface OverlayPopupPreviewProps {
    overlay ?: boolean
}
const OverlayPopupPreview = ({ overlay = true }: OverlayPopupPreviewProps) => {
    const [containerRef, isActiveFlip] = useFlipFlop({ defaultState: true });
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    
    
    return (
        <Preview
            elmRef={containerRef}
            blockDisplay={true}
            preventShift={!overlay}
        >{(isLoaded) => {
            const isActive = isLoaded ? isActiveFlip : true;
            return (
                <>
                    <Button elmRef={buttonRef} theme='success' size='lg' enabled={!isActive} mild={isActive}>Pay now</Button>
                    <Popup
                        active={isActive}
                        theme='warning'
                        
                        targetRef={overlay ? buttonRef : undefined}
                        popupPlacement='right-start'
                        popupOffset={-32}
                        popupShift={-8}
                    >
                        Processing your payment...
                    </Popup>
                    <span> -or- </span>
                    <Button theme='secondary' size='lg' outlined={true} enabled={!isActive}>Cancel</Button>
                </>
            );
        }}</Preview>
    )
};

const PopupPlacementPreview = () => {
    const contentRef = useRef<HTMLElement>(null);
    
    
    
    return (
        <SelectPopupPlacement>{(popupPlacement) => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Label elmRef={contentRef} theme='primary' size='lg' style={{ width: '50%', height: '50%' }}>
                A content
            </Label>
            <Popup
                active={true}
                theme='warning'
                
                targetRef={contentRef}
                popupPlacement={popupPlacement}
            >
                <code>
                    {`popupPlacement='${popupPlacement}'`}
                </code>
            </Popup>
        </div>}</SelectPopupPlacement>
    )
};

const PopupOffset = () => {
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
            <Popup
                active={true}
                theme='warning'
                
                targetRef={contentRef}
                popupPlacement='top'
                popupOffset={30}
            >
                hello world!
            </Popup>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const PopupShift = () => {
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
            <Popup
                active={true}
                theme='warning'
                
                targetRef={contentRef}
                popupPlacement='top'
                popupShift={100}
            >
                hello world!
            </Popup>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const PopupAutoFlip = () => {
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
            <Popup
                active={true}
                theme='warning'
                
                targetRef={contentRef}
                popupPlacement='top'
                popupAutoFlip={true}
            >
                hello world!
            </Popup>
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
const PopupAutoShift = () => {
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
            <Popup
                active={true}
                theme='warning'
                
                targetRef={contentRef}
                popupPlacement='right'
                popupAutoShift={true}
            >
                hello<br />
                world<br />
                <br />
                hello<br />
                everyone<br />
            </Popup>
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



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/popup' component={<LinkPopupPage />} bases={<LinkIndicatorPage />}>
            <Head>
                <title>&lt;Popup&gt; Component</title>
                <meta name="description" content="Using <Popup> component" />
            </Head>

            <SectionIntro>
                <p>
                    Dynamically <strong>shows</strong> and <strong>hides</strong> a content.
                </p>
                <p>
                    Here the preview:
                </p>
                <OverlayPopupPreview />
            </SectionIntro>
            <SectionDemo>
                <DemoPopupLazy fallback={<BusyBar />} />
            </SectionDemo>
            <Section title={<>Overlaying <CurrentComponent /></>}>
                <p>
                    By default the <CurrentComponent /> flows as a normal document element, thus
                    during <em>showing</em>/<em>hiding</em> transition, the <CurrentComponent /> <strong>shifts</strong> the position of <em>next siblings</em>.
                </p>
                <p>
                    The preview below illustrates the <CurrentComponent /> <strong>shifts</strong> the position of the <strong>cancel button</strong>:
                </p>
                <OverlayPopupPreview overlay={false} />
                <p>
                    To workaround for the shifting problem, <CurrentComponent /> can be configured as an <em>overlaying element</em>, like this:
                </p>
                <OverlayPopupPreview />
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
                    <PopupPlacementPreview />
                </SectionPropertyPopupPlacement>
                <SectionPropertyPopupOffset>
                    <PopupOffset />
                </SectionPropertyPopupOffset>
                <SectionPropertyPopupShift>
                    <PopupShift />
                </SectionPropertyPopupShift>
                <SectionPropertyPopupAutoFlip>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on <code>{`'top'`}</code>,
                            but if you scroll down the <strong>container below</strong>, the <code>popupPlacement</code> will change to <code>{`'bottom'`}</code>.
                        </p>
                    </Tips>
                    <p></p>
                    <PopupAutoFlip />
                </SectionPropertyPopupAutoFlip>
                <SectionPropertyPopupAutoShift>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on exact <code>{`'right'`}</code>,
                            but if you scroll up/down the <strong>container below</strong>, the <code>popupPlacement</code> will shift slightly from its original position.
                        </p>
                    </Tips>
                    <p></p>
                    <PopupAutoShift />
                </SectionPropertyPopupAutoShift>
            </Section>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Popup
                                theme={themeName}
                                active={true}
                                key={index}
                            >
                                A {'<Popup>'} with {themeName} theme
                            </Popup>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Popup
    theme='${themeName}'
    active={true}
>
    A {'<Popup>'} with ${themeName} theme
</Popup>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <Popup
                            size='sm'
                            active={true}
                            theme='primary'
                        >
                            A {'<Popup>'} with smaller size
                        </Popup>
                        <Popup
                            size={undefined}
                            active={true}
                            theme='primary'
                        >
                            A {'<Popup>'} with default size
                        </Popup>
                        <Popup
                            size='lg'
                            active={true}
                            theme='primary'
                        >
                            A {'<Popup>'} with larger size
                        </Popup>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Popup
    size='sm'
    active={true}
    theme='primary'
>
    A {'<Popup>'} with smaller size
</Popup>

<Popup
    size={undefined}
    active={true}
    theme='primary'
>
    A {'<Popup>'} with default size
</Popup>

<Popup
    size='lg'
    active={true}
    theme='primary'
>
    A {'<Popup>'} with larger size
</Popup>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <Popup
                            nude={true}
                            active={true}
                            theme='warning'
                        >
                            hello world
                        </Popup>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Popup
    nude={true}
    active={true}
    theme='warning'
>
    hello world
</Popup>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Popup
                                gradient={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                hello world
                            </Popup>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Popup
    gradient={true}
    active={true}
    theme='${themeName}'
>
    hello world
</Popup>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        {themeNames.map((themeName, index) =>
                            <Popup
                                outlined={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                hello world
                            </Popup>
                        )}
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Popup
    outlined={true}
    active={true}
    theme='${themeName}'
>
    hello world
</Popup>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Popup
                                mild={false}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                hello world
                            </Popup>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Popup
    mild={false}
    active={true}
    theme='${themeName}'
>
    hello world
</Popup>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview>
                        <Popup
                            active={true}
                            theme='primary'
                        >
                            hello world
                        </Popup>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Popup
    active={true}
    theme='primary'
>
    hello world
</Popup>
                    `}</TypeScriptCode>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview>
                        <Popup
                            enabled={false}
                            active={true}
                            theme='primary'
                        >
                            hello world
                        </Popup>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Popup
    enabled={false}
    active={true}
    theme='primary'
>
    hello world
</Popup>
                    `}</TypeScriptCode>
                </SectionPropertyEnabled>
            </SectionStates>
            <SectionPropertyLazy />
            <SectionVariables specList={
                <SpecList>
                    <DetailSpecItem title='Animations'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>filterActive</code>
                                <p>A <code>filter</code> to apply when <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes active</code>
                                <p>A keyframes name represents <em>showing keyframes</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes passive</code>
                                <p>A keyframes name represents <em>hiding keyframes</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animActive</code>
                                <p>An animation represents <em>showing animation</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animPassive</code>
                                <p>An animation represents <em>hiding animation</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Popup } from '@nodestrap/popup'

export default function SurpriseMessage(props) {
    return (
        <Popup
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'status'} // override default value of semanticRole to 'status'
            semantictag={props.semanticTag ?? 'span'}     // override default value of semanticTag  to 'span'
            
            theme={props.theme ?? 'warning'} // override default value of theme to 'warning'
            mild={props.mild ?? false}       // override default value of mild  to false
        >
            { props.children }
        </Popup>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesPopupLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesPopupVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesPopupStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentComponent /> such as:<br />
                                <strong>enabled</strong>/<strong>disabled</strong> and <strong>active</strong>/<strong>passive</strong>.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, states, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { isActive } from '@nodestrap/indicator'
import { Popup, usesPopupLayout, usesPopupVariants, usesPopupStates } from '@nodestrap/popup'


const useSurpriseMessageSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Popup>:
            usesPopupLayout(),
            usesPopupVariants(),
            usesPopupStates(),
        ]),
        style({
            // then overwrite with your style:
            display : 'inline-block',
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
                    background-color: 'red',
                    /* ... */
                }),
                /* ... */
            ]),
            
            /* ... */
        }),
    ),
]);

export default function SurpriseMessage(props) {
    const sheet = useSurpriseMessageSheet();
    return (
        <Popup {...props} mainClass={sheet.main}>
            { props.children }
        </Popup>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
