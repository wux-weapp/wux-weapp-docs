# DatePicker 日期选择器

用于选择日期或者时间。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "DatePicker",
  "usingComponents": {
    "wux-segmented-control": "../../dist/segmented-control/index",
    "wux-date-picker": "../../dist/date-picker/index",
    "wux-cell-group": "../../dist/cell-group/index",
    "wux-cell": "../../dist/cell/index",
    "wux-button": "../../dist/button/index"
  }
}
```

### 示例

```html
<wux-date-picker
  visible="{{ visible }}"
  controlled
  mode="datetime"
  value="{{ value1 }}"
  lang="{{ lang }}"
  data-index="1"
  data-mode="datetime"
  bind:confirm="onConfirm"
  bind:visibleChange="onVisibleChange"
/>

<view class="page">
  <view class="page__hd">
    <view class="page__title">DatePicker</view>
    <view class="page__desc">日期选择器</view>
  </view>
  <view class="page__bd">
    <wux-segmented-control
      values="{{ ['zh_CN', 'zh_TW', 'en'] }}"
      bind:change="onChange"
    />
    <wux-cell-group title="Default">
      <wux-date-picker
        mode="datetime"
        value="{{ value1 }}"
        lang="{{ lang }}"
        data-index="1"
        data-mode="datetime"
        bind:confirm="onConfirm"
      >
        <wux-cell
          title="Datetime"
          is-link
          extra="{{ displayValue1 }}"
        ></wux-cell>
      </wux-date-picker>
      <wux-date-picker
        mode="date"
        value="{{ value2 }}"
        lang="{{ lang }}"
        data-index="2"
        data-mode="date"
        bind:confirm="onConfirm"
      >
        <wux-cell title="Date" is-link extra="{{ displayValue2 }}"></wux-cell>
      </wux-date-picker>
      <wux-date-picker
        mode="year"
        value="{{ value3 }}"
        lang="{{ lang }}"
        data-index="3"
        data-mode="year"
        bind:confirm="onConfirm"
      >
        <wux-cell title="Year" is-link extra="{{ displayValue3 }}"></wux-cell>
      </wux-date-picker>
      <wux-date-picker
        mode="month"
        value="{{ value4 }}"
        lang="{{ lang }}"
        data-index="4"
        data-mode="month"
        bind:confirm="onConfirm"
      >
        <wux-cell title="Month" is-link extra="{{ displayValue4 }}"></wux-cell>
      </wux-date-picker>
      <wux-date-picker
        mode="time"
        value="{{ value5 }}"
        lang="{{ lang }}"
        data-index="5"
        data-mode="time"
        bind:confirm="onConfirm"
      >
        <wux-cell title="Time" is-link extra="{{ displayValue5 }}"></wux-cell>
      </wux-date-picker>
    </wux-cell-group>
    <wux-cell-group title="Use12Hours">
      <wux-date-picker
        mode="datetime"
        value="{{ value6 }}"
        lang="{{ lang }}"
        use12Hours
        data-index="6"
        data-mode="datetime"
        bind:confirm="onConfirm"
      >
        <wux-cell
          title="Datetime"
          is-link
          extra="{{ displayValue6 }}"
        ></wux-cell>
      </wux-date-picker>
      <wux-date-picker
        mode="time"
        value="{{ value7 }}"
        lang="{{ lang }}"
        use12Hours
        data-index="7"
        data-mode="time"
        bind:confirm="onConfirm"
      >
        <wux-cell title="Time" is-link extra="{{ displayValue7 }}"></wux-cell>
      </wux-date-picker>
    </wux-cell-group>
    <wux-cell-group title="MinuteStep">
      <wux-date-picker
        mode="datetime"
        value="{{ value8 }}"
        lang="{{ lang }}"
        minuteStep="10"
        data-index="8"
        data-mode="datetime"
        bind:confirm="onConfirm"
      >
        <wux-cell
          title="Datetime"
          is-link
          extra="{{ displayValue8 }}"
        ></wux-cell>
      </wux-date-picker>
      <wux-date-picker
        mode="time"
        value="{{ value9 }}"
        lang="{{ lang }}"
        minuteStep="10"
        data-index="9"
        data-mode="time"
        bind:confirm="onConfirm"
      >
        <wux-cell title="Time" is-link extra="{{ displayValue9 }}"></wux-cell>
      </wux-date-picker>
    </wux-cell-group>
    <wux-cell-group title="TillNow">
      <wux-date-picker
        tillNow
        mode="datetime"
        value="{{ value10 }}"
        lang="{{ lang }}"
        data-index="10"
        data-mode="datetime"
        bind:confirm="onConfirm"
      >
        <wux-cell
          title="Datetime"
          is-link
          extra="{{ displayValue10 }}"
        ></wux-cell>
      </wux-date-picker>
    </wux-cell-group>
    <view class="button-sp-area">
      <wux-button block type="light" bind:click="onClick"
        >Button click - {{ displayValue1 }}</wux-button
      >
    </view>
  </view>
