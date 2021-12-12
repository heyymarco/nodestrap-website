import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'



const Download: NextPage = () => {
    const router = useRouter();
    router.replace('/docs/getting-started')
    
    return (
        <p>Redirecting to <a href='/docs/getting-started'>/docs/getting-started</a>...</p>
    )
}

export default Download
