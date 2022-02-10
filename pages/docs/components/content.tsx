import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Section, SubSection } from '../../../components/Section'
import { SectionInheritedProps, LinkContentPage, LinkBasicPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionIntro, LinkUsesBasicLayoutPage, LinkUsesBasicVariantsPage, CommaSeparated, SectionDemo, BusyBar, SectionMoreCustomizingCss, LinkGroupPage, LinkCardPage, LinkButtonPage } from '../../../components/common-contents'

import loadable from '@loadable/component'
import { TypeScriptCode } from '../../../components/Code'
import { Warning } from '../../../components/Info'
const DemoContentLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Content' */'../../../components/DemoPanel@Content'))

import { Content } from '@nodestrap/content'
import { Carousel } from '@nodestrap/carousel'
import { Basic } from '@nodestrap/basic'
import { Button } from '@nodestrap/button'



const MediaList = (props: { includeCustom ?: boolean }) => <CommaSeparated components={['figure', 'img', 'svg', 'video', 'picture', 'embed', 'object', ...(props.includeCustom ? ['.media'] : [])].map((item, index) => <code key={index}>{ item.startsWith('.') ? item : `<${item}>` }</code>)} />;
const LinkList  = (props: { includeCustom ?: boolean }) => <CommaSeparated components={['a', ...(props.includeCustom ? ['.link'] : [])].map((item, index) => <code key={index}>{ item.startsWith('.') ? item : `<${item}>` }</code>)} />;



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/content' component={<LinkContentPage />} bases={<LinkBasicPage />}>
            <Head>
                <title>Content Component</title>
                <meta name="description" content="Using <Content> component" />
            </Head>

            <SectionIntro>
                <p>
                    <LinkContentPage /> is a presentation component for displaying contents such as paragraphs, images, vidoes, and/or mixed with another components.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoContentLazy fallback={<BusyBar />} />
            </SectionDemo>
            <Section title='Images &amp; Media'>
                <p>
                    Media elements such as  <MediaList includeCustom={true} /> are <strong>styled to full width</strong> inside <LinkContentPage />, ignoring <LinkContentPage />&apos;s paddings.
                </p>
                <p>
                    Here the demonstration:
                </p>
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
                
                <SubSection title='Images &amp; Media at the Beginning and End'>
                    <p>
                        If the media position is at the first or the last, at the corners, the media (image) are bit clipped by <LinkContentPage />&apos;s border radius.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
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
                </SubSection>
                <SubSection title='The Sequence of Images &amp; Media'>
                    <p>
                        If there are multiple images in a sequence (without being inserted by another types), the images are joined together with borders as separator.
                    </p>
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
                </SubSection>
                <SubSection title='Custom Media'>
                    <p>
                        If you need a custom element to be treated as media, add <code>media</code> class to the desired element.<br />
                        Set <code>{`classes={['boo', 'media', 'foo']}`}</code> for Nodestrap component -or- <code>{`className='boo media foo'`}</code> for regular component.
                    </p>
                    <Warning>
                        <p>
                            The <code>display</code> property of the custom media need to have <strong>block flow layout</strong> (<code>block</code>, <code>flex</code>, <code>grid</code>).<br />
                            If the display property is <strong>inline flow layout</strong> (<code>inline</code>, <code>inline-flex</code>, <code>inline-grid</code>), an <strong>unexpected</strong> <code>margin-block-start</code> may occur, if <code>padding-block-start</code> is less than <code>margin-block-start</code>.
                        </p>
                        <p>
                            We use a <strong>negative <code>margin-block-start</code></strong> to cancel out the previous <code>margin-block-end</code>.<br />
                            We may change the better algorithm in the future to fix this issue.
                        </p>
                    </Warning>
                    <p></p>
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
                </SubSection>
                <SubSection title='Excluding Media'>
                    <p>
                        Sometimes we need to put a media (<MediaList />) <strong>but not</strong> styled to full width.
                        For example an emoji of <code>{`<img>`}</code>.
                    </p>
                    <p>
                        Add <code>not-media</code> class to the desired element.<br />
                        Set <code>{`classes={['boo', 'not-media', 'foo']}`}</code> for Nodestrap component -or- <code>{`className='boo not-media foo'`}</code> for regular component.{' '}
                        <strong>No style are injected</strong> into that component, thus you should implement your own style for making good looking.
                    </p>
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
                </SubSection>
            </Section>
            <Section title='Links'>
                <p>
                    Link elements such as <LinkList includeCustom={true} /> are styled and automatically get separated from each other.
                </p>
                <Warning>
                    <p>
                        Actually we don&apos;t style the link elements, instead we mutate them with <LinkButtonPage><code>{`<Button btnStyle='link'>`}</code></LinkButtonPage> and styled them for adding margin.
                    </p>
                    <p>
                        If the link elements are <strong>function component</strong> or <strong>class component</strong>, we don&apos;t mutate them.
                    </p>
                </Warning>
                <p></p>
                <p>
                    Here the demonstration:
                </p>
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
                
                <SubSection title='Custom Link'>
                    <p>
                        If you need a custom element to be treated as link, add <code>link</code> class to the desired element.<br />
                        Set <code>{`classes={['boo', 'link', 'foo']}`}</code> for Nodestrap component -or- <code>{`className='boo link foo'`}</code> for regular component.
                    </p>
                    <p>
                        For <LinkButtonPage /> component, just set <code>{`btnStyle='link'`}</code>.
                        The <code>link</code> class will be automatically added for you.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
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
                </SubSection>
                <SubSection title='Excluding Links'>
                    <p>
                        Sometimes we need to put a link (<LinkList />) <strong>but not</strong> styled to full width.
                        For example a custom button of <code>{`<a>`}</code>.
                    </p>
                    <p>
                        Add <code>not-link</code> class to the desired element.<br />
                        Set <code>{`classes={['boo', 'not-link', 'foo']}`}</code> for Nodestrap component -or- <code>{`className='boo not-link foo'`}</code> for regular component.{' '}
                        <strong>No style are injected</strong> into that component, thus you should implement your own style for making good looking.
                    </p>
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
                </SubSection>
            </Section>
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
                                Returns a <code>Rule</code> object represents a complete <LinkContentPage /> <strong>layout</strong> except its <strong>variants</strong> and <strong>excluding layout</strong> from <LinkUsesBasicLayoutPage />.
                            </p>
                            <p>
                                Equivalent to <code>usesContentLayout()</code> <strong>minus</strong> <LinkUsesBasicLayoutPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesContentLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <LinkContentPage /> <strong>layout</strong> except its <strong>variants</strong> and <strong>children</strong>.
                            </p>
                            <p>
                                Equivalent to <code>usesContentBasicLayout()</code> <strong>plus</strong> <LinkUsesBasicLayoutPage />.
                            </p>
                        </DetailSpecItem>
                        
                        <DetailSpecItem code='usesContentBasicVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <LinkContentPage /> but <strong>excluding variants</strong> from <LinkUsesBasicVariantsPage />.
                            </p>
                            <p>
                                Equivalent to <code>usesContentVariants()</code> <strong>minus</strong> <LinkUsesBasicVariantsPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesContentVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <LinkContentPage /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <LinkBasicPage />.
                            </p>
                            <p>
                                Equivalent to <code>usesContentBasicVariants()</code> <strong>plus</strong> <LinkUsesBasicVariantsPage />.
                            </p>
                        </DetailSpecItem>
                        
                        <DetailSpecItem code='usesContentChildrenFill()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>style</strong> &amp; <strong>layout</strong> to make the <strong>media(s)</strong> expands to <LinkContentPage />&apos;s edges.
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
                                This is the <strong>style</strong> of the <strong>children</strong> inside the <LinkContentPage />.
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
