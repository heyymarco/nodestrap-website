import type { NextPage } from 'next'
import Head from 'next/head'
import React, {  } from 'react'
import { Main } from '../../../components/Main'
import { Section } from '../../../components/Section'
import { List, ListItem } from '@nodestrap/list'


const TyposPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Typos Utility</title>
                <meta name="description" content="Using `typos` utility" />
            </Head>

            <Main>
                <Section>
                    <article>
                        <h1>Typos Utility</h1>
                        <p>
                            <code>@nodestrap/typos</code> is a utility for customizing common typography (paragraphs, headings, marks, fonts, etc) in your site&apos;s page.
                        </p>
                        <p>
                            <strong>Changing</strong> the typography configs <strong>affects all components</strong> that depend on <code>@nodestrap/typos</code>.
                        </p>
                        <p>
                            The main purpose of this utility is to create <strong>a consistent typography (text)</strong> between components.
                        </p>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h1>Configuring General (Primary) Typography</h1>
                        <p>
                            <strong>General Typography</strong> represents a common typography in your site&apos;s page.
                            Some elements/components might override the general typography.
                        </p>
                        <p>
                            Here several properties in <code>generals</code> of <code>{`import generals from @nodestrap/typos`}</code> you can customize:
                        </p>
                        <List theme='primary'>
                            <ListItem>
                                <code>fontSize</code>
                                <p>The default font size in your site.</p>
                            </ListItem>
                            <ListItem>
                                {
                                    ['fontSizeXs', 'fontSizeSm', 'fontSizeNm', 'fontSizeMd', 'fontSizeLg', 'fontSizeXl', 'fontSizeXxl', 'fontSizeXxxl']
                                    .flatMap((fontSize, index, fontSizes) => [
                                        <code key={index}>{ fontSize }</code>,
                                        (index < (fontSizes.length - 1)) ? ', ' : undefined
                                    ])
                                }
                                <p>The specific font size in your site.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontFamily</code>
                                <p>The default font appearance in your site.</p>
                            </ListItem>
                            <ListItem>
                                {
                                    ['fontFamilySansSerief', 'fontFamilyMonospace']
                                    .flatMap((fontSize, index, fontSizes) => [
                                        <code key={index}>{ fontSize }</code>,
                                        (index < (fontSizes.length - 1)) ? ', ' : undefined
                                    ])
                                }
                                <p>The specific font appearance used in special cases.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontWeight</code>
                                <p>The default font thickness in your site.</p>
                            </ListItem>
                            <ListItem>
                                {
                                    ['fontWeightLighter', 'fontWeightLight', 'fontWeightNormal', 'fontWeightBold', 'fontWeightBolder']
                                    .flatMap((fontSize, index, fontSizes) => [
                                        <code key={index}>{ fontSize }</code>,
                                        (index < (fontSizes.length - 1)) ? ', ' : undefined
                                    ])
                                }
                                <p>The specific font thickness in your site.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontStyle</code> &amp; <code>textDecoration</code>
                                <p>The default font style in your site such as <em>italic</em>, <em>underline</em>, <em>dashed</em>, etc.</p>
                            </ListItem>
                            <ListItem>
                                <code>lineHeight</code>
                                <p>The default font height (including the gap between text rows) in your site.</p>
                            </ListItem>
                            <ListItem>
                                {
                                    ['lineHeightSm', 'lineHeightNm', 'lineHeightLg']
                                    .flatMap((fontSize, index, fontSizes) => [
                                        <code key={index}>{ fontSize }</code>,
                                        (index < (fontSizes.length - 1)) ? ', ' : undefined
                                    ])
                                }
                                <p>The specific font height in your site.</p>
                            </ListItem>
                            <ListItem>
                                <code>foreg</code>
                                <p>The default foreground color (text &amp; icon) in your site.</p>
                                <p>Mostly, you should <strong>not modify this property</strong> here, instead change the foreground color in <code>colors.foreg</code> of <code>{`import colors from '@nodestrap/colors'`}</code></p>
                            </ListItem>
                            <ListItem>
                                <code>backg</code>
                                <p>The default background color or image in your site.</p>
                                <p>Tips:</p>
                                <p>
                                    If you want to set a <strong>solid color</strong>, please set the desired color in <code>colors.backg</code> of <code>{`import colors from '@nodestrap/colors'`}</code>
                                    and leave the <code>backg</code> <strong>unchanged</strong>.
                                </p>
                                <p>
                                    If you want to set a <strong>background image</strong>, please set the image to <code>backg</code> and then
                                    set a <strong>solid color</strong> (represents the average color in your image) to <code>colors.backg</code> of <code>{`import colors from '@nodestrap/colors'`}</code>
                                </p>
                            </ListItem>
                        </List>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h1>Configuring Secondary Typography</h1>
                        <p>
                            <strong>Secondary Typography</strong> represents a secondary (muted) text.
                            A <code>&lt;small&gt;</code> element or any elements/components with <code>txt-sec</code> class are affected by <em>secondary typography</em>.
                        </p>
                        <p>
                            Here several properties in <code>secondary.default</code> of <code>{`import { secondary } from @nodestrap/typos`}</code> you can customize:
                        </p>
                        <List theme='primary'>
                            <ListItem>
                                <code>fontSize</code>
                                <p>The font size of secondary text.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontFamily</code>
                                <p>The font appearance of secondary text.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontWeight</code>
                                <p>The font thickness of secondary text.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontStyle</code> &amp; <code>textDecoration</code>
                                <p>The font style of secondary text such as <em>italic</em>, <em>underline</em>, <em>dashed</em>, etc.</p>
                            </ListItem>
                            <ListItem>
                                <code>lineHeight</code>
                                <p>The font height (including the gap between text rows) of secondary text.</p>
                            </ListItem>
                            <ListItem>
                                <code>foreg</code>
                                <p>The font color of secondary text.</p>
                            </ListItem>
                            <ListItem>
                                <code>opacity</code>
                                <p>The opacity of secondary text.</p>
                            </ListItem>
                        </List>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h1>Configuring Paragraph</h1>
                        <p>
                            <strong>Paragraph</strong> represents a group of sentences in <code>&lt;p&gt;</code> tag.
                        </p>
                        <p>
                            Here several properties in <code>paragraph.default</code> of <code>{`import { paragraph } from @nodestrap/typos`}</code> you can customize:
                        </p>
                        <List theme='primary'>
                            <ListItem>
                                <code>fontSize</code>
                                <p>The font size of paragraph.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontFamily</code>
                                <p>The font appearance of paragraph.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontWeight</code>
                                <p>The font thickness of paragraph.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontStyle</code> &amp; <code>textDecoration</code>
                                <p>The font style of paragraph such as <em>italic</em>, <em>underline</em>, <em>dashed</em>, etc.</p>
                            </ListItem>
                            <ListItem>
                                <code>lineHeight</code>
                                <p>The font height (including the gap between text rows) of paragraph.</p>
                            </ListItem>
                            <ListItem>
                                <code>foreg</code>
                                <p>The font color of paragraph.</p>
                            </ListItem>
                            <ListItem>
                                <code>marginBlockStart</code> &amp; <code>marginBlockEnd</code>
                                <p>The gap on the top &amp; bottom of paragraph.</p>
                                <p>Note: At the first paragraph, the <code>marginBlockStart</code> is ignored and at the last paragraph, the <code>marginBlockEnd</code> is ignored.</p>
                            </ListItem>
                            <ListItem>
                                <code>marginInlineStart</code> &amp; <code>marginInlineEnd</code>
                                <p>The gap on the left &amp; right of paragraph.</p>
                            </ListItem>
                        </List>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h1>Configuring Lead</h1>
                        <p>
                            <strong>Lead</strong> represents a special paragraph with more prominently.
                            Any elements/components/paragraph with <code>lead</code> class are affected by <em>Lead</em>.
                        </p>
                        <p>
                            Here several properties in <code>lead.default</code> of <code>{`import { lead } from @nodestrap/typos`}</code> you can customize:
                        </p>
                        <List theme='primary'>
                            <ListItem>
                                <code>fontSize</code>
                                <p>The font size of Lead.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontFamily</code>
                                <p>The font appearance of Lead.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontWeight</code>
                                <p>The font thickness of Lead.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontStyle</code> &amp; <code>textDecoration</code>
                                <p>The font style of Lead such as <em>italic</em>, <em>underline</em>, <em>dashed</em>, etc.</p>
                            </ListItem>
                            <ListItem>
                                <code>lineHeight</code>
                                <p>The font height (including the gap between text rows) of Lead.</p>
                            </ListItem>
                            <ListItem>
                                <code>foreg</code>
                                <p>The font color of Lead.</p>
                            </ListItem>
                            <ListItem>
                                <code>marginBlockStart</code> &amp; <code>marginBlockEnd</code>
                                <p>The gap on the top &amp; bottom of Lead.</p>
                                <p>Note: At the first Lead, the <code>marginBlockStart</code> is ignored and at the last Lead, the <code>marginBlockEnd</code> is ignored.</p>
                            </ListItem>
                            <ListItem>
                                <code>marginInlineStart</code> &amp; <code>marginInlineEnd</code>
                                <p>The gap on the left &amp; right of Lead.</p>
                            </ListItem>
                        </List>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h1>Configuring Headings</h1>
                        <p>
                            <strong>Headings</strong> represents a title of content.<br />
                            Elements with tag:<br />
                            <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, <code>&lt;h4&gt;</code>, <code>&lt;h5&gt;</code> and <code>&lt;h6&gt;</code><br />
                            and
                            any elements/components with classes:<br />
                            <code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>, <code>h5</code>, <code>h6</code><br />
                            are affected by <em>Headings</em>.
                        </p>
                        <p>
                            Here several properties in <code>heading.default</code> of <code>{`import { heading } from @nodestrap/typos`}</code> you can customize:
                        </p>
                        <List theme='primary'>
                            <ListItem>
                                <code>fontSize1</code>, <code>fontSize2</code>, <code>fontSize3</code>, <code>fontSize4</code>, <code>fontSize5</code> and <code>fontSize6</code>
                                <p>The font size of Heading level 1 (<code>&lt;h1&gt;</code> or <code>.h1</code>) to Heading level 6 (<code>&lt;h6&gt;</code> or <code>.h6</code>) respectively.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontFamily</code>
                                <p>The font appearance of Headings.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontWeight</code>
                                <p>The font thickness of Headings.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontStyle</code> &amp; <code>textDecoration</code>
                                <p>The font style of Headings such as <em>italic</em>, <em>underline</em>, <em>dashed</em>, etc.</p>
                            </ListItem>
                            <ListItem>
                                <code>lineHeight</code>
                                <p>The font height (including the gap between text rows) of Headings.</p>
                            </ListItem>
                            <ListItem>
                                <code>foreg</code>
                                <p>The font color of Headings.</p>
                            </ListItem>
                            <ListItem>
                                <code>marginBlockStart</code> &amp; <code>marginBlockEnd</code>
                                <p>The gap on the top &amp; bottom of Headings.</p>
                                <p>Note: At the first Headings, the <code>marginBlockStart</code> is ignored and at the last Headings, the <code>marginBlockEnd</code> is ignored.</p>
                            </ListItem>
                            <ListItem>
                                <code>marginInlineStart</code> &amp; <code>marginInlineEnd</code>
                                <p>The gap on the left &amp; right of Headings.</p>
                            </ListItem>
                            <ListItem>
                                <code>subOpacity</code>
                                <p>The opacity of the sub Headings (any Headings in which directly next to the previous one).</p>
                            </ListItem>
                        </List>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h1>Configuring Displays</h1>
                        <p>
                            <strong>Displays</strong> represents a special heading with more prominently.
                            Usually used for the title in banner or hero section.
                            Any elements/components/headings with classes:<br />
                            <code>d1</code>, <code>d2</code>, <code>d3</code>, <code>d4</code>, <code>d5</code>, <code>d6</code><br />
                            are affected by <em>Displays</em>.
                        </p>
                        <p>
                            Here several properties in <code>display.default</code> of <code>{`import { display } from @nodestrap/typos`}</code> you can customize:
                        </p>
                        <List theme='primary'>
                            <ListItem>
                                <code>fontSize1</code>, <code>fontSize2</code>, <code>fontSize3</code>, <code>fontSize4</code>, <code>fontSize5</code> and <code>fontSize6</code>
                                <p>The font size of Display level 1 (<code>.d1</code>) to Display level 6 (<code>.d6</code>) respectively.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontFamily</code>
                                <p>The font appearance of Displays.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontWeight</code>
                                <p>The font thickness of Displays.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontStyle</code> &amp; <code>textDecoration</code>
                                <p>The font style of Displays such as <em>italic</em>, <em>underline</em>, <em>dashed</em>, etc.</p>
                            </ListItem>
                            <ListItem>
                                <code>lineHeight</code>
                                <p>The font height (including the gap between text rows) of Displays.</p>
                            </ListItem>
                            <ListItem>
                                <code>foreg</code>
                                <p>The font color of Displays.</p>
                            </ListItem>
                            <ListItem>
                                <code>marginBlockStart</code> &amp; <code>marginBlockEnd</code>
                                <p>The gap on the top &amp; bottom of Displays.</p>
                                <p>Note: At the first Displays, the <code>marginBlockStart</code> is ignored and at the last Displays, the <code>marginBlockEnd</code> is ignored.</p>
                            </ListItem>
                            <ListItem>
                                <code>marginInlineStart</code> &amp; <code>marginInlineEnd</code>
                                <p>The gap on the left &amp; right of Displays.</p>
                            </ListItem>
                            <ListItem>
                                <code>subOpacity</code>
                                <p>The opacity of the sub Displays (any Displays in which directly next to the previous one).</p>
                            </ListItem>
                        </List>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h1>Configuring Blockquote</h1>
                        <p>
                            <strong>Blockquote</strong> represents a quoted content from another source within your document.
                            A <code>&lt;blockquote&gt;</code> element or any elements/components with <code>blockquote</code> class are affected by <em>Blockquote</em>.
                        </p>
                        <p>
                            Here several properties in <code>blockquote.default</code> of <code>{`import { blockquote } from @nodestrap/typos`}</code> you can customize:
                        </p>
                        <List theme='primary'>
                            <ListItem>
                                <code>fontSize</code>
                                <p>The font size of Blockquote.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontFamily</code>
                                <p>The font appearance of Blockquote.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontWeight</code>
                                <p>The font thickness of Blockquote.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontStyle</code> &amp; <code>textDecoration</code>
                                <p>The font style of Blockquote such as <em>italic</em>, <em>underline</em>, <em>dashed</em>, etc.</p>
                            </ListItem>
                            <ListItem>
                                <code>lineHeight</code>
                                <p>The font height (including the gap between text rows) of Blockquote.</p>
                            </ListItem>
                            <ListItem>
                                <code>foreg</code>
                                <p>The font color of Blockquote.</p>
                            </ListItem>
                            <ListItem>
                                <code>marginBlockStart</code> &amp; <code>marginBlockEnd</code>
                                <p>The gap on the top &amp; bottom of Blockquote.</p>
                            </ListItem>
                            <ListItem>
                                <code>marginInlineStart</code> &amp; <code>marginInlineEnd</code>
                                <p>The gap on the left &amp; right of Blockquote.</p>
                            </ListItem>
                        </List>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h1>Configuring Mark</h1>
                        <p>
                            <strong>Mark</strong> represents a highlighted text.
                            A <code>&lt;mark&gt;</code> element or any elements/components with <code>mark</code> class are affected by <em>Mark</em>.
                        </p>
                        <p>
                            Here several properties in <code>markingMark.default</code> of <code>{`import { markingMark } from @nodestrap/typos`}</code> you can customize:
                        </p>
                        <List theme='primary'>
                            <ListItem>
                                <code>fontSize</code>
                                <p>The font size of Mark.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontFamily</code>
                                <p>The font appearance of Mark.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontWeight</code>
                                <p>The font thickness of Mark.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontStyle</code> &amp; <code>textDecoration</code>
                                <p>The font style of Mark such as <em>italic</em>, <em>underline</em>, <em>dashed</em>, etc.</p>
                            </ListItem>
                            <ListItem>
                                <code>lineHeight</code>
                                <p>The font height (including the gap between text rows) of Mark.</p>
                            </ListItem>
                            <ListItem>
                                <code>foreg</code>
                                <p>The font color of Mark.</p>
                            </ListItem>
                            <ListItem>
                                <code>backg</code>
                                <p>The background color or image of Mark.</p>
                            </ListItem>
                            <ListItem>
                                <code>border</code>
                                <p>The border style, width, and color of Mark.</p>
                            </ListItem>
                            <ListItem>
                                <code>borderRadius</code>
                                <p>The border radius of Mark.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingInline</code>
                                <p>The inner gap on the top &amp; bottom of Mark.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlock</code>
                                <p>The inner gap on the left &amp; right of Mark.</p>
                            </ListItem>
                        </List>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h1>Configuring Code</h1>
                        <p>
                            <strong>Code</strong> represents a piece of programming code.
                            A <code>&lt;code&gt;</code> element or any elements/components with <code>code</code> class are affected by <em>Code</em>.
                        </p>
                        <p>
                            Here several properties in <code>markingCode.default</code> of <code>{`import { markingCode } from @nodestrap/typos`}</code> you can customize:
                        </p>
                        <List theme='primary'>
                            <ListItem>
                                <code>fontSize</code>
                                <p>The font size of Code.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontFamily</code>
                                <p>The font appearance of Code.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontWeight</code>
                                <p>The font thickness of Code.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontStyle</code> &amp; <code>textDecoration</code>
                                <p>The font style of Code such as <em>italic</em>, <em>underline</em>, <em>dashed</em>, etc.</p>
                            </ListItem>
                            <ListItem>
                                <code>lineHeight</code>
                                <p>The font height (including the gap between text rows) of Code.</p>
                            </ListItem>
                            <ListItem>
                                <code>foreg</code>
                                <p>The font color of Code.</p>
                            </ListItem>
                            <ListItem>
                                <code>backg</code>
                                <p>The background color or image of Code.</p>
                            </ListItem>
                            <ListItem>
                                <code>border</code>
                                <p>The border style, width, and color of Code.</p>
                            </ListItem>
                            <ListItem>
                                <code>borderRadius</code>
                                <p>The border radius of Code.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingInline</code>
                                <p>The inner gap on the top &amp; bottom of Code.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlock</code>
                                <p>The inner gap on the left &amp; right of Code.</p>
                            </ListItem>
                        </List>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h1>Configuring Kbd</h1>
                        <p>
                            <strong>Kbd</strong> represents a single button of a computer keyboard.
                            A <code>&lt;kbd&gt;</code> element or any elements/components with <code>kbd</code> class are affected by <em>Kbd</em>.
                        </p>
                        <p>
                            Here several properties in <code>markingKbd.default</code> of <code>{`import { markingKbd } from @nodestrap/typos`}</code> you can customize:
                        </p>
                        <List theme='primary'>
                            <ListItem>
                                <code>fontSize</code>
                                <p>The font size of Kbd.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontFamily</code>
                                <p>The font appearance of Kbd.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontWeight</code>
                                <p>The font thickness of Kbd.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontStyle</code> &amp; <code>textDecoration</code>
                                <p>The font style of Kbd such as <em>italic</em>, <em>underline</em>, <em>dashed</em>, etc.</p>
                            </ListItem>
                            <ListItem>
                                <code>lineHeight</code>
                                <p>The font height (including the gap between text rows) of Kbd.</p>
                            </ListItem>
                            <ListItem>
                                <code>foreg</code>
                                <p>The font color of Kbd.</p>
                            </ListItem>
                            <ListItem>
                                <code>backg</code>
                                <p>The background color or image of Kbd.</p>
                            </ListItem>
                            <ListItem>
                                <code>border</code>
                                <p>The border style, width, and color of Kbd.</p>
                            </ListItem>
                            <ListItem>
                                <code>borderRadius</code>
                                <p>The border radius of Kbd.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingInline</code>
                                <p>The inner gap on the top &amp; bottom of Kbd.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlock</code>
                                <p>The inner gap on the left &amp; right of Kbd.</p>
                            </ListItem>
                        </List>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h1>Configuring General Marks</h1>
                        <p>
                            There are several marks for expressing emphasis, important, deleted, etc.
                        </p>
                        <p>
                            Currently there are no configuration option.
                        </p>
                        <p>
                            Here the list of general marks:
                        </p>
                        <List theme='primary'>
                            <ListItem>
                                <code>&lt;del&gt;</code> &amp; <code>&lt;s&gt;</code>
                                <p>Represents a deleted text.</p>
                            </ListItem>
                            <ListItem>
                                <code>&lt;ins&gt;</code> &amp; <code>&lt;u&gt;</code>
                                <p>Represents an inserted (altered) text.</p>
                            </ListItem>
                            <ListItem>
                                <code>&lt;small&gt;</code> &amp; <code>.small</code>
                                <p>Represents an underemphasized text.</p>
                            </ListItem>
                            <ListItem>
                                <code>&lt;strong&gt;</code> &amp; <code>&lt;b&gt;</code>
                                <p>Represents an important text.</p>
                            </ListItem>
                            <ListItem>
                                <code>&lt;em&gt;</code> &amp; <code>&lt;i&gt;</code>
                                <p>Represents an emphasized text.</p>
                            </ListItem>
                        </List>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h1>Configuring Horizontal Line</h1>
                        <p>
                            <strong>HorizontalLine</strong> represents a separator between unrelated contents.
                            A <code>&lt;hr&gt;</code> element is affected by <em>HorizontalLine</em>.
                        </p>
                        <p>
                            Here several properties in <code>horizontalRule.default</code> of <code>{`import { horizontalRule } from @nodestrap/typos`}</code> you can customize:
                        </p>
                        <List theme='primary'>
                            <ListItem>
                                <code>foreg</code>
                                <p>The color of HorizontalLine.</p>
                            </ListItem>
                            <ListItem>
                                <code>opacity</code>
                                <p>The opacity of HorizontalLine.</p>
                            </ListItem>
                            <ListItem>
                                <code>width</code>
                                <p>The thickness of HorizontalLine.</p>
                            </ListItem>
                            <ListItem>
                                <code>marginBlockStart</code> &amp; <code>marginBlockEnd</code>
                                <p>The gap on the top &amp; bottom of HorizontalLine.</p>
                            </ListItem>
                            <ListItem>
                                <code>marginInlineStart</code> &amp; <code>marginInlineEnd</code>
                                <p>The gap on the left &amp; right of HorizontalLine.</p>
                            </ListItem>
                        </List>
                    </article>
                </Section>
            </Main>
        </>
    )
}

export default TyposPage