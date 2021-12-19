import type { NextPage } from 'next'
import Head from 'next/head'
import React, {  } from 'react'
import { Main } from '../../../components/Main'
import { Section } from '../../../components/Section'
import { SpecList, SimpleSpecItem } from '../../../components/SpecList'


const LayoutsPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Hooks Utility</title>
                <meta name="description" content="Using `hooks` utility" />
            </Head>

            <Main>
                <Section>
                <article>
                        <h1>Hooks Utility</h1>
                        <p>
                            <code>@nodestrap/hooks</code> is a utility contains common react hooks.
                        </p>
                        <p>
                            By centralizing the reusable codes in one place, the overall bundle size can be reduced.
                        </p>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h1>Using the Hooks</h1>
                        <p>
                            There&apos;re some hooks you can import into your components:
                        </p>
                        <SpecList>
                            <SimpleSpecItem>
                                <code>useIsomorphicLayoutEffect()</code>
                                <p>
                                    Similar to <code>useLayoutEffect()</code> but it does <strong>server side support</strong>.
                                    Actually it does <strong>nothing</strong> in server side environment.
                                </p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>--under construction--</code>
                                <p>coming soon...</p>
                            </SimpleSpecItem>
                        </SpecList>
                    </article>
                </Section>
            </Main>
        </>
    )
}

export default LayoutsPage