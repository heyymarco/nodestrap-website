import React, { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import GenericSection, { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkTooltipPage, LinkPopupPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import { Tips } from '../../../components/Info'

import Label from '@nodestrap/label'
import Tooltip, { TooltipProps } from '@nodestrap/tooltip'
import Button from '@nodestrap/button'
import breakpoints from '@nodestrap/breakpoints'
import { useWindowSize } from '@nodestrap/dimensions'
import { List, ListItem } from '@nodestrap/list'
import SelectPopupPlacement from '../../../components/SelectPopupPlacement';
import {
    themeNames,
    SectionPropertyTheme,
    SectionPropertySize,
    SectionPropertyNude,
    SectionPropertyGradient,
    SectionPropertyOutlined,
    SectionPropertyMild,
} from '../../../components/common@Basic'
import {
    SectionPropertyEnabled,
    
    SectionPropertyTargetRef,
    SectionPropertyPopupPlacement,
    
    SectionPropertyLazy,
} from '../../../components/common@Popup'
import {
    SectionPropertyActive,
} from '../../../components/common@Tooltip'

import loadable from '@loadable/component'
const DemoTooltipLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Tooltip' */'../../../components/DemoPanel@Tooltip'))



interface OverlayTooltipPreviewProps {
    overlay ?: boolean
}
const OverlayTooltipPreview = ({ overlay = true }: OverlayTooltipPreviewProps) => {
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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <Button
                elmRef={buttonRef}
                theme='primary'
            >
                Get discount
            </Button>
            <Tooltip
                active={isActive}
                theme='warning'
                
                targetRef={overlay ? buttonRef : undefined}
            >
                This is <strong>awesome</strong>!
            </Tooltip>
            <Button tag='div' theme='secondary' style={{ [`marginInlineStart`]: '2rem' }}>
                Logout
            </Button>
        </Preview>
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
                    marginBlockStart: '3rem',
                }}
            >
                Products
            </Button>
            <Tooltip
                {...props}
                
                targetRef={buttonRef}
            />
        </>
    );
}



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/tooltip' component={<LinkTooltipPage />} bases={<LinkPopupPage />}>
            <Head>
                <title>&lt;Tooltip&gt; Component</title>
                <meta name="description" content="Using <Tooltip> component" />
            </Head>

            <SectionIntro>
                <p>
                    Marks a desired component with a small label.
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
                    By default the <CurrentComponent /> is flowed as a normal document element, thus
                    during <em>showing</em>/<em>hiding</em> transition, the <CurrentComponent /> <strong>shifts</strong> the position of <em>next siblings</em>.
                </p>
                <p>
                    The preview below illustrates the <CurrentComponent /> <strong>shifts</strong> the position of <strong>a logout button</strong>:
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
                            <strong>Click on the dots</strong> to place the tooltip.
                            There are 12 different placements to choose from.
                        </p>
                    </Tips>
                    <p></p>
                    <TooltipPlacementPreview />
                </SectionPropertyPopupPlacement>
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
                                mild={true}
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
    mild={true}
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
                        <TooltipOnButton
                            active={true}
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
import { Tooltip } from '@nodestrap/tooltip'

export default function ErrorMark(props) {
    return (
        <Tooltip
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'status'} // override default value of semanticRole to 'status'
            semantictag={props.semanticTag ?? 'span'}     // override default value of semanticTag  to 'span'
            
            theme={props.theme ?? 'danger'} // override default value of theme to 'danger'
            mild={props.mild ?? false}      // override default value of mild  to false
        >
            { props.children ?? 'error' }
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
                                <code>SizeVariant</code>, <code>TooltipVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
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


const useErrorMarkSheet = createUseSheet(() => [
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
