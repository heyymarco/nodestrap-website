import type { NextPage } from 'next'
import Head from 'next/head'
import React, {  } from 'react'
import { Main } from '../../../components/Main'
import { Section } from '../../../components/Section'
import { SpecList, DetailSpecItem } from '../../../components/SpecList'


const LayoutsPage: NextPage = () => {
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
                            <code>@nodestrap/accessibilities</code> is a utility for managing &amp; manipulating accessibility of a component.
                        </p>
                        <p>
                            By centralizing the reusable codes in one place, the overall bundle size can be reduced.
                        </p>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h1>Using the Accessibilities</h1>
                        <p>
                            There&apos;re some functions you can import into your components:
                        </p>
                        <SpecList>
                            <DetailSpecItem
                                code={<><code>usePropEnabled</code>(<code>props</code>, [<code>defaultEnabled</code>])</>}
                            >
                                <p>
                                    Determines if the current component state is <strong>enabled</strong> or <strong>disabled</strong>.
                                    It also calculates the <strong>enabled/disabled</strong> state of the <strong>ancestors</strong>.
                                </p>
                                <p>
                                    If <code>props.inheritEnabled === true</code>:<br />
                                    If one/more ancestors&apos; states are <strong>disabled</strong>, the current component state is always <strong>disabled</strong> (returns <code>false</code>).<br />
                                    If all ancestors states are <strong>enabled</strong>, the current component state is determined by it&apos;s <code>props.enabled</code> (if defined),<br />
                                    otherwise returns the value of <code>defaultEnabled</code> (the default value is <code>true</code>).
                                </p>
                                <p>
                                    If <code>props.inheritEnabled !== true</code>:<br />
                                    Returns <code>props.enabled</code> (if defined),<br />
                                    otherwise returns the value of <code>defaultEnabled</code> (the default value is <code>true</code>).
                                </p>
                            </DetailSpecItem>
                            <DetailSpecItem
                                code={<><code>usePropReadOnly</code>(<code>props</code>, [<code>defaultReadOnly</code>])</>}
                            >
                                <p>
                                    Determines if the current component state is <strong>readonly</strong> or <strong>editable</strong>.
                                    It also calculates the <strong>readonly/editable</strong> state of the <strong>ancestors</strong>.
                                </p>
                                <p>
                                    If <code>props.inheritReadOnly === true</code>:<br />
                                    If one/more ancestors&apos; states are <strong>readonly</strong>, the current component state is always <strong>readonly</strong> (returns <code>true</code>).<br />
                                    If all ancestors states are <strong>editable</strong>, the current component state is determined by it&apos;s <code>props.readOnly</code> (if defined),<br />
                                    otherwise returns the value of <code>defaultReadOnly</code> (the default value is <code>false</code>).
                                </p>
                                <p>
                                    If <code>props.inheritReadOnly !== true</code>:<br />
                                    Returns <code>props.readOnly</code> (if defined),<br />
                                    otherwise returns the value of <code>defaultReadOnly</code> (the default value is <code>false</code>).
                                </p>
                            </DetailSpecItem>
                            <DetailSpecItem
                                code={<><code>usePropActive</code>(<code>props</code>, [<code>defaultActive</code>])</>}
                            >
                                <p>
                                    Determines if the current component state is <strong>active</strong> or <strong>passive</strong>.
                                    It also calculates the <strong>active/passive</strong> state of the <strong>ancestors</strong>.
                                </p>
                                <p>
                                    If <code>props.inheritActive === true</code>:<br />
                                    If one/more ancestors&apos; states are <strong>active</strong>, the current component state is always <strong>active</strong> (returns <code>true</code>).<br />
                                    If all ancestors states are <strong>passive</strong>, the current component state is determined by it&apos;s <code>props.active</code> (if defined),<br />
                                    otherwise returns the value of <code>defaultActive</code> (the default value is <code>false</code>).
                                </p>
                                <p>
                                    If <code>props.inheritActive !== true</code>:<br />
                                    Returns <code>props.active</code> (if defined),<br />
                                    otherwise returns the value of <code>defaultActive</code> (the default value is <code>false</code>).
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
                        </SpecList>
                    </article>
                </Section>
            </Main>
        </>
    )
}

export default LayoutsPage
