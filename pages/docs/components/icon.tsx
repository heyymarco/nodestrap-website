import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { SectionInheritedProps, LinkIconPage, LinkElementPage, LinkColorsPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionSubProperty, SectionIntro, SectionDemo, BusyBar, CurrentComponent, SectionGeneral } from '../../../components/common-contents'

import { Icon } from '@nodestrap/icon'
import { Warning } from '../../../components/Info'

import loadable from '@loadable/component'
import { Detail } from '../../../components/Detail'
const DemoIconLazy        = loadable(() => import(/* webpackChunkName: 'DemoPanel@Icon' */'../../../components/DemoPanel@Icon'))
const DemoIconGalleryLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@IconGallery' */'../../../components/DemoPanel@IconGallery'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/icon' component={<LinkIconPage />} bases={<LinkElementPage />}>
            <Head>
                <title>Icon Component</title>
                <meta name="description" content="Using <Icon> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a presentation component for displaying icons, emojis, and other small graphics.
                </p>
                <p>
                    It provides a set of predefined common icons and a customizations for adding new icon sets.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoIconLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionGeneral title='Predefined Icon Sets'>
                <Detail
                    label='Show icon gallery'
                    
                    theme='primary'
                    mild={true}
                    lazy={true}
                    
                    detailStyle='content'
                >
                    <DemoIconGalleryLazy fallback={<BusyBar />} />
                </Detail>
            </SectionGeneral>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionSubProperty property='size' specList={
                    <SpecList>
                        <DetailSpecItem code='sm'>
                            <p>Default icon&apos;s height is 18px.</p>
                            <p>The icon&apos;s width is belong to its <code>aspect-ratio</code>.</p>
                        </DetailSpecItem>
                        <DetailSpecItem code='nm'>
                            <p>Default icon&apos;s height is 24px.</p>
                            <p>The icon&apos;s width is belong to its <code>aspect-ratio</code>.</p>
                        </DetailSpecItem>
                        <DetailSpecItem code='md'>
                            <p>Default icon&apos;s height is 36px.</p>
                            <p>The icon&apos;s width is belong to its <code>aspect-ratio</code>.</p>
                        </DetailSpecItem>
                        <DetailSpecItem code='lg'>
                            <p>Default icon&apos;s height is 48px.</p>
                            <p>The icon&apos;s width is belong to its <code>aspect-ratio</code>.</p>
                        </DetailSpecItem>
                        <DetailSpecItem code='1em'>
                            <p>Default icon&apos;s height is 1em.</p>
                            <p>The icon&apos;s width is belong to its <code>aspect-ratio</code>.</p>
                        </DetailSpecItem>
                    </SpecList>
                }>
                    <p>
                        Changes the <strong>default size</strong>.
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='theme' specList={
                    <SpecList>
                        <DetailSpecItem code='undefined' theme='secondary'>
                            <p>This is an icon with <code>currentColor</code>: <Icon icon='face' theme={undefined} /></p>
                        </DetailSpecItem>
                        <DetailSpecItem code='primary' theme='primary'>
                            <p>This is an icon with <strong>primary</strong> theme: <Icon icon='face' theme='primary' /></p>
                        </DetailSpecItem>
                        <DetailSpecItem code='secondary' theme='secondary'>
                            <p>This is an icon with <strong>secondary</strong> theme: <Icon icon='face' theme='secondary' /></p>
                        </DetailSpecItem>
                        <DetailSpecItem code='success' theme='success'>
                            <p>This is an icon with <strong>success</strong> theme: <Icon icon='face' theme='success' /></p>
                        </DetailSpecItem>
                        <DetailSpecItem code='info' theme='info'>
                            <p>This is an icon with <strong>info</strong> theme: <Icon icon='face' theme='info' /></p>
                        </DetailSpecItem>
                        <DetailSpecItem code='warning' theme='warning'>
                            <p>This is an icon with <strong>warning</strong> theme: <Icon icon='face' theme='warning' /></p>
                        </DetailSpecItem>
                        <DetailSpecItem code='danger' theme='danger'>
                            <p>This is an icon with <strong>danger</strong> theme: <Icon icon='face' theme='danger' /></p>
                        </DetailSpecItem>
                        <DetailSpecItem code='light' theme='secondary'>
                            <p>This is an icon with <strong>light</strong> theme: <Icon icon='face' theme='light' /></p>
                        </DetailSpecItem>
                        <DetailSpecItem code='dark' theme='dark'>
                            <p>This is an icon with <strong>dark</strong> theme: <Icon icon='face' theme='dark' /></p>
                        </DetailSpecItem>
                    </SpecList>
                }>
                    <p>
                        Changes the <strong>contextual theme</strong> - represented by color.
                    </p>
                </SectionSubProperty>
                <SectionSubProperty property='mild'>
                    <p>
                        Makes <code>icon color smoother</code>.
                        Set <code>{`mild={true}`}</code> to activate.
                    </p>
                    <p>
                        The <strong>smoother</strong> means <strong>near to white</strong> on <strong>light background</strong> and <strong>near to black</strong> on <strong>dark background</strong>.
                        You can <LinkColorsPage>adjust the background color here</LinkColorsPage>.
                    </p>
                </SectionSubProperty>
            </SectionVariants>
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Sizes'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>size</code>
                                <p>The default icon height.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>sizeSm</code>
                                <p>The icon height when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>sizeNm</code>
                                <p>The icon height when <code>{`size='nm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>sizeMd</code>
                                <p>The icon height when <code>{`size='md'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>sizeLg</code>
                                <p>The icon height when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>size1em</code>
                                <p>The icon height when <code>{`size='1em'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Animations'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>transition</code>
                                <p>The default <code>transition</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Icon } from '@nodestrap/icon'

export default function elderlyIcon(props) {
    return (
        <Icon
            {...props} // preserves other properties

            icon={props.icon ?? 'elderly'} // override default value of icon to 'elderly'
            
            theme={props.theme ?? 'danger'} // override default value of theme to 'danger'
        />
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesIconLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesIconFontLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents an <CurrentComponent /> <strong>layout</strong> with <strong>font as icon</strong> method.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesIconImageLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents an <CurrentComponent /> <strong>layout</strong> with <strong>image as icon</strong> method.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesIconImage(img, foregOverwrite?, sizeOverwrite?)'>
                            <p>
                                Similar to <code>usesIconImageLayout()</code> but specify with a <strong>custom image url</strong>, an optional <strong>custom color</strong>, and an optional <strong>custom size</strong>.
                            </p>
                            <Warning>
                                <p>
                                    You cannot assign the value directly into the parameters.
                                    Instead create a <strong>css variables</strong> through <code>createCssVar()</code>, then assign the values into the <code>yourVarsDecls</code> and then assign the property of <code>yourVarRefs</code> into the <code>usesIconImageLayout()</code>.<br />
                                    See <strong>Example of modifying the CSS</strong> below.
                                </p>
                            </Warning>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesIconVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code>, <code>ThemeVariant</code>, and <code>MildVariant</code>.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, vars, imports, escapeSvg } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { createCssVar } from '@cssfn/css-var'
import { Icon, usesIconImage } from '@nodestrap/icon'
import { Element } from '@nodestrap/element'

interface CustomIconVars {
    img   : any
    color : any
    size  : any
}
const [iconRefs, iconDecls] = createCssVar<CustomIconVars>({ minify: false });

const useCustomIconSheet = createUseSheet(() => [
    mainComposition(
        vars({
            // define the default css variables:
            [iconDecls.img  ] : \`url("data:image/svg+xml,\${escapeSvg("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='#000' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>")}")\`,
            [iconDecls.color] : 'green',
            [iconDecls.size ] : '20px',
        }),
        imports([
            // import some stuff from <Icon>:
            usesIconImage(iconRefs.img, iconRefs.color, iconRefs.size),
        ]),
        style({
            // then overwrite with your style:
            display    : 'inline-block',
            blockSize  : '20px',
            inlineSize : '20px',
            /* ... */
        }),
    ),
]);

export default function CustomIcon(props: any) {
    const sheet = useCustomIconSheet();
    return (
        <Element {...props} mainClass={sheet.main} />
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
