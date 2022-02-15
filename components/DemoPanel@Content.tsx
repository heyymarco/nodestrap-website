import { useResetableState, Option, ResetButton } from './DemoPanel';
import { BasicInitials, BasicOptionProps, BasicOptions, useBasicStates } from './DemoPanel@Basic';

import { Content } from '@nodestrap/content'
import { TypeScriptCode } from './Code';



export const contentInitials = {
    mild     : true,
};
export type ContentInitials = typeof contentInitials & Partial<BasicInitials>
export const useContentStates = (initials ?: Partial<ContentInitials>) => {
    const initials2 : ContentInitials = {
        ...contentInitials,
        ...initials
    };

    return {
        ...useBasicStates(initials2),
    }
}
export type ContentOptionProps =  { states: ReturnType<typeof useContentStates> } & BasicOptionProps
export const ContentOptions = (props: ContentOptionProps) => {
    return (<>
        <BasicOptions
            {...props}
        />
    </>);
}



export const DemoContent = () => {
    const states = useContentStates();
    
    return (
        <>
            <div className='preview'>
                <Content
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                >
                    hello world
                </Content>
                <TypeScriptCode collapsable={false}>{`
<Content
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    hello world
</Content>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <ContentOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoContent as default }
