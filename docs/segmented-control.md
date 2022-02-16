# SegmentedControl 分段器

分段器由至少 2 个分段控件组成，用作不同视图的显示，预设 9 种颜色 `light`, `stable`, `positive`, `calm`, `assertive`, `balanced`, `energized`, `royal`, `dark` 可选用。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "SegmentedControl",
  "usingComponents": {
    "wux-segmented-control": "../../dist/segmented-control/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">SegmentedControl</view>
    <view class="page__desc">分段器</view>
  </view>
  <view class="page__bd">
    <view class="sub-title">Default</view>
    <wux-segmented-control values="{{ ['Segment1', 'Segment2'] }}" />
    <view class="sub-title">Theme</view>
    <wux-segmented-control
      theme="light"
      values="{{ ['Segment1', 'Segment2'] }}"
    />
    <wux-segmented-control
      theme="stable"
      values="{{ ['Segment1', 'Segment2'] }}"
    />
    <wux-segmented-control
      theme="positive"
      values="{{ ['Segment1', 'Segment2'] }}"
    />
    <wux-segmented-control
      theme="calm"
      values="{{ ['Segment1', 'Segment2'] }}"
    />
    <wux-segmented-control
      theme="balanced"
      values="{{ ['Segment1', 'Segment2'] }}"
    />
    <wux-segmented-control
      theme="energized"
      values="{{ ['Segment1', 'Segment2'] }}"
    />
    <wux-segmented-control
      theme="assertive"
      values="{{ ['Segment1', 'Segment2'] }}"
    />
    <wux-segmented-control
      theme="royal"
      values="{{ ['Segment1', 'Segment2'] }}"
    />
    <wux-segmented-control
      theme="dark"
      values="{{ ['Segment1', 'Segment2'] }}"
    />
    <view class="sub-title">Disabled</view>
    <wux-segmented-control disabled values="{{ ['Segment1', 'Segment2'] }}" />
    <view class="sub-title">DefaultCurrent</view>
    <wux-segmented-control
      default-current="2"
      values="{{ ['Segment1', 'Segment2', 'Segment3'] }}"
    />
    <view class="sub-title">Controlled</view>
    <wux-segmented-control
      current="{{ current }}"
      controlled
      values="{{ ['Segment1', 'Segment2', 'Segment3'] }}"
      bind:change="onChange"
    />
  </view>
</view>
```

```js
Page({
  data: {
    current: 1,
  },
  onLoad() {
    this.key = Math.floor(Math.random() * 3)
  },
  onChange(e) {
    console.log(e)

    if (e.detail.key === this.key) {
      return wx.showModal({
        title: 'No switching is allowed',
        showCancel: !1,
      })
    }

    this.setData({
      current: e.detail.key,
    })
  },
})
```

## 视频演示

[SegmentedControl](./_media/segmented-control.mp4 ':include :type=iframe width=375px height=667px')

## API

### SegmentedControl props

| 参数           | 类型       | 描述                                                                                        | 默认值      |
| -------------- | ---------- | ------------------------------------------------------------------------------------------- | ----------- |
| prefixCls      | `string`   | 自定义类名前缀                                                                              | wux-segment |
| theme          | `string`   | 主题色，可选值为 light、stable、positive、calm、assertive、balanced、energized、royal、dark | balanced    |
| defaultCurrent | `number`   | 默认激活 tab 面板的 key，当 `controlled` 为 `false` 时才生效                                | 0           |
| current        | `number`   | 用于手动激活 tab 面板的 key，当 `controlled` 为 `true` 时才生效                             | 0           |
| controlled     | `boolean`  | 是否受控 [说明文档](controlled.md)                                                          | false       |
| disabled       | `boolean`  | 是否禁用                                                                                    | false       |
| values         | `array`    | 选项数组                                                                                    | []          |
| bind:change    | `function` | 切换面板的回调函数                                                                          | -           |

### SegmentedControl externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
