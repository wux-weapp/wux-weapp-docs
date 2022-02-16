# Skeleton 骨架屏

在需要等待加载内容的位置提供一个占位图形组合。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Skeleton",
  "usingComponents": {
    "wux-skeleton": "../../dist/skeleton/index",
    "wux-skeleton-avatar": "../../dist/skeleton-avatar/index",
    "wux-skeleton-paragraph": "../../dist/skeleton-paragraph/index",
    "wux-row": "../../dist/row/index",
    "wux-col": "../../dist/col/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">Skeleton</view>
    <view class="page__desc">骨架屏</view>
  </view>
  <view class="page__bd page__bd_spacing">
    <view class="sub-title">Default</view>
    <wux-skeleton>
      <wux-skeleton-paragraph />
    </wux-skeleton>
    <view class="sub-title">Rounded</view>
    <wux-skeleton active>
      <wux-skeleton-paragraph rounded />
    </wux-skeleton>
    <view class="sub-title">Rows = 4</view>
    <wux-skeleton active>
      <wux-skeleton-paragraph rows="4" />
    </wux-skeleton>
    <view class="sub-title">With avatar</view>
    <wux-skeleton active>
      <wux-row>
        <wux-col span="2">
          <wux-skeleton-avatar />
        </wux-col>
        <wux-col span="10">
          <wux-skeleton-paragraph />
        </wux-col>
      </wux-row>
    </wux-skeleton>
  </view>
</view>
```

## 视频演示

[Skeleton](./_media/skeleton.mp4 ':include :type=iframe width=375px height=667px')

## API

### Skeleton props

| 参数      | 类型      | 描述             | 默认值       |
| --------- | --------- | ---------------- | ------------ |
| prefixCls | `string`  | 自定义类名前缀   | wux-skeleton |
| active    | `boolean` | 是否展示动画效果 | false        |

### Skeleton externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |

### SkeletonAvatar props

| 参数      | 类型     | 描述                                             | 默认值              |
| --------- | -------- | ------------------------------------------------ | ------------------- |
| prefixCls | `string` | 自定义类名前缀                                   | wux-skeleton-avatar |
| shape     | `string` | 指定头像的形状，可选值为 circle、rounded、square | circle              |
| size      | `string` | 设置头像的大小，可选值为 small、default、large   | default             |

### SkeletonAvatar externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |

### SkeletonParagraph props

| 参数      | 类型      | 描述                 | 默认值                 |
| --------- | --------- | -------------------- | ---------------------- |
| prefixCls | `string`  | 自定义类名前缀       | wux-skeleton-paragraph |
| rows      | `number`  | 设置段落占位图的行数 | 3                      |
| rounded   | `boolean` | 是否圆角             | false                  |

### SkeletonParagraph externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
