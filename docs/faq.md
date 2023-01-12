# FAQ

### 如何修改 Wux Weapp 组件的默认样式？

- `Page` 直接写样式覆盖，可能会导致全局污染
- `wux-class` 相关属性，只能修改指定 `view` 的样式（某些时候需要添加 `!important` 覆盖属性）
- `prefixClass` 修改样式前缀，所有的样式需要重写（建议 `Copy` 一份源码样式，改一下前缀及需要改变的样式），不会影响相同组件的样式
- 直接修改对应组件的源码，可能会导致所有相关组件及被引用的组件发生变化，谨慎使用
- 以上几种方式酌情选择

### 我只想使用 Button/Icon 等组件，但似乎我必须引入整个 dist 文件？

参考：[组件库文件体积过大的问题](quickstart.md)

### 当我动态改变 defaultValue 的时候它并没有生效？

参考：[受控组件](controlled.md)

### 我引入 Wux Weapp 组件后，为什么样式不显示，控制台也没有报错？

参考：[支持环境](introduce.md)

### 当我使用 Calendar/Toast 等组件时，报错 `无法找到对应的组件，请按文档说明使用组件` 是什么问题？

- 检查 `page.json` 文件是否引入组件以及路径是否正确
- 检查 `page.wxml` 文件是否引入组件
- 检查 `page.js` 是否正确调用组件

### 当我使用 PopupSelect/Select 组件时，无法选中元素是什么问题？

参考：[select](https://github.com/wux-weapp/wux-weapp/issues/299)

### 当我使用 mpvue/wepy 第三方框架时无法正确引入组件？

参考：[mpvue、wepy 接入](https://github.com/wux-weapp/wux-weapp/issues/197)

### 我没法通过 npm 安装 Wux Weapp 组件库或无法安装最新版本？

参考：[npm 安装 3.6.0+ 找不到版本的问题](https://github.com/wux-weapp/wux-weapp/issues/265)

### 当我设置 xxxx="true" (如 controlled="true") 的时候它并没有生效？

`Boolean` 类型，应该这么写 `xxxx="{{ true }}"`，而非 `string` 类型 `xxxx="true"`

### 如何关闭 iOS 自带振动反馈?

参考：[怎么关闭 pick view 的手机震动 vibrate](https://github.com/wux-weapp/wux-weapp/issues/313)

### 如何解决自定义弹窗后禁止屏幕滚动（滚动穿透）的问题？

建议在弹出层加上 `catchtouchmove` 事件

### 当我使用 textarea 等组件时层级太高遮挡其他组件，如何解决？

- 参考：[cover-view/cover-image](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html)
- 建议使用 `wx:if` 控制显隐

### 你们有接受捐助的渠道吗，比如支付宝或者微信支付？

![alipay](_images/tinified/alipay.jpg ':size=256')
![wxpay](_images/tinified/wxpay.jpg ':size=256')
