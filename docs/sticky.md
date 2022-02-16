# Sticky 吸顶容器

用于将标题栏在滚动时固定到页面顶部。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Sticky",
  "usingComponents": {
    "wux-sticky": "../../dist/sticky/index",
    "wux-sticky-item": "../../dist/sticky-item/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">Sticky</view>
    <view class="page__desc">吸顶容器</view>
  </view>
  <view class="page__bd">
    <wux-sticky scrollTop="{{ scrollTop }}">
      <wux-sticky-item>
        <view slot="title">小鸡 🐤</view>
        <view slot="content">
          <view class="demo-item">你看哪里有个小鸡呦</view>
          <view class="demo-item">你看那里他有小鸡哟</view>
          <view class="demo-item">小鸡哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
        </view>
      </wux-sticky-item>
      <wux-sticky-item>
        <view slot="title">母鸡 🐔</view>
        <view slot="content">
          <view class="demo-item">你看那里又有母鸡哟</view>
          <view class="demo-item">你看那里又有母鸡哟</view>
          <view class="demo-item">母鸡咯咯咯咯咯咯-go-</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
        </view>
      </wux-sticky-item>
      <wux-sticky-item>
        <view slot="title">公鸡 🐓</view>
        <view slot="content">
          <view class="demo-item">你看那里又有公鸡哟</view>
          <view class="demo-item">你看那里又有公鸡哟</view>
          <view class="demo-item">公鸡喔喔喔喔喔-wo-</view>
          <view class="demo-item">母鸡咯咯咯咯咯咯-go-</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔-bi-哟</view>
        </view>
      </wux-sticky-item>
      <wux-sticky-item>
        <view slot="title">火鸡 🦃</view>
        <view slot="content">
          <view class="demo-item">你看那里又有火鸡哟</view>
          <view class="demo-item">你看那里又有火鸡哟</view>
          <view class="demo-item">火鸡嘟嘟嘟嘟嘟-du-</view>
          <view class="demo-item">公鸡喔喔喔喔喔-wo-</view>
          <view class="demo-item">母鸡咯咯咯咯咯咯-go-</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
        </view>
      </wux-sticky-item>
      <wux-sticky-item>
        <view slot="title">鸽子 🕊</view>
        <view slot="content">
          <view class="demo-item">你看那里又有鸽子哟</view>
          <view class="demo-item">你看那里又有鸽子哟</view>
          <view class="demo-item">鸽子图噜噜噜噜-lu-</view>
          <view class="demo-item">火鸡嘟嘟嘟嘟嘟-du-</view>
          <view class="demo-item">公鸡喔喔喔喔喔-wo-</view>
          <view class="demo-item">母鸡咯咯咯咯咯咯-go-</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔-bi-哟</view>
        </view>
      </wux-sticky-item>
      <wux-sticky-item>
        <view slot="title">猫咪 🐱</view>
        <view slot="content">
          <view class="demo-item">你看那里又有猫咪哟</view>
          <view class="demo-item">你看那里又有猫咪哟</view>
          <view class="demo-item">猫咪喵喵喵喵喵-miao-</view>
          <view class="demo-item">鸽子图噜噜噜噜-lu-</view>
          <view class="demo-item">火鸡嘟嘟嘟嘟嘟-du-</view>
          <view class="demo-item">公鸡喔喔喔喔喔-wo-</view>
          <view class="demo-item">母鸡咯咯咯咯咯咯-go-</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
        </view>
      </wux-sticky-item>
      <wux-sticky-item>
        <view slot="title">小狗 🐶</view>
        <view slot="content">
          <view class="demo-item">你看那里又有小狗哟</view>
          <view class="demo-item">你看那里又有小狗哟</view>
          <view class="demo-item">小狗旺旺旺旺旺-wang-</view>
          <view class="demo-item">猫咪喵喵喵喵喵-miao-</view>
          <view class="demo-item">鸽子图噜噜噜噜-lu-</view>
          <view class="demo-item">火鸡嘟嘟嘟嘟嘟-du-</view>
          <view class="demo-item">公鸡喔喔喔喔喔-wo-</view>
          <view class="demo-item">母鸡咯咯咯咯咯咯-go-</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔-bi-哟</view>
        </view>
      </wux-sticky-item>
      <wux-sticky-item>
        <view slot="title">山羊 🐐</view>
        <view slot="content">
          <view class="demo-item">你看那里又有山羊哟</view>
          <view class="demo-item">你看那里又有山羊哟</view>
          <view class="demo-item">山羊咩-mie-</view>
          <view class="demo-item">小狗旺旺旺旺旺-wang-</view>
          <view class="demo-item">猫咪喵喵喵喵喵-miao-</view>
          <view class="demo-item">鸽子图噜噜噜噜-lu-</view>
          <view class="demo-item">火鸡嘟嘟嘟嘟嘟-du-</view>
          <view class="demo-item">公鸡喔喔喔喔喔-wo-</view>
          <view class="demo-item">母鸡咯咯咯咯咯咯-go-</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
        </view>
      </wux-sticky-item>
      <wux-sticky-item>
        <view slot="title">绵羊 🐑</view>
        <view slot="content">
          <view class="demo-item">你看那里又有绵羊哟</view>
          <view class="demo-item">你看那里又有绵羊哟</view>
          <view class="demo-item">绵羊咇-bie</view>
          <view class="demo-item">山羊咩-mie</view>
          <view class="demo-item">小狗旺旺旺旺旺-wang-</view>
          <view class="demo-item">猫咪喵喵喵喵喵-miao-</view>
          <view class="demo-item">鸽子图噜噜噜噜-lu-</view>
          <view class="demo-item">火鸡嘟嘟嘟嘟嘟-du-</view>
          <view class="demo-item">公鸡喔喔喔喔喔-wo-</view>
          <view class="demo-item">母鸡咯咯咯咯咯咯-go-</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔-bi-哟</view>
        </view>
      </wux-sticky-item>
      <wux-sticky-item>
        <view slot="title">母牛 🐮</view>
        <view slot="content">
          <view class="demo-item">你看那里又有母牛哟</view>
          <view class="demo-item">你看那里又有母牛哟</view>
          <view class="demo-item">母牛萌-meng-</view>
          <view class="demo-item">绵羊咇-bie</view>
          <view class="demo-item">山羊咩-mie</view>
          <view class="demo-item">小狗旺旺旺旺旺-wang-</view>
          <view class="demo-item">猫咪喵喵喵喵喵-miao-</view>
          <view class="demo-item">鸽子图噜噜噜噜-lu-</view>
          <view class="demo-item">火鸡嘟嘟嘟嘟嘟-du-</view>
          <view class="demo-item">公鸡喔喔喔喔喔-wo-</view>
          <view class="demo-item">母鸡咯咯咯咯咯咯-go-</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
        </view>
      </wux-sticky-item>
      <wux-sticky-item>
        <view slot="title">公牛 🐂</view>
        <view slot="content">
          <view class="demo-item">你看那里又有公牛哟</view>
          <view class="demo-item">你看那里又有公牛哟</view>
          <view class="demo-item">公牛呣-mu-</view>
          <view class="demo-item">母牛萌-meng-</view>
          <view class="demo-item">绵羊咇-bie</view>
          <view class="demo-item">山羊咩-mie</view>
          <view class="demo-item">小狗旺旺旺旺旺-wang-</view>
          <view class="demo-item">猫咪喵喵喵喵喵-miao-</view>
          <view class="demo-item">鸽子图噜噜噜噜-lu-</view>
          <view class="demo-item">火鸡嘟嘟嘟嘟嘟-du-</view>
          <view class="demo-item">公鸡喔喔喔喔喔-wo-</view>
          <view class="demo-item">母鸡咯咯咯咯咯咯-go-</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
          <view class="demo-item">小鸡哔哔哔哔-bi-哟</view>
        </view>
      </wux-sticky-item>
      <wux-sticky-item>
        <view slot="title">拖拉机 🚜</view>
        <view slot="content">
          <view class="demo-item">你看那里又有拖拉机哟</view>
          <view class="demo-item">你看那里又有拖拉机哟</view>
          <view class="demo-item">拖拉机嗡-weng-</view>
          <view class="demo-item">拖拉机嗡-weng-</view>
          <view class="demo-item">拖拉机嗡-weng-</view>
          <view class="demo-item">小鸡被撞 喔 啊喔</view>
        </view>
      </wux-sticky-item>
    </wux-sticky>
  </view>
</view>
```

```js
Page({
  data: {
    scrollTop: 0,
  },
  onPageScroll(e) {
    console.log('onPageScroll', e.scrollTop)
    this.setData({
      scrollTop: e.scrollTop,
    })
  },
})
```

## 视频演示

[Sticky](./_media/sticky.mp4 ':include :type=iframe width=375px height=667px')

## API

### Sticky props

| 参数      | 类型     | 描述               | 默认值     |
| --------- | -------- | ------------------ | ---------- |
| prefixCls | `string` | 自定义类名前缀     | wux-sticky |
| scrollTop | `number` | 设置竖向滚动条位置 | 0          |

### Sticky externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |

### StickyItem props

| 参数      | 类型     | 描述           | 默认值          |
| --------- | -------- | -------------- | --------------- |
| prefixCls | `string` | 自定义类名前缀 | wux-sticky-item |
| title     | `string` | 标题           | -               |
| content   | `string` | 内容           | -               |

### StickyItem slot

| 名称    | 描述       |
| ------- | ---------- |
| title   | 自定义标题 |
| content | 自定义内容 |

### StickyItem externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |

### Sticky.updated

> 某些时候需要动态加载数据时可能导致 `<wux-sticky-item>` 高度计算不正确，此时需要手动调用一次使之正常

```
this.selectComponent(selector).updated()
```
