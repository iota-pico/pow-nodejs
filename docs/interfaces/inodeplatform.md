[@iota-pico/pow-nodejs](../README.md) > [INodePlatform](../interfaces/inodeplatform.md)

# Interface: INodePlatform

INodePlatform interface.

## Hierarchy

**INodePlatform**

## Index

### Methods

* [loadLibrary](inodeplatform.md#loadlibrary)
* [lstat](inodeplatform.md#lstat)
* [pathJoin](inodeplatform.md#pathjoin)
* [pathResolve](inodeplatform.md#pathresolve)
* [platform](inodeplatform.md#platform)

---

## Methods

<a id="loadlibrary"></a>

###  loadLibrary

▸ **loadLibrary**(filename: *`string`*, functions: *`any`*): `any`

*Defined in [INodePlatform.ts:11](https://github.com/iota-pico/pow-nodejs/tree/master/src/INodePlatform.ts#L11*

**Parameters:**

| Name | Type |
| ------ | ------ |
| filename | `string` |
| functions | `any` |

**Returns:** `any`

___
<a id="lstat"></a>

###  lstat

▸ **lstat**(path: *`string`*, callback: *`function`*): `void`

*Defined in [INodePlatform.ts:10](https://github.com/iota-pico/pow-nodejs/tree/master/src/INodePlatform.ts#L10*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` |
| callback | `function` |

**Returns:** `void`

___
<a id="pathjoin"></a>

###  pathJoin

▸ **pathJoin**(...args: *`any`[]*): `string`

*Defined in [INodePlatform.ts:8](https://github.com/iota-pico/pow-nodejs/tree/master/src/INodePlatform.ts#L8*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `any`[] |

**Returns:** `string`

___
<a id="pathresolve"></a>

###  pathResolve

▸ **pathResolve**(path: *`string`*): `string`

*Defined in [INodePlatform.ts:7](https://github.com/iota-pico/pow-nodejs/tree/master/src/INodePlatform.ts#L7*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` |

**Returns:** `string`

___
<a id="platform"></a>

###  platform

▸ **platform**(): `string`

*Defined in [INodePlatform.ts:9](https://github.com/iota-pico/pow-nodejs/tree/master/src/INodePlatform.ts#L9*

**Returns:** `string`

___

