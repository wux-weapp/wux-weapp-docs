# VirtualList 虚拟列表

适用于显示同类的长列表数据类型，对渲染性能有一定的优化效果。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "VirtualList",
  "enablePullDownRefresh": true,
  "usingComponents": {
    "wux-virtual-list": "../../dist/virtual-list/index",
    "wux-virtual-item": "../../dist/virtual-item/index"
  }
}
```

### 示例

```html
<wux-virtual-list
  id="wux-virtual-list"
  enablePageScroll
  height="{{ height }}"
  itemHeight="100"
  itemBuffer="30"
  disableScroll="{{ disableScroll }}"
  bind:change="onChange"
>
  <wux-virtual-item wx:for="{{ virtual.items }}" wx:key="item">
    <view class="item">
      <view class="index">{{ '#' + item }}</view>
      <view class="desc">Wux NB</view>
    </view>
  </wux-virtual-item>
</wux-virtual-list>
```

```js
let height = wx.getSystemInfoSync().windowHeight
let itemCount = 1000
let items = [...new Array(itemCount)].map((v, i) => i)

Page({
  data: {
    disableScroll: false,
    height,
  },
  onLoad() {
    this.updated(items)
  },
  updated(items) {
    const startTime = Date.now()
    this.virtualList =
      this.virtualList || this.selectComponent('#wux-virtual-list')
    this.virtualList.render(items, () => {
      const diffTime = Date.now() - startTime
      console.log(`onSuccess - render time: ${diffTime}ms`)
    })
  },
  loadData() {
    if (itemCount >= 10000) return
    if (this.data.disableScroll) return
    this.setData({ disableScroll: true })
    wx.showLoading()
    setTimeout(() => {
      itemCount += 1000
      items = [...new Array(itemCount)].map((v, i) => i)
      this.updated(items)
      this.setData({ disableScroll: false })
      wx.hideLoading()
      wx.stopPullDownRefresh()
    }, 3000)
    console.log('loadData')
  },
  onChange(e) {
    const { startIndex, endIndex } = e.detail
    if (
      this.data.startIndex !== startIndex ||
      this.data.endIndex !== endIndex
    ) {
      this.setData(e.detail)
      console.log('onChange', e.detail)
    }
  },
  onPageScroll(e) {
    // 当页面滚动时调用组件 scrollHandler 方法
    this.virtualList.scrollHandler({ detail: e })
    // console.log('onPageScroll', e)
  },
  onReachBottom() {
    this.loadData()
    console.log('onReachBottom')
  },
  onPullDownRefresh() {
    itemCount = 0
    this.loadData()
    console.log('onPullDownRefresh')
  },
})
```

## 视频演示

[VirtualList](./_media/virtual-list.mp4 ':include :type=iframe width=375px height=667px')

## API

### VirtualList props

| 参数                | 类型       | 描述                                                             | 默认值           |
| ------------------- | ---------- | ---------------------------------------------------------------- | ---------------- |
| prefixCls           | `string`   | 自定义类名前缀                                                   | wux-virtual-list |
| itemHeight          | `number`   | 子元素高度                                                       | 50               |
| itemBuffer          | `number`   | 可视容器外加载的元素个数，值越大性能越高                         | 0                |
| scrollToIndex       | `number`   | 设置滚动条到对应子元素的位置                                     | 0                |
| upperThreshold      | `number`   | 距顶部多远时，触发 scrolltoupper 事件                            | 50               |
| lowerThreshold      | `number`   | 距底部多远时，触发 scrolltolower 事件                            | 50               |
| scrollWithAnimation | `boolean`  | 在设置滚动条位置时使用动画过渡                                   | false            |
| enableBackToTop     | `boolean`  | iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向 | false            |
| disableScroll       | `boolean`  | 是否禁用滚动                                                     | false            |
| enablePageScroll    | `boolean`  | 是否启用页面滚动，默认使用 `<scroll-view/>` 滚动                 | false            |
| height              | `number`   | 可视容器高度                                                     | 300              |
| debounce            | `number`   | 是否防抖                                                         | 0                |
| bind:change         | `function` | 数据变化时的回调函数                                             | -                |
| bind:scroll         | `function` | 滚动时触发                                                       | -                |
| bind:scrolltoupper  | `function` | 滚动到顶部时触发                                                 | -                |
| bind:scrolltolower  | `function` | 滚动到底部时触发                                                 | -                |

### VirtualList externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |

### VirtualItem props

| 参数      | 类型     | 描述           | 默认值           |
| --------- | -------- | -------------- | ---------------- |
| prefixCls | `string` | 自定义类名前缀 | wux-virtual-item |

### VirtualItem slot

| 名称 | 描述       |
| ---- | ---------- |
| -    | 自定义内容 |

### VirtualItem externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |

### 外部方法

- VirtualList.render(items, success) items 表示实际数据列表，用于动态加载数据
- VirtualList.scrollTo(scrollOffset, success) scrollOffset 表示滚动条位置，滚动到指定的位置
- VirtualList.scrollToIndex(index, success) index 表示子元素索引，根据索引值滚动到指定的位置
- VirtualList.scrollHandler(e) e 表示事件对象，启用页面滚动时需要手动设置

### 返回参数

```
// `VirtualItem` 遍历值必须是 `change` 事件返回的数据，格式如下

{
    direction: '', // 滚动方向，可选值为 Up、Down
    startIndex: '', // 第一个元素的索引值
    endIndex: '', // 最后一个元素的索引值
    scrollOffset: '', // 滚动条实际位置
    virtual: { items: [] }, // 用于遍历渲染 `VirtualItem` 元素
}
```
