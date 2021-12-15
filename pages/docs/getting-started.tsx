import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ButtonIcon as Button } from '@nodestrap/button-icon'
import { BashCode, TypeScriptCode } from '../../components/Code'
import { Navbar, NavbarMenu } from '@nodestrap/navbar';
import { Main } from '../../components/Main'
import { Section } from '../../components/Section'



const Download: NextPage = () => {
    return (
        <>
            <Head>
                <title>Getting Started - Nodestrap</title>
                <meta name="description" content="Start to learn how to implement Nodestrap components into your react app." />
            </Head>

            <Main>
                <Section>
                    <article>
                        <h1>Getting Started</h1>
                        <p>
                            <strong>Nodestrap</strong> is a JavaScript component library for making React-based web development much faster &amp; easier.
                        </p>
                        <p>
                            There are tons of our components that <em>ready to use</em> into your React projects with no/miminum configuration.
                        </p>
                        <p>
                            Our project is similar to <strong>Bootstrap</strong> or <strong>Ant Design</strong> but we made them with <em>React way</em>.
                            All the components are <strong>React based</strong>, so it wouldn&apos;t work outside the React app.
                            Everything are <strong>virtual DOM</strong>-based with <em>props</em> and <em>React hooks</em>.
                        </p>
                        <p>
                            We asssume you&apos;re familiar with <Button btnStyle='link' theme='primary' href='https://reactjs.org/' target='_blank' rel='nofollow'>React</Button> or React-based frameworks such as <Button btnStyle='link' theme='primary' href='https://nextjs.org/' target='_blank' rel='nofollow'>Next JS</Button> or <Button btnStyle='link' theme='primary' href='https://www.gatsbyjs.com/' target='_blank' rel='nofollow'>Gatsby JS</Button>.
                            If not, we&apos;re recommended you learn it first.
                        </p>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Prepare</h2>
                        <p>
                            To do this tutorial you&apos;ll need a working React app.
                        </p>
                        <BashCode>{`
npx create-react-app my-react-app
                        `}</BashCode>
                        <p>
                            Because Nodestrap components are made with <strong>JavaScript ES6</strong>, we need to configure the react to support it by modifying the <code>package.json</code> a bit:
                        </p>
                        <p>
                            from:
                        </p>
                        <TypeScriptCode>{`
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
                        `}</TypeScriptCode>
                        <p>
                            to:
                        </p>
                        <TypeScriptCode>{`
"browserslist": [
  ">0.2%",
  "not dead",
  "not op_mini all"
]
                        `}</TypeScriptCode>
                        <p>
                            Note: for <strong>Next JS</strong> or <strong>Gatsby JS</strong>, you <em>do not need</em> to do it. It&apos;s <em>already</em> supported by default.
                        </p>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Installing the First Component</h2>
                        <p>
                            Usually, a website has a navbar on the top. Let&apos;s install it first:
                        </p>
                        <BashCode>{`
npm install @nodestrap/navbar
                        `}</BashCode>
                        <p>
                            After installed, place a navbar to the <code>src/App.js</code>:
                        </p>
                        <TypeScriptCode>{`
/* ... */
import { Navbar, NavbarMenu } from '@nodestrap/navbar'
// import { Link } from 'react-router-dom' // for React-Router user, replace the original <Link> with:
import { Link } from '@nodestrap/react-router-link' // for React-Router user
/* ... */
function App() {
    {/* ... */}
    <Navbar theme='primary'>
        <NavbarMenu href='/'>Home</NavbarMenu>
        <NavbarMenu href='/about'>About</NavbarMenu>
    </Navbar>
    {/* ... */}
    /* for React-Router or Gatsby-JS with <Link to='...'>: */
    <Navbar theme='primary'>
        <NavbarMenu>
            <Link to='/'>Home</Link>
        </NavbarMenu>
        <NavbarMenu>
            <Link to='/about'>About</Link>
        </NavbarMenu>
    </Navbar>
    {/* ... */}
    /* for Next-JS with <Link href='...'>: */
    <Navbar theme='primary'>
        <NavbarMenu>
            <Link href='/'>Home</Link>
        </NavbarMenu>
        <NavbarMenu>
            <Link href='/about'>About</Link>
        </NavbarMenu>
    </Navbar>
    {/* ... */}
}
/* ... */
                        `}</TypeScriptCode>
                        <p>
                            Note: for <strong>client side navigation</strong> with <code>&lt;Link&gt;</code> component,
                            the <code>&lt;Link&gt;</code> is <strong>inside</strong> the <code>&lt;NavbarMenu&gt;</code> element.
                            The <code>&lt;NavbarMenu&gt;</code> will <strong>detect</strong> <em>the special child - <code>&lt;Link&gt;</code></em> and <strong>swap</strong> them at runtime.
                        </p>
                        <p>
                            When running your app, you should see the navbar like this:
                        </p>
                        <Navbar theme='primary'>
                            <NavbarMenu href='/'>Home</NavbarMenu>
                            <NavbarMenu href='/about'>About</NavbarMenu>
                        </Navbar>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Installing the Second Component</h2>
                        <p>
                            Then we try to add a button and a link into our page.
                        </p>
                        <p>
                            In Nodestrap, a button and a link are the same, just different in styling and the tag name (the <code>tag=</code> prop will be assigned to <code>tag=&apos;a&apos;</code> automatically if not assigned and there is <code>href=&apos;/something&apos;</code> or <code>&lt;Link&gt;</code> exists).
                        </p>
                        <p>
                            Let&apos;s install the button:
                        </p>
                        <BashCode>{`
npm install @nodestrap/button
                        `}</BashCode>
                        <p>
                            After installed, place a button and a link to the <code>src/App.js</code>:
                        </p>
                        <TypeScriptCode>{`
/* ... */
import { Button } from '@nodestrap/button'
// import { Link } from 'react-router-dom' // for React-Router user, replace the original <Link> with:
import { Link } from '@nodestrap/react-router-link' // for React-Router user
/* ... */
function App() {
    {/* ... */}
    <Button theme='success' onClick={() => alert('hello world!')}>
        Click me!
    </Button>
    {/* ... */}
    <Button theme='primary' btnStyle='link' href='/about'>
        visit me!
    </Button>
    {/* ... */}
    /* for React-Router or Gatsby-JS with <Link to='...'>: */
    <Button theme='primary' btnStyle='link' href='/about'>
        <Link to='/about'>visit me!</Link>
    </Button>
    {/* ... */}
    /* for Next-JS with <Link href='...'>: */
    <Button theme='primary' btnStyle='link' href='/about'>
        <Link href='/about'>visit me!</Link>
    </Button>
}
/* ... */
                        `}</TypeScriptCode>
                        <p>
                            Then you should see the button and link like this:
                        </p>
                        <Button theme='success' onClick={() => alert('hello world!')}>
                            Click me!
                        </Button>
                        <Button theme='primary' btnStyle='link' href='/about'>
                            visit me!
                        </Button>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Done!</h2>
                        <p>
                            That&apos;s it. You should be able to use another our components easily.
                        </p>
                        <p>
                            To configure the navbar and the button, please visit:<br />
                            <Button theme='primary' btnStyle='link'>
                                <Link href='/docs/components/button'>Learn how to use and configure a Button</Link>
                            </Button>
                            <br />and<br />
                            <Button theme='primary' btnStyle='link'>
                                <Link href='/docs/components/navbar'>Learn how to use and configure a Navbar</Link>
                            </Button>
                        </p>
                        <p>
                            To see all our components, please visit:<br />
                            <Button theme='primary' btnStyle='link'>
                                <Link href='/docs/components'>See our official components</Link>
                            </Button>
                            <br />or<br />
                            <Button theme='primary' btnStyle='link' href='https://github.com/nodestrap' target='_blank'>
                                Visit our official GitHub
                            </Button>
                        </p>
                        <p>
                            Fell free to create <em>your official GitHub</em> by modifying our components!
                            Show me your creativity!
                        </p>
                    </article>
                </Section>
            </Main>
        </>
    )
}

export default Download
