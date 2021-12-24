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

export const LinkColorsPage          = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/colors'><code>colors</code></LinkCode>
export const LinkBordersPage         = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/borders'><code>borders</code></LinkCode>
export const LinkSpacersPage         = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/spacers'><code>spacers</code></LinkCode>
export const LinkStripoutsPage       = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/stripouts'><code>stripouts</code></LinkCode>
export const LinkBreakpointsPage     = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/breakpoints'><code>breakpoints</code></LinkCode>
export const LinkLayoutsPage         = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/layouts'><code>layouts</code></LinkCode>
export const LinkTyposPage           = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/typos'><code>typos</code></LinkCode>

export const LinkHooksPage           = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/hooks'><code>hooks</code></LinkCode>
export const LinkUtilitiesPage       = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/utilities'><code>utilities</code></LinkCode>
export const LinkAccessibilitiesPage = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/accessibilities'><code>accessibilities</code></LinkCode>
export const LinkValidationsPage     = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/validations'><code>validations</code></LinkCode>

export const LinkElementPage         = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/element'>Element</LinkCode>
export const LinkBasicPage           = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/basic'>Basic</LinkCode>
export const LinkIndicatorPage       = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/indicator'>Indicator</LinkCode>
export const LinkControlPage         = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/control'>Control</LinkCode>
export const LinkActionControlPage   = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/action-control'>ActionControl</LinkCode>

export const LinkIconPage            = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/icon'>Icon</LinkCode>




interface SeeDocumentationProps {
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



export interface SectionGeneralProps {
    titleTag ?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'
    title    ?: string|React.ReactElement
    children ?: React.ReactNode
}
export const SectionGeneral = ({ titleTag = 'h2', title, children }: SectionGeneralProps) => {
    return (
        <Section>
            <article>
                <Element tag={titleTag}>
                    { title }
                </Element>
                
                { children }
            </article>
        </Section>
    );
}



export interface SectionIntroProps {
    children   ?: React.ReactNode
}
export const SectionIntro = ({ children }: SectionIntroProps) => {
    const { component, packageType } = useComponentInfo();
    
    return (
        <SectionGeneral
            titleTag='h1'
            title={<>
                { component }
                {(() => {
                    switch (packageType) {
                        case 'utility'  : return ' Utility';
                        case 'component': return ' Component';
                        default:          return null;
                    } // switch
                })()}
            </>}
        >
            { children }
        </SectionGeneral>
    );
}



export interface SectionDemoProps {
    children   ?: React.ReactNode
    message    ?: React.ReactNode
}
export const SectionDemo = ({ children, message }: SectionDemoProps) => {
    const { component } = useComponentInfo();
    
    return (
        <SectionGeneral
            title='Demonstration'
        >
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
        </SectionGeneral>
    );
}



export const SectionInheritedProps = () => {
    const { component, base } = useComponentInfo();
    
    return (
        <SectionGeneral
            title='Inherited Properties'
        >
            <p>
                Because { component } is made from { base },
                so all properties from { base } are inherited.<br />
                You can <SeeDocumentation base={base} />.
            </p>
        </SectionGeneral>
    );
}



export interface SectionVariantsProps {
    children   ?: React.ReactNode
}
export const SectionVariants = ({ children }: SectionVariantsProps) => {
    const { component } = useComponentInfo();
    
    return (
        <SectionGeneral
            title='Variant Properties'
        >
            <p>
                There&apos;re some properties for <strong>modifying the appearances</strong>.
            </p>
            <p>
                Those properties do not change the { component } semantically. Just for <strong>styling</strong> purpose.
            </p>
            
            { children }
        </SectionGeneral>
    );
}

export interface SectionStatesProps {
    children   ?: React.ReactNode
}
export const SectionStates = ({ children }: SectionStatesProps) => {
    return (
        <SectionGeneral
            title='State Properties'
        >
            <p>
                There&apos;re some properties for <strong>modifying the states</strong>.
            </p>
            
            { children }
        </SectionGeneral>
    );
}

export interface SectionPropertyProps {
    titleTag ?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'
    property  : string|React.ReactElement
    children ?: React.ReactNode
    specList ?: SpecList
    moreInfo ?: React.ReactNode
}
export const SectionProperty = ({ titleTag = 'h2', property, specList, children, moreInfo }: SectionPropertyProps) => {
    return (
        <SectionGeneral
            titleTag={titleTag}
            title={
                (typeof(property) === 'string')
                ?
                <>
                    <code>{ property }</code> Property
                </>
                :
                property
            }
        >
            { children }
            { specList && <>
                <p>
                    The options are:
                </p>
                { specList }
            </>}
            { moreInfo && <><p></p>{ moreInfo }</> }
        </SectionGeneral>
    );
}
export const SectionSubProperty = (props: SectionPropertyProps) => {
    return (
        <SectionProperty
            {...props}
            titleTag={props.titleTag ?? 'h3'}
        />
    );
}



export interface SectionCustomizingProps {
    specList    : SpecList
}
export const SectionCustomizing = ({ specList }: SectionCustomizingProps) => {
    const { component, componentCode, packageName } = useComponentInfo();
    
    return (
        <SectionGeneral
            title={<>
                Customizing { componentCode } Component
            </>}
        >
            <p>
                There is a <strong>global configuration</strong> of { component } you can tweak.
                Changing the global configuration <strong>affects all</strong> { component } and <strong>other components</strong> derived from { component }.
                Here several properties in <code>cssProps</code> of <code>{`import { cssProps } from ${packageName}`}</code> you can customize:
            </p>
            
            { specList }
        </SectionGeneral>
    );
}



export interface SectionDeriveringProps {
    children   ?: React.ReactNode
}
export const SectionDerivering = ({ children }: SectionDeriveringProps) => {
    const { component, componentCode } = useComponentInfo();
    
    return (
        <SectionGeneral
            title={<>
                Derivering { componentCode } Component
            </>}
        >
            <p>
                { component } can be derivered to a <strong>new specific component</strong> you want.
                There are several ways to deriver.
            </p>
            
            { children }
        </SectionGeneral>
    );
}

export interface SectionOverridingDefaultsProps {
    children    : string
}
export const SectionOverridingDefaults = ({ children }: SectionOverridingDefaultsProps) => {
    const { component } = useComponentInfo();
    
    return (
        <SectionGeneral
            titleTag='h3'
            title='Derivering by Overriding the Default Properties'
        >
            <p>
                This is the simples way to deriver { component }, just by <strong>changing</strong> the <strong>default values</strong>.
                The values after the <code>??</code> (nullish coalescing operator) are <strong>your default values</strong>.
                Here the example:
            </p>
            <TypeScriptCode>{ children }</TypeScriptCode>
        </SectionGeneral>
    );
}

export interface SectionCustomizingCssProps {
    specList    : SpecList
    children    : string
}
export const SectionCustomizingCss = ({ specList, children }: SectionCustomizingCssProps) => {
    const { component } = useComponentInfo();
    
    return (
        <SectionGeneral
            titleTag='h3'
            title='Derivering by Customizing the CSS'
        >
            <p>
                { component } exports <strong>some CSS</strong> that you can import into <strong>your CSS</strong>.
                Here the exported <em>mixins</em>:
            </p>
            { specList }
            
            <p>Example of modifying the CSS:</p>
            <TypeScriptCode>{ children }</TypeScriptCode>
        </SectionGeneral>
    );
}