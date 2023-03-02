/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TesteCreateFormInputValues = {
    celular?: string;
};
export declare type TesteCreateFormValidationValues = {
    celular?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TesteCreateFormOverridesProps = {
    TesteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    celular?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TesteCreateFormProps = React.PropsWithChildren<{
    overrides?: TesteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TesteCreateFormInputValues) => TesteCreateFormInputValues;
    onSuccess?: (fields: TesteCreateFormInputValues) => void;
    onError?: (fields: TesteCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TesteCreateFormInputValues) => TesteCreateFormInputValues;
    onValidate?: TesteCreateFormValidationValues;
} & React.CSSProperties>;
export default function TesteCreateForm(props: TesteCreateFormProps): React.ReactElement;
