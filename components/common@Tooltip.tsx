import React from 'react'

import { CurrentNestedComponent, useComponentInfo, SectionPreviewPropertyProps, ParagraphDefaultValue } from './common'
import { DetailSpecItem, SpecList } from './SpecList';

import {
    SectionPropertyActive as PopupSectionPropertyActive,
} from './common@Popup'



export const SectionPropertyActive  = ({ specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    const { nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <PopupSectionPropertyActive {...restProps} specList={
            specList
            ??
            <SpecList>
                <DetailSpecItem code='undefined'>
                    <p>
                        At this state, the <CurrentNestedComponent /> will be automatically shown when the <em>target element</em> is <strong>hovered</strong> or <strong>focused</strong>, otherwise hidden.
                    </p>
                    <ParagraphDefaultValue code='active' />
                </DetailSpecItem>
                <DetailSpecItem code='true'>
                    <p>
                        At this state, the <CurrentNestedComponent /> is currently <strong>shown</strong>.
                    </p>
                </DetailSpecItem>
                <DetailSpecItem code='false'>
                    <p>
                        At this state, the <CurrentNestedComponent /> is currently <strong>hidden</strong>.
                    </p>
                </DetailSpecItem>
            </SpecList>
        } />
    );
};