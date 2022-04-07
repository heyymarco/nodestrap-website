import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useFlipFlop } from '../../../components/hooks'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'

import { Preview, TransparentPreview } from '../../../components/Preview'
import { SectionInheritedProps, LinkNavbarPage, LinkIndicatorPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionVariables, SectionVariants, SectionStates, SectionIntro, SectionDemo, BusyBar, CurrentComponent, CurrentBaseComponents, LinkNavPage, SeeDocumentation } from '../../../components/common'
import { TypeScriptCode, TypeScriptCodeGatsbyJs, TypeScriptCodeNextJs, TypeScriptCodeReactRemix, TypeScriptCodeReactRouter } from '../../../components/Code'

import { Navbar as NavbarOri, NavbarProps} from '@nodestrap/navbar'
import { Nav, NavItem } from '@nodestrap/nav'
import Link from 'next/link'
import type { ListProps } from '@nodestrap/list'
import { ActionControl } from '@nodestrap/action-control'
import { Basic } from '@nodestrap/basic'
import { NavButton } from '@nodestrap/nav-button'
import { SearchInput } from '@nodestrap/input'
import {
    themeNames,
    SectionPropertyTheme,
    SectionPropertySize,
    SectionPropertyNude,
    SectionPropertyGradient,
    SectionPropertyOutlined,
} from '../../../components/common@Basic'
import {
    SectionPropertyMild,
    
    SectionPropertyActive,
} from '../../../components/common@Indicator'
import {
    SectionPropertyChildren,
    SectionPropertyChildrenAdv,
} from '../../../components/common@Navbar'

import loadable from '@loadable/component'
const DemoNavbarLazy = loadable(() => import(/* webpackChunkName: 'DemoPanel@Navbar' */'../../../components/DemoPanel@Navbar'))



const ExampleNavbarMenu = (compact: boolean) => <Nav orientation={compact ? 'block' : 'inline'}>
    <NavItem>
        <Link href='/'>Home</Link>
    </NavItem>
    <NavItem>
        <Link href='/docs'>Docs</Link>
    </NavItem>
    <NavItem>
        <Link href='/download'>Download</Link>
    </NavItem>
    <NavItem>
        <Link href='/about'>About</Link>
    </NavItem>
    <NavItem href='https://github.com/nodestrap' target='_blank'>
        GitHub
    </NavItem>
    <NavItem href='https://www.npmjs.com/org/nodestrap' target='_blank'>
        NPM
    </NavItem>
</Nav>

const Navbar = (props: NavbarProps) => <NavbarOri
    {...props}
    theme={props.theme ?? 'primary'}
    active={('active' in props) ? props.active : false}
    logo={
        <ActionControl mild={props.mild ?? false} style={{ border: 'none' }}>
            <Link href='/'>
                <img src='/images/test-logo.png' alt='logo' style={{ height: '30px' }} />
            </Link>
        </ActionControl>
    }
>
    { props.children ?? ExampleNavbarMenu }
</NavbarOri>

const NavbarPreview = () => {
    const [containerRef, isActiveFlip] = useFlipFlop({ defaultState: true });
    
    
    
    return (
        <Preview
            elmRef={containerRef}
        >{(isLoaded) => <>
            <div>
                <p>Full mode:</p>
                <Navbar compact={false} />
            </div>
            <div style={{ paddingBlockEnd: '16rem' }}>
                <p>Compact mode:</p>
                <Navbar
                    active={isLoaded ? isActiveFlip : true}
                    theme='primary'
                    compact={true}
                />
            </div>
        </>}</Preview>
    )
};

