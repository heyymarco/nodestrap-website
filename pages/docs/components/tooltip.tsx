import React, { useEffect, useRef } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkTooltipPage, LinkPopupPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionVariables, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import { Tips } from '../../../components/Info'

import Label from '@nodestrap/label'
import Tooltip, { TooltipProps } from '@nodestrap/tooltip'
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
    
    SectionPropertyTargetRef,
    SectionPropertyPopupPlacement,
    SectionPropertyPopupOffset,
    SectionPropertyPopupShift,
    
    SectionPropertyLazy,
} from '../../../components/common@Popup'
import {
    SectionPropertyPopupAutoFlip,
    SectionPropertyPopupAutoShift,
    
    SectionPropertyActive,
    SectionPropertyActiveDelay,
    SectionPropertyPassiveDelay,
} from '../../../components/common@Tooltip'

import loadable from '@loadable/component'
const DemoTooltipLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Tooltip' */'../../../components/DemoPanel@Tooltip'))



interface OverlayTooltipPreviewProps {
    overlay ?: boolean
}
const OverlayTooltipPreview = ({ overlay = true }: OverlayTooltipPreviewProps) => {
    const [containerRef, isActiveFlip] = useFlipFlop({ defaultState: true });
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    
    
    return (
        <Preview
            elmRef={containerRef}
            blockDisplay={true}
            preventShift={!overlay}
        >{(isLoaded) => <>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <Button
                elmRef={buttonRef}
                theme='primary'
            >
                Get discount
            </Button>
            <Tooltip
                active={isLoaded ? isActiveFlip : true}
                activeDelay={!isLoaded ? 0 : undefined}
                theme='warning'
                
                targetRef={overlay ? buttonRef : undefined}
                
                popupAutoFlip={false}
                popupAutoShift={false}
            >
                This is <strong>awesome</strong>!
            </Tooltip>
            <Button tag='div' theme='secondary' style={{ [`marginInlineStart`]: '2rem' }}>
                Logout
            </Button>
        </>}</Preview>
    )
};

const TooltipPlacementPreview = () => {
    const contentRef = useRef<HTMLElement>(null);
    
    
    
    return (
        <SelectPopupPlacement>{(popupPlacement) => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Label elmRef={contentRef} theme='primary' size='lg' style={{ width: '50%', height: '50%' }}>
                A content
            </Label>
            <Tooltip
                active={true}
                theme='warning'
                
                targetRef={contentRef}
                popupPlacement={popupPlacement}
                
                popupAutoFlip={false}
                popupAutoShift={false}
            >
                {`popupPlacement='${popupPlacement}'`}
            </Tooltip>
        </div>}</SelectPopupPlacement>
    )
};

const TooltipOnButton = (props: TooltipProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    
    
    return (
        <>
            <Button
                elmRef={buttonRef}
                theme='primary'
                style={{
                    marginBlockStart: '3rem', // prevent tooltips from overlapping
                }}
            >
                Products
            </Button>
            <Tooltip
                popupAutoFlip={false}
                popupAutoShift={false}
                {...props}
                
                targetRef={buttonRef}
            />
        </>
    );
};

