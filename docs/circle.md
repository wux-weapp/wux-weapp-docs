# Circle 进度环

用于展现某个任务的当前进度。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Circle",
  "usingComponents": {
    "wux-button": "../../dist/button/index",
    "wux-circle": "../../dist/circle/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">Circle</view>
    <view class="page__desc">进度环</view>
  </view>
  <view class="page__bd page__bd_spacing">
    <view class="sub-title">Color</view>
    <wux-circle percent="80" color="#33cd5f">#33cd5f</wux-circle>
    <view class="sub-title">BackgroundColor</view>
    <wux-circle percent="80" background-color="#ef473a">#ef473a</wux-circle>
    <view class="sub-title">Other</view>
    <wux-circle percent="{{ percent }}">{{ percent + '%' }}</wux-circle>
    <wux-button block type="light" bind:click="add">Add</wux-button>
  </view>
</view>
```

```js
Page({
  data: {
    percent: 50,
  },
  add() {
    let percent = this.data.percent + 10

    if (this.data.percent >= 100) {
      percent = 0
    }

    this.setData({
      percent,
    })
  },
})
```

## 视频演示

[Circle](./_media/circle.mp4 ':include :type=iframe width=375px height=667px')

## API

### Circle props

| 参数             | 类型       | 描述                                                                                    | 默认值     |
| ---------------- | ---------- | --------------------------------------------------------------------------------------- | ---------- |
| prefixCls        | `string`   | 自定义类名前缀                                                                          | wux-circle |
| percent          | `number`   | 百分比 0~100                                                                            | 0          |
| size             | `number`   | 进度环的尺寸，单位 px                                                                   | 120        |
| strokeWidth      | `number`   | 进度环的宽度，单位 px                                                                   | 10         |
| lineCap          | `string`   | 进度环的线头样式，可选值为 square、round、butt                                          | round      |
| backgroundColor  | `string`   | 默认背景颜色                                                                            | #f3f3f3    |
| color            | `string`   | 默认前景颜色                                                                            | #33cd5f    |
| sAngle           | `number`   | 进度环动画的开始角度（在 3 点钟方向）                                                   | 0          |
| counterclockwise | `boolean`  | 设置圆形进度条是顺时针旋转，还是逆时针旋转。true 表示逆时针旋转，false 表示顺时针旋转。 | false      |
| speed            | `number`   | 进度环的动画速度                                                                        | 2000       |
| animate          | `boolean`  | 进度环动画是否执行平滑动画效果                                                          | true       |
| background       | `boolean`  | 是否显示进度环的运动轨迹                                                                | true       |
| bind:change      | `function` | 每一个动画帧之后的回调函数                                                              | -          |

### Circle slot

| 名称 | 描述       |
| ---- | ---------- |
| -    | 自定义内容 |

### Circle externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
