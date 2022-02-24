import React, { useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { TransparentPreview } from '../../../components/TransparentPreview'
import { SectionInheritedProps, LinkListPage, LinkIndicatorPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentNestedComponent, CurrentBaseComponents, LinkListItemPage, SectionVariants, SectionStates, LinkResponsiveProviderPage, LinkContentPage, LinkButtonPage, LinkListSeparatorItemPage, LinkUsesIndicatorVariantsPage, SectionSubProperty, SectionPropertyProps, useComponentInfo } from '../../../components/common-contents'
import { List, ListItem, ListSeparatorItem, OrientationName } from '@nodestrap/list'
import { TypeScriptCode } from '../../../components/Code'
import ResponsiveProvider from '@nodestrap/responsive'
import { Tips, Warning } from '../../../components/Info'
import Element from '@nodestrap/element'
import {
    SectionPropertyTheme,
    SectionPropertySize,
    SectionPropertyNudeProps,
    SectionPropertyNude     as BasicSectionPropertyNude,
    SectionPropertyGradient,
    SectionPropertyOutlined,
    SectionPropertyMildProps,
    SectionPropertyMild     as BasicSectionPropertyMild,
    SectionPropertyOrientation,
    SectionPropertyOrientationBlock,
    SectionPropertyOrientationInline,
    SectionPropertyOrientationResponsive,
    SectionPropertyStyleProps,
    SectionPropertyStyle,
    SectionPropertyItemStyleProps,
    SectionPropertyItemStyle,
    SectionPropertyFlatStyle   as BasicSectionPropertyFlatStyle,
    SectionPropertyFlushStyle  as BasicSectionPropertyFlushStyle,
    SectionPropertyJoinedStyle as BasicSectionPropertyJoinedStyle,
} from './basic'

import loadable from '@loadable/component'
const DemoListLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@List' */'../../../components/DemoPanel@List'))



const defaultPropertySuffix = false;
export const SectionPropertyNude = ({ noBorder, ...props }: SectionPropertyNudeProps) => {
    return (
        <BasicSectionPropertyNude {...props} noBorder={noBorder ?? true} />
    );
};
export const SectionPropertyMild = ({ setByDefault, ...props }: SectionPropertyMildProps) => {
    return (
        <BasicSectionPropertyMild {...props} setByDefault={setByDefault ?? true} />
    );
};
const FunctionalTabList = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(3);
    
    
    
    return (
        <List listStyle='tab' actionCtrl={true} orientation='inline' theme='primary'>
            <ListItem active={activeTabIndex === 0} onClick={() => setActiveTabIndex(0)}>
                A first item
            </ListItem>
            <ListItem active={activeTabIndex === 1} onClick={() => setActiveTabIndex(1)}>
                A second item
            </ListItem>
            <ListItem theme='success' active={activeTabIndex === 2} onClick={() => setActiveTabIndex(2)}>
                A third item
            </ListItem>
            <ListItem active={activeTabIndex === 3} onClick={() => setActiveTabIndex(3)}>
                A fourth item
            </ListItem>
            <ListItem theme='danger' active={activeTabIndex === 4} onClick={() => setActiveTabIndex(4)}>
                A fifth item
            </ListItem>
        </List>
    );
};
export const SectionPropertyStyles = ({ property, properties, propertySuffix = defaultPropertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <SectionSubProperty {...restProps} propertySuffix={propertySuffix} property={property ?? 'listStyle'} properties={properties ?? 'Styles'}>
            {
                children
                ??
                <>
                    <SectionSubProperty titleTag='h4' propertySuffix={propertySuffix} property={`listStyle='tab'`} properties={<><code>tab</code> Style</>} preview={<>
                        <List listStyle='tab' orientation='inline' theme='primary'>
                            <ListItem>
                                A first item
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem theme='success'>
                                A third item
                            </ListItem>
                            <ListItem active={true}>
                                A fourth item
                            </ListItem>
                            <ListItem theme='danger'>
                                A fifth item
                            </ListItem>
                        </List>
                        <p></p>
                        <TypeScriptCode>{`
<List listStyle='tab' orientation='inline' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem active={true}>
        A fourth item
    </ListItem>
    <ListItem theme='danger'>
        A fifth item
    </ListItem>
</List>
                        `}</TypeScriptCode>
                        <SectionSubProperty titleTag='h5' propertySuffix={propertySuffix} property={`actionCtrl={true}`} properties='Make the Tabs Functional' preview={<>
                            <FunctionalTabList />
                            <p></p>
                            <TypeScriptCode>{`
const TabControl = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(3);
    
    return (
        <List listStyle='tab' actionCtrl={true} orientation='inline' theme='primary'>
            <ListItem active={activeTabIndex === 0} onClick={() => setActiveTabIndex(0)}>
                A first item
            </ListItem>
            <ListItem active={activeTabIndex === 1} onClick={() => setActiveTabIndex(1)}>
                A second item
            </ListItem>
            <ListItem theme='success' active={activeTabIndex === 2} onClick={() => setActiveTabIndex(2)}>
                A third item
            </ListItem>
            <ListItem active={activeTabIndex === 3} onClick={() => setActiveTabIndex(3)}>
                A fourth item
            </ListItem>
            <ListItem theme='danger' active={activeTabIndex === 4} onClick={() => setActiveTabIndex(4)}>
                A fifth item
            </ListItem>
        </List>
    );
};
                            `}</TypeScriptCode>
                        </>}>
                            <ContentMakeListItemClickable />
                        </SectionSubProperty>
                    </>}>
                        <p>
                            Set <code>{`<List listStyle='tab'>`}</code> to style the <LinkListItemPage /> to look similar to <em>a tabbed interface</em>.
                        </p>
                    </SectionSubProperty>
                    <SectionSubProperty titleTag='h4' propertySuffix={propertySuffix} property={`listStyle='breadcrumb'`} properties={<><code>breadcrumb</code> Style</>} preview={<>
                        <List listStyle='breadcrumb' orientation='inline' theme='primary'>
                            <ListItem>
                                A first item
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem theme='success'>
                                A third item
                            </ListItem>
                            <ListItem active={true}>
                                A fourth item
                            </ListItem>
                            <ListItem theme='danger'>
                                A fifth item
                            </ListItem>
                        </List>
                        <p></p>
                        <TypeScriptCode>{`
<List listStyle='breadcrumb' orientation='inline' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem active={true}>
        A fourth item
    </ListItem>
    <ListItem theme='danger'>
        A fifth item
    </ListItem>
</List>
                        `}</TypeScriptCode>
                    </>}>
                        <p>
                            Set <code>{`<List listStyle='breadcrumb'>`}</code> to style the <LinkListItemPage /> to look similar to <em>a breadcrumb</em>.
                        </p>
                        <p>
                            Requires <code>{`<List orientation='inline'>`}</code>.
                        </p>
                    </SectionSubProperty>
                    <SectionSubProperty titleTag='h4' propertySuffix={propertySuffix} property={`listStyle='bullet'`} properties={<><code>bullet</code> Style</>} preview={<>
                        <List listStyle='bullet' orientation='inline' theme='primary'>
                            <ListItem />
                            <ListItem />
                            <ListItem theme='success' />
                            <ListItem active={true} />
                            <ListItem theme='danger' />
                        </List>
                        <p></p>
                        <TypeScriptCode>{`
<List listStyle='bullet' orientation='inline' theme='primary'>
    <ListItem />
    <ListItem />
    <ListItem theme='success' />
    <ListItem active={true} />
    <ListItem theme='danger' />
</List>
                        `}</TypeScriptCode>
                    </>}>
                        <p>
                            Set <code>{`<List listStyle='bullet'>`}</code> to style the <LinkListItemPage /> to look similar to <em>a bullet</em>.
                        </p>
                        <p>
                            Requires an <strong>empty</strong> children of <LinkListItemPage />.
                        </p>
                    </SectionSubProperty>
                    
                    <SectionSubProperty titleTag='h4' propertySuffix={propertySuffix} property={`listStyle='numbered'`} properties={<><code>numbered</code> Style</>} preview={<>
                        <List listStyle='numbered' theme='primary'>
                            <ListItem>
                                A first item
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem theme='success'>
                                A third item
                            </ListItem>
                            <ListItem active={true}>
                                A fourth item
                            </ListItem>
                            <ListItem theme='danger'>
                                A fifth item
                            </ListItem>
                        </List>
                        <p></p>
                        <TypeScriptCode>{`
<List listStyle='numbered' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem active={true}>
        A fourth item
    </ListItem>
    <ListItem theme='danger'>
        A fifth item
    </ListItem>
</List>
                        `}</TypeScriptCode>
                        <SectionSubProperty titleTag='h5' propertySuffix={propertySuffix} property={`.void`} properties='Skip Unnecessary Content' preview={<>
                            <List listStyle={['numbered', 'joined']} theme='primary'>
                                <ListItem>
                                    A first item
                                </ListItem>
                                <ListItem>
                                    A second item
                                </ListItem>
                                <ListSeparatorItem />
                                <ListItem theme='success'>
                                    A third item
                                </ListItem>
                                <ListItem theme='warning' classes={['void']}>
                                    An advertisement
                                </ListItem>
                                <ListItem theme='danger'>
                                    A fourth item
                                </ListItem>
                            </List>
                            <p></p>
                            <TypeScriptCode>{`
<List listStyle={['numbered', 'joined']} theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListSeparatorItem />
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem theme='warning' classes={['void']}>
        An advertisement
    </ListItem>
    <ListItem theme='danger'>
        A fourth item
    </ListItem>
</List>
                            `}</TypeScriptCode>
                        </>}>
                            <p>
                                A <LinkListSeparatorItemPage /> and <code>.void</code> are skipped by counter.
                            </p>
                        </SectionSubProperty>
                    </>}>
                        <p>
                            Add a number (a counter) on each <LinkListItemPage />.
                        </p>
                    </SectionSubProperty>
                </>
            }
        </SectionSubProperty>
    );
};
export const SectionPropertyListStyle = ({ styleName = 'listStyle', ...restProps }: SectionPropertyStyleProps) => {
    return (
        <SectionPropertyStyle {...restProps} styleName={styleName} />
    );
};
export const SectionPropertyFlatStyle = ({ styleName = 'listStyle', ...restProps }: SectionPropertyItemStyleProps) => {
    return (
        <BasicSectionPropertyFlatStyle {...restProps} styleName={styleName} />
    );
};
export const SectionPropertyFlushStyle = ({ styleName = 'listStyle', ...restProps }: SectionPropertyItemStyleProps) => {
    return (
        <BasicSectionPropertyFlushStyle {...restProps} styleName={styleName} />
    );
};
export const SectionPropertyJoinedStyle = ({ styleName = 'listStyle', ...restProps }: SectionPropertyItemStyleProps) => {
    return (
        <BasicSectionPropertyJoinedStyle {...restProps} styleName={styleName} />
    );
};
export const SectionPropertyContentStyle = ({ property, properties, description, styleName = 'listStyle', ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} property={property ?? `${styleName}='content'`} properties={properties ?? <><code>content</code> Style</>} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='content'>`}</code> to style the <CurrentNestedComponent /> to look similar to <LinkContentPage /> (usually with wider paddings).
                </p>
                <p>
                    Basically it merges the <CurrentNestedComponent />&apos;s style + <LinkContentPage />&apos;s style.
                </p>
            </>
        } />
    );
};
export const SectionPropertyBtnStyle = ({ property, properties, description, styleName = 'listStyle', ...restProps }: SectionPropertyItemStyleProps) => {
    const { componentName } = useComponentInfo();
    
    
    
    return (
        <SectionPropertyItemStyle {...restProps} property={property ?? `${styleName}='btn'`} properties={properties ?? <><code>btn</code> Style</>} description={
            description
            ??
            <>
                <p>
                    Set <code>{`<${componentName} ${styleName}='btn'>`}</code> to style the <CurrentNestedComponent /> to look similar to <LinkButtonPage />.
                </p>
                <p>
                    Basically it merges the <CurrentNestedComponent />&apos;s style + <LinkButtonPage />&apos;s style.
                </p>
            </>
        } />
    );
};

const ContentMakeListItemClickable = () => {
    return (
        <>
            <p>
                To make <LinkListItemPage /> clickable, set <code>{`<ListItem actionCtrl={true}>`}</code>.
            </p>
            <p>
                You can also set the <code>actionCtrl</code> at <code>{`<List actionCtrl={true}>`}</code>, so the default value of <code>actionCtrl</code> in the <LinkListItemPage /> will be the same as the parent.
            </p>
            <p>
                To handle the click action of the <LinkListItemPage />, assign <code>onClick</code> to the desired <strong>handler function</strong> -or- assign <code>href</code> to the desired <strong>URL</strong>.
            </p>
            <Warning>
                <p>
                    Assigning <code>{`actionCtrl={true}`}</code> and <code>href</code> makes the <LinkListItemPage /> rendered as <code>{`<a>`}</code>.
                </p>
                <p>
                    Assigning <code>{`actionCtrl={true}`}</code> without assigning <code>href</code> makes the <LinkListItemPage /> rendered as <code>{`<div role='button'>`}</code>.
                </p>
                <p>
                    Assigning <code>{`actionCtrl={true}`}</code> and <code>{`tag='button'`}</code> without assigning <code>href</code> makes the <LinkListItemPage /> rendered as <code>{`<button>`}</code>.
                </p>
            </Warning>
        </>
    )
};
export const SectionPropertyActionCtrl = ({ property, properties, propertySuffix = defaultPropertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <SectionSubProperty {...restProps} propertySuffix={propertySuffix} property={property ?? 'actionCtrl'} properties={properties ?? 'Links and Buttons'} preview={<>
            <List theme='primary'>
                <ListItem>
                    A first item (not clickable)
                </ListItem>
                <ListItem>
                    A second item (not clickable)
                </ListItem>
                <ListItem actionCtrl={true} onClick={() => alert('hello world')}>
                    A third item (clickable)
                </ListItem>
                <ListItem actionCtrl={true} href='https://www.google.com'>
                    A fourth item (clickable)
                </ListItem>
                <ListItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
                    A fifth item item (clickable)
                </ListItem>
                <ListItem active={true} theme='danger' actionCtrl={true} href='https://www.google.com'>
                    A seventh item item (clickable)
                </ListItem>
            </List>
            <p></p>
            <TypeScriptCode>{`
<List theme='primary'>
    <ListItem>
        A first item (not clickable)
    </ListItem>
    <ListItem>
        A second item (not clickable)
    </ListItem>
    <ListItem actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable)
    </ListItem>
    <ListItem actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable)
    </ListItem>
    <ListItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable)
    </ListItem>
    <ListItem active={true} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable)
    </ListItem>
