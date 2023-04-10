# FloatingPanel 浮动面板

内容型面板。用户可自由灵活上下滑动浏览内容，常用于地图导航。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "FloatingPanel",
  "usingComponents": {
    "wux-floating-panel": "../../dist/floating-panel/index",
    "wux-button": "../../dist/button/index",
    "wux-cell-group": "../../dist/cell-group/index",
    "wux-cell": "../../dist/cell/index"
  }
}
```

### 示例

```html
<map
  style="width: 100vw; height: 100vh;"
  scale="9"
  longitude="{{ geo[0] }}"
  latitude="{{ geo[1] }}"
/>
<view class="page page_fixed">
  <view class="page__hd">
    <view class="page__title">FloatingPanel</view>
    <view class="page__desc">浮动面板</view>
  </view>
  <view class="page__bd">
    <wux-floating-panel
      id="wux-floating-panel"
      defaultAnchors="{{ defaultAnchors }}"
      bind:heightChange="onHeightChange"
    >
      <view
        style="box-sizing: border-box; padding: 20px; height: {{ height }}; background-image: {{ backgroundImage }};"
      >
        <wux-cell-group>
          <block wx:for="{{ locations }}" wx:key="name">
            <wux-cell
              is-link
              title="{{ item.name }}"
              data-geo="{{ item.geo }}"
              bind:click="onLocation"
            ></wux-cell>
          </block>
        </wux-cell-group>
        <wux-button block type="light" bind:click="setHeight"
          >收起至200px</wux-button
        >
      </view>
    </wux-floating-panel>
  </view>
</view>
```

```js
const windowHeight = wx.getSystemInfoSync().windowHeight
const locations = [
  {
    name: '北京',
    geo: [116.46, 39.92],
  },
  {
    name: '上海',
    geo: [121.48, 31.22],
  },
  {
    name: '广州',
    geo: [113.23, 23.16],
  },
  {
    name: '深圳',
    geo: [114.07, 22.62],
  },
]

Page({
  data: {
    geo: locations[0].geo,
    locations,
    defaultAnchors: [100, windowHeight * 0.5, windowHeight * 0.8],
  },
  onHeightChange(e) {
    console.log('onHeightChange', e.detail)
    const { height, maxHeight } = e.detail
    const ratio = height / maxHeight
    this.setData({
      height: '100%',
      backgroundImage: `linear-gradient(rgba(124, 24, 126, ${ratio}), rgba(203, 98, 117, ${ratio}))`,
    })
  },
  setHeight() {
    const floatingPanelRef = this.selectComponent('#wux-floating-panel')
    floatingPanelRef.setHeight(200, { immediate: true })
  },
  onLocation(e) {
    console.log('onLocation', e.target.dataset)
    const { geo } = e.target.dataset
    this.setData({
      geo,
    })
  },
})
```

## 视频演示

[FloatingPanel](./_media/floating-panel.mp4 ':include :type=iframe width=375px height=667px')

## API

### FloatingPanel props

| 参数              | 类型       | 描述                        | 默认值             |
| ----------------- | ---------- | --------------------------- | ------------------ |
| prefixCls         | `string`   | 自定义类名前缀              | wux-floating-panel |
| defaultAnchors    | `array`    | 可拖拽至哪些高度，单位为 px | -                  |
| bind:heightChange | `function` | 当高度变化时触发            | -                  |

### FloatingPanel slot

| 名称 | 描述       |
| ---- | ---------- |
| -    | 自定义内容 |

### FloatingPanel externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |

### FloatingPanel.method

- FloatingPanel.setHeight

> 组件提供了 setHeight 方法，你可以通过它来指令式地控制 FloatingPanel 的高度

```
FloatingPanel.setHeight(
  height: number,
  options?: {
    immediate?: boolean // 是否跳过动画
  }
)
```

```
<wux-floating-panel id="wux-floating-panel">...</wux-floating-panel>

const floatingPanelRef = this.selectComponent('#wux-floating-panel')
floatingPanelRef.setHeight(200, { immediate: true })
```
