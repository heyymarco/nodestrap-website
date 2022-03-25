import React, { useRef } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkCarouselPage, LinkElementPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionVariants, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, SectionConfigureDependsOnIcon, ParagraphLorem } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'
import { Carousel as CarouselOri, CarouselProps } from '@nodestrap/carousel'
import { ButtonIcon } from '@nodestrap/button-icon'
import { Navscroll, NavscrollItem } from '@nodestrap/navscroll'
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
    
    SectionPropertyMedia,
    SectionPropertyMediaCustom,
    SectionPropertyMediaExcluding,
    
    SectionPropertyInfiniteLoop,
    
    SectionCustomizingButtons,
    SectionCustomizingNav,
    SectionCustomizingNavExternal,
} from '../../../components/common@Carousel'

import loadable from '@loadable/component'
const DemoCarouselLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Carousel' */'../../../components/DemoPanel@Carousel'))



const Carousel = (props: CarouselProps) => <CarouselOri
    {...props}
    theme={props.theme ?? 'primary'}
    style={{ maxWidth: '400px', maxHeight: '300px' }}
>
    {
        props.children
        ??
        [
            <img key={0} alt='lorem image' src='/images/lorem-img/waves-800x600.jpg'  />,
            <img key={1} alt='lorem image' src='/images/lorem-img/leaf-800x700.jpg'  />,
            <img key={2} alt='lorem image' src='/images/lorem-img/building-800x500.jpg'  />,
            <img key={3} alt='lorem image' src='/images/lorem-img/street-800x800.jpg'  />,
            <img key={4} alt='lorem image' src='/images/lorem-img/tulip-700x400.jpg'  />,
            <img key={5} alt='lorem image' src='/images/lorem-img/water-500x800.jpg'  />,
            <img key={6} alt='lorem image' src='/images/lorem-img/wood-700x600.jpg'  />,
        ]
    }
</CarouselOri>

