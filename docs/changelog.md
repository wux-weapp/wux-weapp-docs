# 更新日志

`Wux Weapp` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

- 修订版本号（0.0.x）：向下兼容的 bugfix 修复。
- 次版本号（0.x.0）：含有新特性的向下兼容的版本。
- 主版本号（x.0.0）：含有破坏性更新和新特性，不向下兼容的版本。

## v 3.11.3 (2024-04-25)

- 🐞 更新组件：DatePicker - 日期选择器 修复 value 输入错误
- 🐞 更新组件：DatePickerView - 日期选择器 修复 value 输入错误

## v 3.11.2 (2024-04-24)

- 🔥 升级注意：适配 PC 小程序
- 🐞 更新组件：DatePicker - 日期选择器 新增 tillNow 属性
- 🐞 更新组件：DatePickerView - 日期选择器 新增 tillNow 属性
- 🐞 更新组件：Dialog - 对话框 修复 prompt 模式下 input placeholder 文本对齐的问题
- 🐞 更新组件：InputNumber - 数字输入框 修复 placeholder 文本对齐的问题
- 🐞 更新组件：PickerView - 单列选择器 新增 labelImage 属性，支持自定义 label 显示图像
- 🐞 更新组件：SearchBar - 搜索栏 修复 placeholder 文本对齐的问题

## v 3.11.1 (2024-03-21)

