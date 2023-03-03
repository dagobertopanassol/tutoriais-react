import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTeste = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Teste, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly celular?: string | null;
  readonly nascimento?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeste = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Teste, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly celular?: string | null;
  readonly nascimento?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Teste = LazyLoading extends LazyLoadingDisabled ? EagerTeste : LazyTeste

export declare const Teste: (new (init: ModelInit<Teste>) => Teste) & {
  copyOf(source: Teste, mutator: (draft: MutableModel<Teste>) => MutableModel<Teste> | void): Teste;
}