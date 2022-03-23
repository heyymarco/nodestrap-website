import React, { useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkGroupPage, LinkListPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentNestedComponent, CurrentBaseComponents, SectionVariants, SectionStates, LinkUsesIndicatorVariantsPage, SectionPreviewProperty, LinkGroupChildrenPage } from '../../../components/common'
import { Group as GroupOri, GroupProps, OrientationName } from '@nodestrap/group'
import { Label } from '@nodestrap/label';
import { NumberInput } from '@nodestrap/input';
import { Button } from '@nodestrap/button';
import { Radio } from '@nodestrap/radio'
import { TypeScriptCode } from '../../../components/Code'
import ResponsiveProvider from '@nodestrap/responsive'
import { Tips } from '../../../components/Info'
import Element from '@nodestrap/element'
import {
    themeNames,
    SectionPropertyOrientation,
    SectionPropertyOrientationBlock,
    SectionPropertyOrientationInline,
    SectionPropertyOrientationResponsive,
} from '../../../components/common@Basic'
import {
    SectionPropertyActive,
    SectionPropertyActiveNoOutlined,
    SectionPropertyActiveNoMild,
    SectionPropertyEnabled,
} from '../../../components/common@Indicator'
import {
    SectionPropertyListStyle,
    SectionPropertyFlatStyle,
    SectionPropertyFlushStyle,
    SectionPropertyJoinedStyle,
    SectionPropertyContentStyle,
    SectionPropertyBtnStyle,
    SectionPropertyTabStyle,
    SectionPropertyBreadcrumbStyle,
    SectionPropertyBulletStyle,
    SectionPropertyNumberedStyle,
    ContentMakeItemsClickable,
    SectionPropertyActionCtrl,
} from '../../../components/common@List'
import {
    SectionPropertyTheme,
    SectionPropertySize,
    SectionPropertyNude,
    SectionPropertyGradient,
    SectionPropertyOutlined,
    SectionPropertyMild,
} from '../../../components/common@Group'

import loadable from '@loadable/component'
const DemoGroupLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Group' */'../../../components/DemoPanel@Group'))



const Group = (props: GroupProps) => <GroupOri
    {...props}
    theme={props.theme ?? 'primary'}
>
    {
        props.children
        ??
        [
            <Label key={0}>
                $
            </Label>,
            <NumberInput key={1} placeholder='price' enableValidation={false} />,
            <Label key={2}>
                .00
            </Label>,
            <Button key={3} theme={props.theme ? undefined : 'primary'}>
                Update
            </Button>,
        ]
    }
</GroupOri>

const GroupVert = (props: GroupProps) => <Group
    {...props}
    orientation={props.orientation ?? 'block'}
>
{
        props.children
        ??
        [
            <Radio key={0} name='sizeOpt' nude={false} enableValidation={false}>
                Small
            </Radio>,
            <Radio key={1} name='sizeOpt' nude={false} enableValidation={false}>
                Medium
            </Radio>,
            <Radio key={2} name='sizeOpt' nude={false} enableValidation={false}>
                Large
            </Radio>,
        ]
    }
</Group>

const GroupMixed = (props: GroupProps) => <Group
    orientation={props.orientation ?? 'inline'}
>
{
        props.children
        ??
        [
            <Label key={0}>
                Size
            </Label>,
            <GroupVert key={1} />
        ]
    }
