// react:
import {
    default as React,
    useMemo,
}                           from 'react'         // base technology of our nodestrap components

// others libs:
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';



export interface CodeHighlighterProps {
    // code:
    language ?: string
    children ?: string
    
    classes  ?: string[]
}
export default function CodeHighlighter({language, children: code, classes}: CodeHighlighterProps) {
    const className = (classes ?? []).join(' ');

    return useMemo(() => (
        <SyntaxHighlighter
            language={language}
            
            
            // style={dark}
            customStyle={{ margin: null }}
            className={className}
        >
            { code?.trim() }
        </SyntaxHighlighter>
    ), [language, code, className]);
}