const CustomNavbarMenu = (props: ListProps) => {
    return (
        <Basic style={{
            display       : 'flex',
            flexDirection : (props.orientation === 'inline') ? 'row' : 'column',
            gap           : '1rem',
            border        : 'none',
        }}>
            <NavButton>
                <Link href='/'>Home</Link>
            </NavButton>
            <NavButton>
                <Link href='/docs'>Docs</Link>
            </NavButton>
            <NavButton href='https://github.com/nodestrap' target='_blank'>
                GitHub
            </NavButton>
            <SearchInput placeholder='search something' />
        </Basic>
    );
}



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/navbar' component={<LinkNavbarPage />} bases={<LinkIndicatorPage />}>
            <Head>
                <title>&lt;Navbar&gt; Component</title>
                <meta name="description" content="Using <Navbar> component" />
            </Head>

            <SectionIntro>
                <p>
                    Displays a series of navigation link on the top (usually) of a website with a responsive layout.
                </p>
                <p>
                    Here the preview:
                </p>
                <NavbarPreview />
                <p></p>
            </SectionIntro>
            <SectionDemo>
                <DemoNavbarLazy fallback={<BusyBar />} />
            </SectionDemo>
            <SectionPropertyChildren>
                <Preview>
                    <Navbar
                        theme='primary'
                    >{(compact) =>
                        <Nav orientation={compact ? 'block' : 'inline'}>
                            <NavItem>
                                <Link href='/'>Menu 1</Link>
                            </NavItem>
                            <NavItem>
                                <Link href='/docs'>Menu 2</Link>
                            </NavItem>
                            <NavItem href='https://github.com/nodestrap' target='_blank'>
                                Menu 3
                            </NavItem>
                            <NavItem href='https://www.npmjs.com/org/nodestrap' target='_blank'>
                                Menu 4
                            </NavItem>
                        </Nav>
                    }</Navbar>
                </Preview>
                <p></p>
                <TypeScriptCodeNextJs>{`
import { Navbar } from '@nodestrap/navbar'
import { Nav, NavItem } from '@nodestrap/nav'
import { ActionControl } from '@nodestrap/action-control'
import Link from 'next/link'

export default function MyPage() {
    return (
        <Navbar
            theme='primary'
            logo={
                <ActionControl mild={false} style={{ border: 'none' }}>
                    <Link href='/'>
                        <img src='/images/test-logo.png' alt='logo' style={{ height: '30px' }} />
                    </Link>
                </ActionControl>
            }
        >{(compact) =>
            <Nav orientation={compact ? 'block' : 'inline'}>
                <NavItem>
                    <Link href='/'>Menu 1</Link>
                </NavItem>
                <NavItem>
                    <Link href='/docs'>Menu 2</Link>
                </NavItem>
                <NavItem href='https://github.com/nodestrap' target='_blank'>
                    Menu 3
                </NavItem>
                <NavItem href='https://www.npmjs.com/org/nodestrap' target='_blank'>
                    Menu 4
                </NavItem>
            </Nav>
        }</Navbar>
    );
}
                `}</TypeScriptCodeNextJs>
                <p></p>
                <TypeScriptCodeGatsbyJs>{`
// coming soon
                `}</TypeScriptCodeGatsbyJs>
                <p></p>
                <TypeScriptCodeReactRouter>{`
import { Navbar } from '@nodestrap/navbar'
import { Nav, NavItem } from '@nodestrap/nav'
import { ActionControl } from '@nodestrap/action-control'

// import { Link } from 'react-router-dom'          // do not use the original <Link>
import { Link } from '@nodestrap/react-router-link' // instead use our compatible <Link>

export default function MyPage() {
    return (
        <Navbar
            theme='primary'
            logo={
                <ActionControl mild={false} style={{ border: 'none' }}>
                    <Link href='/'>
                        <img src='/images/test-logo.png' alt='logo' style={{ height: '30px' }} />
                    </Link>
                </ActionControl>
            }
        >{(compact) =>
            <Nav orientation={compact ? 'block' : 'inline'}>
                <NavItem>
                    <Link to='/'>Menu 1</Link>
                </NavItem>
                <NavItem>
                    <Link to='/docs'>Menu 2</Link>
                </NavItem>
                <NavItem href='https://github.com/nodestrap' target='_blank'>
                    Menu 3
                </NavItem>
                <NavItem href='https://www.npmjs.com/org/nodestrap' target='_blank'>
                    Menu 4
                </NavItem>
            </Nav>
        }</Navbar>
    );
}
                `}</TypeScriptCodeReactRouter>
                <p></p>
                <TypeScriptCodeReactRemix>{`
// coming soon
                `}</TypeScriptCodeReactRemix>
                <p>
                    For more information using <LinkNavPage />: <SeeDocumentation component={<LinkNavPage />} />.
                </p>
                <SectionPropertyChildrenAdv>
                    <Preview>
                        <div>
                            <Navbar
                                theme='primary'
                                compact={false}
                            >{(compact) =>
                                <CustomNavbarMenu orientation={compact ? 'block' : 'inline'} />
                            }</Navbar>
                        </div>
                        
                        <div style={{ paddingBlockEnd: '15rem' }}>
                            <Navbar
                                theme='primary'
                                compact={true}
                                active={undefined}
                                defaultActive={true}
                            >{(compact) =>
                                <CustomNavbarMenu orientation={compact ? 'block' : 'inline'} />
                            }</Navbar>
                        </div>
                    </Preview>
                    <p></p>
                    <TypeScriptCodeNextJs>{`
import { Navbar } from '@nodestrap/navbar'
import { ActionControl } from '@nodestrap/action-control'
import { Basic } from '@nodestrap/basic'
import { NavButton } from '@nodestrap/nav-button'
import { SearchInput } from '@nodestrap/input'
import Link from 'next/link'

const CustomNavbarMenu = (props) => {
    return (
        <Basic style={{
            display       : 'flex',
            flexDirection : (props.orientation === 'inline') ? 'row' : 'column',
            gap           : '1rem',
            border        : 'none',
        }}>
            <NavButton>
                <Link href='/'>Home</Link>
            </NavButton>
            <NavButton>
                <Link href='/docs'>Docs</Link>
            </NavButton>
            <NavButton href='https://github.com/nodestrap' target='_blank'>
                GitHub
            </NavButton>
            <SearchInput placeholder='search something' />
        </Basic>
    );
}

export default function MyPage() {
    return (
        <Navbar
            theme='primary'
            logo={
                <ActionControl mild={false} style={{ border: 'none' }}>
                    <Link href='/'>
                        <img src='/images/test-logo.png' alt='logo' style={{ height: '30px' }} />
                    </Link>
                </ActionControl>
            }
        >{(compact) =>
            <CustomNavbarMenu orientation={compact ? 'block' : 'inline'} />
        }</Navbar>
    );
}
                    `}</TypeScriptCodeNextJs>
                    <p></p>
                    <TypeScriptCodeGatsbyJs>{`
// coming soon
                    `}</TypeScriptCodeGatsbyJs>
                    <p></p>
                    <TypeScriptCodeReactRouter>{`
import { Navbar } from '@nodestrap/navbar'
import { ActionControl } from '@nodestrap/action-control'
import { Basic } from '@nodestrap/basic'
import { NavButton } from '@nodestrap/nav-button'
import { SearchInput } from '@nodestrap/input'

// import { Link } from 'react-router-dom'          // do not use the original <Link>
import { Link } from '@nodestrap/react-router-link' // instead use our compatible <Link>

const CustomNavbarMenu = (props) => {
    return (
        <Basic style={{
            display       : 'flex',
            flexDirection : (props.orientation === 'inline') ? 'row' : 'column',
            gap           : '1rem',
            border        : 'none',
        }}>
            <NavButton>
                <Link href='/'>Home</Link>
            </NavButton>
            <NavButton>
                <Link href='/docs'>Docs</Link>
            </NavButton>
            <NavButton href='https://github.com/nodestrap' target='_blank'>
                GitHub
            </NavButton>
            <SearchInput placeholder='search something' />
        </Basic>
    );
}

export default function MyPage() {
    return (
        <Navbar
            theme='primary'
            logo={
                <ActionControl mild={false} style={{ border: 'none' }}>
                    <Link href='/'>
                        <img src='/images/test-logo.png' alt='logo' style={{ height: '30px' }} />
                    </Link>
                </ActionControl>
            }
        >{(compact) =>
            <CustomNavbarMenu orientation={compact ? 'block' : 'inline'} />
        }</Navbar>
    );
}
                    `}</TypeScriptCodeReactRouter>
                    <p></p>
                    <TypeScriptCodeReactRemix>{`
// coming soon
                    `}</TypeScriptCodeReactRemix>
                </SectionPropertyChildrenAdv>
            </SectionPropertyChildren>
            <SectionInheritedProps />
            <SectionVariants>
                <SectionPropertyTheme>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Navbar
                                theme={themeName}
                                key={index}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Navbar
    theme='${themeName}'
    logo={...}
