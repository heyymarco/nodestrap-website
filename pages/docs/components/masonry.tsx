import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, DetailSpecItem, SimpleSpecItem, SubSpecList } from '../../../components/SpecList'

import { SectionInheritedProps, LinkMasonryPage, LinkContentPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, SectionVariants, SectionSubPropertyOrientation } from '../../../components/common'


import loadable from '@loadable/component'
const DemoMasonryLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Masonry' */'../../../components/DemoPanel@Masonry'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/masonry' component={<LinkMasonryPage />} bases={<LinkContentPage />}>
            <Head>
                <title>&lt;Masonry&gt; Component</title>
                <meta name="description" content="Using <Masonry> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a presentation component for displaying a collection of image/video/product/etc, each with random <code>aspect-ratio</code>, using <em>masonry layout style</em>.
                </p>
                <p>
                    The native css has built in <em>masonry layout style</em> via <code>grid-template-rows: masonry</code> or <code>grid-template-column: masonry</code>,
                    but that style is in <strong>experimental stage</strong> and no/few browsers support it.
                </p>
                <p>
                    Hence, the <CurrentComponent /> is exist to provide a cross browser masonry layout.
                </p>
                <p>
                    Somedays, the <CurrentComponent /> will become obsolete.
                    But since <CurrentComponent /> is made from a <strong>css grid</strong>, so the migration should be easy.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoMasonryLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionSubPropertyOrientation specList={
                    <SpecList>
                        <DetailSpecItem code='block'>
                            <p>
                                The <CurrentComponent />&apos;s column is from top to bottom.
                            </p>
                            <p>
                                This is the <strong>default</strong> value if the <code>orientation</code> value is not specified.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='inline'>
                            <p>
                                The <CurrentComponent />&apos;s column is from left to right (for page direction <strong>ltr</strong>) -or- right to left (for page direction <strong>rtl</strong>).
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                } />
            </SectionVariants>
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Spacings'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>columnGap</code>
                                <p>The default column spacing between <CurrentComponent />&apos;s items (children).</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>rowGap</code>
                                <p>The default row spacing between <CurrentComponent />&apos;s items (children).</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>columnGapSm</code>
                                <p>The column spacing between <CurrentComponent />&apos;s items (children) when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>rowGapSm</code>
                                <p>The row spacing between <CurrentComponent />&apos;s items (children) when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>columnGapLg</code>
                                <p>The column spacing between <CurrentComponent />&apos;s items (children) when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>rowGapLg</code>
                                <p>The row spacing between <CurrentComponent />&apos;s items (children) when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Sizes'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>itemsMinColumnSize</code>
                                <p>The minimum width of <CurrentComponent />&apos;s column.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>itemsMinColumnSizeSm</code>
                                <p>The minimum width of <CurrentComponent />&apos;s column when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>itemsMinColumnSizeLg</code>
                                <p>The minimum width of <CurrentComponent />&apos;s column when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>itemsRaiseSize</code>
                                <p>The precision of each <CurrentComponent />&apos;s item/child height.</p>
                                <p>The smaller value will be more precise at the cost of performance.</p>
                                <p>The value less than <code>1px</code> is invalid and will be repaced with <code>1px</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>itemsRaiseSizeSm</code>
                                <p>The precision of each <CurrentComponent />&apos;s item/child height when <code>{`size='sm'`}</code>.</p>
                                <p>The smaller value will be more precise at the cost of performance.</p>
                                <p>The value less than <code>1px</code> is invalid and will be repaced with <code>1px</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>itemsRaiseSizeLg</code>
                                <p>The precision of each <CurrentComponent />&apos;s item/child height when <code>{`size='lg'`}</code>.</p>
                                <p>The smaller value will be more precise at the cost of performance.</p>
                                <p>The value less than <code>1px</code> is invalid and will be repaced with <code>1px</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Masonry } from '@nodestrap/masonry'

export default function CustomGallery(props) {
    return (
        <Masonry
            {...props} // preserves other properties

            tag={props.tag ?? 'div'} // override default value of tag to 'div'
            
            theme={props.theme ?? 'secondary'} // override default value of theme to 'secondary'
            
            orientation={props.orientation ?? 'block'} // override default value of theme to 'block'
        >
            { props.children }
        </Masonry>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesMasonryLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesMasonryVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code>, <code>OrientationVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, states, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { Masonry, usesMasonryLayout, usesMasonryVariants } from '@nodestrap/masonry'

const useCustomGallerySheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Masonry>:
            usesMasonryLayout(),
            usesMasonryVariants(),
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

export default function CustomGallery(props) {
    const sheet = useCustomGallerySheet();
    return (
        <Masonry {...props} mainClass={sheet.main}>
            { props.children }
        </Masonry>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
