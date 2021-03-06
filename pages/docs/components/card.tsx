import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkCardPage, LinkIndicatorPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionVariables, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, SectionVariants, SectionStates } from '../../../components/common'
import { Card, OrientationName } from '@nodestrap/card'
import { TypeScriptCode } from '../../../components/Code'
import ResponsiveProvider from '@nodestrap/responsive'
import { Tips } from '../../../components/Info'
import Element from '@nodestrap/element'
import {
    SectionPropertyTheme,
    SectionPropertySize,
 // SectionPropertyNude,
    SectionPropertyGradient,
    SectionPropertyOutlined,
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
    SectionPropertyMild,
    SectionPropertyCardStyle,
    SectionPropertyFlatStyle,
    SectionPropertyFlushStyle,
    SectionPropertyJoinedStyle,
} from '../../../components/common@Card'

import loadable from '@loadable/component'
const DemoCardLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Card' */'../../../components/DemoPanel@Card'))



const DummyContents = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
            </p>
            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
            </p>
        </>
    );
};
const CardWithActiveOutlined = () => {
    const [cardRef, isActive] = useFlipFlop({ defaultState: true });
    
    
    
    return (
        <Card
            elmRef={cardRef}
            active={isActive}
            outlined={true}
            theme='primary'
            header={<>
                A Card with <Element tag={isActive ? 'span' : 'del'}>Active State</Element> + Outlined Variant
            </>}
            footer={<>
                Just for fun!
            </>}
        >
            <DummyContents />
        </Card>
    );
};
const CardWithActiveMild     = () => {
    const [cardRef, isActive] = useFlipFlop({ defaultState: true });
    
    
    
    return (
        <Card
            elmRef={cardRef}
            active={isActive}
            mild={true}
            theme='primary'
            header={<>
                A Card with <Element tag={isActive ? 'span' : 'del'}>Active State</Element> + Mild Variant
            </>}
            footer={<>
                Just for fun!
            </>}
        >
            <DummyContents />
        </Card>
    );
};



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/card' component={<LinkCardPage />} bases={<LinkIndicatorPage />}>
            <Head>
                <title>&lt;Card&gt; Component</title>
                <meta name="description" content="Using <Card> component" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a presentation component for displaying contents with optional header &amp; footer.
                </p>
            </SectionIntro>
            <SectionDemo>
                <DemoCardLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview>
                        <Card
                            theme='primary'
                            header={<>
                                A Card with Primary Theme
                            </>}
                            footer={<>
                                Just for fun!
                            </>}
                        >
                            <DummyContents />
                        </Card>
                        <Card
                            theme='success'
                            header={<>
                                A Card with Success Theme
                            </>}
                            footer={<>
                                Just for fun!
                            </>}
                        >
                            <DummyContents />
                        </Card>
                        <Card
                            theme='danger'
                            header={<>
                                A Card with Danger Theme
                            </>}
                            footer={<>
                                Just for fun!
                            </>}
                        >
                            <DummyContents />
                        </Card>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Card
    theme='primary'
    header={<>
        A Card with Primary Theme
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>

<Card
    theme='success'
    header={<>
        A Card with Success Theme
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>

<Card
    theme='danger'
    header={<>
        A Card with Danger Theme
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                    `}</TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <Card
                            size='sm'
                            theme='primary'
                            header={<>
                                A Card with Smaller Size
                            </>}
                            footer={<>
                                Just for fun!
                            </>}
                        >
                            <DummyContents />
                        </Card>
                        <Card
                            size={undefined}
                            theme='primary'
                            header={<>
                                A Card with Default Size
                            </>}
                            footer={<>
                                Just for fun!
                            </>}
                        >
                            <DummyContents />
                        </Card>
                        <Card
                            size='lg'
                            theme='primary'
                            header={<>
                                A Card with Larger Size
                            </>}
                            footer={<>
                                Just for fun!
                            </>}
                        >
                            <DummyContents />
                        </Card>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Card
    size='sm'
    theme='primary'
    header={<>
        A Card with Smaller Size
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>

<Card
    size={undefined}
    theme='primary'
    header={<>
        A Card with Default Size
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>

<Card
    size='lg'
    theme='primary'
    header={<>
        A Card with Larger Size
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                {/* <SectionPropertyNude>
                    <TransparentPreview>
                        <Card
                            nude={true}
                            theme='primary'
                            header={<>
                                A Card with Nude Variant
                            </>}
                            footer={<>
                                Just for fun!
                            </>}
                        >
                            <DummyContents />
                        </Card>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Card
    nude={true}
    theme='primary'
    header={<>
        A Card with Nude Variant
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                    `}</TypeScriptCode>
                </SectionPropertyNude> */}
                <SectionPropertyGradient>
                    <Preview>
                        <Card
                            gradient={true}
                            theme='primary'
                            header={<>
                                A Card with Gradient Variant
                            </>}
                            footer={<>
                                Just for fun!
                            </>}
                        >
                            <DummyContents />
                        </Card>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Card
    gradient={true}
    theme='primary'
    header={<>
        A Card with Gradient Variant
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                    `}</TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        <Card
                            outlined={true}
                            theme='primary'
                            header={<>
                                A Card with Outlined Variant
                            </>}
                            footer={<>
                                Just for fun!
                            </>}
                        >
                            <DummyContents />
                        </Card>
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Card
    outlined={true}
    theme='primary'
    header={<>
        A Card with Outlined Variant
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                    `}</TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        <Card
                            mild={false}
                            theme='primary'
                            header={<>
                                A Card with not_Mild Variant
                            </>}
                            footer={<>
                                Just for fun!
                            </>}
                        >
                            <DummyContents />
                        </Card>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Card
    mild={false}
    theme='primary'
    header={<>
        A Card with not_Mild Variant
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                    `}</TypeScriptCode>
                </SectionPropertyMild>
                <SectionPropertyOrientation>
                    <SectionPropertyOrientationBlock>
                        <Preview>
                            <Card
                                orientation='block'
                                theme='primary'
                                header={<>
                                    A Card with Block Orientation
                                </>}
                                footer={<>
                                    Just for fun!
                                </>}
                            >
                                <DummyContents />
                            </Card>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Card
    orientation='block'
    theme='primary'
    header={<>
        A Card with block Orientation
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationBlock>
                    <SectionPropertyOrientationInline>
                        <Preview blockDisplay={true}>
                            <Card
                                orientation='inline'
                                theme='primary'
                                header={<>
                                    A Card with Inline Orientation
                                </>}
                                footer={<>
                                    Just for fun!
                                </>}
                            >
                                <DummyContents />
                            </Card>
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Card
    orientation='inline'
    theme='primary'
    header={<>
        A Card with inline Orientation
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
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
                                    overflow   : 'auto',
                                    background : 'pink',
                                    border     : 'solid 1px darkred',
                                    resize     : 'horizontal',
                                    padding    : '1rem',
                                    maxWidth   : '100%',
                                }}>
                                    <Card
                                        orientation={currentFallback}
                                        theme='primary'
                                        header={<>
                                            A Card with Responsive Orientation
                                        </>}
                                        footer={<>
                                            Just for fun!
                                        </>}
                                    >
                                        <DummyContents />
                                    </Card>
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
        overflow   : 'auto',
        background : 'pink',
        border     : 'solid 1px darkred',
        resize     : 'horizontal',
        padding    : '1rem',
        maxWidth   : '100%',
    }}>
        <Card
            orientation={currentFallback}
            theme='primary'
            header={<>
                A Card with Responsive Orientation
            </>}
            footer={<>
                Just for fun!
            </>}
        >
            <p>...</p>
            <img alt='lorem image' src='/images/lorem-image-1.svg' />
            <p>...</p>
        </Card>
    </div>
)}</ResponsiveProvider>
                        `}</TypeScriptCode>
                    </SectionPropertyOrientationResponsive>
                </SectionPropertyOrientation>
                <SectionPropertyCardStyle>
                    <SectionPropertyFlatStyle>
                        <TransparentPreview>
                            <Card
                                cardStyle='flat'
                                theme='primary'
                                header={<>
                                    A Card with Flat Style
                                </>}
                                footer={<>
                                    Just for fun!
                                </>}
                            >
                                <DummyContents />
                            </Card>
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Card
    cardStyle='flat'
    theme='primary'
    header={<>
        A Card with Flat Style
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                        `}</TypeScriptCode>
                    </SectionPropertyFlatStyle>
                    <SectionPropertyFlushStyle>
                        <TransparentPreview>
                            <Card
                                cardStyle='flush'
                                theme='primary'
                                header={<>
                                    A Card with Flush Style
                                </>}
                                footer={<>
                                    Just for fun!
                                </>}
                            >
                                <DummyContents />
                            </Card>
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Card
    cardStyle='flush'
    theme='primary'
    header={<>
        A Card with Flush Style
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                        `}</TypeScriptCode>
                    </SectionPropertyFlushStyle>
                    <SectionPropertyJoinedStyle>
                        <TransparentPreview>
                            <Card
                                cardStyle='joined'
                                theme='primary'
                                header={<>
                                    A Card with Joined Style
                                </>}
                                footer={<>
                                    Just for fun!
                                </>}
                            >
                                <DummyContents />
                            </Card>
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Card
    cardStyle='joined'
    theme='primary'
    header={<>
        A Card with Joined Style
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                        `}</TypeScriptCode>
                    </SectionPropertyJoinedStyle>
                </SectionPropertyCardStyle>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview>
                        <Card
                            active={true}
                            theme='primary'
                            header={<>
                                A Card with Active State
                            </>}
                            footer={<>
                                Just for fun!
                            </>}
                        >
                            <DummyContents />
                        </Card>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Card
    active={true}
    theme='primary'
    header={<>
        A Card with Active State
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                    `}</TypeScriptCode>
                    <SectionPropertyActiveNoOutlined>
                        <TransparentPreview>
                            <CardWithActiveOutlined />
                        </TransparentPreview>
                        <p></p>
                        <TypeScriptCode>{`
<Card
    active={true}
    outlined={true}
    theme='primary'
    header={<>
        A Card with Active State + Outlined Variant
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                        `}</TypeScriptCode>
                    </SectionPropertyActiveNoOutlined>
                    <SectionPropertyActiveNoMild>
                        <Preview>
                            <CardWithActiveMild />
                        </Preview>
                        <p></p>
                        <TypeScriptCode>{`
<Card
    active={true}
    mild={true}
    theme='primary'
    header={<>
        A Card with Active State + Mild Variant
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                        `}</TypeScriptCode>
                    </SectionPropertyActiveNoMild>
                </SectionPropertyActive>
                <SectionPropertyEnabled>
                    <Preview>
                        <Card
                            enabled={false}
                            theme='primary'
                            header={<>
                                A Card with Disabled State
                            </>}
                            footer={<>
                                Just for fun!
                            </>}
                        >
                            <DummyContents />
                        </Card>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Card
    enabled={false}
    theme='primary'
    header={<>
        A Card with Disabled State
    </>}
    footer={<>
        Just for fun!
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' />
    <p>...</p>
</Card>
                    `}</TypeScriptCode>
                </SectionPropertyEnabled>
            </SectionStates>
            <SectionVariables specList={
                <SpecList>
                    <DetailSpecItem title='Sizes'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>boxSizing</code>
                                <p>Defines how the total width and height of <CurrentComponent /> is calculated.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>blockSize</code>
                                <p>The height of <CurrentComponent />.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Captions'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>captionFilter</code>
                                <p>A <code>filter</code> to apply to <CurrentComponent />&apos;s header &amp; footer.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Typos'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>overflowWrap</code>
                                <p>Defines how a <strong>long word</strong> inside <CurrentComponent /> is handled.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Card } from '@nodestrap/card'

export default function ProductCard(props) {
    return (
        <Card
            {...props} // preserves other properties
            
            theme={props.theme ?? 'success'} // override default value of theme to 'success'
            mild={props.mild ?? false}       // override default value of mild  to false
        >
            { props.children }
        </Card>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesCardLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesCardVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code>, <code>CardVariant</code>, and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesCardStates()'>
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
import { Card, usesCardLayout, usesCardVariants, usesCardStates } from '@nodestrap/card'

const useProductCardSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Card>:
            usesCardLayout(),
            usesCardVariants(),
            usesCardStates(),
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
                    backgroundColor : 'black',
                    color           : 'white',
                    /* ... */
                }),
                /* ... */
            ]),
            
            /* ... */
        }),
    ),
]);

export default function ProductCard(props) {
    const sheet = useProductCardSheet();
    return (
        <Card {...props} mainClass={sheet.main}>
            { props.children }
        </Card>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
