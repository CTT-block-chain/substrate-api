// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiTypes, ObsInnerType } from '@polkadot/api/types';
import { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import { AccountId } from '@polkadot/types/interfaces';
import { CodecArg } from '@polkadot/types/types';
import { ContractCallOutcome } from '../types';

import BN from 'bn.js';
import { Observable } from 'rxjs';

export interface BlueprintOptions {
  gasLimit: BigInt | string | number | BN;
  salt?: Uint8Array | string;
  value: BigInt | string | number | BN;
}

export interface ContractOptions {
  gasLimit?: BigInt | BN | string | number;
  value?: BigInt | BN | string | number;
}

export interface BlueprintDeploy<ApiType extends ApiTypes> {
  (options: BlueprintOptions, ...params: CodecArg[]): SubmittableExtrinsic<ApiType>;
  (value: BigInt | string | number | BN, gasLimit: BigInt | string | number | BN, ...params: CodecArg[]): SubmittableExtrinsic<ApiType>;
}

export interface ContractQuery<ApiType extends ApiTypes> {
  (origin: AccountId | string | Uint8Array, options: ContractOptions, ...params: CodecArg[]): ContractCallResult<ApiType, ContractCallOutcome>;
  (origin: AccountId | string | Uint8Array, value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, ...params: CodecArg[]): ContractCallResult<ApiType, ContractCallOutcome>;
}

export interface ContractTx<ApiType extends ApiTypes> {
  (options: ContractOptions, ...params: CodecArg[]): SubmittableExtrinsic<ApiType>;
  (value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, ...params: CodecArg[]): SubmittableExtrinsic<ApiType>;
}

export type ContractCallResult<ApiType extends ApiTypes, T> = ApiType extends 'rxjs'
  ? Observable<Observable<T>>
  : Promise<ObsInnerType<Observable<T>>>;

export interface ContractCallSend<ApiType extends ApiTypes> {
  send (account: string | AccountId | Uint8Array): ContractCallResult<ApiType, ContractCallOutcome>;
}

export interface MapConstructorExec<ApiType extends ApiTypes> {
  [message: string]: BlueprintDeploy<ApiType>;
}

export interface MapMessageTx<ApiType extends ApiTypes> {
  [message: string]: ContractTx<ApiType>;
}

export interface MapMessageQuery<ApiType extends ApiTypes> {
  [message: string]: ContractQuery<ApiType>;
}
