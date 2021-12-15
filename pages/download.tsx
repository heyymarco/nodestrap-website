import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ButtonIcon as Button } from '@nodestrap/button-icon'
import { BashCode, TypeScriptCode } from '../components/Code'
import React from 'react'
import { Main } from '../components/Main'
import { Section } from '../components/Section'



const Download: NextPage = () => {
    return (
        <>
            <Head>
                <title>Download Nodestrap</title>
                <meta name="description" content="Download Nodestrap to be included into your React/NextJS/Gatsby app." />
            </Head>

            <Main>
                <Section>
                    <article>
                        <p>
                            All Nodestrap components are <em>modular</em>.
                        </p>
                        <p>
                            Only install the components what you need.<br />
                            Find our components in the
                            <Button btnStyle='link' theme='primary'><Link href='/docs/components'>documentation page</Link></Button>
                            or in
                            <Button btnStyle='link' theme='primary' href='https://github.com/nodestrap' target='_blank'>our GitHub</Button>.
                        </p>
                        <p>
                            For example: you need our <code>&lt;Button&gt;</code> and <code>&lt;Navbar&gt;</code>.<br />
                            Just install:<br /><code>npm i @nodestrap/button</code><br />and<br /><code>npm i @nodestrap/navbar</code>
                        </p>
                        <BashCode>{`
npm i @nodestrap/button @nodestrap/navbar
                        `}</BashCode>
                        <p>
                            Then import them into your desired page:
                        </p>
                        <TypeScriptCode>{`
import { Button } from '@nodestrap/button'
import { Navbar, NavbarMenu } from '@nodestrap/navbar'
                        `}</TypeScriptCode>
                        <p>
                            And finally use it:
                        </p>
                        <TypeScriptCode>{`
export default function MyPage() {
    return (
        <div>
            <Navbar theme="primary">
                <NavbarMenu href="/">Home</NavbarMenu>
                <NavbarMenu href="/about">About</NavbarMenu>
            </Navbar>
            <Button theme="primary" size="lg" onClick={() => alert("hello world!")}>Click me</Button>
        <div>
    )
}
                        `}</TypeScriptCode>
                    </article>
                </Section>
            </Main>
        </>
    )
}

export default Download
