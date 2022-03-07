import React from 'react'

import { CurrentComponent, LinkIconPage, SectionPreviewProperty, SectionPreviewPropertyProps } from './common'



export const SectionPropertyOnActiveChange = ({ titleTag = 'h4', propertySuffix = true, property = 'onActiveChange', specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} description={
            description
            ??
            <>
                <p>
                    Fires when the user clicks the <strong>close button</strong> on the <CurrentComponent />.
                </p>
                <p>
                    You have to implement an <em>event handler</em> to change your state, then the state changes the <code>active</code> property.
                </p>
            </>
        } />
    );
};



export const SectionPropertyIcon = ({ propertySuffix = false, property = 'icon', properties = 'Customizing Icon', specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Change the default icon with your icon. There are some method to change it:
                </p>
                <p>
                    1. Assign <code>{property}</code> property with a <code>null</code> or <code>false</code> or <code>{`<></>`}</code> to <strong>remove</strong> the default icon.
                </p>
                <p>
                    2. Assign <code>{property}</code> property with a <code>JSX.Element</code> to replace the default icon with your <strong>custom component</strong>.
                </p>
                <p>
                    3. Assign <code>{property}</code> property with a <code>String</code> to replace the default icon with an <strong>icon name</strong> listed in <LinkIconPage />.
                </p>
            </>
        } />
    );
};

export const SectionPropertyControl = ({ propertySuffix = false, property = 'control', properties = 'Customizing Control (Close Button)', specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Change the default icon with your icon. There are some method to change it:
                </p>
                <p>
                    1. Assign <code>{property}</code> property with a <code>null</code> or <code>false</code> or <code>{`<></>`}</code> to <strong>remove</strong> the default close button.
                </p>
                <p>
                    2. Assign <code>{property}</code> property with a <code>JSX.Element</code> to replace the default close button with your <strong>custom component</strong>.
                </p>
            </>
        } />
    );
};