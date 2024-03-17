# Popover 气泡框

弹出气泡式的卡片浮层。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Popover",
  "usingComponents": {
    "wux-popover": "../../dist/popover/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">Popover</view>
    <view class="page__desc">气泡框</view>
  </view>
  <view class="page__bd">
    <view class="sub-title">Placement</view>
    <view class="button-sp-area">
      <wux-popover placement="topLeft" title="Title" content="Content">
        <button size="mini">topLeft</button>
      </wux-popover>
    </view>
    <view class="button-sp-area">
      <wux-popover placement="top" title="Title" content="Content">
        <button size="mini">top</button>
      </wux-popover>
    </view>
    <view class="button-sp-area">
      <wux-popover placement="topRight" title="Title" content="Content">
        <button size="mini">topRight</button>
      </wux-popover>
    </view>
    <view class="button-sp-area text-left">
      <wux-popover placement="rightTop" title="Title" content="Content">
        <button size="mini">rightTop</button>
      </wux-popover>
    </view>
    <view class="button-sp-area text-left">
      <wux-popover placement="right" title="Title" content="Content">
        <button size="mini">right</button>
      </wux-popover>
    </view>
    <view class="button-sp-area text-left">
      <wux-popover placement="rightBottom" title="Title" content="Content">
        <button size="mini">rightBottom</button>
      </wux-popover>
    </view>
    <view class="button-sp-area">
      <wux-popover placement="bottomRight" title="Title" content="Content">
        <button size="mini">bottomRight</button>
      </wux-popover>
    </view>
    <view class="button-sp-area">
      <wux-popover placement="bottom" title="Title" content="Content">
        <button size="mini">bottom</button>
      </wux-popover>
    </view>
    <view class="button-sp-area">
      <wux-popover placement="bottomLeft" title="Title" content="Content">
        <button size="mini">bottomLeft</button>
      </wux-popover>
    </view>
    <view class="button-sp-area text-right">
      <wux-popover placement="leftBottom" title="Title" content="Content">
        <button size="mini">leftBottom</button>
      </wux-popover>
    </view>
    <view class="button-sp-area text-right">
      <wux-popover placement="left" title="Title" content="Content">
        <button size="mini">left</button>
      </wux-popover>
    </view>
    <view class="button-sp-area text-right">
      <wux-popover placement="leftTop" title="Title" content="Content">
        <button size="mini">leftTop</button>
      </wux-popover>
    </view>
    <view class="sub-title">Default Visible</view>
    <view class="button-sp-area text-left">
      <wux-popover
        default-visible="{{ true }}"
        placement="rightBottom"
        title="Title"
        content="Content"
      >
        <button size="mini">rightBottom</button>
      </wux-popover>
    </view>
    <view class="sub-title">Custom style</view>
    <view class="button-sp-area">
      <wux-popover
        placement="top"
        title="Title"
        content="Content"
        body-style="width: 300px;"
      >
        <button size="mini">top</button>
      </wux-popover>
    </view>
    <view class="sub-title">Theme = dark</view>
    <view class="button-sp-area">
      <wux-popover theme="dark" placement="top" title="Title" content="Content">
        <button size="mini">top</button>
      </wux-popover>
    </view>
    <view class="sub-title">Slot</view>
    <view class="button-sp-area">
      <wux-popover placement="top">
        <button size="mini">top</button>
        <view slot="title" style="color: red;">Title</view>
        <view slot="content">Content</view>
      </wux-popover>
    </view>
    <view class="sub-title">Controlled</view>
    <view class="button-sp-area">
      <wux-popover
        visible="{{ visible }}"
        controlled
        placement="top"
        title="Title"
        bind:change="onChange"
      >
        <view slot="content" bindtap="hide">Close</view>
        <button size="mini">top</button>
      </wux-popover>
    </view>
  </view>
</view>
```

```js
Page({
  data: {
    visible: false,
  },
  hide() {
    this.setData({
      visible: false,
    })
  },
  onChange(e) {
    console.log('onChange', e)
    this.setData({
      visible: e.detail.visible,
    })
  },
})
```

## 视频演示

[Popover](./_media/popover.mp4 ':include :type=iframe width=375px height=667px')

## API

### Popover props

| 参数           | 类型            | 描述                                                                                                                                  | 默认值              |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| prefixCls      | `string`        | 自定义类名前缀                                                                                                                        | wux-popover         |
| classNames     | `any`           | 过渡的类名，更多内置过渡效果请参考 [AnimationGroup](animation-group.md)                                                               | wux-animate--fadeIn |
| theme          | `string`        | 气泡框主题，可选值为 light、dark                                                                                                      | light               |
| title          | `string`        | 提示标题                                                                                                                              | -                   |
| content        | `string`        | 提示内容                                                                                                                              | -                   |
| bodyStyle      | `string,object` | 自定义样式                                                                                                                            | -                   |
| defaultVisible | `boolean`       | 默认是否显隐，当 `controlled` 为 `false` 时才生效                                                                                     | false               |
| placement      | `string`        | 气泡框位置，可选值为 top、left、right、bottom、topLeft、topRight、bottomLeft、bottomRight、leftTop、leftBottom、rightTop、rightBottom | top                 |
| trigger        | `string`        | 触发行为，可选值为 click                                                                                                              | click               |
| visible        | `boolean`       | 用于手动控制浮层显隐，当 `controlled` 为 `true` 时才生效                                                                              | false               |
| controlled     | `boolean`       | 是否受控 [说明文档](controlled.md)                                                                                                    | false               |
| mask           | `boolean`       | 是否显示蒙层                                                                                                                          | false               |
| maskClosable   | `boolean`       | 点击蒙层是否允许关闭                                                                                                                  | true                |
| useSlot   | `boolean`       | 子元素是否使用插槽   | true                |
| slotRect   | `boolean`       | 子元素的 rect 属性，当 `useSlot` 为 `true` 时，默认为组件内置 slot   | -                |
| relativeRect   | `boolean`       | 相对定位元素的 rect 属性，当 `useSlot` 为 `true` 时，默认为当前窗口   | -                |
| bind:change    | `function`      | 显示隐藏的回调函数                                                                                                                    | -                   |

### Popover slot

| 名称    | 描述           |
| ------- | -------------- |
| -       | 自定义内容     |
| title   | 自定义提示标题 |
| content | 自定义提示内容 |

### Popover externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
