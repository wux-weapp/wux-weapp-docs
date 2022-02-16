# Pagination 分页器

分隔长列表，每次只加载一个页面。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Pagination",
  "usingComponents": {
    "wux-pagination": "../../dist/pagination/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">Pagination</view>
    <view class="page__desc">分页器</view>
  </view>
  <view class="page__bd page__bd_spacing">
    <view class="sub-title">Button with text</view>
    <wux-pagination
      defaultCurrent="1"
      total="5"
      bind:prev="onPrev"
      bind:next="onNext"
    >
      <view slot="prev">Prev</view>
      <view slot="next">Next</view>
    </wux-pagination>
    <view class="sub-title">Controlled</view>
    <wux-pagination
      current="{{ current }}"
      total="5"
      mode="button"
      controlled
      bind:change="onChange"
    >
      <view slot="prev">Prev</view>
      <view slot="next">Next</view>
    </wux-pagination>
    <view class="sub-title">Hide number</view>
    <wux-pagination defaultCurrent="1" total="5" simple>
      <view slot="prev">Prev</view>
      <view slot="next">Next</view>
    </wux-pagination>
    <view class="sub-title">Show number only</view>
    <wux-pagination defaultCurrent="1" total="5" mode="number">
      <view slot="prev">Prev</view>
      <view slot="next">Next</view>
    </wux-pagination>
    <view class="sub-title">Point style</view>
    <wux-pagination defaultCurrent="1" total="5" mode="pointer">
      <view slot="prev">Prev</view>
      <view slot="next">Next</view>
    </wux-pagination>
  </view>
</view>
```

```js
Page({
  data: {
    current: 1,
  },
  onChange(e) {
    console.log('onChange', e)
    this.setData({
      current: e.detail.current,
    })
  },
  onPrev(e) {
    console.log('onPrev', e)
  },
  onNext(e) {
    console.log('onNext', e)
  },
})
```

## 视频演示

[Pagination](./_media/pagination.mp4 ':include :type=iframe width=375px height=667px')

## API

### Pagination props

| 参数           | 类型       | 描述                                          | 默认值         |
| -------------- | ---------- | --------------------------------------------- | -------------- |
| prefixCls      | `string`   | 自定义类名前缀                                | wux-pagination |
| mode           | `string`   | 形态，可选值为 button、number、pointer        | button         |
| defaultCurrent | `number`   | 默认页号，当 `controlled` 为 `false` 时才生效 | 1              |
| current        | `number`   | 当前页号，当 `controlled` 为 `true` 时才生效  | 1              |
| controlled     | `boolean`  | 是否受控 [说明文档](controlled.md)            | false          |
| total          | `number`   | 总页数                                        | 0              |
| simple         | `boolean`  | 是否隐藏数值                                  | false          |
| bind:change    | `function` | change 事件触发的回调函数                     | -              |
| bind:prev      | `function` | 左侧按钮点击事件                              | -              |
| bind:next      | `function` | 右侧按钮点击事件                              | -              |

### Pagination slot

| 名称 | 描述               |
| ---- | ------------------ |
| prev | 自定义左侧按钮内容 |
| next | 自定义右侧按钮内容 |

### Pagination externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
