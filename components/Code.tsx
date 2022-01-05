import style from './CodeHighlighter.module.scss'

// react:
import {
    default as React,
}                           from 'react'         // base technology of our nodestrap components

import type { CodeHighlighterProps } from './CodeHighlighter'

import loadable from '@loadable/component'
import Detail from './Detail'
const CodeHighlighterLazy = loadable(() => import(/* webpackChunkName: 'CodeHighlighter' */'./CodeHighlighter'))



// react components:

export interface CodeProps extends CodeHighlighterProps {
    collapsable ?: boolean
    collapse    ?: boolean
    label       ?: string
}
export function Code(props: CodeProps) {
    const {
        collapsable = true,
        collapse    = true,
        label,
        children,
    ...restProps} = props;
    const code = children?.trim();

    const CodeJsx = ({ classes }: { classes ?: string[] }) => (<>
        <CodeHighlighterLazy {...restProps} classes={classes} fallback={
            <pre className={[style.codeHighlighter, ...(classes ?? [])].flat().join(' ')}>
                { code }
            </pre>
        }>
            { code }
        </CodeHighlighterLazy>
    </>);
    
    if (collapsable) return (
        <Detail
            label={label ?? 'Show code'}
            
            theme='primary'
            mild={true}
            lazy={true}
            
            detailStyle='content'
            size='sm'
        >
            <CodeJsx classes={['media']} />
        </Detail>
    );
    return <CodeJsx />;
}
export { Code as default }

export const BashCode = (props: Omit<CodeProps, 'language'>)       => <Code {...props} language='bash'/>
export const TypeScriptCode = (props: Omit<CodeProps, 'language'>) => <Code {...props} language='tsx'/>
export const CssCode = (props: Omit<CodeProps, 'language'>) => <Code {...props} language='css'/>