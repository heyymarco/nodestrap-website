import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Section, SubSection } from '../../../components/Section'
import { SectionInheritedProps, LinkContainerPage, LinkBasicPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionIntro, SectionDemo, BusyBar, SectionMoreCustomizingCss, LinkBreakpointsPage } from '../../../components/common-contents'

import { TypeScriptCode } from '../../../components/Code'
import { Warning } from '../../../components/Info'

import loadable from '@loadable/component'
const DemoContainerLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Container' */'../../../components/DemoPanel@Container'))

import Container from '@nodestrap/container'



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/container' component={<LinkContainerPage />} bases={<LinkBasicPage />}>
            <Head>
                <title>Container Component</title>
                <meta name="description" content="Using <Container> component" />
            </Head>

            <SectionIntro>
                <p>
                    <LinkContainerPage /> is a presentation component that is <em>usually</em> used for <strong>the main wrapper</strong> of website&apos;s content.
                </p>
                <p>
                    Commonly, there are some <strong>free spaces</strong> on the left &amp; right <strong>website&apos;s content</strong> and/or on the top &amp; bottom as well, so
                    the content can <em>breathe</em>.
                    The <strong>width</strong> of the spaces are <em>usually</em> determined by <strong>browser&apos;s width</strong>.
                    The wider the browser, the more space it has (responsive design).
                </p>
                <p>
                    Hence, the <LinkContainerPage /> is exist to help the web developers save their time.
                    You can configure the <LinkBreakpointsPage>responsive breakpoints here</LinkBreakpointsPage> and <strong>customize the available widths</strong> on the <strong>global configuration</strong> on this page below.
                </p>
            </SectionIntro>
            <SectionDemo message={
                <p>
                    Resize the browser&apos;s width and change some controls below!
                    You&apos;ll see the { <LinkContainerPage /> }&apos;s paddings are changed (responsive) &amp; the appearance is customizable.
                </p>
            }>
                <DemoContainerLazy fallback={<BusyBar />} />
            </SectionDemo>
            <Section title='Manipulating the Children'>
                <SubSection title={<>Fill the <LinkContainerPage />&apos;s space</>}>
                    <SubSection>
                        <p>
                            To make the child element(s) <strong>fill</strong> the entire <LinkContainerPage />&apos;s width,
                            add <code>fill</code> class (or <code>className='fill'</code> in React) to the desired children.
                        </p>
                        <p>
                            This is useful if you want to make a <strong>full width page section</strong> - usually with background image such as <strong>hero section</strong>.
                        </p>
                        <p>
                            Here the demonstration:
                        </p>
                        <Container theme='primary'>
                            <section style={{ background: '#FFC0CB' }}>
                                The first child
                            </section>
                            <section style={{ background: '#FFFF00' }} className='fill'>
                                The second child applied <code>className='fill'</code>
                            </section>
                            <section style={{ background: '#90EE90' }}>
                                The third child
                            </section>
                            <section style={{ background: '#E9967A' }} className='fill'>
                                The fourth child applied <code>className='fill'</code>
                            </section>
                            <section style={{ background: '#D2B48C' }}>
                                The fifth child
                            </section>
                        </Container>
                        <p></p>
                        <TypeScriptCode>{`
<Container theme='primary'>
    <section style={{ background: '#FFC0CB' }}>
        The first child
    </section>
    <section style={{ background: '#FFFF00' }} className='fill'>
        The second child applied <code>className='fill'</code>
    </section>
    <section style={{ background: '#90EE90' }}>
        The third child
    </section>
    <section style={{ background: '#E9967A' }} className='fill'>
        The fourth child applied <code>className='fill'</code>
    </section>
    <section style={{ background: '#D2B48C' }}>
        The fifth child
    </section>
</Container>
                        `}</TypeScriptCode>
                    </SubSection>
                    <SubSection>
                        <p>
                            When the child is located at the <strong>top</strong> or <strong>bottom</strong>,
                            the <code>fill</code> class <strong>removes</strong> the <strong>padding top</strong> or <strong>padding bottom</strong> of the <LinkContainerPage />.
                        </p>
                        <p>
                            Here the demonstration:
                        </p>
                        <Container theme='primary'>
                            <section style={{ background: '#FFC0CB' }} className='fill'>
                                The first child applied <code>className='fill'</code>
                            </section>
                            <section style={{ background: '#FFFF00' }}>
                                The second child
                            </section>
                            <section style={{ background: '#90EE90' }}>
                                The third child
                            </section>
                            <section style={{ background: '#E9967A' }}>
                                The fourth child
                            </section>
                            <section style={{ background: '#D2B48C' }} className='fill'>
                                The fifth child applied <code>className='fill'</code>
                            </section>
                        </Container>
                        <p></p>
                        <TypeScriptCode>{`
<Container theme='primary'>
    <section style={{ background: '#FFC0CB' }} className='fill'>
        The first child applied <code>className='fill'</code>
    </section>
    <section style={{ background: '#FFFF00' }}>
        The second child
    </section>
    <section style={{ background: '#90EE90' }}>
        The third child
    </section>
    <section style={{ background: '#E9967A' }}>
        The fourth child
    </section>
    <section style={{ background: '#D2B48C' }} className='fill'>
        The fifth child applied <code>className='fill'</code>
    </section>
</Container>
                        `}</TypeScriptCode>
                    </SubSection>
                </SubSection>
                <SubSection title={<>Take Over the <LinkContainerPage />&apos;s space</>}>
                    <SubSection>
                        <p>
                            To make the child element(s) <strong>fill</strong> the entire <LinkContainerPage />&apos;s width and <strong>take over</strong> <LinkContainerPage />&apos;s padding,
                            add <code>fill-self</code> class (or <code>className='fill-self'</code> in React) to the desired children.
                        </p>
                        <p>
                            This is useful if you want to make a <strong>page section with lot of paragraphs/articles</strong>, so the paddings (surrounding space) should be preserved.
                        </p>
                        <p>
                            Here the demonstration:
                        </p>
                        <Container theme='primary'>
                            <section style={{ background: '#FFC0CB' }}>
                                The first child
                            </section>
                            <section style={{ background: '#FFFF00' }} className='fill-self'>
                                The second child applied <code>className='fill-self'</code>
                            </section>
                            <section style={{ background: '#90EE90' }}>
                                The third child
                            </section>
                            <section style={{ background: '#E9967A' }} className='fill-self'>
                                The fourth child applied <code>className='fill-self'</code>
                            </section>
                            <section style={{ background: '#D2B48C' }}>
                                The fifth child
                            </section>
                        </Container>
                        <p></p>
                        <TypeScriptCode>{`
<Container theme='primary'>
    <section style={{ background: '#FFC0CB' }}>
        The first child
    </section>
    <section style={{ background: '#FFFF00' }} className='fill-self'>
        The second child applied <code>className='fill-self'</code>
    </section>
    <section style={{ background: '#90EE90' }}>
        The third child
    </section>
    <section style={{ background: '#E9967A' }} className='fill-self'>
        The fourth child applied <code>className='fill-self'</code>
    </section>
    <section style={{ background: '#D2B48C' }}>
        The fifth child
    </section>
</Container>
                        `}</TypeScriptCode>
                    </SubSection>
                    <SubSection>
                        <p>
                            When the child is located at the <strong>top</strong> or <strong>bottom</strong>,
                            the <code>fill</code> class also <strong>takes over</strong> the <strong>padding top</strong> or <strong>padding bottom</strong> of the <LinkContainerPage />.
                        </p>
                        <p>
                            Here the demonstration:
                        </p>
                        <Container theme='primary'>
                            <section style={{ background: '#FFC0CB' }} className='fill-self'>
                                The first child <code>className='fill-self'</code>
                            </section>
                            <section style={{ background: '#FFFF00' }}>
                                The second child applied
                            </section>
                            <section style={{ background: '#90EE90' }}>
                                The third child
                            </section>
                            <section style={{ background: '#E9967A' }}>
                                The fourth child applied
                            </section>
                            <section style={{ background: '#D2B48C' }} className='fill-self'>
                                The fifth child <code>className='fill-self'</code>
                            </section>
                        </Container>
                        <p></p>
                        <TypeScriptCode>{`
<Container theme='primary'>
    <section style={{ background: '#FFC0CB' }} className='fill-self'>
        The first child <code>className='fill-self'</code>
    </section>
    <section style={{ background: '#FFFF00' }}>
        The second child applied
    </section>
    <section style={{ background: '#90EE90' }}>
        The third child
    </section>
    <section style={{ background: '#E9967A' }}>
        The fourth child applied
    </section>
    <section style={{ background: '#D2B48C' }} className='fill-self'>
        The fifth child <code>className='fill-self'</code>
    </section>
</Container>
                        `}</TypeScriptCode>
                    </SubSection>
                </SubSection>
            </Section>
            <SectionInheritedProps />
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Borders'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>borderWidth</code>
                                <p>The thickness of border.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderRadius</code>
                                <p>The diameter of border-radius.</p>
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
                                <p>The inner spacing on the left &amp; right when <strong>browser&apos;s width</strong> is equal to / bigger than <code>xs</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingBlockSm</code>
                                <p>The inner spacing on the top &amp; bottom when <strong>browser&apos;s width</strong> is equal to / bigger than <code>xs</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingInlineMd</code>
                                <p>The inner spacing on the left &amp; right when <strong>browser&apos;s width</strong> is equal to / bigger than <code>md</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingBlockMd</code>
                                <p>The inner spacing on the top &amp; bottom when <strong>browser&apos;s width</strong> is equal to / bigger than <code>md</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingInlineLg</code>
                                <p>The inner spacing on the left &amp; right when <strong>browser&apos;s width</strong> is equal to / bigger than <code>lg</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingBlockLg</code>
                                <p>The inner spacing on the top &amp; bottom when <strong>browser&apos;s width</strong> is equal to / bigger than <code>lg</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingInlineXl</code>
                                <p>The inner spacing on the left &amp; right when <strong>browser&apos;s width</strong> is equal to / bigger than <code>xl</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingBlockXl</code>
                                <p>The inner spacing on the top &amp; bottom when <strong>browser&apos;s width</strong> is equal to / bigger than <code>xl</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingInlineXxl</code>
                                <p>The inner spacing on the left &amp; right when <strong>browser&apos;s width</strong> is equal to / bigger than <code>xxl</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingBlockXxl</code>
                                <p>The inner spacing on the top &amp; bottom when <strong>browser&apos;s width</strong> is equal to / bigger than <code>xxl</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Container } from '@nodestrap/container'