</Group>



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/group' component={<LinkGroupPage />} nestedComponent={<LinkGroupChildrenPage />} bases={<LinkListPage />}>
            <Head>
                <title>&lt;Group&gt; Component</title>
                <meta name="description" content="Using <Group> component" />
            </Head>

            <SectionIntro>
                <p>
                    Displays a series of content.
                </p>
                <p>
                    Here the preview:
                </p>
                <Preview stretch={false}>
                    <Group />
                    <GroupMixed />
                </Preview>
            </SectionIntro>
            <SectionDemo>
                <DemoGroupLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview stretch={false}>
                        {themeNames.map((themeName, index) =>
                            <Group
                                theme={themeName}
                                active={true}
                                key={index}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Group
    theme='${themeName}'
>
    <Label>
        $
    </Label>
    <NumberInput placeholder='price' enableValidation={false} />
    <Label>
        .00
    </Label>
    <Button>
        Update
    </Button>
</Group>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview stretch={false}>
                        <Group
                            size='sm'
                            theme='primary'
                        />
                        <Group
                            size={undefined}
                            theme='primary'
                        />
                        <Group
                            size='lg'
                            theme='primary'
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Group
    size='sm'
    theme='primary'
>
    <Label>
        $
    </Label>
    <NumberInput placeholder='price' enableValidation={false} />
    <Label>
        .00
    </Label>
    <Button>
        Update
    </Button>
</Group>

<Group
    size={undefined}
    theme='primary'
>
    <Label>
        $
    </Label>
    <NumberInput placeholder='price' enableValidation={false} />
    <Label>
        .00
    </Label>
    <Button>
        Update
    </Button>
</Group>

<Group
    size='lg'
    theme='primary'
>
    <Label>
        $
    </Label>
    <NumberInput placeholder='price' enableValidation={false} />
    <Label>
        .00
    </Label>
    <Button>
        Update
    </Button>
</Group>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <Group
                            nude={true}
                            theme='primary'
                        />
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Group
    nude={true}
    theme='primary'
>
    <Label>
        $
    </Label>
    <NumberInput placeholder='price' enableValidation={false} />
    <Label>
        .00
    </Label>
    <Button>
        Update
    </Button>
</Group>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <TransparentPreview stretch={false}>
                        <Group
                            gradient={true}
                            theme='primary'
                        />
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Group
    gradient={true}
    theme='primary'
>
    <Label>
        $
    </Label>
    <NumberInput placeholder='price' enableValidation={false} />
    <Label>
        .00
    </Label>
    <Button>
        Update
    </Button>
</Group>
                    `}</TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview stretch={false}>
                        <Group
                            outlined={true}
                            theme='primary'
                        />
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Group
    outlined={true}
    theme='primary'
>
    <Label>
        $
    </Label>
    <NumberInput placeholder='price' enableValidation={false} />
    <Label>
        .00
    </Label>
    <Button>
        Update
    </Button>
</Group>
                    `}</TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <TransparentPreview stretch={false}>
                        <Group
                            mild={true}
                            theme='primary'
                        />
                        <Group
                            mild={false}
                            theme='primary'
                        />
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Group
    mild={true}
    theme='primary'
>
    <Label>
        $
    </Label>
    <NumberInput placeholder='price' enableValidation={false} />
    <Label>
        .00
    </Label>
    <Button>
        Update
    </Button>
</Group>

<Group
    mild={false}
    theme='primary'
>
    <Label>
        $
    </Label>
    <NumberInput placeholder='price' enableValidation={false} />
    <Label>
        .00
    </Label>
    <Button>
        Update
    </Button>
</Group>
                    `}</TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyOrientation>
                    <SectionPropertyOrientationBlock>
                        <Preview stretch={false}>
                            <GroupVert
                                orientation='block'
                                theme='primary'
                            />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Group
    orientation='block'
    theme='primary'
>
    <Radio name='sizeOpt' nude={false} enableValidation={false}>
        Small
    </Radio>
    <Radio name='sizeOpt' nude={false} enableValidation={false}>
        Medium
    </Radio>
    <Radio name='sizeOpt' nude={false} enableValidation={false}>
        Large
    </Radio>
</Group>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationBlock>
                    <SectionPropertyOrientationInline>
                        <Preview stretch={false}>
                            <GroupVert
                                orientation='inline'
                                theme='primary'
                            />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Group
    orientation='inline'
    theme='primary'
>
    <Radio name='sizeOpt' nude={false} enableValidation={false}>
        Small
    </Radio>
    <Radio name='sizeOpt' nude={false} enableValidation={false}>
        Medium
    </Radio>
    <Radio name='sizeOpt' nude={false} enableValidation={false}>
        Large
    </Radio>
</Group>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationInline>
                    <SectionPropertyOrientationResponsive>
                        <Preview>
                            <Tips>
                                <p>
                                    Try to <strong>resize</strong> the <span style={{ background :'pink', border : 'solid 1px darkred', padding: '0.15em' }}>red container</span> below:
                                </p>
                            </Tips>
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
                                    <GroupVert
                                        orientation={currentFallback}
                                        theme='primary'
                                    />
                                </div>
                            )}</ResponsiveProvider>
                        </Preview>
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
        <Group
            orientation={currentFallback}
            theme='primary'
        >
            <Radio name='sizeOpt' nude={false} enableValidation={false}>
                Small
            </Radio>
            <Radio name='sizeOpt' nude={false} enableValidation={false}>
                Medium
            </Radio>
            <Radio name='sizeOpt' nude={false} enableValidation={false}>
                Large
            </Radio>
        </Group>
    </div>
)}</ResponsiveProvider>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationResponsive>
                </SectionPropertyOrientation>
                <SectionPropertyListStyle>
                    <SectionPropertyFlatStyle>
                        <TransparentPreview stretch={false}>
                            <Group listStyle='flat' />
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Group listStyle='flat' theme='primary'>
    <Label>
        $
    </Label>
    <NumberInput placeholder='price' enableValidation={false} />
    <Label>
        .00
    </Label>
    <Button>
        Update
    </Button>
</Group>
                        `}</TypeScriptCode>
                    </SectionPropertyFlatStyle>
                    <SectionPropertyFlushStyle>
                        <TransparentPreview stretch={false}>
                            <Group listStyle='flush' />
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Group listStyle='flush' theme='primary'>
    <Label>
        $
    </Label>
    <NumberInput placeholder='price' enableValidation={false} />
    <Label>
        .00
    </Label>
    <Button>
        Update
    </Button>
