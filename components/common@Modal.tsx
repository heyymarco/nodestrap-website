import React from 'react'

import { CurrentComponent, CurrentNestedComponent, LinkBasicPage, LinkCollapsePage, LinkContentPage, LinkDropdownPage, LinkPopupPage, SectionPreviewProperty, SectionPreviewPropertyProps, useComponentInfo } from './common'
import {
    SectionPropertyStyleProps,
    SectionPropertyStyle,
    
    SectionPropertyItemStyleProps,
    SectionPropertyItemStyle,
} from './common@Basic'
import {
    SectionPropertyActive   as PopupSectionPropertyActive,
    SectionPropertyEnabled  as PopupSectionPropertyEnabled,
    
    SectionPropertyLazyProps,
    SectionPropertyLazy     as PopupSectionPropertyLazy,
} from './common@Popup'
import {
    ParagraphIgnoreProperty
} from './common@Group'
import { DetailSpecItem, SpecList } from './SpecList'
import { Warning } from './Info'
import { TypeScriptCode } from './Code'



const backdropStyle = 'backdropStyle';
export const SectionPropertyBackdropStyle    = ({ styleName = backdropStyle, component = <><CurrentComponent />&apos;s backdrop</>, ...restProps }: SectionPropertyStyleProps) => {
    return (
        <SectionPropertyStyle {...restProps} styleName={styleName} component={component} />
    );
};
export const SectionPropertyHiddenStyle      = ({ styleName = backdropStyle, property = 'hidden'   , description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} styleName={styleName} property={property} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to remove the <CurrentComponent />&apos;s backdrop.
                    While the <CurrentComponent /> is shown, the user can interact with any component behind it.
                </p>
            </>
        } />
    );
};
export const SectionPropertyInteractiveStyle = ({ styleName = backdropStyle, property = 'interactive'   , description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} styleName={styleName} property={property} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to allow the user to interact with any component behind the <CurrentComponent />&apos;s backdrop.
                </p>
            </>
        } />
    );
};
export const SectionPropertyStaticStyle      = ({ styleName = backdropStyle, property = 'static'   , description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} styleName={styleName} property={property} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to disallow the user to interact with any component behind the <CurrentComponent />&apos;s backdrop.
                </p>
            </>
        } />
    );
};



export const SectionPropertyActive   = ({ nestedable = false, effectNestedable = true, ...props }: SectionPreviewPropertyProps) => {
    return (
        <PopupSectionPropertyActive {...props} nestedable={nestedable} effectNestedable={effectNestedable} />
    );
};
export const SectionPropertyOnActiveChange = ({ titleTag = 'h4', propertySuffix = true, property = 'onActiveChange', specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} description={
            description
            ??
            <>
                <p>
                    Fires when the user press <kbd>Esc</kbd> key when the <CurrentComponent /> is opened, the user clicks the <CurrentComponent />&apos;s backdrop, or the user clicks a close control (if any) on the <CurrentNestedComponent />.
                </p>
                <p>
                    You have to implement an <em>event handler</em> to change your state, then the state changes the <code>active</code> property.
                </p>
            </>
        } />
    );
};
export const SectionPropertyEnabled  = ({ nestedable = false, effectNestedable = true, moreDescription, ...props }: SectionPreviewPropertyProps) => {
    return (
        <PopupSectionPropertyEnabled {...props} nestedable={nestedable} effectNestedable={effectNestedable} moreDescription={
            moreDescription
            ??
            <>
                <ParagraphIgnoreProperty />
            </>
        } />
    );
};



export const SectionPropertyLazy  = ({ nestedable = false, effectNestedable = false, childrenAlias = 'dialog', ...props }: SectionPropertyLazyProps) => {
    return (
        <PopupSectionPropertyLazy {...props} nestedable={nestedable} effectNestedable={effectNestedable} childrenAlias={childrenAlias} />
    );
};



