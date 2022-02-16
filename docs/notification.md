# Notification 通知

用于展现通知提示框，在窗口顶部显示。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Notification",
  "usingComponents": {
    "wux-button": "../../dist/button/index",
    "wux-notification": "../../dist/notification/index"
  }
}
```

### 示例

!> 该组件主要依靠 JavaScript 主动调用，所以一般只需在 wxml 中添加一个组件，并设置 id 为 `#wux-notification` 或其他，之后在 page.js 中调用 `$wuxNotification(id)` 获取匹配到的第一个组件实例对象。

```html
<wux-notification id="wux-notification" />

<view class="page">
  <view class="page__hd">
    <view class="page__title">Notification</view>
    <view class="page__desc">通知</view>
  </view>
  <view class="page__bd page__bd_spacing">
    <wux-button block type="light" bind:click="showNotification"
      >Show Notification</wux-button
    >
    <wux-button block type="light" bind:click="closeNotification"
      >Close Notification</wux-button
    >
    <wux-button block type="light" bind:click="showNotificationReturn"
      >Use return value to close</wux-button
    >
    <wux-button block type="light" bind:click="showNotificationPromise"
      >Use promise to know when closed</wux-button
    >
  </view>
</view>
```

```js
import { $wuxNotification } from '../../dist/index'

Page({
  data: {},
  onLoad() {},
  showNotification() {
    this.closeNotification = $wuxNotification().show({
      image: 'http://cdn.skyvow.cn/logo.png',
      title: '宝宝',
      text: '嘤嘤嘤，人家拿小拳拳捶你胸口!!!',
      data: {
        message: '逗你玩的!!!',
      },
      duration: 3000,
      onClick(data) {
        console.log(data)
      },
      onClose(data) {
        console.log(data)
      },
    })
  },
  showNotificationReturn() {
    if (this.timeout) clearTimeout(this.timeout)

    const hide = $wuxNotification().show({
      image: 'http://cdn.skyvow.cn/logo.png',
      title: '宝宝',
      text: '嘤嘤嘤，人家拿小拳拳捶你胸口!!!',
      data: {
        message: '逗你玩的!!!',
      },
      duration: 3000,
    })

    this.timeout = setTimeout(hide, 1000)
  },
  showNotificationPromise() {
    const hide = $wuxNotification().show({
      image: 'http://cdn.skyvow.cn/logo.png',
      title: '宝宝',
      text: '嘤嘤嘤，人家拿小拳拳捶你胸口!!!',
      data: {
        message: '逗你玩的!!!',
      },
      duration: 3000,
    })

    // hide.promise.then(() => console.log('success'))
    hide.then(() => console.log('success'))
  },
})
```

## 视频演示

[Notification](./_media/notification.mp4 ':include :type=iframe width=375px height=667px')

## API

| 参数               | 类型       | 描述                                                                    | 默认值                   |
| ------------------ | ---------- | ----------------------------------------------------------------------- | ------------------------ |
| options            | `object`   | 配置项                                                                  | -                        |
| options.prefixCls  | `string`   | 自定义类名前缀                                                          | wux-notification         |
| options.classNames | `any`      | 过渡的类名，更多内置过渡效果请参考 [AnimationGroup](animation-group.md) | wux-animate--slideInDown |
| options.image      | `string`   | 通知的图标                                                              | -                        |
| options.title      | `string`   | 通知的标题                                                              | -                        |
| options.text       | `string`   | 通知的文本                                                              | -                        |
| options.duration   | `number`   | 多少毫秒后消失                                                          | 3000                     |
| options.data       | `any`      | 自定义数据传给 onClick、onClose                                         | -                        |
| options.onClick    | `function` | 点击后的回调函数                                                        | -                        |
| options.onClose    | `function` | 消失后的回调函数                                                        | -                        |

### Notification.method

- Notification.show
- Notification.hide

> Notification.show 函数调用后，会返回一个引用，可以通过该引用手动关闭组件

```
const hide = Notification.show()
hide()

// 返回值支持 promise 接口，可以通过 then/promise.then 方法在关闭后运行 callback
hide.then(callback)
hide.promise.then(callback)
```
