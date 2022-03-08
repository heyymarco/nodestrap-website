import React, { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import GenericSection, { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkCollapsePage, LinkPopupPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, LinkContentPage, CurrentDominantBaseComponent } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import { Tips } from '../../../components/Info'

import Label from '@nodestrap/label'
import Collapse, { OrientationName } from '@nodestrap/collapse'
import Button from '@nodestrap/button'
import Basic from '@nodestrap/basic'
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
const DemoCollapseLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Collapse' */'../../../components/DemoPanel@Collapse'))



interface OverlayCollapsePreviewProps {
    overlay ?: boolean
}
const OverlayCollapsePreview = ({ overlay = true }: OverlayCollapsePreviewProps) => {
    const [containerRef, isActiveFlip] = useFlipFlop({ defaultState: true });
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
            <Collapse
                active={isLoaded ? isActiveFlip : true}
                theme='success'
                
                targetRef={overlay ? contentRef : undefined}
                popupPlacement='bottom'
                popupOffset={10}
            >
                <p>
                    Hello everyone!
                </p>
                <p>
                    This is an awesome message!
                </p>
                <p>
                    It supports <strong>any HTML</strong> tags.
                </p>
            </Collapse>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum laborum quos magni accusamus.
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

const CollapsePlacementPreview = () => {
    const contentRef = useRef<HTMLElement>(null);
    
    
    
    return (
        <SelectPopupPlacement>{(popupPlacement) => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Label elmRef={contentRef} theme='primary' size='lg' style={{ width: '50%', height: '50%' }}>
                A content
            </Label>
            <Collapse
                active={true}
                theme='success'
                size='sm'
                
                targetRef={contentRef}
                popupPlacement={popupPlacement}
            >
                {`popupPlacement='${popupPlacement}'`}
            </Collapse>
        </div>}</SelectPopupPlacement>
    )
};

const CollapseOffset = () => {
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
            <Collapse
                active={true}
                theme='success'
                
                targetRef={contentRef}
                popupPlacement='top'
                popupOffset={30}
            >
                hello world!
            </Collapse>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const CollapseShift = () => {
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
            <Collapse
                active={true}
                theme='success'
                
                targetRef={contentRef}
                popupPlacement='top'
                popupShift={100}
            >
                hello world!
            </Collapse>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const CollapseAutoFlip = () => {
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
            <Collapse
                active={true}
                theme='success'
                
                targetRef={contentRef}
                popupPlacement='top'
                popupAutoFlip={true}
            >
                hello world!
            </Collapse>
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
const CollapseAutoShift = () => {
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
            <Collapse
                active={true}
                theme='success'
                
                targetRef={contentRef}
                popupPlacement='right'
                popupAutoShift={true}
            >
                hello<br />
                world<br />
                <br />
                hello<br />
                everyone<br />
            </Collapse>
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

interface CollapseOrientationProps {
    orientation : OrientationName
}
const CollapseOrientation = ({ orientation }: CollapseOrientationProps) => {
    const [containerRef, isActiveFlip] = useFlipFlop({ defaultState: true });
    
    
    
    return (
        <Preview
            elmRef={containerRef}
            blockDisplay={true}
            preventShift={true}
        >{(isLoaded) => <>
            <Collapse
                orientation={orientation}
                active={isLoaded ? isActiveFlip : true}
                theme='success'
            >
                <p style={{ whiteSpace: 'nowrap' }}>
                    Hello everyone!
                </p>
                <p style={{ whiteSpace: 'nowrap' }}>
                    This is an awesome message!
                </p>
                <p style={{ whiteSpace: 'nowrap' }}>
                    It supports <strong>any HTML</strong> tags.
                </p>
            </Collapse>
        </>}</Preview>
    )
};



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/collapse' component={<LinkCollapsePage />} bases={<LinkPopupPage />}>
            <Head>
                <title>&lt;Collapse&gt; Component</title>
                <meta name="description" content="Using <Collapse> component" />
            </Head>

            <SectionIntro>
                <p>
                    Dynamically <strong>shows</strong> and <strong>hides</strong> a content by sliding animation either vertically or horizontally, depending on the orientation.
                </p>
                <p>
                    Similar to <CurrentBaseComponents /> but <em>aware</em> of its orientation for the sliding direction.
                </p>
                <p>
                    Here the preview:
                </p>
                <OverlayCollapsePreview />
            </SectionIntro>
            <SectionDemo>
                <DemoCollapseLazy fallback={<BusyBar />} />
            </SectionDemo>
            <Section title={<>Overlaying <CurrentComponent /></>}>
                <p>
                    By default the <CurrentComponent /> flows as a normal document element, thus
                    during <em>showing</em>/<em>hiding</em> transition, the <CurrentComponent /> <strong>shifts</strong> the position of <em>next siblings</em>.
                </p>
                <p>
                    The preview below illustrates the <CurrentComponent /> <strong>shifts</strong> the position of the <strong>paragraphs</strong>:
                </p>
                <OverlayCollapsePreview overlay={false} />
                <p>
                    To workaround for the shifting problem, <CurrentComponent /> can be configured as an <em>overlaying element</em>, like this:
                </p>
                <OverlayCollapsePreview />
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
                    <CollapsePlacementPreview />
                </SectionPropertyPopupPlacement>
                <SectionPropertyPopupOffset>
                    <CollapseOffset />
                </SectionPropertyPopupOffset>
                <SectionPropertyPopupShift>
                    <CollapseShift />
                </SectionPropertyPopupShift>
                <SectionPropertyPopupAutoFlip>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on <code>{`'top'`}</code>,
                            but if you scroll down the <strong>container below</strong>, the <code>popupPlacement</code> will change to <code>{`'bottom'`}</code>.
                        </p>
                    </Tips>
                    <p></p>
                    <CollapseAutoFlip />
                </SectionPropertyPopupAutoFlip>
                <SectionPropertyPopupAutoShift>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on exact <code>{`'right'`}</code>,
                            but if you scroll up/down the <strong>container below</strong>, the <code>popupPlacement</code> will shift slightly from its original position.
                        </p>
                    </Tips>
                    <p></p>
                    <CollapseAutoShift />
                </SectionPropertyPopupAutoShift>
            </Section>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Collapse
                                theme={themeName}
                                active={true}
                                key={index}
                            >
                                <p>
                                    A <CurrentComponent/> with {themeName} theme.
                                </p>
                            </Collapse>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Collapse
    theme='${themeName}'
    active={true}
>
    <p>
        A <code>{'<Collapse>'}</code> with ${themeName} theme.
    </p>
</Collapse>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <Collapse
                            size='sm'
                            active={true}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with smaller size.
                            </p>
                        </Collapse>
                        <Collapse
                            size={undefined}
                            active={true}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with default size.
                            </p>
                        </Collapse>
                        <Collapse
                            size='lg'
                            active={true}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with larger size.
                            </p>
                        </Collapse>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Collapse
    size='sm'
    active={true}
    theme='primary'
>
    <p>
        A <code>{'<Collapse>'}</code> with smaller size.
    </p>
</Collapse>

<Collapse
    size={undefined}
    active={true}
    theme='primary'
>
    <p>
        A <code>{'<Collapse>'}</code> with default size.
    </p>
</Collapse>

<Collapse
    size='lg'
    active={true}
    theme='primary'
>
    <p>
        A <code>{'<Collapse>'}</code> with larger size.
    </p>
</Collapse>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <Collapse
                            nude={true}
                            active={true}
                            theme='primary'
                        >
                            <p>
                                A nude <CurrentComponent /> 😋
                            </p>
                        </Collapse>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Collapse
    nude={true}
    active={true}
    theme='primary'
>
    <p>
        A nude <code>{'<Collapse>'}</code> 😋
    </p>
</Collapse>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Collapse
                                gradient={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                <p>
                                    Hello world!
                                </p>
                            </Collapse>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Collapse
    gradient={true}
    active={true}
    theme='${themeName}'
>
    <p>
        Hello world!
    </p>
</Collapse>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        {themeNames.map((themeName, index) =>
                            <Collapse
                                outlined={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                <p>
                                    Hello world!
                                </p>
                            </Collapse>
                        )}
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Collapse
    outlined={true}
    active={true}
    theme='${themeName}'
>
    <p>
        Hello world!
    </p>
</Collapse>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Collapse
                                mild={false}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                <p>
                                    Hello world!
                                </p>
                            </Collapse>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Collapse
    mild={false}
    active={true}
    theme='${themeName}'
>
    <p>
        Hello world!
    </p>
</Collapse>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyOrientation>
                    <SectionPropertyOrientationBlock>
                        <CollapseOrientation orientation='block' />
                        <p></p>
                        <TypeScriptCode>{`
<Collapse
    orientation='block'
    active={true}
    theme='primary'
>
    <p style={{ whiteSpace: 'nowrap' }}>
        Hello everyone!
    </p>
    <p style={{ whiteSpace: 'nowrap' }}>
        This is an awesome message!
    </p>
    <p style={{ whiteSpace: 'nowrap' }}>
        It supports <strong>any HTML</strong> tags.
    </p>
</Collapse>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationBlock>
                    <SectionPropertyOrientationInline overflowWarning={false}>
                        <CollapseOrientation orientation='inline' />
                        <p></p>
                        <TypeScriptCode>{`
<Collapse
    orientation='inline'
    active={true}
    theme='primary'
>
    <p style={{ whiteSpace: 'nowrap' }}>
        Hello everyone!
    </p>
    <p style={{ whiteSpace: 'nowrap' }}>
        This is an awesome message!
    </p>
    <p style={{ whiteSpace: 'nowrap' }}>
        It supports <strong>any HTML</strong> tags.
    </p>
</Collapse>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationInline>
                </SectionPropertyOrientation>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview>
                        <Collapse
                            active={true}
                            theme='primary'
                        >
                            <p>
                                Hello world!
                            </p>
                        </Collapse>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Collapse
    active={true}
    theme='primary'
>
    <p>
        Hello world!
    </p>
</Collapse>
                    `}</TypeScriptCode>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview>
                        <Collapse
                            enabled={false}
                            active={true}
                            theme='primary'
                        >
                            <p>
                                Hello world!
                            </p>
                        </Collapse>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Collapse
    enabled={false}
    active={true}
    theme='primary'
>
    <p>
        Hello world!
    </p>
</Collapse>
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
import { Collapse } from '@nodestrap/collapse'

export default function PopupLoginForm(props) {
    return (
        <Collapse
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'form'} // override default value of semanticRole to 'form'
            semantictag={props.semanticTag ?? 'form'}   // override default value of semanticTag  to 'form'
            
            theme={props.theme ?? 'primary'} // override default value of theme to 'primary'
            mild={props.mild ?? false}       // override default value of mild  to false
        >
            { props.children }
        </Collapse>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesCollapseLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesCollapseVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code>, <code>OrientationVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesCollapseStates()'>
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
import { Collapse, usesCollapseLayout, usesCollapseVariants, usesCollapseStates } from '@nodestrap/collapse'


const usePopupLoginFormSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Collapse>:
            usesCollapseLayout(),
            usesCollapseVariants(),
            usesCollapseStates(),
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
        <Collapse {...props} mainClass={sheet.main}>
            { props.children }
        </Collapse>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
