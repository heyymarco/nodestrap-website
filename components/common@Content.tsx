import React from 'react'

import { CommaSeparated, CurrentComponent, LinkButtonPage, SectionPreviewProperty, SectionPreviewPropertyProps } from './common'
import { Warning } from './Info';



export const MediaList = (props: { includeCustom ?: boolean }) => <CommaSeparated components={['figure', 'img', 'svg', 'video', 'picture', 'embed', 'object', ...(props.includeCustom ? ['.media'] : [])].map((item, index) => <code key={index}>{ item.startsWith('.') ? item : `<${item}>` }</code>)} />;
export const LinkList  = (props: { includeCustom ?: boolean }) => <CommaSeparated components={['a', ...(props.includeCustom ? ['.link'] : [])].map((item, index) => <code key={index}>{ item.startsWith('.') ? item : `<${item}>` }</code>)} />;



export interface SectionPropertyMediaProps extends SectionPreviewPropertyProps {
    treatment ?: React.ReactNode
}
export const SectionPropertyMedia          = ({ titleTag = 'h2', property = 'children', properties = 'Images & Media'                         , description, treatment = <><strong>styled to full width</strong> inside <CurrentComponent />, ignoring <CurrentComponent />&apos;s paddings</>, ...restProps }: SectionPropertyMediaProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Media elements such as  <MediaList includeCustom={true} /> are {treatment}.
                </p>
            </>
        } />
    );
};
export const SectionPropertyMediaBeginEnd  = ({ titleTag = 'h3', property = 'children', properties = 'Images & Media at the Beginning and End', description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    If the media position is at the first or the last, at the corners, the media (image) are bit clipped by <CurrentComponent />&apos;s border radius.
                </p>
            </>
        } />
    );
};
export const SectionPropertyMediaSequences = ({ titleTag = 'h3', property = 'children', properties = 'The Sequence of Images & Media'         , description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    If there are multiple images in a sequence (without being inserted by another types), the images are joined together with borders as separator.
                </p>
            </>
        } />
    );
};
export interface SectionPropertyMediaCustomProps extends SectionPreviewPropertyProps {
    warnDisplayBlock ?: boolean
}
export const SectionPropertyMediaCustom    = ({ titleTag = 'h3', property = 'children', properties = 'Custom Media'                           , description, warnDisplayBlock = true, ...restProps }: SectionPropertyMediaCustomProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    If you need a custom element to be treated as media, add <code>media</code> class to the desired element.<br />
                    Set <code>{`classes={['boo', 'media', 'foo']}`}</code> for Nodestrap component -or- <code>{`className='boo media foo'`}</code> for regular component.
                </p>
                {warnDisplayBlock && <Warning>
                    <p>
                        The <code>display</code> property of the custom media need to have <strong>block flow layout</strong> (<code>block</code>, <code>flex</code>, <code>grid</code>).<br />
                        If the display property is <strong>inline flow layout</strong> (<code>inline</code>, <code>inline-flex</code>, <code>inline-grid</code>), an <strong>unexpected</strong> <code>margin-block-start</code> may occur, if <code>padding-block-start</code> is less than <code>margin-block-start</code>.
                    </p>
                    <p>
                        We use a <strong>negative <code>margin-block-start</code></strong> to cancel out the previous <code>margin-block-end</code>.<br />
                        We may change the better algorithm in the future to fix this issue.
                    </p>
                </Warning>}
            </>
        } />
    );
};
export interface SectionPropertyMediaExcludingProps extends SectionPreviewPropertyProps {
    notTreatment        ?: React.ReactNode
    notTreatmentExample ?: React.ReactNode
}
export const SectionPropertyMediaExcluding = ({ titleTag = 'h3', property = 'children', properties = 'Excluding Media'                        , description, notTreatment = <>apply any style</>, notTreatmentExample = <>For example an emoji of <code>{`<img>`}</code></>, ...restProps }: SectionPropertyMediaExcludingProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Sometimes we need to put a media (<MediaList />) <strong>but don&apos;t</strong> {notTreatment}.
                    {notTreatmentExample && <> {notTreatmentExample}.</>}
                </p>
                <p>
                    Add <code>not-media</code> class to the desired element.<br />
                    Set <code>{`classes={['boo', 'not-media', 'foo']}`}</code> for Nodestrap component -or- <code>{`className='boo not-media foo'`}</code> for regular component.{' '}
                    <strong>No style are injected</strong> into that component, thus you should implement your own style for making good looking.
                </p>
            </>
        } />
    );
};



export const SectionPropertyLinks          = ({ titleTag = 'h2', property = 'children', properties = 'Links'                                  , description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Link elements such as <LinkList includeCustom={true} /> are styled and automatically get separated from each other.
                </p>
                <Warning>
                    <p>
                        Actually we don&apos;t style the link elements, instead we mutate them with <LinkButtonPage><code>{`<Button btnStyle='link'>`}</code></LinkButtonPage> and styled them for adding margin.
                    </p>
                    <p>
                        If the link elements are <strong>function component</strong> or <strong>class component</strong>, we don&apos;t mutate them.
                    </p>
                </Warning>
            </>
        } />
    );
};
export const SectionPropertyLinksCustom    = ({ titleTag = 'h3', property = 'children', properties = 'Custom Links'                           , description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    If you need a custom element to be treated as link, add <code>link</code> class to the desired element.<br />
                    Set <code>{`classes={['boo', 'link', 'foo']}`}</code> for Nodestrap component -or- <code>{`className='boo link foo'`}</code> for regular component.
                </p>
                <p>
                    For <LinkButtonPage /> component, just set <code>{`btnStyle='link'`}</code>.
                    The <code>link</code> class will be automatically added for you.
                </p>
            </>
        } />
    );
};
export const SectionPropertyLinksExcluding = ({ titleTag = 'h3', property = 'children', properties = 'Excluding Links'                        , description, ...restProps }: SectionPreviewPropertyProps) => {
    return (
        <SectionPreviewProperty {...restProps} titleTag={titleTag} property={property} properties={properties} description={
            description
            ??
            <>
                <p>
                    Sometimes we need to put a link (<LinkList />) <strong>but not</strong> styled to full width.
                    For example a custom button of <code>{`<a>`}</code>.
                </p>
                <p>
                    Add <code>not-link</code> class to the desired element.<br />
                    Set <code>{`classes={['boo', 'not-link', 'foo']}`}</code> for Nodestrap component -or- <code>{`className='boo not-link foo'`}</code> for regular component.{' '}
                    <strong>No style are injected</strong> into that component, thus you should implement your own style for making good looking.
                </p>
            </>
        } />
    );
};
