# DatePickerView 日期选择器

嵌入页面的日期选择器。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "DatePickerView",
  "usingComponents": {
    "wux-segmented-control": "../../dist/segmented-control/index",
    "wux-date-picker-view": "../../dist/date-picker-view/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">DatePickerView</view>
    <view class="page__desc">日期选择器</view>
  </view>
  <view class="page__bd">
    <wux-segmented-control
      values="{{ ['zh_CN', 'zh_TW', 'en'] }}"
      bind:change="onChange"
    />
    <view class="sub-title">Default {{ displayValue1 }}</view>
    <wux-date-picker-view
      lang="{{ lang }}"
      value="{{ value1 }}"
      data-index="1"
      bind:valueChange="onValueChange"
    />
    <view class="sub-title">Mode = date {{ displayValue2 }}</view>
    <wux-date-picker-view
      mode="date"
      lang="{{ lang }}"
      value="{{ value2 }}"
      data-index="2"
      bind:valueChange="onValueChange"
    />
    <view class="sub-title">Mode = year {{ displayValue3 }}</view>
    <wux-date-picker-view
      mode="year"
      lang="{{ lang }}"
      value="{{ value3 }}"
      data-index="3"
      bind:valueChange="onValueChange"
    />
    <view class="sub-title">Mode = month {{ displayValue4 }}</view>
    <wux-date-picker-view
      mode="month"
      lang="{{ lang }}"
      value="{{ value4 }}"
      data-index="4"
      bind:valueChange="onValueChange"
    />
    <view class="sub-title">Mode = time {{ displayValue5 }}</view>
    <wux-date-picker-view
      mode="time"
      lang="{{ lang }}"
      value="{{ value5 }}"
      data-index="5"
      bind:valueChange="onValueChange"
    />
    <view class="sub-title">Use12Hours & datetime {{ displayValue6 }}</view>
    <wux-date-picker-view
      use12Hours
      mode="datetime"
      lang="{{ lang }}"
      value="{{ value6 }}"
      data-index="6"
      bind:valueChange="onValueChange"
    />
    <view class="sub-title">Use12Hours & time {{ displayValue7 }}</view>
    <wux-date-picker-view
      use12Hours
      mode="time"
      lang="{{ lang }}"
      value="{{ value7 }}"
      data-index="7"
      bind:valueChange="onValueChange"
    />
    <view class="sub-title">TillNow {{ displayValue8 }}</view>
    <wux-date-picker-view
      tillNow
      lang="{{ lang }}"
      value="{{ value8 }}"
      data-index="8"
      bind:valueChange="onValueChange"
    />
  </view>
</view>
```

```js
function getDateString(date = new Date()) {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  }
}

const { year, month, day, hour, minute } = getDateString()

Page({
  data: {
    value1: [year, month, day, hour, minute],
    value2: [year, month, day],
    value3: [year],
    value4: [year, month],
    value5: [hour, minute],
    value6: [year, month, day, hour, minute, '1'],
    value7: [hour, minute, '1'],
    value8: ['2029', '0', '1', '0', '0'],
    lang: 'zh_CN',
  },
  onChange(e) {
    console.log(e)
    const { key, values } = e.detail
    const lang = values[key]

    this.setData({
      lang,
    })
  },
  setValue(values, key) {
    this.setData({
      [`value${key}`]: !values.tillNow ? values.value : { tillNow: true },
      [`displayValue${key}`]: values.displayValue.join(' '),
    })
  },
  onValueChange(e) {
    const { index } = e.currentTarget.dataset
    this.setValue(e.detail, index)
    console.log(`onValueChange${index}`, e.detail)
  },
})
```

## 视频演示

[DatePickerView](./_media/date-picker-view.mp4 ':include :type=iframe width=375px height=667px')

## API

```ts
// ex. `yyyy-MM-dd hh:mm` | `yyyy-MM-dd` | `yyyy` | `yyyy-MM` | `hh:mm`
type DateString = string

// ex. `[year, monthIndex, date, hours, minutes, ampm]`
type StringArray = string[]

// ex. `new Date().getTime()`
type Timestamp = number

type PickerDate = DateString | StringArray | Timestamp | {
  tillNow?: boolean
}
```

### DatePickerView props

| 参数                 | 类型            | 描述                                                                                                 | 默认值                |
| -------------------- | --------------- | ---------------------------------------------------------------------------------------------------- | --------------------- |
| multiPickerPrefixCls | `string`        | multPicker 自定义类名前缀                                                                            | wux-picker            |
| pickerPrefixCls      | `string`        | picker 自定义类名前缀                                                                                | wux-picker-col        |
| value                | `PickerDate`           | 当前选中时间，例如字符串 `2000-02-01 00:00` 或时间戳 `949334400000` 或者数组 `['2000', '1', '1', '0', '0']` | -                     |
| itemHeight           | `number`        | 每列子元素的高度                                                                                     | 34                    |
| itemStyle            | `string,object` | 每列子元素的样式                                                                                     | -                     |
| indicatorStyle       | `string,object` | 设置选择器中间选中框的样式                                                                           | -                     |
| indicatorClass       | `string`        | 设置选择器中间选中框的类名                                                                           | -                     |
| maskStyle            | `string,object` | 设置蒙层的样式                                                                                       | -                     |
| maskClass            | `string`        | 设置蒙层的类名                                                                                       | -                     |
| labelAlign           | `string`        | 设置文本对齐方式，可选值为 right、center、left                                                       | center                |
| mode                 | `string`        | 日期选择的类型，可选值为 datetime、date、year、month、time                                           | datetime              |
| minuteStep           | `number`        | 分钟数递增步长                                                                                       | 1                     |
| use12Hours           | `boolean`       | 是否显示 12 小时制                                                                                   | false                 |
| minDate              | `any`           | 最小可选日期                                                                                         | `2000-02-01 00:00:00` |
| maxDate              | `any`           | 最大可选日期                                                                                         | `2030-02-01 23:59:59` |
| minHour              | `number`        | 最小可选小时                                                                                         | 0                     |
| maxHour              | `number`        | 最大可选小时                                                                                         | 23                    |
| minMinute            | `number`        | 最小可选分钟                                                                                         | 0                     |
| maxMinute            | `number`        | 最大可选分钟                                                                                         | 59                    |
| lang                 | `string`        | 返回文本的语言，可选值为 en、zh_CN、zh_TW                                                            | zh_CN                 |
| tillNow              | `boolean`       | 是否展示“至今”                                                                                       | false                 |
| bind:valueChange     | `function`      | 每列数据选择变化后的回调函数                                                                         | -                     |
