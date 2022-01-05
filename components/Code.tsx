import style from './CodeHighlighter.module.scss'

// react:
import {
    default as React,
}                           from 'react'         // base technology of our nodestrap components

import type { CodeHighlighterProps } from './CodeHighlighter'

import loadable from '@loadable/component'
const CodeHighlighterLazy = loadable(() => import(/* webpackChunkName: 'CodeHighlighter' */'./CodeHighlighter'))



// react components:

export type { CodeHighlighterProps }
export function Code(props: CodeHighlighterProps) {
    return (<>
        <CodeHighlighterLazy {...props} fallback={
            <pre className={style.codeHighlighter}>
                { props.children?.trim() }
            </pre>
        } />
    </>);
}
export { Code as default }

export const BashCode = (props: Omit<CodeHighlighterProps, 'language'>)       => <Code {...props} language='bash'/>
export const TypeScriptCode = (props: Omit<CodeHighlighterProps, 'language'>) => <Code {...props} language='tsx'/>
export const CssCode = (props: Omit<CodeHighlighterProps, 'language'>) => <Code {...props} language='css'/>