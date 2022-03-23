import React from 'react'

import { CurrentNestedComponent, LinkContentPage, LinkButtonPage, useComponentInfo, SectionPreviewProperty, SectionPreviewPropertyProps, CurrentComponent } from './common'
import { Warning } from './Info'
import {
    SectionPropertyNudeProps,
} from './common@Basic'
import {
    SectionPropertyNude as ListSectionPropertyNude,
    SectionPropertyMild as ListSectionPropertyMild,
} from './common@List'



export const SectionPropertyNude = ({ description, ...props }: SectionPropertyNudeProps) => {
    return (
        <ListSectionPropertyNude {...props} description={
            description
            ??
            <>
                <p>
                    Changes the default value of <code>nude</code> property of <CurrentComponent />&apos;s children.
                </p>
                <p>
                    Note: one/more children may <em>override</em> or <em>ignore</em> this property.
                </p>
            </>
        } />
    );
};
export const SectionPropertyMild = ({ description, ...props }: SectionPropertyNudeProps) => {
    return (
        <ListSectionPropertyMild {...props} description={
            description
            ??
            <>
                <p>
                    Changes the default value of <code>mild</code> property of <CurrentComponent />&apos;s children.
                </p>
                <p>
                    Note: one/more children may <em>override</em> or <em>ignore</em> this property.
                </p>
            </>
        } />
    );
};
