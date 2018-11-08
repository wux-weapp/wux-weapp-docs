# FloatingButton 浮动按钮

用于展现浮动按钮，预设 9 种颜色 `light`, `stable`, `positive`, `calm`, `assertive`, `balanced`, `energized`, `royal`, `dark` 可选用。

## 使用指南

### 在 page.json 中引入组件

```json
{
    "navigationBarTitleText": "FloatingButton",
    "usingComponents": {
        "wux-floating-button": "../../dist/floating-button/index"
    }
}
```

### 示例

```html
<wux-floating-button position="{{ position }}" theme="{{ theme }}" buttons="{{ buttons }}" bind:change="onChange" bind:click="onClick" bind:contact="onContact" bind:getuserinfo="onGotUserInfo" />

<view class="page">
    <view class="page__hd">
        <view class="page__title">FloatingButton</view>
        <view class="page__desc">浮动按钮</view>
    </view>
    <view class="page__bd">
        <view class="weui-cells weui-cells_after-title">
            <view class="weui-cell weui-cell_select">
                <view class="weui-cell__hd weui-cell__hd_in-select-after">
                    <view class="weui-label">Position</view>
                </view>
                <view class="weui-cell__bd">
                    <picker bindchange="pickerChange1" value="{{ typeIndex }}" range="{{ types }}">
                        <view class="weui-select weui-select_in-select-after">{{ types[typeIndex] }}</view>
                    </picker>
                </view>
            </view>
            <view class="weui-cell weui-cell_select">
                <view class="weui-cell__hd weui-cell__hd_in-select-after">
                    <view class="weui-label">Theme</view>
                </view>
                <view class="weui-cell__bd">
                    <picker bindchange="pickerChange2" value="{{ colorIndex }}" range="{{ colors }}">
                        <view class="weui-select weui-select_in-select-after">{{ colors[colorIndex] }}</view>
                    </picker>
                </view>
            </view>
        </view>
    </view>
</view>
```

```js
const icon = 'data:image/png;base64,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'

Page({
    data: {
        types: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
        typeIndex: 3,
        colors: ['light', 'stable', 'positive', 'calm', 'balanced', 'energized', 'assertive', 'royal', 'dark'],
        colorIndex: 4,
        buttons: [{
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
        ],
        position: 'bottomRight',
    },
    onClick(e) {
        console.log('onClick', e.detail)
        if (e.detail.index === 3) {
            wx.switchTab({
                url: '/pages/index/index'
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
    pickerChange1(e) {
        const typeIndex = e.detail.value
        const position = this.data.types[typeIndex]

        this.setData({
            typeIndex,
            position,
        })
    },
    pickerChange2(e) {
        const colorIndex = e.detail.value
        const theme = this.data.colors[colorIndex]

        this.setData({
            colorIndex,
            theme,
        })
    },
})
```

## 视频演示

[FloatingButton](./_media/floating-button.mp4 ':include :type=iframe width=375px height=667px')

## API

### FloatingButton props

| 参数 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| theme | <code>string</code> | 主题色，可选值为 light、stable、positive、calm、assertive、balanced、energized、royal、dark | balanced |
| position | <code>string</code> | 按钮的位置，可选值为 topLeft、topRight、bottomLeft、bottomRight | bottomRight |
| action | <code>string</code> | 操作按钮的图标 | - |
| actionRotate | <code>boolean</code> | 操作按钮是否旋转动画 | true |
| backdrop | <code>boolean</code> | 是否显示透明蒙层 | false |
| defaultVisible | <code>boolean</code> | 默认是否显隐，当 controlled 为 false 时才生效 | false |
| visible | <code>boolean</code> | 用于手动控制浮层显隐，当 controlled 为 true 时才生效 | false |
| controlled | <code>boolean</code> | 是否受控 [说明文档](controlled.md) | false |
| buttons | <code>array</code> | 按钮 | [] |
| buttons[].className | <code>string</code> | 按钮的类名 | - |
| buttons[].label | <code>string</code> | 按钮的文字 | - |
| buttons[].icon | <code>string</code> | 按钮的图标 | - |
| buttons[].disabled | <code>boolean</code> | 是否禁用 | false |
| buttons[].openType | <code>string</code> | 微信开放能力，可选值为 contact、share、getUserInfo、getPhoneNumber、launchApp、openSetting、feedback | - |
| buttons[].hoverClass | <code>string</code> | 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果 | wux-speed-dial__button--hover |
| buttons[].hoverStopPropagation | <code>boolean</code> | 指定是否阻止本节点的祖先节点出现点击态 | false |
| buttons[].hoverStartTime | <code>number</code> | 按住后多久出现点击态，单位毫秒 | 20 |
| buttons[].hoverStayTime | <code>number</code> | 手指松开后点击态保留时间，单位毫秒 | 70 |
| buttons[].lang | <code>string</code> | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。 | en |
| buttons[].sessionFrom | <code>string</code> | 会话来源 | - |
| buttons[].sendMessageTitle | <code>string</code> | 会话内消息卡片标题 | 当前标题 |
| buttons[].sendMessagePath | <code>string</code> | 会话内消息卡片点击跳转小程序路径 | 当前分享路径 |
| buttons[].sendMessageImg | <code>string</code> | 会话内消息卡片图片 | 截图 |
| buttons[].showMessageCard | <code>boolean</code> | 显示会话内消息卡片 | false |
| buttons[].appParameter | <code>string</code> | 打开 APP 时，向 APP 传递的参数 | - |
| bind:click | <code>function</code> | 点击事件 | - |
| bind:getuserinfo | <code>function</code> | 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致 | - 
| bind:contact | <code>function</code> | 客服消息回调 | - |
| bind:getphonenumber | <code>function</code> | 获取用户手机号回调 | - |
| bind:error | <code>function</code> | 当使用开放能力时，发生错误的回调 | - |
| bind:opensetting | <code>function</code> | 在打开授权设置页后回调 | - |
| bind:change | <code>function</code> | 监听状态变化的回调函数 | - |

> 更多参数说明请参考微信官方的表单组件 [Button](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)。