</List>

/* alternate code but with the similar result: */
<List theme='primary' actionCtrl={true}>
    <ListItem actionCtrl={false}>
        A first item (not clickable)
    </ListItem>
    <ListItem actionCtrl={false}>
        A second item (not clickable)
    </ListItem>
    <ListItem  onClick={() => alert('hello world')}>
        A third item (clickable)
    </ListItem>
    <ListItem href='https://www.google.com'>
        A fourth item (clickable)
    </ListItem>
    <ListItem active={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable)
    </ListItem>
    <ListItem active={true} theme='danger' href='https://www.google.com'>
        A seventh item item (clickable)
    </ListItem>
</List>
            `}</TypeScriptCode>
        </>}>
            {
                children
                ??
                <>
                    <ContentMakeListItemClickable />
                </>
            }
        </SectionSubProperty>
    );
};
const ListWithActiveOutlined = () => {
    const [listRef, isActive] = useFlipFlop({ defaultState: true });
    
    
    
    const activeLabel = <Element tag={isActive ? 'span' : 'del'}>active</Element>
    return (
        <List elmRef={listRef} outlined={true} theme='primary'>
            <ListItem>
                A first item (not clickable)
            </ListItem>
            <ListItem active={isActive}>
                A second item (not clickable + { activeLabel })
            </ListItem>
            <ListItem active={isActive} actionCtrl={true} onClick={() => alert('hello world')}>
                A third item (clickable + { activeLabel })
            </ListItem>
            <ListItem active={isActive} actionCtrl={true} href='https://www.google.com'>
                A fourth item (clickable + { activeLabel })
            </ListItem>
            <ListItem active={isActive} enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
                A fifth item item (clickable + { activeLabel } + disabled)
            </ListItem>
            <ListItem active={isActive} enabled={false} theme='danger' actionCtrl={true} href='https://www.google.com'>
                A seventh item item (clickable + { activeLabel } + disabled)
                <p>
                    <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
                </p>
            </ListItem>
        </List>
    );
};
export const SectionPropertyActive = ({ property, properties, propertySuffix = defaultPropertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <SectionSubProperty {...restProps} propertySuffix={propertySuffix} property={property ?? 'active'} properties={properties ?? 'Active Items'} preview={<>
            <List theme='primary'>
                <ListItem>
                    A first item (not clickable)
                </ListItem>
                <ListItem active={true}>
                    A second item (not clickable + active)
                </ListItem>
                <ListItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
                    A third item (clickable + active)
                </ListItem>
                <ListItem active={true} actionCtrl={true} href='https://www.google.com'>
                    A fourth item (clickable + active)
                </ListItem>
                <ListItem active={true} enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
                    A fifth item item (clickable + active + disabled)
                </ListItem>
                <ListItem active={true} enabled={false} theme='danger' actionCtrl={true} href='https://www.google.com'>
                    A seventh item item (clickable + active + disabled)
                    <p>
                        <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
                    </p>
                </ListItem>
            </List>
            <p></p>
            <TypeScriptCode>{`
