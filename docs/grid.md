# Grid 宫格

在水平和垂直方向，将布局切分成若干等大的区块。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Grid",
  "usingComponents": {
    "wux-icon": "../../dist/icon/index",
    "wux-grids": "../../dist/grids/index",
    "wux-grid": "../../dist/grid/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">Grid</view>
    <view class="page__desc">宫格</view>
  </view>
  <view class="page__bd">
    <view class="sub-title">Default</view>
    <wux-grids>
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
    </wux-grids>
    <view class="sub-title">Square = true</view>
    <wux-grids square>
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
    </wux-grids>
    <view class="sub-title">Bordered = false</view>
    <wux-grids bordered="{{ false }}">
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
    </wux-grids>
    <view class="sub-title">Col = 4</view>
    <wux-grids col="4">
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://cdn.skyvow.cn/logo.png" label="Wux Weapp" />
    </wux-grids>
    <view class="sub-title">Custom content</view>
    <wux-grids>
      <wux-grid>
        <wux-icon type="logo-github" />
        <view>Wux Weapp</view>
      </wux-grid>
      <wux-grid>
        <wux-icon type="logo-github" />
        <view>Wux Weapp</view>
      </wux-grid>
      <wux-grid>
        <wux-icon type="logo-github" />
        <view>Wux Weapp</view>
      </wux-grid>
      <wux-grid>
        <wux-icon type="logo-github" />
        <view>Wux Weapp</view>
      </wux-grid>
      <wux-grid>
        <wux-icon type="logo-github" />
        <view>Wux Weapp</view>
      </wux-grid>
      <wux-grid>
        <wux-icon type="logo-github" />
        <view>Wux Weapp</view>
      </wux-grid>
      <wux-grid>
        <wux-icon type="logo-github" />
        <view>Wux Weapp</view>
      </wux-grid>
      <wux-grid>
        <wux-icon type="logo-github" />
        <view>Wux Weapp</view>
      </wux-grid>
      <wux-grid>
        <wux-icon type="logo-github" />
        <view>Wux Weapp</view>
      </wux-grid>
    </wux-grids>
  </view>
</view>
```

## 视频演示

[Grid](./_media/grid.mp4 ':include :type=iframe width=375px height=667px')

## API

### Grids props

| 参数      | 类型      | 描述                     | 默认值    |
| --------- | --------- | ------------------------ | --------- |
| prefixCls | `string`  | 自定义类名前缀           | wux-grids |
| col       | `string`  | 列数                     | 3         |
| bordered  | `boolean` | 是否有边框               | true      |
| square    | `boolean` | 每个格子是否固定为正方形 | false     |

### Grids externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |

### Grid props

| 参数       | 类型       | 描述                                                             | 默认值   |
| ---------- | ---------- | ---------------------------------------------------------------- | -------- |
| prefixCls  | `string`   | 自定义类名前缀                                                   | wux-grid |
| hoverClass | `string`   | 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果 | default  |
| thumb      | `string`   | 缩略图                                                           | -        |
| label      | `string`   | 描述信息                                                         | -        |
| bind:click | `function` | 点击事件                                                         | -        |

### Grid slot

| 名称   | 描述         |
| ------ | ------------ |
| -      | 自定义内容   |
| header | 自定义缩略图 |

### Grid externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