export default function SiteSection(props) {
    return (
        <Container
            {...props} // preserves other properties

            tag={props.tag ?? 'section'} // override default value of tag to 'section'
            
            theme={props.theme ?? 'primary'} // override default value of theme to 'primary'
            
            classes={[...(props.classes ?? []),
                'fill', // fill to the parent's client area
            ]}
        >
            <article>
                { props.title && <h1>{ props.title }</h1> }
                { props.children }
            </article>
        </Container>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesContainerLayout()'>
                            <p>
                                Returns a <code>StyleCollection</code> object represents a complete <LinkContainerPage /> <strong>layout</strong> except its <strong>variants</strong> and <strong>children</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesContainerVariants()'>
                            <p>
                                Returns a <code>StyleCollection</code> object represents the <strong>variants</strong> of <LinkContainerPage /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <LinkBasicPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesContainerChildren()'>
                            <p>
                                Returns a <code>StyleCollection</code> object represents the style of <LinkContainerPage />&apos;s <strong>children</strong>.
                            </p>
                            <p>
                                Currently the returning <strong>style</strong> is <strong>equivalent</strong> to the return of <code>usesContainerChildrenFill()</code>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesContainerChildrenFill()'>
                            <p>
                                Returns a <code>StyleCollection</code> object represents the style of <LinkContainerPage />&apos;s <strong>children</strong> <em>when</em> its <code>class</code> contains <code>fill</code> or <code>fill-self</code>.
                            </p>
                            <p>
                                When <code>fill</code> class is applied, the corresponding child&apos;s <strong>width</strong> will <strong>expand</strong> to <strong>container&apos;s client width</strong> (including the container&apos;s <strong>padding</strong>), and
                                the <strong>top</strong> will <strong>expand</strong> to <strong>container&apos;s client top</strong> - when it&apos;s <strong>the first child</strong>, and
                                the <strong>bottom</strong> will <strong>expand</strong> to <strong>container&apos;s client bottom</strong> - when it&apos;s <strong>the last child</strong>.
                            </p>
                            <p>
                                When <code>fill-self</code> class is applied, <strong>all effects</strong> from <code>fill</code> will be applied plus
                                the child&apos;s <strong>padding inline (left &amp; right)</strong> will be the same as <strong>container&apos;s padding inline</strong>, and
                                the child&apos;s <strong>padding block start (top)</strong> will be the same as <strong>container&apos;s padding block start (top)</strong> - when it&apos;s <strong>the first child</strong>, and
                                the child&apos;s <strong>padding block end (bottom)</strong> will be the same as <strong>container&apos;s padding block end (bottom)</strong> - when it&apos;s <strong>the last child</strong>.
                            </p>
                        </DetailSpecItem>
                        
                        <DetailSpecItem code='usesResponsiveContainerLayout()'>
                            <p>
                                Returns a <code>StyleCollection</code> object represents a <strong>responsive paddings</strong> based on <strong>browser&apos;s width</strong>.
                            </p>
                            <p>
                                The width of <strong>padding inline (left &amp; right)</strong> and <strong>padding block (top &amp; bottom)</strong> are <strong>stepped expanding</strong> as the <strong>browser&apos;s width</strong> expands.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesResponsiveContainerGridLayout()'>
                            <p>
                                Similar to <code>usesResponsiveContainerLayout()</code> but the <strong>paddings</strong> are archived by manipulating <code>grid-template-colums</code> on the most <strong>left &amp; right</strong> and <code>grid-template-rows</code> on the most <strong>top &amp; bottom</strong>.
                            </p>
                            <p>
                                The <strong>content</strong> should be placed at a specific <code>grid-area</code> named <code>content</code>.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, layout, imports, variants, children } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { isScreenWidthAtLeast } from '@nodestrap/breakpoints'
import { Container, usesContainerLayout, usesContainerVariants, usesContainerChildren } from '@nodestrap/container'

const useSiteSectionSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // import some stuff from <Container>:
            usesContainerLayout(),
            usesContainerVariants(),
            usesContainerChildren(),
        ]),
        layout({
            // then overwrite with your style:
            display       : 'flex',
            flexDirection : 'column',
            /* ... */
            ...children('article', [
                layout({
                    /* ... */
                }),
            ]),
            /* ... */
        }),
        variants([
            isScreenWidthAtLeast('md', [
                layout({
                    // define the style at screen 'md':
                    fontSize: 'large',
                    /* ... */
                }),
            ]),
            isScreenWidthAtLeast('lg', [
                layout({
                    // define the style at screen 'lg':
                    fontSize: 'x-large',
                    /* ... */
                }),
            ]),
            /* ... */
        ]),
    ]),
]);

