import React from 'react'

import { CurrentComponent, CurrentNestedComponent, ParagraphDefaultValue, SectionPreviewProperty, SectionPreviewPropertyProps, useComponentInfo } from './common';
import { DetailSpecItem, SpecList } from './SpecList';
import { Warning } from './Info';

import {
    SectionPropertyActiveProps,
    SectionPropertyActive         as NavButtonSectionPropertyActive,
} from './common@NavButton'



export const SectionPropertyActive  = ({ specList, description, highlightBasedOn = <>the visibility of the <strong>related section</strong></>, highlightCondition=<>the <strong>related section</strong> is <em>visible</em> within a certain threshold</>, ...restProps }: SectionPropertyActiveProps) => {
    return (
        <NavButtonSectionPropertyActive {...restProps} highlightBasedOn={highlightBasedOn} highlightCondition={highlightCondition} />
    );
};



export const SectionPropertyChildren = ({ titleTag = 'h2', property = 'children', properties = 'Mapping the Related Sections', description, ...restProps }: SectionPreviewPropertyProps) => {
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
export const SectionPropertyNestedChildren = ({ titleTag = 'h3', property = 'children > children', properties = 'Mapping the Related Nested Sections', description, ...restProps }: SectionPreviewPropertyProps) => {
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
export const SectionPropertyTargetSelector = ({ titleTag = 'h3', property = 'targetSelector', properties = 'Filters Out Non-Section Elements', description, ...restProps }: SectionPreviewPropertyProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
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
            </>
        } />
    );
};