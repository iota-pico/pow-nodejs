[@iota-pico/pow-nodejs](../README.md) > [ProofOfWork](../classes/proofofwork.md)



# Class: ProofOfWork


ProofOfWork implementation using NodeJS.

## Implements

* `IProofOfWork`

## Index

### Constructors

* [constructor](proofofwork.md#constructor)


### Methods

* [initialize](proofofwork.md#initialize)
* [performsSingle](proofofwork.md#performssingle)
* [pow](proofofwork.md#pow)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ProofOfWork**(nodePlatform?: *[INodePlatform](../interfaces/inodeplatform.md)*): [ProofOfWork](proofofwork.md)


*Defined in [proofOfWork.ts:27](https://github.com/iotaeco/iota-pico-pow-nodejs/blob/dd14622/src/proofOfWork.ts#L27)*



Create a new instance of ProofOfWork.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| nodePlatform | [INodePlatform](../interfaces/inodeplatform.md)   |  - |





**Returns:** [ProofOfWork](proofofwork.md)

---


## Methods
<a id="initialize"></a>

###  initialize

► **initialize**(): `Promise`.<`void`>



*Defined in [proofOfWork.ts:50](https://github.com/iotaeco/iota-pico-pow-nodejs/blob/dd14622/src/proofOfWork.ts#L50)*



Allow the proof of work to perform any initialization. Will throw an exception if the implementation is not supported.




**Returns:** `Promise`.<`void`>





___

<a id="performssingle"></a>

###  performsSingle

► **performsSingle**(): `boolean`



*Defined in [proofOfWork.ts:76](https://github.com/iotaeco/iota-pico-pow-nodejs/blob/dd14622/src/proofOfWork.ts#L76)*



Performs single conversion per pow call.




**Returns:** `boolean`
True if pow only does one conversion.






___

<a id="pow"></a>

###  pow

► **pow**(trunkTransaction: *`Hash`*, branchTransaction: *`Hash`*, trytes: *`Trytes`[]*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`[]>



*Defined in [proofOfWork.ts:88](https://github.com/iotaeco/iota-pico-pow-nodejs/blob/dd14622/src/proofOfWork.ts#L88)*



Perform a proof of work on the data.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trunkTransaction | `Hash`   |  The trunkTransaction to use for the pow. |
| branchTransaction | `Hash`   |  The branchTransaction to use for the pow. |
| trytes | `Trytes`[]   |  The trytes to perform the pow on. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude. |





**Returns:** `Promise`.<`Trytes`[]>
The trytes produced by the proof of work.






___


