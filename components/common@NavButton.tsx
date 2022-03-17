import React from 'react'

import { CurrentNestedComponent, ParagraphDefaultValue, SectionPreviewPropertyProps, useComponentInfo } from './common';
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
                        At this state, the <CurrentNestedComponent /> will be automatically <strong>selected</strong> if the <em>current url</em> matches the <strong>target URL</strong>.
                    </p>
                    <ParagraphDefaultValue property='active' />
                </DetailSpecItem>
                <DetailSpecItem code='true'>
                    <p>
                        At this state, the <CurrentNestedComponent /> is currently <strong>selected</strong> state.
                    </p>
                </DetailSpecItem>
                <DetailSpecItem code='false'>
                    <p>
                        At this state, the <CurrentNestedComponent /> is currently in <strong>normal</strong> state.
                    </p>
                    <ParagraphDefaultValue property='active' />
                </DetailSpecItem>
            </SpecList>
        } description={
            description
            ??
            <>
                <p>
                    <em>Manually</em> sets the <CurrentNestedComponent /> to <strong>selected</strong> state.
                </p>
                <p>
                    To make <CurrentNestedComponent /> active, set <code>{`<${nestedComponentName} active={true}>`}</code>.
                </p>
                <p>
                    To <em>automatically</em> sets the selected state based on <em>current URL</em> and the <em>target URL</em>, do not assign <code>active</code> property -or- assign <code>{`active={undefined}`}</code>.
                </p>
            </>
        } />
    );
};
