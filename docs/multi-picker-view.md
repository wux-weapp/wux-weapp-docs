# MultiPickerView 多列选择器

嵌入页面的滚动选择器。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "MultiPickerView",
  "usingComponents": {
    "wux-multi-picker-view": "../../dist/multi-picker-view/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">MultiPickerView</view>
    <view class="page__desc">多列选择器</view>
  </view>
  <view class="page__bd">
    <view class="sub-title">Multiple</view>
    <wux-multi-picker-view
      value="{{ value }}"
      options="{{ options }}"
      bind:valueChange="onValueChange"
    />
    <view class="sub-title">Single</view>
    <wux-multi-picker-view
      value="{{ value }}"
      options="{{ options[0] }}"
      bind:valueChange="onValueChange"
    />
    <view class="sub-title">Loading</view>
    <wux-multi-picker-view options="{{ options }}" loading />
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

[MultiPickerView](./_media/multi-picker-view.mp4 ':include :type=iframe width=375px height=667px')

## API

### MultiPickerView props

| 参数               | 类型            | 描述                                            | 默认值                                                   |
| ------------------ | --------------- | ----------------------------------------------- | -------------------------------------------------------- |
| prefixCls          | `string`        | 自定义类名前缀                                  | wux-popup-picker                                         |
| pickerPrefixCls    | `string`        | picker 自定义类名前缀                           | wux-picker-col                                           |
| value              | `array`         | 当前值                                          | []                                                       |
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
