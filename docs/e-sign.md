# ESign 电子签名

用于签名场景的组件，基于 Canvas 实现。

## 使用指南

### 在 page.json 中引入组件

```json
{
    "navigationBarTitleText": "ESign",
    "usingComponents": {
        "wux-e-sign": "../../dist/e-sign/index"
    }
}
```

### 示例

```html
<view class="page">
    <view class="page__hd">
        <view class="page__title">ESign</view>
        <view class="page__desc">电子签名</view>
    </view>
    <view class="page__bd">
        <view class="sub-title">Default</view>
        <wux-e-sign bind:signing="onSigning" bind:clear="onClear" bind:submit="onSubmit" />
        <view class="sub-title">Custom lineColor</view>
        <wux-e-sign lineColor="#ff0000" bind:signing="onSigning" bind:clear="onClear" bind:submit="onSubmit" />
        <view class="sub-title">Custom lineWidth</view>
        <wux-e-sign lineWidth="6" bind:signing="onSigning" bind:clear="onClear" bind:submit="onSubmit" />
        <view class="sub-title">Custom bgColor</view>
        <wux-e-sign bgColor="#cccccc" bind:signing="onSigning" bind:clear="onClear" bind:submit="onSubmit" />
    </view>
</view>
```

```js
Page({
    data: {
        width: 'auto',
    },
    onLoad() {},
    onSigning(e) {
        console.log('onSigning', e)
    },
    onClear(e) {
        console.log('onClear', e)
    },
    onSubmit(e) {
        console.log('onSubmit', e)
        const { base64Url } = e.detail
        if (base64Url) {
            wx.previewImage({
                urls: [base64Url],
            })
        }
    },
})
```

## 视频演示

[ESign](./_media/e-sign.mp4 ':include :type=iframe width=375px height=667px')

## API

### ESign props

| 参数           | 类型       | 描述                                                             | 默认值  |
| -------------- | ---------- | ---------------------------------------------------------------- | ------- |
| prefixCls      | `string`   | 自定义类名前缀                                                   | wux-e-sign |
| type          | `string`   | 生成图片的类型                                                           | png       |
| width          | `number,string`   | 画布的宽度                                                           | auto       |
| height          | `number`   | 画布的高度                                                           | 200       |
| bgColor          | `string`   | 画布的背景颜色                                                           | #ffffff       |
| lineWidth          | `string`   | 线条宽度                                                           | 3       |
| lineColor          | `string`   | 线条颜色                                                           | #000000       |
| hasFooter          | `boolean`   | 是否显示底部内容                                                           | true       |
| cancelText          | `string`   | 清除按钮文案                                                           | 重置       |
| confirmText          | `string`   | 确认按钮文案                                                           | 确定       |
| bind:start    | `function` | 开始签名时触发                                           | -       |
| bind:signing     | `function` | 结束签名时触发                                                | -       |
| bind:end     | `function` | 签名过程中触发                                                         | -       |
| bind:submit     | `function` | 点击确定按钮时触发                                                         | -       |
| bind:clear     | `function` | 点击取消按钮时触发                                                         | -       |

### ESign slot

| 名称 | 描述       |
| ---- | ---------- |
| footer    | 自定义底部内容 |

### ESign externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