>{(compact) =>
    <Nav orientation={compact ? 'block' : 'inline'}>
        ...
    </Nav>
}</Navbar>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyTheme>
                <SectionPropertySize>
                    <Preview>
                        <Navbar
                            size='sm'
                            theme='primary'
                        />
                        <Navbar
                            size={undefined}
                            theme='primary'
                        />
                        <Navbar
                            size='lg'
                            theme='primary'
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Navbar
    size='sm'
    theme='primary'
    logo={...}
>{(compact) =>
    <Nav orientation={compact ? 'block' : 'inline'}>
        ...
    </Nav>
}</Navbar>

<Navbar
    size={undefined}
    theme='primary'
    logo={...}
>{(compact) =>
    <Nav orientation={compact ? 'block' : 'inline'}>
        ...
    </Nav>
}</Navbar>

<Navbar
    size='lg'
    theme='primary'
    logo={...}
>{(compact) =>
    <Nav orientation={compact ? 'block' : 'inline'}>
        ...
    </Nav>
}</Navbar>
                    `}</TypeScriptCode>
                </SectionPropertySize>
                <SectionPropertyNude>
                    <TransparentPreview>
                        <Navbar
                            nude={true}
                            theme='warning'
                        />
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>{`
<Navbar
    nude={true}
    theme='warning'
    logo={...}
