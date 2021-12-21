import type { NextPage } from 'next'
import Head from 'next/head'
import React, {  } from 'react'
import { Main } from '../../../components/Main'
import { Section, Section2 } from '../../../components/Section'
import { SpecList, DetailSpecItem } from '../../../components/SpecList'
import { TypeScriptCode, CssCode } from '../../../components/Code'
import { Element } from '@nodestrap/element'
import { Tips, Warning } from '../../../components/Info'


const TipsForRoleTag = () => (
    <Tips>
        <p>
            If you <strong>create a component</strong> to be <strong>consumed to another</strong> programmer,
            we advice to let the <code>role</code> and <code>tag</code> <strong>unset</strong> and then letting he/she to overwrite the <code>role</code> and/or <code>tag</code> he/she want.<br />
            You just set the <strong>appropriate</strong> <code>semanticRole</code> and <code>semanticTag</code> describing your <strong>component functionality</strong>.
        </p>
        <p>
            To <strong>unset</strong> the <code>role</code> and/or <code>tag</code>:<br />
            If <strong>already unset</strong>, just not to write <code>role=...</code> and/or <code>tag=...</code>.<br />
            If <strong>already set</strong>, reset with <code>role=&apos;&apos;</code> or <code>role=&quot;&quot;</code> and/or <code>tag=&apos;&apos;</code> or <code>tag=&quot;&quot;</code>.
        </p>
    </Tips>
);
const TipsForSemanticRoleTag = () => (
    <Tips>
        <p>
            We advice you to <em>firstly</em> define the <code>semanticRole</code> which describes your <strong>component functionality</strong> and
            then define the <code>semanticTag</code> for <strong>all possible semantic tags</strong> having intrinsically <code>semanticRole</code> or
            set <code>{`semanticTag={[null]}`}</code> if <strong>there is no appropriate semantic tag</strong> for your component.
        </p>
        <p>
            Then, <strong>if there is no appropriate semantic tag</strong>, set the <code>tag</code> to your <strong>desired tag</strong> to render.
            The default is to render <code>div</code> if the <code>tag</code> and <code>semanticTag</code> are not set.
        </p>
    </Tips>
);
const WarnForSemanticTag = () => (
    <Warning>
        <p>
            The <code>semanticTag</code> has <strong>no effect</strong> if you don&apos;t define the <code>semanticRole</code>.
        </p>
        <p>
            <code>semanticTag</code> is an <strong>additional</strong> property for the <code>semanticRole</code>.
        </p>
    </Warning>
);

const ElementCode = () => <code>&lt;Element&gt;</code>;

const ElementPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Element Component</title>
                <meta name="description" content="Using <Element> component" />
            </Head>

            <Main>
                <Section>
                    <article>
                        <h1>Element Component</h1>
                        <p>
                            <ElementCode /> is the most basic component in Nodestrap components.
                            It provides the semantic functionality and some basic essentials.
                        </p>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Semantic Properties</h2>
                        <p>
                            There&apos;re some properties for controlling the semantic such as <code>role</code>, <code>tag</code>, <code>semanticRole</code>, and <code>semanticTag</code>.
                        </p>
                        <Section2>
                            <h3><code>role</code> Property</h3>
                            <p>
                                A <code>role</code> property controls the <strong>role property</strong> of rendered <ElementCode />.
                            </p>
                            <p>
                                If the <code>role</code> value is not defined (or <code>undefined</code>), then fallbacks using a value in <code>semanticRole</code> (we&apos;ll choose the best one) and
                                finally fallbacks to <strong>not rendered</strong>.
                            </p>
                            <p>
                                If the <code>role</code> value is an <strong>empty string</strong>, then the <code>role</code> is <strong>not rendered</strong>.
                            </p>
                            <TipsForRoleTag />
                            <p>Example:</p>
                            <TypeScriptCode>{`
<Element>hello world</Element>
<Element role='button'>hello world</Element>
<Element semanticRole={['link', 'button']}>hello world</Element>
                            `}</TypeScriptCode>
                            <p>Rendered to:</p>
                            <TypeScriptCode>{`
<div>hello world</div>
<div role="button">hello world</div>
<div role="link">hello world</div>
                            `}</TypeScriptCode>
                        </Section2>
                        <Section2>
                            <h3><code>tag</code> Property</h3>
                            <p>
                                A <code>tag</code> property controls the <strong>tag name</strong> of rendered <ElementCode />.
                            </p>
                            <p>
                                If the <code>tag</code> value is not defined (or <code>undefined</code>), then fallbacks using a value in <code>semanticTag</code> (we&apos;ll choose the best one) and
                                finally fallbacks to <code>div</code>.
                            </p>
                            <TipsForRoleTag />
                            <p>Example:</p>
                            <TypeScriptCode>{`
<Element>hello world</Element>
<Element tag='span'>hello world</Element>
<Element semanticRole='list' semanticTag={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']}>hello world</Element>
                            `}</TypeScriptCode>
                            <p>Rendered to:</p>
                            <TypeScriptCode>{`
<div>hello world</div>
<span>hello world</span>
<h1>hello world</h1>
                            `}</TypeScriptCode>
                        </Section2>
                        <Section2>
                            <h3><code>semanticRole</code> Property</h3>
                            <p>
                                A <code>semanticRole</code> property defines the <strong>preferred role(s)</strong>.
                                The value can be singular or list (an array).
                            </p>
                            <p>
                                If the <code>role</code> is <strong>listed in</strong> <code>semanticRole</code> and
                                the <code>tag</code> is <strong>listed in</strong> <code>semanticTag</code>,
                                then the <code>role</code> is <strong>not rendered</strong>.<br />
                                We assume the tags listed in <code>semanticTag</code> have the <strong>intrinsic roles</strong> in <code>semanticRole</code>,
                                so rendering the <code>role</code> is <strong>not needed</strong>.
                            </p>
                            <TipsForSemanticRoleTag />
                            <p>Example:</p>
                            <TypeScriptCode>{`
<Element semanticRole='button'>hello world</Element>
<Element semanticRole='heading'>hello world</Element>
<Element semanticRole='heading' semanticTag={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']}>hello world</Element>
<Element semanticRole='heading' semanticTag={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']} tag='h3'>hello world</Element>
<Element semanticRole='heading' semanticTag={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']} tag='span'>hello world</Element>
                            `}</TypeScriptCode>
                            <p>Rendered to:</p>
                            <TypeScriptCode>{`
<div role="button">hello world</div>
<div role="heading">hello world</div>
<h1>hello world</h1>
<h3>hello world</h3>
<span role="heading">hello world</span>
                            `}</TypeScriptCode>
                        </Section2>
                        <Section2>
                            <h3><code>semanticTag</code> Property</h3>
                            <p>
                                A <code>semanticTag</code> property defines the <strong>preferred semantic tag(s)</strong>.
                                The value can be singular or list (an array).
                            </p>
                            <p>
                                If the <code>role</code> is <strong>listed in</strong> <code>semanticRole</code> and
                                the <code>tag</code> is <strong>listed in</strong> <code>semanticTag</code>,
                                then the <code>role</code> is <strong>not rendered</strong>.<br />
                                We assume the tags listed in <code>semanticTag</code> have the <strong>intrinsic roles</strong> in <code>semanticRole</code>,
                                so rendering the <code>role</code> is <strong>not needed</strong>.
                            </p>
                            <WarnForSemanticTag />
                            <p></p>
                            <TipsForSemanticRoleTag />
                            <p>Example:</p>
                            <TypeScriptCode>{`
<Element semanticTag='button'>hello world</Element>
<Element semanticTag={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']}>hello world</Element>
<Element semanticTag={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']} tag='h3'>hello world</Element>

<Element semanticTag={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']} semanticRole='heading'>hello world</Element>
<Element semanticTag={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']} semanticRole='heading' tag='h3'>hello world</Element>
<Element semanticTag={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']} semanticRole='heading' tag='span'>hello world</Element>

<Element semanticTag={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']} semanticRole='heading' role='article'>hello world</Element>
                            `}</TypeScriptCode>
                            <p>Rendered to:</p>
                            <TypeScriptCode>{`
<div>hello world</div>
<div>hello world</div>
<h3>hello world</h3>

<h1>hello world</h1>
<h3>hello world</h3>
<span role="heading">hello world</span>

<div role="article">hello world</div>
                            `}</TypeScriptCode>
                        </Section2>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2><code>elmRef</code> Property</h2>
                        <p>
                            An <code>elmRef</code> property exposes the <strong>reference of rendered element</strong> in <strong>DOM</strong>.
                        </p>
                        <p>
                            Similar to <code>ref</code> in <strong>DOM element</strong> or <strong>class component</strong>, but
                            since Nodestrap components are mostly written in <strong>functional component</strong> and
                            we don&apos;t want to use <code>React.forwardRef()</code> for technical reason, so
                            we chose <code>elmRef</code> for accessing the rendered element.
                        </p>
                        <p>
                            Unlike <code>ref</code> that can either point to <strong>DOM element</strong> or <strong>the instance of a class component</strong>,
                            the <code>elmRef</code> is always <strong>point to DOM element</strong>.
                            So this is the <strong>second reason</strong> why we chose <code>elmRef</code> instead of <code>ref</code>.
                        </p>
                        <Tips>
                            <p>
                                If you <strong>create a component</strong> that has <strong>multiple elements</strong>, please
                                choose the <strong>most functional</strong> element for the <code>elmRef</code>, or
                                select the <strong>most outer</strong> element for the <code>elmRef</code>.
                                Example:
                            </p>
                            <TypeScriptCode>{`
export function CustomTextEditor(props) {
    return (
        <div className='wrapper'>
            <Element tag='textarea' elmRef={props.elmRef}>
            </Element>
        </div>
    );
}
                            `}</TypeScriptCode>
                            <p>
                                You can define <strong>another ***Ref</strong> such as <code>fooRef</code>, <code>booRef</code>, <code>editorRef</code>, <code>mainRef</code>, <code>outerRef</code>, etc, if you need to expose <strong>multiple</strong> elements.
                            </p>
                        </Tips>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2><code>style</code> Property</h2>
                        <p>
                            A <code>style</code> property defines an <strong>inline styleSheet</strong> within the rendered element.
                        </p>
                        <p>
                            Example:
                        </p>
                        <TypeScriptCode>{`
<Element style={{
    color: 'black',
    backgroundColor: 'white',
}}
>
    hello world
</Element>
                        `}</TypeScriptCode>
                        <p>
                            Rendered to:
                        </p>
                        <TypeScriptCode>{`
<div style="color: black; background-color: white;">
    hello world
</div>
                        `}</TypeScriptCode>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2><code>id</code> Property</h2>
                        <p>
                            An <code>id</code> property defines an <strong>unique identifier</strong> of the rendered element.
                        </p>
                        <p>
                            Example:
                        </p>
                        <TypeScriptCode>{`
<Element id='awesome'>
    hello world
</Element>
                        `}</TypeScriptCode>
                        <p>
                            Rendered to:
                        </p>
                        <TypeScriptCode>{`
<div id="awesome">
    hello world
</div>
                        `}</TypeScriptCode>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Class Properties</h2>
                        <p>
                            There&apos;re some class properties for coding <strong>more readable</strong>: <code>mainClass</code>, <code>variantClasses</code>, <code>stateClasses</code> and <code>classes</code>.
                        </p>
                        <p>
                            Those properties actually <strong>does the same thing</strong>.
                            We created them for <strong>grouping purpose</strong>.
                            When the component is rendered they will be merged, removed the duplicates, and joined together with space.
                        </p>
                        <Section2>
                            <h3><code>mainClass</code> Property</h3>
                            <p>
                                A <code>mainClass</code> property defines the <strong>css class name</strong> of the <strong>component you&apos;re working on</strong> such as: <code>awesome-button</code>, <code>customEditor</code>, <code>cool-sidebar</code>, etc.
                            </p>
                            <p>
                                Example:
                            </p>
                            <TypeScriptCode>{`
<Element mainClass='awesome-button'>
    hello world
</Element>
                            `}</TypeScriptCode>
                            <p>
                                Rendered to:
                            </p>
                            <TypeScriptCode>{`
<div class="awesome-button">
    hello world
</div>
                            `}</TypeScriptCode>
                        </Section2>
                        <Section2>
                            <h3><code>variantClasses</code> Property</h3>
                            <p>
                                A <code>variantClasses</code> property defines <strong>sub-class(es)</strong> (an <code>array</code>), <em>each</em> represents a <strong>current applied variant</strong> of the <strong>component you&apos;re working on</strong> such as: <code>big</code>, <code>small</code>, <code>dark</code>, <code>rounded</code>, <code>glassy</code>, etc.
                            </p>
                            <p>
                                Example:
                            </p>
                            <TypeScriptCode>{`
<Element mainClass='awesome-button' variantClasses={[
    (props.big ? 'big' : 'small'),
    'rounded',
]}>
    hello world
</Element>
                            `}</TypeScriptCode>
                            <p>
                                Rendered to:
                            </p>
                            <TypeScriptCode>{`
<div class="awesome-button big rounded">
    hello world
</div>
                            `}</TypeScriptCode>
                        </Section2>
                        <Section2>
                            <h3><code>stateClasses</code> Property</h3>
                            <p>
                                A <code>stateClasses</code> property defines <strong>sub-class(es)</strong> (an <code>array</code>), <em>each</em> represents a <strong>current state</strong> of the <strong>component you&apos;re working on</strong> such as: <code>disabled</code>, <code>pressed</code>, <code>active</code>, <code>selected</code>, <code>expanded</code>, etc.
                            </p>
                            <p>
                                Example:
                            </p>
                            <TypeScriptCode>{`
<Element mainClass='awesome-button' stateClasses={[
    (props.enabled ? null : 'disabled'),
    'selected',
]}>
    hello world
</Element>
                            `}</TypeScriptCode>
                            <p>
                                Rendered to:
                            </p>
                            <TypeScriptCode>{`
<div class="awesome-button disabled selected">
    hello world
</div>
                            `}</TypeScriptCode>
                        </Section2>
                        <Section2>
                            <h3><code>classes</code> Property</h3>
                            <p>
                                A <code>classes</code> property defines the <strong>additional</strong> generic class(es) (an <code>array</code>) to attach.
                                This is the <strong>last choice</strong> if you don&apos;t have any idea to classify the classes.
                            </p>
                            <p>
                                Example:
                            </p>
                            <TypeScriptCode>{`
<Element mainClass='awesome-button' classes={[
    'd-inline',
    'mx-auto',
]}>
    hello world
</Element>
                            `}</TypeScriptCode>
                            <p>
                                Rendered to:
                            </p>
                            <TypeScriptCode>{`
<div class="awesome-button d-inline mx-auto">
    hello world
</div>
                            `}</TypeScriptCode>
                        </Section2>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2><code>aria-**</code> Properties</h2>
                        <p>
                            Any properties starting with <code>aria-**</code> will be <strong>rendered directly</strong>.
                            Fell free to place any <code>aria-**</code> to the <ElementCode />.
                        </p>
                        <p>
                            Example:
                        </p>
                        <TypeScriptCode>{`
<Element aria-label='click here for more detail'>
    hello world
</Element>
                        `}</TypeScriptCode>
                        <p>
                            Rendered to:
                        </p>
                        <TypeScriptCode>{`
<div aria-label="click here for more detail">
    hello world
</div>
                        `}</TypeScriptCode>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2><code>on**</code> Properties</h2>
                        <p>
                            Any properties starting with <code>on**</code> will be treated as <strong>an usual React event</strong>.
                            Fell free to put any <code>on**</code> to the <ElementCode />.
                        </p>
                        <p>
                            Example:
                        </p>
                        <TypeScriptCode>{`
<Element onClick={() => console.log('hello world')}>
    hello world
</Element>
                        `}</TypeScriptCode>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>DOM Properties</h2>
                        <p>
                            Any <strong>DOM</strong> properties will be <strong>rendered directly</strong>.
                            Fell free to place any <code>DOM properties</code> to the <ElementCode />.
                        </p>
                        <p>
                            Here the list of recognized <strong>DOM properties</strong>:<br />
                        {
    [
    // All HTML Attributes
    'accept',
    'acceptCharset',
    'action',
    'allowFullScreen',
    'allowTransparency',
    'alt',
    'as',
    'async',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'capture',
    'cellPadding',
    'cellSpacing',
    'charSet',
    'challenge',
    'checked',
    'cite',
    'classID',
    'cols',
    'colSpan',
    'content',
    'controls',
    'coords',
    'crossOrigin',
    'data',
    'dateTime',
    'default',
    'defer',
    'disabled',
    'download',
    'encType',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'headers',
    'height',
    'high',
    'href',
    'hrefLang',
    'htmlFor',
    'httpEquiv',
    'integrity',
    'keyParams',
    'keyType',
    'kind',
    'label',
    'list',
    'loop',
    'low',
    'manifest',
    'marginHeight',
    'marginWidth',
    'max',
    'maxLength',
    'media',
    'mediaGroup',
    'method',
    'min',
    'minLength',
    'multiple',
    'muted',
    'name',
    'nonce',
    'noValidate',
    'open',
    'optimum',
    'pattern',
    'placeholder',
    'playsInline',
    'poster',
    'preload',
    'readOnly',
    'rel',
    'required',
    'reversed',
    'rows',
    'rowSpan',
    'sandbox',
    'scope',
    'scoped',
    'scrolling',
    'seamless',
    'selected',
    'shape',
    'size',
    'sizes',
    'span',
    'src',
    'srcDoc',
    'srcLang',
    'srcSet',
    'start',
    'step',
    'summary',
    'target',
    'type',
    'useMap',
    'value',
    'width',
    'wmode',
    'wrap',

    // Standard HTML Attributes:
    'accessKey',
    // 'className',
    'contentEditable',
    'contextMenu',
    'dir',
    'draggable',
    'hidden',
    'id',
    'lang',
    'slot',
    'spellCheck',
    'style',
    'title',
    'translate',
    
    // accessibilities:
    'tabIndex',

    // values:
    'defaultValue',

    // more:
    'referrerPolicy',
    'ping',
]
                            .sort()
                            .map((prop, index, props) => (
                                <React.Fragment key={index}>
                                    <code>{ prop }</code>
                                    { index < (props.length - 1) ? ', ' : undefined }
                                </React.Fragment>
                            ))
                        }
                        </p>
                        <p>
                            Example:
                        </p>
                        <TypeScriptCode>{`
<Element tag='a' href='http://www.google.com' target='_blank'>
    hello world
</Element>
                        `}</TypeScriptCode>
                        <p>
                            Rendered to:
                        </p>
                        <TypeScriptCode>{`
<a href="http://www.google.com" target="_blank">
    hello world
</a>
                        `}</TypeScriptCode>
                    </article>
                </Section>
            </Main>
        </>
    )
}

export default ElementPage
