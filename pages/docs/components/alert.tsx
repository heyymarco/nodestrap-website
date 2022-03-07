import React, { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import GenericSection, { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkAlertPage, LinkPopupPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, LinkContentPage, CurrentDominantBaseComponent } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import { Tips } from '../../../components/Info'

import Label from '@nodestrap/label'
import Alert, { AlertProps } from '@nodestrap/alert'
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
import {
    SectionPropertyOnActiveChange,
} from '../../../components/common@Alert'

import loadable from '@loadable/component'
const DemoAlertLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Alert' */'../../../components/DemoPanel@Alert'))



interface OverlayAlertPreviewProps {
    overlay ?: boolean
}
const OverlayAlertPreview = ({ overlay = true }: OverlayAlertPreviewProps) => {
    const [containerRef, isActiveFlip] = useFlipFlop({ defaultState: true });
    const paraRef = useRef<HTMLParagraphElement>(null);
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
            <Basic elmRef={paraRef} theme='secondary' mild={true} style={{ textAlign: 'center' }}>
                A content
            </Basic>
            <Alert
                active={isActive}
                theme='success'
                
                targetRef={overlay ? paraRef : undefined}
                popupPlacement='bottom'
                popupOffset={10}
            >
                <p>
                    Hello everyone!
                </p>
                <p>
                    This is awesome message! It support <strong>any HTML</strong> tags.
                </p>
            </Alert>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum laborum quos magni accusamus.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cum nulla, tenetur nisi dolorem fuga ad dicta nobis, itaque, esse repellat. Sint commodi eum quos assumenda. Voluptatem quos facere officiis.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cum nulla, tenetur nisi dolorem fuga ad dicta nobis, itaque, esse repellat. Sint commodi eum quos assumenda. Voluptatem quos facere officiis.
            </p>
        </Preview>
    )
};

const AlertPlacementPreview = () => {
    const contentRef = useRef<HTMLElement>(null);
    
    
    
    return (
        <SelectPopupPlacement>{(popupPlacement) => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Label elmRef={contentRef} theme='primary' size='lg' style={{ width: '50%', height: '50%' }}>
                A content
            </Label>
            <Alert
                active={true}
                theme='success'
                size='sm'
                icon={null}
                control={null}
                
                targetRef={contentRef}
                popupPlacement={popupPlacement}
            >
                {`popupPlacement='${popupPlacement}'`}
            </Alert>
        </div>}</SelectPopupPlacement>
    )
};