</view>
```

```js
Page({
  data: {
    value1: [year, month, day, hour, minute],
    value2: [year, month, day],
    value3: [year],
    value4: [year, month],
    value5: [hour, minute],
    value6: [year, month, day, hour, minute, '1'],
    value7: [hour, minute, '1'],
    value8: '2020-02-02 02:02',
    value9: '1580580120000',
    value10: ['2029', '0', '1', '0', '0'],
    displayValue1: '请选择',
    displayValue2: '请选择',
    displayValue3: '请选择',
    displayValue4: '请选择',
    displayValue5: '请选择',
    displayValue6: '请选择',
    displayValue7: '请选择',
    displayValue8: '请选择',
    displayValue9: '请选择',
    displayValue10: '请选择',
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
  setValue(values, key, mode) {
    this.setData({
      [`value${key}`]: !values.tillNow ? values.value : { tillNow: true },
      [`displayValue${key}`]: values.label,
      // [`displayValue${key}`]: values.displayValue.join(' '),
    })
  },
  onConfirm(e) {
    const { index, mode } = e.currentTarget.dataset
    this.setValue(e.detail, index, mode)
    console.log(`onConfirm${index}`, e.detail)
  },
  onVisibleChange(e) {
    this.setData({ visible: e.detail.visible })
  },
  onClick() {
    this.setData({ visible: true })
  },
})
```

## 视频演示

[DatePicker](./_media/date-picker.mp4 ':include :type=iframe width=375px height=667px')

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

### DatePicker props

| 参数                 | 类型            | 描述                                                                                                 | 默认值                |
| -------------------- | --------------- | ---------------------------------------------------------------------------------------------------- | --------------------- |
| prefixCls            | `string`        | 自定义类名前缀                                                                                       | wux-date-picker       |
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
| toolbar              | `object`        | 工具栏配置项                                                                                         | {}                    |
| toolbar.title        | `string`        | 标题的文字                                                                                           | 请选择                |
| toolbar.cancelText   | `string`        | 取消按钮的文字                                                                                       | 取消                  |
| toolbar.confirmText  | `string`        | 确定按钮的文字                                                                                       | 确定                  |
| trigger              | `string`        | 触发事件，当包裹的子元素为 `<wux-cell />` 时，点击控制组件显隐                                       | onClick               |
| defaultVisible       | `boolean`       | 默认是否显隐，当 `controlled` 为 `false` 时才生效                                                    | false                 |
| visible              | `boolean`       | 用于手动控制组件显隐，当 `controlled` 为 `true` 时才生效                                             | false                 |
| controlled           | `boolean`       | 是否受控 [说明文档](controlled.md)                                                                   | false                 |
| disabled             | `boolean`       | 是否禁用                                                                                             | false                 |
| bind:change          | `function`      | 选择完成后的回调函数                                                                                 | -                     |
| bind:confirm         | `function`      | 点击确定按钮时的回调函数                                                                             | -                     |
| bind:cancel          | `function`      | 点击取消按钮时的回调函数                                                                             | -                     |
| bind:visibleChange   | `function`      | 当显隐状态变化时的回调函数                                                                           | -                     |
| bind:valueChange     | `function`      | 每列数据选择变化后的回调函数                                                                         | -                     |

### DatePicker slot

| 名称 | 描述                         |
| ---- | ---------------------------- |
| -    | 建议包裹 `<wux-cell />` 组件 |
