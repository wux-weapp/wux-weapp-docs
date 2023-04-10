# Backdrop 背景幕

在组件中设置显示蒙层。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Backdrop",
  "usingComponents": {
    "wux-button": "../../dist/button/index",
    "wux-backdrop": "../../dist/backdrop/index"
  }
}
```

### 示例

!> 该组件主要依靠 JavaScript 主动调用，所以一般只需在 wxml 中添加一个组件，并设置 id 为 `#wux-backdrop` 或其他，之后在 page.js 中调用 `$wuxBackdrop(id)` 获取匹配到的第一个组件实例对象。

```html
<wux-backdrop visible="{{ visible1 }}" bind:click="onMaskClick1" />
<wux-backdrop transparent visible="{{ visible2 }}" bind:click="onMaskClick2" />
<wux-backdrop
  visible="{{ visible3 }}"
  bind:click="onMaskClick3"
  bind:showed="onShowed3"
  bind:closed="onClosed3"
>
  <view class="custom-content"
    >内容内容内容内容内容内容内容内容内容内容内容</view
  >
</wux-backdrop>
<wux-backdrop id="wux-backdrop" />

<view class="page">
  <view class="page__hd">
    <view class="page__title">Backdrop</view>
    <view class="page__desc">背景幕</view>
  </view>
  <view class="page__bd page__bd_spacing">
    <view class="sub-title">声明式</view>
    <wux-button block type="light" bind:click="setVisible1"
      >显示背景蒙层</wux-button
    >
    <wux-button block type="light" bind:click="setVisible2"
      >显示透明的背景蒙层</wux-button
    >
    <wux-button block type="light" bind:click="setVisible3"
      >显示带内容的背景蒙层</wux-button
    >
    <view class="sub-title">函数式</view>
    <view class="btn-group" style="z-index: {{ zIndex }};">
      <wux-button block type="light" bind:click="retain"
        >保持背景幕 retain</wux-button
      >
      <wux-button block type="light" bind:click="release"
        >释放背景幕 release</wux-button
      >
    </view>
    <view class="text-center">背景幕锁：{{ locks }}</view>
  </view>
</view>
```

```js
import { $wuxBackdrop } from '../../dist/index'

Page({
  data: {
    visible1: false,
    visible2: false,
    visible3: false,
    locks: 0,
  },
  setVisible1() {
    this.setData({
      visible1: true,
    })
  },
  onMaskClick1() {
    this.setData({
      visible1: false,
    })
  },
  setVisible2() {
    this.setData({
      visible2: true,
    })
  },
  onMaskClick2() {
    this.setData({
      visible2: false,
    })
  },
  setVisible3() {
    this.setData({
      visible3: true,
    })
  },
  onMaskClick3() {
    this.setData({
      visible3: false,
    })
  },
  onShowed3() {
    console.log('onShowed3')
  },
  onClosed3() {
    console.log('onClosed3')
  },
  onLoad() {
    this.$wuxBackdrop = $wuxBackdrop()
  },
  retain() {
    this.$wuxBackdrop.retain()
    this.setData({
      zIndex: 1010,
      locks: this.$wuxBackdrop.backdropHolds,
    })
  },
  release() {
    this.$wuxBackdrop.release()
    this.setData({
      zIndex: this.$wuxBackdrop.backdropHolds ? 1010 : 'unset',
      locks: this.$wuxBackdrop.backdropHolds,
    })
  },
})
```

## 视频演示

[Backdrop](./_media/backdrop.mp4 ':include :type=iframe width=375px height=667px')

## API

| 参数          | 类型       | 描述                                                                    | 默认值              |
| ------------- | ---------- | ----------------------------------------------------------------------- | ------------------- |
| prefixCls     | `string`   | 自定义类名前缀                                                          | wux-backdrop        |
| classNames    | `any`      | 过渡的类名，更多内置过渡效果请参考 [AnimationGroup](animation-group.md) | wux-animate--fadeIn |
| transparent   | `boolean`  | 是否显示透明蒙层                                                        | false               |
| zIndex        | `number`   | 设置蒙层的 z-index                                                      | 1000                |
| mountOnEnter  | `boolean`  | 首次进入过渡时是否懒挂载组件                                            | true                |
| unmountOnExit | `boolean`  | 离开过渡完成时是否卸载组件                                              | true                |
| visible       | `boolean`  | 是否可见                                                                | false               |
| bind:closed   | `function` | 完全关闭后触发                                                          | -                   |
| bind:showed   | `function` | 完全展示后触发                                                          | -                   |
| bind:click    | `function` | 点击组件时触发                                                          | -                   |

### Backdrop.method

- Backdrop.retain
- Backdrop.release

> 组件提供了 retain & release 方法，你可以通过它来指令式地控制 backdropHolds 属性值的增减，即锁定次数，当 backdropHolds > 0 时组件可见，否则隐藏组件。

```
import { $wuxBackdrop } from '../../dist/index'

this.$wuxBackdrop.retain()
this.$wuxBackdrop.backdropHolds === 1
this.$wuxBackdrop.retain()
this.$wuxBackdrop.backdropHolds === 2
this.$wuxBackdrop.release()
this.$wuxBackdrop.release()
this.$wuxBackdrop.backdropHolds === 0
```
