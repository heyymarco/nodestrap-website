import React, { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkBadgePage, LinkPopupPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import { Tips } from '../../../components/Info'

import Label from '@nodestrap/label'
import Badge from '@nodestrap/badge'
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
    SectionPropertyPopupModifiers,
    SectionPropertyPopupFlipModifier,
    SectionPropertyPopupPreventOverflowModifier,
    
    SectionPropertyLazy,
} from '../../../components/common@Popup'

import loadable from '@loadable/component'
const DemoBadgeLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Badge' */'../../../components/DemoPanel@Badge'))



interface OverlayBadgePreviewProps {
    overlay ?: boolean
}
const OverlayBadgePreview = ({ overlay = true }: OverlayBadgePreviewProps) => {
    const [badgeRef, isActiveFlip] = useFlipFlop({ defaultState: true });
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isLoaded, setLoaded] = useState<boolean>(false);
    const isActive = isLoaded ? isActiveFlip : true;



    useEffect(() => {
        if (isLoaded) return;
        
        
        
        const container = buttonRef.current?.parentElement;
        if (container) {
            if (!overlay) {
                container.style.boxSizing = 'border-box';
                container.style.height = `${container.offsetHeight + 5}px`;
            } // if
            container.style.overflow = 'hidden';
        } // if
        
        
        
        setLoaded(true);
    }, [isLoaded, overlay]);
    
    
    
    return (
        <Preview
            elmRef={badgeRef}
            blockDisplay={true}
        >
            <Button elmRef={buttonRef} theme='success' size='lg' enabled={!isActive}>Pay now</Button>
            <span> -or- </span>
            <Button theme='secondary' size='lg' outlined={true} enabled={!isActive}>Cancel</Button>
            <Badge
                active={isActive}
                theme='warning'
                
                targetRef={overlay ? buttonRef : undefined}
                popupPlacement='right-start'
                style={overlay ? {
                    position         : 'relative',
                    insetInlineStart : '-3rem',
                    insetBlockEnd    : '1rem',
                } : {}}
            >
                <p>
                    Processing your payment...
                </p>
            </Badge>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
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
                theme='warning'
                
                targetRef={contentRef}
                popupPlacement={popupPlacement}
            >
                <code>
                    {`popupPlacement='${popupPlacement}'`}
                </code>
            </Badge>
        </div>}</SelectPopupPlacement>
    )
};

const BadgePlacementFlip = ({ overlay = true }: OverlayBadgePreviewProps) => {
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
                theme='warning'
                
                targetRef={contentRef}
                popupPlacement='top'
            >
                <p>
                    hello world!
                </p>
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
const BadgePlacementSlide = ({ overlay = true }: OverlayBadgePreviewProps) => {
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
                theme='warning'
                
                targetRef={contentRef}
                popupPlacement='right'
            >
                <p>
                    hello<br />
                    world<br />
                    <br />
                    hello<br />
                    everyone<br />
                </p>
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
                    <CurrentComponent /> is a presentation component for dynamically <strong>showing</strong> &amp; <strong>hiding</strong> a content.
                </p>
                <p>
                    Here the preview:
                </p>
                <OverlayBadgePreview />
            </SectionIntro>
            <SectionDemo>
                <DemoBadgeLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Badge
                                theme={themeName}
                                active={true}
                                key={index}
                            >
                                A {'<Badge>'} with {themeName} theme
                            </Badge>
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
    A {'<Badge>'} with ${themeName} theme
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <Badge
                            size='sm'
                            active={true}
                            theme='primary'
                        >
                            A {'<Badge>'} with smaller size
                        </Badge>
                        <Badge
                            size={undefined}
                            active={true}
                            theme='primary'
                        >
                            A {'<Badge>'} with default size
                        </Badge>
                        <Badge
                            size='lg'
                            active={true}
                            theme='primary'
                        >
                            A {'<Badge>'} with larger size
                        </Badge>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Badge
    size='sm'
    active={true}
    theme='primary'
>
    A {'<Badge>'} with smaller size
</Badge>

<Badge
    size={undefined}
    active={true}
    theme='primary'
>
    A {'<Badge>'} with default size
</Badge>

<Badge
    size='lg'
    active={true}
    theme='primary'
>
    A {'<Badge>'} with larger size
</Badge>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <Badge
                            nude={true}
                            active={true}
                            theme='warning'
                        >
                            hello world
                        </Badge>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Badge
    nude={true}
    active={true}
    theme='warning'
>
    hello world
</Badge>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Badge
                                gradient={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                hello world
                            </Badge>
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
    hello world
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        {themeNames.map((themeName, index) =>
                            <Badge
                                outlined={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                hello world
                            </Badge>
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
    hello world
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Badge
                                mild={false}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                hello world
                            </Badge>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Badge
    mild={false}
    active={true}
    theme='${themeName}'
>
    hello world
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview>
                        <Badge
                            active={true}
                            theme='primary'
                        >
                            hello world
                        </Badge>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Badge
    active={true}
    theme='primary'
>
    hello world
</Badge>
                    `}</TypeScriptCode>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview>
                        <Badge
                            enabled={false}
                            active={true}
                            theme='primary'
                        >
                            hello world
                        </Badge>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Badge
    enabled={false}
    active={true}
    theme='primary'
>
    hello world
</Badge>
                    `}</TypeScriptCode>
                </SectionPropertyEnabled>
            </SectionStates>
            <Section title={<>Overlaying <CurrentComponent /></>}>
                <p>
                    By default the <CurrentComponent /> is flowed as a normal document element, thus
                    during <em>showing</em>/<em>hiding</em> transition, the <CurrentComponent /> <strong>shifts</strong> the position of <em>next siblings</em>.
                </p>
                <p>
                    The preview below illustrates the <CurrentComponent /> <strong>shifts</strong> the position of <strong>a paragraph</strong>:
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
                <SectionPropertyPopupModifiers>
                    <SectionPropertyPopupFlipModifier>
                        <Tips>
                            <p>
                                The <code>popupPlacement</code> is on <code>{`'top'`}</code>,
                                but if you scroll down the <strong>container below</strong>, the <code>popupPlacement</code> will change to <code>{`'bottom'`}</code>.
                            </p>
                        </Tips>
                        <p></p>
                        <BadgePlacementFlip />
                    </SectionPropertyPopupFlipModifier>
                    <SectionPropertyPopupPreventOverflowModifier>
                        <Tips>
                            <p>
                                The <code>popupPlacement</code> is on exact <code>{`'right'`}</code>,
                                but if you scroll up/down the <strong>container below</strong>, the <code>popupPlacement</code> will shift slightly from its original position.
                            </p>
                        </Tips>
                        <p></p>
                        <BadgePlacementSlide />
                    </SectionPropertyPopupPreventOverflowModifier>
                </SectionPropertyPopupModifiers>
            </Section>
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
import { Badge } from '@nodestrap/badge'

export default function SurpriseMessage(props) {
    return (
        <Badge
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'status'} // override default value of semanticRole to 'status'
            semantictag={props.semanticTag ?? 'span'}     // override default value of semanticTag  to 'span'
            
            theme={props.theme ?? 'warning'} // override default value of theme to 'warning'
            mild={props.mild ?? false}       // override default value of mild  to false
        >
            { props.children }
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
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesBadgeStates()'>
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
import { Badge, usesBadgeLayout, usesBadgeVariants, usesBadgeStates } from '@nodestrap/badge'


const useSurpriseMessageSheet = createUseSheet(() => [
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

export default function SurpriseMessage(props) {
    const sheet = useSurpriseMessageSheet();
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
