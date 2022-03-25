import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkContentPage, LinkBasicPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionIntro, LinkUsesBasicLayoutPage, LinkUsesBasicVariantsPage, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents } from '../../../components/common'
import { TypeScriptCode } from '../../../components/Code'

import {
    MediaList,
    LinkList,
    
    SectionPropertyMedia,
    SectionPropertyMediaBeginEnd,
    SectionPropertyMediaSequences,
    SectionPropertyMediaCustom,
    SectionPropertyMediaExcluding,
    
    SectionPropertyLinks,
    SectionPropertyLinksCustom,
    SectionPropertyLinksExcluding,
} from '../../../components/common@Content'

import loadable from '@loadable/component'
const DemoContentLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Content' */'../../../components/DemoPanel@Content'))

import { Content } from '@nodestrap/content'
import { Carousel } from '@nodestrap/carousel'
import { Basic } from '@nodestrap/basic'
import { Button } from '@nodestrap/button'


const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/content' component={<LinkContentPage />} bases={<LinkBasicPage />}>
            <Head>
                <title>&lt;Content&gt; Component</title>
                <meta name="description" content="Using <Content> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a presentation component for displaying contents such as paragraphs, images, vidoes, and/or mixed with another components.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoContentLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionPropertyMedia>
                <TransparentPreview>
                    <Content theme='primary'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                        </p>
                        <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                        </p>
                        <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                        </p>
                    </Content>
                </TransparentPreview>
                <p></p>
                <TypeScriptCode>{`
<Content theme='primary'>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
</Content>
                `}</TypeScriptCode>
                
                <SectionPropertyMediaBeginEnd>
                    <TransparentPreview>
                        <Content theme='secondary' size='lg'>
                            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                        </Content>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Content theme='secondary' size='lg'>
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
</Content>
                    `}</TypeScriptCode>
                </SectionPropertyMediaBeginEnd>
                <SectionPropertyMediaSequences>
                    <TransparentPreview>
                        <Content theme='primary'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                        </Content>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Content theme='primary'>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
</Content>
                    `}</TypeScriptCode>
                </SectionPropertyMediaSequences>
                <SectionPropertyMediaCustom>
                    <TransparentPreview>
                        <Content theme='primary'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <Carousel classes={['media']}>
                                <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                                <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                                <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                            </Carousel>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <Basic theme='success' classes={['media']} style={{ textAlign: 'center' }}>
                                <p>
                                    hello world!
                                </p>
                            </Basic>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                        </Content>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Content theme='primary'>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <Carousel classes={['media']}>
        <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
        <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
        <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    </Carousel>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <Basic theme='success' classes={['media']} style={{ textAlign: 'center' }}>
        <p>
            hello world!
        </p>
    </Basic>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
</Content>
                    `}</TypeScriptCode>
                </SectionPropertyMediaCustom>
                <SectionPropertyMediaExcluding>
                    <TransparentPreview>
                        <Content theme='primary'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <img alt='lorem image' src='/images/lorem-image-1.svg' className='not-media' style={{ height: '150px' }} />
                            <img alt='lorem image' src='/images/lorem-image-1.svg' className='not-media' style={{ height: '150px' }} />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                        </Content>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Content theme='primary'>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' className='not-media' style={{ height: '150px' }} />
    <img alt='lorem image' src='/images/lorem-image-1.svg' className='not-media' style={{ height: '150px' }} />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
</Content>
                    `}</TypeScriptCode>
                </SectionPropertyMediaExcluding>
            </SectionPropertyMedia>
            <SectionPropertyLinks>
                <TransparentPreview>
                    <Content theme='primary'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                        </p>
                        <a href='#'>Link 1</a>
                        <a href='#'>Link 2</a>
                        <a href='#'>Link 3</a>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                        </p>
                    </Content>
                </TransparentPreview>
                <p></p>
                <TypeScriptCode>{`
<Content theme='primary'>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <a href='#'>Link 1</a>
    <a href='#'>Link 2</a>
    <a href='#'>Link 3</a>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
</Content>
                `}</TypeScriptCode>
                
                <SectionPropertyLinksCustom>
                    <TransparentPreview>
                        <Content theme='primary'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <Button btnStyle='link' href='#'>Link 1</Button>
                            <Button btnStyle='link' onClick={() => alert('hello world')}>Link 2</Button>
                            <div className='link'>Link 3</div>
                            <span className='link'>Link 4</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                        </Content>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Content theme='primary'>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <Button btnStyle='link' href='#'>Link 1</Button>
    <Button btnStyle='link' onClick={() => alert('hello world')}>Link 2</Button>
    <div className='link'>Link 3</div>
    <span className='link'>Link 4</span>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
