// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Struct, Vec, bool, u32, u64, u8 } from '@polkadot/types';
import type { AccountId, BalanceOf, Hash } from '@polkadot/types/interfaces/runtime';

/** @name AccountID32 */
export interface AccountID32 extends AccountId {}

/** @name AppData */
export interface AppData extends Struct {
  readonly name: Bytes;
  readonly returnRate: u32;
}

/** @name AppFinancedData */
export interface AppFinancedData extends Struct {
  readonly amount: BalanceOf;
  readonly exchangeRate: BalanceOf;
}

/** @name AuthAccountId */
export interface AuthAccountId extends AccountId {}

/** @name CommentMaxRecord */
export interface CommentMaxRecord extends Struct {
  readonly maxCount: PowerSize;
  readonly maxFee: PowerSize;
  readonly maxPositive: PowerSize;
  readonly maxUnitFee: PowerSize;
}

/** @name CommentTrend */
export interface CommentTrend extends Enum {
  readonly isPositive: boolean;
  readonly isNegative: boolean;
  readonly isEmpty: boolean;
}

/** @name CommentWeightData */
export interface CommentWeightData extends Struct {
  readonly account: AccountId;
  readonly position: u64;
  readonly cashCost: PowerSize;
}

/** @name CommodityLeaderBoardData */
export interface CommodityLeaderBoardData extends Struct {
  readonly cartId: Bytes;
  readonly cartIdHash: Hash;
  readonly power: PowerSize;
  readonly owner: AccountId;
}

/** @name CommodityTypeData */
export interface CommodityTypeData extends Struct {
  readonly typeId: u32;
  readonly typeDesc: Bytes;
}

/** @name DocumentPower */
export interface DocumentPower extends Struct {
  readonly attend: PowerSize;
  readonly content: PowerSize;
  readonly judge: PowerSize;
}

/** @name DocumentSpecificData */
export interface DocumentSpecificData extends Enum {
  readonly isProductPublish: boolean;
  readonly asProductPublish: KPProductPublishData;
  readonly isProductIdentify: boolean;
  readonly asProductIdentify: KPProductIdentifyData;
  readonly isProductTry: boolean;
  readonly asProductTry: KPProductTryData;
  readonly isProductChoose: boolean;
  readonly asProductChoose: KPProductChooseData;
  readonly isModelCreate: boolean;
  readonly asModelCreate: KPModelCreateData;
}

/** @name DocumentType */
export interface DocumentType extends Enum {
  readonly isProductPublish: boolean;
  readonly isProductIdentify: boolean;
  readonly isProductTry: boolean;
  readonly isProductChoose: boolean;
  readonly isModelCreate: boolean;
  readonly isUnknown: boolean;
}

/** @name KPCommentAccountRecord */
export interface KPCommentAccountRecord extends Struct {
  readonly count: PowerSize;
  readonly fees: PowerSize;
  readonly positiveCount: PowerSize;
}

/** @name KPCommentDataOf */
export interface KPCommentDataOf extends Struct {
  readonly appId: u32;
  readonly documentId: Bytes;
  readonly commentId: Bytes;
  readonly commentHash: Hash;
  readonly commentFee: PowerSize;
  readonly commentTrend: u8;
  readonly sender: AccountId;
  readonly owner: AuthAccountId;
}

/** @name KPDocumentDataOf */
export interface KPDocumentDataOf extends Struct {
  readonly appId: u32;
  readonly documentId: Bytes;
  readonly modelId: Bytes;
  readonly productId: Bytes;
  readonly contentHash: Hash;
  readonly sender: AccountId;
  readonly owner: AuthAccountId;
  readonly documentType: DocumentType;
  readonly documentData: DocumentSpecificData;
  readonly commentCount: PowerSize;
  readonly commentTotalFee: PowerSize;
  readonly commentPositiveCount: PowerSize;
  readonly expertTrend: CommentTrend;
  readonly platformTrend: CommentTrend;
}

/** @name KPModelCreateData */
export interface KPModelCreateData extends Struct {
  readonly producerCount: PowerSize;
  readonly productCount: PowerSize;
}

/** @name KPModelCreateDataMax */
export interface KPModelCreateDataMax extends Struct {
  readonly producerCount: PowerSize;
  readonly productCount: PowerSize;
}

