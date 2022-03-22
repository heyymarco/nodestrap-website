import { useRef } from 'react';

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { ListInitials, ListOptionProps, ListOptions, useListStates } from './DemoPanel@List';

import { Group, ListStyle, OrientationName } from '@nodestrap/group'
import { TypeScriptCode } from './Code';
import { Label } from '@nodestrap/label';
import { NumberInput } from '@nodestrap/input';
import { Button } from '@nodestrap/button';



export const groupInitials = {
    orientation : 'inline' as OrientationName|undefined,
    mild        : false,
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
    const { states } = props;
    
    
    
    return (<>
        <ListOptions
            {...props}
        />
    </>);
}



export const DemoGroup = () => {
    const states = useGroupStates();
    const hasChildren = states.listStyle2[0] !== 'bullet';
    
    const listStyle : ListStyle[] = [
        states.listStyle1[0],
        states.listStyle2[0]
    ].filter((ls): ls is ListStyle => !!ls);
    return (
        <>
            <div className='preview'>
                <Group
                    orientation={states.orientation[0]}
                    listStyle={listStyle}
                    actionCtrl={states.actionCtrl[0]}
                    
                    enabled={states.enabled[0]}
                    active={states.active[0]}
                    
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                >
                    <Label theme='secondary'>
                        $
                    </Label>
                    <NumberInput placeholder='price' enableValidation={false} />
                    <Label theme='secondary'>
                        .00
                    </Label>
                    <Button theme='primary'>
                        Update
                    </Button>
                </Group>
                <TypeScriptCode collapsable={false}>{`
<Group
    orientation=${states.orientation[0] ? `'${states.orientation[0]}'` : '{undefined}'}
    listStyle=${listStyle.length ? ((listStyle.length === 1) ? `'${listStyle}'` : `{[${listStyle.map((ls) => `'${ls}'`).join(', ')}]}`) : '{undefined}'}
    actionCtrl={${states.actionCtrl[0]}}
    
    enabled={${states.enabled[0]}}
    active={${states.active[0]}}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    <Label theme='secondary'>
        $
    </Label>
    <NumberInput placeholder='price' enableValidation={false} />
    <Label theme='secondary'>
        .00
    </Label>
    <Button theme='primary'>
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