const AlertOffset = () => {
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
            <Alert
                active={true}
                theme='success'
                
                targetRef={contentRef}
                popupPlacement='top'
                popupOffset={30}
            >
                hello world!
            </Alert>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const AlertShift = () => {
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
            <Alert
                active={true}
                theme='success'
                
                targetRef={contentRef}
                popupPlacement='top'
                popupShift={100}
            >
                hello world!
            </Alert>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </Preview>
    )
};
const AlertAutoFlip = () => {
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
            <Alert
                active={true}
                theme='success'
                
                targetRef={contentRef}
                popupPlacement='top'
                popupAutoFlip={true}
            >
                hello world!
            </Alert>
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
const AlertAutoShift = () => {
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
            <Alert
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
            </Alert>
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

const AlertWithOnActiveChange = () => {
    const [alertActive, setAlertActive] = useState(true);
    
    // re-show the <Alert> after 3 seconds:
    useEffect(() => {
        // conditions:
        if (alertActive) return;
        
        // setups:
        const timerHandler = setTimeout(() => setAlertActive(true), 3000);
        
        // cleanups:
        return () => {
            clearTimeout(timerHandler);
        };
    }, [alertActive]);
    
    return (
        <Alert
            active={alertActive}
            onActiveChange={() => setAlertActive(false)}
            theme='primary'
        >
            <p>
                Hello world!
            </p>
            <p>
                Click the close button [x] to dismiss this message.
            </p>
        </Alert>
    );
}



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/alert' component={<LinkAlertPage />} bases={[<LinkPopupPage key={0} />, <LinkContentPage key={1} />]}>
            <Head>
                <title>&lt;Alert&gt; Component</title>
                <meta name="description" content="Using <Alert> component" />
            </Head>

            <SectionIntro>
                <p>
                    Displays a feedback message to the site&apos;s user.
                </p>
                <p>
                    Here the preview:
                </p>
                <OverlayAlertPreview />
            </SectionIntro>
            <SectionDemo>
                <DemoAlertLazy fallback={<BusyBar />} />
            </SectionDemo>
            <Section title={<>Overlaying <CurrentComponent /></>}>
                <p>
                    By default the <CurrentComponent /> flows as a normal document element, thus
                    during <em>showing</em>/<em>hiding</em> transition, the <CurrentComponent /> <strong>shifts</strong> the position of <em>next siblings</em>.
                </p>
                <p>
                    The preview below illustrates the <CurrentComponent /> <strong>shifts</strong> the position of the <strong>paragraphs</strong>:
                </p>
                <OverlayAlertPreview overlay={false} />
                <p>
                    To workaround for the shifting problem, <CurrentComponent /> can be configured as an <em>overlaying element</em>, like this:
                </p>
                <OverlayAlertPreview />
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
                    <AlertPlacementPreview />
                </SectionPropertyPopupPlacement>
                <SectionPropertyPopupOffset>
                    <AlertOffset />
                </SectionPropertyPopupOffset>
                <SectionPropertyPopupShift>
                    <AlertShift />
                </SectionPropertyPopupShift>
                <SectionPropertyPopupAutoFlip>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on <code>{`'top'`}</code>,
                            but if you scroll down the <strong>container below</strong>, the <code>popupPlacement</code> will change to <code>{`'bottom'`}</code>.
                        </p>
                    </Tips>
                    <p></p>
                    <AlertAutoFlip />
                </SectionPropertyPopupAutoFlip>
                <SectionPropertyPopupAutoShift>
                    <Tips>
                        <p>
                            The <code>popupPlacement</code> is on exact <code>{`'right'`}</code>,
                            but if you scroll up/down the <strong>container below</strong>, the <code>popupPlacement</code> will shift slightly from its original position.
                        </p>
                    </Tips>
                    <p></p>
                    <AlertAutoShift />
                </SectionPropertyPopupAutoShift>
            </Section>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <Alert
                                theme={themeName}
                                active={true}
                                key={index}
                            >
                                <p>
                                    An <CurrentComponent/> with {themeName} theme.
                                </p>
                            </Alert>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Alert
    theme='${themeName}'
    active={true}
>
    <p>
        An <code>{'<Alert>'}</code> with ${themeName} theme.
    </p>
</Alert>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview stretch={false}>
                        <Alert
                            size='sm'
                            active={true}
                            theme='primary'
                        >
                            <p>
                                An <CurrentComponent/> with smaller size.
                            </p>
                        </Alert>
                        <Alert
                            size={undefined}
                            active={true}
                            theme='primary'
                        >
                            <p>
                                An <CurrentComponent/> with default size.
                            </p>
                        </Alert>
                        <Alert
                            size='lg'
                            active={true}
                            theme='primary'
                        >
                            <p>
                                An <CurrentComponent/> with larger size.
                            </p>
                        </Alert>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Alert
    size='sm'
    active={true}
    theme='primary'
>
    <p>
        An <code>{'<Alert>'}</code> with smaller size.
    </p>
</Alert>

<Alert
    size={undefined}
    active={true}
    theme='primary'
>
    <p>
        An <code>{'<Alert>'}</code> with default size.
    </p>
</Alert>

<Alert
    size='lg'
    active={true}
    theme='primary'
>
    <p>
        An <code>{'<Alert>'}</code> with larger size.
    </p>
</Alert>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview stretch={false}>
                        <Alert
                            nude={true}
                            active={true}
                            theme='primary'
                        >
                            <p>
                                A nude <CurrentComponent /> 😋
                            </p>
                        </Alert>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Alert
    nude={true}
    active={true}
    theme='primary'
>
    <p>
        A nude <code>{'<Alert>'}</code> 😋
    </p>
</Alert>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <Alert
                                gradient={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                <p>
                                    Hello world!
                                </p>
                            </Alert>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Alert
    gradient={true}
    active={true}
    theme='${themeName}'
>
    <p>
        Hello world!
    </p>
</Alert>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <Alert
                                outlined={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                <p>
                                    Hello world!
                                </p>
                            </Alert>
                        )}
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Alert
    outlined={true}
    active={true}
    theme='${themeName}'
>
    <p>
        Hello world!
    </p>
</Alert>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <Alert
                                mild={false}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                <p>
                                    Hello world!
                                </p>
                            </Alert>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Alert
    mild={false}
    active={true}
    theme='${themeName}'
>
    <p>
        Hello world!
    </p>
</Alert>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview stretch={false}>
                        <Alert
                            active={true}
                            theme='primary'
                        >
                            <p>
                                Hello world!
                            </p>
                        </Alert>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Alert
    active={true}
    theme='primary'
>
    <p>
        Hello world!
    </p>
</Alert>
                    `}</TypeScriptCode>
                    <SectionPropertyOnActiveChange>
                        <Preview stretch={false}>
                            <AlertWithOnActiveChange />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
export default function App() {
    const [alertActive, setAlertActive] = useState(true);
    
    // re-show the <Alert> after 3 seconds:
    useEffect(() => {
        // conditions:
        if (alertActive) return;
        
        // setups:
        const timerHandler = setTimeout(() => setAlertActive(true), 3000);
        
        // cleanups:
        return () => {
            clearTimeout(timerHandler);
        };
    }, [alertActive]);    
    
    return (
        <Alert
            active={alertActive}
            onActiveChange={() => setAlertActive(false)}
            theme='primary'
        >
            <p>
                Hello world!
            </p>
            <p>
                Click the close button [x] to dismiss this message.
            </p>
        </Alert>
    );
}
                        `}</TypeScriptCode>
                    </SectionPropertyOnActiveChange>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview stretch={false}>
                        <Alert
                            enabled={false}
                            active={true}
                            theme='primary'
                        >
                            <p>
                                Hello world!
                            </p>
                        </Alert>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Alert
    enabled={false}
    active={true}
    theme='primary'
>
    <p>
        Hello world!
    </p>
</Alert>
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
                                <p>The default horizontal spacing between <CurrentComponent />&apos;s items.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingBlock</code>
                                <p>The default vertical spacing between <CurrentComponent />&apos;s items.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Alert } from '@nodestrap/alert'

export default function ErrorMessage(props) {
    return (
        <Alert
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'status'} // override default value of semanticRole to 'status'
            semantictag={props.semanticTag ?? 'span'}     // override default value of semanticTag  to 'span'
            
            theme={props.theme ?? 'danger'} // override default value of theme to 'danger'
            mild={props.mild ?? true}       // override default value of mild  to true
        >
            { props.children ?? 'error' }
        </Alert>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesAlertLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesAlertVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesAlertStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentComponent />.
                            </p>
                            <p>
                                Currently the states are equivalent to <CurrentDominantBaseComponent />&apos;s states.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, states, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { isActive } from '@nodestrap/indicator'
import { Alert, usesAlertLayout, usesAlertVariants, usesAlertStates } from '@nodestrap/alert'


const useErrorMessageSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Alert>:
            usesAlertLayout(),
            usesAlertVariants(),
            usesAlertStates(),
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

export default function ErrorMessage(props) {
    const sheet = useErrorMessageSheet();
    return (
        <Alert {...props} mainClass={sheet.main}>
            { props.children }
        </Alert>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
