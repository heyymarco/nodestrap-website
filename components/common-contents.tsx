import Button from '@nodestrap/button'
import Link from 'next/link'
import React, { useContext, useMemo } from 'react';
import { TypeScriptCode } from './Code';
import DemoPanel from './DemoPanel';
import Detail from './Detail';
import { Section } from './Section';
import { SpecListProps } from './SpecList';
import { Progress, ProgressBar } from '@nodestrap/progress'
import { useCurrentActive } from '@nodestrap/nav-button';



type SpecList  = React.ReactElement<SpecListProps, React.FunctionComponent<SpecListProps>>
type Component = React.ReactElement<PageLinkProps, React.FunctionComponent<PageLinkProps>>



type CodeProps = React.PropsWithChildren<{}>
const Code = (props: CodeProps) => <code>{ props.children }</code>

type LinkProps = React.PropsWithChildren<{ href: string }>

type LinkCodeProps = LinkProps & CodeProps & { text?: React.ReactNode }
const LinkButton = (props: LinkCodeProps) => {
    return (
        <Button theme='primary' btnStyle='link'>
            <Link {...props}>
                { props.text }
            </Link>
        </Button>
    );
}
const LinkCodeInternal = (props: React.PropsWithChildren<{ currentComponent: React.ReactNode }>) => {
    const activeDn = useCurrentActive(props);
    if (activeDn) return (<>{ props.currentComponent }</>);
    
    return (<>{ props.children }</>);
}
const LinkCode = (props: LinkCodeProps) => {
    let propsChildren = props.children;

    if (props.text) {
        if (!(React.isValidElement(props.text) && (props.text.type === 'code'))) return <LinkButton {...props} />;
        
        propsChildren = props.text;
    } // if
    
    const children = (
        (typeof(propsChildren) === 'string')
        ?
        <Code {...props}>
            &lt;{ propsChildren }&gt;
        </Code>
        :
        propsChildren
    );
    return (
        <LinkCodeInternal currentComponent={children}>
            <Link {...props}>
                <a>
                    { children }
                </a>
            </Link>
        </LinkCodeInternal>
    );
}

type PageLinkProps = { children?: React.ReactNode }

export const LinkColorsPage                = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/colors'><code>colors</code></LinkCode>
export const LinkBordersPage               = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/borders'><code>borders</code></LinkCode>
export const LinkSpacersPage               = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/spacers'><code>spacers</code></LinkCode>
export const LinkStripoutsPage             = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/stripouts'><code>stripouts</code></LinkCode>
export const LinkBreakpointsPage           = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/breakpoints'><code>breakpoints</code></LinkCode>
export const LinkLayoutsPage               = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/layouts'><code>layouts</code></LinkCode>
export const LinkTyposPage                 = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/typos'><code>typos</code></LinkCode>

export const LinkHooksPage                 = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/hooks'><code>hooks</code></LinkCode>
export const LinkUtilitiesPage             = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/utilities'><code>utilities</code></LinkCode>
export const LinkAccessibilitiesPage       = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/accessibilities'><code>accessibilities</code></LinkCode>
export const LinkValidationProviderPage    = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/accessibilities'>ValidationProvider</LinkCode>
export const LinkValidationsPage           = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/validations'><code>validations</code></LinkCode>

export const LinkReactRouterLinkPage       = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/react-router-link'>ReactRouterLink</LinkCode>
export const LinkOriReactRouterLinkPage    = (props: PageLinkProps) => <LinkCode text={props.children} href='https://reactrouter.com/docs/en/v6/getting-started/tutorial#add-some-links'>Link</LinkCode>

export const LinkOriNextJsLinkPage         = (props: PageLinkProps) => <LinkCode text={props.children} href='https://nextjs.org/docs/api-reference/next/link'>Link</LinkCode>

export const LinkElementPage               = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/element'>Element</LinkCode>
export const LinkBasicPage                 = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/basic'>Basic</LinkCode>
export const LinkUsesBasicLayoutPage       = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/basic'><code>usesBasicLayout()</code></LinkCode>
export const LinkUsesBasicVariantsPage     = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/basic'><code>usesBasicVariants()</code></LinkCode>

