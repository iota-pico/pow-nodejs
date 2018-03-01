[@iota-pico/pow-nodejs](../README.md) > [ProofOfWork](../classes/proofofwork.md)



# Class: ProofOfWork


ProofOfWork implementation using NodeJS.

## Implements

* `IProofOfWork`

## Index

### Methods

* [initialize](proofofwork.md#initialize)
* [pow](proofofwork.md#pow)



---
## Methods
<a id="initialize"></a>

###  initialize

► **initialize**(): `Promise`.<`void`>



*Defined in proofOfWork.ts:26*



Allow the proof of work to perform any initialization. Will throw an exception if the implementation is not supported.




**Returns:** `Promise`.<`void`>





___

<a id="pow"></a>

###  pow

► **pow**(trytes: *`Trytes`*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`>



*Defined in proofOfWork.ts:54*



Perform a proof of work on the data.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | `Trytes`   |  The trytes to perform the pow on. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude. |





**Returns:** `Promise`.<`Trytes`>
The trytes produced by the proof of work.






___


