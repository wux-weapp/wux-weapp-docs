# App 包裹组件

新的包裹组件，提供重置样式和提供消费上下文的默认环境。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "App",
  "usingComponents": {
    "wux-app": "../../dist/app/index",
    "wux-button": "../../dist/button/index"
  }
}
```

### 示例

> App 组件通过 [`wx://component-export`](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html) 提供上下文方法调用，提供可消费 `dialog.xxx`、`loading.xxx`、`notification.xxx`、`toast.xxx`、`toptips.xxx` 的静态方法，可以简化在多个页面内引入的问题。

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">App</view>
    <view class="page__desc">包裹组件</view>
  </view>
  <view class="page__bd page__bd_spacing">
    <wux-app shadowRoot id="wux-app">
      <wux-button block type="light" bind:click="showDialog">Open dialog</wux-button>
      <wux-button block type="light" bind:click="showLoading">Open loading</wux-button>
      <wux-button block type="light" bind:click="showNotification">Open notification</wux-button>
      <wux-button block type="light" bind:click="showToast">Open toast</wux-button>
      <wux-button block type="light" bind:click="showToptips">Open toptips</wux-button>
    </wux-app>
  </view>
</view>
```

```js
Page({
  onLoad() {
    const App = this.selectComponent('#wux-app')
    const { dialog, loading, notification, toast, toptips } = App.useApp()

    this.showDialog = () =>
      dialog.alert({
        title: 'This is a warning message',
        content: 'some messages...some messages...some messages...',
        confirmText: 'ok',
      })

    this.showLoading = () => {
      loading.show({
        text: 'Loading...',
      })
      setTimeout(() => {
        loading.hide()
      }, 3000)
    }

    this.showNotification = () =>
      notification.show({
        image: 'http://cdn.skyvow.cn/logo.png',
        title: 'Notification Title',
        text: 'This is the content of the notification.',
      })

    this.showToast = () =>
      toast.success({
        text: 'Success!',
      })

    this.showToptips = () =>
      toptips.info({
        text: 'This is a tip at the top',
      })
  },
})
```

!> 内嵌使用场景（如无必要，尽量不做嵌套）

```
<wux-app>
  <wux-comp>
    ...
    <wux-app>...</wux-app>
  </wux-comp>
</wux-app>
```

## 视频演示

[App](./_media/app.mp4 ':include :type=iframe width=375px height=667px')

## API

### App props

| 参数                | 类型            | 描述                                                                       | 默认值  |
| ------------------- | --------------- | -------------------------------------------------------------------------- | ------- |
| prefixCls           | `string`        | 自定义类名前缀                                                             | wux-app |
| wrapCls             | `string`        | 自定义类名                                                                 | -       |
| wrapStyle           | `string,object` | 自定义样式                                                                 | -       |
| shadowRoot          | `boolean`       | 是否影子根节点，默认基于 `<view class="wux-app" />` 包裹一层，提供重置样式 | false   |
| config              | `object`        | App 内组件的全局配置                                                       | -       |
| config.dialog       | `object`        | App 内 [dialog](dialog.md?id=api) 的全局配置                               | -       |
| config.loading      | `object`        | App 内 [loading](loading.md?id=api) 的全局配置                             | -       |
| config.notification | `object`        | App 内 [notification](notification.md?id=api) 的全局配置                   | -       |
| config.toast        | `object`        | App 内 [toast](toast.md?id=api) 的全局配置                                 | -       |
| config.toptips      | `object`        | App 内 [toptips](toptips.md?id=api) 的全局配置                             | -       |

### App slot

| 名称 | 描述       |
| ---- | ---------- |
| -    | 自定义内容 |

### App externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
