# TabBar 标签栏

标签栏用于在不同功能模块之间进行切换，预设 9 种颜色 `light`, `stable`, `positive`, `calm`, `assertive`, `balanced`, `energized`, `royal`, `dark` 可选用。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "TabBar",
  "usingComponents": {
    "wux-icon": "../../dist/icon/index",
    "wux-badge": "../../dist/badge/index",
    "wux-tabbar": "../../dist/tabbar/index",
    "wux-tabbar-item": "../../dist/tabbar-item/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">TabBar</view>
    <view class="page__desc">标签栏</view>
  </view>
  <view class="page__bd">
    <view class="sub-title">Default</view>
    <wux-tabbar defaultCurrent="tab2">
      <wux-tabbar-item key="tab1" title="Tab 1">
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-on" />
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-off" />
      </wux-tabbar-item>
      <wux-tabbar-item key="tab2" title="Tab 2">
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-on" />
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-off" />
      </wux-tabbar-item>
      <wux-tabbar-item key="tab3" title="Tab 3">
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-on" />
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-off" />
      </wux-tabbar-item>
    </wux-tabbar>
    <view class="sub-title">Theme = positive</view>
    <wux-tabbar defaultCurrent="1" theme="positive">
      <wux-tabbar-item title="Tab 1">
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-on" />
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-off" />
      </wux-tabbar-item>
      <wux-tabbar-item title="Tab 2">
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-on" />
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-off" />
      </wux-tabbar-item>
      <wux-tabbar-item title="Tab 3">
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-on" />
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-off" />
      </wux-tabbar-item>
    </wux-tabbar>
    <view class="sub-title">Disabled</view>
    <wux-tabbar defaultCurrent="1">
      <wux-tabbar-item title="Tab 1">
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-on" />
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-off" />
      </wux-tabbar-item>
      <wux-tabbar-item title="Tab 2" disabled>
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-on" />
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-off" />
      </wux-tabbar-item>
      <wux-tabbar-item title="Tab 3">
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-on" />
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-off" />
      </wux-tabbar-item>
    </wux-tabbar>
    <view class="sub-title">Controlled</view>
    <wux-tabbar controlled current="{{ current }}" bindchange="onChange">
      <wux-tabbar-item title="Tab 1">
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-on" />
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-off" />
      </wux-tabbar-item>
      <wux-tabbar-item title="Tab 2">
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-on" />
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-off" />
      </wux-tabbar-item>
      <wux-tabbar-item title="Tab 3">
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-on" />
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-off" />
      </wux-tabbar-item>
    </wux-tabbar>
    <view class="sub-title">With Badge</view>
    <wux-tabbar defaultCurrent="1" position="bottom" safeArea>
      <wux-tabbar-item title="Tab 1">
        <wux-badge count="1" slot="icon-on">
          <wux-icon wux-class="icon" type="ios-home" size="22" />
        </wux-badge>
        <wux-badge count="1" slot="icon-off">
          <wux-icon wux-class="icon" type="ios-home" size="22" />
        </wux-badge>
      </wux-tabbar-item>
      <wux-tabbar-item title="Tab 2">
        <wux-badge dot slot="icon-on">
          <wux-icon wux-class="icon" type="ios-home" size="22" />
        </wux-badge>
        <wux-badge dot slot="icon-off">
          <wux-icon wux-class="icon" type="ios-home" size="22" />
        </wux-badge>
      </wux-tabbar-item>
      <wux-tabbar-item title="Tab 3">
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-on" />
        <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-off" />
      </wux-tabbar-item>
    </wux-tabbar>
  </view>
</view>
```

```js
Page({
  data: {
    current: '1',
  },
  onChange(e) {
    console.log('onChange', e)
    this.setData({
      current: e.detail.key,
    })
  },
})
```

## 视频演示

[TabBar](./_media/tabbar.mp4 ':include :type=iframe width=375px height=667px')

## API

### TabBar props

| 参数            | 类型       | 描述                                                                                        | 默认值     |
| --------------- | ---------- | ------------------------------------------------------------------------------------------- | ---------- |
| prefixCls       | `string`   | 自定义类名前缀                                                                              | wux-tabbar |
| defaultCurrent  | `string`   | 默认激活 tab 面板的 key，当 `controlled` 为 `false` 时才生效                                | -          |
| current         | `string`   | 用于手动激活 tab 面板的 key，当 `controlled` 为 `true` 时才生效                             | -          |
| controlled      | `boolean`  | 是否受控 [说明文档](controlled.md)                                                          | false      |
| theme           | `string`   | 主题色，可选值为 light、stable、positive、calm、assertive、balanced、energized、royal、dark | balanced   |
| backgroundColor | `string`   | 背景色                                                                                      | #fff       |
| position        | `string`   | 标签栏位置，可选值为 bottom、top                                                            | -          |
| safeArea        | `boolean,string,object`  | 是否适配刘海屏，可选值为 top、bottom、{ top, bottom }，当 `position` 为 `bottom/top` 时才生效                                    | false      |
| safeAreaStyle        | `string`  | 安全区的范围，可选值为 default、navBar、statusBar， 当其值为 default 或 navBar，顶部计算的安全区包含 StatusBar & NavBar | default      |
| bind:change     | `function` | 切换面板的回调函数                                                                          | -          |

### TabBar externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |

### TabBarItem props

| 参数       | 类型       | 描述           | 默认值          |
| ---------- | ---------- | -------------- | --------------- |
| prefixCls  | `string`   | 自定义类名前缀 | wux-tabbar-item |
| key        | `string`   | 对应 key       | -               |
| title      | `string`   | 选项卡标题     | -               |
| disabled   | `boolean`  | 是否禁用       | false           |
| bind:click | `function` | 点击事件       | -               |

### TabBarItem slot

| 名称     | 描述                   |
| -------- | ---------------------- |
| -        | 自定义标题             |
| icon-on  | 自定义默认展示图标     |
| icon-off | 自定义选中后的展示图标 |

### TabBarItem externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
