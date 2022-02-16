# PickerView 单列选择器

嵌入页面的滚动选择器。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "PickerView",
  "usingComponents": {
    "wux-picker-view": "../../dist/picker-view/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">PickerView</view>
    <view class="page__desc">单列选择器</view>
  </view>
  <view class="page__bd">
    <view class="sub-title">Default</view>
    <wux-picker-view options="{{ options[0] }}" />
    <view class="sub-title">Loading</view>
    <wux-picker-view options="{{ options[0] }}" loading />
    <view class="sub-title">Controlled</view>
    <wux-picker-view
      value="{{ value }}"
      controlled
      options="{{ options[1] }}"
      bind:valueChange="onValueChange"
    />
  </view>
</view>
```

```js
const seasons = [
  ['王', '马', '蔡'],
  ['撕葱', '粑粑', '🏀'],
]

Page({
  data: {
    value: ['蔡', '🏀'],
    options: seasons,
  },
  onValueChange(e) {
    this.setData({ value: e.detail.value })
    console.log('onValueChange', e.detail)
  },
})
```

## 视频演示

[PickerView](./_media/picker-view.mp4 ':include :type=iframe width=375px height=667px')

## API

### PickerView props

| 参数               | 类型            | 描述                                            | 默认值                                                   |
| ------------------ | --------------- | ----------------------------------------------- | -------------------------------------------------------- |
| prefixCls          | `string`        | 自定义类名前缀                                  | wux-picker-col                                           |
| defaultValue       | `string`        | 默认值，当 `controlled` 为 `false` 时才生效     | -                                                        |
| value              | `string`        | 当前值，当 `controlled` 为 `true` 时才生效      | -                                                        |
| controlled         | `boolean`       | 是否受控 [说明文档](controlled.md)              | false                                                    |
| itemHeight         | `number`        | 每列子元素的高度                                | 34                                                       |
| itemStyle          | `string,object` | 每列子元素的样式                                | -                                                        |
| indicatorStyle     | `string,object` | 设置选择器中间选中框的样式                      | -                                                        |
| indicatorClass     | `string`        | 设置选择器中间选中框的类名                      | -                                                        |
| maskStyle          | `string,object` | 设置蒙层的样式                                  | -                                                        |
| maskClass          | `string`        | 设置蒙层的类名                                  | -                                                        |
| labelAlign         | `string`        | 设置文本对齐方式，可选值为 right、center、left  | center                                                   |
| loading            | `boolean`       | 是否显示 loading 状态                           | false                                                    |
| defaultFieldNames  | `object`        | 自定义 options 中的 value、label、children 字段 | { label: 'label', value: 'value', children: 'children' } |
| options            | `array`         | 可选项数据源                                    | []                                                       |
| options[].value    | `string`        | 属性值                                          | -                                                        |
| options[].label    | `string`        | 描述                                            | -                                                        |
| options[].children | `array`         | 子选项                                          | []                                                       |
| options[].disabled | `boolean`       | 是否禁用                                        | false                                                    |
| bind:beforeChange  | `function`      | 当滚动选择开始时的回调函数                      | -                                                        |
| bind:valueChange   | `function`      | 每列数据选择变化后的回调函数                    | -                                                        |
| bind:scrollChange  | `function`      | 滚动数据选择变化后的回调函数                    | -                                                        |

### PickerView externalClasses

| 名称                | 描述                   |
| ------------------- | ---------------------- |
| wux-class           | 根节点样式类           |
| wux-mask-class      | 蒙层的类名             |
| wux-indicator-class | 选择器中间选中框的类名 |
| wux-content-class   | 选择器主体内容的类名   |