const CarouselWithExternalNav = () => {
    const carouselRef = useRef(null);
    
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', gap: '1rem' }}>
            <Carousel
                scrollRef={carouselRef}
            />
            <Navscroll
                targetRef={carouselRef}
                theme='primary'
            >
                <NavscrollItem>
                    Waves
                </NavscrollItem>
                <NavscrollItem>
                    Leaf
                </NavscrollItem>
                <NavscrollItem>
                    Building
                </NavscrollItem>
                <NavscrollItem>
                    Street
                </NavscrollItem>
                <NavscrollItem>
                    Tulip
                </NavscrollItem>
                <NavscrollItem>
                    Water
                </NavscrollItem>
                <NavscrollItem>
                    Wood
                </NavscrollItem>
            </Navscroll>
        </div>
    );
}


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
            <SectionConfigureDependsOnIcon />
            <SectionPropertyMedia>
                <Preview stretch={false}>
                    <Carousel />
                </Preview>
                <p></p>
                <TypeScriptCode>{`
<Carousel theme='primary'>
    <img alt='lorem image' src='/images/lorem-img/waves-800x600.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/leaf-800x700.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/building-800x500.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/street-800x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/tulip-700x400.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/water-500x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/wood-700x600.jpg'  />
</Carousel>
                `}</TypeScriptCode>
                <SectionPropertyMediaCustom>
                    <Preview stretch={false}>
                        <Carousel>
                            <div className='media' style={{ background: 'hsl(20, 100%, 60%)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                A custom media
                            </div>
                            <img alt='lorem image' src='/images/lorem-img/waves-800x600.jpg'  />
                            <img alt='lorem image' src='/images/lorem-img/tulip-700x400.jpg'  />
                            <article className='media' style={{ background: 'hsl(150, 100%, 60%)', width: '100%', height: '100%', padding: '1rem' }}>
                                <h1>
                                    An Article
                                </h1>
                                <ParagraphLorem words={10} />
                                <ParagraphLorem words={10} />
                            </article>
                        </Carousel>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Carousel theme='primary'>
    <div className='media' style={{ background: 'hsl(20, 100%, 60%)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        A custom media
    </div>
    <img alt='lorem image' src='/images/lorem-img/waves-800x600.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/tulip-700x400.jpg'  />
    <article className='media' style={{ background: 'hsl(150, 100%, 60%)', width: '100%', height: '100%', padding: '1rem' }}>
        <h1>
            An Article
        </h1>
        <p>...</p>
        <p>...</p>
    </article>
</Carousel>
                    `}</TypeScriptCode>
                </SectionPropertyMediaCustom>
                <SectionPropertyMediaExcluding>
                    <Preview stretch={false}>
                        <Carousel>
                            <img className='not-media' alt='lorem image' src='/images/lorem-image-1.svg' style={{ width: '150px', height: '50px' }} />
                            <img alt='lorem image' src='/images/lorem-img/tulip-700x400.jpg'  />
                            <img alt='lorem image' src='/images/lorem-img/water-500x800.jpg'  />
                        </Carousel>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Carousel theme='primary'>
    <img className='not-media' alt='lorem image' src='/images/lorem-image-1.svg' style={{ width: '150px', height: '50px' }} />
    <img alt='lorem image' src='/images/lorem-img/tulip-700x400.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/water-500x800.jpg'  />
</Carousel>
                    `}</TypeScriptCode>
                </SectionPropertyMediaExcluding>
            </SectionPropertyMedia>
            <SectionPropertyInfiniteLoop>
                <Preview stretch={false}>
                    <Carousel infiniteLoop={true} />
                </Preview>
                <p></p>
                <TypeScriptCode>{`
<Carousel infiniteLoop={true} theme='primary'>
    <img alt='lorem image' src='/images/lorem-img/waves-800x600.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/leaf-800x700.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/building-800x500.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/street-800x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/tulip-700x400.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/water-500x800.jpg'  />
    <img alt='lorem image' src='/images/lorem-img/wood-700x600.jpg'  />
</Carousel>
                `}</TypeScriptCode>
            </SectionPropertyInfiniteLoop>
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
            <SectionCustomizingButtons>
                <Preview stretch={false}>
                    <Carousel
                        prevBtn={<ButtonIcon theme='warning' size='lg' icon={undefined} style={{ opacity: 0.5 }}>prev</ButtonIcon>}
                        nextBtn={<ButtonIcon theme='warning' size='lg' icon={undefined} style={{ opacity: 0.5 }}>next</ButtonIcon>}
                    />
                </Preview>
                <p></p>
                <TypeScriptCode>{`
<Carousel
    prevBtn={<ButtonIcon theme='warning' size='lg' icon={undefined} style={{ opacity: 0.5 }}>prev</ButtonIcon>}
    nextBtn={<ButtonIcon theme='warning' size='lg' icon={undefined} style={{ opacity: 0.5 }}>next</ButtonIcon>}
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
            </SectionCustomizingButtons>
            <SectionCustomizingNav>
                <Preview stretch={false}>
                    <Carousel
                        nav={<Navscroll theme='warning' size='sm' orientation='inline' listStyle='btn' />}
                    />
                </Preview>
                <p></p>
                <TypeScriptCode>{`
<Carousel
    nav={<Navscroll theme='warning' size='sm' orientation='inline' listStyle='btn' />}
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
                
                <SectionCustomizingNavExternal>
                    <Preview stretch={false}>
                        <CarouselWithExternalNav />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
const carouselRef = useRef(null);

/* ... */

<Carousel
    scrollRef={carouselRef}
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

<Navscroll
    targetRef={carouselRef}
    theme='primary'
>
    <NavscrollItem>
        Waves
    </NavscrollItem>
    <NavscrollItem>
        Leaf
    </NavscrollItem>
    <NavscrollItem>
        Building
    </NavscrollItem>
    <NavscrollItem>
        Street
    </NavscrollItem>
    <NavscrollItem>
        Tulip
    </NavscrollItem>
    <NavscrollItem>
        Water
    </NavscrollItem>
    <NavscrollItem>
        Wood
    </NavscrollItem>
</Navscroll>
                    `}</TypeScriptCode>
                </SectionCustomizingNavExternal>
            </SectionCustomizingNav>
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
                    <DetailSpecItem title='Navigation Buttons'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>navBtnBorderRadius</code>
                                <p>The border-radius of navigation buttons (prev &amp; next).</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Navigation List'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>navMarginBlockEnd</code>
                                <p>The default outer spacing on the bottom.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>navMarginBlockEndSm</code>
                                <p>The default outer spacing on the bottom when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>navMarginBlockEndSm</code>
                                <p>The default outer spacing on the bottom when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Carousel } from '@nodestrap/carousel'

export default function ProductGallery(props) {
    return (
        <Carousel
            {...props} // preserves other properties
            
            theme={props.theme ?? 'primary'} // override default value of theme to 'primary'
            size={props.size ?? 'lg'}        // override default value of size  to 'lg'
        >
            { React.Children.map(props.children, (child) => (
                <div className='product'>
                    { child }
                </div>
            )) }
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
                                <code>SizeVariant</code>, <code>CarouselVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { Carousel, usesCarouselLayout, usesCarouselVariants } from '@nodestrap/carousel'

const useProductGallerySheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Carousel>:
            usesCarouselLayout(),
            usesCarouselVariants(),
        ]),
        style({
            // then overwrite with your style:
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

export default function ProductGallery(props) {
    const sheet = useProductGallerySheet();
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
