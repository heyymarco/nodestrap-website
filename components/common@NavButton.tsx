import React from 'react'

import { CurrentComponent, CurrentNestedComponent, ParagraphDefaultValue, SectionPreviewProperty, SectionPreviewPropertyProps, useComponentInfo } from './common';
import { DetailSpecItem, SpecList } from './SpecList';

import {
    SectionPropertyActive         as IndicatorSectionPropertyActive,
} from './common@Indicator'



export const SectionPropertyActive  = ({ specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    const { nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <IndicatorSectionPropertyActive {...restProps} specList={
            specList
            ??
            <SpecList>
                <DetailSpecItem code='undefined'>
                    <p>
                        At this state, the <CurrentNestedComponent /> will be automatically <strong>highlighted</strong> if the <em>current url</em> matches the <strong>target URL</strong>.
                    </p>
                    <ParagraphDefaultValue property='active' />
                </DetailSpecItem>
                <DetailSpecItem code='true'>
                    <p>
                        At this state, the <CurrentNestedComponent /> is currently <strong>highlighted</strong>.
                    </p>
                </DetailSpecItem>
                <DetailSpecItem code='false'>
                    <p>
                        At this state, the <CurrentNestedComponent /> is currently <strong>not highlighted</strong>.
                    </p>
                    <ParagraphDefaultValue property='active' />
                </DetailSpecItem>
            </SpecList>
        } description={
            description
            ??
            <>
                <p>
                    <em>Manually</em> highlights the <CurrentNestedComponent />.
                </p>
                <p>
                    To make <CurrentNestedComponent /> active, set <code>{`<${nestedComponentName} active={true}>`}</code>.
                </p>
                <p>
                    To <em>automatically</em> highlight the <CurrentNestedComponent /> based on <em>current URL</em> and the <em>target URL</em>, do not assign <code>active</code> property -or- assign <code>{`active={undefined}`}</code>.
                </p>
            </>
        } />
    );
};



export const SectionPropertyChildren = ({ titleTag = 'h2', property = 'children', properties = 'Client Side Navigation', description, ...restProps }: SectionPreviewPropertyProps) => {
    const { nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Place a <code>{`<Link>`}</code> in <CurrentNestedComponent /> to make <CurrentComponent /> <strong>automatically highlighted</strong> based on <em>current URL</em> and the <em>target URL</em>.
                </p>
                <p>
                    It works well with <strong>Next JS</strong>, <strong>Gatsby JS</strong>, <strong>React Router</strong> and <strong>React Remix</strong>.
                </p>
            </>
        } />
    );
};