>{(compact) =>
    <Nav orientation={compact ? 'block' : 'inline'}>
        ...
    </Nav>
}</Navbar>
                    `}</TypeScriptCode>
                </SectionPropertyNude>
                <SectionPropertyGradient>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Navbar
                                gradient={true}
                                theme={themeName}
                                key={index}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Navbar
    gradient={true}
    theme='${themeName}'
    logo={...}
>{(compact) =>
    <Nav orientation={compact ? 'block' : 'inline'}>
        ...
    </Nav>
}</Navbar>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyGradient>
                <SectionPropertyOutlined>
                    <TransparentPreview>
                        {themeNames.map((themeName, index) =>
                            <Navbar
                                outlined={true}
                                theme={themeName}
                                key={index}
                            />
                        )}
                    </TransparentPreview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Navbar
    outlined={true}
    theme='${themeName}'
    logo={...}
>{(compact) =>
    <Nav orientation={compact ? 'block' : 'inline'}>
        ...
    </Nav>
}</Navbar>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyOutlined>
                <SectionPropertyMild>
                    <Preview>
                        {themeNames.map((themeName, index) =>
                            <Navbar
                                mild={true}
                                theme={themeName}
                                key={index}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeNames.map((themeName) =>
`
<Navbar
    mild={true}
    theme='${themeName}'
    logo={...}
>{(compact) =>
    <Nav orientation={compact ? 'block' : 'inline'}>
        ...
    </Nav>
}</Navbar>
`
                        ).join('')}
                    </TypeScriptCode>
                </SectionPropertyMild>
            </SectionVariants>
            <SectionStates>
                <SectionPropertyActive>
                    <Preview>
                        <Navbar
                            active={true}
                            theme='primary'
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{`
<Navbar
    active={true}
    theme='primary'
    logo={...}
