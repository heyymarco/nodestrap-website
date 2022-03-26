import React from 'react'

import { CurrentComponent, LinkButtonIconPage, LinkNavscrollPage, SectionPreviewProperty, SectionPreviewPropertyProps, useComponentInfo } from './common'

import {
    SectionPropertyMild        as BasicSectionPropertyMild,
} from './common@Basic'
import {
    SectionPropertyMediaProps,
    SectionPropertyMedia          as ContentSectionPropertyMedia,
    SectionPropertyMediaCustomProps,
    SectionPropertyMediaCustom    as ContentSectionPropertyMediaCustom,
    SectionPropertyMediaExcludingProps,
    SectionPropertyMediaExcluding as ContentSectionPropertyMediaExcluding,
} from './common@Content'



export const SectionPropertyMild = ({ defaultValue = true, ...props }: SectionPreviewPropertyProps) => {
    return (
        <BasicSectionPropertyMild {...props} defaultValue={defaultValue} />
    );
};



export const SectionPropertyMedia          = ({ treatment=<><strong>styled to fill the available width &amp; height</strong> of <CurrentComponent />, while maintaining its <code>aspect-ratio</code></>, moreDescription, ...restProps }: SectionPropertyMediaProps) => {
    return (
        <ContentSectionPropertyMedia {...restProps} treatment={treatment} moreDescription={
            moreDescription
            ??
            <>
                <p>
                    The media that are bigger than the <CurrentComponent />&apos; size will be shrinked down so they are not cropped.
                    The media that are smaller than the <CurrentComponent />&apos; size remains unchanged.
                </p>
            </>
        } />
    );
};
export const SectionPropertyMediaCustom    = ({ warnDisplayBlock = false, ...restProps }: SectionPropertyMediaCustomProps) => {
    return (
        <ContentSectionPropertyMediaCustom {...restProps} warnDisplayBlock={warnDisplayBlock} />
    );
};
export const SectionPropertyMediaExcluding = ({ notTreatmentExample, ...restProps }: SectionPropertyMediaExcludingProps) => {
    return (
        <ContentSectionPropertyMediaExcluding {...restProps} notTreatmentExample={
            notTreatmentExample
            ??
            <>
                For example a custom <code>{`<img>`}</code>
            </>
        } />
    );
};



export const SectionPropertyInfiniteLoop = ({ titleTag = 'h2', property = 'infiniteLoop', properties = 'Infinite Loop' , description, ...restProps }: SectionPreviewPropertyProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} infiniteLoop={true}>`}</code> to make the <CurrentComponent /> have <em>infinite slides</em> by rearranged the slides in such a way that they appear to repeat themselves.
                </p>
            </>
        } />
    );
};



export const SectionCustomizingButtons = ({ titleTag = 'h2', property = 'button', properties = 'Customizing the Buttons' , description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    You can replace the default prev/next <LinkButtonIconPage /> with your <strong>custom buttons</strong>.
                </p>
                <p>
                    Assign the <code>prevBtn</code> and <code>nextBtn</code> properties with your <strong>custom button JSX</strong>.
                </p>
            </>
        } />
    );
};
export const SectionCustomizingNav = ({ titleTag = 'h2', property = 'nav', properties = 'Customizing the Navigation' , description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    You can replace the default <LinkNavscrollPage /> with your <strong>custom navigation</strong>.
                </p>
                <p>
                    Assign the <code>nav</code> property with your <strong>custom navigation JSX</strong>.
                </p>
            </>
        } />
    );
};
export const SectionCustomizingNavExternal = ({ titleTag = 'h3', property = 'scrollRef', properties = 'External Navigation' , description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    You can add a/some external <LinkNavscrollPage /> outside the <CurrentComponent />.
                </p>
                <p>
                    Assign the <code>scrollRef</code> property to <code>useRef()</code> variable, then assign the variable to a/some <code>{`<Navscroll targetRef={yourCarouselRef}>`}</code>.
                </p>
            </>
        } />
    );
};