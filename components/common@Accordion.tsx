import React from 'react'

import { CurrentComponent, LinkIconPage, SectionPreviewProperty, SectionPreviewPropertyProps } from './common'



export const SectionPropertyOnActiveChange = ({ titleTag = 'h4', propertySuffix = true, property = 'onActiveChange', specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} description={
            description
            ??
            <>
                <p>
                    Fires when the user clicks the <strong>label</strong> on the <CurrentComponent />.
                </p>
                <p>
                    You have to implement an <em>event handler</em> to change your state, then the state changes the <code>active</code> property.
                </p>
            </>
        } />
    );
};
