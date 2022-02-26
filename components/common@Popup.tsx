import React from 'react'

import { CurrentComponent, CurrentNestedComponent, useComponentInfo, SectionPreviewProperty, SectionPreviewPropertyProps, LinkIconPage } from './common'
import { DetailSpecItem, SpecList } from './SpecList';
import { Warning } from './Info';

import {
    SectionPropertyActive as BasicSectionPropertyActive,
    ParagraphSetParentActive,
} from './common@Indicator'



export const SectionPropertyActive           = ({ description, ...restProps }: SectionPreviewPropertyProps) => {
    const { nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} specList={
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
