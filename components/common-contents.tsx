import Button from '@nodestrap/button'
import { Element } from '@nodestrap/element'
import Link from 'next/link'
import React, { useContext, useMemo } from 'react';
import { TypeScriptCode } from './Code';
import DemoPanel from './DemoPanel';
import { Section } from './Section';
import { SpecListProps } from './SpecList';



type SpecList  = React.ReactElement<SpecListProps, React.FunctionComponent<SpecListProps>>
type Component = React.ReactElement<PageLinkProps, React.FunctionComponent<PageLinkProps>>



type CodeProps = React.PropsWithChildren<{}>
const Code = (props: CodeProps) => <code>{ props.children }</code>

type LinkProps = React.PropsWithChildren<{ href: string }>

type LinkCodeProps = LinkProps & CodeProps & { text?: React.ReactNode }
const LinkCode = (props: LinkCodeProps) => {
    if (props.text) return (
        <Button theme='primary' btnStyle='link'>
            <Link {...props}>
                { props.text }
            </Link>
        </Button>
    );
    return (
        <Link {...props}>
            <a>
                {
                    (typeof(props.children) === 'string')
                    ?
                    <Code {...props}>
                        &lt;{ props.children }&gt;
                    </Code>
                    :
                    props.children
                }
            </a>
        </Link>
    );
}

type PageLinkProps = { children?: React.ReactNode }

export const LinkColorsPage          = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/colors'><code>@nodestrap/colors</code></LinkCode>
export const LinkBordersPage         = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/borders'><code>@nodestrap/borders</code></LinkCode>
export const LinkSpacersPage         = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/spacers'><code>@nodestrap/spacers</code></LinkCode>
export const LinkStripoutsPage       = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/stripouts'><code>@nodestrap/stripouts</code></LinkCode>
export const LinkBreakpointsPage     = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/breakpoints'><code>@nodestrap/breakpoints</code></LinkCode>
export const LinkLayoutsPage         = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/layouts'><code>@nodestrap/layouts</code></LinkCode>
export const LinkTyposPage           = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/typos'><code>@nodestrap/typos</code></LinkCode>

export const LinkHooksPage           = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/hooks'><code>@nodestrap/hooks</code></LinkCode>
export const LinkUtilitiesPage       = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/utilities'><code>@nodestrap/utilities</code></LinkCode>
export const LinkAccessibilitiesPage = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/accessibilities'><code>@nodestrap/accessibilities</code></LinkCode>
export const LinkValidationsPage     = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/validations'><code>@nodestrap/validations</code></LinkCode>

export const LinkElementPage         = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/element'>Element</LinkCode>
export const LinkBasicPage           = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/basic'>Basic</LinkCode>
export const LinkIndicatorPage       = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/indicator'>Indicator</LinkCode>
export const LinkControlPage         = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/control'>Control</LinkCode>
export const LinkActionControlPage   = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/action-control'>ActionControl</LinkCode>

export const LinkIconPage            = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/icon'>Icon</LinkCode>




export interface SeeDocumentationProps {
    base: Component
}
const SeeDocumentation = ({ base : Base }: SeeDocumentationProps) => {
    const item = Base.type({});
    if (!React.isValidElement<React.PropsWithChildren<LinkCodeProps>>(item)) return null;
    
    const code = item.props.children;
    return (
        <Base.type>
            see the documentation of &lt;{ code }&gt; here
        </Base.type>
    );
}

export interface SectionInheritedPropsProps {
    component : Component
    base      : Component
}
export const SectionInheritedProps = ({component: Component, base: Base}: SectionInheritedPropsProps) => (
    <Section>
        <article>
            <h2>Inherited Properties</h2>
        </article>
        <p>
            Because { Component } is made from { Base },
            so all properties from { Base } are inherited.<br />
            You can <SeeDocumentation base={Base} />.
        </p>
    </Section>
)

export interface ParagraphDefaultValueProps {
    code: string
}
export const ParagraphDefaultValue = ({ code }: ParagraphDefaultValueProps) => (
    <p>
        This is the <strong>default</strong> value if the <code>{ code }</code> value is not specified.
    </p>
)



interface ComponentInfo {
    packageName  : `@nodestrap/${string}` | (string & {})
    packageType ?: 'component'|'utility'

    component    : Component
    base         : Component
}
const ComponentInfoContext = React.createContext<Required<ComponentInfo>>(/*defaultValue :*/{
    packageName : '@nodestrap/element',
    packageType        : 'component',

    component   : <LinkElementPage />,
    base        : <LinkElementPage />,
});
export interface ComponentInfoProviderProps extends ComponentInfo {
    children   ?: React.ReactNode
}
export function ComponentInfoProvider(props: ComponentInfoProviderProps) {
    return (
        <ComponentInfoContext.Provider value={{ ...props, packageType: (props.packageType ?? 'component') }}>
            { props.children }
        </ComponentInfoContext.Provider>
    );
}
const codeOf = (component: Component) => {
    const item = component.type({});
    if (!React.isValidElement<React.PropsWithChildren<LinkCodeProps>>(item)) return null;
    
    const code = item.props.children;
    return {
        code: `<${code}>`,
        name: code,
    };
}
const useComponentInfo = () => {
    const data = useContext(ComponentInfoContext);
    return useMemo(() => ({
        ...data,
        ...(() => {
            const code = codeOf(data.component);
            return {
                componentCode: code?.code,
                componentName: code?.name,
            };
        })(),
        ...(() => {
            const code = codeOf(data.base);
            return {
                baseCode: code?.code,
                baseName: code?.name,
            };
        })(),
        // eslint-disable-next-line
    }), [...Object.values(data)]);
}



