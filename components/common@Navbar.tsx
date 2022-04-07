import React from 'react'

import { CurrentComponent, LinkNavPage, SectionPreviewProperty, SectionPreviewPropertyProps } from './common'



export const SectionPropertyChildren = ({ titleTag = 'h2', propertySuffix = false, property = 'children', properties = <>Setting the Menus</>, specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    <CurrentComponent /> needs a <LinkNavPage /> (usually) or another component as a single child.
                    The <CurrentComponent /> determines the best responsive mode (desktop or mobile version) based on screen width and then the child displays the menus based on the <CurrentComponent /> request.
                </p>
                <p>
                    The <CurrentComponent /> should have a <strong>single child</strong> component.
                    The child becomes the <strong>menu list</strong> of <CurrentComponent />.
                    Placing a <em>multiple children</em> causes an <code>Error</code> to throw.
                </p>
                <p>
                    The child receives a <code>compact</code> parameter to determine the best orientation and/or the layout for desktop/mobile mode.
                    The <code>compact</code> parameter will be <code>false</code> on the desktop mode and will be <code>true</code> on the mobile mode.
                    See the code below:
                </p>
            </>
        } />
    );
};

