import type { ThemeName } from '@nodestrap/basic';
import type { IconList, SizeName } from '@nodestrap/icon';
import { useResetableState, Option, ThemeOption, ResetButton } from './DemoPanel'

import { Icon } from '@nodestrap/icon'
import { TypeScriptCode } from './Code';



export const iconInitials = {
    icon     : 'face'    as IconList,
    size     : undefined as SizeName|undefined,
    theme    : 'primary' as ThemeName|undefined,
    mild     : false,
};
export type IconInitials = typeof iconInitials
export const useIconStates = (initials ?: Partial<IconInitials>) => {
    const initials2 : IconInitials = {
        ...iconInitials,
        ...initials
    };

    const icon     = useResetableState(initials2.icon);
    const size     = useResetableState(initials2.size);
    const theme    = useResetableState(initials2.theme);
    const mild     = useResetableState(initials2.mild);

    return {
        icon,
        size,
        theme,
        mild,
    };
}
export type IconOptionProps = { states: ReturnType<typeof useIconStates> }
export const IconOptions = (props: IconOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='icon'
            options={['face', 'instagram', 'whatsapp', 'elderly', 'email', 'busy']}
            value={states.icon[0]}
            setValue={states.icon[1]}
        />
        
        <Option
            name='size'
            options={[undefined, 'sm', 'nm', 'md', 'lg', '1em']}
            value={states.size[0]}
            setValue={states.size[1]}
        />

        <ThemeOption
            addUnset={true}
            value={states.theme[0]}
            setValue={states.theme[1]}
        />
        
        <Option
            name='mild'
            options={[false, true]}
            value={states.mild[0]}
            setValue={states.mild[1]}
        />
    </>);
}



export const DemoIcon = () => {
    const states = useIconStates();
    
    return (
        <>
            <div className='preview'>
                <Icon
                    icon={states.icon[0]}
                    size={states.size[0]}
                    theme={states.theme[0]}
                    mild={states.mild[0]}
                />
                <TypeScriptCode collapsable={false}>{`
<Icon
    icon=${`'${states.icon[0]}'`}
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    theme=${states.theme[0] ? `'${states.theme[0]}'` : '{undefined}'}
    mild={${states.mild[0]}}
/>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <IconOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoIcon as default }
