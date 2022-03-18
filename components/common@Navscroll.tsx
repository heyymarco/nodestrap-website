import React from 'react'

import { CurrentNestedComponent, ParagraphDefaultValue, SectionPreviewProperty, SectionPreviewPropertyProps, useComponentInfo } from './common';
import { DetailSpecItem, SpecList } from './SpecList';

import {
    SectionPropertyActiveProps,
    SectionPropertyActive         as NavButtonSectionPropertyActive,
} from './common@NavButton'



export const SectionPropertyActive  = ({ specList, description, highlightBasedOn = <>the visibility of the <strong>related section</strong></>, highlightCondition=<>the <strong>related section</strong> is <em>visible</em> within a certain threshold</>, ...restProps }: SectionPropertyActiveProps) => {
    return (
        <NavButtonSectionPropertyActive {...restProps} highlightBasedOn={highlightBasedOn} highlightCondition={highlightCondition} />
    );
};



export const SectionPropertyChildren = ({ titleTag = 'h2', property = 'children', properties = 'Client Side Navigation', description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Place a <code>{`<Link>`}</code> in <CurrentNestedComponent /> to make <CurrentNestedComponent /> <strong>automatically highlighted</strong> based on <em>current URL</em> and the <em>target URL</em>.
                </p>
                <p>
                    It works well with <strong>Next JS</strong>, <strong>Gatsby JS</strong>, <strong>React Router</strong> and <strong>React Remix</strong>.
                </p>
            </>
        } />
    );
};

export const SectionPropertyMatchingUrl = ({ titleTag = 'h2', property = 'children', properties = 'Configuring the Matching URL', description, children, ...restProps }: SectionPreviewPropertyProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    There are 2 additional properties for <u>determining the matching URL</u>:
                </p>
                
                { children }
            </>
        } />
    );
};
export const SectionPropertyCaseSensitive = ({ propertySuffix = true, property = 'caseSensitive', properties = 'Case Sensitivity', specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} propertySuffix={propertySuffix} property={property} properties={properties} specList={
            specList
            ??
            <SpecList>
                <DetailSpecItem code='false'>
                    <p>
                        The string comparison is <strong>case insensitive</strong>.
                        A lowercase character and uppercase character are treated as the <strong>same</strong> thing.
                    </p>
                    <ParagraphDefaultValue property={property} />
                </DetailSpecItem>
                <DetailSpecItem code='true'>
                    <p>
                        The string comparison is <strong>case sensitive</strong>.
                        A lowercase character and uppercase character are treated as the <strong>different</strong> thing.
                    </p>
                </DetailSpecItem>
            </SpecList>
        } description={
            description
            ??
            <>
                <p>
                    Defines how the <strong>current page url</strong> and <strong>destination url</strong> are compared by <strong>string sensivity</strong>.
                </p>
            </>
        } />
    );
};
export const SectionPropertyEnd = ({ propertySuffix = true, property = 'end', properties = 'End of URL', specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} propertySuffix={propertySuffix} property={property} properties={properties} specList={
            specList
            ??
            <SpecList>
                <DetailSpecItem code='false'>
                    <p>
                        The <strong>destination url</strong> is an <strong>exact path</strong> or a <strong>sub path</strong>.<br />
                        It may <strong>have</strong> one/more sub path(s).
                    </p>
                    <p>
                        If the <strong>current page url</strong> is more specific (has more sub path(s)) than <strong>destination url</strong>, it still <strong>matches</strong>.
                    </p>
                    <p>
                        This is the <strong>default</strong> value if the <code>{property}</code> value is not specified and the <strong>destination url</strong> is other than <strong>home page</strong> (<code>{`'/'`}</code> or <code>{`''`}</code>).
                    </p>
                </DetailSpecItem>
                <DetailSpecItem code='true'>
                    <p>
                        The <strong>destination url</strong> is an <strong>exact path</strong>.<br />
                        It may <strong>not</strong> have sub path(s).
                    </p>
                    <p>
                        If the <strong>current page url</strong> is more specific (has more sub path(s)) than <strong>destination url</strong>, it does <strong>not</strong> match.
                    </p>
                    <p>
                        This is the <strong>default</strong> value if the <code>{property}</code> value is not specified and the <strong>destination url</strong> is a <strong>home page</strong> (<code>{`'/'`}</code> or <code>{`''`}</code>).
                    </p>
                </DetailSpecItem>
            </SpecList>
        } description={
            description
            ??
            <>
                <p>
                    Defines whether the <strong>destination url</strong> is a <strong>sub path</strong> or an <strong>exact path</strong>.
                </p>
            </>
        } />
    );
};
