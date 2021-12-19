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
                <title>Validations Utility</title>
                <meta name="description" content="Using `validations` utility" />
            </Head>

            <Main>
                <Section>
                    <article>
                        <h1>Validations Utility</h1>
                        <p>
                            <code>@nodestrap/validations</code> is a utility for determining the validation statuses of components such as <strong>enableValidation</strong> and <strong>valid</strong>/<strong>invalid</strong>.
                        </p>
                        <p>
                            By centralizing the reusable codes in one place, the overall bundle size can be reduced.
                        </p>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h1>Using the Validations</h1>
                        <p>
                            There&apos;re some functions you can import into your components:
                        </p>
                        <SpecList>
                            <DetailSpecItem
                                code={<><code>usePropValidation</code>(<code>props</code>)</>}
                            >
                                <p>
                                    Determines if the current component validation is <strong>enabled</strong> or <strong>disabled</strong> and determines if the validity state is <strong>valid</strong> or <strong>invalid</strong> or <strong>uncheck</strong>.
                                    It also calculates the <strong>enabled</strong>/<strong>disabled</strong> validation and <strong>valid</strong>/<strong>invalid</strong> state of the ancestor: <code>&lt;ValidationProvider&gt;</code>.
                                </p>
                                <p>
                                    If <code>props.inheritValidation === true</code> (the default value) :<br />
                                    If <code>ValidationProvider</code> is <strong>disabled</strong>, the current component validation is always <strong>disabled</strong>,<br />
                                    otherwise the value of <code>props.enableValidation</code> (the default value is <code>true</code>).
                                </p>
                                <p>
                                    If <code>props.inheritValidation === false</code>:<br />
                                    The current component validation is determined by <code>props.enableValidation</code> (the default value is <code>true</code>).
                                </p>
                                <p>
                                    If <strong>the current component validation is disabled</strong>, the current component validity state is always <code>uncheck</code>.
                                </p>
                                <p>
                                    If <code>props.inheritValidation === true</code> (the default value) :<br />
                                    If <code>ValidationProvider</code> validity state is <strong>valid</strong> or <strong>invalid</strong> or <strong>uncheck</strong>, the current component validity state is always <strong>the same value</strong>.<br />
                                    If <code>ValidationProvider</code> validity state is <strong>undefined</strong>, the current component validity state is determined by <code>props.isValid</code> (if defined),<br />
                                    otherwise returns <code>undefined</code> (and you should perform your own validation).
                                </p>
                                <p>
                                    If <code>props.inheritValidation === false</code>:<br />
                                    The current component validity state is determined by <code>props.isValid</code> (if defined),<br />
                                    otherwise returns <code>undefined</code> (and you should perform your own validation).
                                </p>
                            </DetailSpecItem>
                            <DetailSpecItem
                                code={<><code>&lt;ValidationProvider enableValidation={`{true|false}`} isValid={`{true|false|null}`} &gt;</code></>}
                            >
                                <p>
                                    Provides the inheritance of validation <strong>enabled</strong>/<strong>disabled</strong> and <strong>valid</strong>/<strong>invalid</strong>/<strong>uncheck</strong> of descendant components.
                                </p>
                                <p>
                                    This wrapper is useful for making a group of many components have the same properties of <code>.enableValidation</code> and/or <code>.isValid</code>.
                                </p>
                                <p>
                                    By default, the default inheritances of the <strong>implemented components</strong> and <code>&lt;ValidationProvider&gt;</code> itself is:<br />
                                    <code>.inheritValidation</code> = <code>true</code><br />
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
