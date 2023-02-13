# FabButton 浮动按钮

用于展现浮动按钮，预设 9 种颜色 `light`, `stable`, `positive`, `calm`, `assertive`, `balanced`, `energized`, `royal`, `dark` 可选用。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "FabButton",
  "usingComponents": {
    "wux-fab-button": "../../dist/fab-button/index"
  }
}
```

### 示例

```html
<wux-fab-button
  position="{{ types[typeIndex] }}"
  theme="{{ colors[colorIndex] }}"
  direction="{{ dirs[dirIndex] }}"
  reverse="{{ reverse }}"
  spaceBetween="{{ spaceBetween }}"
  sAngle="{{ sAngle }}"
  eAngle="{{ eAngle }}"
  buttons="{{ buttons }}"
  bind:change="onChange"
  bind:click="onClick"
  bind:contact="onContact"
  bind:getuserinfo="onGotUserInfo"
/>

<view class="page">
  <view class="page__hd">
    <view class="page__title">FabButton</view>
    <view class="page__desc">浮动按钮</view>
  </view>
  <view class="page__bd">
    <view class="weui-cells weui-cells_after-title">
      <view class="weui-cell weui-cell_select">
        <view class="weui-cell__hd weui-cell__hd_in-select-after">
          <view class="weui-label">Position</view>
        </view>
        <view class="weui-cell__bd">
          <picker
            bindchange="pickerChange"
            data-model="typeIndex"
            value="{{ typeIndex }}"
            range="{{ types }}"
          >
            <view class="weui-select weui-select_in-select-after"
              >{{ types[typeIndex] }}</view
            >
          </picker>
        </view>
      </view>
      <view class="weui-cell weui-cell_select">
        <view class="weui-cell__hd weui-cell__hd_in-select-after">
          <view class="weui-label">Theme</view>
        </view>
        <view class="weui-cell__bd">
          <picker
            bindchange="pickerChange"
            data-model="colorIndex"
            value="{{ colorIndex }}"
            range="{{ colors }}"
          >
            <view class="weui-select weui-select_in-select-after"
              >{{ colors[colorIndex] }}</view
            >
          </picker>
        </view>
      </view>
      <view class="weui-cell weui-cell_select">
        <view class="weui-cell__hd weui-cell__hd_in-select-after">
          <view class="weui-label">Direction</view>
        </view>
        <view class="weui-cell__bd">
          <picker
            bindchange="pickerChange"
            data-model="dirIndex"
            value="{{ dirIndex }}"
            range="{{ dirs }}"
          >
            <view class="weui-select weui-select_in-select-after"
              >{{ dirs[dirIndex] }}</view
            >
          </picker>
        </view>
      </view>
      <view class="weui-cell weui-cell_switch">
        <view class="weui-cell__bd">Reverse</view>
        <view class="weui-cell__ft">
          <switch bindchange="onSwitch" checked="{{ reverse }}" />
        </view>
      </view>
      <view class="weui-cell weui-cell_switch">
        <view class="weui-cell__bd">Custom Angle</view>
        <view class="weui-cell__ft">
          <switch bindchange="onAngle" checked="{{ isAngle }}" />
        </view>
      </view>
    </view>
  </view>
</view>
```

```js
const icon =
  'data:image/png;base64,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'
const buttons = [
  {
    openType: 'getUserInfo',
    label: 'GetUserInfo',
    icon,
  },
  {
    openType: 'share',
    label: 'Share',
    icon,
  },
  {
    openType: 'contact',
    label: 'Contact',
    icon,
  },
  {
    label: 'View on Demo',
    icon,
  },
]

