import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkCarouselPage, LinkElementPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import {
    themeNames,
    SectionPropertyTheme,
    SectionPropertySize,
    SectionPropertyNude,
    SectionPropertyGradient,
    SectionPropertyOutlined,
    SectionPropertyMild,
} from '../../../components/common@Basic'
import { Carousel as CarouselOri, CarouselProps } from '@nodestrap/carousel'

import loadable from '@loadable/component'
const DemoCarouselLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Carousel' */'../../../components/DemoPanel@Carousel'))



const Carousel = (props: CarouselProps) => <CarouselOri
    {...props}
    theme={props.theme ?? 'primary'}
    style={{ width: '400px', height: '300px' }}
>
    <img alt='lorem image' src='/images/lorem-img/waves-800x600.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/leaf-800x700.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/building-800x500.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/street-800x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/tulip-700x400.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/water-500x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/wood-700x600.jpg'  />
</CarouselOri>


const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/carousel' component={<LinkCarouselPage />} bases={<LinkElementPage />}>
            <Head>
                <title>&lt;Carousel&gt; Component</title>
                <meta name="description" content="Using <Carousel> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is the most carousel component in Nodestrap components after the <CurrentBaseComponents />.
                    It provides the carousel styling and some carousel essentials.
                </p>
                <p>
                    Unlike <CurrentBaseComponents />, <CurrentComponent /> has a default style that you can see visually.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoCarouselLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Carousel
                                theme={themeName}
                                key={index}
                            >
                                A {'<Carousel>'} with {themeName} theme
                            </Carousel>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Carousel
    theme='${themeName}'
>
    A {'<Carousel>'} with ${themeName} theme
</Carousel>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <Carousel
                            size='sm'
                            theme='primary'
                        >
                            A {'<Carousel>'} with smaller size
                        </Carousel>
                        <Carousel
                            size={undefined}
                            theme='primary'
                        >
                            A {'<Carousel>'} with default size
                        </Carousel>
                        <Carousel
                            size='lg'
                            theme='primary'
                        >
                            A {'<Carousel>'} with larger size
                        </Carousel>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Carousel
    size='sm'
    theme='primary'
>
    A {'<Carousel>'} with smaller size
</Carousel>

<Carousel
    size={undefined}
    theme='primary'
>
    A {'<Carousel>'} with default size
</Carousel>

<Carousel
    size='lg'
    theme='primary'
>
    A {'<Carousel>'} with larger size
</Carousel>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <Carousel
                            nude={true}
                            theme='warning'
                        >
                            hello world
                        </Carousel>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Carousel
    nude={true}
    theme='warning'
>
    hello world
</Carousel>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Carousel
                                gradient={true}
                                theme={themeName}
                                key={index}
                            >
                                hello world
                            </Carousel>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Carousel
    gradient={true}
    theme='${themeName}'
>
    hello world
</Carousel>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        {themeNames.map((themeName, index) =>
                            <Carousel
                                outlined={true}
                                theme={themeName}
                                key={index}
                            >
                                hello world
                            </Carousel>
                        )}
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Carousel
    outlined={true}
    theme='${themeName}'
>
    hello world
</Carousel>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Carousel
                                mild={true}
                                theme={themeName}
                                key={index}
                            >
                                hello world
                            </Carousel>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Carousel
    mild={true}
    theme='${themeName}'
>
    hello world
</Carousel>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
            </SectionVariants>
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Foregrounds, Backgrounds &amp; Borders'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>foreg</code>
                                <p>The text color.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>backg</code>
                                <p>The background color.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>backgGrad</code>
                                <p>The background gradient when <code>{`gradient={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>border</code>
                                <p>The default border-style, border-width and border-color.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderWidth</code>
                                <p>The thickness of border.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderColor</code>
                                <p>The color of border when <strong>un-themed</strong>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderRadius</code>
                                <p>The default border-radius.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderRadiusSm</code>
                                <p>The border-radius when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderRadiusLg</code>
                                <p>The border-radius when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
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
                    <DetailSpecItem title='Appearances'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>opacity</code>
                                <p>
                                    The opacity level.<br />
                                    <code>{`opacity=0`}</code> is fully transparent, <code>{`opacity=1`}</code> is fully opaque.
                                </p>
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
                                <code>fontFamily</code>
                                <p>The text appearance.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fontWeight</code>
                                <p>The text thickness.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fontStyle</code> &amp; <code>textDecoration</code>
                                <p>The text style such as <em>italic</em>, <em>underline</em>, <em>dashed</em>, etc.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>lineHeight</code>
                                <p>The text height (including the gap between text rows).</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Animations'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>transDuration</code>
                                <p>The default <code>transition-duration</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>transition</code>
                                <p>The default <code>transition</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes none</code>
                                <p>A keyframes name represents <em>an empty keyframes</em>.</p>
                                <p>You should <strong>not to modify</strong> this property (in most cases).</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>filterExcited</code>
                                <p>A <code>filter</code> to apply when <code>{`excited={true}`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>@keyframes excited</code>
                                <p>A keyframes name represents <em>an excited keyframes</em>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>animExcited</code>
                                <p>An animation represents <em>excited animation</em>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Carousel } from '@nodestrap/carousel'

export default function SiteSidebar(props) {
    return (
        <Carousel
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'complementary'} // override default value of semanticRole to 'complementary'
            semantictag={props.semanticTag ?? 'aside'}           // override default value of semanticTag  to 'aside'
            
            theme={props.theme ?? 'secondary'} // override default value of theme to 'secondary'
            mild={props.mild ?? true}          // override default value of mild  to true
        >
            { props.children }
        </Carousel>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesCarouselLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesCarouselVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code>, <code>NudeVariant</code>, <code>ThemeVariant</code>, <code>GradientVariant</code>, <code>OutlinedVariant</code>, and <code>MildVariant</code>.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { Carousel, usesCarouselLayout, usesCarouselVariants } from '@nodestrap/carousel'

const useCustomComponentSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Carousel>:
            usesCarouselLayout(),
            usesCarouselVariants(),
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

export default function CustomComponent(props) {
    const sheet = useCustomComponentSheet();
    return (
        <Carousel {...props} mainClass={sheet.main}>
            { props.children }
        </Carousel>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
