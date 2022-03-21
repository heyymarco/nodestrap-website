import React from 'react'

import { CurrentComponent, CurrentNestedComponent, useComponentInfo, SectionPreviewProperty, SectionPreviewPropertyProps, ParagraphDefaultValue, LinkReactLazyLinkPage, LinkLoadableComponentsLinkPage } from './common'
import { DetailSpecItem, SpecList } from './SpecList';
import { TypeScriptCode } from './Code';

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
                    <ParagraphDefaultValue property='active' />
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
                    <ParagraphDefaultValue property='enabled' />
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



export interface SectionPropertyTargetRefProps extends SectionPreviewPropertyProps {
    componentHasChildren ?: boolean
}
export const SectionPropertyTargetRef      = ({ propertySuffix = true, property = 'targetRef'     , properties = 'Target Element', description, componentHasChildren = true, ...restProps }: SectionPropertyTargetRefProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Decides which the <strong>DOM element</strong> for the <CurrentComponent /> to <em>hover</em> over it.
                </p>
                <p>
                    You can use <code>useRef()</code> or <code>useState()</code> to assign to the <code>{property}</code>.
                </p>
                <p>
                    In most cases, using <code>useRef()</code> is <em>preferable</em>,
                    as long as the <strong>target DOM element</strong> remains the same between renders.
                </p>
                <p>
                    An example using <code>useRef()</code>:
                </p>
                <TypeScriptCode>{`
export default function FooComponent() {
    const buttonRef = useRef(null);

    return (
        <>
            <Button
                elmRef={buttonRef}
                theme='success'
                size='lg'
            >
                Do Something
            </Button>
            <${componentName}
                targetRef={buttonRef}
                theme='warning'
                popupPlacement='bottom'
                active={true}
            ${!componentHasChildren ? '/>' : `>
                hello world
            </${componentName}>`}
        </>
    );
}
                `}</TypeScriptCode>
                <p>
                    An example using <code>useState()</code>:
                </p>
                <TypeScriptCode>{`
export default function FooComponent() {
    const [buttonRef, setButtonRef] = useState(null);

    return (
        <>
            <Button
                elmRef={setButtonRef}
                theme='success'
                size='lg'
            >
                Do Something
            </Button>
            <${componentName}
                targetRef={buttonRef}
                theme='warning'
                popupPlacement='bottom'
                active={true}
            ${!componentHasChildren ? '/>' : `>
                hello world
            </${componentName}>`}
        </>
    );
}
                `}</TypeScriptCode>
            </>
        } />
    );
};
export interface SectionPropertyPopupPlacementProps extends SectionPreviewPropertyProps {
    relativeTo ?: React.ReactNode
    hoverElm   ?: React.ReactNode
}
export const SectionPropertyPopupPlacement = ({ propertySuffix = true, property = 'popupPlacement', properties = 'Placements'    , description, relativeTo = <strong>target element</strong>, hoverElm = <CurrentComponent />, children, ...restProps }: SectionPropertyPopupPlacementProps) => {
    return (
        <SectionPreviewProperty {...restProps} propertySuffix={propertySuffix} property={property} properties={properties} specList={children} description={
            description
            ??
            <>
                <p>
                    Decides which location (relative to the {relativeTo}) for the {hoverElm} to hover.
                </p>
            </>
        } />
    );
};
export const SectionPropertyPopupOffset    = ({ propertySuffix = true, property = 'popupOffset'   , properties = 'Offset'        , description, relativeTo = <strong>target element</strong>, hoverElm = <CurrentComponent />, ...restProps }: SectionPropertyPopupPlacementProps) => {
    return (
        <SectionPreviewProperty {...restProps} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Makes a gap between the {hoverElm} and the {relativeTo}.
                </p>
                <p>
                    Assign a <strong>positive number</strong> to make a gap.<br />
                    Assign a <strong>negative number</strong> to make the {hoverElm} inset to the {relativeTo}.
                </p>
                <p>
                    Currently, the <code>{property}</code> only accepts a <code>Number</code> represents the distance in <strong>pixel unit</strong>.
                    In the future it may accept a <code>String</code> represents for other units.
                </p>
            </>
        } />
    );
};
export const SectionPropertyPopupShift     = ({ propertySuffix = true, property = 'popupShift'    , properties = 'Shift'         , description, relativeTo = <strong>target element</strong>, hoverElm = <CurrentComponent />, ...restProps }: SectionPropertyPopupPlacementProps) => {
    return (
        <SectionPreviewProperty {...restProps} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Adjusts the <em>cross axis location</em> of the {hoverElm} relative to the {relativeTo}.
                </p>
                <p>
                    Assign a <strong>positive number</strong> to make the location more <code>forward</code> (relative to the writing direction).<br />
                    Assign a <strong>negative number</strong> to make the location more <code>backward</code> (relative to the writing direction).
                </p>
                <p>
                    Currently, the <code>{property}</code> only accepts a <code>Number</code> represents the distance in <strong>pixel unit</strong>.
                    In the future it may accept a <code>String</code> represents for other units.
                </p>
            </>
        } />
    );
};
export const SectionPropertyPopupAutoFlip  = ({ propertySuffix = true, property = 'popupAutoFlip' , properties = 'Auto Flip'     , description, defaultValue = false, ...restProps }: SectionPreviewPropertyProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Changes the <code>popupPlacement</code> to the opposite location (eg: <code>{`popupPlacement='top'`}</code> to <code>{`popupPlacement='bottom'`}</code>)
                    if the original location causes the <CurrentComponent /> to be <strong>out of view</strong> in the container.
                </p>
                <p>
                    This property is <strong>{defaultValue ? 'enabled' : 'disabled'} by default</strong>.
                    To {defaultValue ? 'disabled' : 'enabled'} it, assign <code>{`<${componentName} ${property}={${!defaultValue}}>`}</code>.
                </p>
            </>
        } />
    );
};
export const SectionPropertyPopupAutoShift = ({ propertySuffix = true, property = 'popupAutoShift', properties = 'Auto Shift'    , description, defaultValue = false, ...restProps }: SectionPreviewPropertyProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Moves the <code>popupPlacement</code> to the nearest original location
                    if the original location causes the <CurrentComponent /> to be <strong>out of view</strong> in the container.
                </p>
                <p>
                    This property is <strong>{defaultValue ? 'enabled' : 'disabled'} by default</strong>.
                    To {defaultValue ? 'disabled' : 'enabled'} it, assign <code>{`<${componentName} ${property}={${!defaultValue}}>`}</code>.
                </p>
            </>
        } />
    );
};