export default function SiteSection(props) {
    const sheet = useSiteSectionSheet();
    return (
        <Container {...props} mainClass={sheet.main}>
            <article>
                { props.title && <h1>{ props.title }</h1> }
                { props.children }
            </article>
        </Container>
    )
}
                `}</SectionCustomizingCss>
                
                <SectionMoreCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesContainer()'>
                            <p>
                                Returns a <strong>triplet</strong> object represents a <strong>border width</strong>, <strong>border radiuses</strong> and <strong>paddings</strong> of the corresponding <strong>container</strong> element.
                            </p>
                            <p>
                                The <strong>first item</strong> of the <strong>triplet</strong> is a <code>StyleCollection</code> object represents the <strong>style</strong> to be applied to the desired element <strong>as container</strong>.
                            </p>
                            <p>
                                By applying the <code>StyleCollection</code> above, the <strong>border width</strong>, <strong>border radiuses</strong> and <strong>paddings</strong> of the corresponding <strong>container</strong> are <strong>managed by Nodestrap</strong>.
                                For example if the container&apos;s <strong>child</strong> want to <strong>fill</strong> the entire/partial of <code>container&apos;s client area</code> (including the container&apos;s <strong>padding</strong>),
                                the child&apos; <strong>border radiuses</strong> and <strong>negative margins</strong> can be <strong>easily calculated</strong> so that the child can <strong>fit into</strong> the container accurately.
                            </p>
                            <p>
                                The <strong>second item</strong> of the <strong>triplet</strong> is a <code>{`ReadonlyRefs<ContainerVars>`}</code> object exposes the <strong>container&apos;s css variables</strong> for <strong>retrieving</strong> its value.
                            </p>
                            <p>
                                The <strong>third item</strong> of the <strong>triplet</strong> is a <code>{`ReadonlyDecls<ContainerVars>`}</code> object exposes the <strong>container&apos;s css variables</strong> for <strong>assigning</strong>/<strong>overwriting</strong> its value.
                            </p>
                            <p>
                                You should <strong>not to directly modify</strong> the <strong>border width</strong>, <strong>border radiuses</strong> and <strong>paddings</strong> of the corresponding <strong>container</strong>,
                                instead use <strong>provided css variables</strong> above to modify them.
                            </p>
                            <p>
                                The <code>ContainerVars</code> exposes these variables:
                            </p>
                            <SpecList>
                                <DetailSpecItem code='borderWidth'>
                                    <p>
                                        Gets/sets the <strong>width</strong> of the container&apos;s border.
                                    </p>
                                </DetailSpecItem>
                                
                                <DetailSpecItem code='borderStartStartRadius'>
                                    <p>
                                        Gets/sets the <strong>radius</strong> of the container&apos;s border radius at the <strong>top left</strong> corner.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='borderStartEndRadius'>
                                    <p>
                                        Gets/sets the <strong>radius</strong> of the container&apos;s border radius at the <strong>top right</strong> corner.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='borderEndStartRadius'>
                                    <p>
                                        Gets/sets the <strong>radius</strong> of the container&apos;s border radius at the <strong>border left</strong> corner.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='borderEndEndRadius'>
                                    <p>
                                        Gets/sets the <strong>radius</strong> of the container&apos;s border radius at the <strong>border left</strong> corner.
                                    </p>
                                </DetailSpecItem>
                                
                                <DetailSpecItem code='paddingInline'>
                                    <p>
                                        Gets/sets the <strong>width</strong> of the container&apos;s padding at the <strong>left</strong>/<strong>right</strong>.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='paddingBlock'>
                                    <p>
                                        Gets/sets the <strong>width</strong> of the container&apos;s padding at the <strong>top</strong>/<strong>bottom</strong>.
                                    </p>
                                </DetailSpecItem>
                            </SpecList>
                        </DetailSpecItem>
                        
                        <DetailSpecItem code='usesBorderAsContainer()'>
                            <p>
                                Wraps the <strong>children</strong> of the desired element and <strong>take cares</strong> the <strong>child&apos;s border radius</strong> that <strong>touches the corner</strong> of wrapper element.
                            </p>
                            <p>
                                The corresponding <strong>child&apos;s border radius</strong> will be adjusted by this formula:
                            </p>
                            <TypeScriptCode>{`