export const LinkIndicatorPage             = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/indicator'>Indicator</LinkCode>
export const LinkControlPage               = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/control'>Control</LinkCode>
export const LinkActionControlPage         = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/action-control'>ActionControl</LinkCode>
export const LinkEditableControlPage       = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/editable-control'>EditableControl</LinkCode>
export const LinkEditableTextControlPage   = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/editable-text-control'>EditableTextControl</LinkCode>
export const LinkEditableActionControlPage = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/editable-action-control'>EditableActionControl</LinkCode>

export const LinkContainerPage             = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/container'>Container</LinkCode>
export const LinkContentPage               = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/content'>Content</LinkCode>

export const LinkVisuallyHiddenPage        = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/visually-hidden'>VisuallyHidden</LinkCode>
export const LinkIconPage                  = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/icon'>Icon</LinkCode>
export const LinkConfigIconPage            = (props: PageLinkProps) => <LinkCode text={props.children ?? (<>Configuring the {`<Icon>`} Component</>)} href='/docs/components/icon' />
export const LinkLabelPage                 = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/label'>Label</LinkCode>
export const LinkMasonryPage               = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/masonry'>Masonry</LinkCode>
export const LinkButtonPage                = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/button'>Button</LinkCode>
export const LinkNavButtonPage             = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/nav-button'>NavButton</LinkCode>
export const LinkButtonIconPage            = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/button-icon'>ButtonIcon</LinkCode>

export const LinkInputPage                 = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/input'>Input</LinkCode>
export const LinkCheckPage                 = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/check'>Check</LinkCode>
export const LinkRangePage                 = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/range'>Range</LinkCode>

export const LinkCardPage                  = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/card'>Card</LinkCode>
export const LinkGroupPage                 = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/group'>Group</LinkCode>



export interface ExternalLinkProps {
    href      : string
    children ?: React.ReactNode
}
export const ExternalLink                  = ({ href, children }: ExternalLinkProps) => <Button href={href} btnStyle='link' target='_blank' theme='primary'>{children}</Button>



export interface CommaSeparatedProps {
    components: Component|Component[]
}
export const CommaSeparated = ({components}: CommaSeparatedProps) => (<>{
    [components].flat().map((component, index, {length}) => (
        <React.Fragment key={index}>
            { component }
            { (index < (length - 1)) ? ((index === (length - 2)) ? ' and ' : ', ') : undefined }
        </React.Fragment>
    ))
}</>);



export interface SeeDocumentationProps {
    component: Component
}
export const SeeDocumentation = ({ component : Component }: SeeDocumentationProps) => {
    const item = Component.type({});
    if (!React.isValidElement<React.PropsWithChildren<LinkCodeProps>>(item)) return null;
    
    const code = item.props.children;
    return (
        <Component.type>
            see the documentation of &lt;{ code }&gt; here
        </Component.type>
    );
}
export interface SeeDocumentationsProps {
    components: Component|Component[]
}
export const SeeDocumentations = ({ components }: SeeDocumentationsProps) => <CommaSeparated components={[components].flat().map((component, index) => <SeeDocumentation key={index} component={component} />)} />



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
    bases        : Component|Component[]
}
const ComponentInfoContext = React.createContext<Required<ComponentInfo>>(/*defaultValue :*/{
    packageName : '@nodestrap/element',
    packageType        : 'component',

    component   : <LinkElementPage />,
    bases       : <LinkElementPage />,
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
export const useComponentInfo = () => {
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
            const codes = [data.bases].flat().map((base) => codeOf(base));
            return {
                baseCodes: codes.map((code) => code?.code),
                baseNames: codes.map((code) => code?.name),
            };
        })(),
        // eslint-disable-next-line
    }), [...Object.values(data)]);
}



