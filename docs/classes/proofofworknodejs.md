[@iota-pico/pow-nodejs](../README.md) > [ProofOfWorkNodeJs](../classes/proofofworknodejs.md)



# Class: ProofOfWorkNodeJs


ProofOfWork implementation using NodeJS.

## Implements

* `IProofOfWork`

## Index

### Constructors

* [constructor](proofofworknodejs.md#constructor)


### Methods

* [initialize](proofofworknodejs.md#initialize)
* [performsSingle](proofofworknodejs.md#performssingle)
* [pow](proofofworknodejs.md#pow)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ProofOfWorkNodeJs**(nodePlatform?: *[INodePlatform](../interfaces/inodeplatform.md)*): [ProofOfWorkNodeJs](proofofworknodejs.md)


*Defined in proofOfWorkNodeJs.ts:27*



Create a new instance of ProofOfWork.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| nodePlatform | [INodePlatform](../interfaces/inodeplatform.md)   |  Provides platform specific functions, optional mostly used for testing. |





**Returns:** [ProofOfWorkNodeJs](proofofworknodejs.md)

---


## Methods
<a id="initialize"></a>

###  initialize

► **initialize**(): `Promise`.<`void`>



*Defined in proofOfWorkNodeJs.ts:51*



Allow the proof of work to perform any initialization. Will throw an exception if the implementation is not supported.




**Returns:** `Promise`.<`void`>





___

<a id="performssingle"></a>

###  performsSingle

► **performsSingle**(): `boolean`



*Defined in proofOfWorkNodeJs.ts:77*



Performs single conversion per pow call.




**Returns:** `boolean`
True if pow only does one conversion.






___

<a id="pow"></a>

###  pow

► **pow**(trunkTransaction: *`Hash`*, branchTransaction: *`Hash`*, trytes: *`Trytes`[]*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`[]>



*Defined in proofOfWorkNodeJs.ts:89*



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