/** @name KPModelDataOf */
export interface KPModelDataOf extends Struct {
  readonly appId: u32;
  readonly modelId: Bytes;
  readonly expertId: Bytes;
  readonly status: ModelStatus;
  readonly commodityName: Bytes;
  readonly commodityType: u32;
  readonly contentHash: Hash;
  readonly sender: AccountId;
  readonly owner: AuthAccountId;
}

/** @name KPProductChooseData */
export interface KPProductChooseData extends Struct {
  readonly sellCount: PowerSize;
  readonly tryCount: PowerSize;
}

/** @name KPProductChooseDataMax */
export interface KPProductChooseDataMax extends Struct {
  readonly sellCount: PowerSize;
  readonly tryCount: PowerSize;
}

/** @name KPProductIdentifyData */
export interface KPProductIdentifyData extends Struct {
  readonly goodsPrice: PowerSize;
  readonly identRate: PowerSize;
  readonly identConsistence: PowerSize;
  readonly cartId: Bytes;
}

/** @name KPProductIdentifyRateMax */
export interface KPProductIdentifyRateMax extends Struct {
  readonly identRate: PowerSize;
  readonly identConsistence: PowerSize;
}

/** @name KPProductPublishData */
export interface KPProductPublishData extends Struct {
  readonly paraIssueRate: PowerSize;
  readonly selfIssueRate: PowerSize;
}

/** @name KPProductPublishRateMax */
export interface KPProductPublishRateMax extends Struct {
  readonly paraIssueRate: PowerSize;
  readonly selfIssueRate: PowerSize;
}

/** @name KPProductTryData */
export interface KPProductTryData extends Struct {
  readonly goodsPrice: PowerSize;
  readonly offsetRate: PowerSize;
  readonly trueRate: PowerSize;
  readonly cartId: Bytes;
}

/** @name KPProductTryRateMax */
export interface KPProductTryRateMax extends Struct {
  readonly offsetRate: PowerSize;
  readonly trueRate: PowerSize;
}

/** @name LeaderBoardItem */
export interface LeaderBoardItem extends Struct {
  readonly cartId: Bytes;
  readonly power: PowerSize;
  readonly owner: AccountId;
}

/** @name LeaderBoardItemRPC */
export interface LeaderBoardItemRPC extends Struct {
  readonly cart_id: Bytes;
  readonly power: PowerSize;
  readonly owner: AccountId;
}

/** @name LeaderBoardResult */
export interface LeaderBoardResult extends Struct {
  readonly accounts: Vec<AccountId>;
  readonly board: Vec<LeaderBoardItem>;
}

/** @name LeaderBoardResultRPC */
export interface LeaderBoardResultRPC extends Struct {
  readonly accounts: Vec<AccountId>;
  readonly board: Vec<LeaderBoardItemRPC>;
}

/** @name ModelDisputeType */
export interface ModelDisputeType extends Enum {
  readonly isNoneIntendNormal: boolean;
  readonly isIntendNormal: boolean;
  readonly isSerious: boolean;
}

/** @name ModelStatus */
export interface ModelStatus extends Enum {
  readonly isEnabled: boolean;
  readonly isDisabled: boolean;
}

/** @name PowerSize */
export interface PowerSize extends u64 {}

/** @name QueryCommodityPowerParams */
export interface QueryCommodityPowerParams extends Struct {
  readonly appId: u32;
  readonly cartId: Bytes;
}

/** @name QueryLeaderBoardParams */
export interface QueryLeaderBoardParams extends Struct {
  readonly appId: u32;
  readonly modelId: Bytes;
  readonly block: u32;
}

/** @name QueryModelExpertParams */
export interface QueryModelExpertParams extends Struct {
  readonly appId: u32;
  readonly modelId: Bytes;
}

/** @name QueryPlatformExpertParams */
export interface QueryPlatformExpertParams extends Struct {
  readonly appId: u32;
}

/** @name StableExchangeData */
export interface StableExchangeData extends Struct {
  readonly receiver: AccountId;
  readonly amount: BalanceOf;
  readonly redeemed: bool;
}

export type PHANTOM_KP = 'kp';
