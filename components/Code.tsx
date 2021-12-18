// react:
import {
    default as React,
    useMemo,
}                           from 'react'         // base technology of our nodestrap components

// others libs:
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';



// react components:

export interface CodeProps {
    // code:
    language ?: string
    children ?: string
}
export function Code(props: CodeProps) {
    // rest props:
    const {
        // code:
        language,
        children : code,
    } = props;
    
    
    
    // jsx:
    return useMemo(() => (
        <SyntaxHighlighter
            language={language}
            
            
            // style={dark}
        >
            { code?.trim() }
        </SyntaxHighlighter>
    ), [language, code]);
}
export { Code as default }

export const BashCode = (props: Omit<CodeProps, 'language'>)       => <Code {...props} language='bash'/>
export const TypeScriptCode = (props: Omit<CodeProps, 'language'>) => <Code {...props} language='tsx'/>
export const CssCode = (props: Omit<CodeProps, 'language'>) => <Code {...props} language='css'/>