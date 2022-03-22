import React from 'react'

import { CurrentComponent, LinkCollapsePage, SectionPreviewProperty, SectionPreviewPropertyProps, useComponentInfo } from './common'

import {
    SectionPropertyLazyProps,
    SectionPropertyLazy         as PopupSectionPropertyLazy,
} from './common@Popup'



export const SectionPropertyLabelAndContent = ({ titleTag = 'h2', propertySuffix = false, property = 'label', properties = 'Labels and Contents', description, children, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    A <strong>label</strong> and <strong>content</strong> are the most important parts of the <CurrentComponent />.
                    You should to define them for the <CurrentComponent /> to be meaningful.
                </p>
                
                {children}
            </>
        } />
    );
}
export const SectionPropertyLabel = ({ titleTag = 'h3', propertySuffix = false, property = 'label', properties = 'Labels', description, ...restProps }: SectionPreviewPropertyProps) => {
    const { nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Place the <strong>title</strong> or a <strong>short label</strong> on the <code>{`<${nestedComponentName} label='An Interesting Thing'>`}</code>.<br />
                    You can use a <strong>JSX expression</strong> like this one: <code>{`<${nestedComponentName} label={<>An <em>Interesting</em> Thing</>}>`}</code>.
                </p>
                <p>
                    We named this property <code>label</code> because we wanted to <em>preserve</em> the original HTML <code>title</code> property.
                </p>
                <p>
                    The default <strong>tag</strong> of the <code>label</code> is <code>h1</code>.<br />
                    You can change the <strong>tag</strong> and/or the <strong>role</strong> by assigning: <code>{`<${nestedComponentName} tag='div' role='heading'>`}</code>.
                </p>
            </>
        } />
    );
};
export const SectionPropertyChildren = ({ titleTag = 'h3', propertySuffix = false, property = 'children', properties = 'Contents', description, ...restProps }: SectionPreviewPropertyProps) => {
    const { nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Place a detailed content between the <code>{`<${nestedComponentName}>`}</code> and <code>{`</${nestedComponentName}>`}</code>.
                    The content can be mixed of strings, paragraphs, articles, and a complex <em>JSX elements</em>.
                </p>
            </>
        } />
    );
};



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



export const SectionPropertyLazy = ({ description, activeAlias = 'expanded', passiveAlias = 'folded', ...restProps }: SectionPropertyLazyProps) => {
    return (
        <PopupSectionPropertyLazy activeAlias={activeAlias} passiveAlias={passiveAlias} {...restProps} />
    );
};



export const SectionCustomizingCollapse = ({ titleTag = 'h2', propertySuffix = false, property = 'collapse', properties = 'Customizing the Collapse', description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    You can replace the default <LinkCollapsePage /> with your <strong>custom collapse</strong>.
                </p>
                <p>
                    Assign the <code>{property}</code> property with your <strong>custom collapse JSX</strong>.
                </p>
            </>
        } />
    );
};