export const CurrentComponent = () => {
    const { component } = useComponentInfo();

    return <>{ component }</>;
}
export const CurrentBaseComponents = () => {
    const { bases } = useComponentInfo();

    return <>{ <CommaSeparated components={bases} /> }</>;
}
export const CurrentPackageName = () => {
    const { packageName } = useComponentInfo();

    return <>{ packageName }</>;
}



export interface SectionIntroProps {
    children   ?: React.ReactNode
}
export const SectionIntro = ({ children }: SectionIntroProps) => {
    const { packageType } = useComponentInfo();
    
    return (
        <Section
            titleTag='h1'
            title={<>
                <CurrentComponent />
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
        </Section>
    );
}



export interface SectionDemoProps {
    title       ?: string
    detailLabel ?: string
    children    ?: React.ReactNode
    message     ?: React.ReactNode
}
export const SectionDemo = ({ title, detailLabel, children, message }: SectionDemoProps) => {
    return (
        <Section
            title={title ?? 'Demonstration'}
        >
            <Detail
                label={detailLabel ?? 'Show demonstration panel'}
                
                theme='primary'
                mild={true}
                lazy={true}
                
                detailStyle='content'
            >
                {
                    message
                    ||
                    <p>
                        Change some controls below!
                        You&apos;ll see the <CurrentComponent /> is customizable.
                    </p>
                }
                <DemoPanel classes={['media']}>
                    { children }
                </DemoPanel>
            </Detail>
        </Section>
    );
}



export const SectionInheritedProps = () => {
    const { bases } = useComponentInfo();
    
    
    const basesJsx = <CommaSeparated components={bases} />
    const linksJsx = <SeeDocumentations components={bases} />
    return (
        <Section
            title='Inherited Properties'
        >
            <p>
                Because <CurrentComponent /> is made from { basesJsx },
                so all properties from { basesJsx } are inherited.<br />
                You can { linksJsx }.
            </p>
        </Section>
    );
}



export interface SectionVariantsProps {
    children   ?: React.ReactNode
}
export const SectionVariants = ({ children }: SectionVariantsProps) => {
    return (
        <Section
            title='Variant Properties'
        >
            <p>
                There&apos;re some properties for <strong>modifying the appearances</strong>.
            </p>
            <p>
                Those properties do not change the <CurrentComponent /> semantically. Just for <strong>styling</strong> purpose.
            </p>
            
            { children }
        </Section>
    );
}

export interface SectionStatesProps {
    children   ?: React.ReactNode
}
export const SectionStates = ({ children }: SectionStatesProps) => {
    return (
        <Section
            title='State Properties'
        >
            <p>
                There&apos;re some properties for <strong>modifying the states</strong>.
            </p>
            
            { children }
        </Section>
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
        <Section
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
        </Section>
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
export const SectionSubPropertyStyle = (props: SectionPropertyProps) => {
    return (
        <SectionSubProperty {...props}>
            {
                props.children
                ??
                <p>
                    Changes the <strong>default appearance</strong> with another alternatives.
                </p>
            }
        </SectionSubProperty>
    );
}
export const SectionSubPropertyOrientation = (props: Omit<SectionPropertyProps, 'property'>) => {
    return (
        <SectionSubProperty {...props} property='orientation'>
            {
                props.children
                ??
                <p>
                    Changes the <strong>orientation</strong>.
                </p>
            }
        </SectionSubProperty>
    );
}



export interface SectionCustomizingProps {
    specList    : SpecList
}
export const SectionCustomizing = ({ specList }: SectionCustomizingProps) => {
    return (
        <Section
            title={<>
                Customizing <CurrentComponent /> Component
            </>}
        >
            <p>
                There is a <strong>global configuration</strong> of <CurrentComponent /> you can tweak.
                Changing the global configuration <strong>affects all</strong> <CurrentComponent /> and <strong>other components</strong> depend on <CurrentComponent />.
                Here several properties in <code>cssProps</code> of <code>import {`{ cssProps }`} from <CurrentPackageName /></code> you can customize:
            </p>
            
            { specList }
        </Section>
    );
}
export const SectionCustomizingParent = () => {
    const { bases } = useComponentInfo();
    
    return (
        <Section
            title={<>
                Customizing <CurrentComponent /> Component
            </>}
        >
            <p>
                There is no global configuration of <CurrentComponent /> you can tweak, <em>but</em> you can
                customize the <strong>global configuration</strong> of <CommaSeparated components={bases} /> which {([bases].flat().length > 2) ? 'are': 'is'} <strong>shared to</strong> <CurrentComponent />.
            </p>
        </Section>
    );
}



export interface SectionDeriveringProps {
    children   ?: React.ReactNode
}
export const SectionDerivering = ({ children }: SectionDeriveringProps) => {
    return (
        <Section
            title={<>
                Derivering <CurrentComponent /> Component
            </>}
        >
            <p>
                <CurrentComponent /> can be derivered to a <strong>new specific component</strong> you want.
                There are several ways to deriver.
            </p>
            
            { children }
        </Section>
    );
}

export interface SectionOverridingDefaultsProps {
    children    : string
    moreInfo   ?: React.ReactNode
}
export const SectionOverridingDefaults = ({ children, moreInfo }: SectionOverridingDefaultsProps) => {
    return (
        <Section
            titleTag='h3'
            title='Derivering by Overriding the Default Properties'
        >
            <p>
                This is the simplest way to deriver <CurrentComponent />, just by <strong>changing</strong> the <strong>default values</strong>.
                The values after the <code>??</code> (nullish coalescing operator) are <strong>your default values</strong>.
                Here the example:
            </p>
            <TypeScriptCode>{ children }</TypeScriptCode>
            
            { moreInfo && <><p></p>{ moreInfo }</> }
        </Section>
    );
}

export interface SectionCustomizingCssProps {
    specList   ?: SpecList
    children    : string
    moreInfo   ?: React.ReactNode
}
export const SectionCustomizingCss = ({ specList, children, moreInfo }: SectionCustomizingCssProps) => {
    return (
        <Section
            titleTag='h3'
            title={`Derivering by ${specList ? 'Customizing the' : 'Adding a'} CSS`}
        >
            {specList && <>
                <p>
                    <CurrentComponent /> exports <strong>some CSS</strong> that you can import into <strong>your CSS</strong>.
                    Here the exported <em>mixins</em>:
                </p>
                { specList }
            </>}
            
            <p>Example of {specList ? 'modifying the' : 'adding a'} CSS:</p>
            <TypeScriptCode>{ children }</TypeScriptCode>
            
            { moreInfo && <><p></p>{ moreInfo }</> }
        </Section>
    );
}

export interface SectionMoreCustomizingCssProps {
    specList    : SpecList
    moreInfo   ?: React.ReactNode
}
export const SectionMoreCustomizingCss = ({ specList, moreInfo }: SectionMoreCustomizingCssProps) => {
    return (
        <Section
            titleTag='h3'
            title='Advanced CSS Customization'
        >
            <p>
                There are some <strong>css hooks</strong> for making <em>CSS in JS</em> more powerful.
            </p>
            <p>
                Our <strong>css hooks</strong> always start with <code>uses</code> - to avoid collision with <strong>React hooks</strong>.
                Unlike <em>React hooks</em>, the <strong>css hooks</strong> can be called <strong>conditionally</strong>.
                Conditional calls are useful for making <em>CSS in JS</em> <strong>lazily</strong> (only defined but <strong>not yet</strong> executed).
            </p>
            <p>
                <CurrentComponent /> exports <strong>some CSS hooks</strong> that you can import into <strong>your CSS</strong>.
                Here the exported <em>css hooks</em>:
            </p>
            { specList }
            
            { moreInfo && <><p></p>{ moreInfo }</> }
        </Section>
    );
}


export const BusyBar = () => {
    return (
        <Progress classes={['busy']} theme='primary'>
            <ProgressBar value={100} progressBarStyle={['striped', 'running']} />
        </Progress>
    );
}