>{(compact) =>
    <Nav orientation={compact ? 'block' : 'inline'}>
        ...
    </Nav>
}</Navbar>
                    `}</TypeScriptCode>
                </SectionPropertyActive>
            </SectionStates>
            <SectionVariables specList={
                <SpecList>
                    <DetailSpecItem title='Positions'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>zIndex</code>
                                <p>The stacking index of <CurrentComponent />.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>position</code>
                                <p>How the <CurrentComponent /> is positioned in a document.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>insetBlockStart</code>
                                <p>The top location of <CurrentComponent />.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Foregrounds, Backgrounds &amp; Borders'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>boxShadow</code>
                                <p>A <code>boxShadow</code> to apply, so the <CurrentComponent /> appears hovered.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Borders'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>borderInline</code>
                                <p>The left &amp; right border of <CurrentComponent />.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderBlockStart</code>
                                <p>The top border of <CurrentComponent />.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>borderRadius</code>
                                <p>The diameter of the corners of <CurrentComponent />.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Spacings'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>paddingInline</code>
                                <p>The inner spacing on the left &amp; right of <CurrentComponent />.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>paddingBlock</code>
                                <p>The inner spacing on the top &amp; bottom of <CurrentComponent />.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>gapInline</code>
                                <p>The horizontal spacing between <CurrentComponent />&apos;s items.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>gapBlock</code>
                                <p>The vertical spacing between <CurrentComponent />&apos;s items.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Menus'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>menusMarginBlockFull</code>
                                <p>The outer spacing on the top &amp; bottom of <CurrentComponent />&apos;s menus when in desktop (full) mode.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>menusMarginInlineCompact</code>
                                <p>The outer spacing on the left &amp; right of <CurrentComponent />&apos;s menus when in mobile (compact) mode.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Lists'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>listJustifySelfFull</code>
                                <p>The alignment of <CurrentComponent />&apos;s menus when in desktop (full) mode.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                    <DetailSpecItem title='Menu'>
                        <SubSpecList>
                            <SimpleSpecItem>
                                <code>menuDisplay</code>
                                <p>The <code>display</code> type of <CurrentComponent />&apos;s menu.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>menuFlexDirection</code>
                                <p>The <code>flex-direction</code> of <CurrentComponent />&apos;s menu.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>menuJustifyContent</code>
                                <p>The <code>justify-content</code> of <CurrentComponent />&apos;s menu.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>menuAlignItems</code>
                                <p>The <code>align-items</code> of <CurrentComponent />&apos;s menu.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>menuWhiteSpace</code>
                                <p>The <code>white-space</code> mode of <CurrentComponent />&apos;s menu.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>menuTextAlign</code>
                                <p>The <code>text-align</code> mode of <CurrentComponent />&apos;s menu.</p>
                            </SimpleSpecItem>
                        </SubSpecList>
                    </DetailSpecItem>
                </SpecList>
            }/>
            <SectionDerivering>
                <SectionOverridingDefaults>{`
import { Navbar } from '@nodestrap/navbar'

export default function SiteNavbar(props) {
    return (
        <Navbar
            {...props} // preserves other properties

            theme={props.theme ?? 'danger'} // override default value of theme to 'danger'
            mild={props.mild ?? true}       // override default value of mild  to true
        >
            { props.children }
        </Navbar>
    );
}
                `}</SectionOverridingDefaults>

                <SectionCustomizingCss specList={
                    <SpecList>
                        <DetailSpecItem code='usesNavbarLayout()'>
                            <p>
                                Returns a <code>Rule</code> object represents a complete <CurrentComponent /> <strong>layout</strong> except its <strong>variants</strong> and <strong>states</strong>.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesNavbarVariants()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>variants</strong> of <CurrentComponent /> such as:<br />
                                <code>SizeVariant</code> and <strong>all variants</strong> inherited from <CurrentBaseComponents />.
                            </p>
                        </DetailSpecItem>
                        <DetailSpecItem code='usesNavbarStates()'>
                            <p>
                                Returns a <code>Rule</code> object represents the <strong>states</strong> of <CurrentComponent /> such as:<br />
                                <strong>active</strong>/<strong>passive</strong>.
                            </p>
                        </DetailSpecItem>
                    </SpecList>
                }>{`
import { mainComposition, style, imports, variants, states, rule } from '@cssfn/cssfn'
import { createUseSheet } from '@cssfn/react-cssfn'
import { Navbar, usesNavbarLayout, usesNavbarVariants, usesNavbarStates, isActive } from '@nodestrap/navbar'

const usesSiteNavbarSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // import some stuff from <Navbar>:
            usesNavbarLayout(),
            usesNavbarVariants(),
            usesNavbarStates(),
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
            ...states([
                isActive({
                    // define the style at 'being/fully active' state:
                    background-color: 'red',
                    /* ... */
                }),
                /* ... */
            ]),
            
            /* ... */
        }),
    ),
]);

export default function SiteNavbar(props) {
    const sheet = usesSiteNavbarSheet();
    return (
        <Navbar {...props} mainClass={sheet.main}>
            { props.children }
        </Navbar>
    )
}
                `}</SectionCustomizingCss>
            </SectionDerivering>
        </ComponentInfoProvider>
    );
}

export default Page