export interface SectionIntroProps {
    children   ?: React.ReactNode
}
export const SectionIntro = ({ children }: SectionIntroProps) => {
    const { component, packageType } = useComponentInfo();
    
    return (
        <Section>
            <article>
                <h1>
                    { component }
                    {(() => {
                        switch (packageType) {
                            case 'utility'  : return ' Utility';
                            case 'component': return ' Component';
                            default:          return null;
                        } // switch
                    })()}
                </h1>

                { children }
            </article>
        </Section>
    );
}



export interface SectionDemoProps {
    children   ?: React.ReactNode
    message    ?: React.ReactNode
}
export const SectionDemo = ({ children, message }: SectionDemoProps) => {
    const { component } = useComponentInfo();
    
    return (
        <Section>
            <article>
                <h2>
                    Demonstration
                </h2>
                {
                    message
                    ||
                    <p>
                        Change some controls below!
                        You&apos;ll see the { component } is customizable.
                    </p>
                }
                <DemoPanel>
                    { children }
                </DemoPanel>
            </article>
        </Section>
    );
}



export interface SectionVariantsProps {
    children   ?: React.ReactNode
}
export const SectionVariants = ({ children }: SectionVariantsProps) => {
    const { component } = useComponentInfo();
    
    return (
        <Section>
            <article>
                <h2>
                    Variant Properties
                </h2>
                <p>
                    There&apos;re some properties for <strong>modifying the appearances</strong>.
                </p>
                <p>
                    Those properties do not change the { component } semantically. Just for <strong>styling</strong> purpose.
                </p>
                
                { children }
            </article>
        </Section>
    );
}

export interface SectionStatesProps {
    children   ?: React.ReactNode
}
export const SectionStates = ({ children }: SectionStatesProps) => {
    return (
        <Section>
            <article>
                <h2>
                    State Properties
                </h2>
                <p>
                    There&apos;re some properties for <strong>modifying the states</strong>.
                </p>
                
                { children }
            </article>
        </Section>
    );
}

export interface SectionPropertyProps {
    headingTag ?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'
    property    : string|React.ReactElement
    children   ?: React.ReactNode
    specList   ?: SpecList
    moreInfo   ?: React.ReactNode
}
export const SectionProperty = ({ headingTag = 'h2', property, specList, children, moreInfo }: SectionPropertyProps) => {
    return (
        <Section>
            <article>
                <Element tag={headingTag}>
                    {
                        (typeof(property) === 'string')
                        ?
                        <>
                            <code>{ property }</code> Property
                        </>
                        :
                        property
                    }
                </Element>
                { children }
                { specList && <>
                    <p>
                        The options are:
                    </p>
                    { specList }
                </>}
                { moreInfo && <><p></p>{ moreInfo }</> }
            </article>
        </Section>
    );
}
export const SectionSubProperty = (props: SectionPropertyProps) => {
    return (
        <SectionProperty
            {...props}
            headingTag={props.headingTag ?? 'h3'}
        />
    );
}



export interface SectionCustomizingProps {
    specList    : SpecList
}
export const SectionCustomizing = ({ specList }: SectionCustomizingProps) => {
    const { component, componentCode, packageName } = useComponentInfo();
    
    return (
        <Section>
            <article>
                <h2>
                    Customizing { componentCode } Component
                </h2>
                <p>
                    There is a <strong>global configuration</strong> of { component } you can tweak.
                    Changing the global configuration <strong>affects all</strong> { component } and <strong>other components</strong> derived from { component }.
                    Here several properties in <code>cssProps</code> of <code>{`import { cssProps } from ${packageName}`}</code> you can customize:
                </p>
                
                { specList }
            </article>
        </Section>
    );
}



export interface SectionDeriveringProps {
    children   ?: React.ReactNode
}
export const SectionDerivering = ({ children }: SectionDeriveringProps) => {
    const { component } = useComponentInfo();
    
    return (
        <Section>
            <article>
                <h2>Derivering ActionControl Component</h2>
                <p>
                    { component } can be derivered to a <strong>new specific component</strong> you want.
                    There are several ways to deriver.
                </p>

                { children }
            </article>
        </Section>
    );
}

export interface SectionOverridingDefaultsProps {
    children    : string
}
export const SectionOverridingDefaults = ({ children }: SectionOverridingDefaultsProps) => {
    const { component } = useComponentInfo();
    
    return (
        <Section>
            <h3>Derivering by Overriding the Default Properties</h3>
            <p>
                This is the simples way to deriver { component }, just by <strong>changing</strong> the <strong>default values</strong>.
                The values after the <code>??</code> (nullish coalescing operator) are <strong>your default values</strong>.
                Here the example:
            </p>
            <TypeScriptCode>{ children }</TypeScriptCode>
        </Section>
    );
}

export interface SectionCustomizingCssProps {
    specList    : SpecList
    children    : string
}
export const SectionCustomizingCss = ({ specList, children }: SectionCustomizingCssProps) => {
    const { component } = useComponentInfo();
    
    return (
        <Section>
            <h3>Derivering by Customizing the CSS</h3>
            <p>
                { component } exports <strong>some CSS</strong> that you can import into <strong>your CSS</strong>.
                Here the exported <em>mixins</em>:
            </p>
            { specList }
            <p>Example of modifying the CSS:</p>
            <TypeScriptCode>{ children }</TypeScriptCode>
        </Section>
    );
}