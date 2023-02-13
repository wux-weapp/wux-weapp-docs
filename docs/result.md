# Result 结果页

在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Result",
  "usingComponents": {
    "wux-result": "../../dist/result/index"
  }
}
```

### 示例

```html
<wux-result
  title="支付成功"
  label="微信小程序自定义组件 https://github.com/wux-weapp/wux-weapp"
  buttons="{{ buttons }}"
  extra="Copyright © 2018 wux weapp"
  fixed
  bind:click="onClick"
/>
```

```js
Page({
  data: {
    buttons: [
      {
        type: 'balanced',
        block: true,
        text: '确定',
      },
      {
        type: 'light',
        block: true,
        text: '返回',
      },
    ],
  },
  onClick(e) {
    console.log(e)
    const { index } = e.detail

    index === 0 &&
      wx.showModal({
        title: 'Thank you for your support!',
        showCancel: !1,
      })

    index === 1 && wx.navigateBack()
  },
})
```

## 视频演示

[Result](./_media/result.mp4 ':include :type=iframe width=375px height=667px')

## API

### Result props

| 参数                | 类型       | 描述                                                                                                  | 默认值     |
| ------------------- | ---------- | ----------------------------------------------------------------------------------------------------- | ---------- |
| prefixCls           | `string`   | 自定义类名前缀                                                                                        | wux-result |
| icon                | `any`      | 图标的配置项                                                                                          | -          |
| icon.type           | `string`   | 图标的类型，可选值为 success、success_no_circle、info、warn、waiting、cancel、download、search、clear | success    |
| icon.size           | `number`   | 图标的大小                                                                                            | 93         |
| icon.color          | `string`   | 图标的颜色                                                                                            | #33cd5f    |
| title               | `string`   | 标题                                                                                                  | -          |
| label               | `string`   | 描述                                                                                                  | -          |
| buttons             | `array`    | 按钮列表                                                                                              | []         |
| extra               | `string`   | 底部内容                                                                                              | -          |
| fixed               | `boolean`  | 底部内容是否定位在底部                                                                                | false      |
| bind:click          | `function` | 点击事件                                                                                              | -          |
| bind:getuserinfo    | `function` | 用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与 wx.getUserInfo 返回的一致              | -          |
| bind:contact        | `function` | 客服消息回调                                                                                          | -          |
| bind:getphonenumber | `function` | 获取用户手机号回调                                                                                    | -          |
| bind:error          | `function` | 当使用开放能力时，发生错误的回调                                                                      | -          |
| bind:opensetting    | `function` | 在打开授权设置页后回调                                                                                | -          |
| bind:launchapp     | `function` | 打开 APP 成功的回调，open-type=launchApp时有效                                                                        | -            |
| bind:chooseavatar     | `function` | 获取用户头像回调，open-type=chooseAvatar时有效                                                                        | -            |

> 按钮列表：buttons 参数请参考 [Button](button.md)。

### Result slot

| 名称   | 描述             |
| ------ | ---------------- |
| -      | 自定义标题或描述 |
| header | 自定义图标       |
| footer | 自定义底部内容   |

### Result externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
