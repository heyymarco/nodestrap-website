import { useRef } from 'react';

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { ListInitials, ListOptionProps, ListOptions, useListStates } from './DemoPanel@List';

import { Group, ListBasicStyle, OrientationName } from '@nodestrap/group'
import { TypeScriptCode } from './Code';
import { Label } from '@nodestrap/label';
import { NumberInput } from '@nodestrap/input';
import { Button } from '@nodestrap/button';



export const groupInitials = {
    orientation : 'inline'  as OrientationName|undefined,
    nude        : undefined as boolean|undefined,
    mild        : undefined as boolean|undefined,
};
export type GroupInitials = typeof groupInitials & Partial<ListInitials>
export const useGroupStates = (initials ?: Partial<GroupInitials>) => {
    const initials2 : GroupInitials = {
        ...groupInitials,
        ...initials
    };

    return {
        ...useListStates(initials2),
    }
}
export type GroupOptionProps = { states: ReturnType<typeof useGroupStates> } & ListOptionProps & {
    enableTabStyle    ?: boolean
    enableBulletStyle ?: boolean
}
export const GroupOptions = (props: GroupOptionProps) => {
    // const { states } = props;
    
    
    
    return (<>
        <ListOptions
            {...props}
            enableListstyle2={false}
            enableActionCtrl={false}
            warningEitherMildOutlined={false}
            enableUndefinedNude={true}
            enableUndefinedMild={true}
        />
    </>);
}



export const DemoGroup = () => {
    const states = useGroupStates();
    
    const listStyle : ListBasicStyle[] = [
        states.listStyle1[0],
        states.listStyle2[0]
    ].filter((ls): ls is ListBasicStyle => !!ls);
    return (
        <>
            <div className='preview'>
                <Group
                    orientation={states.orientation[0]}
                    listStyle={listStyle[0]}
                    
                    enabled={states.enabled[0]}
                    active={states.active[0]}
                    
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                >
                    <Label>
                        $
                    </Label>
                    <NumberInput placeholder='price' />
                    <Label>
                        .00
                    </Label>
                    <Button>
                        Update
                    </Button>
                </Group>
                <TypeScriptCode collapsable={false}>{`
<Group
    orientation=${states.orientation[0] ? `'${states.orientation[0]}'` : '{undefined}'}
    listStyle=${listStyle.length ? ((listStyle.length === 1) ? `'${listStyle}'` : `{[${listStyle.map((ls) => `'${ls}'`).join(', ')}]}`) : '{undefined}'}
    
    enabled={${states.enabled[0]}}
    active={${states.active[0]}}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    <Label>
        $
    </Label>
    <NumberInput placeholder='price' />
    <Label>
        .00
    </Label>
    <Button>
        Update
    </Button>
</Group>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <GroupOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoGroup as default }
