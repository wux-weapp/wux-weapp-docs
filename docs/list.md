# List 列表

基础布局组件，布局时基于 `cell-group` 和 `cell` 来定义信息区块的外部框架。

## 使用指南

### 在 page.json 中引入组件

```json
{
    "navigationBarTitleText": "List",
    "usingComponents": {
        "wux-cell-group": "../../dist/cell-group/index",
        "wux-cell": "../../dist/cell/index"
    }
}
```

### 示例

```html
<view class="page">
    <view class="page__hd">
        <view class="page__title">List</view>
        <view class="page__desc">列表</view>
    </view>
    <view class="page__bd">
        <wux-cell-group title="带说明的列表项">
            <wux-cell title="标题文字"></wux-cell>
            <wux-cell title="禁用状态" disabled></wux-cell>
        </wux-cell-group>
        <wux-cell-group title="带图标、说明的列表项">
            <wux-cell thumb="http://cdn.skyvow.cn/logo.png" title="标题文字" extra="说明文字"></wux-cell>
            <wux-cell thumb="http://cdn.skyvow.cn/logo.png" title="标题文字" extra="说明文字"></wux-cell>
        </wux-cell-group>
        <wux-cell-group title="带跳转的列表项" label="底部说明文字">
            <wux-cell title="标题文字" is-link extra="说明文字"></wux-cell>
            <wux-cell title="标题文字" is-link label="附加描述" extra="说明文字"></wux-cell>
            <wux-cell title="只显示箭头" is-link></wux-cell>
            <wux-cell title="跳转到首页" is-link url="/pages/index/index" open-type="switchTab"></wux-cell>
        </wux-cell-group>
        <wux-cell-group title="微信开放能力">
            <wux-cell title="打开客服会话" is-link open-type="contact" bind:contact="onContact"></wux-cell>
            <wux-cell title="触发用户转发" is-link open-type="share"></wux-cell>
            <wux-cell title="获取用户信息" is-link open-type="getUserInfo" bind:getuserinfo="onGotUserInfo"></wux-cell>
            <wux-cell title="获取用户手机号" is-link open-type="getPhoneNumber" bind:getphonenumber="onGotPhoneNumber"></wux-cell>
        </wux-cell-group>
    </view>
</view>
```

```js
Page({
    onContact(e) {
        console.log('onContact', e)
    },
    onGotUserInfo(e) {
        console.log('onGotUserInfo', e)
    },
    onGotPhoneNumber(e) {
        console.log('onGotPhoneNumber', e)
    },
})
```

## 视频演示

[List](./_media/list.mp4 ':include :type=iframe width=375px height=667px')

## API

### CellGroup props

| 参数 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| prefixCls | `string` | 自定义类名前缀 | wux-cell-group |
| title | `string` | 标题 | - |
| label | `string` | 描述 | - |

### CellGroup externalClasses

| 名称 | 描述 |
| --- | --- |
| wux-class | 根节点样式类 |

### Cell props

| 参数 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| prefixCls | `string` | 自定义类名前缀 | wux-cell |
| disabled | `boolean` | 是否禁用 | false |
| openType | `string` | 跳转方式，可选值为 navigateTo、redirectTo、switchTab、navigateBack、reLaunch；微信开放能力，可选值为 contact、share、getUserInfo、getPhoneNumber、launchApp、openSetting、feedback | navigateTo |
| hoverClass | `string` | 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果 | default |
| hoverStopPropagation | `boolean` | 指定是否阻止本节点的祖先节点出现点击态 | false |
| hoverStartTime | `number` | 按住后多久出现点击态，单位毫秒 | 20 |
| hoverStayTime | `number` | 手指松开后点击态保留时间，单位毫秒 | 70 |
| lang | `string` | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。 | en |
| sessionFrom | `string` | 会话来源 | - |
| sendMessageTitle | `string` | 会话内消息卡片标题 | 当前标题 |
| sendMessagePath | `string` | 会话内消息卡片点击跳转小程序路径 | 当前分享路径 |
| sendMessageImg | `string` | 会话内消息卡片图片 | 截图 |
| showMessageCard | `boolean` | 显示会话内消息卡片 | false |
| appParameter | `string` | 打开 APP 时，向 APP 传递的参数 | - |
| thumb | `string` | 左侧缩略图 | - |
| title | `string` | 左侧标题 | - |
| label | `string` | 标题下方的描述信息 | - |
| extra | `string` | 右侧内容 | - |
| hasLine | `boolean` | 是否有底部横线 | true |
| isLink | `boolean` | 是否展示右侧箭头并开启尝试以 url 跳转 | - |
| url | `string` | 跳转链接 | - |
| delta | `number` | 当 open-type 为 'navigateBack' 时有效，表示回退的层数 | 1 |
| bind:click | `function` | 点击事件 | - |
| bind:getuserinfo | `function` | 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致 | - 
| bind:contact | `function` | 客服消息回调 | - |
| bind:getphonenumber | `function` | 获取用户手机号回调 | - |
| bind:error | `function` | 当使用开放能力时，发生错误的回调 | - |
| bind:opensetting | `function` | 在打开授权设置页后回调 | - |

> 更多参数说明请参考微信官方的表单组件 [Button](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)。

### Cell slot

| 名称 | 描述 |
| --- | --- |
| - | 自定义标题或描述 |
| header | 自定义左侧缩略图 |
| footer | 自定义右侧内容 |

### Cell externalClasses

| 名称 | 描述 |
| --- | --- |
| wux-class | 根节点样式类 |