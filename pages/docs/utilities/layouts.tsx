import type { NextPage } from 'next'
import Head from 'next/head'
import React, {  } from 'react'
import { Main } from '../../../components/Main'
import { Section } from '../../../components/Section'
import { SpecList, SimpleSpecItem } from '../../../components/SpecList'

import { LinkLayoutsPage } from '../../../components/common-contents'



const LayoutsPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Layouts Utility</title>
                <meta name="description" content="Using `layouts` utility" />
            </Head>

            <Main>
                <Section>
                <article>
                        <h1>Layouts Utility</h1>
                        <p>
                            <LinkLayoutsPage /> is a utility for creating common layouts.
                        </p>
                        <p>
                            By centralizing the reusable codes in one place, the overall bundle size can be reduced.
                        </p>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Using the Layout Templates</h2>
                        <p>
                            There&apos;re some templates you can import into your css:
                        </p>
                        <SpecList>
                            <SimpleSpecItem>
                                <code>fillTextLineHeightLayout()</code>
                                <p>Makes the layout&apos;s height as tall as current <strong>font size</strong>, including the current <strong>line height</strong>.</p>
                                <p>Usually for filling the space in a pseudo element such as <code>::before</code> &amp; <code>::after</code> but can also for filling the another elements.</p>
                            </SimpleSpecItem>
                            <SimpleSpecItem>
                                <code>fillTextLineWidthLayout()</code>
                                <p>Makes the layout&apos;s width as wide as current <strong>font size</strong>, including the current <strong>line height</strong>.</p>
                                <p>Usually for filling the space in a pseudo element such as <code>::before</code> &amp; <code>::after</code> but can also for filling the another elements.</p>
                            </SimpleSpecItem>
                        </SpecList>
                    </article>
                </Section>
            </Main>
        </>
    )
}

export default LayoutsPage
