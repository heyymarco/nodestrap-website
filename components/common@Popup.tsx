import React from 'react'

import { CurrentNestedComponent, useComponentInfo, SectionPreviewPropertyProps } from './common'
import { DetailSpecItem, SpecList } from './SpecList';

import {
    SectionPropertyActive as BasicSectionPropertyActive,
    ParagraphSetParentActive,
    
    ParagraphSetParentDisabled,
    SectionPropertyEnabled as BasicSectionPropertyEnabled,
} from './common@Indicator'



export const SectionPropertyActive  = ({ specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    const { nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <BasicSectionPropertyActive {...restProps} specList={
            specList
            ??
            <SpecList>
                <DetailSpecItem code='true'>
                    <p>
                        At this state, the <CurrentNestedComponent /> is currently <strong>shown</strong>.
                    </p>
                </DetailSpecItem>
                <DetailSpecItem code='false'>
                    <p>
                        At this state, the <CurrentNestedComponent /> is currently <strong>hidden</strong>.
                    </p>
                    <p>
                        This is the <strong>default</strong> value if the <code>active</code> value is not specified.
                    </p>
                </DetailSpecItem>
            </SpecList>
        } description={
            description
            ??
            <>
                <p>
                    Decides the <CurrentNestedComponent /> is currently <strong>shown</strong> or <strong>hidden</strong>.
                </p>
                <p>
                    To show <CurrentNestedComponent />, set <code>{`<${nestedComponentName} active={true}>`}</code>.
                </p>
                <ParagraphSetParentActive />
            </>
        } />
    );
};

export const SectionPropertyEnabled = ({ specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    const { nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <BasicSectionPropertyEnabled {...restProps} specList={
            specList
            ??
            <SpecList>
                <DetailSpecItem code='true'>
                    <p>
                        At this state, the <CurrentNestedComponent /> is appear <strong>normal</strong>.
                    </p>
                    <p>
                        This is the <strong>default</strong> value if the <code>enabled</code> value is not specified.
                    </p>
                </DetailSpecItem>
                <DetailSpecItem code='false'>
                    <p>
                        At this state, the <CurrentNestedComponent /> is appear <strong>disabled</strong>.
                    </p>
                </DetailSpecItem>
            </SpecList>
        } description={
            description
            ??
            <>
                <p>
                    Makes the <CurrentNestedComponent /> appear <strong>disabled</strong>.
                </p>
                <p>
                    To make <CurrentNestedComponent /> appear disabled, set <code>{`<${nestedComponentName} enabled={false}>`}</code>.
                </p>
                <ParagraphSetParentDisabled />
            </>
        } />
    );
};
