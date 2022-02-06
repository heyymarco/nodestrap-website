import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, DetailSpecItem } from '../../../components/SpecList'

import { SectionInheritedProps, LinkEditableActionControlPage, LinkEditableControlPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionIntro, SectionGeneral, LinkActionControlPage, useComponentInfo, CommaSeparated, SectionDemo, BusyBar } from '../../../components/common-contents'

import loadable from '@loadable/component'
const DemoEditableActionControlLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@EditableActionControl' */'../../../components/DemoPanel@EditableActionControl'))



const SectionCustomizing = () => {
    const { component, bases } = useComponentInfo();
    
    return (
        <SectionGeneral
            title={<>
                Customizing { component } Component
            </>}
        >
            <p>
                There is no global configuration of { component } you can tweak, <em>but</em> you can
                customize the <strong>global configuration</strong> of <CommaSeparated components={bases} /> which are <strong>shared to</strong> { component }.
            </p>
        </SectionGeneral>
    );
}

const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/editable-action-control' component={<LinkEditableActionControlPage />} bases={[<LinkEditableControlPage key={0} />, <LinkActionControlPage key={1} />]}>
            <Head>
                <title>EditableActionControl Component</title>
                <meta name="description" content="Using <EditableActionControl> component" />
            </Head>

            <SectionIntro>
                <p>
                    <LinkEditableActionControlPage /> is an <strong>abstract</strong> component of <strong>clickable &amp; editable component</strong> with <strong>validation</strong>.
                    It has some validation indicators such as <strong>valid</strong>/<strong>invalid</strong>/<strong>uncheck</strong> that are inherited from <LinkEditableControlPage />.
                    It also has some control indicators such as <strong>press</strong>/<strong>release</strong> that are inherited from <LinkActionControlPage />.
                </p>
                <p>
                    In <em>most cases</em>, you should <strong>not use </strong>this component <strong>directly</strong>, instead create your own component by derivering <LinkEditableActionControlPage />.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoEditableActionControlLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionCustomizing />
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { EditableActionControl } from '@nodestrap/editable-action-control'

export default function AcceptButton(props) {
    return (
        <EditableActionControl
            { ...props } // preserves other properties
            
            semanticRole={props.semanticRole ?? 'button'} // override default value of semanticRole to 'button'
            semantictag={props.semanticTag ?? 'button'}   // override default value of semanticTag  to 'button'
            
            theme={props.theme ?? 'primary'}  // override default value of theme to 'primary'
            mild={props.mild ?? false}        // override default value of mild  to false
        >
            { props.children }
        </EditableActionControl>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesEditableActionControlLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <LinkEditableActionControlPage /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                            <p>
                                Currently the layout is the combination of <LinkEditableControlPage />&apos;s layout and <LinkActionControlPage />&apos;s layout.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesEditableActionControlVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <LinkEditableActionControlPage />.
                            </p>
                            <p>
                                Currently the variants are the combination of <LinkEditableControlPage />&apos;s variants and <LinkActionControlPage />&apos;s variants.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesEditableActionControlStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <LinkEditableActionControlPage />.
                            </p>
                            <p>
                                Currently the states are the combination of <LinkEditableControlPage />&apos;s states and <LinkActionControlPage />&apos;s states.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, states, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { isValid, isInvalid } from '@nodestrap/editable-control'
import { EditableActionControl, usesEditableActionControlLayout, usesEditableActionControlVariants, usesEditableActionControlStates } from '@nodestrap/editable-action-control'

const useAcceptButtonSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <EditableActionControl>:
            usesEditableActionControlLayout(),
            usesEditableActionControlVariants(),
            usesEditableActionControlStates(),
        ]),
        style({
            // then overwrite with your style:
            display : 'inline-block',
            /* ... */
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

export default function AcceptButton(props) {
    const sheet = useAcceptButtonSheet();
    const [isAccepted, setIsAccepted] = useState(false);
    return (
        <EditableActionControl {...props} mainClass={sheet.main} isValid={isAccepted} press={isAccepted || undefined} onClick={() => setIsAccepted(!isAccepted)}>
            accept terms and conditions
        </EditableActionControl>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
