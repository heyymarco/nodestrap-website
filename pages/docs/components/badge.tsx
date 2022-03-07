import React, { useEffect, useRef } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import GenericSection, { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkBadgePage, LinkPopupPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import { Tips } from '../../../components/Info'

import Label from '@nodestrap/label'
import Badge, { BadgeProps } from '@nodestrap/badge'
import Button from '@nodestrap/button'
import breakpoints from '@nodestrap/breakpoints'
import { useWindowSize } from '@nodestrap/dimensions'
import { List, ListItem } from '@nodestrap/list'
import SelectPopupPlacement from '../../../components/SelectPopupPlacement';
import {
    themeNames,
    SectionPropertyTheme,
    SectionPropertyNude,
    SectionPropertyGradient,
    SectionPropertyOutlined,
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

import loadable from '@loadable/component'
const DemoBadgeLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Badge' */'../../../components/DemoPanel@Badge'))



interface OverlayBadgePreviewProps {
    overlay ?: boolean
}
const OverlayBadgePreview = ({ overlay = true }: OverlayBadgePreviewProps) => {
    const [containerRef, isActiveFlip] = useFlipFlop({ defaultState: true });
    const menuRef = useRef<HTMLElement>(null);
    
    
    
    const { width: mediaWidth } = useWindowSize();
    const isListMini = (
        !!mediaWidth
        &&
        !!breakpoints.sm
        &&
        (mediaWidth <= breakpoints.sm)
    );
    
    
    
    return (
        <Preview
            elmRef={containerRef}
            blockDisplay={true}
            preventShift={!overlay}
        >{(isLoaded) => <>
            <List
                theme='primary'
                mild={false}
                actionCtrl={true}
                listStyle='joined'
                orientation={isListMini ? 'block' : 'inline'}
                style={{ textAlign: 'center' }}
            >
                <ListItem>
                    Home
                </ListItem>
                <ListItem>
                    Gallery
                </ListItem>
                <ListItem elmRef={menuRef}>
                    Products
                </ListItem>
            </List>
            <Badge
                active={isLoaded ? isActiveFlip : true}
                theme='danger'
                
                targetRef={overlay ? menuRef : undefined}
                popupPlacement={isListMini ? 'right' : 'right-start'}
                popupOffset={-35}
                popupShift={-10}
            >
                New
            </Badge>
            <Button tag='div' theme='secondary' style={{ [`margin${isListMini ? 'Block' : 'Inline'}Start`]: '2rem', display: (isListMini ? 'flex' : undefined) }}>
                Logout
            </Button>
        </>}</Preview>
    )
};

const BadgePlacementPreview = () => {
    const contentRef = useRef<HTMLElement>(null);
    
    
    
    return (
        <SelectPopupPlacement>{(popupPlacement) => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Label elmRef={contentRef} theme='primary' size='lg' style={{ width: '50%', height: '50%' }}>
                A content
            </Label>
            <Badge
                active={true}
                theme='danger'
                
                targetRef={contentRef}
                popupPlacement={popupPlacement}
            >
                {`popupPlacement='${popupPlacement}'`}
            </Badge>
        </div>}</SelectPopupPlacement>
    )
};

const BadgeOnButton = (props: BadgeProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    
    
    return (
        <>
            <Button
                elmRef={buttonRef}
                theme='primary'
            >
                Products
                <Badge
                    {...props}
                    
                    targetRef={buttonRef}
                    popupPlacement='right-start'
                    popupOffset={props.popupOffset ?? -25}
                    popupShift={props.popupShift ?? -10}
                />
            </Button>
        </>
    );
};

const BadgeOffset = () => {
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
            <Badge
                active={true}
                theme='danger'
                
                targetRef={contentRef}
                popupPlacement='top'
                popupOffset={30}
            >
                hello world!
            </Badge>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const BadgeShift = () => {
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
            <Badge
                active={true}
                theme='danger'
                
                targetRef={contentRef}
                popupPlacement='top'
                popupShift={100}
            >
                hello world!
            </Badge>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const BadgeAutoFlip = () => {
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
            <Badge
                active={true}
                theme='danger'
                
                targetRef={contentRef}
                popupPlacement='top'
                popupAutoFlip={true}
            >
                hello world!
            </Badge>
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
const BadgeAutoShift = () => {
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
            <Badge
                active={true}
                theme='danger'
                
                targetRef={contentRef}
                popupPlacement='right'
                popupAutoShift={true}
            >
                hello<br />
                world<br />
                <br />
                hello<br />
                everyone<br />
            </Badge>
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
        <ComponentInfoProvider packageName='@nodestrap/badge' component={<LinkBadgePage />} bases={<LinkPopupPage />}>
            <Head>
                <title>&lt;Badge&gt; Component</title>
                <meta name="description" content="Using <Badge> component" />
            </Head>

            <SectionIntro>
                <p>
                    Marks the desired component with a small label.
                </p>
                <p>
                    Here the preview:
                </p>
                <OverlayBadgePreview />
            </SectionIntro>
            <SectionDemo>
                <DemoBadgeLazy fallback={<BusyBar />} />
            </SectionDemo>
            <Section title={<>Overlaying <CurrentComponent /></>}>
                <p>
                    By default the <CurrentComponent /> flows as a normal document element, thus
                    during <em>showing</em>/<em>hiding</em> transition, the <CurrentComponent /> <strong>shifts</strong> the position of <em>next siblings</em>.
                </p>
                <p>
                    The preview below illustrates the <CurrentComponent /> <strong>shifts</strong> the position of a <strong>logout button</strong>:
                </p>
                <OverlayBadgePreview overlay={false} />
                <p>
                    To workaround for the shifting problem, <CurrentComponent /> can be configured as an <em>overlaying element</em>, like this:
                </p>
                <OverlayBadgePreview />
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
                    <BadgePlacementPreview />
                </SectionPropertyPopupPlacement>
                <SectionPropertyPopupOffset>
                    <BadgeOffset />
                </SectionPropertyPopupOffset>
                <SectionPropertyPopupShift>
                    <BadgeShift />
                </SectionPropertyPopupShift>
                <SectionPropertyPopupAutoFlip>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on <code>{`'top'`}</code>,
                            but if you scroll down the <strong>container below</strong>, the <code>popupPlacement</code> will change to <code>{`'bottom'`}</code>.
                        </p>
                    </Tips>
                    <p></p>
                    <BadgeAutoFlip />
                </SectionPropertyPopupAutoFlip>
                <SectionPropertyPopupAutoShift>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on exact <code>{`'right'`}</code>,
                            but if you scroll up/down the <strong>container below</strong>, the <code>popupPlacement</code> will shift slightly from its original position.
                        </p>
                    </Tips>
                    <p></p>
                    <BadgeAutoShift />
                </SectionPropertyPopupAutoShift>
            </Section>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <BadgeOnButton
                                theme={themeName}
                                active={true}
                                key={index}
                            >
                                {themeName}
                            </BadgeOnButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Badge
    theme='${themeName}'
    active={true}
>
    ${themeName}
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview stretch={false}>
                        <BadgeOnButton
                            size='sm'
                            active={true}
                            theme='danger'
                        >
                            smaller
                        </BadgeOnButton>
                        <BadgeOnButton
                            size={undefined}
                            active={true}
                            theme='danger'
                        >
                            default
                        </BadgeOnButton>
                        <BadgeOnButton
                            size='lg'
                            active={true}
                            theme='danger'
                        >
                            larger
                        </BadgeOnButton>
                        <GenericSection theme='secondary'>
                            <h1>H1 heading <Badge active={true} theme='danger'>New</Badge></h1><span></span>
                            <h2>H2 heading <Badge active={true} theme='danger'>New</Badge></h2><span></span>
                            <h3>H3 heading <Badge active={true} theme='danger'>New</Badge></h3><span></span>
                            <h4>H4 heading <Badge active={true} theme='danger'>New</Badge></h4><span></span>
                            <h5>H5 heading <Badge active={true} theme='danger'>New</Badge></h5><span></span>
                            <h6>H6 heading <Badge active={true} theme='danger'>New</Badge></h6><span></span>
                        </GenericSection>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
const buttonRef = useRef(null);
/* ... */

<Button
    elmRef={buttonRef}
    theme='primary'
>
    <Badge
        targetRef={buttonRef}
        size='sm'
        active={true}
        theme='danger'
    >
        smaller
    </Badge>
</Button>

<Button
    elmRef={buttonRef}
    theme='primary'
>
    <Badge
        targetRef={buttonRef}
        size={undefined}
        active={true}
        theme='danger'
    >
        default
    </Badge>
</Button>

<Button
    elmRef={buttonRef}
    theme='primary'
>
    <Badge
        targetRef={buttonRef}
        size='lg'
        active={true}
        theme='danger'
    >
        larger
    </Badge>
</Button>

<h1>H1 heading <Badge active={true} theme='danger'>New</Badge></h1>
<h2>H2 heading <Badge active={true} theme='danger'>New</Badge></h2>
<h3>H3 heading <Badge active={true} theme='danger'>New</Badge></h3>
<h4>H4 heading <Badge active={true} theme='danger'>New</Badge></h4>
<h5>H5 heading <Badge active={true} theme='danger'>New</Badge></h5>
<h6>H6 heading <Badge active={true} theme='danger'>New</Badge></h6>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview stretch={false}>
                        <BadgeOnButton
                            nude={true}
                            active={true}
                            theme='warning'
                            popupOffset={5}
                            popupShift={-10}
                        >
                            New
                        </BadgeOnButton>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Badge
    nude={true}
    active={true}
    theme='warning'
>
    New
</Badge>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <BadgeOnButton
                                gradient={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                New
                            </BadgeOnButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Badge
    gradient={true}
    active={true}
    theme='${themeName}'
>
    New
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <BadgeOnButton
                                outlined={true}
                                active={true}
                                theme={themeName}
                                key={index}
                                popupOffset={5}
                                popupShift={-10}
                            >
                                New
                            </BadgeOnButton>
                        )}
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Badge
    outlined={true}
    active={true}
    theme='${themeName}'
>
    New
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <BadgeOnButton
                                mild={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                New
                            </BadgeOnButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Badge
    mild={true}
    active={true}
    theme='${themeName}'
>
    New
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyBadgeStyle>
                    <SectionPropertyPillStyle>
                        <Preview stretch={false}>
                            {themeNames.map((themeName, index) =>
                                <BadgeOnButton
                                    badgeStyle='pill'
                                    active={true}
                                    theme={themeName}
                                    key={index}
                                >
                                    New
                                </BadgeOnButton>
                            )}
                        </Preview>
                        <p></p>
                        <TypeScriptCode>
                            {themeNames.map((themeName) =>
`
<Badge
    badgeStyle='pill'
    active={true}
    theme='${themeName}'
>
    New
</Badge>
`
                            ).join('')}
                        </TypeScriptCode>
                    </SectionPropertyPillStyle>
                    <SectionPropertySquareStyle>
                        <Preview stretch={false}>
                            {themeNames.map((themeName, index) =>
                                <BadgeOnButton
                                    badgeStyle='square'
                                    active={true}
                                    theme={themeName}
                                    key={index}
                                    popupOffset={-15}
                                    popupShift={-10}
                                />
                            )}
                        </Preview>
                        <p></p>
                        <TypeScriptCode>
                            {themeNames.map((themeName) =>
`
<Badge
    badgeStyle='square'
    active={true}
    theme='${themeName}'
/>
`
                            ).join('')}
                        </TypeScriptCode>
                    </SectionPropertySquareStyle>
                    <SectionPropertyCircleStyle>
                        <Preview stretch={false}>
                            {themeNames.map((themeName, index) =>
                                <BadgeOnButton
                                    badgeStyle='circle'
                                    active={true}
                                    theme={themeName}
                                    key={index}
                                    popupOffset={-15}
                                    popupShift={-10}
                                />
                            )}
                        </Preview>
                        <p></p>
                        <TypeScriptCode>
                            {themeNames.map((themeName) =>
`
<Badge
    badgeStyle='circle'
    active={true}
    theme='${themeName}'
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
                        <BadgeOnButton
                            active={true}
                            theme='danger'
                        >
                            New
                        </BadgeOnButton>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Badge
    active={true}
    theme='danger'
>
    New
</Badge>
                    `}</TypeScriptCode>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview stretch={false}>
                        <BadgeOnButton
                            enabled={false}
                            active={true}
                            theme='danger'
                        >
                            New
                        </BadgeOnButton>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Badge
    enabled={false}
    active={true}
    theme='danger'
>
    New
</Badge>
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
import { Badge } from '@nodestrap/badge'

export default function ErrorMark(props) {
    return (
        <Badge
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'status'} // override default value of semanticRole to 'status'
            semantictag={props.semanticTag ?? 'span'}     // override default value of semanticTag  to 'span'
            
            theme={props.theme ?? 'danger'} // override default value of theme to 'danger'
            mild={props.mild ?? false}      // override default value of mild  to false
        >
            { props.children ?? 'error' }
        </Badge>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesBadgeLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesBadgeVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code>, <code>BadgeVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesBadgeStates()'>
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
import { Badge, usesBadgeLayout, usesBadgeVariants, usesBadgeStates } from '@nodestrap/badge'


const useErrorMarkSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Badge>:
            usesBadgeLayout(),
            usesBadgeVariants(),
            usesBadgeStates(),
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
        <Badge {...props} mainClass={sheet.main}>
            { props.children }
        </Badge>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
