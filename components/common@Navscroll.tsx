import React from 'react'

import { CurrentComponent, CurrentNestedComponent, SectionPreviewProperty, SectionPreviewPropertyProps, useComponentInfo } from './common';
import { Warning } from './Info';

import {
    SectionPropertyActiveProps,
    SectionPropertyActive         as NavButtonSectionPropertyActive,
} from './common@NavButton'
import { TypeScriptCode } from './Code';



export const SectionPropertyActive  = ({ specList, description, highlightBasedOn = <>the visibility of the <strong>related section</strong></>, highlightCondition=<>the <strong>related section</strong> is <em>visible</em> within a certain threshold</>, ...restProps }: SectionPropertyActiveProps) => {
    return (
        <NavButtonSectionPropertyActive {...restProps} highlightBasedOn={highlightBasedOn} highlightCondition={highlightCondition} />
    );
};



export const SectionPropertyChildren          = ({ titleTag = 'h2', property = 'children', properties = 'Mapping the Related Sections', description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    In order to the <CurrentComponent /> works correctly, you must define <CurrentNestedComponent />s in the <strong>exact number</strong> as the <strong>related sections</strong>.
                </p>
                <p>
                    For example if you have <strong>6 sections</strong>, you should define <strong>6 <CurrentNestedComponent /></strong> inside the <CurrentComponent />.
                </p>
            </>
        } />
    );
};
export const SectionPropertyNestedChildren    = ({ titleTag = 'h3', property = 'children > children', properties = 'Mapping the Related Nested Sections', description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    <em>Optionally</em>, you can map the <strong>related nested sections</strong>.
                </p>
                <p>
                    To do that, place a nested <CurrentComponent /> in the related <CurrentNestedComponent /> and then define <CurrentNestedComponent />s in the <strong>exact number</strong> as the <strong>related nested sections</strong>.
                </p>
                <Warning>
                    <p>
                        The nested <CurrentComponent /> should have <code>targetRef</code> <strong>unassigned</strong>.
                    </p>
                    <p>
                        If you assign the <code>targetRef</code> other than <code>undefined</code>, the nested <CurrentComponent /> will <strong>not be treated as a nested</strong> <CurrentComponent />.
                    </p>
                </Warning>
            </>
        } />
    );
};
export const SectionPropertyTargetSelector    = ({ titleTag = 'h3', property = 'targetSelector', properties = 'Filters Out Non-Section Elements', description, children, ...restProps }: SectionPreviewPropertyProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            <>
                {description
                ??
                <>
                    <p>
                        To filter out the <strong>foreign elements</strong> (in this case the <code>{`<h1>`}</code> and <code>{`<p>`}</code>), you should define the <strong>section selector</strong> (in this case the <strong>section</strong> is <code>{`<section>`}</code>).
                    </p>
                    <p>
                        Assign <code>{`<${componentName} targetSelector='section'>`}</code>, so the <strong>section</strong> is defined as <code>{`<section>`}</code>.
                    </p>
                    <p>
                        If <strong>your sections</strong> are other than <code>{`<section>`}</code>, for example <code>{`<div className='chapter'>`}</code> and <code>{`<div className='section'>`}</code>, assign <code>{`<${componentName} targetSelector='div.chapter, div.section'>`}</code>.
                    </p>
                    <Warning>
                        <p>
                            If you not define the <code>{property}</code> property, the <code>'*'</code> (universal selector) will be used.<br />
                            So <strong>any elements</strong> inside the <code>targetRef</code> will be assumed as <em>the sections</em>.
                        </p>
                    </Warning>
                </>}
                
                {children}
            </>
        } />
    );
};
export const SectionPropertyTargetFilter      = ({ titleTag = 'h4', property = 'targetFilter', properties = 'Filters Using Function', description, ...restProps }: SectionPreviewPropertyProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    In some cases, filtering using <em>css selector</em> may be difficult, so we provide a <strong>function way</strong>.
                    Assign <strong>your filter function</strong> to <code>{`<${componentName} targetFilter={yourFilterFunction}>`}</code>.
                </p>
                <p>
                    The function will receive a <strong>DOM reference element</strong> as the input parameter and then
                    it should return <code>true</code> for indicating the matching section element or <code>false</code> for non-matching element.
                </p>
                <p>
                    Here the code for the equivalent as <code>{`targetSelector='div.chapter, div.section'`}</code>:
                </p>
                <TypeScriptCode>{`
const sectionFilter = (elm) => (elm.tagName === 'DIV') && ['chapter', 'section'].some((c) => elm.classList.contains(c));
                `}</TypeScriptCode>
                <p></p>
                <Warning>
                    <p>
                        <em>Your filter function</em> should be <strong>stable by reference</strong>.
                        This means that the function should be <strong>the same object</strong> on every render.<br />
                        Declaring a function at the <em>top level module</em> is guaranteed to be a stable reference.
                    </p>
                    <p>
                        If you assign an <em>unstable by reference</em>, for example a function declared in another function, <em>it still works</em> but at the cost of triggering unnecessary renders.<br />
                        It can be fixed by wrapping the function with <code>useCallback</code> hook.
                    </p>
                </Warning>
            </>
        } />
    );
};
export const SectionPropertyTargetRef         = ({ titleTag = 'h3', property = 'targetRef', properties = 'Connecting the Map', description, children, ...restProps }: SectionPreviewPropertyProps) => {
    const { componentName, nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            <>
                {description
                ??
                <>
                    <p>
                        In order to the <CurrentComponent /> <em>follows</em> the <strong>scrollable container</strong>, assign <code>{`<${componentName} targetRef={yourScrollableContainerRef}>`}</code>.
                    </p>
                    <p>
                        You can use <code>useRef()</code> or <code>useState()</code> to assign to the <code>{property}</code>.
                    </p>
                    <p>
                        In most cases, using <code>useRef()</code> is <em>preferable</em>,
                        as long as the <strong>target DOM element</strong> remains the same between renders.
                    </p>
                    <p>
                        An example using <code>useRef()</code>:
                    </p>
                    <TypeScriptCode>{`
export default function FooComponent() {
    const scrollableContainerRef = useRef(null);

    return (
        <>
            <article
                elmRef={scrollableContainerRef}
            >
                <section></section>
                <section></section>
                <section></section>
            </article>
            <${componentName}
                targetRef={scrollableContainerRef}
            >
                <${nestedComponentName}></${nestedComponentName}>
                <${nestedComponentName}></${nestedComponentName}>
                <${nestedComponentName}></${nestedComponentName}>
            </${componentName}>
        </>
    );
}
                    `}</TypeScriptCode>
                    <p>
                        An example using <code>useState()</code>:
                    </p>
                    <TypeScriptCode>{`
export default function FooComponent() {
    const [scrollableContainerRef, setScrollableContainerRef] = useState(null);

    return (
        <>
            <article
                elmRef={setScrollableContainerRef}
            >
                <section></section>
                <section></section>
                <section></section>
            </article>
            <${componentName}
                targetRef={scrollableContainerRef}
            >
                <${nestedComponentName}></${nestedComponentName}>
                <${nestedComponentName}></${nestedComponentName}>
                <${nestedComponentName}></${nestedComponentName}>
            </${componentName}>
        </>
    );
}
                    `}</TypeScriptCode>
                    
                    {children}
                </>}
            </>
        } />
    );
};
export const SectionPropertyMultipleTargetRef = ({ titleTag = 'h4', property = 'targetRef', properties = 'Connecting to Multiple Maps', description, ...restProps }: SectionPreviewPropertyProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            <>
                {description
                ??
                <>
                    <p>
                        You can connect the <strong>scrollable container</strong> to multiple <CurrentComponent />s.
                    </p>
                    <p>
                        Just assign <code>yourScrollableContainerRef</code> to multiple <code>{`<${componentName} targetRef={yourScrollableContainerRef}>`}</code>.
                    </p>
                </>}
            </>
        } />
    );
};