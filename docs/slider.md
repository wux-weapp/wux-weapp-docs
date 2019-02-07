# Slider 滑动选择器

用于在一个区间内选择特定值。

## 使用指南

### 在 page.json 中引入组件

```json
{
    "navigationBarTitleText": "Slider",
    "usingComponents": {
        "wux-slider": "../../dist/slider/index"
    }
}
```

### 示例

!> 该组件内部会依据传入的 `defaultValue` 或 `value` 参数的长度，设置对应个数的滑块，默认只显示一个滑块。

```html
<view class="page">
    <view class="page__hd">
        <view class="page__title">Slider</view>
        <view class="page__desc">滑动选择器</view>
    </view>
    <view class="page__bd page__bd_spacing">
        <view class="sub-title">Default</view>
        <wux-slider defaultValue="{{ [10] }}" />
        <view class="sub-title">Disabled</view>
        <wux-slider defaultValue="{{ [10] }}" disabled />
        <view class="sub-title">Show value</view>
        <wux-slider defaultValue="{{ [10] }}" showValue />
        <view class="sub-title">Step = 10</view>
        <wux-slider defaultValue="{{ [10] }}" showValue step="10" />
        <view class="sub-title">Show mark</view>
        <wux-slider defaultValue="{{ [100] }}" showMark step="25" markStyle="background-color: red" />
        <wux-slider defaultValue="{{ [100] }}" showMark step="25" markStyle="{{ ['background-color: red', 'background-color: yellow', 'background-color: blue'] }}" />
        <view class="sub-title">Min and max</view>
        <wux-slider defaultValue="{{ [12] }}" showValue step="11" min="0" max="88" />
        <view class="sub-title">Controlled</view>
        <wux-slider value="{{ value }}" controlled bind:change="onChange" bind:afterChange="afterChange" />
        <view class="sub-title">Custom style</view>
        <wux-slider defaultValue="{{ [10] }}" railStyle="background-color: blue" trackStyle="background-color: red" handleStyle="background-color: yellow" />
        <wux-slider defaultValue="{{ [10, 30, 50] }}" railStyle="background-color: blue" trackStyle="{{ ['background-color: red', 'background-color: yellow'] }}" handleStyle="{{ ['background-color: yellow', 'background-color: red', 'background-color: blue'] }}" />
        <view class="sub-title">Range = 2</view>
        <wux-slider defaultValue="{{ [10, 30] }}" />
        <view class="sub-title">Range = 3</view>
        <wux-slider defaultValue="{{ [10, 30, 50] }}" />
    </view>
</view>
```

```js
Page({
	data: {
		value: [0],
	},
	onChange(e) {
		console.log('onChange', e.detail.value)
		this.setData({ value: e.detail.value })
	},
	afterChange(e) {
		console.log('afterChange', e.detail.value)
		this.setData({ value: e.detail.value })
	},
})
```

## 视频演示

[Slider](./_media/slider.mp4 ':include :type=iframe width=375px height=667px')

## API

### Slider props

| 参数 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| prefixCls | <code>string</code> | 自定义类名前缀 | wux-slider |
| min | <code>number</code> | 最小值 | 0 |
| max | <code>number</code> | 最大值 | 100 |
| step | <code>number</code> | 步长，取值必须大于 0，并且可被 (max - min) 整除 | 1 |
| defaultValue | <code>array</code> | 默认值，当 controlled 为 false 时才生效 | [0] |
| value | <code>array</code> | 当前值，当 controlled 为 true 时才生效 | [0] |
| controlled | <code>boolean</code> | 是否受控 [说明文档](controlled.md) | false |
| disabled | <code>boolean</code> | 是否禁用 | false |
| showMark | <code>boolean</code> | 是否显示间断点，建议在 step 间隔不密集时使用 | false |
| showValue | <code>boolean,object</code> | 是否显示最小、大值，参数支持对象格式如 `{ min: false, max: true }` | false |
| markStyle | <code>string,object,array</code> | 间断点的样式，参数支持数组格式如 `[ 'background-color: red' ]` | - |
| handleStyle | <code>string,object,array</code> | 滑块的样式，参数支持数组格式如 `[ 'background-color: red' ]` | - |
| trackStyle | <code>string,object,array</code> | 选中部分滑动条的样式，参数支持数组格式如 `[ 'background-color: red' ]` | - |
| railStyle | <code>string,object</code> | 未选中部分的样式 | - |
| wrapStyle | <code>string,object</code> | 自定义 wrap 样式 | - |
| bind:change | <code>function</code> | 拖动过程中触发的回调函数 `event.detail = { value: value, offsets: offsets }` | - |
| bind:afterChange | <code>function</code> | 完成一次拖动后触发的回调函数 `event.detail = { value: value, offsets: offsets }` | - |

### Slider externalClasses

| 名称 | 描述 |
| --- | --- |
| wux-class | 根节点样式类 |