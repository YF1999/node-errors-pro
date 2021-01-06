import {
    ErrorOptions,
    NotSupportedErrorMessageProps,
    NotSupportedErrorProps,
} from './CommonTypes';
import { _Error } from './Error';

export class _NotSupportedError extends _Error {
    public constructor(
        props: NotSupportedErrorProps,
        options: ErrorOptions<NotSupportedErrorMessageProps>,
    ) {
        super(props, options);
    }
}

export class NotSupportedError extends _NotSupportedError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