</Group>
                        `}</TypeScriptCode>
                    </SectionPropertyFlushStyle>
                    <SectionPropertyJoinedStyle>
                        <TransparentPreview stretch={false}>
                            <Group listStyle='joined' />
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Group listStyle='joined' theme='primary'>
    <Label>
        $
    </Label>
    <NumberInput placeholder='price' enableValidation={false} />
    <Label>
        .00
    </Label>
    <Button>
        Update
    </Button>
</Group>
                        `}</TypeScriptCode>
                    </SectionPropertyJoinedStyle>
                </SectionPropertyListStyle>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview stretch={false}>
                        <Group
                            active={true}
                            theme='primary'
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Group
    active={true}
    theme='primary'
>
    <Label>
        $
    </Label>
    <NumberInput placeholder='price' enableValidation={false} />
    <Label>
        .00
    </Label>
    <Button>
        Update
    </Button>
</Group>
                    `}</TypeScriptCode>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview stretch={false}>
                        <Group
                            enabled={false}
                            theme='primary'
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Group
    enabled={false}
    theme='primary'
>
    <Label>
        $
    </Label>
    <NumberInput placeholder='price' enableValidation={false} />
    <Label>
        .00
    </Label>
    <Button>
        Update
    </Button>
</Group>
                    `}</TypeScriptCode>
                </SectionPropertyEnabled>
            </SectionStates>
            <SectionCustomizing specList={
                <SpecList>
                    <SimpleSpecItem>
                        -- no config yet --
                    </SimpleSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Group } from '@nodestrap/group'

export default function ProductGroup(props) {
    return (
        <Group
            {...props} // preserves other properties
            
            theme={props.theme ?? 'success'} // override default value of theme to 'success'
            mild={props.mild ?? false}       // override default value of mild  to false
        >
            { props.children }
        </Group>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesGroupLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesGroupBasicVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> but <strong>excluding variants</strong> from <LinkUsesIndicatorVariantsPage />.
                            </p>
                            <p>
                                Equivalent to <code>usesGroupVariants()</code> <strong>minus</strong> <LinkUsesIndicatorVariantsPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesGroupVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code>, <code>GroupVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                            <p>
                                Equivalent to <code>usesGroupBasicVariants()</code> <strong>plus</strong> <LinkUsesIndicatorVariantsPage />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesGroupStates()'>
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
import { Group, usesGroupLayout, usesGroupVariants, usesGroupStates } from '@nodestrap/group'

const useProductGroupSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Group>:
            usesGroupLayout(),
            usesGroupVariants(),
            usesGroupStates(),
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

export default function ProductGroup(props) {
    const sheet = useProductGroupSheet();
    return (
        <Group {...props} mainClass={sheet.main}>
            { props.children }
        </Group>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
