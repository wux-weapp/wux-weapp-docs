# WaterMark 水印

页面上添加特定的文字或图案。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "WaterMark",
  "usingComponents": {
    "wux-water-mark": "../../dist/water-mark/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">WaterMark</view>
    <view class="page__desc">水印</view>
  </view>
  <view class="page__bd page__bd_spacing">
    <wux-button block type="light" bind:click="setProps1">普通水印</wux-button>
    <wux-button block type="light" bind:click="setProps2">多行文字水印</wux-button>
    <wux-button block type="light" bind:click="setProps3">图片水印</wux-button>
  </view>
  <wux-water-mark
    content="{{ content }}"
    image="{{ image }}"
    width="{{ width }}"
    height="{{ height }}"
  />
</view>
```

```js
const textProps = {
  content: 'WuxUI',
  image: '',
  width: 120,
  height: 64,
}
  
const rowsTextProps = {
  content: ['WuxUI', 'WuxWeapp'],
  image: '',
  width: 120,
  height: 64,
}

const imageProps = {
  content: '',
  image: 'http://cdn.skyvow.cn/logo.png',
  imageWidth: 115,
  imageHeight: 36,
  width: 140,
  height: 80,
}

Page({
  data: {
    ...textProps,
  },
  setProps1() {
    this.setData(textProps)
  },
  setProps2() {
    this.setData(rowsTextProps)
  },
  setProps3() {
    this.setData(imageProps)
  },
})
```

## 视频演示

[WaterMark](./_media/water-mark.mp4 ':include :type=iframe width=375px height=667px')

## API

### WaterMark props

| 参数           | 类型       | 描述                                                             | 默认值  |
| -------------- | ---------- | ---------------------------------------------------------------- | ------- |
| prefixCls      | `string`   | 自定义类名前缀                                                   | wux-water-mark |
| content      | `string,array`   | 水印文字内容	                                                   | - |
| fontSize      | `number`   | 文字大小                                                   | 14 |
| fontColor      | `string`   | 水印文字颜色                                                   | rgba(0, 0, 0, .15) |
| fontStyle      | `string`   | 文字大小，可选值为 none、normal、italic、oblique                  | normal |
| fontFamily      | `string`   | 文字大小                                                       | sans-serif |
| fontWeight      | `string`   | 文字大小，可选值为 normal、light、weight、number                 | normal |
| fullPage      | `boolean`   | 是否覆盖整个页面                                                   | true |
| gapX      | `number`   | 水印之间的水平间距                                                   | 24 |
| gapY      | `number`   | 水印之间的垂直间距                                                   | 48 |
| height      | `number`   | 水印的高度                                                   | 64 |
| width      | `number`   | 水印的宽度                                                   | 120 |
| image      | `string`   | 图片源                                                   | - |
| imageHeight      | `number`   | 图片高度                                                   | 64 |
| imageWidth      | `number`   | 图片宽度                                                   | 128 |
| rotate      | `number`   | 水印绘制时，旋转的角度，单位 °                                                   | -22 |
| zIndex      | `number`   | 追加的水印元素的 z-index                                                   | 2000 |
