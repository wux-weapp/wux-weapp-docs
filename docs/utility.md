# Utility 工具类

`Wux Weapp` 提供了一些常用的样式，可以直接通过设置标签 `class` 的方式使用。

## 使用指南

### 在 page.wxss 中引入内置样式

```css
@import '../../dist/styles/index.wxss';
```

### Colors 颜色类

```html
<!-- Color -->
<view class="wux-light">Light</view>
<view class="wux-stable">Stable</view>
<view class="wux-positive">Positive</view>
<view class="wux-calm">Calm</view>
<view class="wux-balanced">Balanced</view>
<view class="wux-energized">Energized</view>
<view class="wux-assertive">Assertive</view>
<view class="wux-royal">Royal</view>
<view class="wux-dark">Dark</view>
<!-- BackgroundColor -->
<view class="wux-light--bg">Light</view>
<view class="wux-stable--bg">Stable</view>
<view class="wux-positive--bg">Positive</view>
<view class="wux-calm--bg">Calm</view>
<view class="wux-balanced--bg">Balanced</view>
<view class="wux-energized--bg">Energized</view>
<view class="wux-assertive--bg">Assertive</view>
<view class="wux-royal--bg">Royal</view>
<view class="wux-dark--bg">Dark</view>
<!-- BorderColor -->
<view class="wux-light--border">Light</view>
<view class="wux-stable--border">Stable</view>
<view class="wux-positive--border">Positive</view>
<view class="wux-calm--border">Calm</view>
<view class="wux-balanced--border">Balanced</view>
<view class="wux-energized--border">Energized</view>
<view class="wux-assertive--border">Assertive</view>
<view class="wux-royal--border">Royal</view>
<view class="wux-dark--border">Dark</view>
```

### Alignment 文字对齐

```html
<view class="wux-text--left">Left</view>
<view class="wux-text--right">Right</view>
<view class="wux-text--center">Center</view>
<view class="wux-text--justify">Justify</view>
<view class="wux-text--nowrap">Nowrap</view>
```

### Transformation 大小写转换

```html
<view class="wux-text--lowercase">Lowercase</view>
<view class="wux-text--uppercase">Uppercase</view>
<view class="wux-text--capitalize">Capitalize</view>
```

### Ellipsis 文字省略

```html
<view class="wux-ellipsis"
  >One line: https://github.com/wux-weapp/wux-weapp</view
>
<view class="wux-ellipsis--l2"
  >Two lines: https://github.com/wux-weapp/wux-weapp</view
>
<view class="wux-ellipsis--l3"
  >Three lines: https://github.com/wux-weapp/wux-weapp</view
>
```

### Floats 浮动类

```html
<view class="wux-clearfix">Clearfix</view>
<view class="wux-pull-right">Pull right</view>
<view class="wux-pull-left">Pull left</view>
```

### Margin 边距类

```html
<!-- top、right、bottom、left、vertical、horizontal (0 - 30) -->
<view class="wux-m--0">No margin</view>
<view class="wux-margin--0">No margin</view>
<view class="wux-mt--0">No margin top</view>
<view class="wux-margin-top--0">No margin top</view>
<view class="wux-p--0">No padding</view>
<view class="wux-padding--0">No padding</view>
<view class="wux-pt--0">No padding top</view>
<view class="wux-padding-top--0">No padding top</view>
...
```

### Hairline 1 像素边框

```html
<view class="wux-hairline--top">Border-top</view>
<view class="wux-hairline--right">Border-right</view>
<view class="wux-hairline--bottom">Border-bottom</view>
<view class="wux-hairline--left">Border-left</view>
<view class="wux-hairline--horizontal">Horizontal border</view>
<view class="wux-hairline--vertical">Vertical border</view>
<view class="wux-hairline--surrounded">Surrounded border</view>
```

## 视频演示

[Utility](./_media/utility.mp4 ':include :type=iframe width=375px height=667px')