export const SectionPropertyChildren = ({ titleTag = 'h2', propertySuffix = false, property = 'children', properties = <>Customizing the Modal UI</>, specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    <strong>Almost all Nodestrap&apos;s components</strong> can be <CurrentComponent />ed, with some exceptions such as <LinkPopupPage />, <LinkCollapsePage /> and <LinkDropdownPage />.
                </p>
                <p>
                    The <CurrentComponent /> should have a <strong>single child</strong> component.
                    The child becomes the <code>UI element</code> of <CurrentComponent />.
                    Placing a <em>multiple children</em> causes an <code>Error</code> to throw.
                </p>
                <p>
                    The most common way of making the UI element is placing a <LinkBasicPage />, <LinkContentPage />, or any custom component derived from <LinkBasicPage />.
                    The theme, size, and other variant properties are <em>automatically injected</em> to that component via <code>props</code>.
                    You can re-override the properties by explicitly assigning the <code>props</code>.
                </p>
                <p>
                    An aria <code>{`role='dialog'`}</code> also <em>automatically injected</em> to the component via <code>props</code> so that it behaves <em>semantically</em> like a native <code>{`<dialog>`}</code>.
                </p>
                <p>
                    You can use a native <code>{`<dialog>`}</code> as well, but you should take care of <code>onCancel</code> and <code>onClose</code> events.
                </p>
                <p>
                    The child component should <strong>implement these properties</strong> on its <code>props</code>:
                </p>
                <SpecList>
                    <DetailSpecItem code='isVisible'>
                        <p>
                            When this property is <code>true</code>, the <strong>Modal UI</strong> should not in hidden state, otherwise the <strong>Modal UI</strong> may in hidden state or unrendered.
                        </p>
                        <p>
                            This property is <code>true</code> when the <CurrentComponent /> is <strong>shown</strong> or <strong>still visible</strong> during <em>showing</em> or <em>hidding</em> transition.
                        </p>
                        <p>
                            <em>In most cases</em>, you should not worry about this property, unless a performance optimization is needed.
                        </p>
                    </DetailSpecItem>
                    <DetailSpecItem code='tabIndex'>
                        <p>
                            Forwards the <code>tabIndex</code> assigned from <CurrentComponent /> to the <strong>Modal UI</strong>.
                        </p>
                        <p>
                            If the <strong>Modal UI</strong> is <strong>not a focusable element</strong>, then it should default to <code>{`tabIndex={props.tabIndex ?? -1}`}</code> so it becomes <strong>programatically focusable</strong>.
                        </p>
                        <Warning>
                            <p>
                                By default, every <strong>focusable element</strong> will be injected a css by user agent (browser), to indicate the <strong>focus state</strong>.<br />
                                Usually it modifies the <code>outline</code> and/or <code>outline-offset</code> of the css.
                            </p>
                            <p>
                                If the <em>focus state indicator</em> disrupts your css design, you can remove it by importing <code>stripoutFocusableElement()</code> to your css.
                            </p>
                        </Warning>
                    </DetailSpecItem>
                    <DetailSpecItem code='elmRef'>
                        <p>
                            Forwards the <strong>DOM reference</strong> to the <strong>Modal UI</strong> to <code>focus()</code>.
                        </p>
                        <p>
                            The <code>focus()</code> will be automatically executed when the <CurrentComponent /> is shown.
                        </p>
                    </DetailSpecItem>
                    <DetailSpecItem code='onActiveChange(newActive: boolean, arg?: TCloseType)'>
                        <p>
                            Notifies when the <strong>Modal UI</strong> wants to close, by executing <code>{`props?.onActiveChange(false, 'the-reason-of-closing')`}</code>.
                        </p>
                    </DetailSpecItem>
                </SpecList>
            </>
        } />
    );
};
export const SectionPropertyViewportRef = ({ titleTag = 'h2', propertySuffix = false, property = 'viewportRef', properties = <>Scoping the Backdrop</>, specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    By default, when the <CurrentComponent /> is shown, the <em><CurrentComponent />&apos;s backdrop</em> will cover the <strong>whole <code>{`<body>`}</code></strong>.
                </p>
                <p>
                    You can customize the specific area to be covered by <em>backdrop</em>.
                    Assign <code>{`<${componentName} viewportRef={yourContainerRef}>`}</code> to the desired element.
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
    const containerRef = useRef(null);

    return (
        <Content
            tag='article'
            elmRef={containerRef}
        >
            <p>...</p>
            <p>...</p>
            
            <${componentName}
                targetRef={containerRef}
            >
                <WelcomeDialog />
            </${componentName}>
            
            <p>...</p>
            <p>...</p>
        </Content>
    );
}
                    `}</TypeScriptCode>
                    <p>
                        An example using <code>useState()</code>:
                    </p>
                    <TypeScriptCode>{`
export default function FooComponent() {
    const [containerRef, setContainerRef] = useState(null);

    return (
        <Content
            tag='article'
            elmRef={setContainerRef}
        >
            <p>...</p>
            <p>...</p>
            
            <${componentName}
                targetRef={containerRef}
            >
                <WelcomeDialog />
            </${componentName}>
            
            <p>...</p>
            <p>...</p>
        </Content>
    );
}
                `}</TypeScriptCode>
            </>
        } />
    );
};
