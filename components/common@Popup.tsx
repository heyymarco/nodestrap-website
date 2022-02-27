import React from 'react'

import { CurrentComponent, CurrentNestedComponent, useComponentInfo, SectionPreviewProperty, SectionPreviewPropertyProps, LinkIconPage } from './common'
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
                    <p>
                        This is the <strong>default</strong> value if the <code>enabled</code> value is not specified.
                    </p>
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



export const SectionPropertyTargetRef = ({ property = 'targetRef', description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} property={property} description={
            description
            ??
            <>
                <p>
                    Decides which the <strong>DOM element</strong> for the <CurrentComponent /> will <em>hover</em> over it.
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
                Pay now
            </Button>
            <Popup
                targetRef={buttonRef}
                theme='warning'
                popupPlacement='right'
                active={true}
            >
                Processing your payment...
            </Popup>
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
                Pay now
            </Button>
            <Popup
                targetRef={buttonRef}
                theme='warning'
                popupPlacement='right'
                active={true}
            >
                Processing your payment...
            </Popup>
        </>
    );
}
                `}</TypeScriptCode>
            </>
        } />
    );
};
export const SectionPropertyPopupPlacement = ({ property = 'popupPlacement', children, description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} property={property} specList={children} description={
            description
            ??
            <>
                <p>
                    Decides which location (relative to <code>targetRef</code>) for the <CurrentComponent /> to hover.
                </p>
            </>
        } />
    );
};
