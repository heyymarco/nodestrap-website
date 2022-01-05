import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { SectionInheritedProps, LinkControlPage, LinkIndicatorPage, ParagraphDefaultValue, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionSubProperty, SectionStates, SectionProperty, SectionIntro, SectionDemo, BusyBar } from '../../../components/common-contents'

import loadable from '@loadable/component'
const DemoControlLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Control' */'../../../components/DemoPanel@Control'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/control' component={<LinkControlPage />} bases={<LinkIndicatorPage />}>
            <Head>
                <title>Control Component</title>
                <meta name="description" content="Using <Control> component" />
            </Head>

            <SectionIntro>
                <p>
                    <LinkControlPage /> is an <strong>abstract</strong> component of <strong>controllable component</strong>. It has some control indicators such as <strong>focus</strong>/<strong>blur</strong> and <strong>arrive</strong>/<strong>leave</strong>.
                </p>
                <p>
                    In <em>most cases</em>, you should <strong>not use </strong>this component <strong>directly</strong>, instead create your own component by derivering <LinkControlPage />.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoControlLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionStates>
                <SectionSubProperty property='focus' specList={
                    <SpecList>
                        <DetailSpecItem code='undefined'>
                            <p>
                                Set to this value will <strong>show</strong> the focus indicator when the control is <strong>in focus</strong> and <strong>hide</strong> one when it&apos;s <strong>out of focus</strong>.
                            </p>
                            <ParagraphDefaultValue code='focus' />
                        </DetailSpecItem>
                        <DetailSpecItem code='true'>
                            <p>
                                Set to this value <strong>always shows</strong> the focus indicator <strong>even if</strong> the control is actually <strong>out of focus</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='false'>
                            <p>
                                Set to this value <strong>always hides</strong> the focus indicator <strong>even if</strong> the control is actually <strong>in focus</strong>.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>
                    <p>
                        Indicates the control is currently <strong>has focus</strong>.
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='arrive' specList={
                    <SpecList>
                        <DetailSpecItem code='undefined'>
                            <p>
                                Set to this value will <strong>show</strong> the arrive indicator when the cursor is currently <strong>hover</strong> on the control <em>and/or</em> the control is currently <strong>has focus</strong>, and <strong>hide</strong> one
                                when the cursor is <strong>not hover</strong> on the control <em>and</em> the control is currently <strong>out of focus</strong>.
                            </p>
                            <ParagraphDefaultValue code='arrive' />
                        </DetailSpecItem>
                        <DetailSpecItem code='true'>
                            <p>
                                Set to this value <strong>always shows</strong> the arrive indicator <strong>even if</strong> the cursor is <strong>not hover</strong> on the control <em>and/or</em> the control is currently <strong>out of focus</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='false'>
                            <p>
                                Set to this value <strong>always hides</strong> the arrive indicator <strong>even if</strong> the cursor is currently <strong>hover</strong> on the control <em>and/or</em> the control is currently <strong>has focus</strong>.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>
                    <p>
                        Indicates the cursor is currently <strong>hover</strong> on the control <em>and/or</em> the control is currently <strong>has focus</strong>.<br />
                        So, the <code>arrive</code> is a combination of you have arrived to the control <strong>by keyboard</strong> <em>and/or</em> <strong>by mouse</strong>.
                    </p>
                </SectionSubProperty>
            </SectionStates>
            <SectionProperty property='tabIndex'>
                <p>
                    Defines the <strong>focus sequence</strong> in <strong>keyboard navigation</strong> (usually with the <kbd>Tab</kbd> key, hence the name).
                </p>
                <p>
                    The <strong>default</strong> value is <code>0</code>, that&apos;s mean the focus sequence is equal to the <strong>component orders</strong> in HTML.<br />
                    In <em>most cases</em>, you <strong>do not need to assign</strong> this property.
                </p>
                <p>
                    To <strong>prevent</strong> the control from <strong>getting focus</strong>, set it to <code>{`tabIndex={-1}`}</code>.
                    However, it can <strong>get focus programmatically</strong>.
                </p>
            </SectionProperty>
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Accessibilities'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>cursorDisable</code>
                                <p>A <code>cursor</code> to apply when <code>{`enabled={false}`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Animations'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>boxShadowFocus</code>
                                <p>A <code>boxShadow</code> (focus indicator) to apply when the control is currently <strong>in focus</strong> and <code>{`focus={undefined}`}</code> <em>-or-</em> when forced <code>{`focus={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>filterArrive</code>
                                <p>A <code>filter</code> to apply when the user <strong>arrives</strong> at the control and <code>{`arrive={undefined}`}</code> <em>-or-</em> when forced <code>{`arrive={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes focus</code>
                                <p>A keyframes name represents <em>focusing keyframes</em>, transition from <strong>out of focus</strong> to <strong>in focus</strong>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes blur</code>
                                <p>A keyframes name represents <em>blurring keyframes</em>, transition from <strong>in focus</strong> to <strong>out of focus</strong>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes arrive</code>
                                <p>A keyframes name represents <em>arriving keyframes</em>, transition from <strong>left</strong> to <strong>arrived</strong>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes leave</code>
                                <p>A keyframes name represents <em>leaving keyframes</em>, transition from <strong>arrived</strong> to <strong>left</strong>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animFocus</code>
                                <p>An animation represents <em>focusing animation</em>, transition from <strong>out of focus</strong> to <strong>in focus</strong>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animBlur</code>
                                <p>An animation represents <em>blurring animation</em>, transition from <strong>in focus</strong> to <strong>out of focus</strong>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animArrive</code>
                                <p>An animation represents <em>arriving animation</em>, transition from <strong>left</strong> to <strong>arrived</strong>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animLeave</code>
                                <p>An animation represents <em>leaving animation</em>, transition from <strong>arrived</strong> to <strong>left</strong>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Control } from '@nodestrap/control'

export default function JoystickControl(props) {
    return (
        <Control
            {...props} // preserves other properties
            
            semanticRole={props.semanticRole ?? 'widget'} // override default value of semanticRole to 'widget'
            semantictag={props.semanticTag ?? 'span'}     // override default value of semanticTag  to 'span'
            
            theme={props.theme ?? 'primary'} // override default value of theme to 'primary'
            mild={props.mild ?? false}       // override default value of mild  to false
            
            onKeyDown={(e) => {
                console.log(e.key || e.code);
                e.preventDefault();
            }}
        >
            Press <kbd>left</kbd>, <kbd>right</kbd>, <kbd>up</kbd>, <kbd>down</kbd> to move.
        </Control>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesControlLayout()'>
                            <p>
                                Returns a <code>StyleCollection</code> object represents a complete <LinkControlPage /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesControlVariants()'>
                            <p>
                                Returns a <code>StyleCollection</code> object represents the <strong>variants</strong> of <LinkControlPage /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <LinkIndicatorPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesControlStates()'>
                            <p>
                                Returns a <code>StyleCollection</code> object represents the <strong>states</strong> of <LinkControlPage /> such as:<br />
                                <strong>focus</strong>/<strong>blur</strong>, <strong>arrive</strong>/<strong>leave</strong>, and <strong>all states</strong> inherited from <LinkIndicatorPage />.
                            </p>
                        </DetailSpecItem>


                        <DetailSpecItem code='isFocused(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>fully focused</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isFocusing(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being focused</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isBlurring(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being blurred</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isBlurred(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>fully blurred</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isFocus(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being/fully focused</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isBlur(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being/fully blurred</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isFocusBlurring(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being/fully focused</strong> or <strong>being blurred</strong>.
                            </p>
                        </DetailSpecItem>


                        <DetailSpecItem code='isArrived(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>fully arrived</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isArriving(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being arrived</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isLeaving(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being left</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isLeft(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>fully left</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isArrive(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being/fully arrived</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isLeave(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being/fully left</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='isArriveLeaving(styles)'>
                            <p>
                                Applies the specified <code>styles</code> when the current component is <strong>being/fully arrived</strong> or <strong>being left</strong>.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, layout, imports, variants, states, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { Control, usesControlLayout, usesControlVariants, usesControlStates, isFocus, isArrive } from '@nodestrap/control'

const useJoystickControlSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // import some stuff from <Control>:
            usesControlLayout(),
            usesControlVariants(),
            usesControlStates(),
        ]),
        layout({
            // then overwrite with your style:
            display : 'inline-block',
            margin  : '1em',
            /* ... */
        }),
        variants([
            rule('.big', [
                layout({
                    // define the style at 'big' variant:
                    fontSize: 'xx-large',
                    /* ... */
                }),
            ]),
            rule('.dark', [
                layout({
                    // define the style at 'dark' variant:
                    background-color : 'black',
                    color            : 'white',
                    /* ... */
                }),
            ]),
            /* ... */
        ]),
        states([
            isFocus([
                layout({
                    // define the style at 'being/fully focus' state:
                    border-color: 'red',
                    /* ... */
                }),
            ]),
            isArrive([
                layout({
                    // define the style at 'being/fully arrrive' state:
                    background-color: 'pink',
                    /* ... */
                }),
            ]),
            /* ... */
        ]),
    ]),
]);

export default function JoystickControl(props) {
    const sheet = useJoystickControlSheet();
    return (
        <Control {...props} mainClass={sheet.main}>
            { props.children }
        </Control>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
