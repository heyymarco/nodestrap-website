import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { ComponentInfoProvider, CurrentComponent, LinkLayoutsPage, SectionGeneral, SectionIntro } from '../../../components/common-contents'
import { SpecList, SimpleSpecItem } from '../../../components/SpecList'



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/layouts' packageType='utility' component={<LinkLayoutsPage />} bases={<LinkLayoutsPage />}>
            <Head>
                <title>Layouts Utility</title>
                <meta name="description" content="Using `layouts` utility" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a utility for creating common layouts.
                </p>
                <p>
                    By centralizing the reusable codes in one place, the overall bundle size can be reduced.
                </p>
            </SectionIntro>
            <SectionGeneral title='Using the Layout Templates'>
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
            </SectionGeneral>
        </ComponentInfoProvider>
    );
}

export default Page
