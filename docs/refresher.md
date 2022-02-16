# Refresher 下拉刷新

用于展现下拉刷新操作，将自定义内容包裹在 `refresher` 组件内。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Refresher",
  "usingComponents": {
    "wux-refresher": "../../dist/refresher/index"
  }
}
```

### 示例

```html
<wux-refresher
  id="wux-refresher"
  bind:pulling="onPulling"
  bind:refresh="onRefresh"
  bind:loadmore="onLoadmore"
  scrollTop="{{scrollTop}}"
>
  <view class="weui-panel weui-panel_access">
    <view class="weui-panel__bd">
      <view
        class="weui-media-box weui-media-box_text"
        wx:for="{{ items }}"
        wx:key=""
      >
        <view class="weui-media-box__title weui-media-box__title_in-text"
          >{{ item.title }}</view
        >
        <view class="weui-media-box__desc">{{ item.content }}</view>
      </view>
    </view>
  </view>
</wux-refresher>
```

```js
import {
  $startWuxRefresher,
  $stopWuxRefresher,
  $stopWuxLoader,
} from '../../dist/index'

const getList = (count = 10, step = 0) =>
  [...new Array(count)].map((n, i) => ({
    title: `Pull down ${i + step}`,
    content: 'Wux Weapp',
  }))

Page({
  data: {
    items: [],
    count: 0,
    scrollTop: 0,
  },
  onLoad() {
    $startWuxRefresher()
  },
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop,
    })
  },
  onPulling() {
    console.log('onPulling')
  },
  onRefresh() {
    console.log('onRefresh')

    this.setData({ count: 10 })

    setTimeout(() => {
      this.setData({ items: getList() })
      $stopWuxRefresher()
    }, 3000)
  },
  onLoadmore() {
    console.log('onLoadmore')
    setTimeout(() => {
      this.setData({
        items: [...this.data.items, ...getList(10, this.data.count)],
        count: this.data.count + 10,
      })

      if (this.data.items.length < 30) {
        $stopWuxLoader()
      } else {
        console.log('没有更多数据')
        $stopWuxLoader('#wux-refresher', this, true)
      }
    }, 3000)
  },
})
```

## 视频演示

[Refresher](./_media/refresher.mp4 ':include :type=iframe width=375px height=667px')

## API

### Refresher props

| 参数                   | 类型       | 描述                             | 默认值        |
| ---------------------- | ---------- | -------------------------------- | ------------- |
| prefixCls              | `string`   | 自定义类名前缀                   | wux-refresher |
| pullingIcon            | `string`   | 下拉时图标                       | -             |
| pullingText            | `string`   | 下拉时文字描述                   | 下拉刷新      |
| refreshingIcon         | `string`   | 刷新时图标                       | -             |
| refreshingText         | `string`   | 刷新时文字描述                   | 正在刷新      |
| disablePullingRotation | `boolean`  | 是否禁用图标旋转效果             | false         |
| distance               | `number`   | 下拉的距离                       | 30            |
| prefixLCls             | `string`   | 自定义类名前缀，对应上拉加载内容 | wux-loader    |
| isShowLoadingText      | `boolean`  | 是否显示 loadingText             | false         |
| loadingText            | `string`   | 上拉加载时文字描述               | 正在加载      |
| loadNoDataText         | `string`   | 上拉加载且没有数据时文字描述     | 没有更多数据  |
| scrollTop              | `number`   | 页面滚动距离，上拉加载时需要设置 | 0             |
| bind:pulling           | `function` | 下拉开始的回调函数               | -             |
| bind:refresh           | `function` | 下拉完成的回调函数               | -             |

### Refresher slot

| 名称 | 描述       |
| ---- | ---------- |
| -    | 自定义内容 |

### Refresher.method

- $startWuxRefresher 开始下拉刷新
- $stopWuxRefresher 停止当前下拉刷新
- $stopWuxLoader 停止当前上拉加载

```
import { $startWuxRefresher, $stopWuxRefresher, $stopWuxLoader } from '../../dist/index'

$startWuxRefresher()
```
