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
}
export default function CodeHighlighter({language, children: code}: CodeHighlighterProps) {
    return useMemo(() => (
        <SyntaxHighlighter
            language={language}
            
            
            // style={dark}
        >
            { code?.trim() }
        </SyntaxHighlighter>
    ), [language, code]);
}