</Content>
                    `}</TypeScriptCode>
                </SectionPropertyLinksCustom>
                <SectionPropertyLinksExcluding>
                    <TransparentPreview>
                        <Content theme='primary'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <a href='#' className='not-link'>Link 1</a>
                            <a href='#' className='not-link'>Link 2</a>
                            <a href='#' className='not-link'>Link 3</a>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                        </Content>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Content theme='primary'>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <a href='#' className='not-link'>Link 1</a>
    <a href='#' className='not-link'>Link 2</a>
    <a href='#' className='not-link'>Link 3</a>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
</Content>
                    `}</TypeScriptCode>
                </SectionPropertyLinksExcluding>
            </SectionPropertyLinks>
            <SectionInheritedProps />
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
                    <DetailSpecItem title='Links'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>linkSpacing</code>
                                <p>The inline gap between links (anchors), if any.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Content } from '@nodestrap/content'

export default function CoolArticle(props) {
    return (
        <Content
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'article'} // override default value of semanticRole to 'article'
            semantictag={props.semanticTag ?? 'article'}   // override default value of semanticTag  to 'article'
            
            theme={props.theme ?? 'success'} // override default value of theme to 'success'
        >
            { props.children }
        </Content>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesContentBasicLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>excluding layout</strong> from <LinkUsesBasicLayoutPage />.
                            </p>
                            <p>
                                Equivalent to <code>usesContentLayout()</code> <strong>minus</strong> <LinkUsesBasicLayoutPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesContentLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>children</strong>.
                            </p>
                            <p>
                                Equivalent to <code>usesContentBasicLayout()</code> <strong>plus</strong> <LinkUsesBasicLayoutPage />.
                            </p>
                        </DetailSpecItem>
                        
                        <DetailSpecItem code='usesContentBasicVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> but <strong>excluding variants</strong> from <LinkUsesBasicVariantsPage />.
                            </p>
                            <p>
                                Equivalent to <code>usesContentVariants()</code> <strong>minus</strong> <LinkUsesBasicVariantsPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesContentVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                            <p>
                                Equivalent to <code>usesContentBasicVariants()</code> <strong>plus</strong> <LinkUsesBasicVariantsPage />.
                            </p>
                        </DetailSpecItem>
                        
                        <DetailSpecItem code='usesContentChildrenFill()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>style</strong> &amp; <strong>layout</strong> to make the <strong>media(s)</strong> expands to <CurrentComponent />&apos;s edges.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesContentChildrenMedia()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>style</strong> &amp; <strong>layout</strong> of <strong>media(s)</strong>.
                            </p>
                            <p>
                                The <strong>media</strong> are: <MediaList includeCustom={true}/>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesContentChildrenLinks()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>style</strong> &amp; <strong>layout</strong> of <strong>link(s)</strong>.
                            </p>
                            <p>
                                The <strong>links</strong> are: <LinkList includeCustom={true}/>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesContentChildren()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>style</strong> &amp; <strong>layout</strong> of <strong>media(s)</strong> and <strong>link(s)</strong>.
                            </p>
                            <p>
                                This is the <strong>style</strong> of the <strong>children</strong> inside the <CurrentComponent />.
                            </p>
                            <p>
                                Equivalent to <code>usesContentChildrenFill()</code> <strong>plus</strong> <code>usesContentChildrenMedia()</code> <strong>plus</strong> <code>usesContentChildrenLinks()</code>.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { Content, usesContentLayout, usesContentVariants, usesContentChildren } from '@nodestrap/content'

const useCoolArticleSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Content>:
            usesContentLayout(),
            usesContentVariants(),
            usesContentChildren(),
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
    const sheet = useCoolArticleSheet();
    return (
        <Content {...props} mainClass={sheet.main}>
            { props.children }
        </Content>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