Page({
  data: {
    types: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'center'],
    typeIndex: 3,
    colors: [
      'light',
      'stable',
      'positive',
      'calm',
      'balanced',
      'energized',
      'assertive',
      'royal',
      'dark',
    ],
    colorIndex: 4,
    dirs: ['horizontal', 'vertical', 'circle'],
    dirIndex: 0,
    sAngle: 0,
    eAngle: 360,
    spaceBetween: 10,
    buttons,
  },
  onClick(e) {
    console.log('onClick', e.detail)
    if (e.detail.index === 3) {
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
  },
  onContact(e) {
    console.log('onContact', e)
  },
  onGotUserInfo(e) {
    console.log('onGotUserInfo', e)
  },
  onGotPhoneNumber(e) {
    console.log('onGotPhoneNumber', e)
  },
  onChange(e) {
    console.log('onChange', e)
  },
  pickerChange(e) {
    const { value } = e.detail
    const { model } = e.currentTarget.dataset

    this.setData({
      [model]: value,
    })
  },
  onSwitch(e) {
    this.setData({
      reverse: e.detail.value,
    })
  },
  onAngle(e) {
    const { value } = e.detail
    const sAngle = value ? -90 : 0
    const eAngle = value ? -210 : 360
    const spaceBetween = value ? 30 : 10

    this.setData({
      sAngle,
      eAngle,
      spaceBetween,
    })
  },
})
```

## 视频演示

[FabButton](./_media/fab-button.mp4 ':include :type=iframe width=375px height=667px')

## API

### FabButton props

| 参数                           | 类型       | 描述                                                                                                 | 默认值         |
| ------------------------------ | ---------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| prefixCls                      | `string`   | 自定义类名前缀                                                                                       | wux-fab-button |
| hoverClass                     | `string`   | 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果                                     | default        |
| theme                          | `string`   | 主题色，可选值为 light、stable、positive、calm、assertive、balanced、energized、royal、dark          | balanced       |
| position                       | `string`   | 按钮的位置，可选值为 topLeft、topRight、bottomLeft、bottomRight                                      | bottomRight    |
| action                         | `string`   | 操作按钮的图标                                                                                       | -              |
| actionRotate                   | `boolean`  | 操作按钮是否旋转动画                                                                                 | true           |
| hideShadow                     | `boolean`  | 是否隐藏阴影                                                                                         | false          |
| backdrop                       | `boolean`  | 是否显示透明蒙层                                                                                     | false          |
| defaultVisible                 | `boolean`  | 默认是否显隐，当 `controlled` 为 `false` 时才生效                                                    | false          |
| visible                        | `boolean`  | 用于手动控制浮层显隐，当 `controlled` 为 `true` 时才生效                                             | false          |
| controlled                     | `boolean`  | 是否受控 [说明文档](controlled.md)                                                                   | false          |
| direction                      | `string`   | 按钮组排列方向，可选值为 horizontal、vertical、circle                                                | horizontal     |
| spaceBetween                   | `number`   | 按钮组间距                                                                                           | 10             |
| duration                       | `number`   | 按钮组动画过渡时间，单位 ms                                                                          | 300            |
| scale                          | `number`   | 按钮组缩放比例                                                                                       | .9             |
| reverse                        | `boolean`  | 是否反转方向，当 `direction` 为 `horizontal/vertical` 时才生效                                       | false          |
| sAngle                         | `number`   | 起始角度，当 `direction` 为 `circle` 时才生效                                                        | 0              |
| eAngle                         | `number`   | 终止角度，当 `direction` 为 `circle` 时才生效                                                        | 360            |
| buttons                        | `array`    | 按钮                                                                                                 | []             |
| buttons[].className            | `string`   | 按钮的类名                                                                                           | -              |
| buttons[].label                | `string`   | 按钮的文字                                                                                           | -              |
| buttons[].icon                 | `string`   | 按钮的图标                                                                                           | -              |
| buttons[].hideShadow           | `boolean`  | 是否隐藏阴影                                                                                         | false          |
| buttons[].disabled             | `boolean`  | 是否禁用                                                                                             | false          |
| buttons[].openType             | `string`   | 微信开放能力，可选值为 contact、share、getUserInfo、getPhoneNumber、launchApp、openSetting、feedback | -              |
| buttons[].hoverClass           | `string`   | 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果                                         | default        |
| buttons[].hoverStopPropagation | `boolean`  | 指定是否阻止本节点的祖先节点出现点击态                                                               | false          |
| buttons[].hoverStartTime       | `number`   | 按住后多久出现点击态，单位毫秒                                                                       | 20             |
| buttons[].hoverStayTime        | `number`   | 手指松开后点击态保留时间，单位毫秒                                                                   | 70             |
| buttons[].lang                 | `string`   | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。                                    | en             |
| buttons[].sessionFrom          | `string`   | 会话来源                                                                                             | -              |
| buttons[].sendMessageTitle     | `string`   | 会话内消息卡片标题                                                                                   | 当前标题       |
| buttons[].sendMessagePath      | `string`   | 会话内消息卡片点击跳转小程序路径                                                                     | 当前分享路径   |
| buttons[].sendMessageImg       | `string`   | 会话内消息卡片图片                                                                                   | 截图           |
| buttons[].showMessageCard      | `boolean`  | 显示会话内消息卡片                                                                                   | false          |
| buttons[].appParameter         | `string`   | 打开 APP 时，向 APP 传递的参数                                                                       | -              |
| bind:click                     | `function` | 点击事件                                                                                             | -              |
| bind:getuserinfo               | `function` | 用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与 wx.getUserInfo 返回的一致             | -              |
| bind:contact                   | `function` | 客服消息回调                                                                                         | -              |
| bind:getphonenumber            | `function` | 获取用户手机号回调                                                                                   | -              |
| bind:error                     | `function` | 当使用开放能力时，发生错误的回调                                                                     | -              |
| bind:opensetting               | `function` | 在打开授权设置页后回调                                                                               | -              |
| bind:launchapp     | `function` | 打开 APP 成功的回调，open-type=launchApp时有效                                                                        | -            |
| bind:chooseavatar     | `function` | 获取用户头像回调，open-type=chooseAvatar时有效                                                                        | -            |
| bind:change                    | `function` | 监听状态变化的回调函数                                                                               | -              |

> 更多参数说明请参考微信官方的表单组件 [Button](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)。

### FabButton slot

| 名称   | 描述                                     |
| ------ | ---------------------------------------- |
| action | 自定义操作按钮，当 `action` 为空时才生效 |

### FabButton externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