<List theme='primary'>
    <ListItem>
        A first item (not clickable)
    </ListItem>
    <ListItem active={true}>
        A second item (not clickable + active)
    </ListItem>
    <ListItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable + active)
    </ListItem>
    <ListItem active={true} actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable + active)
    </ListItem>
    <ListItem active={true} enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable + active + disabled)
    </ListItem>
    <ListItem active={true} enabled={false} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable + active + disabled)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </ListItem>
</List>

/* alternate code but with the similar result: */
<List active={true} theme='primary'>
    <ListItem active={false} inheritActive={false}>
        A first item (not clickable)
    </ListItem>
    <ListItem>
        A second item (not clickable + active)
    </ListItem>
    <ListItem actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable + active)
    </ListItem>
    <ListItem actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable + active)
    </ListItem>
    <ListItem enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable + active + disabled)
    </ListItem>
    <ListItem enabled={false} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable + active + disabled)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </ListItem>
</List>
            `}</TypeScriptCode>
            <SectionSubProperty titleTag='h4' propertySuffix={propertySuffix} property={property ?? 'outlined'} properties='Active Items with Outlined' preview={<>
                <TransparentPreview>
                    <ListWithActiveOutlined />
                </TransparentPreview>
                <p></p>
                <TypeScriptCode>{`
