import { ArgumentErrorProps, ErrorOptions, ArgumentErrorMessageProps } from './CommonTypes';
import { AbstractError } from './NativeErrors';

export abstract class AbstractArgumentError extends AbstractError {
    protected _paramName?: string;

    public constructor(props: ArgumentErrorProps, options: ErrorOptions<ArgumentErrorMessageProps>) {
        const { paramName } = props;
        const { generateMessage: gm, ...others } = options;

        super(props, {
            generateMessage: gm && ((_props) => gm({ ..._props, paramName })),
            ...others,
        });

        this._paramName = paramName;
        this._setNonEnumerable('_paramName');
    }

    public get paramName(): string | undefined {
        return this._paramName;
    }
}

/**
 * Applicable when one of the arguments provided to a function or method is not valid.
 */
export class ArgumentError extends AbstractArgumentError {
    public constructor();
    /**
     * @param message The error message that explains the reason for this error.
     */
    public constructor(message: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param innerError The error that is the cause of the current error. Stack trace will be append.
     */
    public constructor(message: string, innerError: Error);
    /**
     * @param message The error message that explains the reason for this error.
     * @param paramName The name of the parameter that caused the current error.
     */
    public constructor(message: string, paramName: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param paramName The name of the parameter that caused the current error.
     * @param innerError The error that is the cause of the current error. Stack trace will be append.
     */
    public constructor(message: string, paramName: string, innerError: Error);

    public constructor(message: string = '', arg1?: string | Error, arg2?: Error) {
        function generateMessage(props: ArgumentErrorMessageProps) {
            return props.paramName ? `${props.message} (Parameter '${props.paramName}')` : props.message;
        }

        // message + innerError?
        if (arg1 === undefined || typeof arg1 !== 'string') {
            super({ message, innerError: arg1 }, { generateMessage });
        }

        // message + paramName + innerError?
        else {
            super({ message, paramName: arg1, innerError: arg2 }, { generateMessage });
        }
    }
}
