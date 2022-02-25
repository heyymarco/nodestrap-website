import React from 'react'

import { CurrentComponent, SectionPreviewProperty, SectionPreviewPropertyProps } from './common'
import {
    SectionPropertyMildProps,
    SectionPropertyMild        as BasicSectionPropertyMild,
    SectionPropertyStyleProps,
    SectionPropertyStyle,
    SectionPropertyItemStyleProps,
    SectionPropertyFlatStyle   as BasicSectionPropertyFlatStyle,
    SectionPropertyFlushStyle  as BasicSectionPropertyFlushStyle,
    SectionPropertyJoinedStyle as BasicSectionPropertyJoinedStyle,
} from './common@Basic'



export const SectionPropertyMild = ({ setByDefault = true, ...props }: SectionPropertyMildProps) => {
    return (
        <BasicSectionPropertyMild {...props} setByDefault={setByDefault} />
    );
};
const cardStyle = 'cardStyle';
export const SectionPropertyCardStyle   = ({ styleName = cardStyle, ...restProps }: SectionPropertyStyleProps) => {
    return (
        <SectionPropertyStyle {...restProps} styleName={styleName} />
    );
};
export const SectionPropertyFlatStyle   = ({ styleName = cardStyle, ...restProps }: SectionPropertyItemStyleProps) => {
    return (
        <BasicSectionPropertyFlatStyle {...restProps} styleName={styleName} />
    );
};
export const SectionPropertyFlushStyle  = ({ styleName = cardStyle, ...restProps }: SectionPropertyItemStyleProps) => {
    return (
        <BasicSectionPropertyFlushStyle {...restProps} styleName={styleName} />
    );
};
export const SectionPropertyJoinedStyle = ({ styleName = cardStyle, ...restProps }: SectionPropertyItemStyleProps) => {
    return (
        <BasicSectionPropertyJoinedStyle {...restProps} styleName={styleName} />
    );
};

export const SectionPropertyActive           = ({ property = 'active'  , properties = 'Active State'                         , description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    To make <CurrentComponent /> active, set <code>{`<Card active={true}>`}</code>.
                </p>
            </>
        } />
    );
};
export const SectionPropertyActiveNoOutlined = ({ property = 'outlined', properties = 'Active State cancels Outlined Variant', description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={'h4'} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Assigning <code>{`<Card active={true}>`}</code> will cancel out the <code>outlined</code> variant.
                </p>
            </>
        } />
    );
};
export const SectionPropertyEnabled          = ({ property = 'enabled' , properties = 'Disabled State'                       , description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    To make <CurrentComponent /> disabled, set <code>{`<Card enabled={false}>`}</code>.
                </p>
            </>
        } />
    );
};
