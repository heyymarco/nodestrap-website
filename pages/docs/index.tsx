import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Element } from '@nodestrap/element'



const Download: NextPage = () => {
    const router = useRouter();
    useEffect(() => {
        router.replace('/docs/getting-started')
    }, []);
    
    
    
    return (
        <p>Redirecting to <Element tag='a' {...{href:'/docs/getting-started'}}>/docs/getting-started</Element>...</p>
    )
}

export default Download
