import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { SectionInheritedProps, LinkEditableTextControlPage, LinkEditableControlPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionSubProperty, SectionIntro, SectionGeneral, ExternalLink, SectionDemo, BusyBar } from '../../../components/common-contents'
import { Warning } from '../../../components/Info'

import loadable from '@loadable/component'
const DemoEditableTextControlLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@EditableTextControl' */'../../../components/DemoPanel@EditableTextControl'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/editable-text-control' component={<LinkEditableTextControlPage />} bases={<LinkEditableControlPage />}>
            <Head>
                <title>EditableTextControl Component</title>
                <meta name="description" content="Using <EditableTextControl> component" />
            </Head>

            <SectionIntro>
                <p>
                    <LinkEditableTextControlPage /> is an <strong>abstract</strong> component of <strong>text editor</strong> with <strong>validation icon</strong>. It also has some validation indicators such as <strong>valid</strong>/<strong>invalid</strong>/<strong>uncheck</strong> that are inherited from <LinkEditableControlPage />.
                </p>
                <p>
                    In <em>most cases</em>, you should <strong>not use </strong>this component <strong>directly</strong>, instead create your own component by derivering <LinkEditableTextControlPage />.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoEditableTextControlLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionGeneral title='Validation Properties'>
                <SectionSubProperty property='minLength'>
                    <p>
                        Defines the minimum number of characters (as UTF-16 code units) the user can enter into the (input) component.
                    </p>
                    <p>
                        The value must be an integer value of 0 or higher.
                        If the <code>minLength</code> value is not specified, or an invalid value is specified, the value is assumed to be <code>{`minLength={0}`}</code>.
                        The value (if present) must be less than or equal to <code>maxLength</code>, otherwise the value will never be valid.
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='maxLength'>
                    <p>
                        Defines the maximum number of characters (as UTF-16 code units) the user can enter into the (input) component.
                    </p>
                    <p>
                        The value must be an integer value of 0 or higher.
                        If the <code>maxLength</code> value is not specified, or an invalid value is specified, the value is assumed to be <strong>infinity</strong>.
                        The value (if present) must be greater than or equal to <code>minLength</code>, otherwise the value will never be valid.
                    </p>
                </SectionSubProperty>
            </SectionGeneral>
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Accessibilities'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>cursor</code>
                                <p>A default <code>cursor</code> to apply.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Animations'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>iconSize</code>
                                <p>
                                    The height of <strong>validation icon</strong>.
                                </p>
                                <p>
                                    The width will be maintained automatically as long as the <code>aspect-ratio</code> does not exeeded <strong>150%</strong>, otherwise it will be truncated.
                                </p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>iconValid</code>
                                <p>
                                    A <strong>validation icon</strong> to display when the current component is <strong>being/fully valided</strong>.
                                </p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>iconInvalid</code>
                                <p>
                                    A <strong>validation icon</strong> to display when the current component is <strong>being/fully invalided</strong>.
                                </p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults moreInfo={
                    <Warning>
                        <p>
                            If you working with <code>{`<input type='...'>`}</code> or <code>{`<textarea>`}</code>, you should wrap them inside the <LinkEditableTextControlPage /> and then style it to appear borderless.
                        </p>
                        <p>
                            If you set <code>{`<EditableTextControl tag='input'>`}</code> or <code>{`<EditableTextControl tag='textarea'>`}</code>, the <strong>validation icon</strong> will <strong>never show</strong> because
                            we use <code>::after</code> pseduo element for making the <strong>validation icon</strong> and
                            unfortunately <code>{`<input>`}</code> and <code>{`<textarea>`}</code> <strong>do not support</strong> any <strong>child elements</strong> (including pseudo elements).
                        </p>
                    </Warning>
                }>{`
import { EditableTextControl } from '@nodestrap/editable-text-control'

export default function TextEditor(props) {
    return (
        <EditableTextControl
            { ...{ type: 'text' }, ...props } // preserves other properties
            
            tag={props.tag   ?? 'span'}       // override default value of tag to 'span'
            
            theme={props.theme ?? 'primary'}  // override default value of theme to 'primary'
            mild={props.mild ?? true}         // override default value of mild  to true
        >
            <input type='text' defaultValue='Edit me!' />
        </EditableTextControl>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesEditableTextControlLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <LinkEditableTextControlPage /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesEditableTextControlVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <LinkEditableTextControlPage /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <LinkEditableControlPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesEditableTextControlStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <LinkEditableTextControlPage />.
                            </p>
                            <p>
                                Currently the states are equivalent to <LinkEditableControlPage />&apos;s states.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                } moreInfo={
                    <p>
                        The code above is the <em>simplified version</em> of <ExternalLink href='https://github.com/nodestrap/input'>@nodestrap/input</ExternalLink>
                    </p>
                }>{`
import { mainComposition, style, imports, variants, states, rule, children } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { usesPadding } from '@nodestrap/basic'
import { isValid, isInvalid } from '@nodestrap/editable-control'
import { stripoutTextbox } from '@nodestrap/stripouts'
import { EditableTextControl, usesEditableTextControlLayout, usesEditableTextControlVariants, usesEditableTextControlStates } from '@nodestrap/editable-text-control'

const useTextEditorSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <EditableTextControl>:
            usesEditableTextControlLayout(),
            usesEditableTextControlVariants(),
            usesEditableTextControlStates(),
        ]),
        style({
            // then overwrite with your style:
            display        : 'flex',
            flexDirection  : 'row',
            justifyContent : 'start',
            alignItems     : 'center',
            flexWrap       : 'nowrap',
            /* ... */
            
            ...children(['input', 'textarea'], () => {
                const [, paddingRefs] = usesPadding();
                
                return style({
                    ...imports([
                        stripoutTextbox(), // clear browser's default styles
                    ]),
                    ...style({
                        display    : 'block',
                        flex       : [[1, 1, '100%']],
                        alignSelf  : 'stretch',
                        boxSizing  : 'border-box',
                        inlineSize : 'fill-available',
                        
                        marginInline  : \`calc(0px - \${paddingRefs.paddingInline})\`,
                        marginBlock   : \`calc(0px - \${paddingRefs.paddingBlock })\`,
                        paddingInline : paddingRefs.paddingInline,
                        paddingBlock  : paddingRefs.paddingBlock,
                    }),
                });
            }),
        }),
        states([
            isValid({
                // define the style at 'being/fully valided' state:
                color: 'darkgreen',
                /* ... */
            }),
            isInvalid({
                // define the style at 'being/fully invalided' state:
                color: 'darkred',
                /* ... */
            }),
            /* ... */
        ]),
    ),
]);

export default function TextEditor(props) {
    const sheet = useTextEditorSheet();
    const [isTextValid, setIsTextValid] = useState(false);
    return (
        <EditableTextControl {...props} mainClass={sheet.main} isValid={isTextValid}>
            <input type='text' required={props.required} minLength={props.minLength} maxLength={props.maxLength} />
        </EditableTextControl>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