const TooltipOffset = () => {
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
            <Tooltip
                active={true}
                theme='warning'
                
                targetRef={contentRef}
                popupPlacement='top'
                popupOffset={30}
                popupAutoFlip={false}
                popupAutoShift={false}
            >
                hello world!
            </Tooltip>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const TooltipShift = () => {
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
            <Tooltip
                active={true}
                theme='warning'
                
                targetRef={contentRef}
                popupPlacement='top'
                popupShift={100}
                popupAutoFlip={false}
                popupAutoShift={false}
            >
                hello world!
            </Tooltip>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const TooltipAutoFlip = () => {
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
            <Tooltip
                active={true}
                theme='warning'
                
                targetRef={contentRef}
                popupPlacement='top'
                popupAutoFlip={true}
                popupAutoShift={false}
            >
                hello world!
            </Tooltip>
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
const TooltipAutoShift = () => {
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
            <Tooltip
                active={true}
                theme='warning'
                
                targetRef={contentRef}
                popupPlacement='right'
                popupAutoFlip={false}
                popupAutoShift={true}
            >
                hello<br />
                world<br />
                <br />
                hello<br />
                everyone<br />
            </Tooltip>
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
        <ComponentInfoProvider packageName='@nodestrap/tooltip' component={<LinkTooltipPage />} bases={<LinkPopupPage />}>
            <Head>
                <title>&lt;Tooltip&gt; Component</title>
                <meta name="description" content="Using <Tooltip> component" />
            </Head>

            <SectionIntro>
                <p>
                    Displays advisory information related to the element it belongs to.
                </p>
                <p>
                    Here the preview:
                </p>
                <OverlayTooltipPreview />
            </SectionIntro>
            <SectionDemo>
                <DemoTooltipLazy fallback={<BusyBar />} />
            </SectionDemo>
            <Section title={<>Overlaying <CurrentComponent /></>}>
                <p>
                    By default the <CurrentComponent /> flows as a normal document element, thus
                    during <em>showing</em>/<em>hiding</em> transition, the <CurrentComponent /> <strong>shifts</strong> the position of <em>next siblings</em>.
                </p>
                <p>
                    The preview below illustrates the <CurrentComponent /> <strong>shifts</strong> the position of a <strong>logout button</strong>:
                </p>
                <OverlayTooltipPreview overlay={false} />
                <p>
                    To workaround for the shifting problem, <CurrentComponent /> can be configured as an <em>overlaying element</em>, like this:
                </p>
                <OverlayTooltipPreview />
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
                    <TooltipPlacementPreview />
                </SectionPropertyPopupPlacement>
                <SectionPropertyPopupOffset>
                    <TooltipOffset />
                </SectionPropertyPopupOffset>
                <SectionPropertyPopupShift>
                    <TooltipShift />
                </SectionPropertyPopupShift>
                <SectionPropertyPopupAutoFlip>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on <code>{`'top'`}</code>,
                            but if you scroll down the <strong>container below</strong>, the <code>popupPlacement</code> will change to <code>{`'bottom'`}</code>.
                        </p>
                    </Tips>
                    <p></p>
                    <TooltipAutoFlip />
                </SectionPropertyPopupAutoFlip>
                <SectionPropertyPopupAutoShift>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on exact <code>{`'right'`}</code>,
                            but if you scroll up/down the <strong>container below</strong>, the <code>popupPlacement</code> will shift slightly from its original position.
                        </p>
                    </Tips>
                    <p></p>
                    <TooltipAutoShift />
                </SectionPropertyPopupAutoShift>
            </Section>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <TooltipOnButton
                                theme={themeName}
                                active={true}
                                key={index}
                            >
                                {themeName}
                            </TooltipOnButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Tooltip
    theme='${themeName}'
    active={true}
>
    ${themeName}
</Tooltip>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview stretch={false}>
                        <TooltipOnButton
                            size='sm'
                            active={true}
                            theme='warning'
                        >
                            smaller
                        </TooltipOnButton>
                        <TooltipOnButton
                            size={undefined}
                            active={true}
                            theme='warning'
                        >
                            default
                        </TooltipOnButton>
                        <TooltipOnButton
                            size='lg'
                            active={true}
                            theme='warning'
                        >
                            larger
                        </TooltipOnButton>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
const buttonRef = useRef(null);
/* ... */

<Tooltip
    size='sm'
    active={true}
    theme='warning'
>
    smaller
</Tooltip>

<Tooltip
    size={undefined}
    active={true}
    theme='warning'
>
    default
</Tooltip>

<Tooltip
    size='lg'
    active={true}
    theme='warning'
>
    larger
</Tooltip>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview stretch={false}>
                        <TooltipOnButton
                            nude={true}
                            active={true}
                            theme='warning'
                        >
                            This is <strong>awesome</strong>!
                        </TooltipOnButton>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Tooltip
    nude={true}
    active={true}
    theme='warning'
>
    This is <strong>awesome</strong>!
</Tooltip>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <TooltipOnButton
                                gradient={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                This is <strong>awesome</strong>!
                            </TooltipOnButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Tooltip
    gradient={true}
    active={true}
    theme='${themeName}'
>
    This is <strong>awesome</strong>!
</Tooltip>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <TooltipOnButton
                                outlined={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                This is <strong>awesome</strong>!
                            </TooltipOnButton>
                        )}
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Tooltip
    outlined={true}
    active={true}
    theme='${themeName}'
>
    This is <strong>awesome</strong>!
</Tooltip>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <TooltipOnButton
                                mild={false}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                This is <strong>awesome</strong>!
                            </TooltipOnButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Tooltip
    mild={false}
    active={true}
    theme='${themeName}'
>
    This is <strong>awesome</strong>!
</Tooltip>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview stretch={false}>
                        <Tips>
                            <p>
                                <strong>Hover</strong> your cursor over the button below (desktop).<br />
                                -or-<br />
                                <strong>Touch</strong> your finger on the button below (mobile).
                            </p>
                        </Tips>
                        <TooltipOnButton
                            active={undefined}
                            theme='warning'
                        >
                            This is <strong>awesome</strong>!
                        </TooltipOnButton>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Tooltip
    active={true}
    theme='warning'
>
    This is <strong>awesome</strong>!
</Tooltip>
                    `}</TypeScriptCode>
                    <SectionPropertyActiveDelay />
                    <SectionPropertyPassiveDelay />
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview stretch={false}>
                        <TooltipOnButton
                            enabled={false}
                            active={true}
                            theme='warning'
                        >
                            This is <strong>awesome</strong>!
                        </TooltipOnButton>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Tooltip
    enabled={false}
    active={true}
    theme='warning'
>
    This is <strong>awesome</strong>!
</Tooltip>
                    `}</TypeScriptCode>
                </SectionPropertyEnabled>
            </SectionStates>
            <SectionPropertyLazy />
            <SectionVariables specList={
                <SpecList>
                    <DetailSpecItem title='Foregrounds, Backgrounds &amp; Borders'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>boxShadow</code>
                                <p>A <code>boxShadow</code> to apply, so the <CurrentComponent /> appears hovered.</p>
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
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Arrows'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>arrowInlineSize</code>
                                <p>A default arrow width.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>arrowBlockSize</code>
                                <p>A default arrow height.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>arrowInlineSizeSm</code>
                                <p>The arrow width when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>arrowBlockSizeSm</code>
                                <p>The arrow height when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>arrowInlineSizeLg</code>
                                <p>The arrow width when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>arrowBlockSizeLg</code>
                                <p>The arrow height when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>arrowClipPath</code>
                                <p>The shape of arrow.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>arrowTopTransform</code>
                                <p>A <code>transform</code> to apply to the arrow when <code>{`popupPlacement='top'`}</code> or <code>{`popupPlacement='top-start'`}</code> or <code>{`popupPlacement='top-end'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>arrowBottomTransform</code>
                                <p>A <code>transform</code> to apply to the arrow when <code>{`popupPlacement='bottom'`}</code> or <code>{`popupPlacement='bottom-start'`}</code> or <code>{`popupPlacement='bottom-end'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>arrowLeftTransform</code>
                                <p>A <code>transform</code> to apply to the arrow when <code>{`popupPlacement='left'`}</code> or <code>{`popupPlacement='left-start'`}</code> or <code>{`popupPlacement='left-end'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>arrowRightTransform</code>
                                <p>A <code>transform</code> to apply to the arrow when <code>{`popupPlacement='right'`}</code> or <code>{`popupPlacement='right-start'`}</code> or <code>{`popupPlacement='right-end'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Tooltip } from '@nodestrap/tooltip'

export default function ErrorMessage(props) {
    return (
        <Tooltip
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'status'} // override default value of semanticRole to 'status'
            semantictag={props.semanticTag ?? 'span'}     // override default value of semanticTag  to 'span'
            
            theme={props.theme ?? 'danger'} // override default value of theme to 'danger'
            mild={props.mild ?? false}      // override default value of mild  to false
        >
            { props.children ?? 'Something is wrong here' }
        </Tooltip>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesTooltipLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesTooltipVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesTooltipStates()'>
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
import { Tooltip, usesTooltipLayout, usesTooltipVariants, usesTooltipStates } from '@nodestrap/tooltip'


const useErrorMessageSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Tooltip>:
            usesTooltipLayout(),
            usesTooltipVariants(),
            usesTooltipStates(),
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
                    backgroundColor : 'black',
                    color           : 'white',
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

export default function ErrorMessage(props) {
    const sheet = useErrorMessageSheet();
    return (
        <Tooltip {...props} mainClass={sheet.main}>
            { props.children }
        </Tooltip>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
