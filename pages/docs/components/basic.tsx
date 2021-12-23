import React, {  } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { Main } from '../../../components/Main'
import { Section, Section2 } from '../../../components/Section'
import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'
import { TypeScriptCode } from '../../../components/Code'
import { Warning } from '../../../components/Info'

import { SectionInheritedProps, LinkBasicPage, LinkElementPage, LinkColorsPage, ParagraphGlobalConfig, ParagraphDerivering, SectionOverridingDefaults, SectionCustomizingCss } from '../../../components/common-contents'

import { DemoPanel, ResetButtonEx } from '../../../components/DemoPanel'
import { Basic } from '@nodestrap/basic'
import { BasicOptions, useBasicStates } from '../../../components/DemoPanel@Basic'



const WarnNotImplementExited = () => (
    <Warning>
        <p>
            By default <LinkBasicPage /> is doesn&apos;t implement this feature, but
            the derived components may do.
        </p>
    </Warning>
);



const Page: NextPage = () => {
    const states = useBasicStates();
    
    
    
    return (
        <>
            <Head>
                <title>Basic Component</title>
                <meta name="description" content="Using <Basic> component" />
            </Head>

            <Main>
                <Section>
                    <article>
                        <h1>Basic Component</h1>
                        <p>
                            <LinkBasicPage /> is the most basic component in Nodestrap components after the <LinkElementPage />.
                            It provides the basic styling and some basic essentials.
                        </p>
                        <p>
                            Unlike <LinkElementPage />, <LinkBasicPage /> has a default style that you can see visually.
                        </p>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Demonstration</h2>
                        <p>
                            Change some controls below!
                            You&apos;ll see the <LinkBasicPage /> is customizable.
                        </p>
                        <DemoPanel>
                            <span>Preview</span>
                            <Basic
                                size={states.size[0]}
                                nude={states.nude[0]}
                                theme={states.theme[0]}
                                gradient={states.gradient[0]}
                                outlined={states.outlined[0]}
                                mild={states.mild[0]}
                            >
                                hello world
                            </Basic>

                            <hr />
                            
                            <BasicOptions states={states} />
                            
                            <ResetButtonEx states={states} />

                            <span>Code</span>
                            <TypeScriptCode>{`
<Basic
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    hello world
</Basic>
                            `}</TypeScriptCode>
                        </DemoPanel>
                    </article>
                </Section>
                <SectionInheritedProps component={<LinkBasicPage />} base={<LinkElementPage />} />
                <Section>
                    <article>
                        <h2>Variant Properties</h2>
                        <p>
                            There&apos;re some properties for <strong>modifying the appearances</strong> such as <code>size</code>, <code>nude</code>, <code>theme</code>, <code>gradient</code>, <code>outlined</code>, and <code>mild</code>.
                        </p>
                        <p>
                            Those properties do not change the <LinkBasicPage /> semantically. Just for <strong>styling</strong> purpose.
                        </p>
                        <Section2>
                            <h3><code>size</code> Property</h3>
                            <p>
                                A <code>size</code> property changes the <strong>default size</strong>.
                            </p>
                            <p>
                                The options are:
                            </p>
                            <SpecList>
                                <DetailSpecItem code='sm'>
                                    <p>Makes the <code>font-size</code>, <code>padding</code> and <code>border-radius</code> are <strong>smaller</strong> than the default.</p>
                                </DetailSpecItem>
                                <DetailSpecItem code='lg'>
                                    <p>Makes the <code>font-size</code>, <code>padding</code> and <code>border-radius</code> are <strong>bigger</strong> than the default.</p>
                                </DetailSpecItem>
                            </SpecList>
                        </Section2>
                        <Section2>
                            <h3><code>nude</code> Property</h3>
                            <p>
                                A <code>nude</code> property removes the <code>border</code>, <code>padding</code> and <code>background</code>.
                                Set <code>{`nude={true}`}</code> to activate.
                            </p>
                        </Section2>
                        <Section2>
                            <h3><code>theme</code> Property</h3>
                            <p>
                                A <code>theme</code> property changes the <strong>contextual theme</strong> - represented by color.
                            </p>
                            <p>
                                The options are:
                            </p>
                            <SpecList>
                                <DetailSpecItem code='primary' theme='primary'>
                                    <p>Sets the <code>foreground color</code>, <code>background color</code> and <code>padding color</code> to <strong>primary</strong> theme.</p>
                                    <p>The <strong>primary</strong> theme represents your <strong>website color</strong>.</p>
                                </DetailSpecItem>
                                <DetailSpecItem code='secondary' theme='secondary'>
                                    <p>Sets the <code>foreground color</code>, <code>background color</code> and <code>padding color</code> to <strong>secondary</strong> theme.</p>
                                    <p>The <strong>secondary</strong> theme represents an <strong>alternate option</strong> to website user.</p>
                                </DetailSpecItem>
                                <DetailSpecItem code='success' theme='success'>
                                    <p>Sets the <code>foreground color</code>, <code>background color</code> and <code>padding color</code> to <strong>success</strong> theme.</p>
                                    <p>The <strong>success</strong> theme represents a <strong>success result</strong> to website user.</p>
                                </DetailSpecItem>
                                <DetailSpecItem code='info' theme='info'>
                                    <p>Sets the <code>foreground color</code>, <code>background color</code> and <code>padding color</code> to <strong>info</strong> theme.</p>
                                    <p>The <strong>info</strong> theme represents a <strong>general information</strong> to website user.</p>
                                </DetailSpecItem>
                                <DetailSpecItem code='warning' theme='warning'>
                                    <p>Sets the <code>foreground color</code>, <code>background color</code> and <code>padding color</code> to <strong>warning</strong> theme.</p>
                                    <p>The <strong>warning</strong> theme represents a <strong>warning message</strong> or <strong>notify something that could cause an error</strong> to website user.</p>
                                </DetailSpecItem>
                                <DetailSpecItem code='danger' theme='danger'>
                                    <p>Sets the <code>foreground color</code>, <code>background color</code> and <code>padding color</code> to <strong>danger</strong> theme.</p>
                                    <p>The <strong>danger</strong> theme represents an <strong>error result</strong> to website user.</p>
                                </DetailSpecItem>
                                <DetailSpecItem code='light' theme='light'>
                                    <p>Sets the <code>foreground color</code>, <code>background color</code> and <code>padding color</code> to <strong>light</strong> theme.</p>
                                    <p>The <strong>light</strong> theme doen&apos;t have a meaning, just for helping a text content againts a dark background or image.</p>
                                </DetailSpecItem>
                                <DetailSpecItem code='dark' theme='dark'>
                                    <p>Sets the <code>foreground color</code>, <code>background color</code> and <code>padding color</code> to <strong>dark</strong> theme.</p>
                                    <p>The <strong>dark</strong> theme doen&apos;t have a meaning, just for helping a text content againts a light background or image.</p>
                                </DetailSpecItem>
                            </SpecList>
                        </Section2>
                        <Section2>
                            <h3><code>gradient</code> Property</h3>
                            <p>
                                A <code>gradient</code> property makes the corresponding component appear 3D.
                                Set <code>{`gradient={true}`}</code> to activate.
                            </p>
                        </Section2>
                        <Section2>
                            <h3><code>outlined</code> Property</h3>
                            <p>
                                An <code>outlined</code> property makes <code>transparent background</code> and makes the <code>border</code> and <code>text</code> color more contrast.
                                Set <code>{`outlined={true}`}</code> to activate.
                            </p>
                        </Section2>
                        <Section2>
                            <h3><code>mild</code> Property</h3>
                            <p>
                                An <code>mild</code> property makes <code>background color smoother</code> and makes the <code>text</code> color more contrast.
                                Set <code>{`mild={true}`}</code> to activate.
                            </p>
                            <p>
                                The <strong>smoother</strong> means <strong>near to white</strong> for light background and <strong>near to black</strong> for dark background.
                                You can <LinkColorsPage>adjust the background color here</LinkColorsPage>.
                            </p>
                        </Section2>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Customizing Basic Component</h2>
                        <ParagraphGlobalConfig component={<LinkBasicPage />} packageName='@nodestrap/basic' />
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
                            <DetailSpecItem title='Spacing'>
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
                                        <WarnNotImplementExited />
                                    </SimpleSpecItem>
                                    <SimpleSpecItem>
                                        <code>@keyframes excited</code>
                                        <p>A keyframes name represents <em>an excited keyframes</em>.</p>
                                        <WarnNotImplementExited />
                                    </SimpleSpecItem>
                                    <SimpleSpecItem>
                                        <code>animExcited</code>
                                        <p>An animation represents <em>excited animation</em>.</p>
                                        <WarnNotImplementExited />
                                    </SimpleSpecItem>
                                </SubSpecList>
                            </DetailSpecItem>
                        </SpecList>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Derivering Basic Component</h2>
                        <ParagraphDerivering component={<LinkBasicPage />} />
                        
                        <SectionOverridingDefaults component={<LinkBasicPage />}>{`
import { Basic } from '@nodestrap/basic'

export default function SiteSidebar(props) {
    return (
        <Basic
            {...props} // preserves other properties

            semanticRole={props.semanticRole ?? 'complementary'} // override default value of semanticRole to 'complementary'
            semantictag={props.semanticTag ?? 'aside'}           // override default value of semanticTag  to 'aside'
            
            theme={props.theme ?? 'secondary'} // override default value of theme to 'secondary'
            mild={props.mild ?? true}          // override default value of mild  to true
        >
            { props.children }
        </Basic>
    );
}
                        `}</SectionOverridingDefaults>

                        <SectionCustomizingCss component={<LinkBasicPage />} specList={
                            <SpecList>
                                <DetailSpecItem code='usesBasicLayout()'>
                                    <p>
                                        Returns a <code>StyleCollection</code> object represents a complete <LinkBasicPage /> <strong>layout</strong> except its <strong>variants</strong>.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='usesBasicVariants()'>
                                    <p>
                                        Returns a <code>StyleCollection</code> object represents the <strong>variants</strong> of <LinkBasicPage /> such as:<br />
                                        <code>SizeVariant</code>, <code>NudeVariant</code>, <code>ThemeVariant</code>, <code>GradientVariant</code>, <code>OutlinedVariant</code>, and <code>MildVariant</code>.
                                    </p>
                                </DetailSpecItem>
                            </SpecList>
                        }>{`
import { mainComposition, layout, imports, variants, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { Basic, usesBasicLayout, usesBasicVariants } from '@nodestrap/basic'

const useCustomComponentSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // import some stuff from <Basic>:
            usesBasicLayout(),
            usesBasicVariants(),
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
    const sheet = useCustomComponentSheet();
    return (
        <Basic {...props} mainClass={sheet.main}>
            { props.children }
        </Basic>
    )
}
                        `}</SectionCustomizingCss>
                    </article>
                </Section>
            </Main>
        </>
    )
}

export default Page
