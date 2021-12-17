// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class tradeSettled extends ethereum.Event {
  get params(): tradeSettled__Params {
    return new tradeSettled__Params(this);
  }
}

export class tradeSettled__Params {
  _event: tradeSettled;

  constructor(event: tradeSettled) {
    this._event = event;
  }

  get partyRef(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get counterpartyRef(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class PostTrade__getSettlementRequestResultValue0Struct extends ethereum.Tuple {
  get transferor(): Address {
    return this[0].toAddress();
  }

  get transferee(): Address {
    return this[1].toAddress();
  }

  get security(): Address {
    return this[2].toAddress();
  }

  get securityName(): Bytes {
    return this[3].toBytes();
  }

  get status(): Bytes {
    return this[4].toBytes();
  }

  get transferorDPID(): Bytes {
    return this[5].toBytes();
  }

  get transfereeDPID(): Bytes {
    return this[6].toBytes();
  }

  get isin(): Bytes {
    return this[7].toBytes();
  }

  get company(): Bytes {
    return this[8].toBytes();
  }

  get currency(): Bytes {
    return this[9].toBytes();
  }

  get price(): BigInt {
    return this[10].toBigInt();
  }

  get consideration(): BigInt {
    return this[11].toBigInt();
  }

  get unitsToTransfer(): BigInt {
    return this[12].toBigInt();
  }

  get executionDate(): BigInt {
    return this[13].toBigInt();
  }

  get orderPool(): Address {
    return this[14].toAddress();
  }

  get partyRef(): Bytes {
    return this[15].toBytes();
  }

  get counterpartyRef(): Bytes {
    return this[16].toBytes();
  }
}

export class PostTrade extends ethereum.SmartContract {
  static bind(address: Address): PostTrade {
    return new PostTrade("PostTrade", address);
  }

  getSettlementRequests(dpid: Bytes): Array<Bytes> {
    let result = super.call(
      "getSettlementRequests",
      "getSettlementRequests(bytes32):(bytes32[])",
      [ethereum.Value.fromFixedBytes(dpid)]
    );

    return result[0].toBytesArray();
  }

  try_getSettlementRequests(dpid: Bytes): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "getSettlementRequests",
      "getSettlementRequests(bytes32):(bytes32[])",
      [ethereum.Value.fromFixedBytes(dpid)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  getSettlementRequest(
    ref: Bytes
  ): PostTrade__getSettlementRequestResultValue0Struct {
    let result = super.call(
      "getSettlementRequest",
      "getSettlementRequest(bytes32):((address,address,address,bytes32,bytes32,bytes32,bytes32,bytes32,bytes32,bytes32,uint256,uint256,uint256,uint256,address,bytes32,bytes32))",
      [ethereum.Value.fromFixedBytes(ref)]
    );

    return changetype<PostTrade__getSettlementRequestResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getSettlementRequest(
    ref: Bytes
  ): ethereum.CallResult<PostTrade__getSettlementRequestResultValue0Struct> {
    let result = super.tryCall(
      "getSettlementRequest",
      "getSettlementRequest(bytes32):((address,address,address,bytes32,bytes32,bytes32,bytes32,bytes32,bytes32,bytes32,uint256,uint256,uint256,uint256,address,bytes32,bytes32))",
      [ethereum.Value.fromFixedBytes(ref)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<PostTrade__getSettlementRequestResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _client(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _trade(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _securitiesregistry(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class PostSettlementCall extends ethereum.Call {
  get inputs(): PostSettlementCall__Inputs {
    return new PostSettlementCall__Inputs(this);
  }

  get outputs(): PostSettlementCall__Outputs {
    return new PostSettlementCall__Outputs(this);
  }
}

export class PostSettlementCall__Inputs {
  _call: PostSettlementCall;

  constructor(call: PostSettlementCall) {
    this._call = call;
  }

  get newTrade(): PostSettlementCallNewTradeStruct {
    return changetype<PostSettlementCallNewTradeStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get ref(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class PostSettlementCall__Outputs {
  _call: PostSettlementCall;

  constructor(call: PostSettlementCall) {
    this._call = call;
  }
}

export class PostSettlementCallNewTradeStruct extends ethereum.Tuple {
  get transferor(): Address {
    return this[0].toAddress();
  }

  get transferee(): Address {
    return this[1].toAddress();
  }

  get security(): Address {
    return this[2].toAddress();
  }

  get securityName(): Bytes {
    return this[3].toBytes();
  }

  get status(): Bytes {
    return this[4].toBytes();
  }

  get transferorDPID(): Bytes {
    return this[5].toBytes();
  }

  get transfereeDPID(): Bytes {
    return this[6].toBytes();
  }

  get isin(): Bytes {
    return this[7].toBytes();
  }

  get company(): Bytes {
    return this[8].toBytes();
  }

  get currency(): Bytes {
    return this[9].toBytes();
  }

  get price(): BigInt {
    return this[10].toBigInt();
  }

  get consideration(): BigInt {
    return this[11].toBigInt();
  }

  get unitsToTransfer(): BigInt {
    return this[12].toBigInt();
  }

  get executionDate(): BigInt {
    return this[13].toBigInt();
  }

  get orderPool(): Address {
    return this[14].toAddress();
  }

  get partyRef(): Bytes {
    return this[15].toBytes();
  }

  get counterpartyRef(): Bytes {
    return this[16].toBytes();
  }
}

export class SetSettlementStatusCall extends ethereum.Call {
  get inputs(): SetSettlementStatusCall__Inputs {
    return new SetSettlementStatusCall__Inputs(this);
  }

  get outputs(): SetSettlementStatusCall__Outputs {
    return new SetSettlementStatusCall__Outputs(this);
  }
}

export class SetSettlementStatusCall__Inputs {
  _call: SetSettlementStatusCall;

  constructor(call: SetSettlementStatusCall) {
    this._call = call;
  }

  get ref(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get status(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class SetSettlementStatusCall__Outputs {
  _call: SetSettlementStatusCall;

  constructor(call: SetSettlementStatusCall) {
    this._call = call;
  }
}
