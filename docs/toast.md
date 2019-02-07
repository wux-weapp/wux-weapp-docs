# Toast 提示框

一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

## 使用指南

### 在 page.json 中引入组件

```json
{
    "navigationBarTitleText": "Toast",
    "usingComponents": {
        "wux-button": "../../dist/button/index",
        "wux-toast": "../../dist/toast/index"
    }
}
```

### 示例

!> 该组件主要依靠 JavaScript 主动调用，所以一般只需在 wxml 中添加一个组件，并设置 id 为 `#wux-toast` 或其他，之后在 page.js 中调用 `$wuxToast(id)` 获取匹配到的第一个组件实例对象。

```html
<wux-toast id="wux-toast" />

<view class="page">
    <view class="page__hd">
        <view class="page__title">Toast</view>
        <view class="page__desc">提示框</view>
    </view>
    <view class="page__bd page__bd_spacing">
        <wux-button block type="light" bind:click="showToast">Success</wux-button>
        <wux-button block type="light" bind:click="showToastCancel">Cancel</wux-button>
        <wux-button block type="light" bind:click="showToastErr">Forbidden</wux-button>
        <wux-button block type="light" bind:click="showToastText">Text</wux-button>
        <wux-button block type="light" bind:click="showToastIcon">Custom Icon</wux-button>
        <wux-button block type="light" bind:click="showToastReturn">Use return value to close</wux-button>
        <wux-button block type="light" bind:click="showToastPromie">Use promise to know when closed</wux-button>
    </view>
</view>
```

```js
import { $wuxToast } from '../../dist/index'

Page({
    data: {},
    onLoad() {},
    showToast() {
        $wuxToast().show({
            type: 'success',
            duration: 1500,
            color: '#fff',
            text: '已完成',
            success: () => console.log('已完成')
        })

        // The same as above
        // $wuxToast().success('已完成', {
        //     duration: 1500,
        //     color: '#fff',
        //     success: () => console.log('已完成')
        // })
    },
    showToastCancel() {
        $wuxToast().show({
            type: 'cancel',
            duration: 1500,
            color: '#fff',
            text: '取消操作',
            success: () => console.log('取消操作')
        })

        // The same as above
        // $wuxToast().error('取消操作', {
        //     duration: 1500,
        //     color: '#fff',
        //     success: () => console.log('取消操作')
        // })
    },
    showToastErr() {
        $wuxToast().show({
            type: 'forbidden',
            duration: 1500,
            color: '#fff',
            text: '禁止操作',
            success: () => console.log('禁止操作')
        })

        // The same as above
        // $wuxToast().warning('禁止操作', {
        //     duration: 1500,
        //     color: '#fff',
        //     success: () => console.log('禁止操作')
        // })
    },
    showToastText() {
        $wuxToast().show({
            type: 'text',
            duration: 1500,
            color: '#fff',
            text: '文本提示',
            success: () => console.log('文本提示')
        })

        // The same as above
        // $wuxToast().info('文本提示', {
        //     duration: 1500,
        //     color: '#fff',
        //     success: () => console.log('文本提示')
        // })
    },
    showToastIcon() {
        $wuxToast().show({
            type: 'default',
            duration: 1500,
            color: '#fff',
            icon: 'ios-happy',
            text: '自定义图标',
            success: () => console.log('自定义图标')
        })
    },
    showToastReturn() {
        if (this.timeout) clearTimeout(this.timeout)

        const hide = $wuxToast().show({
            type: 'success',
            duration: 1500,
            color: '#fff',
            text: '已完成',
        })

        this.timeout = setTimeout(hide, 1000)
    },
    showToastPromie() {
        const hide = $wuxToast().show({
            type: 'success',
            duration: 1500,
            color: '#fff',
            text: '已完成',
        })

        // hide.promise.then(() => console.log('success'))
        hide.then(() => console.log('success'))
    },
})
```

## 视频演示

[Toast](./_media/toast.mp4 ':include :type=iframe width=375px height=667px')

## API

| 参数 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| options | `object` | 配置项 | - |
| options.prefixCls | `string` | 自定义类名前缀 | wux-toast |
| options.classNames | `any` | 过渡的类名，更多内置过渡效果请参考 [AnimationGroup](animation-group.md) | wux-animate--fadeIn |
| options.type | `string` | 提示类型，可选值为 default、success、cancel、forbidden、text | default |
| options.duration | `number` | 提示延迟时间 | 1500 |
| options.color | `string` | 图标颜色 | #fff |
| options.text | `string` | 提示文本 | - |
| options.icon | `string` | 图标名称 | - |
| options.mask | `boolean` | 是否显示蒙层 | true |
| options.success | `function` | 关闭后的回调函数 | - |

### Toast.method

#### 静态方法

- Toast.show
- Toast.success
- Toast.warning
- Toast.error
- Toast.info

> 以上函数支持参数 Toast(text: string, options: object) 或 Toast(options: object)，调用后会返回一个引用，可以通过该引用手动关闭组件

```
const hide = Toast.show()
hide()

// 返回值支持 promise 接口，可以通过 then/promise.then 方法在关闭后运行 callback
hide.then(callback)
hide.promise.then(callback)
```

#### 销毁方法

- Toast.hide