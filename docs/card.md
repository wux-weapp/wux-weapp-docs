# Card 卡片

用于组织信息和操作，通常也作为详细信息的入口。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Card",
  "usingComponents": {
    "wux-card": "../../dist/card/index",
    "wux-wing-blank": "../../dist/wing-blank/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">Card</view>
    <view class="page__desc">卡片</view>
  </view>
  <view class="page__bd">
    <view class="sub-title">Default</view>
    <wux-wing-blank size="default">
      <wux-card title="卡片标题" extra="额外内容">
        <view slot="body">卡片内容</view>
        <view slot="footer">尾部内容</view>
      </wux-card>
    </wux-wing-blank>
    <view class="sub-title">Thumb</view>
    <wux-wing-blank size="default">
      <wux-card
        title="卡片标题"
        extra="额外内容"
        thumb="http://cdn.skyvow.cn/logo.png"
      >
        <view slot="body">卡片内容</view>
        <view slot="footer">尾部内容</view>
      </wux-card>
    </wux-wing-blank>
    <view class="sub-title">Custom thumb style</view>
    <wux-wing-blank size="default">
      <wux-card
        title="卡片标题"
        extra="额外内容"
        thumb="http://cdn.skyvow.cn/logo.png"
        thumb-style="border-radius: 50%;"
      >
        <view slot="body">卡片内容</view>
        <view slot="footer">尾部内容</view>
      </wux-card>
    </wux-wing-blank>
    <view class="sub-title">No border</view>
    <wux-wing-blank size="default">
      <wux-card
        bordered="{{ false }}"
        title="卡片标题"
        extra="额外内容"
        thumb="http://cdn.skyvow.cn/logo.png"
      >
        <view slot="body">卡片内容</view>
        <view slot="footer">尾部内容</view>
      </wux-card>
    </wux-wing-blank>
    <view class="sub-title">Full</view>
    <wux-card
      full
      title="卡片标题"
      extra="额外内容"
      thumb="http://cdn.skyvow.cn/logo.png"
    >
      <view slot="body">卡片内容</view>
      <view slot="footer">尾部内容</view>
    </wux-card>
    <view class="sub-title">Actions</view>
    <wux-card
      full
      title="付款金额"
      extra="¥1024.00"
      actions="{{ actions }}"
      bind:action="onAction"
    >
      <view slot="body">商品：电动打蛋机</view>
      <view slot="footer">状态：未支付</view>
    </wux-card>
  </view>
</view>
```

```js
Page({
  data: {
    actions: [
      {
        type: 'default',
        text: '微信支付',
      },
      {
        text: '现金支付',
        type: 'primary',
      },
    ],
  },
  onAction(e) {
    console.log('onAction', e.detail)
  },
})
```

## 视频演示

[Card](./_media/card.mp4 ':include :type=iframe width=375px height=667px')

## API

### Card props

| 参数               | 类型            | 描述                                                             | 默认值   |
| ------------------ | --------------- | ---------------------------------------------------------------- | -------- |
| prefixCls          | `string`        | 自定义类名前缀                                                   | wux-card |
| hoverClass         | `string`        | 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果 | none     |
| bordered           | `boolean`       | 是否有边框                                                       | false    |
| full               | `boolean`       | 是否通栏                                                         | false    |
| title              | `string`        | 卡片标题                                                         | -        |
| thumb              | `string`        | 卡片标题图片                                                     | -        |
| thumbStyle         | `string,object` | 标题图片样式                                                     | -        |
| extra              | `string`        | 卡片标题辅助内容                                                 | -        |
| actions            | `array`         | 操作按钮                                                         | []       |
| actions[].text     | `string`        | 按钮的文本                                                       | -        |
| actions[].type     | `string`        | 按钮的类型，可选值为 default、primary                            | -        |
| actions[].bold     | `boolean`       | 是否加粗按钮的文字                                               | -        |
| actions[].disabled | `boolean`       | 是否禁用                                                         | false    |
| bind:action        | `function`      | 操作按钮的点击事件                                               | -        |

### Card slot

| 名称   | 描述           |
| ------ | -------------- |
| extra  | 自定义辅助内容 |
| body   | 自定义内容     |
| footer | 自定义尾部内容 |

### Card externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