<List outlined={true} theme='primary'>
    <ListItem>
        A first item (not clickable)
    </ListItem>
    <ListItem active={true}>
        A second item (not clickable + active)
    </ListItem>
    <ListItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable + active)
    </ListItem>
    <ListItem active={true} actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable + active)
    </ListItem>
    <ListItem active={true} enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable + active + disabled)
    </ListItem>
    <ListItem active={true} enabled={false} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable + active + disabled)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </ListItem>
</List>
                `}</TypeScriptCode>
            </>}>
                <p>
                    Assigning <code>{`<ListItem active={true}>`}</code> will cancel out the <code>outlined</code> variant.
                </p>
            </SectionSubProperty>
        </>}>
            {
                children
                ??
                <>
                    <p>
                        To make <LinkListItemPage /> (appear) active, set <code>{`<ListItem active={true}>`}</code>.
                    </p>
                    <p>
                        You can also set the <code>active</code> at <code>{`<List active={true}>`}</code>, so the entire <LinkListItemPage />s are active.<br />
                        To make an exception in a/some <LinkListItemPage />(s), set <code>{`<ListItem active={false} inheritActive={false}>`}</code>.<br />
                        Note: the <code>{`inheritActive={false}`}</code> prevents the active state on <CurrentComponent /> affecting the <LinkListItemPage />.
                    </p>
                </>
            }
        </SectionSubProperty>
    );
};
export const SectionPropertyEnabled = ({ property, properties, propertySuffix = defaultPropertySuffix, children, ...restProps }: SectionPropertyProps) => {
    return (
        <SectionSubProperty {...restProps} propertySuffix={propertySuffix} property={property ?? 'enabled'} properties={properties ?? 'Disabled Items'} preview={<>
            <List theme='primary'>
                <ListItem>
                    A first item (not clickable)
                </ListItem>
                <ListItem enabled={false}>
                    A second item (not clickable + disabled)
                </ListItem>
                <ListItem enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
                    A third item (clickable + disabled)
                </ListItem>
                <ListItem enabled={false} actionCtrl={true} href='https://www.google.com'>
                    A fourth item (clickable + disabled)
                    <p>
                        <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
                    </p>
                </ListItem>
                <ListItem enabled={false} active={true} actionCtrl={true} onClick={() => alert('hello world')}>
                    A fifth item item (clickable + disabled + active)
                </ListItem>
                <ListItem enabled={false} active={true} theme='danger' actionCtrl={true} href='https://www.google.com'>
                    A seventh item item (clickable + disabled + active)
                    <p>
                        <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
                    </p>
                </ListItem>
            </List>
            <p></p>
            <TypeScriptCode>{`
