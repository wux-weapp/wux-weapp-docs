# Timeago 多久之前

用于将时间转化成类似于\*\*\* 时间前的描述文字。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Timeago",
  "usingComponents": {
    "wux-segmented-control": "../../dist/segmented-control/index",
    "wux-timeago": "../../dist/timeago/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">Timeago</view>
    <view class="page__desc">多久之前</view>
  </view>
  <view class="page__bd page__bd_spacing">
    <wux-segmented-control
      values="{{ ['zh_CN', 'zh_TW', 'en'] }}"
      bind:change="onChange"
    />
    <view class="sub-title">Default</view>
    <wux-timeago to="{{ to }}" lang="{{ lang }}" />
    <view class="sub-title">Refreshable</view>
    <wux-timeago to="{{ to }}" lang="{{ lang }}" refreshable />
    <view class="sub-title">From</view>
    <wux-timeago to="2018-12-12" from="2019-01-01" lang="{{ lang }}" />
    <view class="sub-title">Timein</view>
    <wux-timeago to="2020-10-24" lang="{{ lang }}" />
  </view>
</view>
```

```js
Page({
  data: {
    to: null,
    lang: 'zh_CN',
  },
  onLoad() {
    this.setData({
      to: new Date().getTime(),
    })
  },
  onChange(e) {
    console.log(e)
    const { key, values } = e.detail
    const lang = values[key]

    this.setData({
      lang,
    })
  },
})
```

## 视频演示

[Timeago](./_media/timeago.mp4 ':include :type=iframe width=375px height=667px')

## API

### Timeago props

| 参数        | 类型      | 描述                                      | 默认值      |
| ----------- | --------- | ----------------------------------------- | ----------- |
| prefixCls   | `string`  | 自定义类名前缀                            | wux-timeago |
| to          | `any`     | 当前开始时间                              | -           |
| from        | `any`     | 当前截止时间，不传默认当前时间            | -           |
| refreshable | `boolean` | 是否刷新时间                              | false       |
| lang        | `string`  | 返回文本的语言，可选值为 en、zh_CN、zh_TW | zh_CN       |

### Timeago externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
