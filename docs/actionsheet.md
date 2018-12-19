# ActionSheet 上拉菜单

从底部弹出的模态框，提供和当前场景相关的操作菜单。

## 使用指南

### 在 page.json 中引入组件

```json
{
    "navigationBarTitleText": "ActionSheet",
    "usingComponents": {
        "wux-button": "../../dist/button/index",
        "wux-actionsheet": "../../dist/actionsheet/index"
    }
}
```

### 示例

!> 该组件主要依靠 JavaScript 主动调用，所以一般只需在 wxml 中添加一个组件，并设置 id 为 `#wux-actionsheet` 或其他，之后在 page.js 中调用 `$wuxActionSheet(id)` 获取匹配到的第一个组件实例对象。

```html
<wux-actionsheet id="wux-actionsheet" />

<view class="page">
    <view class="page__hd">
        <view class="page__title">ActionSheet</view>
        <view class="page__desc">上拉菜单</view>
    </view>
    <view class="page__bd page__bd_spacing">
        <wux-button block type="light" bind:click="showActionSheet1">原生 ActionSheet</wux-button>
        <wux-button block type="light" bind:click="showActionSheet2">iOS ActionSheet</wux-button>
        <wux-button block type="light" bind:click="showActionSheet3">wx ActionSheet</wux-button>
    </view>
</view>
```

```js
import { $wuxActionSheet } from '../../dist/index'

Page({
    data: {},
    onLoad() {},
    showActionSheet1() {
        wx.showActionSheet({
            itemList: ['实例菜单', '实例菜单']
        })
    },
    showActionSheet2() {
        $wuxActionSheet().showSheet({
            titleText: '自定义操作',
            buttons: [{
                    text: 'Go Dialog'
                },
                {
                    text: 'Go Toast'
                },
            ],
            buttonClicked(index, item) {
                index === 0 && wx.navigateTo({
                    url: '/pages/dialog/index'
                })

                index === 1 && wx.navigateTo({
                    url: '/pages/toast/index'
                })

                return true
            },
            cancelText: '取消',
            cancel() {},
            destructiveText: '删除',
            destructiveButtonClicked() {},
        })
    },
    showActionSheet3() {
        if (this.timeout) clearTimeout(this.timeout)

        const hideSheet = $wuxActionSheet().showSheet({
            theme: 'wx',
            titleText: '三秒后自动关闭',
            buttons: [{
                    text: '实例菜单'
                },
                {
                    text: '实例菜单'
                },
            ],
            buttonClicked(index, item) {
                return true
            },
        })

        this.timeout = setTimeout(hideSheet, 3000)
    },
})
```

## 视频演示

[ActionSheet](./_media/actionsheet.mp4 ':include :type=iframe width=375px height=667px')

## API

| 参数 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| options | <code>object</code> | 配置项 | - |
| options.theme | <code>string</code> | 菜单皮肤，可选值为 ios、wx | ios |
| options.className | <code>string</code> | 自定义类名 | - |
| options.titleText | <code>string</code> | 标题 | - |
| options.buttons | <code>array</code> | 按钮 | [] |
| options.buttons[].text | <code>string</code> | 按钮的文本 | - |
| options.buttons[].icon | <code>string</code> | 按钮的图标 | - |
| options.buttons[].disabled | <code>boolean</code> | 是否禁用 | false |
| options.buttons[].openType | <code>string</code> | 微信开放能力，可选值为 contact、share、getUserInfo、getPhoneNumber、launchApp、openSetting、feedback | - |
| options.buttons[].hoverClass | <code>string</code> | 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果 | wux-actionsheet__button--hover |
| options.buttons[].hoverStopPropagation | <code>boolean</code> | 指定是否阻止本节点的祖先节点出现点击态 | false |
| options.buttons[].hoverStartTime | <code>number</code> | 按住后多久出现点击态，单位毫秒 | 20 |
| options.buttons[].hoverStayTime | <code>number</code> | 手指松开后点击态保留时间，单位毫秒 | 70 |
| options.buttons[].lang | <code>string</code> | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。 | en |
| options.buttons[].sessionFrom | <code>string</code> | 会话来源 | - |
| options.buttons[].sendMessageTitle | <code>string</code> | 会话内消息卡片标题 | 当前标题 |
| options.buttons[].sendMessagePath | <code>string</code> | 会话内消息卡片点击跳转小程序路径 | 当前分享路径 |
| options.buttons[].sendMessageImg | <code>string</code> | 会话内消息卡片图片 | 截图 |
| options.buttons[].showMessageCard | <code>boolean</code> | 显示会话内消息卡片 | false |
| options.buttons[].appParameter | <code>string</code> | 打开 APP 时，向 APP 传递的参数 | - |
| bind:getuserinfo | <code>function</code> | 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致 | - 
| bind:contact | <code>function</code> | 客服消息回调 | - |
| bind:getphonenumber | <code>function</code> | 获取用户手机号回调 | - |
| bind:error | <code>function</code> | 当使用开放能力时，发生错误的回调 | - |
| bind:opensetting | <code>function</code> | 在打开授权设置页后回调 | - |
| options.buttonClicked | <code>function</code> | 按钮点击事件，返回值为 true 时将会关闭组件 | - |
| options.cancelText | <code>string</code> | 取消按钮的文本 | 取消 |
| options.cancel | <code>function</code> | 取消按钮或蒙层点击事件 | - |
| options.destructiveText | <code>string</code> | 删除按钮的文本 | - |
| options.destructiveButtonClicked | <code>function</code> | 删除按钮点击事件 | - |

> 更多参数说明请参考微信官方的表单组件 [Button](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)。

### ActionSheet.method

- ActionSheet.showSheet
- ActionSheet.removeSheet
- ActionSheet.cancel

> ActionSheet.showSheet 函数调用后，会返回一个引用，可以通过该引用手动关闭组件

```
const hide = ActionSheet.showSheet()
hide()
```