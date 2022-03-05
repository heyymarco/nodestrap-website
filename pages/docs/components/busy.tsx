import React, { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import GenericSection, { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkBusyPage, LinkBadgePage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import { Tips } from '../../../components/Info'

import Label from '@nodestrap/label'
import Busy, { BusyProps } from '@nodestrap/busy'
import Button from '@nodestrap/button'
import breakpoints from '@nodestrap/breakpoints'
import { useWindowSize } from '@nodestrap/dimensions'
import { List, ListItem } from '@nodestrap/list'
import SelectPopupPlacement from '../../../components/SelectPopupPlacement';
import {
    themeNames,
    SectionPropertyTheme,
    SectionPropertyGradient,
} from '../../../components/common@Basic'
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
import {
    SectionPropertySize,
    SectionPropertyMild,
    SectionPropertyBadgeStyle,
    SectionPropertyPillStyle,
    SectionPropertySquareStyle,
    SectionPropertyCircleStyle,
} from '../../../components/common@Badge'
import {
    SectionPropertyNude,
    SectionPropertyOutlined,
} from '../../../components/common@Busy'

import loadable from '@loadable/component'
const DemoBusyLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Busy' */'../../../components/DemoPanel@Busy'))



interface OverlayBusyPreviewProps {
    overlay ?: boolean
}
const OverlayBusyPreview = ({ overlay = true }: OverlayBusyPreviewProps) => {
    const [containerRef, isActiveFlip] = useFlipFlop({ defaultState: true });
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isLoaded, setLoaded] = useState<boolean>(false);
    const isActive = isLoaded ? isActiveFlip : true;
    useEffect(() => {
        if (isLoaded) return;
        
        
        
        const container = containerRef.current as HTMLElement|null;
        if (container) {
            if (!overlay) {
                container.style.boxSizing = '';
                container.style.height = '';
                
                setLoaded(false);
                setTimeout(() => {
                    container.style.boxSizing = 'border-box';
                    container.style.height = `${container.offsetHeight + 5}px`;
                    setLoaded(true);
                }, 0);
            }
            else {
                setLoaded(true);
            } // if
            container.style.overflow = 'hidden';
        } // if
    }, [isLoaded, overlay]);
    
    
    
    return (
        <Preview
            elmRef={containerRef}
            blockDisplay={true}
        >
            <Button elmRef={buttonRef} theme='success' size='lg' enabled={!isActive} mild={isActive}>
                Pay now
                <Busy
                    active={isActive}
                    theme='success'
                    size='lg'
                    inheritEnabled={false}
                    
                    targetRef={overlay ? buttonRef : undefined}
                    popupPlacement='right-start'
                    popupOffset={-12}
                    popupShift={-8}
                >
                    Processing your payment...
                </Busy>
            </Button>
            <span> -or- </span>
            <Button theme='secondary' size='lg' outlined={true} enabled={!isActive}>Cancel</Button>
        </Preview>
    )
};

const BusyPlacementPreview = () => {
    const contentRef = useRef<HTMLElement>(null);
    
    
    
    return (
        <SelectPopupPlacement>{(popupPlacement) => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Label elmRef={contentRef} theme='primary' size='lg' style={{ width: '50%', height: '50%' }}>
                A content
            </Label>
            <Busy
                active={true}
                theme='primary'
                size='lg'
                
                targetRef={contentRef}
                popupPlacement={popupPlacement}
            >
                {`popupPlacement='${popupPlacement}'`}
            </Busy>
        </div>}</SelectPopupPlacement>
    )
};

const BusyOffset = () => {
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
            <Busy
                active={true}
                theme='primary'
                size='lg'
                
                targetRef={contentRef}
                popupPlacement='top'
                popupOffset={30}
            >
                hello world!
            </Busy>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const BusyShift = () => {
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
            <Busy
                active={true}
                theme='primary'
                size='lg'
                
                targetRef={contentRef}
                popupPlacement='top'
                popupShift={100}
            >
                hello world!
            </Busy>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const BusyAutoFlip = () => {
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
            <Busy
                active={true}
                theme='primary'
                size='lg'
                
                targetRef={contentRef}
                popupPlacement='top'
                popupAutoFlip={true}
            >
                hello world!
            </Busy>
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
const BusyAutoShift = () => {
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
            <Busy
                active={true}
                theme='primary'
                size='lg'
                
                targetRef={contentRef}
                popupPlacement='right'
                popupAutoShift={true}
            >
                hello<br />
                world<br />
                <br />
                hello<br />
                everyone<br />
            </Busy>
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
        <ComponentInfoProvider packageName='@nodestrap/busy' component={<LinkBusyPage />} bases={<LinkBadgePage />}>
            <Head>
                <title>&lt;Busy&gt; Component</title>
                <meta name="description" content="Using <Busy> component" />
            </Head>

            <SectionIntro>
                <p>
                    Marks a desired component with a small label.
                </p>
                <p>
                    Here the preview:
                </p>
                <OverlayBusyPreview />
            </SectionIntro>
            <SectionDemo>
                <DemoBusyLazy fallback={<BusyBar />} />
            </SectionDemo>
            <Section title={<>Overlaying <CurrentComponent /></>}>
                <p>
                    By default the <CurrentComponent /> is flowed as a normal document element, thus
                    during <em>showing</em>/<em>hiding</em> transition, the <CurrentComponent /> <strong>shifts</strong> the position of <em>next siblings</em>.
                </p>
                <p>
                    The preview below illustrates the <CurrentComponent /> <strong>shifts</strong> the position of a <strong>cancel button</strong>:
                </p>
                <OverlayBusyPreview overlay={false} />
                <p>
                    To workaround for the shifting problem, <CurrentComponent /> can be configured as an <em>overlaying element</em>, like this:
                </p>
                <OverlayBusyPreview />
                <p>
                    To make the <CurrentComponent /> overlaying on a specific element, configure the following properties:
                </p>
                <SectionPropertyTargetRef />
                <SectionPropertyPopupPlacement>
                    <Tips>
                        <p>
                            <strong>Click on the dots</strong> to place the tooltip.
                            There are 12 different placements to choose from.
                        </p>
                    </Tips>
                    <p></p>
                    <BusyPlacementPreview />
                </SectionPropertyPopupPlacement>
                <SectionPropertyPopupOffset>
                    <BusyOffset />
                </SectionPropertyPopupOffset>
                <SectionPropertyPopupShift>
                    <BusyShift />
                </SectionPropertyPopupShift>
                <SectionPropertyPopupAutoFlip>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on <code>{`'top'`}</code>,
                            but if you scroll down the <strong>container below</strong>, the <code>popupPlacement</code> will change to <code>{`'bottom'`}</code>.
                        </p>
                    </Tips>
                    <p></p>
                    <BusyAutoFlip />
                </SectionPropertyPopupAutoFlip>
                <SectionPropertyPopupAutoShift>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on exact <code>{`'right'`}</code>,
                            but if you scroll up/down the <strong>container below</strong>, the <code>popupPlacement</code> will shift slightly from its original position.
                        </p>
                    </Tips>
                    <p></p>
                    <BusyAutoShift />
                </SectionPropertyPopupAutoShift>
            </Section>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <Busy
                                theme={themeName}
                                active={true}
                                key={index}
                                
                                label='loading...'
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Busy
    theme='${themeName}'
    active={true}
    
    label='loading...'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview stretch={false}>
                        <Busy
                            size='sm'
                            active={true}
                            theme='primary'
                            
                            label='loading...'
                        />
                        <Busy
                            size={undefined}
                            active={true}
                            theme='primary'
                            
                            label='loading...'
                        />
                        <Busy
                            size='lg'
                            active={true}
                            theme='primary'
                            
                            label='loading...'
                        />
                        <GenericSection theme='secondary'>
                            <h1>H1 heading <Busy theme='primary' label='loading' /></h1><span></span>
                            <h2>H2 heading <Busy theme='primary' label='loading' /></h2><span></span>
                            <h3>H3 heading <Busy theme='primary' label='loading' /></h3><span></span>
                            <h4>H4 heading <Busy theme='primary' label='loading' /></h4><span></span>
                            <h5>H5 heading <Busy theme='primary' label='loading' /></h5><span></span>
                            <h6>H6 heading <Busy theme='primary' label='loading' /></h6><span></span>
                        </GenericSection>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Busy
    size='sm'
    active={true}
    theme='primary'
    
    label='loading...'
/>
<Busy
    size={undefined}
    active={true}
    theme='primary'
    
    label='loading...'
/>
<Busy
    size='lg'
    active={true}
    theme='primary'
    
    label='loading...'
/>

<h1>H1 heading <Busy theme='primary' label='loading' /></h1><span></span>
<h2>H2 heading <Busy theme='primary' label='loading' /></h2><span></span>
<h3>H3 heading <Busy theme='primary' label='loading' /></h3><span></span>
<h4>H4 heading <Busy theme='primary' label='loading' /></h4><span></span>
<h5>H5 heading <Busy theme='primary' label='loading' /></h5><span></span>
<h6>H6 heading <Busy theme='primary' label='loading' /></h6><span></span>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview stretch={false}>
                        <Busy
                            nude={false}
                            active={true}
                            theme='primary'
                            
                            label='loading...'
                        />
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Busy
    nude={false}
    active={true}
    theme='primary'
    
    label='loading...'
/>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <Busy
                                gradient={true}
                                nude={false}
                                active={true}
                                theme={themeName}
                                key={index}
                                
                                label='loading...'
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Busy
    gradient={true}
    nude={false}
    active={true}
    theme='${themeName}'
    
    label='loading...'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <Busy
                                outlined={false}
                                nude={false}
                                active={true}
                                theme={themeName}
                                key={index}
                                
                                label='loading...'
                            />
                        )}
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Busy
    outlined={false}
    nude={false}
    active={true}
    theme='${themeName}'
    
    label='loading...'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <Busy
                                mild={true}
                                nude={false}
                                outlined={false}
                                active={true}
                                theme={themeName}
                                key={index}
                                
                                label='loading...'
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Busy
    mild={true}
    nude={false}
    outlined={false}
    active={true}
    theme='${themeName}'
    
    label='loading...'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyBadgeStyle>
                    <SectionPropertyPillStyle>
                        <Preview stretch={false}>
                            {themeNames.map((themeName, index) =>
                                <Busy
                                    badgeStyle='pill'
                                    nude={false}
                                    active={true}
                                    theme={themeName}
                                    key={index}
                                    
                                    label='loading...'
                                />
                            )}
                        </Preview>
                        <p></p>
                        <TypeScriptCode>
                            {themeNames.map((themeName) =>
`
<Busy
    busyStyle='pill'
    nude={false}
    active={true}
    theme='${themeName}'
    
    label='loading...'
/>
`
                            ).join('')}
                        </TypeScriptCode>
                    </SectionPropertyPillStyle>
                    <SectionPropertySquareStyle>
                        <Preview stretch={false}>
                            {themeNames.map((themeName, index) =>
                                <Busy
                                    badgeStyle='square'
                                    nude={false}
                                    active={true}
                                    theme={themeName}
                                    key={index}
                                    
                                    label='loading...'
                                />
                            )}
                        </Preview>
                        <p></p>
                        <TypeScriptCode>
                            {themeNames.map((themeName) =>
`
<Busy
    busyStyle='square'
    nude={false}
    active={true}
    theme='${themeName}'
    
    label='loading...'
/>
`
                            ).join('')}
                        </TypeScriptCode>
                    </SectionPropertySquareStyle>
                    <SectionPropertyCircleStyle>
                        <Preview stretch={false}>
                            {themeNames.map((themeName, index) =>
                                <Busy
                                    badgeStyle='circle'
                                    nude={false}
                                    active={true}
                                    theme={themeName}
                                    key={index}
                                    
                                    label='loading...'
                                />
                            )}
                        </Preview>
                        <p></p>
                        <TypeScriptCode>
                            {themeNames.map((themeName) =>
`
<Busy
    busyStyle='circle'
    nude={false}
    active={true}
    theme='${themeName}'
    
    label='loading...'
/>
`
                            ).join('')}
                        </TypeScriptCode>
                    </SectionPropertyCircleStyle>
                </SectionPropertyBadgeStyle>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview stretch={false}>
                        <Busy
                            active={true}
                            theme='primary'
                            
                            label='loading...'
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Busy
    active={true}
    theme='primary'
    
    label='loading...'
/>
                    `}</TypeScriptCode>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview stretch={false}>
                        <Busy
                            enabled={false}
                            active={true}
                            theme='primary'
                            
                            label='loading...'
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Busy
    enabled={false}
    active={true}
    theme='primary'
    
    label='loading...'
/>
                    `}</TypeScriptCode>
                </SectionPropertyEnabled>
            </SectionStates>
            <SectionPropertyLazy />
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Spacings'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>paddingInline</code>
                                <p>The default inner spacing on the left &amp; right.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingBlock</code>
                                <p>The default inner spacing on the top &amp; bottom.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingInlineSm</code>
                                <p>The inner spacing on the left &amp; right when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingBlockSm</code>
                                <p>The inner spacing on the top &amp; bottom when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingInlineLg</code>
                                <p>The inner spacing on the left &amp; right when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingBlockLg</code>
                                <p>The inner spacing on the top &amp; bottom when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Typos'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>whiteSpace</code>
                                <p>Defines how a <strong>white space</strong> inside <CurrentComponent /> is handled.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fontSize</code>
                                <p>The default text size.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fontSizeSm</code>
                                <p>The text size when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fontSizeLg</code>
                                <p>The text size when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fontWeight</code>
                                <p>The text thickness.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Busy } from '@nodestrap/busy'

export default function ErrorMark(props) {
    return (
        <Busy
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'status'} // override default value of semanticRole to 'status'
            semantictag={props.semanticTag ?? 'span'}     // override default value of semanticTag  to 'span'
            
            theme={props.theme ?? 'success'} // override default value of theme to 'success'
            mild={props.mild ?? false}      // override default value of mild  to false
        >
            { props.children ?? 'error' }
        </Busy>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesBusyLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesBusyVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code>, <code>BusyVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesBusyStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentComponent />.
                            </p>
                            <p>
                                Currently the states are equivalent to <CurrentBaseComponents />&apos;s states.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, states, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { isActive } from '@nodestrap/indicator'
import { Busy, usesBusyLayout, usesBusyVariants, usesBusyStates } from '@nodestrap/busy'


const useErrorMarkSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Busy>:
            usesBusyLayout(),
            usesBusyVariants(),
            usesBusyStates(),
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

export default function ErrorMark(props) {
    const sheet = useErrorMarkSheet();
    return (
        <Busy {...props} mainClass={sheet.main}>
            { props.children }
        </Busy>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
