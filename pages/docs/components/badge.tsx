import React, { useRef } from 'react'

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
import { List, ListItem } from '@nodestrap/list'
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
} from '../../../components/common@Badge'
import {
    SectionPropertyEnabled,
    SectionPropertyActive,
    
    SectionPropertyTargetRef,
    SectionPropertyPopupPlacement,
    
    SectionPropertyLazy,
} from '../../../components/common@Popup'

import loadable from '@loadable/component'
const DemoBadgeLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Badge' */'../../../components/DemoPanel@Badge'))



interface OverlayBadgePreviewProps {
    overlay ?: boolean
}
const OverlayBadgePreview = ({ overlay = true }: OverlayBadgePreviewProps) => {
    const [badgeRef, isActive] = useFlipFlop({ defaultState: true });
    const menuRef = useRef<HTMLElement>(null);
    
    
    
    return (
        <Preview
            elmRef={badgeRef}
            blockDisplay={true}
        >
            <List
                theme='primary'
                size='lg'
                mild={false}
                actionCtrl={true}
                listStyle='joined'
                orientation='inline'
            >
                <ListItem>
                    Gallery
                </ListItem>
                <ListItem>
                    Products
                </ListItem>
                <ListItem elmRef={menuRef}>
                    Cart
                </ListItem>
            </List>
            <Badge
                active={isActive}
                theme='danger'
                
                targetRef={overlay ? menuRef : undefined}
                popupPlacement='right-start'
                popupModifiers={[
                    { name: 'offset', options: { offset: [-10, -35] } }
                ]}
            >
                New
            </Badge>
            <Button theme='secondary' style={{ marginInlineStart: '2rem' }}>
                Logout
            </Button>
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
                theme='danger'
                
                targetRef={contentRef}
                popupPlacement={popupPlacement}
            >
                {`popupPlacement='${popupPlacement}'`}
            </Badge>
        </div>}</SelectPopupPlacement>
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
                    <CurrentComponent /> is a presentation component for dynamically <strong>showing</strong> &amp; <strong>hiding</strong> an <strong>overlaying small notification</strong> on another component.
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
                    <Preview stretch={false}>
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
                    <Preview stretch={false}>
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
                    <TransparentPreview stretch={false}>
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
                    <Preview stretch={false}>
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
                    <TransparentPreview stretch={false}>
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
                    <Preview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <Badge
                                mild={true}
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
    mild={true}
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
                    <Preview stretch={false}>
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
                    <Preview stretch={false}>
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
                    The preview below illustrates the <CurrentComponent /> <strong>shifts</strong> the position of <strong>a logout button</strong>:
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
