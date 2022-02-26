import React from 'react'

import { CurrentComponent, CurrentNestedComponent, useComponentInfo, SectionPreviewProperty, SectionPreviewPropertyProps } from './common'
import { DetailSpecItem, SpecList } from './SpecList';



export const SectionPropertyActive           = ({ property = 'active'    , properties = 'Active Items'                         , description, ...restProps }: SectionPreviewPropertyProps) => {
    const { componentName, hasNestedComponent, nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} property={property} properties={properties} specList={
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
                    Indicates the <CurrentNestedComponent /> is currently <strong>selected</strong> or <strong>on</strong> state.
                </p>
                <p>
                    To make <CurrentNestedComponent /> active, set <code>{`<${nestedComponentName} active={true}>`}</code>.
                </p>
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
        } />
    );
};
export const SectionPropertyActiveNoOutlined = ({ property = 'outlined'  , properties = 'Active State cancels Outlined Variant', description, ...restProps }: SectionPreviewPropertyProps) => {
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
export const SectionPropertyEnabled          = ({ property = 'enabled'   , properties = 'Disabled Items'                       , description, ...restProps }: SectionPreviewPropertyProps) => {
    const { componentName, hasNestedComponent, nestedComponentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} property={property} properties={properties} specList={
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
        } />
    );
};
