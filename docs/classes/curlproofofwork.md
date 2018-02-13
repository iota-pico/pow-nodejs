[@iota-pico/pow-nodejs](../README.md) > [CurlProofOfWork](../classes/curlproofofwork.md)



# Class: CurlProofOfWork


CurlProofOfWork implementation using NodeJS.

## Implements

* `ICurlProofOfWork`

## Index

### Methods

* [initialize](curlproofofwork.md#initialize)
* [pow](curlproofofwork.md#pow)



---
## Methods
<a id="initialize"></a>

###  initialize

► **initialize**(): `Promise`.<`void`>



*Defined in [curlProofOfWork.ts:26](https://github.com/iotaeco/iota-pico-pow-nodejs/blob/b89ac23/src/curlProofOfWork.ts#L26)*



Allow the proof of work to perform any initialization. Will throw an exception if the implementation is not supported.




**Returns:** `Promise`.<`void`>





___

<a id="pow"></a>

###  pow

► **pow**(trytes: *`Trytes`*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`>



*Defined in [curlProofOfWork.ts:54](https://github.com/iotaeco/iota-pico-pow-nodejs/blob/b89ac23/src/curlProofOfWork.ts#L54)*



Perform a proof of work on the data.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | `Trytes`   |  The trytes to perform the pow on. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude. |





**Returns:** `Promise`.<`Trytes`>
The trytes produced by the proof of work.






___


