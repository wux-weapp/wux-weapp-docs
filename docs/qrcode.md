# Qrcode 二维码

用于展现二维码。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Qrcode",
  "usingComponents": {
    "wux-qrcode": "../../dist/qrcode/index",
    "wux-cell-group": "../../dist/cell-group/index",
    "wux-cell": "../../dist/cell/index",
    "wux-slider": "../../dist/slider/index",
    "wux-textarea": "../../dist/textarea/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">Qrcode</view>
    <view class="page__desc">二维码</view>
  </view>
  <view class="page__bd">
    <view class="sub-title">请输入文字，即时输入即时生成</view>
    <wux-cell-group>
      <wux-cell hover-class="none">
        <wux-textarea
          hasCount
          rows="3"
          placeholder="支持文本、网址和电子邮箱"
          maxlength="300"
          value="{{ value }}"
          controlled
          bind:change="onChange"
        />
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="留白">
      <wux-cell hover-class="none">
        <wux-slider
          value="{{ whiteSpace }}"
          controlled
          showValue
          showMark
          step="10"
          min="0"
          max="20"
          bind:change="onSliderChange"
        />
      </wux-cell>
    </wux-cell-group>
    <view class="sub-title"
      >提示：Canvas 在微信中无法长按识别,
      点击图片进入保存页面长按图片可以保存</view
    >
    <view class="qrcode">
      <wux-qrcode
        id="qrcode"
        data="{{ value }}"
        fg-color="{{ fgColor }}"
        width="200"
        height="200"
        whiteSpace="{{ whiteSpace }}"
        bind:click="previewImage"
      />
    </view>
  </view>
</view>
```

```js
Page({
  data: {
    value: 'https://github.com/wux-weapp/wux-weapp',
    fgColor: 'black',
    whiteSpace: [10],
  },
  onChange(e) {
    const value = e.detail.value
    const fgColor = this.randomColor()

    this.setData({
      value,
      fgColor,
    })
  },
  onSliderChange(e) {
    const value = e.detail.value
    this.setData({
      whiteSpace: [value],
    })
  },
  previewImage() {
    // 在自定义组件下，当前组件实例的 this，以操作组件内 <canvas> 组件
    const that = this.selectComponent('#qrcode')

    wx.canvasToTempFilePath(
      {
        canvasId: 'wux-qrcode',
        success: (res) => {
          wx.previewImage({
            urls: [res.tempFilePath],
          })
        },
      },
      that
    )
  },
  randomColor() {
    const colorStr = Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .toUpperCase()
    const length = colorStr.length
    const prefixStr = '000000'.substring(0, 6 - colorStr.length)
    return `#${prefixStr}${colorStr}`
  },
})
```

## 视频演示

[Qrcode](./_media/qrcode.mp4 ':include :type=iframe width=375px height=667px')

## API

### Qrcode props

| 参数              | 类型       | 描述              | 默认值 |
| ----------------- | ---------- | ----------------- | ------ |
| data              | `string`   | 文本内容          | -      |
| typeNumber        | `number`   | 类型              | -1     |
| errorCorrectLevel | `number`   | 误差校正等级      | 2      |
| width             | `number`   | canvas 组件的宽度 | 200    |
| height            | `number`   | canvas 组件的高度 | 200    |
| whiteSpace        | `number`   | 四周留白          | 0      |
| fgColor           | `string`   | 前景色            | black  |
| bgColor           | `string`   | 背景色            | white  |
| bind:click        | `function` | 点击事件          | -      |
