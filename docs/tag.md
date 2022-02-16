# Tag 标签

进行标记和分类的小标签。添加了多种预设色彩的标签样式如 `pink`、`red`、`yellow`、`orange`、`cyan`、`green`、`blue`、`purple`、`geekblue`、`magenta`、`volcano`、`gold`、`lime` 可选用。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Tag",
  "usingComponents": {
    "wux-tag": "../../dist/tag/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">Tag</view>
    <view class="page__desc">标签</view>
  </view>
  <view class="page__bd page__bd_spacing">
    <view class="sub-title">Default</view>
    <wux-tag>magenta</wux-tag>
    <wux-tag color="magenta">magenta</wux-tag>
    <wux-tag color="red">red</wux-tag>
    <wux-tag color="volcano">volcano</wux-tag>
    <wux-tag color="orange">orange</wux-tag>
    <wux-tag color="gold">gold</wux-tag>
    <wux-tag color="lime">lime</wux-tag>
    <wux-tag color="green">green</wux-tag>
    <wux-tag color="cyan">cyan</wux-tag>
    <wux-tag color="blue">blue</wux-tag>
    <wux-tag color="geekblue">geekblue</wux-tag>
    <wux-tag color="purple">purple</wux-tag>
    <view class="sub-title">Custom color</view>
    <wux-tag color="#f50">#f50</wux-tag>
    <wux-tag color="#2db7f5">#2db7f5</wux-tag>
    <wux-tag color="#87d068">#87d068</wux-tag>
    <wux-tag color="#108ee9">#108ee9</wux-tag>
    <view class="sub-title">Closable</view>
    <wux-tag closable bind:close="onClose">Tag 1</wux-tag>
    <wux-tag
      closable
      visible="{{ visible }}"
      controlled
      bind:close="onClose"
      bind:change="onChange"
      >Tag 3</wux-tag
    >
    <wux-tag bind:click="onToggle">Toggle</wux-tag>
  </view>
</view>
```

```js
Page({
  data: {
    visible: true,
  },
  onClose(e) {
    console.log('onClose', e)
  },
  onChange(e) {
    console.log('onChange', e)
    if (!e.detail.value) {
      wx.showModal({
        title: 'Sure to delete?',
        success: (res) => {
          if (res.confirm) {
            this.setData({
              visible: e.detail.value,
            })
          }
        },
      })
    }
  },
  onToggle() {
    this.setData({
      visible: !this.data.visible,
    })
  },
})
```

## 视频演示

[Tag](./_media/tag.mp4 ':include :type=iframe width=375px height=667px')

## API

### Tag props

| 参数           | 类型       | 描述                                                             | 默认值  |
| -------------- | ---------- | ---------------------------------------------------------------- | ------- |
| prefixCls      | `string`   | 自定义类名前缀                                                   | wux-tag |
| hoverClass     | `string`   | 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果 | default |
| color          | `string`   | 标签色                                                           | -       |
| closable       | `boolean`  | 标签是否可以关闭                                                 | false   |
| defaultVisible | `boolean`  | 默认是否显隐，当 `controlled` 为 `false` 时才生效                | true    |
| visible        | `boolean`  | 用于手动控制浮层显隐，当 `controlled` 为 `true` 时才生效         | true    |
| controlled     | `boolean`  | 是否受控 [说明文档](controlled.md)                               | false   |
| bind:change    | `function` | 监听状态变化的回调函数                                           | -       |
| bind:close     | `function` | 关闭时的回调                                                     | -       |
| bind:click     | `function` | 点击事件                                                         | -       |

### Tag slot

| 名称 | 描述       |
| ---- | ---------- |
| -    | 自定义内容 |

### Tag externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
