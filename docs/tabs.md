# Tabs 标签页

选项卡切换组件，预设 9 种颜色 `light`, `stable`, `positive`, `calm`, `assertive`, `balanced`, `energized`, `royal`, `dark` 可选用。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Tabs",
  "usingComponents": {
    "wux-tabs": "../../dist/tabs/index",
    "wux-tab": "../../dist/tab/index",
    "wux-badge": "../../dist/badge/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">Tabs</view>
    <view class="page__desc">标签页</view>
  </view>
  <view class="page__bd">
    <view class="sub-title">Default</view>
    <wux-tabs defaultCurrent="tab1">
      <wux-tab key="tab1" title="Tab 1"></wux-tab>
      <wux-tab key="tab2" title="Tab 2"></wux-tab>
      <wux-tab key="tab3" title="Tab 3"></wux-tab>
    </wux-tabs>
    <view class="sub-title">Theme = positive</view>
    <wux-tabs defaultCurrent="tab1" theme="positive">
      <wux-tab key="tab1" title="Tab 1"></wux-tab>
      <wux-tab key="tab2" title="Tab 2"></wux-tab>
      <wux-tab key="tab3" title="Tab 3"></wux-tab>
    </wux-tabs>
    <view class="sub-title">Direction = vertical</view>
    <wux-tabs defaultCurrent="tab1" direction="vertical">
      <wux-tab key="tab1" title="Tab 1"></wux-tab>
      <wux-tab key="tab2" title="Tab 2"></wux-tab>
      <wux-tab key="tab3" title="Tab 3"></wux-tab>
    </wux-tabs>
    <view class="sub-title">Disabled</view>
    <wux-tabs defaultCurrent="tab1">
      <wux-tab key="tab1" title="Tab 1"></wux-tab>
      <wux-tab disabled key="tab2" title="Tab 2"></wux-tab>
      <wux-tab key="tab3" title="Tab 3"></wux-tab>
    </wux-tabs>
    <view class="sub-title">Controlled</view>
    <wux-tabs controlled current="{{ current }}" bindchange="onChange">
      <wux-tab key="tab1" title="Tab 1"></wux-tab>
      <wux-tab key="tab2" title="Tab 2"></wux-tab>
      <wux-tab key="tab3" title="Tab 3"></wux-tab>
    </wux-tabs>
    <view class="sub-title">Slot</view>
    <wux-tabs controlled current="{{ current }}" bindchange="onChange">
      <wux-tab disabled key="tab1">
        <image
          src="http://cdn.skyvow.cn/logo.png"
          style="width: 20px; height: 20px; margin-right: 5px;"
        />
        <text>Tab 1</text>
      </wux-tab>
      <wux-tab key="tab2">
        <image
          src="http://cdn.skyvow.cn/logo.png"
          style="width: 20px; height: 20px; margin-right: 5px;"
        />
        <text>Tab 2</text>
      </wux-tab>
      <wux-tab key="tab3">
        <image
          src="http://cdn.skyvow.cn/logo.png"
          style="width: 20px; height: 20px; margin-right: 5px;"
        />
        <text>Tab 3</text>
      </wux-tab>
    </wux-tabs>
    <view class="sub-title">Scroll</view>
    <wux-tabs controlled scroll current="{{ current }}" bindchange="onChange">
      <wux-tab key="tab1" title="Tab 1"></wux-tab>
      <wux-tab key="tab2" title="Tab 2"></wux-tab>
      <wux-tab key="tab3" title="Tab 3"></wux-tab>
      <wux-tab key="tab4" title="Tab 4"></wux-tab>
      <wux-tab key="tab5" title="Tab 5"></wux-tab>
      <wux-tab key="tab6" title="Tab 6"></wux-tab>
      <wux-tab key="tab7" title="Tab 7"></wux-tab>
      <wux-tab key="tab8" title="Tab 8"></wux-tab>
      <wux-tab key="tab9" title="Tab 9"></wux-tab>
    </wux-tabs>
    <view class="sub-title">Badge</view>
    <wux-tabs controlled current="{{ current }}" bindchange="onChange">
      <wux-tab key="tab1">
        <wux-badge count="3">Tab 1</wux-badge>
      </wux-tab>
      <wux-tab key="tab2">
        <wux-badge count="1024">Tab 2</wux-badge>
      </wux-tab>
      <wux-tab key="tab3">
        <wux-badge dot>Tab 3</wux-badge>
      </wux-tab>
    </wux-tabs>
    <view class="sub-title">With Swiper</view>
    <wux-tabs
      wux-class="bordered"
      controlled
      current="{{ key }}"
      bindchange="onTabsChange"
    >
      <block wx:for="{{ tabs }}" wx:key="key">
        <wux-tab key="{{ item.key }}" title="{{ item.title }}"></wux-tab>
      </block>
    </wux-tabs>
    <swiper current="{{ index }}" bindchange="onSwiperChange">
      <block wx:for="{{ tabs }}" wx:key="key">
        <swiper-item>
          <view class="content">{{ item.content }}</view>
        </swiper-item>
      </block>
    </swiper>
  </view>
</view>
```

```js
Page({
  data: {
    current: 'tab1',
    tabs: [
      {
        key: 'tab1',
        title: 'Tab 1',
        content: 'Content of tab 1',
      },
      {
        key: 'tab2',
        title: 'Tab 2',
        content: 'Content of tab 2',
      },
      {
        key: 'tab3',
        title: 'Tab 3',
        content: 'Content of tab 3',
      },
    ],
  },
  onChange(e) {
    console.log('onChange', e)
    this.setData({
      current: e.detail.key,
    })
  },
  onTabsChange(e) {
    console.log('onTabsChange', e)
    const { key } = e.detail
    const index = this.data.tabs.map((n) => n.key).indexOf(key)

    this.setData({
      key,
      index,
    })
  },
  onSwiperChange(e) {
    console.log('onSwiperChange', e)
    const { current: index, source } = e.detail
    const { key } = this.data.tabs[index]

    if (!!source) {
      this.setData({
        key,
        index,
      })
    }
  },
})
```

## 视频演示

[Tabs](./_media/tabs.mp4 ':include :type=iframe width=375px height=667px')

## API

### Tabs props

| 参数           | 类型       | 描述                                                                                        | 默认值       |
| -------------- | ---------- | ------------------------------------------------------------------------------------------- | ------------ |
| prefixCls      | `string`   | 自定义类名前缀                                                                              | wux-tabs     |
| defaultCurrent | `string`   | 默认激活 tab 面板的 key，当 `controlled` 为 `false` 时才生效                                | -            |
| current        | `string`   | 用于手动激活 tab 面板的 key，当 `controlled` 为 `true` 时才生效                             | -            |
| scroll         | `boolean`  | 是否开启横向滚动                                                                            | false        |
| controlled     | `boolean`  | 是否受控 [说明文档](controlled.md)                                                          | false        |
| theme          | `string`   | 主题色，可选值为 light、stable、positive、calm、assertive、balanced、energized、royal、dark | balanced     |
| direction      | `string`   | tab 面板的排列方向，可选值为 horizontal、vertical                                           | horizontal   |
| justify        | `string`   | 对齐方式                                                                                    | space-around |
| activeLineMode | `string`   | 激活 tab 下划线的模式，可选值为 auto、full                                                  | auto         |
| bind:change    | `function` | 切换面板的回调函数                                                                          | -            |

### Tabs externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |

### Tab props

| 参数      | 类型      | 描述           | 默认值          |
| --------- | --------- | -------------- | --------------- |
| prefixCls | `string`  | 自定义类名前缀 | wux-tabs\_\_tab |
| key       | `string`  | 对应 key       | -               |
| title     | `string`  | 选项卡标题     | -               |
| disabled  | `boolean` | 是否禁用       | false           |

### Tab slot

| 名称 | 描述       |
| ---- | ---------- |
| -    | 自定义内容 |

### Tab externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
