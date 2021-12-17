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

export class orderNew extends ethereum.Event {
  get params(): orderNew__Params {
    return new orderNew__Params(this);
  }
}

export class orderNew__Params {
  _event: orderNew;

  constructor(event: orderNew) {
    this._event = event;
  }

  get ref(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get party(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get trigger(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get qty(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get order(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }

  get otype(): Bytes {
    return this._event.parameters[6].value.toBytes();
  }

  get dt(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get status(): Bytes {
    return this._event.parameters[8].value.toBytes();
  }

  get currency(): Bytes {
    return this._event.parameters[9].value.toBytes();
  }

  get securityName(): Bytes {
    return this._event.parameters[10].value.toBytes();
  }

  get security(): Address {
    return this._event.parameters[11].value.toAddress();
  }
}

export class orderCancel extends ethereum.Event {
  get params(): orderCancel__Params {
    return new orderCancel__Params(this);
  }
}

export class orderCancel__Params {
  _event: orderCancel;

  constructor(event: orderCancel) {
    this._event = event;
  }

  get orderRef(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get party(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get status(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class tradeReport extends ethereum.Event {
  get params(): tradeReport__Params {
    return new tradeReport__Params(this);
  }
}

export class tradeReport__Params {
  _event: tradeReport;

  constructor(event: tradeReport) {
    this._event = event;
  }

  get partyRef(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get counterpartyRef(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get isin(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get company(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get price(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get askprice(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get currency(): Bytes {
    return this._event.parameters[6].value.toBytes();
  }

  get qty(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get status(): Bytes {
    return this._event.parameters[8].value.toBytes();
  }

  get executionDt(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }
}

export class Trade__getTradeResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Trade__getOrderResultValue0Struct extends ethereum.Tuple {
  get party(): Address {
    return this[0].toAddress();
  }

  get security(): Address {
    return this[1].toAddress();
  }

  get price(): BigInt {
    return this[2].toBigInt();
  }

  get trigger(): BigInt {
    return this[3].toBigInt();
  }

  get otype(): Bytes {
    return this[4].toBytes();
  }

  get order(): Bytes {
    return this[5].toBytes();
  }

  get status(): Bytes {
    return this[6].toBytes();
  }

  get currency(): Bytes {
    return this[7].toBytes();
  }

  get securityName(): Bytes {
    return this[8].toBytes();
  }

  get qty(): BigInt {
    return this[9].toBigInt();
  }

  get dt(): BigInt {
    return this[10].toBigInt();
  }
}

export class Trade extends ethereum.SmartContract {
  static bind(address: Address): Trade {
    return new Trade("Trade", address);
  }

  getTrade(ref: Bytes): Trade__getTradeResult {
    let result = super.call("getTrade", "getTrade(bytes32):(uint256,uint256)", [
      ethereum.Value.fromFixedBytes(ref)
    ]);

    return new Trade__getTradeResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getTrade(ref: Bytes): ethereum.CallResult<Trade__getTradeResult> {
    let result = super.tryCall(
      "getTrade",
      "getTrade(bytes32):(uint256,uint256)",
      [ethereum.Value.fromFixedBytes(ref)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Trade__getTradeResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  getOrders(originator: boolean): Array<Bytes> {
    let result = super.call("getOrders", "getOrders(bool):(bytes32[])", [
      ethereum.Value.fromBoolean(originator)
    ]);

    return result[0].toBytesArray();
  }

  try_getOrders(originator: boolean): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall("getOrders", "getOrders(bool):(bytes32[])", [
      ethereum.Value.fromBoolean(originator)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  getOrder(ref: Bytes): Trade__getOrderResultValue0Struct {
    let result = super.call(
      "getOrder",
      "getOrder(bytes32):((address,address,uint256,uint256,bytes32,bytes32,bytes32,bytes32,bytes32,uint256,uint256))",
      [ethereum.Value.fromFixedBytes(ref)]
    );

    return changetype<Trade__getOrderResultValue0Struct>(result[0].toTuple());
  }

  try_getOrder(
    ref: Bytes
  ): ethereum.CallResult<Trade__getOrderResultValue0Struct> {
    let result = super.tryCall(
      "getOrder",
      "getOrder(bytes32):((address,address,uint256,uint256,bytes32,bytes32,bytes32,bytes32,bytes32,uint256,uint256))",
      [ethereum.Value.fromFixedBytes(ref)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Trade__getOrderResultValue0Struct>(value[0].toTuple())
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

  get _viaFactory(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _settlement(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _registration(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _orderpool(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _poolfactory(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class ReportTradeCall extends ethereum.Call {
  get inputs(): ReportTradeCall__Inputs {
    return new ReportTradeCall__Inputs(this);
  }

  get outputs(): ReportTradeCall__Outputs {
    return new ReportTradeCall__Outputs(this);
  }
}

export class ReportTradeCall__Inputs {
  _call: ReportTradeCall;

  constructor(call: ReportTradeCall) {
    this._call = call;
  }

  get newTrade(): ReportTradeCallNewTradeStruct {
    return changetype<ReportTradeCallNewTradeStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get partyRef(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get counterpartyRef(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ReportTradeCall__Outputs {
  _call: ReportTradeCall;

  constructor(call: ReportTradeCall) {
    this._call = call;
  }
}

export class ReportTradeCallNewTradeStruct extends ethereum.Tuple {
  get transferor(): Address {
    return this[0].toAddress();
  }

  get transferee(): Address {
    return this[1].toAddress();
  }

  get security(): Address {
    return this[2].toAddress();
  }

  get price(): BigInt {
    return this[3].toBigInt();
  }

  get askprice(): BigInt {
    return this[4].toBigInt();
  }

  get currency(): Bytes {
    return this[5].toBytes();
  }

  get order(): Bytes {
    return this[6].toBytes();
  }

  get stype(): Bytes {
    return this[7].toBytes();
  }

  get qty(): BigInt {
    return this[8].toBigInt();
  }

  get dt(): BigInt {
    return this[9].toBigInt();
  }
}

export class ReportOrderCall extends ethereum.Call {
  get inputs(): ReportOrderCall__Inputs {
    return new ReportOrderCall__Inputs(this);
  }

  get outputs(): ReportOrderCall__Outputs {
    return new ReportOrderCall__Outputs(this);
  }
}

export class ReportOrderCall__Inputs {
  _call: ReportOrderCall;

  constructor(call: ReportOrderCall) {
    this._call = call;
  }

  get newOrder(): ReportOrderCallNewOrderStruct {
    return changetype<ReportOrderCallNewOrderStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get ref(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class ReportOrderCall__Outputs {
  _call: ReportOrderCall;

  constructor(call: ReportOrderCall) {
    this._call = call;
  }
}

export class ReportOrderCallNewOrderStruct extends ethereum.Tuple {
  get party(): Address {
    return this[0].toAddress();
  }

  get security(): Address {
    return this[1].toAddress();
  }

  get price(): BigInt {
    return this[2].toBigInt();
  }

  get trigger(): BigInt {
    return this[3].toBigInt();
  }

  get otype(): Bytes {
    return this[4].toBytes();
  }

  get order(): Bytes {
    return this[5].toBytes();
  }

  get status(): Bytes {
    return this[6].toBytes();
  }

  get currency(): Bytes {
    return this[7].toBytes();
  }

  get securityName(): Bytes {
    return this[8].toBytes();
  }

  get qty(): BigInt {
    return this[9].toBigInt();
  }

  get dt(): BigInt {
    return this[10].toBigInt();
  }
}

export class EditOrderCall extends ethereum.Call {
  get inputs(): EditOrderCall__Inputs {
    return new EditOrderCall__Inputs(this);
  }

  get outputs(): EditOrderCall__Outputs {
    return new EditOrderCall__Outputs(this);
  }
}

export class EditOrderCall__Inputs {
  _call: EditOrderCall;

  constructor(call: EditOrderCall) {
    this._call = call;
  }

  get currentOrder(): EditOrderCallCurrentOrderStruct {
    return changetype<EditOrderCallCurrentOrderStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get ref(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class EditOrderCall__Outputs {
  _call: EditOrderCall;

  constructor(call: EditOrderCall) {
    this._call = call;
  }
}

export class EditOrderCallCurrentOrderStruct extends ethereum.Tuple {
  get party(): Address {
    return this[0].toAddress();
  }

  get security(): Address {
    return this[1].toAddress();
  }

  get price(): BigInt {
    return this[2].toBigInt();
  }

  get trigger(): BigInt {
    return this[3].toBigInt();
  }

  get otype(): Bytes {
    return this[4].toBytes();
  }

  get order(): Bytes {
    return this[5].toBytes();
  }

  get status(): Bytes {
    return this[6].toBytes();
  }

  get currency(): Bytes {
    return this[7].toBytes();
  }

  get securityName(): Bytes {
    return this[8].toBytes();
  }

  get qty(): BigInt {
    return this[9].toBigInt();
  }

  get dt(): BigInt {
    return this[10].toBigInt();
  }
}

export class CancelOrderCall extends ethereum.Call {
  get inputs(): CancelOrderCall__Inputs {
    return new CancelOrderCall__Inputs(this);
  }

  get outputs(): CancelOrderCall__Outputs {
    return new CancelOrderCall__Outputs(this);
  }
}

export class CancelOrderCall__Inputs {
  _call: CancelOrderCall;

  constructor(call: CancelOrderCall) {
    this._call = call;
  }

  get _ref(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _status(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class CancelOrderCall__Outputs {
  _call: CancelOrderCall;

  constructor(call: CancelOrderCall) {
    this._call = call;
  }
}

export class TradeSettledCall extends ethereum.Call {
  get inputs(): TradeSettledCall__Inputs {
    return new TradeSettledCall__Inputs(this);
  }

  get outputs(): TradeSettledCall__Outputs {
    return new TradeSettledCall__Outputs(this);
  }
}

export class TradeSettledCall__Inputs {
  _call: TradeSettledCall;

  constructor(call: TradeSettledCall) {
    this._call = call;
  }

  get tradeRef(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class TradeSettledCall__Outputs {
  _call: TradeSettledCall;

  constructor(call: TradeSettledCall) {
    this._call = call;
  }
}
