// react:
import {
    default as React,
}                           from 'react'         // base technology of our nodestrap components

// others libs:
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';



// react components:

export interface CodeProps {
    // code:
    plugins  ?: string[]
    language ?: string
    children ?: string
}
export function Code(props: CodeProps) {
    // rest props:
    const {
        // code:
        plugins,
        language,
        children : code,
    ...restProps} = props;
    
    
    
    // jsx:
    return (
        <SyntaxHighlighter
            // other props:
            {...restProps}
            
            
            language={language}
            
            
            // style={dark}
        >
            { code?.trim() }
        </SyntaxHighlighter>
    );
}
export { Code as default }

export const BashCode = (props: Omit<CodeProps, 'language'>)       => <Code {...props} language='bash'/>
export const TypeScriptCode = (props: Omit<CodeProps, 'language'>) => <Code {...props} language='tsx'/>