<List theme='primary'>
    <ListItem>
        A first item (not clickable)
    </ListItem>
    <ListItem enabled={false}>
        A second item (not clickable + disabled)
    </ListItem>
    <ListItem enabled={false} actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable + disabled)
    </ListItem>
    <ListItem enabled={false} actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable + disabled)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </ListItem>
    <ListItem enabled={false} active={true} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable + disabled + active)
    </ListItem>
    <ListItem enabled={false} active={true} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable + disabled + active)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </ListItem>
</List>

/* alternate code but with the similar result: */
<List enabled={false} theme='primary'>
    <ListItem enabled={true} inheritEnabled={false}>
        A first item (not clickable)
    </ListItem>
    <ListItem>
        A second item (not clickable + disabled)
    </ListItem>
    <ListItem actionCtrl={true} onClick={() => alert('hello world')}>
        A third item (clickable + disabled)
    </ListItem>
    <ListItem actionCtrl={true} href='https://www.google.com'>
        A fourth item (clickable + disabled)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </ListItem>
    <ListItem active={true} actionCtrl={true} onClick={() => alert('hello world')}>
        A fifth item item (clickable + disabled + active)
    </ListItem>
    <ListItem active={true} theme='danger' actionCtrl={true} href='https://www.google.com'>
        A seventh item item (clickable + disabled + active)
        <p>
            <small>note: only appear disabled, but still functional because this is a link, the disabled state is not supported in link.</small>
        </p>
    </ListItem>
</List>
            `}</TypeScriptCode>
        </>}>
            {
                children
                ??
                <>
                    <p>
                        To make <LinkListItemPage /> (appear) disabled, set <code>{`<ListItem enabled={false}>`}</code>.
                    </p>
                    <p>
                        You can also set the <code>enabled</code> at <code>{`<List enabled={false}>`}</code>, so the entire <LinkListItemPage />s are disabled.<br />
                        To make an exception in a/some <LinkListItemPage />(s), set <code>{`<ListItem enabled={true} inheritEnabled={false}>`}</code>.<br />
                        Note: the <code>{`inheritEnabled={false}`}</code> prevents the disabled state on <CurrentComponent /> affecting the <LinkListItemPage />.
                    </p>
                </>
            }
        </SectionSubProperty>
    );
};



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/list' component={<LinkListPage />} nestedComponent={<LinkListItemPage />} bases={<LinkIndicatorPage />}>
            <Head>
                <title>&lt;List&gt; Component</title>
                <meta name="description" content="Using <List> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a presentation component for displaying a series of content.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoListLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <List theme='primary'>
                        <ListItem>
                            An inherit theme
                        </ListItem>
                        <ListItem>
                            An inherit theme
                        </ListItem>
                        <ListItem theme='primary'>
                            A primary theme
                        </ListItem>
                        <ListItem theme='secondary'>
                            A secondary theme
                        </ListItem>
                        <ListItem theme='success'>
                            A success theme
                        </ListItem>
                        <ListItem theme='info'>
                            A info theme
                        </ListItem>
                        <ListItem theme='warning'>
                            A warning theme
                        </ListItem>
                        <ListItem theme='danger'>
                            A danger theme
                        </ListItem>
                        <ListItem theme='light'>
                            A light theme
                        </ListItem>
                        <ListItem theme='dark'>
                            A dark theme
                        </ListItem>
                    </List>
                    <p></p>
                    <TypeScriptCode>{`
<List theme='primary'>
    <ListItem>
        An inherit theme
    </ListItem>
    <ListItem>
        An inherit theme
    </ListItem>
    <ListItem theme='primary'>
        A primary theme
    </ListItem>
    <ListItem theme='secondary'>
        A secondary theme
    </ListItem>
    <ListItem theme='success'>
        A success theme
    </ListItem>
    <ListItem theme='info'>
        A info theme
    </ListItem>
    <ListItem theme='warning'>
        A warning theme
    </ListItem>
    <ListItem theme='danger'>
        A danger theme
    </ListItem>
    <ListItem theme='light'>
        A light theme
    </ListItem>
    <ListItem theme='dark'>
        A dark theme
    </ListItem>
</List>
                    `}</TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <List theme='primary'>
                        <ListItem>
                            An inherit size
                        </ListItem>
                        <ListItem>
                            An inherit size
                        </ListItem>
                        <ListItem size='sm'>
                            A smaller size
                        </ListItem>
                        <ListItem size={undefined}>
                            A default size
                        </ListItem>
                        <ListItem size='lg'>
                            A larger size
                        </ListItem>
                    </List>
                    <p></p>
                    <TypeScriptCode>{`
<List theme='primary'>
    <ListItem>
        An inherit size
    </ListItem>
    <ListItem>
        An inherit size
    </ListItem>
    <ListItem size='sm'>
        A smaller size
    </ListItem>
    <ListItem size={undefined}>
        A default size
    </ListItem>
    <ListItem size='lg'>
        A larger size
    </ListItem>
