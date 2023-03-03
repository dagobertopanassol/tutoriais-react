/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Teste } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TesteUpdateFormInputValues = {
    celular?: string;
    nascimento?: string;
};
export declare type TesteUpdateFormValidationValues = {
    celular?: ValidationFunction<string>;
    nascimento?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TesteUpdateFormOverridesProps = {
    TesteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    celular?: PrimitiveOverrideProps<TextFieldProps>;
    nascimento?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TesteUpdateFormProps = React.PropsWithChildren<{
    overrides?: TesteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    teste?: Teste;
    onSubmit?: (fields: TesteUpdateFormInputValues) => TesteUpdateFormInputValues;
    onSuccess?: (fields: TesteUpdateFormInputValues) => void;
    onError?: (fields: TesteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TesteUpdateFormInputValues) => TesteUpdateFormInputValues;
    onValidate?: TesteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TesteUpdateForm(props: TesteUpdateFormProps): React.ReactElement;
