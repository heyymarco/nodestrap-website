import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ButtonIcon as Button } from '@nodestrap/button-icon'
import styles from '../styles/Home.module.scss'
import { GenericSection } from '../components/Section'



const Home: NextPage = () => {
    return (<>
        <Head>
            <title>Nodestrap - A React component library for building sites quickly</title>
            <meta name="description" content="Nodestrap - A React component library for building sites quickly." />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <GenericSection theme='primary'>
            <article className={styles.hero}>
                <h1 className='display-4'>Nodestrap</h1>
                <p className='display-6'>A React component library<br />for building sites quickly</p>
                <div className='actions'>
                    <Button icon='directions_run' theme='primary' size='lg'>
                        <Link href='/docs/getting-started'>Get Started</Link>
                    </Button>
                </div>
            </article>
        </GenericSection>
        <GenericSection>
            <article className={styles.features}>
                <section>
                    <h3 className='h5'>Modular</h3>
                    <p>Only install components what you need.</p>
                    <p>Each our component has its own installation.</p>
                    <p>If you only need a button and navbar, just install:<br /><code>npm i @nodestrap/button</code><br />and<br /><code>npm i @nodestrap/navbar</code></p>
                </section>
                <section>
                    <h3 className='h5'>Customizable</h3>
                    <p>We expose an API for customizing each component.</p>
                    <p>The component config is just a collection of <em>css variable</em>.<br />
                    No compilation needed for applying the changes, <em>instantly updated!</em>
                    </p>
                </section>
                <section>
                    <h3 className='h5'>Themeable</h3>
                    <p>All our component have a shared configuration via <em>css variables</em>.</p>
                    <p>Edit the theme in one place, all the components are synched in harmony.</p>
                </section>
                <section>
                    <h3 className='h5'>Intellisense Support</h3>
                    <p>Written in TypeScript (superset of JavaScript).</p>
                    <p>Autocomplete support mostly in popular code editor like VS Code.</p>
                </section>
                <section>
                    <h3 className='h5'>Open Source</h3>
                    <p>You can freely to use, modify or re-publish your with own component.</p>
                    <p>All our codes are available on <Button btnStyle='link' theme='primary' href='https://github.com/nodestrap' target='_blank'>GitHub</Button>.</p>
                </section>
                <section>
                    <h3 className='h5'>Look This Site!</h3>
                    <p>This site is also made from our Nodestrap components!</p>
                    <p>Built on top NextJS + Nodestrap components.</p>
                </section>
            </article>
        </GenericSection>
    </>);
}

export default Home
