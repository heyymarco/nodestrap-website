import React from 'react'

import { CurrentComponent, CurrentNestedComponent, useComponentInfo, SectionPreviewProperty, SectionPreviewPropertyProps, LinkIconPage } from './common'
import { DetailSpecItem, SpecList } from './SpecList';
import { Warning } from './Info';

import {
    SectionPropertyMild        as BasicSectionPropertyMild,
} from './common@Basic'



export const SectionPropertyMild = ({ setByDefault = true, ...props }: SectionPreviewPropertyProps) => {
    return (
        <BasicSectionPropertyMild {...props} setByDefault={setByDefault} />
    );
};



export const SectionPropertyActive           = ({ property = 'active'    , properties = 'Active State'                         , specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    const { nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} property={property} properties={properties} specList={
            specList
            ??
            <SpecList>
                <DetailSpecItem code='true'>
                    <p>
                        At this state, the <CurrentNestedComponent /> is currently <strong>selected</strong> or <strong>on</strong> state.
                    </p>
                </DetailSpecItem>
                <DetailSpecItem code='false'>
                    <p>
                        At this state, the <CurrentNestedComponent /> is currently in <strong>normal</strong> state.
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
                    Decides the <CurrentNestedComponent /> is currently <strong>selected</strong> or <strong>on</strong> state.
                </p>
                <p>
                    To make <CurrentNestedComponent /> active, set <code>{`<${nestedComponentName} active={true}>`}</code>.
                </p>
                <ParagraphSetParentActive />
            </>
        } />
    );
};
export const ParagraphSetParentActive        = () => {
    const { componentName, hasNestedComponent, nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <>
            {hasNestedComponent && <>
                <p>
                    You can also set the <code>active</code> at <code>{`<${componentName} active={true}>`}</code>, so the entire <CurrentNestedComponent />s are active.<br />
                    To make an exception in a/some <CurrentNestedComponent />(s), set <code>{`<${nestedComponentName} active={false} inheritActive={false}>`}</code>.<br />
                </p>
                <p>
                    Note: the <code>{`inheritActive={false}`}</code> prevents the active state on <CurrentComponent /> affecting the <CurrentNestedComponent />.
                </p>
            </>}
        </>
    );
};

export const SectionPropertyActiveNoOutlined = ({ property = 'outlined'  , properties = 'Active State cancels Outlined Variant'          , description, ...restProps }: SectionPreviewPropertyProps) => {
    const { nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={'h4'} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Assigning <code>{`<${nestedComponentName} active={true}>`}</code> will cancel out the <code>outlined</code> variant.
                </p>
            </>
        } />
    );
};
export const SectionPropertyActiveNoMild     = ({ property = 'mild'      , properties = 'Active State cancels Mild Variant'              , description, ...restProps }: SectionPreviewPropertyProps) => {
    const { nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={'h4'} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Assigning <code>{`<${nestedComponentName} active={true}>`}</code> will cancel out the <code>mild</code> variant.
                </p>
            </>
        } />
    );
};

export const SectionPropertyEnabled          = ({ property = 'enabled'   , properties = 'Disabled State'                       , specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    const { nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} property={property} properties={properties} specList={
            specList
            ??
            <SpecList>
                <DetailSpecItem code='true'>
                    <p>
                        At this state, all functionality of <CurrentNestedComponent /> are <strong>preserved</strong>.
                    </p>
                    <p>
                        This is the <strong>default</strong> value if the <code>enabled</code> value is not specified.
                    </p>
                </DetailSpecItem>
                <DetailSpecItem code='false'>
                    <p>
                        At this state, all/almost all functionality of <CurrentNestedComponent /> are <strong>disabled</strong>.
                    </p>
                </DetailSpecItem>
            </SpecList>
        } description={
            description
            ??
            <>
                <p>
                    Disables the <CurrentNestedComponent /> <strong>functionality</strong>.
                </p>
                <p>
                    To make <CurrentNestedComponent /> disabled, set <code>{`<${nestedComponentName} enabled={false}>`}</code>.
                </p>
                <ParagraphSetParentDisabled />
            </>
        } />
    );
};
export const ParagraphSetParentDisabled      = () => {
    const { componentName, hasNestedComponent, nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <>
            {hasNestedComponent && <>
                <p>
                    You can also set the <code>enabled</code> at <code>{`<${componentName} enabled={false}>`}</code>, so the entire <CurrentNestedComponent />s are disabled.<br />
                    To make an exception in a/some <CurrentNestedComponent />(s), set <code>{`<${nestedComponentName} enabled={true} inheritEnabled={false}>`}</code>.<br />
                </p>
                <p>
                    Note: the <code>{`inheritEnabled={false}`}</code> prevents the disabled state on <CurrentComponent /> affecting the <CurrentNestedComponent />.
                </p>
            </>}
        </>
    );
};

export const SectionPropertyReadOnly         = ({ property = 'readOnly'  , properties = `ReadOnly State`                       , specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    const { nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} property={property} properties={properties} specList={
            specList
            ??
            <SpecList>
                <DetailSpecItem code='true'>
                    <p>
                        At this state, the editing functionality of <CurrentNestedComponent /> is <strong>disabled</strong>.
                        You cannot make any changes to this component.
                    </p>
                </DetailSpecItem>
                <DetailSpecItem code='false'>
                    <p>
                        At this state, the editing functionality of <CurrentNestedComponent /> is <strong>preserved</strong>.
                        You can make any changes to this component.
                    </p>
                    <p>
                        This is the <strong>default</strong> value if the <code>readOnly</code> value is not specified.
                    </p>
                </DetailSpecItem>
            </SpecList>
        } description={
            description
            ??
            <>
                <p>
                    Disables the <CurrentNestedComponent /> <strong>editing functionality</strong>.
                    Similar to <code>{`enabled={false}`}</code> but only disabling the editing functionality.
                </p>
                <p>
                    To make <CurrentNestedComponent /> readOnly, set <code>{`<${nestedComponentName} readOnly={true}>`}</code>.
                </p>
                <ParagraphSetParentReadOnly />
            </>
        } moreInfo={restProps.moreInfo ?? (!restProps.children && <>
            <Warning>
                <p>
                    By default, there is <strong>no visual appearance</strong> for indicating <code>readOnly</code> state.
                </p>
                <p>
                    You should add an <LinkIconPage /> or another visual appearance for indicating <code>readOnly</code> state.
                </p>
            </Warning>
        </>)} />
    );
};
export const ParagraphSetParentReadOnly      = () => {
    const { componentName, hasNestedComponent, nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <>
            {hasNestedComponent && <>
                <p>
                    You can also set the <code>readOnly</code> at <code>{`<${componentName} readOnly={true}>`}</code>, so the entire <CurrentNestedComponent />s are readOnly.<br />
                    To make an exception in a/some <CurrentNestedComponent />(s), set <code>{`<${nestedComponentName} readOnly={false} inheritReadOnly={false}>`}</code>.<br />
                </p>
                <p>
                    Note: the <code>{`inheritReadOnly={false}`}</code> prevents the readOnly state on <CurrentComponent /> affecting the <CurrentNestedComponent />.
                </p>
            </>}
        </>
    );
};
