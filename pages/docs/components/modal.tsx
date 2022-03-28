import React, { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { Section } from '../../../components/Section'
import { SectionInheritedProps, LinkModalPage, LinkPopupPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionVariables, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, ParagraphLorem } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import { Tips } from '../../../components/Info'

import Label from '@nodestrap/label'
import { Modal as ModalOri, ModalProps } from '@nodestrap/modal'
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
import Button from '@nodestrap/button'
const DemoModalLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Modal' */'../../../components/DemoPanel@Modal'))



const Modal = (props: ModalProps) => {
    const viewportRef = useRef(null);
    
    return (<div ref={viewportRef} style={{ position: 'relative', padding: '1rem' }} className='media'>
        <ModalOri
            {...props}
            theme={props.theme ?? 'primary'}
            viewportRef={viewportRef}
        >
            <div style={{ background: 'white', padding: '1rem' }}>
                {
                    props.children
                    ??
                    <>
                        <p>
                            Hello everyone!
                        </p>
                        <p>
                            This is an awesome message!
                        </p>
                    </>
                }
            </div>
        </ModalOri>
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
    </div>);
}



const ModalPreview = () => {
    const [containerRef, isActiveFlip] = useFlipFlop({ defaultState: true });
    
    
    
    return (
        <Preview
            elmRef={containerRef}
            blockDisplay={true}
        >{(isLoaded) => <>
            <Modal
                active={isLoaded ? isActiveFlip : true}
                theme='primary'
            />
        </>}</Preview>
    )
};



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/modal' component={<LinkModalPage />} bases={<LinkPopupPage />}>
            <Head>
                <title>&lt;Modal&gt; Component</title>
                <meta name="description" content="Using <Modal> component" />
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
                <ModalPreview />
            </SectionIntro>
            <SectionDemo>
                <DemoModalLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Modal
                                theme={themeName}
                                active={true}
                                key={index}
                            >
                                <p>
                                    A <CurrentComponent/> with {themeName} theme.
                                </p>
                            </Modal>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Modal
    theme='${themeName}'
    active={true}
>
    <p>
        A <code>{'<Modal>'}</code> with ${themeName} theme.
    </p>
</Modal>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <Modal
                            size='sm'
                            active={true}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with smaller size.
                            </p>
                        </Modal>
                        <Modal
                            size={undefined}
                            active={true}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with default size.
                            </p>
                        </Modal>
                        <Modal
                            size='lg'
                            active={true}
                            theme='primary'
                        >
                            <p>
                                A <CurrentComponent/> with larger size.
                            </p>
                        </Modal>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Modal
    size='sm'
    active={true}
    theme='primary'
>
    <p>
        A <code>{'<Modal>'}</code> with smaller size.
    </p>
</Modal>

<Modal
    size={undefined}
    active={true}
    theme='primary'
>
    <p>
        A <code>{'<Modal>'}</code> with default size.
    </p>
</Modal>

<Modal
    size='lg'
    active={true}
    theme='primary'
>
    <p>
        A <code>{'<Modal>'}</code> with larger size.
    </p>
</Modal>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <Modal
                            nude={true}
                            active={true}
                            theme='primary'
                        >
                            <p>
                                A nude <CurrentComponent /> 😋
                            </p>
                        </Modal>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Modal
    nude={true}
    active={true}
    theme='primary'
>
    <p>
        A nude <code>{'<Modal>'}</code> 😋
    </p>
</Modal>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Modal
                                gradient={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                <p>
                                    Hello world!
                                </p>
                            </Modal>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Modal
    gradient={true}
    active={true}
    theme='${themeName}'
>
    <p>
        Hello world!
    </p>
</Modal>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        {themeNames.map((themeName, index) =>
                            <Modal
                                outlined={true}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                <p>
                                    Hello world!
                                </p>
                            </Modal>
                        )}
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Modal
    outlined={true}
    active={true}
    theme='${themeName}'
>
    <p>
        Hello world!
    </p>
</Modal>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Modal
                                mild={false}
                                active={true}
                                theme={themeName}
                                key={index}
                            >
                                <p>
                                    Hello world!
                                </p>
                            </Modal>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Modal
    mild={false}
    active={true}
    theme='${themeName}'
>
    <p>
        Hello world!
    </p>
</Modal>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview>
                        <Modal
                            active={true}
                            theme='primary'
                        >
                            <p>
                                Hello world!
                            </p>
                        </Modal>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Modal
    active={true}
    theme='primary'
>
    <p>
        Hello world!
    </p>
</Modal>
                    `}</TypeScriptCode>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview>
                        <Modal
                            enabled={false}
                            active={true}
                            theme='primary'
                        >
                            <p>
                                Hello world!
                            </p>
                        </Modal>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Modal
    enabled={false}
    active={true}
    theme='primary'
>
    <p>
        Hello world!
    </p>
</Modal>
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
import { Modal } from '@nodestrap/modal'

export default function PopupLoginForm(props) {
    return (
        <Modal
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'form'} // override default value of semanticRole to 'form'
            semantictag={props.semanticTag ?? 'form'}   // override default value of semanticTag  to 'form'
            
            theme={props.theme ?? 'primary'} // override default value of theme to 'primary'
            mild={props.mild ?? false}       // override default value of mild  to false
        >
            { props.children }
        </Modal>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesModalLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesModalVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code>, <code>OrientationVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesModalStates()'>
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
import { Modal, usesModalLayout, usesModalVariants, usesModalStates } from '@nodestrap/modal'


const usePopupLoginFormSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Modal>:
            usesModalLayout(),
            usesModalVariants(),
            usesModalStates(),
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
        <Modal {...props} mainClass={sheet.main}>
            { props.children }
        </Modal>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
