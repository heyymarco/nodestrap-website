import React from 'react'

import { CurrentComponent, LinkNavPage, LinkTogglerMenuButtonPage, SectionPreviewProperty, SectionPreviewPropertyProps, useComponentInfo } from './common'
import { Warning } from './Info';



export const SectionPropertyChildren = ({ titleTag = 'h2', propertySuffix = false, property = 'children', properties = <>Setting the Navigation Links</>, specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    <CurrentComponent /> needs a <LinkNavPage /> (usually) or another component as a single child.
                    The <CurrentComponent /> decides the best responsive mode (desktop or mobile version) <em>based on screen width and overflow detection</em> and then the child displays the menus based on <CurrentComponent />&apos;s decision.
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
export const SectionPropertyChildrenAdv = ({ titleTag = 'h3', propertySuffix = false, property = 'children', properties = <>Custom Navigation Links</>, specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    You can also place any component for making a complex navigation menus.
                    Just place <code>{`<YourCustomMenus>`}</code> between <code>{`<${componentName}></${componentName}>`}</code>.
                    The theme, size, and other variant properties are <em>automatically injected</em> to that component via <code>props</code>.
                    You can re-override the properties by explicitly assigning the <code>props</code>.
                </p>
            </>
        } />
    );
};

export const SectionPropertyLogo = ({ titleTag = 'h2', propertySuffix = false, property = 'logo', properties = <>Setting the Logo</>, specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Additionally, you can add a logo into <CurrentComponent /> by assigning <code>{`<${componentName} logo={<YourLogo />}>`}</code>.
                    It can be an <code>{`<img>`}</code> or any <strong>JSX expression</strong>.
                </p>
            </>
        } />
    );
};

export const SectionPropertyToggler = ({ titleTag = 'h2', propertySuffix = false, property = 'toggler', properties = <>Customizing the Toggler Button</>, specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    You can replace the built-in <LinkTogglerMenuButtonPage /> with a <strong>custom button</strong> by assigning <code>{`<${componentName} toggler={<YourCustomButton />}>`}</code>.
                </p>
            </>
        } />
    );
};

export const SectionPropertyRearrangeLogoMenusToggler = ({ titleTag = 'h2', propertySuffix = false, property = 'logo_toggler', properties = <>Rearrange the Logo, Menus, and Toggler</>, specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    You can swap the location of the <strong>logo</strong>, <strong>menus</strong>, and the <strong>toggler button</strong> by configuring the <CurrentComponent />&apos;s variables.
                </p>
                <p>
                    The <CurrentComponent /> is built using css <code>grid</code>.
                    There is only <em>single explicit grid area</em>, named <code>menus</code>, used by a container element of <CurrentComponent />&apos; links.
                    The logo and toggler button are placed in <em>implicit grid area</em>.
                </p>
                <p>
                    You can swap the location of the logo and toggler button by defining the css <code>grid-area</code> property.
                </p>
                <p>
                    The <CurrentComponent />&apos; links (a list) is inside the container element (made by css <code>grid</code> too).
                    To align the links just define the css <code>justify-self</code> to <code>start</code> or <code>end</code> value.
                </p>
                <Warning>
                    <p>
                        Note: Because the <CurrentComponent />&apos;s variables are global configuration, so all <CurrentComponent /> instances are affected.
                    </p>
                </Warning>
            </>
        } />
    );
};
