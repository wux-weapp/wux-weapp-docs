# Landscape 压屏窗

用于在浮层中显示广告或说明。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Landscape",
  "usingComponents": {
    "wux-button": "../../dist/button/index",
    "wux-landscape": "../../dist/landscape/index"
  }
}
```

### 示例

```html
<wux-landscape visible="{{ visible1 }}" bind:close="onClose1">
  <image src="http://cdn.skyvow.cn/redpacket.png" style="height: 350px" />
</wux-landscape>
<wux-landscape
  visible="{{ visible2 }}"
  bind:close="onClose2"
  mask="{{ false }}"
>
  <image src="http://cdn.skyvow.cn/redpacket.png" style="height: 350px" />
</wux-landscape>

<view class="page">
  <view class="page__hd">
    <view class="page__title">Landscape</view>
    <view class="page__desc">压屏窗</view>
  </view>
  <view class="page__bd page__bd_spacing">
    <wux-button block type="light" bind:click="onOpen1">Default</wux-button>
    <wux-button block type="light" bind:click="onOpen2">No mask</wux-button>
  </view>
</view>
```

```js
Page({
  data: {
    visible1: false,
    visible2: false,
  },
  onOpen1() {
    this.setData({
      visible1: true,
    })
  },
  onOpen2() {
    this.setData({
      visible2: true,
    })
  },
  onClose1() {
    this.setData({
      visible1: false,
    })
  },
  onClose2() {
    this.setData({
      visible2: false,
    })
  },
})
```

## 视频演示

[Landscape](./_media/landscape.mp4 ':include :type=iframe width=375px height=667px')

## API

### Landscape props

| 参数         | 类型       | 描述                 | 默认值        |
| ------------ | ---------- | -------------------- | ------------- |
| prefixCls    | `string`   | 自定义类名前缀       | wux-landscape |
| closable     | `boolean`  | 是否显示关闭按钮     | true          |
| mask         | `boolean`  | 是否显示蒙层         | true          |
| maskClosable | `boolean`  | 点击蒙层是否允许关闭 | false         |
| visible      | `boolean`  | 是否可见             | false         |
| bind:close   | `function` | 关闭时的回调         | -             |

### Landscape slot

| 名称 | 描述       |
| ---- | ---------- |
| -    | 自定义内容 |

### Landscape externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