- 🐞 更新组件：CascaderView - 级联选择视图 修复 npm 导入项目，[cascader-view 组件编译错误](https://github.com/wux-weapp/wux-weapp/issues/424)

## v 3.11.0 (2024-03-18)

- 💄 增加组件：ESign - 电子签名
- 💄 增加组件：SafeArea - 安全区
- 💄 增加组件：SelectorGroup - 选择组
- 🐞 更新组件：Badge - 徽章 新增 position & backgroundColor & hideShadow & title 属性
- 🐞 更新组件：Calendar - 日历 修复日历组件跳无法找到对应组件 [#420](https://github.com/wux-weapp/wux-weapp/pull/420)
- 🐞 更新组件：Checkbox - 复选框 新增 hasLine & withListComponent & iconPosition & iconSize & iconOn & iconOff 属性
- 🐞 更新组件：Form - 表单 新增 validate & validateTrigger & preserve & rules & validateFirst & hidden 等属性，支持表单验证功能
- 🐞 更新组件：Index - 索引选择器 新增 indicatorPosition 属性
- 🐞 更新组件：Input - 文本输入框 新增 visibilityToggle 属性，支持密码可见
- 🐞 更新组件：List - 列表 新增 align & hasLine 属性
- 🐞 更新组件：Popover - 气泡框 新增 useSlot & slotRect & relativeRect 属性
- 🐞 更新组件：Popup - 弹出框 新增 safeArea & safeAreaStyle 属性，支持安全区适配
- 🐞 更新组件：PopupSelect - 下拉框 新增 virtualized 属性，支持使用虚拟列表
- 🐞 更新组件：Radio - 单选框 新增 hasLine & withListComponent & iconPosition & iconSize & iconOn & iconOff 属性
- 🐞 更新组件：Selectable - 选框组 新增 iconSize & iconOn & iconOff 属性
- 🐞 更新组件：TabBar - 标签栏 新增 safeArea & safeAreaStyle 属性，修复 safearea 兼容新机

## v 3.10.1 (2023-07-13)

- 🐞 更新组件：CascaderView - 级联选择视图 修复 json 引入错误的组件路径 [#418](https://github.com/wux-weapp/wux-weapp/pull/418)
- 🐞 更新组件：Form - 表单 修复 resetFields 支持传空，重置表单内所有控件 [#416](https://github.com/wux-weapp/wux-weapp/pull/416)
- 🐞 更新组件：InputNumber - 数字输入框 支持输入小数功能；新增 digits 属性，格式化到小数点后固定位数，设置为 0 表示格式化到整数 [#398](https://github.com/wux-weapp/wux-weapp/pull/398)

## v 3.10.0 (2023-04-10)

- 💄 增加组件：App - 包裹组件
- 💄 增加组件：CascaderView - 级联选择视图
- 💄 增加组件：Ellipsis - 文本省略
- 💄 增加组件：FloatingPanel - 浮动面板
- 💄 增加组件：Footer - 页脚
- 🐞 更新组件：Accordion - 手风琴 新增 mode & bodyStyle 属性
- 🐞 更新组件：Backdrop - 背景幕 新增 mountOnEnter & unmountOnExit & visible 属性，支持 showed & closed & click 事件
- 🐞 更新组件：Button - 按钮 支持 [`wx://form-field-button`](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html#%E5%86%85%E7%BD%AE%20behaviors) 使 form 组件可以识别到这个自定义组件内部的 button
- 🐞 更新组件：Cascader - 级联选择器 基于 `CascaderView` 组件重构，新增 cancelText & confirmText & full & height & skipAnimation 属性
- 🐞 更新组件：Checkbox - 复选框 新增 mode & bodyStyle & disabled & readOnly 属性
- 🐞 更新组件：Input - 文本输入框 新增 readOnly & onlyShowClearWhenFocus & min & max 属性
- 🐞 更新组件：List - 列表 新增 mode & bodyStyle 属性
- 🐞 更新组件：Popup - 弹出框 新增 containerStyle & contentStyle & bodyStyle 属性，支持 showed 事件
- 🐞 更新组件：PopupSelect - 下拉框 新增 notFoundContent 属性，支持用 OptGroup 进行选项分组
- 🐞 更新组件：Prompt - 提示消息 新增 wrapStyle 属性
- 🐞 更新组件：Radio - 单选框 新增 mode & bodyStyle & disabled & readOnly 属性
- 🐞 更新组件：SearchBar - 搜索栏 新增 onlyShowClearWhenFocus 属性
- 🐞 更新组件：Select - 下拉框 新增 notFoundContent 属性，支持用 OptGroup 进行选项分组
- 🐞 更新组件：Selectable - 选框组 新增 readOnly 属性
- 🐞 更新组件：Switch - 开关选择器 新增 loading & checkedText & uncheckedText 属性
- 🐞 更新组件：Tabs - 标签页 新增 justify & activeLineMode 属性
- 🐞 更新组件：Textarea - 多行输入框 新增 readOnly 属性

## v 3.9.0 (2023-02-13)

- 💄 增加组件：WaterMark - 水印
- 🐞 更新组件：ActionSheet - 上拉菜单 新增支持 bindlaunchapp & bindchooseavatar 事件
- 🐞 更新组件：Button - 按钮 新增支持 bindlaunchapp & bindchooseavatar 事件
- 🐞 更新组件：List - 列表 新增支持 bindlaunchapp & bindchooseavatar 事件
- 🐞 更新组件：Dialog - 对话框 新增支持 bindlaunchapp & bindchooseavatar 事件
- 🐞 更新组件：FabButton - 浮动按钮 新增支持 bindlaunchapp & bindchooseavatar 事件
- 🐞 更新组件：Prompt - 提示消息 新增支持 bindlaunchapp & bindchooseavatar 事件
- 🐞 更新组件：Result - 结果页 新增支持 bindlaunchapp & bindchooseavatar 事件
- 🐞 更新组件：Image - 图片 新增支持 webp & show-menu-by-longpress 属性
- 🐞 更新组件：Index - 索引选择器 新增支持右侧索引条激活态 & 组件滚动性能优化
- 🐞 更新组件：Input - 文本输入框 新增支持 always-embed & hold-keyboard & safe-password-\*\* 等属性
- 🐞 更新组件：Textarea - 多行输入框 新增支持 hold-keyboard & disable-default-padding & confirm-type & confirm-hold 属性
- 🐞 更新组件：Tabs - 标签页 修复 tabs 设置 scroll 后，如果点击到屏幕边缘的标签，tab 无法跟随滚动 [#400](https://github.com/wux-weapp/wux-weapp/pull/400)
- 🐞 更新组件：Toptips - 顶部提示 修复 text 文本样式不生效
- 🐞 更新组件：Select - 下拉框 修复初始化 max 为 NAN 错误

## v 3.8.9 (2022-05-07)

- 🐞 更新组件：FilterBar - 筛选栏 修复 filter text type common groups bug [#410](https://github.com/wux-weapp/wux-weapp/pull/410)
- 🐞 更新组件：Result - 结果页 修复 slot=header 失效 [#405](https://github.com/wux-weapp/wux-weapp/issues/405)
- 🐞 更新组件：Slider - 滑动选择器 新增 slider 组件点击改变 [#393](https://github.com/wux-weapp/wux-weapp/issues/393)
- 🐞 更新组件：Button - 按钮 新增 shape 属性，支持设置按钮形状：圆角、直角 [#327](https://github.com/wux-weapp/wux-weapp/issues/327)
- 🐞 更新组件：Rater - 评分 修复 value 为 0 时不显示 icon
- 🐞 更新组件：Input - 文本输入框 新增 labelWrap 属性，支持 label 标签的文本换行方式；新增 requiredMark 属性，支持切换必选样式
- 🐞 更新组件：TabBar - 标签栏 修复 safearea 兼容新机

## v 3.8.8 (2021-04-12)

- 🐞 更新组件：FilterBar - 筛选栏 修复 标签使用错误
- 🐞 更新组件：Qrcode - 二维码 新增 whiteSpace 属性，支持留白
- 🐞 更新组件：Card - 卡片 新增 hoverClass 属性，支持点击态效果 [#397](https://github.com/wux-weapp/wux-weapp/pull/397)
- 🐞 更新组件：Index - 索引选择器 修复 点击定位偏移问题 [#399](https://github.com/wux-weapp/wux-weapp/pull/399)
- 🐞 更新组件：Dialog - 对话框 修复 对话框按钮颜色问题 [#402](https://github.com/wux-weapp/wux-weapp/pull/402)

## v 3.8.7 (2020-08-16)

- 🐞 更新组件：FilterBar - 筛选栏 修复 filter 中 radio 类型无法选中的问题 [#391](https://github.com/wux-weapp/wux-weapp/issues/391)

## v 3.8.6 (2020-06-27)

- 🐞 更新组件：List - 列表 新增 hasLine 属性 [#356](https://github.com/wux-weapp/wux-weapp/issues/356)
- 🐞 更新组件：Pagination - 分页器 新增 prev 和 next 支持自定义的 function [#362](https://github.com/wux-weapp/wux-weapp/issues/362)
- 🐞 更新组件：FilterBar - 筛选栏 修复右上角的选项提示显示错误 [#383](https://github.com/wux-weapp/wux-weapp/issues/383)
- 🔥 修复组件 wx:key 警告问题，涉及的组件为 `Calendar`、`Card`、`Cascader`、`Checkbox`、`Dialog`、`FilterBar`、`Index`、`Pagination`、`Radio`、`Rater`、`Skeleton`、`Silder`、`SwipeAction` [#369](https://github.com/wux-weapp/wux-weapp/issues/369)

## v 3.8.5 (2019-12-20)

- 🐞 更新组件：List - 列表 优化箭头图标
- 🐞 更新组件：Input - 文本输入框 修复 `align-items` 拼写错误，导致内容不居中的问题
- 🐞 更新组件：Textarea - 多行输入框 修复 `align-items` 拼写错误，导致内容不居中的问题
- 🐞 更新组件：Picker - 选择器 修复 `defaultFieldNames` 自定义后二次弹窗显示空白问题 [#352](https://github.com/wux-weapp/wux-weapp/issues/352)

## v 3.8.4 (2019-12-16)

- 🔥 升级注意：修复微信小程序构建 npm 失败的问题

## v 3.8.3 (2019-12-07)

- 🐞 更新组件：Card - 卡片 修复圆角问题
- 🐞 更新组件：Badge - 徽章 修复文本对齐问题
- 升级注意：新增 [定制主题](customize-theme.md) 功能，具体使用方法请参考对应文档

## v 3.8.2 (2019-09-27)

- 🐞 更新组件：DatePicker - 日期选择器 修复日期显示错误 [#316](https://github.com/wux-weapp/wux-weapp/issues/316)
- 🐞 更新组件：Cascader - 级联选择器 修复初始值设置不正确 [#320](https://github.com/wux-weapp/wux-weapp/issues/320)

## v 3.8.1 (2019-09-10)

- 🐞 更新组件：SwipeAction - 滑动操作 新增 data 属性
- 🐞 更新组件：DatePicker - 日期选择器 修复日期在 iOS 端的问题 [#304](https://github.com/wux-weapp/wux-weapp/issues/304)
- 🐞 更新组件：Popover - 气泡框 修复 popover 开启 mask 遮罩时的点击问题 [#308](https://github.com/wux-weapp/wux-weapp/issues/308)
- 🔥 升级注意：修复 iOS 低版本下提示 Object.getOwnPropertyDescriptors 报错的问题 [#306](https://github.com/wux-weapp/wux-weapp/issues/306)

## v 3.8.0 (2019-08-26)

- 💄 增加组件：VirtualList - 虚拟列表
- 🐞 更新组件：InputNumber - 数字输入框 修复动态设置 min、max 无法点击的问题
- 🐞 更新组件：Image - 图片 修复 shape 为 thumbnail 时图片溢出的问题
- 🐞 更新组件：Index - 索引选择器 新增支持振动反馈效果
- 🐞 更新组件：Button - 按钮 兼容 "style":"v2" 新版的组件样式，涉及的组件为 `Button`、`List`、`Dialog`、`FabButton` [#289](https://github.com/wux-weapp/wux-weapp/issues/289)
- 🐞 更新组件：KeyBoard - 数字键盘 keyboard 回调问题 [#290](https://github.com/wux-weapp/wux-weapp/issues/290)
- 🐞 更新组件：TabBar - 标签栏 新增 backgroundColor 属性 [#298](https://github.com/wux-weapp/wux-weapp/issues/298)

## v 3.7.2 (2019-07-29)

- 🐞 更新组件：Picker - 选择器 修复 mode 为 month 时，取得 label 却是日期 bug [#276](https://github.com/wux-weapp/wux-weapp/issues/276)
- 🐞 更新组件：Utility - 工具类 修复 wux-hairline--buttom 单词错误 [#281](https://github.com/wux-weapp/wux-weapp/issues/281)

## v 3.7.1 (2019-07-12)

- 🐞 更新组件：NoticeBar - 通告栏 优化组件，暴露 resetAnimation 等方法支持外部调用
- 🐞 更新组件：Card - 卡片 新增 actions 属性
- 🐞 更新组件：Checkbox - 复选框 支持包裹滑动组件使用
- 🐞 更新组件：Input - 文本输入框 修复点击删除按钮显示 object 的问题
- 🐞 更新组件：Textarea - 多行输入框 修复点击删除按钮显示 object 的问题

## v 3.7.0 (2019-07-11)

- 🐞 更新组件：InputNumber - 数字输入框 修复精度问题
- 🐞 更新组件：Dialog - 对话框 新增支持微信开放能力
- 🐞 更新组件：FilterBar - 筛选栏 新增 confirmText、cancelText 参数，支持设置默认值及动态传入数据
- 🐞 更新组件：Gallery - 画廊 新增 icon 属性，支持自定义图标
- 💄 增加组件：CascaderPickerView - 级联选择器 嵌入页面的联级选择器
- 💄 增加组件：MultiPickerView - 多列选择器 嵌入页面的多列滚动选择器
- 💄 增加组件：PickerView - 单列选择器 嵌入页面的单列滚动选择器
- 💄 增加组件：Picker - 选择器 弹出框形式的选择器，支持表单提交
- 💄 增加组件：DatePickerView - 日期选择器 嵌入页面的日期选择器
- 💄 增加组件：DatePicker - 日期选择器 弹出框形式的日期选择器，支持表单提交
- 💄 增加组件：PopupSelect - 下拉框 类似于 Select 组件，但其功能更为强大，并且支持表单提交

## v 3.6.1 (2019-06-14)

- 🐞 更新组件：Input - 文本输入框 修复 input value 不显示的问题

## v 3.6.0 (2019-06-09)

- 💄 增加组件：Form - 表单 用于收集表单元素的值，具体使用方法请参考对应文档
- 💄 增加组件：Landscape - 压屏窗
- 🐞 更新组件：Popup - 弹出框 新增 hasHeader、hasFooter 属性
- 🐞 更新组件：Radio - 单选框 新增 options 属性
- 🐞 更新组件：Checkbox - 复选框 新增 options 属性
- 🐞 更新组件：Refresher - 下拉刷新 新增 $startWuxRefresher 方法，补全遗漏的文档
- 🐞 更新组件：AnimationGroup - 动画组 新增 disableScroll 属性，新增 zoom、punch 过渡效果
- 🐞 更新组件：Accordion - 手风琴 修复嵌套渲染 bug [#243](https://github.com/wux-weapp/wux-weapp/issues/243) 修复异步渲染 bug [#239](https://github.com/wux-weapp/wux-weapp/issues/239)
- 🐞 更新组件：Slider - 滑动选择器 新增 tipFormatter 属性，修复滑动效果异常 bug [#234](https://github.com/wux-weapp/wux-weapp/issues/234)
- 🐞 更新组件：Select - 下拉框 修复滑动穿透 bug [#232](https://github.com/wux-weapp/wux-weapp/issues/232)
- 🐞 更新组件：SwipeAction - 滑动操作 修复满屏无法滚动 bug [#227](https://github.com/wux-weapp/wux-weapp/issues/227)
- 🐞 更新组件：Index - 索引选择器 修复异步获取数据源字母滑动失效 bug [#224](https://github.com/wux-weapp/wux-weapp/issues/224)
- 🐞 更新组件：Cascader - 级联选择器 修复 chooseTitle 不显示 bug [#207](https://github.com/wux-weapp/wux-weapp/issues/207)
- 🐞 更新组件：ActionSheet - 上拉菜单 基于 Popup 封装
- 🐞 更新组件：Popover - 气泡框 新增 mask 属性
- 🐞 更新组件：ActionSheet、Select、Cascader、KeyBoard、Calendar 等组件 iPhoneX 适配
- 🔥 升级注意：此次更新内容需要依赖小程序基础库 2.6.6 以上版本

## v 3.5.0 (2019-02-01)

- 💄 增加组件：SwipeAction - 滑动操作
- 💄 增加组件：Skeleton - 骨架屏
- 💄 增加组件：NavBar - 导航栏
- 💄 增加组件：Pagination - 分页器
- 🐞 更新组件：Select - 下拉框 新增自动定位的功能 [#203](https://github.com/wux-weapp/wux-weapp/issues/203)
- 🐞 更新组件：List - 列表 修复点击效果不显示的问题

## v 3.4.2 (2019-01-23)

- 修复 v3.4.1 遗留 BUG，优化关联组件的性能

## v 3.4.1 (2019-01-22)

- 💄 增加组件：Sticky - 吸顶容器
- 💄 增加组件：Index - 索引选择器
- 🐞 更新组件：Upload - 上传 新增支持上传视频
- 🐞 更新组件：Utility - 工具类 新增支持 1 像素边框
- 🐞 更新组件 style 相关的属性支持传入对象（如 [Avatar](avatar.md)、[Card](card.md) 等等），优化关联组件的性能

## v 3.4.0 (2019-01-05)

- 💄 增加组件：Timeago - 多久之前
- 🐞 更新组件：新增 prefixCls 属性，支持自定义类名前缀
- 🐞 更新组件：支持 [全局样式](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html)
- 升级注意：此次更新内容需要依赖小程序基础库 2.2.3 以上版本

## v 3.3.2 (2019-01-04)

- 🐞 更新组件：TabBar - 标签栏 修复 tabbar iPhoneX 适配 [#179](https://github.com/wux-weapp/wux-weapp/issues/179)
- 🐞 更新组件：Accordion - 手风琴 修复缺少 multipleSlots 参数的问题 [#173](https://github.com/wux-weapp/wux-weapp/issues/173)
- 🐞 更新组件：AnimationGroup - 动画组 修复 slideInRight 动画状态下页面溢出的问题 [#170](https://github.com/wux-weapp/wux-weapp/issues/170)

## v 3.3.1 (2018-12-19)

- 🐞 更新组件：Icon - 图标 新增 hidden 属性
- 🐞 更新组件：Prompt - 提示消息 新增支持微信开放能力
- 🐞 更新组件：Input - 文本输入框 修复 focus 回弹问题
- 🐞 更新组件：Textarea - 多行输入框 修复 focus 回弹问题
- 🐞 更新组件：Cascader - 级联选择器 修复 options 动态加载数据的问题
- 🐞 更新组件：Qrcode - 二维码 修复触发多次点击事件的问题
- 🐞 更新组件：Image - 图片 修复 mode="widthFix" 不能实现的问题
- 🐞 更新组件：FabButton - 浮动按钮 FloatingButton 更名为 FabButton，新增 direction 等属性，具体使用方法请参考对应文档
- 🐞 更新组件：Toast - 提示框 修复连续弹出问题
- 🐞 更新组件：Toptips - 顶部提示 修复连续弹出问题
- 🐞 更新组件：Card - 卡片 优化组件 thumb & title & extra 为空时不显示头部
- 🐞 更新组件：FilterBar - 筛选栏 下拉选择菜单支持滚动功能
- 🐞 更新组件：Tag - 标签 新增 closable 等属性，具体使用方法请参考对应文档
- 🐞 更新组件：Tabs - 标签页 新增 direction 属性，支持竖排
- 🐞 更新组件：ActionSheet - 上拉菜单 新增支持图标及微信开放功能

## v 3.3.0 (2018-11-08)

- 💄 增加组件：Utility - 工具类 [内置样式](utility.md)
- 💄 增加组件：Selectable - 选框组
- 🐞 更新组件：Accordion - 手风琴 新增 showArrow 属性，fix accordion bindtap [#129](https://github.com/wux-weapp/wux-weapp/pull/129)
- 🐞 更新组件：Radio - 单选框 基于 Selectable 封装，change 事件返回 name 属性
- 🐞 更新组件：Checkbox - 复选框 基于 Selectable 封装，change 事件返回 name 属性
- 🐞 更新组件：Cascader - 级联选择器 新增 defaultFieldNames 属性
- 🐞 更新组件：Select - 下拉框 新增 max 属性
- 🐞 更新组件：KeyBoard - 数字键盘 基于 Popup 封装，新增 password、maxlength 属性
- 🐞 更新组件：Upload - 上传 新增 max、defaultFileList、controlled 属性，before 事件返回 fileList 属性，升级注意语法有变动具体使用方法请参考对应文档

## v 3.2.0 (2018-10-26)

- 💄 增加组件：Cascader - 级联选择器
- 💄 增加组件：Slider - 滑动选择器
- 💄 增加组件：Input - 文本输入框
- 💄 增加组件：Textarea - 多行输入框
- 💄 增加组件：Timeline - 时间轴
- 🐞 更新组件：AnimationGroup - 动画组 新增 wrapStyle 属性
- 🐞 更新组件：Backdrop - 背景幕 新增 zIndex 属性
- 🐞 更新组件：Popup - 弹出框 新增更多弹出层位置，新增 zIndex 属性
- 🐞 更新组件：Dialog - 对话框 新增 zIndex 属性
- 🐞 更新组件：List - 列表 基于 button 组件封装，新增支持微信开放能力，具体使用方法请参考对应文档
- 🐞 更新组件：FloatingButton - 浮动按钮 基于 button 组件封装，新增支持微信开放能力，具体使用方法请参考对应文档
- 🐞 更新组件：SearchBar - 搜索栏 优化代码，新增更多属性，具体使用方法请参考对应文档
- 🐞 更新组件：Button - 按钮 新增 appParameter 等属性
- 🐞 更新组件：Result - 结果页 buttons 属性更新
- 🐞 更新组件：Select - 下拉框 基于 Popup 封装，新增按钮的点击状态，新增 onChange 属性
- 🐞 更新组件：Calendar - 日历 基于 Popup 封装，修复已知手势滑动错位的问题
- 🐞 更新组件：Toast - 提示框 新增 mask 属性，暴露更多静态方法，如 success、warning、error、info 等，具体使用方法请参考对应文档
- 🐞 更新组件：Loading - 指示器 新增 mask 属性
- 🐞 更新组件：Accordion、FloatingButton、InputNumber、Popover、Rater、SearchBar、SegmentedControl、Tabbar、Tabs 移除 auto 属性，新增 controlled 属性，升级注意 `<wux-component auto="{{ false }}" />` 需改为 `<wux-component controlled />`

## v 3.1.0 (2018-09-14)

- 💄 增加组件：Alert - 警告框
- 💄 增加组件：Progress - 进度条
- 💄 增加组件：Circle - 进度环
- 💄 增加组件：Image - 图片
- 💄 增加组件：SearchBar - 搜索栏
- 💄 增加组件：TabBar - 标签栏
- 🐞 更新组件：AnimationGroup - 动画组 新增 appear 属性
- 🐞 更新组件：Result - 结果页 修复 observer 单词错误
- 🐞 更新组件：Upload - 上传 Fix upload button style [#94](https://github.com/wux-weapp/wux-weapp/pull/94)

## v 3.0.6 (2018-08-24)

- 🐞 更新组件：ActionSheet - 上拉菜单 修复组件定位问题 [#88](https://github.com/wux-weapp/wux-weapp/issues/88)

## v 3.0.5 (2018-08-23)

- 🐞 更新组件：AnimationGroup - 动画组 新增 mountOnEnter、unmountOnExit 属性，并修复一些已知问题 [#86](https://github.com/wux-weapp/wux-weapp/issues/86)

## v 3.0.4 (2018-08-15)

- 💄 增加组件：Popup - 弹出框
- 💄 增加组件：Icon - 图标
- 💄 增加组件：Divider - 分割线
- 💄 增加组件：SegmentedControl - 分段器
- 💄 增加组件：Grid - 宫格
- 🐞 更新组件：Dialog - 对话框 基于 Popup 封装 Dialog 组件
- 🐞 更新组件：Gallery - 画廊 新增 allowScale 属性
- 🐞 更新组件：Row - 新增 gutter 属性
- 🐞 更新组件：InputNumber - 数字输入框 语法有变动具体使用方法请参考对应文档
- 🐞 更新组件：Rater - 评分 新增 icon 属性，支持传入图标
- 🐞 更新组件：Toast - 提示框 新增 icon 属性，支持传入图标
- 🐞 更新组件：Select - 下拉框 callback 新增 index、options 属性

## v 3.0.3 (2018-08-03)

- 💄 增加组件：Select - 下拉框
- 💄 增加组件：NoticeBar - 通告栏
- 💄 增加组件：Steps - 步骤条
- 💄 增加组件：Calendar - 日历
- 💄 增加组件：Accordion - 手风琴
- 💄 增加组件：Result - 结果页
- 🐞 更新组件：Rater - 评分 新增属性允许半选、清除、触摸移动选中等功能，具体使用方法请参考对应文档
- 🐞 更新组件：Qrcode - 二维码 修复相对路径的问题
- 🐞 更新组件：Toptips - 顶部提示 函数调用后，返回值支持 promise 接口
- 🐞 更新组件：Toast - 提示框 函数调用后，返回值支持 promise 接口
- 🐞 更新组件：Notification - 通知 函数调用后，返回值支持 promise 接口

## v 3.0.2 (2018-07-23)

- 💄 增加组件：Tabs - 标签页
- 💄 增加组件：Avatar - 头像
- 💄 增加组件：Upload - 文件上传
- 💄 增加组件：FilterBar - 筛选栏
- 💄 增加组件：Button - 按钮
- 💄 增加组件：Popover - 气泡框
- 🐞 更新组件：Dialog - 对话框 新增 resetOnClose 属性，prompt 返回输入框内容
- 🐞 更新组件：Checkbox - 复选框 更新 color 属性预设 9 种颜色
- 🐞 更新组件：Radio - 单选框 更新 color 属性预设 9 种颜色
- 🐞 更新组件：Switch - 开关选择器 预设 9 种颜色
- 🐞 更新组件：InputNumber - 数字输入框 新增 color 属性预设 9 种颜色
- 🐞 更新组件：FloatingButton - 浮动按钮 新增 theme 属性预设 9 种颜色
- 🐞 更新组件：Rater - 评分组件 更新 activeColor 属性默认值为 #ffc900
- 🐞 更新组件：List - 列表 新增 hoverClass 属性

## v 3.0.1 (2018-07-09)

- 💄 增加组件：List - 列表
- 💄 增加组件：Radio - 单选框
- 💄 增加组件：Checkbox - 复选框
- 💄 增加组件：Switch - 开关选择器
- 💄 增加组件：WhiteSpace - 上下留白
- 💄 增加组件：WingBlank - 两翼留白
- 💄 增加组件：Card - 卡片
- 💄 增加组件：Media - 媒体对象

## v 3.0.0 (2018-06-25)

- 🔥 基于 Component 构造器重构自定义组件