</List>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <List theme='primary'>
                            <ListItem>
                                A first item
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem nude={true}>
                                A third item (nude)
                            </ListItem>
                            <ListItem nude={true}>
                                <div style={{ background: 'pink', padding: '1em', display: 'flex', justifyContent: 'center' }}>
                                    hello world
                                </div>
                            </ListItem>
                            <ListItem nude={true}>
                                A fifth item (nude)
                            </ListItem>
                        </List>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<List theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem nude={true}>
        A third item (nude)
    </ListItem>
    <ListItem nude={true}>
        <div style={{ background: 'pink', padding: '1em', display: 'flex', justifyContent: 'center' }}>
            hello world
        </div>
    </ListItem>
    <ListItem nude={true}>
        A fifth item (nude)
    </ListItem>
</List>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <List theme='primary'>
                        <ListItem>
                            A first item
                        </ListItem>
                        <ListItem>
                            A second item
                        </ListItem>
                        <ListItem gradient={true}>
                            A third item (gradient)
                        </ListItem>
                        <ListItem gradient={true}>
                            A fourth item (gradient)
                        </ListItem>
                    </List>
                    <p></p>
                    <TypeScriptCode>{`
<List theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem gradient={true}>
        A third item (gradient)
    </ListItem>
    <ListItem gradient={true}>
        A fourth item (gradient)
    </ListItem>
</List>

/* enabling gradient at <List> level: */
<List gradient={true} theme='primary'>
    <ListItem>
        A first item (gradient)
    </ListItem>
    <ListItem>
        A second item (gradient)
    </ListItem>
    <ListItem>
        A third item (gradient)
    </ListItem>
    <ListItem>
        A fourth item (gradient)
    </ListItem>
</List>
                    `}</TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        <List theme='primary'>
                            <ListItem>
                                A first item
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem outlined={true}>
                                A third item (outlined)
                            </ListItem>
                            <ListItem outlined={true}>
                                A fourth item (outlined)
                            </ListItem>
                            <ListItem outlined={false}>
                                A fifth item
                            </ListItem>
                        </List>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<List theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem outlined={true}>
        A third item (outlined)
    </ListItem>
    <ListItem outlined={true}>
        A fourth item (outlined)
    </ListItem>
    <ListItem outlined={false}>
        A fifth item
    </ListItem>
</List>

/* enabling outlined at <List> level: */
<List outlined={true} theme='primary'>
    <ListItem>
        A first item (outlined)
    </ListItem>
    <ListItem>
        A second item (outlined)
    </ListItem>
    <ListItem>
        A third item (outlined)
    </ListItem>
    <ListItem>
        A fourth item (outlined)
    </ListItem>
    <ListItem>
        A fifth item (outlined)
    </ListItem>
</List>
                    `}</TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <List mild={false} theme='primary'>
                        <ListItem>
                            A first item
                        </ListItem>
                        <ListItem>
                            A second item
                        </ListItem>
                        <ListItem mild={true}>
                            A third item (mild)
                        </ListItem>
                        <ListItem mild={true}>
                            A fourth item (mild)
                        </ListItem>
                        <ListItem mild={false}>
                            A fifth item
                        </ListItem>
                    </List>
                    <p></p>
                    <TypeScriptCode>{`
<List mild={false} theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem mild={true}>
        A third item (mild)
    </ListItem>
    <ListItem mild={true}>
        A fourth item (mild)
    </ListItem>
    <ListItem mild={false}>
        A fifth item
    </ListItem>
</List>

/* disabling mild at <List> level: */
<List mild={false} theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem>
        A third item
    </ListItem>
    <ListItem>
        A fourth item
    </ListItem>
    <ListItem>
        A fifth item
    </ListItem>
</List>
                    `}</TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyOrientation>
                    <SectionPropertyOrientationBlock>
                        <List orientation='block' theme='primary'>
                            <ListItem>
                                A first item
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem>
                                A third item
                            </ListItem>
                            <ListItem>
                                A fourth item
                            </ListItem>
                            <ListItem>
                                A fifth item
                            </ListItem>
                        </List>
                        <p></p>
                        <TypeScriptCode>{`
<List orientation='block' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem>
        A third item
    </ListItem>
    <ListItem>
        A fourth item
    </ListItem>
    <ListItem>
        A fifth item
    </ListItem>
