# v 3.4.2 (2019-01-23)

- 修复 v3.4.1 遗留 BUG，优化关联组件的性能

# v 3.4.1 (2019-01-22)

- 增加组件：Sticky - 吸顶容器
- 增加组件：Index - 索引选择器
- 更新组件：Upload - 上传 新增支持上传视频
- 更新组件：Utility - 工具类 新增支持 1 像素边框
- 更新组件 style 相关的属性支持传入对象（如 [Avatar](avatar.md)、[Card](card.md) 等等），优化关联组件的性能

# v 3.4.0 (2019-01-05)

- 增加组件：Timeago - 多久之前
- 更新组件：新增 prefixCls 属性，支持自定义类名前缀
- 更新组件：支持 [全局样式](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html)
- 升级注意：此次更新内容需要依赖小程序基础库 2.2.3 以上版本

# v 3.3.2 (2019-01-04)

- 更新组件：TabBar - 标签栏 修复 tabbar iPhoneX 适配 [#179](https://github.com/wux-weapp/wux-weapp/issues/179)
- 更新组件：Accordion - 手风琴 修复缺少 multipleSlots 参数的问题 [#173](https://github.com/wux-weapp/wux-weapp/issues/173)
- 更新组件：AnimationGroup - 动画组 修复 slideInRight 动画状态下页面溢出的问题 [#170](https://github.com/wux-weapp/wux-weapp/issues/170)

# v 3.3.1 (2018-12-19)

- 更新组件：Icon - 图标 新增 hidden 属性
- 更新组件：Prompt - 提示消息 新增支持微信开放能力
- 更新组件：Input - 文本输入框 修复 focus 回弹问题
- 更新组件：Textarea - 多行输入框 修复 focus 回弹问题
- 更新组件：Cascader - 级联选择器 修复 options 动态加载数据的问题
- 更新组件：Qrcode - 二维码 修复触发多次点击事件的问题
- 更新组件：Image - 图片 修复 mode="widthFix" 不能实现的问题
- 更新组件：FabButton - 浮动按钮 FloatingButton 更名为 FabButton，新增 direction 等属性，具体使用方法请参考对应文档
- 更新组件：Toast - 提示框 修复连续弹出问题
- 更新组件：Toptips - 顶部提示 修复连续弹出问题
- 更新组件：Card - 卡片 优化组件 thumb & title & extra 为空时不显示头部
- 更新组件：FilterBar - 筛选栏 下拉选择菜单支持滚动功能
- 更新组件：Tag - 标签 新增 closable 等属性，具体使用方法请参考对应文档
- 更新组件：Tabs - 标签页 新增 direction 属性，支持竖排
- 更新组件：ActionSheet - 上拉菜单 新增支持图标及微信开放功能

# v 3.3.0 (2018-11-08)

- 增加组件：Utility - 工具类 [内置样式](utility.md)
- 增加组件：Selectable - 选框组
- 更新组件：Accordion - 手风琴 新增 showArrow 属性，fix accordion bindtap [#129](https://github.com/wux-weapp/wux-weapp/pull/129)
- 更新组件：Radio - 单选框 基于 Selectable 封装，change 事件返回 name 属性
- 更新组件：Checkbox - 复选框 基于 Selectable 封装，change 事件返回 name 属性
- 更新组件：Cascader - 级联选择器 新增 defaultFieldNames 属性
- 更新组件：Select - 下拉框 新增 max 属性
- 更新组件：KeyBoard - 数字键盘 基于 Popup 封装，新增 password、maxlength 属性
- 更新组件：Upload - 上传 新增 max、defaultFileList、controlled 属性，before 事件返回 fileList 属性，升级注意语法有变动具体使用方法请参考对应文档

# v 3.2.0 (2018-10-26)

- 增加组件：Cascader - 级联选择器
- 增加组件：Slider - 滑动选择器
- 增加组件：Input - 文本输入框
- 增加组件：Textarea - 多行输入框
- 增加组件：Timeline - 时间轴
- 更新组件：AnimationGroup - 动画组 新增 wrapStyle 属性
- 更新组件：Backdrop - 背景幕 新增 zIndex 属性
- 更新组件：Popup - 弹出框 新增更多弹出层位置，新增 zIndex 属性
- 更新组件：Dialog - 对话框 新增 zIndex 属性
- 更新组件：List - 列表 基于 button 组件封装，新增支持微信开放能力，具体使用方法请参考对应文档
- 更新组件：FloatingButton - 浮动按钮 基于 button 组件封装，新增支持微信开放能力，具体使用方法请参考对应文档
- 更新组件：SearchBar - 搜索栏 优化代码，新增更多属性，具体使用方法请参考对应文档
- 更新组件：Button - 按钮 新增 appParameter 等属性
- 更新组件：Result - 结果页 buttons 属性更新
- 更新组件：Select - 下拉框 基于 Popup 封装，新增按钮的点击状态，新增 onChange 属性
- 更新组件：Calendar - 日历 基于 Popup 封装，修复已知手势滑动错位的问题
- 更新组件：Toast - 提示框 新增 mask 属性，暴露更多静态方法，如 success、warning、error、info 等，具体使用方法请参考对应文档
- 更新组件：Loading - 指示器 新增 mask 属性
- 更新组件：Accordion、FloatingButton、InputNumber、Popover、Rater、SearchBar、SegmentedControl、Tabbar、Tabs 移除 auto 属性，新增 controlled 属性，升级注意 `<wux-component auto="{{ false }}" />` 需改为 `<wux-component controlled />`

# v 3.1.0 (2018-09-14)

- 增加组件：Alert - 警告框
- 增加组件：Progress - 进度条
- 增加组件：Circle - 进度环
- 增加组件：Image - 图片
- 增加组件：SearchBar - 搜索栏
- 增加组件：TabBar - 标签栏
- 更新组件：AnimationGroup - 动画组 新增 appear 属性
- 更新组件：Result - 结果页 修复 observer 单词错误
- 更新组件：Upload - 上传 Fix upload button style [#94](https://github.com/wux-weapp/wux-weapp/pull/94)

# v 3.0.6 (2018-08-24)

- 更新组件：ActionSheet - 上拉菜单 修复组件定位问题 [#88](https://github.com/wux-weapp/wux-weapp/issues/88)

# v 3.0.5 (2018-08-23)

- 更新组件：AnimationGroup - 动画组 新增 mountOnEnter、unmountOnExit 属性，并修复一些已知问题 [#86](https://github.com/wux-weapp/wux-weapp/issues/86)

# v 3.0.4 (2018-08-15)

- 增加组件：Popup - 弹出框
- 增加组件：Icon - 图标
- 增加组件：Divider - 分割线
- 增加组件：SegmentedControl - 分段器
- 增加组件：Grid - 宫格
- 更新组件：Dialog - 对话框 基于 Popup 封装 Dialog 组件
- 更新组件：Gallery - 画廊 新增 allowScale 属性
- 更新组件：Row - 新增 gutter 属性
- 更新组件：InputNumber - 数字输入框 语法有变动具体使用方法请参考对应文档
- 更新组件：Rater - 评分 新增 icon 属性，支持传入图标
- 更新组件：Toast - 提示框 新增 icon 属性，支持传入图标
- 更新组件：Select - 下拉框 callback 新增 index、options 属性

# v 3.0.3 (2018-08-03)

- 增加组件：Select - 下拉框
- 增加组件：NoticeBar - 通告栏
- 增加组件：Steps - 步骤条
- 增加组件：Calendar - 日历
- 增加组件：Accordion - 手风琴
- 增加组件：Result - 结果页
- 更新组件：Rater - 评分 新增属性允许半选、清除、触摸移动选中等功能，具体使用方法请参考对应文档
- 更新组件：Qrcode - 二维码 修复相对路径的问题
- 更新组件：Toptips - 顶部提示 函数调用后，返回值支持 promise 接口
- 更新组件：Toast - 提示框 函数调用后，返回值支持 promise 接口
- 更新组件：Notification - 通知 函数调用后，返回值支持 promise 接口

# v 3.0.2 (2018-07-23)

- 增加组件：Tabs - 标签页
- 增加组件：Avatar - 头像
- 增加组件：Upload - 文件上传
- 增加组件：FilterBar - 筛选栏
- 增加组件：Button - 按钮
- 增加组件：Popover - 气泡框
- 更新组件：Dialog - 对话框 新增 resetOnClose 属性，prompt 返回输入框内容
- 更新组件：Checkbox - 复选框 更新 color 属性预设 9 种颜色
- 更新组件：Radio - 单选框 更新 color 属性预设 9 种颜色
- 更新组件：Switch - 开关选择器 预设 9 种颜色
- 更新组件：InputNumber - 数字输入框 新增 color 属性预设 9 种颜色
- 更新组件：FloatingButton - 浮动按钮 新增 theme 属性预设 9 种颜色
- 更新组件：Rater - 评分组件 更新 activeColor 属性默认值为 #ffc900
- 更新组件：List - 列表 新增 hoverClass 属性

# v 3.0.1 (2018-07-09)

- 增加组件：List - 列表
- 增加组件：Radio - 单选框
- 增加组件：Checkbox - 复选框
- 增加组件：Switch - 开关选择器
- 增加组件：WhiteSpace - 上下留白
- 增加组件：WingBlank - 两翼留白
- 增加组件：Card - 卡片
- 增加组件：Media - 媒体对象

# v 3.0.0 (2018-06-25)

- 基于 Component 构造器重构自定义组件