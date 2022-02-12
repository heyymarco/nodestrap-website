import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { ComponentInfoProvider, CurrentComponent, LinkUtilitiesPage, SectionGeneral, SectionIntro } from '../../../components/common-contents'
import { SpecList, DetailSpecItem } from '../../../components/SpecList'



const Page: NextPage = () => {
    return (
        <ComponentInfoProvider packageName='@nodestrap/utilities' packageType='utility' component={<LinkUtilitiesPage />} bases={<LinkUtilitiesPage />}>
            <Head>
                <title>Utilities</title>
                <meta name="description" content="Using `utilities`" />
            </Head>

            <SectionIntro>
                <p>
                    <CurrentComponent /> is a utility contains common utility functions.
                </p>
                <p>
                    By centralizing the reusable codes in one place, the overall bundle size can be reduced.
                </p>
            </SectionIntro>
            <SectionGeneral title='Using the Utilities'>
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
            </SectionGeneral>
        </ComponentInfoProvider>
    );
}

export default Page
