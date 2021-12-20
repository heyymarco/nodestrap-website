import { AlertProps, Alert } from '@nodestrap/alert'



export default function Info(props: AlertProps) {
    return (
        <Alert
            {...props}
            active={props.active ?? true}
            theme={props.theme ?? 'success'}
            mild={props.mild ?? true}
            control={props.control ?? <></>}
        >
            { props.children }
        </Alert>
    );
}

export const Tips = (props: AlertProps) => <Info {...props} theme={props.theme ?? 'success'} />
export const Warning = (props: AlertProps) => <Info {...props} theme={props.theme ?? 'warning'} />