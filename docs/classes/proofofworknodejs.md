[@iota-pico/pow-nodejs](../README.md) > [ProofOfWorkNodeJs](../classes/proofofworknodejs.md)



# Class: ProofOfWorkNodeJs


ProofOfWork implementation using NodeJS.

## Hierarchy


 `ProofOfWorkBase`

**↳ ProofOfWorkNodeJs**







## Implements

* `IProofOfWork`

## Index

### Constructors

* [constructor](proofofworknodejs.md#constructor)


### Properties

* [MAX_TIMESTAMP_VALUE](proofofworknodejs.md#max_timestamp_value)


### Methods

* [initialize](proofofworknodejs.md#initialize)
* [pow](proofofworknodejs.md#pow)
* [singlePow](proofofworknodejs.md#singlepow)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ProofOfWorkNodeJs**(nodePlatform?: *[INodePlatform](../interfaces/inodeplatform.md)*, timeService?: *`ITimeService`*): [ProofOfWorkNodeJs](proofofworknodejs.md)


*Overrides ProofOfWorkBase.__constructor*

*Defined in [proofOfWorkNodeJs.ts:26](https://github.com/iotaeco/iota-pico-pow-nodejs/blob/0c19de4/src/proofOfWorkNodeJs.ts#L26)*



Create a new instance of ProofOfWork.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| nodePlatform | [INodePlatform](../interfaces/inodeplatform.md)   |  Provides platform specific functions, optional mostly used for testing. |
| timeService | `ITimeService`   |  Service to get the time for attachments. |





**Returns:** [ProofOfWorkNodeJs](proofofworknodejs.md)

---


## Properties
<a id="max_timestamp_value"></a>

### «Static» MAX_TIMESTAMP_VALUE

**●  MAX_TIMESTAMP_VALUE**:  *`number`* 

*Inherited from ProofOfWorkBase.MAX_TIMESTAMP_VALUE*

*Defined in D:/Workarea/iotaeco/iota-pico-pow-nodejs/node_modules/@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase.d.ts:12*



The maximum timestamp value used in proof of work.




___


## Methods
<a id="initialize"></a>

###  initialize

► **initialize**(): `Promise`.<`void`>



*Overrides ProofOfWorkBase.initialize*

*Defined in [proofOfWorkNodeJs.ts:52](https://github.com/iotaeco/iota-pico-pow-nodejs/blob/0c19de4/src/proofOfWorkNodeJs.ts#L52)*



Allow the proof of work to perform any initialization. Will throw an exception if the implementation is not supported.




**Returns:** `Promise`.<`void`>





___

<a id="pow"></a>

###  pow

► **pow**(trunkTransaction: *`Hash`*, branchTransaction: *`Hash`*, trytes: *`Trytes`[]*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`[]>



*Inherited from ProofOfWorkBase.pow*

*Defined in D:/Workarea/iotaeco/iota-pico-pow-nodejs/node_modules/@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase.d.ts:31*



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

<a id="singlepow"></a>

###  singlePow

► **singlePow**(trytes: *`Trytes`*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`>



*Overrides ProofOfWorkBase.singlePow*

*Defined in [proofOfWorkNodeJs.ts:82](https://github.com/iotaeco/iota-pico-pow-nodejs/blob/0c19de4/src/proofOfWorkNodeJs.ts#L82)*



Perform a proof of work on a single item.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | `Trytes`   |  The trytes to perform the pow on. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude. |





**Returns:** `Promise`.<`Trytes`>
The trytes produced by the proof of work.






___


