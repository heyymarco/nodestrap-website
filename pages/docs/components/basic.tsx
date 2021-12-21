import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useRef, useState } from 'react'
import { Main } from '../../../components/Main'
import { Section, Section2 } from '../../../components/Section'
import { SpecList, DetailSpecItem } from '../../../components/SpecList'
import { TypeScriptCode, CssCode } from '../../../components/Code'
import { Basic, cssVals as basicVals, SizeName, ThemeName } from '@nodestrap/basic'
import { Tips, Warning } from '../../../components/Info'
import { Content } from '@nodestrap/content'
import { DemoPanel, Option, ResetButton, ThemeOption } from '../../../components/DemoPanel'
import { Range } from '@nodestrap/range'
import { Group } from '@nodestrap/group'
import { Radio } from '@nodestrap/radio'
import { Check } from '@nodestrap/check'
import { parseNumber } from '@nodestrap/utilities'



const BasicPage: NextPage = () => {
    const initialProps = useRef({
        size     : undefined as SizeName|undefined,
        nude     : false,
        theme    : 'secondary' as ThemeName|undefined,
        gradient : false,
        outlined : false,
        mild     : false,
    });
    const [size, setSize]   = useState(initialProps.current.size);
    const [nude, setNude]   = useState(initialProps.current.nude);
    const [theme, setTheme]   = useState(initialProps.current.theme);
    const [gradient, setGradient]   = useState(initialProps.current.gradient);
    const [outlined, setOutlined]   = useState(initialProps.current.outlined);
    const [mild, setMild]   = useState(initialProps.current.mild);
    
    
    
    return (
        <>
            <Head>
                <title>Basic Component</title>
                <meta name="description" content="Using <Basic> component" />
            </Head>

            <Main>
                <Section>
                    <article>
                        <h1>Basic Component</h1>
                        <p>
                            <code>&lt;Basic&gt;</code> is the most basic component in Nodestrap components after the <code>&lt;Element&gt;</code>.
                            It provides the basic styling and some basic essentials.
                        </p>
                        <p>
                            Unlike <code>&lt;Element&gt;</code>, <code>&lt;Basic&gt;</code> has a default style that you can see visually.
                        </p>
                    </article>
                </Section>
                <Section>
                    <article>
                        <h2>Demonstration</h2>
                        <p>
                            Move some sliders below!
                            You&apos;ll see the <code>&lt;Basic&gt;</code> is highly customizable.
                        </p>
                        <DemoPanel>
                            <span>Preview</span>
                            <Basic
                                size={size}
                                nude={nude}
                                theme={theme}
                                gradient={gradient}
                                outlined={outlined}
                                mild={mild}
                            >
                                hello world
                            </Basic>
                            
                            <Option
                                name='size'
                                options={['sm', undefined, 'lg']}
                                value={size}
                                setValue={setSize}
                            />
                            
                            <Option
                                name='nude'
                                options={[false, true]}
                                value={nude}
                                setValue={setNude}
                            />

                            <ThemeOption
                                value={theme}
                                setValue={setTheme}
                            />
                            
                            <Option
                                name='gradient'
                                options={[false, true]}
                                value={gradient}
                                setValue={setGradient}
                            />
                            
                            <Option
                                name='outlined'
                                options={[false, true]}
                                value={outlined}
                                setValue={setOutlined}
                            />
                            
                            <Option
                                name='mild'
                                options={[false, true]}
                                value={mild}
                                setValue={setMild}
                            />
                            
                            <ResetButton
                                enabled={
                                    (size !== initialProps.current.size)
                                    ||
                                    (nude !== initialProps.current.nude)
                                    ||
                                    (theme !== initialProps.current.theme)
                                    ||
                                    (gradient !== initialProps.current.gradient)
                                    ||
                                    (outlined !== initialProps.current.outlined)
                                    ||
                                    (mild !== initialProps.current.mild)
                                }
                                onClick={() => {
                                    setSize(initialProps.current.size);
                                    setNude(initialProps.current.nude);
                                    setTheme(initialProps.current.theme);
                                    setGradient(initialProps.current.gradient);
                                    setOutlined(initialProps.current.outlined);
                                    setMild(initialProps.current.mild);
                                }}
                            />
                        </DemoPanel>
                    </article>
                </Section>
            </Main>
        </>
    )
}

export default BasicPage
