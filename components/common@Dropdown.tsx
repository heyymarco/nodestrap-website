import React from 'react'

import { CurrentComponent, LinkFormPage, LinkStripoutsPage, SectionPreviewProperty, SectionPreviewPropertyProps, SectionPropertyProps } from './common'
import { DetailSpecItem, SpecList } from './SpecList';

import {
    SectionPropertyNudeProps,
    SectionPropertyNude                    as BasicSectionPropertyNude,
    
    SectionPropertyOrientationProps,
    SectionPropertyOrientation             as BasicSectionPropertyOrientation,
    SectionPropertyOrientationBlock        as BasicSectionPropertyOrientationBlock,
    SectionPropertyOrientationInlineProps,
    SectionPropertyOrientationInline       as BasicSectionPropertyOrientationInline,
} from './common@Basic';
import {
    SectionPropertyPopupAutoFlip  as PopupSectionPropertyPopupAutoFlip,
    SectionPropertyPopupAutoShift as PopupSectionPropertyPopupAutoShift,
} from './common@Popup'
import { Warning } from './Info';



export const SectionPropertyChildren = ({ titleTag = 'h2', propertySuffix = false, property = 'children', properties = <>Customizing the Dropdown UI</>, specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Customizes the <code>UI element</code> to <em>dropdown</em>.
                </p>
                <p>
                    By default, a <CurrentComponent /> has <strong>no visual appearance</strong> by its default property of <code>{`nude={true}`}</code>, so
                    you should add a <strong>visible container element</strong> to <em>visualize</em> the <strong>dropdowned UI</strong>.<br />
                    For example: A <LinkFormPage /> inside <CurrentComponent />, it becomes a <u>dropdownable <LinkFormPage /></u>.
                </p>
                <p>
                    The <CurrentComponent /> should have a <strong>single child</strong> component.
                    The child becomes the <code>UI element</code> of <CurrentComponent />.
                    Placing a <em>multiple children</em> causes an <code>Error</code> to throw.
                </p>
                <p>
                    The child component should <strong>implement these properties</strong> on its <code>props</code>:
                </p>
                <SpecList>
                    <DetailSpecItem code='tabIndex'>
                        <p>
                            Forwards the <code>tabIndex</code> assigned from <CurrentComponent /> to the container element.
                        </p>
                        <p>
                            If the container element is <strong>not a focusable element</strong>, then it should default to <code>{`tabIndex={props.tabIndex ?? -1}`}</code> so it becomes <strong>programatically focusable</strong>.
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
                            Forwards the <strong>DOM reference</strong> of the container element to <code>focus()</code>.
                        </p>
                        <p>
                            The <code>focus()</code> will be automatically executed when the <CurrentComponent /> is shown.
                        </p>
                        <p>
                            The <CurrentComponent /> also listens for <strong>focus events</strong> at the document level.
                            If the focused element is neither <code>elmRef</code> nor the descendants of <code>elmRef</code>,
                            then the <CurrentComponent /> executes <code>{`onActiveChange(false, 'blur')`}</code>.
                        </p>
                    </DetailSpecItem>
                    <DetailSpecItem code='onActiveChange(newActive: boolean, arg?: TCloseType)'>
                        <p>
                            Notifies that the <strong>dropdowned UI</strong> wants to close, by executing <code>{`props?.onActiveChange(false, 'the-reason-of-closing')`}</code>.
                        </p>
                    </DetailSpecItem>
                </SpecList>
            </>
        } />
    );
};



export const SectionPropertyNude = ({ defaultValue = true, ...restProps }: SectionPropertyNudeProps) => {
    return (
        <BasicSectionPropertyNude {...restProps} defaultValue={defaultValue} />
    );
};
export const SectionPropertyOrientation       = ({ orientationStuff = 'collapsing', ...restProps }: SectionPropertyProps & SectionPropertyOrientationProps) => {
    return (
        <BasicSectionPropertyOrientation {...restProps} orientationStuff={orientationStuff} />
    );
};
export const SectionPropertyOrientationBlock  = ({ orientationStuff = 'collapsing', ...restProps }: SectionPreviewPropertyProps & SectionPropertyOrientationProps) => {
    return (
        <BasicSectionPropertyOrientationBlock {...restProps} orientationStuff={orientationStuff} />
    );
};
export const SectionPropertyOrientationInline = ({ orientationStuff = 'collapsing', ...restProps }: SectionPropertyOrientationInlineProps & SectionPropertyOrientationProps) => {
    return (
        <BasicSectionPropertyOrientationInline {...restProps} orientationStuff={orientationStuff} />
    );
}; 



export const SectionPropertyPopupAutoFlip  = ({ defaultValue = true, ...props }: SectionPreviewPropertyProps) => {
    return (
        <PopupSectionPropertyPopupAutoFlip {...props} defaultValue={defaultValue} />
    );
};
export const SectionPropertyPopupAutoShift = ({ defaultValue = true, ...props }: SectionPreviewPropertyProps) => {
    return (
        <PopupSectionPropertyPopupAutoShift {...props} defaultValue={defaultValue} />
    );
};



export const SectionPropertyOnActiveChange = ({ titleTag = 'h4', propertySuffix = true, property = 'onActiveChange', specList, description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} propertySuffix={propertySuffix} property={property} description={
            description
            ??
            <>
                <p>
                    Fires when the <CurrentComponent /> loses focus, the user press <kbd>Esc</kbd> key when the <CurrentComponent /> is opened, or the user clicks a close control (if any) on the <CurrentComponent />.
                </p>
                <p>
                    You have to implement an <em>event handler</em> to change your state, then the state changes the <code>active</code> property.
                </p>
            </>
        } />
    );
};
