import type { NextPage } from 'next'
import Head from 'next/head'
import React, {  } from 'react'
import { Main } from '../../../components/Main'
import { Section } from '../../../components/Section'
import { SpecList, DetailSpecItem } from '../../../components/SpecList'


const AccessibilitiesPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Accessibilities Utility</title>
                <meta name="description" content="Using `accessibilities` utility" />
            </Head>

            <Main>
                <Section>
                    <article>
                        <h1>Accessibilities Utility</h1>
                        <p>
                            <code>@nodestrap/accessibilities</code> is a utility for determining the accessibility statuses of components such as <strong>enabled</strong>/<strong>disabled</strong>, <strong>readonly</strong>/<strong>editable</strong> and <strong>active</strong>/<strong>passive</strong>.
                        </p>
                        <p>
                            By centralizing the reusable codes in one place, the overall bundle size can be reduced.
                        </p>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Using the Accessibilities</h2>
                        <p>
                            There&apos;re some functions you can import into your components:
                        </p>
                        <SpecList>
                            <DetailSpecItem
                                code={<><code>usePropEnabled</code>(<code>props</code>, [<code>defaultEnabled</code>])</>}
                            >
                                <p>
                                    Determines if the current component state is <strong>enabled</strong> or <strong>disabled</strong>.
                                    It also calculates the <strong>enabled</strong>/<strong>disabled</strong> state of the ancestor: <code>&lt;AccessibilityProvider&gt;</code>.
                                </p>
                                <p>
                                    If <code>props.inheritEnabled === true</code> (the default value) :<br />
                                    If <code>AccessibilityProvider</code> is <strong>disabled</strong>, the current component state is always <strong>disabled</strong> (returns <code>false</code>).<br />
                                    If <code>AccessibilityProvider</code> is <strong>enabled</strong>, the current component state is determined by <code>props.enabled</code> (if defined),<br />
                                    otherwise the value of <code>defaultEnabled</code> (the default value is <code>true</code>).
                                </p>
                                <p>
                                    If <code>props.inheritEnabled === false</code>:<br />
                                    The current component state is determined by <code>props.enabled</code> (if defined),<br />
                                    otherwise the value of <code>defaultEnabled</code> (the default value is <code>true</code>).
                                </p>
                            </DetailSpecItem>
                            <DetailSpecItem
                                code={<><code>usePropReadOnly</code>(<code>props</code>, [<code>defaultReadOnly</code>])</>}
                            >
                                <p>
                                    Determines if the current component state is <strong>readonly</strong> or <strong>editable</strong>.
                                    It also calculates the <strong>readonly</strong>/<strong>editable</strong> state of the ancestor: <code>&lt;AccessibilityProvider&gt;</code>.
                                </p>
                                <p>
                                    If <code>props.inheritReadOnly === true</code> (the default value) :<br />
                                    If <code>AccessibilityProvider</code> is <strong>readonly</strong>, the current component state is always <strong>readonly</strong> (returns <code>true</code>).<br />
                                    If <code>AccessibilityProvider</code> is <strong>editable</strong>, the current component state is determined by <code>props.readOnly</code> (if defined),<br />
                                    otherwise the value of <code>defaultReadOnly</code> (the default value is <code>false</code>).
                                </p>
                                <p>
                                    If <code>props.inheritReadOnly === false</code>:<br />
                                    The current component state is determined by <code>props.readOnly</code> (if defined),<br />
                                    otherwise the value of <code>defaultReadOnly</code> (the default value is <code>false</code>).
                                </p>
                            </DetailSpecItem>
                            <DetailSpecItem
                                code={<><code>usePropActive</code>(<code>props</code>, [<code>defaultActive</code>])</>}
                            >
                                <p>
                                    Determines if the current component state is <strong>active</strong> or <strong>passive</strong>.
                                    It also calculates the <strong>active</strong>/<strong>passive</strong> state of the ancestor: <code>&lt;AccessibilityProvider&gt;</code>.
                                </p>
                                <p>
                                    If <code>props.inheritActive === true</code>:<br />
                                    If <code>AccessibilityProvider</code> is <strong>active</strong>, the current component state is always <strong>active</strong> (returns <code>true</code>).<br />
                                    If <code>AccessibilityProvider</code> is <strong>passive</strong>, the current component state is determined by <code>props.active</code> (if defined),<br />
                                    otherwise the value of <code>defaultActive</code> (the default value is <code>false</code>).
                                </p>
                                <p>
                                    If <code>props.inheritActive === false</code> (the default value) :<br />
                                    The current component state is determined by <code>props.active</code> (if defined),<br />
                                    otherwise the value of <code>defaultActive</code> (the default value is <code>false</code>).
                                </p>
                            </DetailSpecItem>
                            <DetailSpecItem
                                code={<><code>usePropAccessibility</code>(<code>props</code>, [<code>defaultEnabled</code>], [<code>defaultReadOnly</code>], [<code>defaultActive</code>])</>}
                            >
                                <p>
                                    The combination of <code>usePropEnabled()</code>, <code>usePropReadOnly()</code> and <code>usePropActive()</code>
                                </p>
                                <p>
                                    Returns an object contains {'{'} <code>enabled</code>, <code>readOnly</code>, <code>active</code> {'}'}.
                                </p>
                            </DetailSpecItem>
                            <DetailSpecItem
                                code={<><code>&lt;AccessibilityProvider enabled={`{true|false}`} readOnly={`{true|false}`} active={`{true|false}`} &gt;</code></>}
                            >
                                <p>
                                    Provides the inheritance of <strong>enabled</strong>/<strong>disabled</strong>, <strong>readonly</strong>/<strong>editable</strong> and <strong>active</strong>/<strong>passive</strong> of descendant components.
                                </p>
                                <p>
                                    This wrapper is useful for making a group of many components have the same properties of <code>.enabled</code>, <code>.readOnly</code> and/or <code>.active</code>.
                                </p>
                                <p>
                                    By default, the default inheritances of the <strong>implemented components</strong> and <code>&lt;AccessibilityProvider&gt;</code> itself are:<br />
                                    <code>.inheritEnabled</code> = <code>true</code><br />
                                    <code>.inheritReadOnly</code> = <code>true</code><br />
                                    <code>.inheritActive</code> = <code>false</code>
                                </p>
                            </DetailSpecItem>
                        </SpecList>
                    </article>
                </Section>
            </Main>
        </>
    )
}

export default AccessibilitiesPage
