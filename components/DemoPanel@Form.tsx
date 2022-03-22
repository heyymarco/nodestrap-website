// cssfn:
import {
    // compositions:
    mainComposition,
    
    
    
    // styles:
    style,
    // rules:
    rule,
    
    
    
    //combinators:
    children,
    nextSiblings,
}                           from '@cssfn/cssfn'       // cssfn core
import {
    // hooks:
    createUseSheet,
}                           from '@cssfn/react-cssfn' // cssfn for react

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { ContentInitials, ContentOptionProps, ContentOptions, useContentStates } from './DemoPanel@Content';

import { usesBorderRadius } from '@nodestrap/basic'
import { Form } from '@nodestrap/form'
import { TypeScriptCode } from './Code';
import { EmailInput, NumberInput, PasswordInput, TextInput } from '@nodestrap/input';
import Label from '@nodestrap/label';
import { Button } from '@nodestrap/button';



export const useDemoFormSheet = createUseSheet(() => {
    const [, , borderRadiusDecls] = usesBorderRadius();

    
    
    return [
        mainComposition(
            rule('&&', { // makes `.DemoForm` is more specific than `.Form`
                ...style({
                    display             : 'grid',
                    gridTemplateColumns : [['max-content', '1fr']],
                    gridAutoFlow        : 'row',
                    
                    columnGap           : 0,
                    rowGap              : '1em',

                    ...children(':nth-child(2n+1):not(button)', {
                        display        : 'flex',
                        justifyContent : 'left',
                        alignItems     : 'center',
                        
                        borderInlineEndWidth: '0px',
                        [borderRadiusDecls.borderStartEndRadius]: '0px',
                        [borderRadiusDecls.borderEndEndRadius  ]: '0px',

                        ...nextSiblings('*', {
                            [borderRadiusDecls.borderStartStartRadius]: '0px',
                            [borderRadiusDecls.borderEndStartRadius  ]: '0px',
                        }),
                    }),
                    ...children('button', {
                        gridColumnEnd: 'span 2',
                    }),
                }),
            }),
        ),
    ];
}, /*sheetId :*/'ym927m5iyb'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names




export const formInitials = {
    enableValidation : false     as boolean|undefined,
    isValid          : undefined as boolean|undefined,
};
export type FormInitials = typeof formInitials & Partial<ContentInitials>
export const useFormStates = (initials ?: Partial<FormInitials>) => {
    const initials2 : FormInitials = {
        ...formInitials,
        ...initials
    };
    
    const enableValidation = useResetableState(initials2.enableValidation);
    const isValid          = useResetableState(initials2.isValid);

    return {
        ...useContentStates(initials2),
        enableValidation,
        isValid,
    }
}
export type FormOptionProps = { states: ReturnType<typeof useFormStates> } & ContentOptionProps
export const FormOptions = (props: FormOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='enableValidation'
            options={[false, true]}
            value={states.enableValidation[0]}
            setValue={states.enableValidation[1]}
        />
        <Option
            name='isValid'
            options={[undefined, false, true]}
            value={states.isValid[0]}
            setValue={states.isValid[1]}
        />
        
        <ContentOptions
            {...props}
        />
    </>);
}



export const DemoForm = () => {
    const styles = useDemoFormSheet();
    
    const states   = useFormStates();
    
    return (
        <>
            <div className='preview'>
                <Form
                    enableValidation={states.enableValidation[0]}
                    isValid={states.isValid[0]}
                    
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                    
                    autoComplete='off'
                    classes={[styles.main]}

                    noValidate={true}
                    onSubmit={(e) => {
                        e.preventDefault();
                        states.enableValidation[1](true)
                    }}
                >
                    <Label>username</Label>
                    <TextInput name='usr' placeholder='smith123' required={true} minLength={3} maxLength={20} />
                    
                    <Label>Password</Label>
                    <PasswordInput name='pwd' placeholder='secret' required={true} minLength={6} maxLength={20} />
                    
                    <Label>Email</Label>
                    <EmailInput name='email' placeholder='your@company.com' required={true} />
                    
                    <Label>Age</Label>
                    <NumberInput name='age' placeholder='29' required={false} min={12} max={199} />

                    <Button type='submit' theme='primary'>Submit</Button>
                </Form>
                <TypeScriptCode collapsable={false}>{`
<Form
    enableValidation={${states.enableValidation[0]}}
    isValid={${states.isValid[0]}}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    /* ... */
</Form>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <FormOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoForm as default }
