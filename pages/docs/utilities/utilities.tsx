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
                <title>Utilities</title>
                <meta name="description" content="Using `utilities`" />
            </Head>

            <Main>
                <Section>
                <article>
                        <h1>Utilities</h1>
                        <p>
                            <code>@nodestrap/utilities</code> is a utility contains common utility functions.
                        </p>
                        <p>
                            By centralizing the reusable codes in one place, the overall bundle size can be reduced.
                        </p>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h1>Using the Utilities</h1>
                        <p>
                            There&apos;re some functions you can import into your components:
                        </p>
                        <SpecList>
                            <DetailSpecItem
                                code={<><code>isTypeOf</code>(<code>element</code>, <code>funcComponent</code>)</>}
                            >
                                <p>
                                    Tests whenever the specified <code>element</code> is marked as kind of <code>funcComponent</code>.
                                </p>
                            </DetailSpecItem>
                            <DetailSpecItem
                                code={<><code>setRef</code>(<code>ref</code>, <code>value</code>)</>}
                            >
                                <p>The elegant way to set <code>React.useRef()</code></p>
                            </DetailSpecItem>
                            <DetailSpecItem
                                code={<><code>parseNumber</code>(<code>expression</code>)</>}
                            >
                                <p>
                                    Parses the specified <code>expression</code> to a <code>number</code>.
                                    If fails, return <code>null</code>
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
