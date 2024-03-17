# Popup 弹出框

用于显示弹出框。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Popup",
  "usingComponents": {
    "wux-cell-group": "../../dist/cell-group/index",
    "wux-cell": "../../dist/cell/index",
    "wux-button": "../../dist/button/index",
    "wux-popup": "../../dist/popup/index"
  }
}
```

### 示例

```html
<wux-popup
  closable
  visible="{{ visible1 }}"
  title="Delete"
  content="Are you sure???"
  bind:close="onClose1"
  bind:closed="onClosed1"
>
  <view slot="footer" class="popup__button" bindtap="close1">OK</view>
</wux-popup>

<wux-popup position="bottom" visible="{{ visible2 }}" bind:close="onClose2">
  <wux-cell-group title="Your fathers">
    <wux-cell hover-class="none" title="Jack Ma"></wux-cell>
    <wux-cell hover-class="none" title="Pony"></wux-cell>
    <wux-cell hover-class="none">
      <wux-button block type="balanced" bindtap="close2">Yes</wux-button>
    </wux-cell>
  </wux-cell-group>
</wux-popup>

<view class="page">
  <view class="page__hd">
    <view class="page__title">Popup</view>
    <view class="page__desc">弹出框</view>
  </view>
  <view class="page__bd page__bd_spacing">
    <wux-button block type="light" bind:click="open1">Default</wux-button>
    <wux-button block type="light" bind:click="open2">Popup</wux-button>
  </view>
</view>
```

```js
Page({
  data: {
    visible1: false,
    visible2: false,
  },
  open1() {
    this.setData({
      visible1: true,
    })
  },
  open2() {
    this.setData({
      visible2: true,
    })
  },
  close1() {
    this.setData({
      visible1: false,
    })
  },
  close2() {
    this.setData({
      visible2: false,
    })
  },
  onClose(key) {
    console.log('onClose')
    this.setData({
      [key]: false,
    })
  },
  onClose1() {
    this.onClose('visible1')
  },
  onClose2() {
    this.onClose('visible2')
  },
  onClosed1() {
    console.log('onClosed')
  },
})
```

## 视频演示

[Popup](./_media/popup.mp4 ':include :type=iframe width=375px height=667px')

## API

### Popup props

| 参数               | 类型            | 描述                                                      | 默认值      |
| ------------------ | --------------- | --------------------------------------------------------- | ----------- |
| prefixCls          | `string`        | 自定义类名前缀                                            | wux-popup   |
| animationPrefixCls | `string`        | 自定义 animation 类名前缀                                 | wux-animate |
| title              | `string`        | 标题                                                      | -           |
| content            | `string`        | 内容                                                      | -           |
| extra              | `string`        | 底部内容                                                  | -           |
| position           | `string`        | 弹出层位置信息，可选值为 center、top、right、bottom、left | center      |
| wrapStyle          | `string,object` | 自定义 wrap 样式                                          | -           |
| containerStyle     | `string,object` | 自定义 container 样式                                     | -           |
| contentStyle       | `string,object` | 自定义 content 样式                                       | -           |
| bodyStyle          | `string,object` | 自定义 body 样式                                          | -           |
| closable           | `boolean`       | 是否显示关闭按钮                                          | false       |
| mask               | `boolean`       | 是否显示蒙层                                              | true        |
| maskClosable       | `boolean`       | 点击蒙层是否允许关闭                                      | true        |
| visible            | `boolean`       | 是否可见                                                  | false       |
| zIndex             | `number`        | 设置蒙层的 z-index                                        | 1000        |
| hasHeader          | `boolean`       | 是否显示头部内容                                          | true        |
| hasFooter          | `boolean`       | 是否显示底部内容                                          | true        |
| safeArea        | `boolean,string,object`  | 是否适配刘海屏，可选值为 top、bottom、{ top, bottom }，当 `position` 为 `bottom/top` 时才生效                                    | false      |
| safeAreaStyle        | `string`  | 安全区的范围，可选值为 default、navBar、statusBar， 当其值为 default 或 navBar，顶部计算的安全区包含 StatusBar & NavBar | default      |
| bind:close         | `function`      | 点击关闭按钮或蒙层的回调函数                              | -           |
| bind:closed        | `function`      | 完全关闭后触发                                          | -           |
| bind:showed        | `function`      | 完全展示后触发                                          | -           |

### Popup externalClasses

| 名称              | 描述           |
| ----------------- | -------------- |
| wux-class         | 根节点样式类   |
| wux-content-class | 主容器样式类   |
| wux-header-class  | 头部内容样式类 |
| wux-body-class    | 主体内容样式类 |
| wux-footer-class  | 底部内容样式类 |
| wux-close-class   | 关闭按钮样式类 |
