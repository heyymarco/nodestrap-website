import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { SectionInheritedProps, LinkContentPage, LinkBasicPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionIntro, LinkUsesBasicLayoutPage, LinkUsesBasicVariantsPage, CommaSeparated, SectionDemo, BusyBar, SectionMoreCustomizingCss, LinkGroupPage, LinkCardPage } from '../../../components/common-contents'

import loadable from '@loadable/component'
import { TypeScriptCode } from '../../../components/Code'
import { Warning } from '../../../components/Info'
const DemoContentLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Content' */'../../../components/DemoPanel@Content'))



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/content' component={<LinkContentPage />} bases={<LinkBasicPage />}>
            <Head>
                <title>Content Component</title>
                <meta name="description" content="Using <Content> component" />
            </Head>

            <SectionIntro>
                    <p>
                        <LinkContentPage /> is an <strong>abstract</strong> component for <strong>displaying indications</strong> such as <strong>enabled</strong>/<strong>disabled</strong> and <strong>active</strong>/<strong>passive</strong>.
                    </p>
                    <p>
                        In <em>most cases</em>, you should <strong>not use </strong>this component <strong>directly</strong>, instead create your own component by derivering <LinkContentPage />.
                    </p>
            </SectionIntro>
            <SectionDemo>
                <DemoContentLazy fallback={<BusyBar />} />
            </SectionDemo>
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
                                Returns a <code>StyleCollection</code> object represents a complete <LinkContentPage /> <strong>layout</strong> except its <strong>variants</strong> and <strong>excluding layout</strong> from <LinkUsesBasicLayoutPage />.
                            </p>
                            <p>
                                Equivalent to <code>usesContentLayout()</code> <strong>minus</strong> <LinkUsesBasicLayoutPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesContentBasicVariants()'>
                            <p>
                                Returns a <code>StyleCollection</code> object represents the <strong>variants</strong> of <LinkContentPage /> but <strong>excluding variants</strong> from <LinkUsesBasicVariantsPage />.
                            </p>
                            <p>
                                Equivalent to <code>usesContentVariants()</code> <strong>minus</strong> <LinkUsesBasicVariantsPage />.
                            </p>
                        </DetailSpecItem>
                        
                        <DetailSpecItem code='usesContentLayout()'>
                            <p>
                                Returns a <code>StyleCollection</code> object represents a complete <LinkContentPage /> <strong>layout</strong> except its <strong>variants</strong>.
                            </p>
                            <p>
                                Equivalent to <code>usesContentBasicLayout()</code> <strong>plus</strong> <LinkUsesBasicLayoutPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesContentVariants()'>
                            <p>
                                Returns a <code>StyleCollection</code> object represents the <strong>variants</strong> of <LinkContentPage /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <LinkBasicPage />.
                            </p>
                            <p>
                                Equivalent to <code>usesContentBasicVariants()</code> <strong>plus</strong> <LinkUsesBasicVariantsPage />.
                            </p>
                        </DetailSpecItem>


                        <DetailSpecItem code='usesContentMediaLayout()'>
                            <p>
                                Returns a <code>StyleCollection</code> object represents the <strong>style</strong> &amp; <strong>layout</strong> of <strong>each</strong> individual <strong>media content</strong>.
                            </p>
                            <p>
                                The <strong>media content</strong> are: <CommaSeparated components={['figure', 'img', 'svg', 'video', '.media'].map((item, index) => <code key={index}>{ item.startsWith('.') ? item : `<${item}>` }</code>)} />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesContentMedia()'>
                            <p>
                                Returns a <code>StyleCollection</code> object represents the <strong>style</strong> &amp; <strong>layout</strong> of <strong>overall</strong> the composition of <strong>media content(s)</strong> and <strong>link(s)</strong>.
                            </p>
                            <p>
                                This is the <strong>style</strong> of the <strong>children</strong> inside the <LinkContentPage />.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, layout, imports, variants, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { Content, usesContentLayout, usesContentVariants, usesContentStates } from '@nodestrap/content'

const useCoolArticleSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // import some stuff from <Content>:
            usesContentLayout(),
            usesContentVariants(),
            usesContentStates(),
        ]),
        layout({
            // then overwrite with your style:
            display : 'inline-block',
            margin  : '1em',
            /* ... */
        }),
        variants([
            rule('.big', [
                layout({
                    // define the style at 'big' variant:
                    fontSize: 'xx-large',
                    /* ... */
                }),
            ]),
            rule('.dark', [
                layout({
                    // define the style at 'dark' variant:
                    background-color : 'black',
                    color            : 'white',
                    /* ... */
                }),
            ]),
            /* ... */
        ]),
    ]),
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
