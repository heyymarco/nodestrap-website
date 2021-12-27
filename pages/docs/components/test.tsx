import React, { useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SpecList, SubSpecList, DetailSpecItem, SimpleSpecItem } from '../../../components/SpecList'
import { Warning } from '../../../components/Info'

import { SectionInheritedProps, LinkIndicatorPage, LinkBasicPage, LinkIconPage, SectionOverridingDefaults, SectionCustomizingCss, ComponentInfoProvider, SectionDerivering, SectionCustomizing, SectionStates, SectionSubProperty, SectionIntro } from '../../../components/common-contents'
import { SectionDemoIndicator } from '../../../components/DemoPanel@Indicator'
import { ResponsiveBoundary } from '../../../components/ResponsiveBoundary'



const Page: NextPage = () => {
    // const [spanRef, setSpanRef] = useState<HTMLSpanElement|null>(null);
    return (<>
        <ResponsiveBoundary
            fallbacks={[2000, 1000, 500, 300, 100]}
        >{(fallback) => ([
            <div key={1}>
                <div style={{background: 'pink', width: `${fallback}px`, height: '20px'}}></div>
            </div>,
            // <span ref={setSpanRef} key={2}>test in { `${fallback}` }</span>
        ])}</ResponsiveBoundary>
        {/* <p>span ref is: {spanRef?.outerHTML}</p> */}
    </>);
}

export default Page
