import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { Main } from '../../../components/Main'
import { Section, Section2 } from '../../../components/Section'
import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'
import { TypeScriptCode } from '../../../components/Code'
import { Basic, SizeName, ThemeName } from '@nodestrap/basic'
import { Warning } from '../../../components/Info'
import { DemoPanel, Option, ResetButton, ThemeOption } from '../../../components/DemoPanel'
import Button from '@nodestrap/button'



const ElementCode = () => <Link href='/docs/components/element'><a><code>&lt;Element&gt;</code></a></Link>;
const BasicCode = () => <code>&lt;Basic&gt;</code>;

const WarnNotImplementExited = () => (
    <Warning>
        <p>
            By default <BasicCode /> is doesn&apos;t implement this feature, but
            the derived components may do.
        </p>
    </Warning>
);



const BasicPage: NextPage = () => {
    const initialProps = useRef({
        size     : undefined as SizeName|undefined,
        nude     : false,
        theme    : 'secondary' as ThemeName|undefined,
        gradient : false,
        outlined : false,
        mild     : false,
    });
    const [size     , setSize    ] = useState(initialProps.current.size);
    const [nude     , setNude    ] = useState(initialProps.current.nude);
    const [theme    , setTheme   ] = useState(initialProps.current.theme);
    const [gradient , setGradient] = useState(initialProps.current.gradient);
    const [outlined , setOutlined] = useState(initialProps.current.outlined);
    const [mild     , setMild    ] = useState(initialProps.current.mild);
    
    
    
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
                            <BasicCode /> is the most basic component in Nodestrap components after the <ElementCode />.
                            It provides the basic styling and some basic essentials.
                        </p>
                        <p>
                            Unlike <ElementCode />, <BasicCode /> has a default style that you can see visually.
                        </p>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Demonstration</h2>
                        <p>
                            Move some sliders below!
                            You&apos;ll see the <BasicCode /> is highly customizable.
                        </p>
                        <DemoPanel>
                            <span>Preview</span>
                            <Basic
                                size={size}
                                nude={nude}
                                theme={theme}
                                gradient={gradient}
                                outlined={outlined}
                                mild={mild}
                            >
                                hello world
                            </Basic>
                            
                            <Option
                                name='size'
                                options={['sm', undefined, 'lg']}
                                value={size}
                                setValue={setSize}
                            />
                            
                            <Option
                                name='nude'
                                options={[false, true]}
                                value={nude}
                                setValue={setNude}
                            />

                            <ThemeOption
                                value={theme}
                                setValue={setTheme}
                            />
                            
                            <Option
                                name='gradient'
                                options={[false, true]}
                                value={gradient}
                                setValue={setGradient}
                            />
                            
                            <Option
                                name='outlined'
                                options={[false, true]}
                                value={outlined}
                                setValue={setOutlined}
                            />
                            
                            <Option
                                name='mild'
                                options={[false, true]}
                                value={mild}
                                setValue={setMild}
                            />
                            
                            <ResetButton
                                enabled={
                                    (size !== initialProps.current.size)
                                    ||
                                    (nude !== initialProps.current.nude)
                                    ||
                                    (theme !== initialProps.current.theme)
                                    ||
                                    (gradient !== initialProps.current.gradient)
                                    ||
                                    (outlined !== initialProps.current.outlined)
                                    ||
                                    (mild !== initialProps.current.mild)
                                }
                                onClick={() => {
                                    setSize(initialProps.current.size);
                                    setNude(initialProps.current.nude);
                                    setTheme(initialProps.current.theme);
                                    setGradient(initialProps.current.gradient);
                                    setOutlined(initialProps.current.outlined);
                                    setMild(initialProps.current.mild);
                                }}
                            />

                            <span>Code</span>
                            <TypeScriptCode>{`
<Basic
    size=${size ? `'${size}'` : '{undefined}'}
    nude={${nude}}
    theme='${theme}'
    gradient={${gradient}}
    outlined={${outlined}}
    mild={${mild}}
>
    hello world
</Basic>
                            `}</TypeScriptCode>
                        </DemoPanel>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Inherited Properties</h2>
                    </article>
                    <p>
                        Because <BasicCode /> is made from <ElementCode />,
                        so all properties of <ElementCode /> are inherited.<br />
                        You can <Button btnStyle='link' theme='primary'><Link href='/docs/components/element'>see the documentation of &lt;Element&gt; here</Link></Button>.
                    </p>
                </Section>
                <Section>
                    <article>
                        <h2>Variant Properties</h2>
                        <p>
                            There&apos;re some properties for <strong>modifying the appearance</strong> such as <code>size</code>, <code>nude</code>, <code>theme</code>, <code>gradient</code>, <code>outlined</code>, and <code>mild</code>.
                        </p>
                        <p>
                            Those properties do not change the <BasicCode /> semantically. Just for <strong>styling</strong> purpose.
                        </p>
                        <Section2>
                            <h3><code>size</code> Property</h3>
                            <p>
                                A <code>size</code> property changes the <strong>default size</strong>.
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
                                You can <Button btnStyle='link' theme='primary'><Link href='/docs/utilities/colors'>adjust the background color here</Link></Button>.
                            </p>
                        </Section2>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Customizing Basic Component</h2>
                        <p>
                            There is a <strong>global configuration</strong> of <BasicCode /> you can tweak.
                            Changing the global configuration <strong>affects all</strong> <BasicCode /> and <strong>other components</strong> derived from <BasicCode />.
                            Here several properties in <code>cssProps</code> of <code>{`import { cssProps } from @nodestrap/basic`}</code> you can customize:
                        </p>
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
                                        <p>A keyframe name represents <em>no animation</em>.</p>
                                        <p>You should <strong>not to modify</strong> this property (in most cases).</p>
                                    </SimpleSpecItem>
                                    <SimpleSpecItem>
                                        <code>filterExcited</code>
                                        <p>The <code>filter</code> to apply when in <code>{`excited={true}`}</code>.</p>
                                        <WarnNotImplementExited />
                                    </SimpleSpecItem>
                                    <SimpleSpecItem>
                                        <code>@keyframes excited</code>
                                        <p>A keyframe name represents <em>exited animation</em>.</p>
                                        <WarnNotImplementExited />
                                    </SimpleSpecItem>
                                    <SimpleSpecItem>
                                        <code>animExcited</code>
                                        <p>An animation represents <em>exited animation</em>.</p>
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
                        <p>
                            <BasicCode /> can be derivered to a <strong>new specific component</strong> you want.
                            There are several ways to deriver.
                        </p>
                        <Section2>
                            <h3>Derivering by Overriding the Default Properties</h3>
                            <p>
                                This is the simples way to deriver <BasicCode />, just by <strong>changing</strong> the <strong>default values</strong>.
                                The values after the <code>??</code> (nullish coalescing operator) are <strong>your default values</strong>.
                                Here the example:
                            </p>
                            <TypeScriptCode>{`
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
                            `}</TypeScriptCode>
                        </Section2>
                        <Section2>
                            <h3>Derivering by Customizing the CSS</h3>
                            <p>
                                <BasicCode /> exports <strong>some CSS</strong> that you can import into <strong>your CSS</strong>.
                                Here the exported <em>mixins</em>:
                            </p>
                            <SpecList>
                                <DetailSpecItem code='usesBasicLayout()'>
                                    <p>
                                        Returns a <code>StyleCollection</code> object represents a complete <BasicCode /> <strong>layout</strong> except its <strong>variants</strong>.
                                    </p>
                                </DetailSpecItem>
                                <DetailSpecItem code='usesBasicVariants()'>
                                    <p>
                                        Returns a <code>StyleCollection</code> object represents the <strong>variants</strong> of <BasicCode /> such as:<br />
                                        <code>SizeVariant</code>, <code>NudeVariant</code>, <code>ThemeVariant</code>, <code>GradientVariant</code>, <code>OutlinedVariant</code>, and <code>MildVariant</code>.
                                    </p>
                                </DetailSpecItem>
                            </SpecList>
                            <p>Example of modifying the CSS:</p>
                            <TypeScriptCode>{`
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
                            `}</TypeScriptCode>
                        </Section2>
                    </article>
                </Section>
            </Main>
        </>
    )
}

export default BasicPage
