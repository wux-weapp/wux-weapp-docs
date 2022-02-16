# CascaderPickerView 级联选择器

嵌入页面的联级选择器。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "CascaderPickerView",
  "usingComponents": {
    "wux-cascader-picker-view": "../../dist/cascader-picker-view/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">CascaderPickerView</view>
    <view class="page__desc">级联选择器</view>
  </view>
  <view class="page__bd">
    <view class="sub-title">Default</view>
    <wux-cascader-picker-view
      value="{{ value1 }}"
      options="{{ options }}"
      bind:valueChange="onValueChange1"
    />
    <view class="sub-title">Multiple & cols = 2</view>
    <wux-cascader-picker-view
      value="{{ value2 }}"
      options="{{ options }}"
      cols="2"
      bind:valueChange="onValueChange2"
    />
    <view class="sub-title">Multiple & loading</view>
    <wux-cascader-picker-view
      value="{{ value3 }}"
      options="{{ province }}"
      cols="1"
      loading="{{ loading }}"
      bind:valueChange="onValueChange3"
    />
  </view>
</view>
```

```js
import { $wuxDatePicker, $wuxPopupPicker } from '../../dist/index'
import data from '../cascader/data'

Page({
  data: {
    value1: [],
    value2: [],
    value3: [],
    options: [],
    province: [],
    loading: true,
  },
  onLoad() {
    this.setData({ options: data })
    setTimeout(() => {
      this.setData({
        province: data.map((v, i) => ({
          ...v,
          disabled: i > 3,
          children: null,
        })),
        loading: false,
      })
    }, 3000)
  },
  onValueChange1(e) {
    this.setData({ value1: e.detail.value })
    console.log('onValueChange1', e.detail)
  },
  onValueChange2(e) {
    this.setData({ value2: e.detail.value })
    console.log('onValueChange2', e.detail)
  },
  onValueChange3(e) {
    this.setData({ value3: e.detail.value })
    console.log('onValueChange3', e.detail)
  },
})
```

## 视频演示

[CascaderPickerView](./_media/cascader-picker-view.mp4 ':include :type=iframe width=375px height=667px')

## API

### CascaderPickerView props

| 参数               | 类型            | 描述                                            | 默认值                                                   |
| ------------------ | --------------- | ----------------------------------------------- | -------------------------------------------------------- |
| prefixCls          | `string`        | 自定义类名前缀                                  | wux-picker                                               |
| cols               | `string`        | picker 列数                                     | 3                                                        |
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
| bind:valueChange   | `function`      | 每列数据选择变化后的回调函数                    | -                                                        |