</List>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationBlock>
                    <SectionPropertyOrientationInline>
                        <div style={{ overflowX: 'auto' }}>
                            <List orientation='inline' theme='primary'>
                                <ListItem>
                                    A first item
                                </ListItem>
                                <ListItem>
                                    A second item
                                </ListItem>
                                <ListItem>
                                    A third item
                                </ListItem>
                                <ListItem>
                                    A fourth item
                                </ListItem>
                                <ListItem>
                                    A fifth item
                                </ListItem>
                            </List>
                        </div>
                        <p></p>
                        <TypeScriptCode>{`
<List orientation='inline' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem>
        A third item
    </ListItem>
    <ListItem>
        A fourth item
    </ListItem>
    <ListItem>
        A fifth item
    </ListItem>
</List>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationInline>
                    <SectionPropertyOrientationResponsive>
                        <Tips>
                            <p>
                                Try to <strong>resize</strong> the <span style={{ background :'pink', border : 'solid 1px darkred', padding: '0.15em' }}>red container</span> below:
                            </p>
                        </Tips>
                        <p></p>
                        <ResponsiveProvider<OrientationName> fallbacks={[
                            'inline', // the first try, if overflow is detected, then try next
                            'block',  // the last try
                        ]}>{(currentFallback) => (
                            // a <div> to watch for overflows
                            <div style={{
                                display    : 'block',
                                overflow   : 'hidden',
                                background : 'pink',
                                border     : 'solid 1px darkred',
                                resize     : 'horizontal',
                                padding    : '1rem',
                                maxWidth   : '100%',
                            }}>
                                <List orientation={currentFallback} theme='primary'>
                                    <ListItem>
                                        A_first_item
                                    </ListItem>
                                    <ListItem>
                                        A_second_item
                                    </ListItem>
                                    <ListItem>
                                        A_third_item
                                    </ListItem>
                                    <ListItem>
                                        A_fourth_item
                                    </ListItem>
                                </List>
                            </div>
                        )}</ResponsiveProvider>
                        <p></p>
                        <TypeScriptCode>{`
<ResponsiveProvider fallbacks={[
    'inline', // the first try, if overflow is detected, then try next
    'block',  // the last try
]}>{(currentFallback) => (
    // a <div> to watch for overflows
    <div style={{
        display    : 'block',
        overflow   : 'hidden',
        background : 'pink',
        border     : 'solid 1px darkred',
        resize     : 'horizontal',
        padding    : '1rem',
        maxWidth   : '100%',
    }}>
        <List orientation={currentFallback} theme='primary'>
            <ListItem>
                A_first_item
            </ListItem>
            <ListItem>
                A_second_item
            </ListItem>
            <ListItem>
                A_third_item
            </ListItem>
            <ListItem>
                A_fourth_item
            </ListItem>
        </List>
    </div>
)}</ResponsiveProvider>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationResponsive>
                </SectionPropertyOrientation>
                <SectionPropertyListStyle>
                    <SectionPropertyFlatStyle>
                        <List listStyle='flat' theme='primary'>
                            <ListItem>
                                A first item
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem theme='success'>
                                A third item
                            </ListItem>
                            <ListItem active={true}>
                                A fourth item
                            </ListItem>
                            <ListItem theme='danger'>
                                A fifth item
                            </ListItem>
                        </List>
                        <p></p>
                        <TypeScriptCode>{`
<List listStyle='flat' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem active={true}>
        A fourth item
    </ListItem>
    <ListItem theme='danger'>
        A fifth item
    </ListItem>
</List>
                        `}</TypeScriptCode>
                    </SectionPropertyFlatStyle>
                    <SectionPropertyFlushStyle>
                        <List listStyle='flush' theme='primary'>
                            <ListItem>
                                A first item
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem theme='success'>
                                A third item
                            </ListItem>
                            <ListItem active={true}>
                                A fourth item
                            </ListItem>
                            <ListItem theme='danger'>
                                A fifth item
                            </ListItem>
                        </List>
                        <p></p>
                        <TypeScriptCode>{`
<List listStyle='flush' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem active={true}>
        A fourth item
    </ListItem>
    <ListItem theme='danger'>
        A fifth item
    </ListItem>
</List>
                        `}</TypeScriptCode>
                    </SectionPropertyFlushStyle>
                    <SectionPropertyJoinedStyle>
                        <List listStyle='joined' theme='primary'>
                            <ListItem>
                                A first item
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem theme='success'>
                                A third item
                            </ListItem>
                            <ListItem active={true}>
                                A fourth item
                            </ListItem>
                            <ListItem theme='danger'>
                                A fifth item
                            </ListItem>
                        </List>
                        <p></p>
                        <TypeScriptCode>{`
<List listStyle='joined' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem active={true}>
        A fourth item
    </ListItem>
    <ListItem theme='danger'>
        A fifth item
    </ListItem>
</List>
                        `}</TypeScriptCode>
                    </SectionPropertyJoinedStyle>
                    
                    <SectionPropertyContentStyle>
                        <List listStyle='content' theme='primary'>
                            <ListItem>
                                A first item
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem theme='success'>
                                A third item
                            </ListItem>
                            <ListItem active={true}>
                                A fourth item
                            </ListItem>
                            <ListItem theme='danger'>
                                A fifth item
                            </ListItem>
                        </List>
                        <p></p>
                        <TypeScriptCode>{`
<List listStyle='content' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem active={true}>
        A fourth item
    </ListItem>
    <ListItem theme='danger'>
        A fifth item
    </ListItem>
</List>
                        `}</TypeScriptCode>
                    </SectionPropertyContentStyle>
                    <SectionPropertyBtnStyle>
                        <List listStyle='btn' theme='primary'>
                            <ListItem>
                                A first item
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem theme='success'>
                                A third item
                            </ListItem>
                            <ListItem active={true}>
                                A fourth item
                            </ListItem>
                            <ListItem theme='danger'>
                                A fifth item
                            </ListItem>
                        </List>
                        <p></p>
                        <TypeScriptCode>{`
<List listStyle='btn' theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem active={true}>
        A fourth item
    </ListItem>
    <ListItem theme='danger'>
        A fifth item
    </ListItem>
</List>
                        `}</TypeScriptCode>
                        <SectionSubProperty titleTag='h5' propertySuffix={true} property={`actionCtrl={true}`} properties='Make the Buttons Functional' preview={<>
                            <List listStyle='btn' actionCtrl={true} theme='primary'>
                                <ListItem>
                                    A first item
                                </ListItem>
                                <ListItem actionCtrl={false}>
                                    A second item (not clickable)
                                </ListItem>
                                <ListItem theme='success'>
                                    A third item
                                </ListItem>
                                <ListItem active={true} href='https://www.google.com'>
                                    A fourth item
                                </ListItem>
                                <ListItem theme='danger' onClick={() => alert('hello world')}>
                                    A fifth item
                                </ListItem>
                            </List>
                            <p></p>
                            <TypeScriptCode>{`
<List listStyle='btn' actionCtrl={true} theme='primary'>
    <ListItem>
        A first item
    </ListItem>
    <ListItem actionCtrl={false}>
        A second item (not clickable)
    </ListItem>
    <ListItem theme='success'>
        A third item
    </ListItem>
    <ListItem active={true} href='https://www.google.com'>
        A fourth item
    </ListItem>
    <ListItem theme='danger' onClick={() => alert('hello world')}>
        A fifth item
    </ListItem>
</List>
                            `}</TypeScriptCode>
                        </>}>
                            <ContentMakeListItemClickable />
                        </SectionSubProperty>
                    </SectionPropertyBtnStyle>
                </SectionPropertyListStyle>
                <SectionPropertyStyles />
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActionCtrl />
                <SectionPropertyActive />
                <SectionPropertyEnabled />
            </SectionStates>
            <SectionCustomizing specList={
                <SpecList>
                    <DetailSpecItem title='Button Styles'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>btnSpacing</code>
                                <p>The default spacing between buttons.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>btnSpacingSm</code>
                                <p>The spacing between buttons when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>btnSpacingLg</code>
                                <p>The spacing between buttons when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Tab Styles'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>tabTextAlign</code>
                                <p>The text alignment of tabs.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>tabBorderRadius</code>
                                <p>The default border-radius of tabs.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>tabBorderRadiusSm</code>
                                <p>The border-radius of tabs when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>tabBorderRadiusLg</code>
                                <p>The border-radius of tabs when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Breadcrumb Styles'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>breadcrumbPaddingInline</code>
                                <p>The default inner spacing on the left &amp; right of breadcrumb items.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>breadcrumbPaddingBlock</code>
                                <p>The default inner spacing on the top &amp; bottom of breadcrumb items.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>breadcrumbPaddingInlineSm</code>
                                <p>The inner spacing on the left &amp; right of breadcrumb items when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>breadcrumbPaddingBlockSm</code>
                                <p>The inner spacing on the top &amp; bottom of breadcrumb items when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>breadcrumbPaddingInlineLg</code>
                                <p>The inner spacing on the left &amp; right of breadcrumb items when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>breadcrumbPaddingBlockLg</code>
                                <p>The inner spacing on the top &amp; bottom of breadcrumb items when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>breadcrumbSeparatorImg</code>
                                <p>The background-image of separator.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>breadcrumbSeparatorInlineSize</code>
                                <p>The width of separator.</p>
                                <p>The height is calculated automatically by its <code>aspect-ratio</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>breadcrumbSeparatorMarginInline</code>
                                <p>The left &amp; right margin of separator.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Bullet Styles'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>bulletSpacing</code>
                                <p>The default spacing between bullets.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>bulletSpacingSm</code>
                                <p>The spacing between bullets when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>bulletSpacingLg</code>
                                <p>The spacing between bullets when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                            
                            <SimpleSpecItem>
                                <code>bulletPadding</code>
                                <p>The default inner spacing of bullets.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>bulletPaddingSm</code>
                                <p>The inner spacing of bullets when <code>{`size='sm'`}</code>.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>bulletPaddingLg</code>
                                <p>The inner spacing of bullets when <code>{`size='lg'`}</code>.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Numbered Styles'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>numberedContent</code>
                                <p>A custom content of <code>::before</code> element of each <LinkListItemPage />.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { List } from '@nodestrap/list'

export default function ProductList(props) {
    return (
        <List
            {...props} // preserves other properties
            
            theme={props.theme ?? 'success'} // override default value of theme to 'success'
            mild={props.mild ?? false}       // override default value of mild  to false
        >
            { props.children }
        </List>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesListLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesListBasicVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> but <strong>excluding variants</strong> from <LinkUsesIndicatorVariantsPage />.
                            </p>
                            <p>
                                Equivalent to <code>usesListVariants()</code> <strong>minus</strong> <LinkUsesIndicatorVariantsPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesListVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code>, <code>ListVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                            <p>
                                Equivalent to <code>usesListBasicVariants()</code> <strong>plus</strong> <LinkUsesIndicatorVariantsPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesListStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentComponent />.
                            </p>
                            <p>
                                Currently the states are equivalent to <CurrentBaseComponents />&apos;s states.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { List, usesListLayout, usesListVariants, usesListStates } from '@nodestrap/list'

const useProductListSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <List>:
            usesListLayout(),
            usesListVariants(),
            usesListStates(),
        ]),
        style({
            // then overwrite with your style:
            margin  : '1em',
            /* ... */
            
            ...variants([
                rule('.big', {
                    // define the style at 'big' variant:
                    fontSize: 'xx-large',
                    /* ... */
                }),
                rule('.dark', {
                    // define the style at 'dark' variant:
                    background-color : 'black',
                    color            : 'white',
                    /* ... */
                }),
                /* ... */
            ]),
            
            /* ... */
        }),
    ),
]);

export default function ProductList(props) {
    const sheet = useProductListSheet();
    return (
        <List {...props} mainClass={sheet.main}>
            { props.children }
        </List>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