export interface SectionPropertyLazyProps extends SectionPreviewPropertyProps {
    activeAlias  ?: string
    passiveAlias ?: string
}
export const SectionPropertyLazy = ({ titleTag = 'h2', propertySuffix = true, property = 'lazy', specList, description, activeAlias = 'shown', passiveAlias = 'hidden', ...restProps }: SectionPropertyLazyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} specList={
            specList
            ??
            <SpecList>
                <DetailSpecItem code='true'>
                    <p>
                        The <CurrentComponent />&apos;s <code>children</code> are rendered <em>only if</em> the <CurrentComponent /> is <strong>{activeAlias}</strong>.
                    </p>
                </DetailSpecItem>
                <DetailSpecItem code='false'>
                    <p>
                        The <CurrentComponent />&apos;s <code>children</code> are <em>always</em> rendered.
                    </p>
                    <ParagraphDefaultValue property='lazy' />
                </DetailSpecItem>
            </SpecList>
        } description={
            description
            ??
            <>
                <p>
                    Prevents an unnecessary rendering of <CurrentComponent />&apos;s <code>children</code>, <em>when</em> the <CurrentComponent /> is currently <strong>{passiveAlias}</strong>.
                </p>
                <p>
                    This is useful to combine with <LinkReactLazyLinkPage /> or <LinkLoadableComponentsLinkPage />.
                </p>
            </>
        } />
    );
};
