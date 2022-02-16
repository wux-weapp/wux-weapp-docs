# NavBar 导航栏

用于提供页面的导航能力。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "NavBar",
  "usingComponents": {
    "wux-navbar": "../../dist/navbar/index",
    "wux-icon": "../../dist/icon/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">NavBar</view>
    <view class="page__desc">导航栏</view>
  </view>
  <view class="page__bd">
    <view class="sub-title">Default</view>
    <wux-navbar
      leftText="Back"
      title="NavBar"
      rightText="Click me!"
      bind:click="onClick"
    />
    <view class="sub-title">Default</view>
    <wux-navbar theme="dark">
      <wux-icon slot="left" type="ios-arrow-back" size="23" />
      <view>导航栏</view>
      <wux-icon slot="right" type="ios-more" size="23" />
    </wux-navbar>
  </view>
</view>
```

```js
Page({
  onClick(e) {
    console.log('onClick', e)
    if (e.detail.type === 'right') {
      wx.showModal({
        title: 'Thank you for your support!',
        showCancel: !1,
      })
    }
  },
})
```

## 视频演示

[NavBar](./_media/navbar.mp4 ':include :type=iframe width=375px height=667px')

## API

### NavBar props

| 参数       | 类型       | 描述                                                                                        | 默认值     |
| ---------- | ---------- | ------------------------------------------------------------------------------------------- | ---------- |
| prefixCls  | `string`   | 自定义类名前缀                                                                              | wux-navbar |
| theme      | `string`   | 主题色，可选值为 light、stable、positive、calm、assertive、balanced、energized、royal、dark | light      |
| title      | `string`   | 标题                                                                                        | -          |
| leftText   | `string`   | 导航左边内容                                                                                | -          |
| rightText  | `string`   | 导航右边内容                                                                                | -          |
| bind:click | `function` | 点击事件                                                                                    | -          |

### NavBar slot

| 名称  | 描述               |
| ----- | ------------------ |
| -     | 自定义标题         |
| left  | 自定义导航左边内容 |
| right | 自定义导航右边内容 |

### NavBar externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
