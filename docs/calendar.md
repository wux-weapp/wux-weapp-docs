# Calendar 日历

用于选择日期区间。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Calendar",
  "usingComponents": {
    "wux-cell-group": "../../dist/cell-group/index",
    "wux-cell": "../../dist/cell/index",
    "wux-calendar": "../../dist/calendar/index"
  }
}
```

### 示例

!> 该组件主要依靠 JavaScript 主动调用，所以一般只需在 wxml 中添加一个组件，并设置 id 为 `#wux-calendar` 或其他，之后在 page.js 中调用 `$wuxCalendar(id)` 获取匹配到的第一个组件实例对象。

```html
<wux-calendar id="wux-calendar" />

<view class="page">
  <view class="page__hd">
    <view class="page__title">Calendar</view>
    <view class="page__desc">日历</view>
  </view>
  <view class="page__bd">
    <wux-cell-group title="Calendar">
      <wux-cell
        title="单选"
        extra="{{ value1 }}"
        bind:click="openCalendar1"
      ></wux-cell>
      <wux-cell
        title="多选"
        extra="{{ value2 }}"
        bind:click="openCalendar2"
      ></wux-cell>
      <wux-cell
        title="Direction = Vertical"
        extra="{{ value3 }}"
        bind:click="openCalendar3"
      ></wux-cell>
      <wux-cell
        title="MinDate & MaxDate"
        extra="{{ value4 }}"
        bind:click="openCalendar4"
      ></wux-cell>
    </wux-cell-group>
  </view>
</view>
```

```js
import { $wuxCalendar } from '../../dist/index'

Page({
  data: {
    value1: [],
    value2: [],
    value3: [],
    value4: [],
  },
  openCalendar1() {
    $wuxCalendar().open({
      value: this.data.value1,
      onChange: (values, displayValues) => {
        console.log('onChange', values, displayValues)
        this.setData({
          value1: displayValues,
        })
      },
    })
  },
  openCalendar2() {
    $wuxCalendar().open({
      value: this.data.value2,
      multiple: true,
      onChange: (values, displayValues) => {
        console.log('onChange', values, displayValues)
        this.setData({
          value2: displayValues,
        })
      },
    })
  },
  openCalendar3() {
    $wuxCalendar().open({
      value: this.data.value3,
      direction: 'vertical',
      onChange: (values, displayValues) => {
        console.log('onChange', values, displayValues)
        this.setData({
          value3: displayValues,
        })
      },
    })
  },
  openCalendar4() {
    const now = new Date()
    const minDate = now.getTime()
    const maxDate = now.setDate(now.getDate() + 7)

    $wuxCalendar().open({
      value: this.data.value4,
      minDate,
      maxDate,
      onChange: (values, displayValues) => {
        console.log('onChange', values, displayValues)
        this.setData({
          value4: displayValues,
        })
      },
    })
  },
})
```

## 视频演示

[Calendar](./_media/calendar.mp4 ':include :type=iframe width=375px height=667px')

## API

| 参数                           | 类型       | 描述                                                            | 默认值                                                                                               |
| ------------------------------ | ---------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| options                        | `object`   | 配置项                                                          | -                                                                                                    |
| options.prefixCls              | `string`   | 自定义类名前缀                                                  | wux-calendar                                                                                         |
| options.monthNames             | `array`    | 月名称                                                          | ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'] |
| options.monthNamesShort        | `array`    | 月名称缩写                                                      | ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'] |
| options.dayNames               | `array`    | 周名称                                                          | ['周日', '周一', '周二', '周三', '周四', '周五', '周六']                                             |
| options.dayNamesShort          | `array`    | 周名称缩写                                                      | ['周日', '周一', '周二', '周三', '周四', '周五', '周六']                                             |
| options.firstDay               | `number`   | 一周的第一日                                                    | 1                                                                                                    |
| options.weekendDays            | `array`    | 一周的起始日                                                    | [0, 6]                                                                                               |
| options.multiple               | `boolean`  | 是否支持多选                                                    | false                                                                                                |
| options.dateFormat             | `string`   | 日期格式                                                        | yyyy-mm-dd                                                                                           |
| options.direction              | `string`   | 方向，可选择为 horizontal、vertical                             | horizontal                                                                                           |
| options.minDate                | `any`      | 最小可选日期                                                    | -                                                                                                    |
| options.maxDate                | `any`      | 最大可选日期                                                    | -                                                                                                    |
| options.touchMove              | `boolean`  | 是否支持触摸滑动                                                | true                                                                                                 |
| options.animate                | `boolean`  | 是否支持切换月份的动画                                          | true                                                                                                 |
| options.closeOnSelect          | `boolean`  | 用户选择一个时间后就自动关闭，当 `multiple` 为 `false` 时才生效 | true                                                                                                 |
| options.weekHeader             | `boolean`  | 是否显示周名称                                                  | true                                                                                                 |
| options.toolbar                | `boolean`  | 是否显示工具栏                                                  | true                                                                                                 |
| options.value                  | `array`    | 默认时间选择值，如 ['2000-01-01']                               | []                                                                                                   |
| options.onMonthAdd             | `function` | 添加月份时的回调函数                                            | -                                                                                                    |
| options.onChange               | `function` | 选择日期时的回调函数                                            | -                                                                                                    |
| options.onOpen                 | `function` | 打开日历时的回调函数                                            | -                                                                                                    |
| options.onClose                | `function` | 关闭日历时的回调函数                                            | -                                                                                                    |
| options.onDayClick             | `function` | 点击选择日期时的回调函数                                        | -                                                                                                    |
| options.onMonthYearChangeStart | `function` | 月份变化开始的回调函数                                          | -                                                                                                    |
| options.onMonthYearChangeEnd   | `function` | 月份变化完成的回调函数                                          | -                                                                                                    |
