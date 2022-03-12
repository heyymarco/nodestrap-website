import React from 'react'
import { LinkListPage, SectionPreviewProperty, SectionPreviewPropertyProps } from './common';



export const SectionCustomizingList = ({ titleTag = 'h2', propertySuffix = false, property = 'list', properties = 'Customizing the List', description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    You can replace the default <LinkListPage /> with your <strong>custom list</strong>.
                </p>
                <p>
                    Assign the <code>{property}</code> property with your <strong>custom list JSX</strong>.
                </p>
            </>
        } />
    );
};
