# Cascader 级联选择器

用于一组相关联的数据集合进行选择，例如省市区等。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Cascader",
  "usingComponents": {
    "wux-cell-group": "../../dist/cell-group/index",
    "wux-cell": "../../dist/cell/index",
    "wux-cascader": "../../dist/cascader/index"
  }
}
```

### 示例

```html
<wux-cascader
  visible="{{ visible1 }}"
  default-value="{{ value1 }}"
  title="所在地区"
  options="{{ options1 }}"
  bind:close="onClose1"
  bind:change="onChange1"
  bind:confirm="onConfirm1"
/>

<wux-cascader
  visible="{{ visible2 }}"
  controlled
  value="{{ value2 }}"
  title="所在地区"
  options="{{ options2 }}"
  bind:close="onClose2"
  bind:change="onChange2"
  bind:load="onLoadOptions"
/>

<wux-cascader
  visible="{{ visible3 }}"
  controlled
  value="{{ value3 }}"
  title="Your city"
  cancelText="cancel"
  confirmText="ok"
  options="{{ options3 }}"
  full
  height="540rpx"
  bind:close="onClose3"
  bind:change="onChange3"
  bind:confirm="onConfirm3"
  bind:tabsChange="onTabsChange3"
/>

<view class="page">
  <view class="page__hd">
    <view class="page__title">Cascader</view>
    <view class="page__desc">级联选择器</view>
  </view>
  <view class="page__bd">
    <wux-cell-group title="Cascader">
      <wux-cell
        title="Default"
        extra="{{ title1 }}"
        bind:click="onOpen1"
      ></wux-cell>
      <wux-cell
        title="Async"
        extra="{{ title2 }}"
        bind:click="onOpen2"
      ></wux-cell>
      <wux-cell
        title="Controlled"
        extra="{{ title3 }}"
        bind:click="onOpen3"
      ></wux-cell>
    </wux-cell-group>
  </view>
</view>
```

```js
import data from './data'

Page({
  data: {
    options1: data.slice(0, 2),
    value1: [],
    value1: ['110000', '110000', '110102'],
    title1: '请选择',
    options2: [
      {
        value: 'beijing',
        label: '北京',
        isLeaf: false,
      },
      {
        value: 'hangzhou',
        label: '杭州',
        isLeaf: false,
      },
    ],
    value2: [],
    title2: '请选择',
    options3: data.slice(0, 2),
    value3: [],
    title3: '请选择',
  },
  onOpen1() {
    this.setData({ visible1: true })
  },
  onClose1() {
    this.setData({ visible1: false })
    console.log('onClose1')
  },
  onChange1(e) {
    console.log('onChange1', e.detail)
  },
  onConfirm1(e) {
    console.log('onConfirm1', e.detail)
    this.setData({ title1: e.detail.options.map((n) => n.label).join('/') })
  },
  onOpen2() {
    this.setData({ visible2: true })
  },
  onClose2() {
    this.setData({ visible2: false })
  },
  onChange2(e) {
    console.log('onChange2', e.detail)
    this.setData({
      value2: e.detail.value,
      title2: e.detail.done
        ? e.detail.options.map((n) => n.label).join('/')
        : '请选择',
    })
  },
  onLoadOptions(e) {
    console.log('onLoadOptions', e.detail)
    const { value } = e.detail
    const options2 = [...this.data.options2]

    wx.showLoading({ mask: true })

    setTimeout(() => {
      if (value[value.length - 1] === 'beijing') {
        options2.forEach((n) => {
          if (n.value === 'beijing') {
            n.children = [
              {
                value: 'baidu',
                label: '百度',
              },
              {
                value: 'sina',
                label: '新浪',
              },
            ]
          }
        })
      } else if (value[value.length - 1] === 'hangzhou') {
        options2.forEach((n) => {
          if (n.value === 'hangzhou') {
            n.children = [
              {
                value: 'ali',
                label: '阿里巴巴',
              },
              {
                value: '163',
                label: '网易',
              },
            ]
          }
        })
      }

      wx.hideLoading()

      this.setData({ value2: value, options2 })
    }, 1000)
  },
  onOpen3() {
    this.setData({ visible3: true })
  },
  onClose3() {
    this.setData({ visible3: false })
    console.log('onClose3')
  },
  onChange3(e) {
    console.log('onChange3', e.detail)
  },
  onConfirm3(e) {
    console.log('onConfirm3', e.detail)
    this.setData({
      value3: e.detail.value,
      title3: e.detail.options.map((n) => n.label).join('/'),
    })
  },
  onTabsChange3(e) {
    console.log('onTabsChange3', e.detail)
  },
})
```

```js
// 简单的数据格式如下

;[
  {
    label: '北京',
    value: '110000',
    children: [
      {
        label: '北京市',
        value: '110000',
        children: [
          {
            label: '东城区',
            value: '110101',
          },
        ],
      },
    ],
  },
  {
    label: '上海',
    value: '310000',
    children: [
      {
        label: '上海市',
        value: '310000',
        children: [
          {
            label: '黄浦区',
            value: '310101',
          },
        ],
      },
    ],
  },
]
```

## 视频演示

[Cascader](./_media/cascader.mp4 ':include :type=iframe width=375px height=667px')

## API

### Cascader props

| 参数               | 类型            | 描述                                                      | 默认值                                                                         |
| ------------------ | --------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------ |
| prefixCls          | `string`        | 自定义类名前缀                                            | wux-cascader                                                                   |
| defaultValue       | `array`         | 默认值，当 `controlled` 为 `false` 时才生效               | []                                                                             |
| value              | `array`         | 当前值，当 `controlled` 为 `true` 时才生效                | []                                                                             |
| controlled         | `boolean`       | 是否受控 [说明文档](controlled.md)                        | false                                                                          |
| title              | `string`        | 标题的文字                                                | -                                                                              |
| options            | `array`         | 可选项数据源                                              | []                                                                             |
| options[].value    | `string`        | 属性值                                                    | -                                                                              |
| options[].label    | `string`        | 描述                                                      | -                                                                              |
| options[].children | `array`         | 子选项                                                    | []                                                                             |
| options[].disabled | `boolean`       | 是否禁用                                                  | false                                                                          |
| options[].isLeaf   | `boolean`       | 是否叶子节点，用于动态加载选项                            | false                                                                          |
| chooseTitle        | `string`        | 选择的标题文字                                            | 请选择                                                                         |
| visible            | `boolean`       | 是否显示组件                                              | false                                                                          |
| cancelText         | `string`        | 取消按钮的文字                                            | 取消                                                                           |
| confirmText        | `string`        | 确定按钮的文字                                            | 确定                                                                           |
| full               | `boolean`       | 是否通栏                                                  | false                                                                          |
| height             | `string,number` | 滚动区域节点高度                                          | auto                                                                           |
| defaultFieldNames  | `object`        | 自定义 options 中的 value、label、children、disabled 字段 | { label: 'label', value: 'value', children: 'children', disabled: 'disabled' } |
| skipAnimation      | `boolean`       | 是否跳过动画                                              | false                                                                          |
| bind:change        | `function`      | 选择完成后的回调函数                                      | -                                                                              |
| bind:close         | `function`      | 隐藏浮层的回调函数                                        | -                                                                              |
| bind:load          | `function`      | 动态加载选项的回调函数                                    | -                                                                              |
| bind:tabsChange    | `function`      | 切换面板的回调函数                                        | -                                                                              |

### Cascader externalClasses

| 名称                  | 描述               |
| --------------------- | ------------------ |
| wux-class             | 根节点样式类       |
| wux-scroll-view-class | 滚动区域节点样式类 |
