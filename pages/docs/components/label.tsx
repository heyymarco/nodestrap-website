import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { SectionInheritedProps, LinkLabelPage, LinkBasicPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, SectionVariants, LinkButtonPage, LinkContentPage, LinkGroupPage, LinkInputPage, SeeDocumentations, LinkCheckPage, LinkRangePage, SectionSubPropertyStyle } from '../../../components/common-contents'

import { Label } from '@nodestrap/label'
import { Group } from '@nodestrap/group'
import { Button } from '@nodestrap/button'
import { NumberInput, TextInput } from '@nodestrap/input'

import loadable from '@loadable/component'
const DemoLabelLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Label' */'../../../components/DemoPanel@Label'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/label' component={<LinkLabelPage />} bases={<LinkBasicPage />}>
            <Head>
                <title>&lt;Label&gt; Component</title>
                <meta name="description" content="Using <Label> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a presentation component for displaying a caption for components inside <LinkGroupPage />.
                </p>
                <p>
                    You can create a nice component group by combining <CurrentComponent /> + <LinkGroupPage /> + another components such as <LinkInputPage />, <LinkButtonPage />, <LinkCheckPage />, <LinkRangePage />, and much more!<br />
                    Something like these:
                </p>
                <p>
                    <Group theme='primary'>
                        <Label theme='secondary'>
                            $
                        </Label>
                        <NumberInput placeholder='price' enableValidation={false} />
                        <Label theme='secondary'>
                            .00
                        </Label>
                        <Button theme='primary'>
                            Update
                        </Button>
                    </Group>
                </p>
                <p>
                    <Group theme='primary'>
                        <Label theme='secondary'>
                            https://example.com/users/
                        </Label>
                        <TextInput placeholder='username' enableValidation={false} />
                        <Label theme='secondary'>
                            @
                        </Label>
                        <TextInput placeholder='company' enableValidation={false} />
                    </Group>
                </p>
                <p>
                    For the detail using <code>{`<Group>`}</code>: <SeeDocumentations components={<LinkGroupPage />} />.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoLabelLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionSubPropertyStyle property='labelStyle' specList={
                    <SpecList>
                        <DetailSpecItem code='undefined'>
                            <p>
                                Styling the <CurrentComponent /> with <strong>default appearance</strong>.
                            </p>
                            <p>
                                This is the <strong>default</strong> value if the <code>labelStyle</code> value is not specified.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='content'>
                            <p>
                                Styling the <CurrentComponent /> to look similar to <LinkContentPage />&apos;s appearance (usually with wider paddings).
                            </p>
                            <p>
                                Basically it merges the <CurrentComponent />&apos;s style + <LinkContentPage />&apos;s style.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                } />
            </SectionVariants>
            <SectionCustomizing specList={
                <SpecList>
                    <SimpleSpecItem>
                        -- no config yet --
                    </SimpleSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Label } from '@nodestrap/label'

export default function CustomLabel(props) {
    return (
        <Label
            {...props} // preserves other properties

            tag={props.tag ?? 'div'} // override default value of tag to 'div'
            
            theme={props.theme ?? 'primary'} // override default value of theme to 'primary'
        >
            { props.children }
        </Label>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesLabelLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesLabelVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code>, <code>LabelVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, states, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { Label, usesLabelLayout, usesLabelVariants } from '@nodestrap/label'

const useCustomLabelSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Label>:
            usesLabelLayout(),
            usesLabelVariants(),
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
            
            /* ... */
        }),
    ),
]);

export default function CustomLabel(props) {
    const sheet = useCustomLabelSheet();
    return (
        <Label {...props} mainClass={sheet.main}>
            { props.children }
        </Label>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