const [container, containerRefs, containerDecls] = usesContainer();
const [, , borderRadiusDecls] = usesBorderRadius();

/* ..... */

[borderRadiusDecls.borderStartStartRadius] : \`calc(\${containerRefs.borderStartStartRadius} - \${containerRefs.borderWidth} - min(\${containerRefs.borderWidth}, 0.5px))\`,
[borderRadiusDecls.borderStartEndRadius  ] : \`calc(\${containerRefs.borderStartEndRadius  } - \${containerRefs.borderWidth} - min(\${containerRefs.borderWidth}, 0.5px))\`,
[borderRadiusDecls.borderEndStartRadius  ] : \`calc(\${containerRefs.borderEndStartRadius  } - \${containerRefs.borderWidth} - min(\${containerRefs.borderWidth}, 0.5px))\`,
[borderRadiusDecls.borderEndEndRadius    ] : \`calc(\${containerRefs.borderEndEndRadius    } - \${containerRefs.borderWidth} - min(\${containerRefs.borderWidth}, 0.5px))\`,

/*
Note: we added an extra 0.5px from ideal_inner_radius because some browsers don't crop the visible element **perfectly**,
so to reduce the **imperfection** we added an extra 0.5px
*/

/* ..... */
                            `}</TypeScriptCode>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesBorderAsSeparatorBlock()'>
                            <p>
                                Returns a <code>StyleCollection</code> object to exploit the <strong>border top</strong> and/or <strong>border bottom</strong> in a <em>smart way</em> so that the borders appear like <strong>separators between siblings</strong>.
                            </p>
                            <p>
                                The <strong>border left</strong> and <strong>border right</strong> are <strong>always removed</strong> because the siblings are assumed to <strong>stack vertically</strong>.
                            </p>
                            <Warning>
                                <p>
                                    You should define the <strong>border style</strong>, <strong>border width</strong> and <strong>border color</strong> <em>before importing</em> the <code>usesBorderAsSeparatorBlock()</code>, otherwise the <strong>separator</strong> effect will <strong>not appear</strong>.
                                </p>
                                <p>
                                    The <code>usesBorderAsSeparatorBlock()</code> only <strong>removes</strong> the unnecessary borders but not <strong>adding</strong> a new ones.
                                </p>
                            </Warning>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesBorderAsSeparatorInline()'>
                            <p>
                                Returns a <code>StyleCollection</code> object to exploit the <strong>border left</strong> and/or <strong>border right</strong> in a <em>smart way</em> so that the borders appear like <strong>separators between siblings</strong>.
                            </p>
                            <p>
                                The <strong>border top</strong> and <strong>border bottom</strong> are <strong>always removed</strong> because the siblings are assumed to <strong>stack horizontally</strong>.
                            </p>
                            <Warning>
                                <p>
                                    You should define the <strong>border style</strong>, <strong>border width</strong> and <strong>border color</strong> <em>before importing</em> the <code>usesBorderAsSeparatorInline()</code>, otherwise the <strong>separator</strong> effect will <strong>not appear</strong>.
                                </p>
                                <p>
                                    The <code>usesBorderAsSeparatorInline()</code> only <strong>removes</strong> the unnecessary borders but not <strong>adding</strong> a new ones.
                                </p>
                            </Warning>
                        </DetailSpecItem>
                    </SpecList>
                }/>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
