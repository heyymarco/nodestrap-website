import Button from '@nodestrap/button'
import Link from 'next/link'
import React from 'react';
import Section from './Section';



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
                <Code {...props}>
                    &lt;{ props.children }&gt;
                </Code>
            </a>
        </Link>
    );
}

type PageLinkProps = { children?: React.ReactNode }

export const LinkColorsPage        = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/utilities/colors'>colors</LinkCode>

export const LinkElementPage       = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/element'>Element</LinkCode>
export const LinkBasicPage         = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/basic'>Basic</LinkCode>
export const LinkIndicatorPage     = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/indicator'>Indicator</LinkCode>
export const LinkControlPage       = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/control'>Control</LinkCode>
export const LinkActionControlPage = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/action-control'>ActionControl</LinkCode>
export const LinkIconPage          = (props: PageLinkProps) => <LinkCode text={props.children} href='/docs/components/icon'>Icon</LinkCode>




export interface SeeDocumentationProps {
    base: React.ReactElement<PageLinkProps, React.FunctionComponent<PageLinkProps>>
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
    component : React.ReactElement<PageLinkProps, React.FunctionComponent<PageLinkProps>>
    base      : React.ReactElement<PageLinkProps, React.FunctionComponent<PageLinkProps>>
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