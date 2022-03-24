import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkCarouselPage, LinkElementPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionIntro, SectionDemo, BusyBar, CurrentComponent } from '../../../components/common'
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
    style={{ maxWidth: '400px', maxHeight: '300px' }}
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
                    Displays a slideshow of media (images, videos, illustrations, product list, or articles).
                </p>
                <p>
                    Here the preview:
                </p>
                <Preview stretch={false}>
                    <Carousel />
                </Preview>
            </SectionIntro>
            <SectionDemo>
                <DemoCarouselLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <Carousel
                                theme={themeName}
                                key={index}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Carousel
    theme='${themeName}'
>
    <img alt='lorem image' src='/images/lorem-img/waves-800x600.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/leaf-800x700.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/building-800x500.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/street-800x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/tulip-700x400.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/water-500x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/wood-700x600.jpg'  />
</Carousel>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview stretch={false}>
                        <Carousel
                            size='sm'
                        />
                        <Carousel
                            size={undefined}
                        />
                        <Carousel
                            size='lg'
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Carousel
    size='sm'
    theme='primary'
>
    <img alt='lorem image' src='/images/lorem-img/waves-800x600.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/leaf-800x700.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/building-800x500.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/street-800x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/tulip-700x400.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/water-500x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/wood-700x600.jpg'  />
</Carousel>

<Carousel
    size={undefined}
    theme='primary'
>
    <img alt='lorem image' src='/images/lorem-img/waves-800x600.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/leaf-800x700.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/building-800x500.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/street-800x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/tulip-700x400.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/water-500x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/wood-700x600.jpg'  />
</Carousel>

<Carousel
    size='lg'
    theme='primary'
>
    <img alt='lorem image' src='/images/lorem-img/waves-800x600.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/leaf-800x700.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/building-800x500.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/street-800x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/tulip-700x400.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/water-500x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/wood-700x600.jpg'  />
</Carousel>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview stretch={false}>
                        <Carousel
                            nude={true}
                            theme='primary'
                        />
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Carousel
    nude={true}
    theme='primary'
>
    <img alt='lorem image' src='/images/lorem-img/waves-800x600.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/leaf-800x700.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/building-800x500.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/street-800x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/tulip-700x400.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/water-500x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/wood-700x600.jpg'  />
</Carousel>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <Carousel
                                gradient={true}
                                theme={themeName}
                                key={index}
                            />
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
    <img alt='lorem image' src='/images/lorem-img/waves-800x600.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/leaf-800x700.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/building-800x500.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/street-800x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/tulip-700x400.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/water-500x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/wood-700x600.jpg'  />
</Carousel>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <Carousel
                                outlined={true}
                                theme={themeName}
                                key={index}
                            />
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
    <img alt='lorem image' src='/images/lorem-img/waves-800x600.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/leaf-800x700.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/building-800x500.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/street-800x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/tulip-700x400.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/water-500x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/wood-700x600.jpg'  />
</Carousel>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <Carousel
                                mild={false}
                                theme={themeName}
                                key={index}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Carousel
    mild={false}
    theme='${themeName}'
>
    <img alt='lorem image' src='/images/lorem-img/waves-800x600.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/leaf-800x700.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/building-800x500.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/street-800x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/tulip-700x400.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/water-500x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/wood-700x600.jpg'  />
</Carousel>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
            </SectionVariants>
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
