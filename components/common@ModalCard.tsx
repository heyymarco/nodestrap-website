import React from 'react'
import { CurrentComponent, LinkCardPage, useComponentInfo } from './common';
import {
    SectionPropertyStyleProps,
    SectionPropertyStyle,
    
    SectionPropertyItemStyleProps,
    SectionPropertyItemStyle,
} from './common@Basic'
import {
    SectionPreviewIgnorablePropertyProps,
    SectionPropertyTheme    as GroupSectionPropertyTheme,
    SectionPropertySize     as GroupSectionPropertySize,
    SectionPropertyNude     as GroupSectionPropertyNude,
    SectionPropertyGradient as GroupSectionPropertyGradient,
    SectionPropertyOutlined as GroupSectionPropertyOutlined,
    SectionPropertyMild     as GroupSectionPropertyMild,
} from './common@Group'
import {
    SectionPropertyViewportRefProps,
    SectionPropertyViewportRef as ModalSectionPropertyViewportRef,
    
    SectionPropertyEnabled     as ModalSectionPropertyEnabled,
} from './common@Modal'



export const SectionPropertyTheme = ({ ignorable = false, ...restProps }: SectionPreviewIgnorablePropertyProps) => {
    return (
        <GroupSectionPropertyTheme {...restProps} ignorable={ignorable} />
    );
};
export const SectionPropertySize = ({ ignorable = false, ...restProps }: SectionPreviewIgnorablePropertyProps) => {
    return (
        <GroupSectionPropertySize {...restProps} ignorable={ignorable} />
    );
};
export const SectionPropertyNude = ({ ignorable = false, ...restProps }: SectionPreviewIgnorablePropertyProps) => {
    return (
        <GroupSectionPropertyNude {...restProps} ignorable={ignorable} />
    );
};
export const SectionPropertyGradient = ({ ignorable = false, ...restProps }: SectionPreviewIgnorablePropertyProps) => {
    return (
        <GroupSectionPropertyGradient {...restProps} ignorable={ignorable} />
    );
};
export const SectionPropertyOutlined = ({ ignorable = false, ...restProps }: SectionPreviewIgnorablePropertyProps) => {
    return (
        <GroupSectionPropertyOutlined {...restProps} ignorable={ignorable} />
    );
};
export const SectionPropertyMild = ({ ignorable = false, ...restProps }: SectionPreviewIgnorablePropertyProps) => {
    return (
        <GroupSectionPropertyMild {...restProps} ignorable={ignorable} />
    );
};



export const SectionPropertyEnabled = ({ ignorable = false, ...restProps }: SectionPreviewIgnorablePropertyProps) => {
    return (
        <ModalSectionPropertyEnabled {...restProps} ignorable={ignorable} />
    );
};



export const SectionPropertyViewportRef = ({ dummyContent = '<p>...</p>', ...restProps }: SectionPropertyViewportRefProps) => {
    return (
        <ModalSectionPropertyViewportRef {...restProps} dummyContent={dummyContent} />
    );
};



const modalCardStyle = 'modalCardStyle';
export const SectionPropertyModalCardStyle  = ({ styleName = modalCardStyle, properties = 'Card Styles', component = <LinkCardPage />, ...restProps }: SectionPropertyStyleProps) => {
    return (
        <SectionPropertyStyle {...restProps} styleName={styleName} properties={properties} component={component} />
    );
};
export const SectionPropertyScrollableStyle = ({ styleName = modalCardStyle, property = 'scrollable', properties = 'Scrolling Long Content', description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} styleName={styleName} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='${property}'>`}</code> to add horizontal and/or vertical scrollbars to the <LinkCardPage /> when its content is too wide/tall.
                </p>
            </>
        } />
    );
};
export const SectionPropertyAlignments = ({ styleName = modalCardStyle, property = 'alignments', properties = <><LinkCardPage /> Alignments</>, description, ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} styleName={styleName} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    By default, the <LinkCardPage /> is centered on the viewport, but you can adjust the alignment <em>horizontally</em> and/or <em>vertically</em>.
                </p>
                <p>
                    Set <code>{`<${componentName} horzAlign='start'>`}</code> or <code>{`<${componentName} horzAlign='end'>`}</code> to align the <LinkCardPage /> to the left or right.<br />
                    Set <code>{`<${componentName} vertAlign='start'>`}</code> or <code>{`<${componentName} vertAlign='end'>`}</code> to align the <LinkCardPage /> to the top or bottom.
                </p>
            </>
        } />
    );
};
