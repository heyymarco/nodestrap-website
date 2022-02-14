import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { Section } from '../../../components/Section'
import { ComponentInfoProvider, CurrentComponent, LinkHooksPage, SectionIntro } from '../../../components/common-contents'
import { SpecList, DetailSpecItem } from '../../../components/SpecList'



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/hooks' packageType='utility' component={<LinkHooksPage />} bases={<LinkHooksPage />}>
            <Head>
                <title>Hooks Utility</title>
                <meta name="description" content="Using `hooks` utility" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a utility contains common react hooks.
                </p>
                <p>
                    By centralizing the reusable codes in one place, the overall bundle size can be reduced.
                </p>
            </SectionIntro>
            <Section title='Using the Hooks'>
                <p>
                    There&apos;re some hooks you can import into your components:
                </p>
                <SpecList>
                    <DetailSpecItem
                        code='useIsomorphicLayoutEffect()'
                    >
                        <p>
                            Similar to <code>useLayoutEffect()</code> but it does <strong>server side support</strong>.
                            Actually it does <strong>nothing</strong> in server side environment.
                        </p>
                    </DetailSpecItem>
                    <DetailSpecItem
                        code='-- under construction --'
                    >
                        <p>coming soon...</p>
                    </DetailSpecItem>
                </SpecList>
            </Section>
        </ComponentInfoProvider>
    );
}

export default Page
