# Form 表单

表单组件，包含 `<Checkbox />`、`<Radio />`、`<Switch />`、`<Input />`、`<Rater />`、`<InputNumber />`、`<Textarea />`、`<Slider />`、`<Picker />`、`<DatePicker />`、`<PopupSelect />` 等元素。

- 表单元素需要使用 `<Field />` 来包裹，数据同步将被 `<Form />` 接管
- 无需再使用 `onChange` 来做同步，但还是可以继续监听 `onChange` 等事件
- 无需再使用 `value` 或 `defaultValue` 等属性来设置元素的值
- 如果使用 `Wux Weapp` 提供的 `<Form />` 表单，可以通过 `getFieldsValue` 来获取表单的值，也可以通过 `setFieldsValue` 来动态改变表单值
- 如果使用默认的 `<form/>` 表单，当点击 `<form/>` 表单中 `form-type` 为 `submit` 的 `<button/>` 组件时，会将表单组件中的 `value` 值进行提交

## 使用指南

### 在 page.json 中引入组件

```json
{
    "navigationBarTitleText": "Form",
    "usingComponents": {
        "wux-cell-group": "../../dist/cell-group/index",
        "wux-cell": "../../dist/cell/index",
        "wux-form": "../../dist/form/index",
        "wux-field": "../../dist/field/index",
        "wux-slider": "../../dist/slider/index",
        "wux-rater": "../../dist/rater/index",
        "wux-input-number": "../../dist/input-number/index",
        "wux-textarea": "../../dist/textarea/index",
        "wux-input": "../../dist/input/index",
        "wux-checkbox-group": "../../dist/checkbox-group/index",
        "wux-checkbox": "../../dist/checkbox/index",
        "wux-radio-group": "../../dist/radio-group/index",
        "wux-radio": "../../dist/radio/index",
        "wux-switch": "../../dist/switch/index",
        "wux-picker": "../../dist/picker/index",
        "wux-date-picker": "../../dist/date-picker/index",
        "wux-popup-select": "../../dist/popup-select/index"
    }
}
```

### 示例

```html
<view class="page">
    <view class="page__hd">
        <view class="page__title">Form</view>
        <view class="page__desc">表单</view>
    </view>
    <view class="page__bd">
        <view class="sub-title">Default Form</view>
        <form bindsubmit="formSubmit">
            <wux-checkbox-group name="checkbox" value="{{ checkbox }}" title="Checkbox" bind:change="onCheckboxChange">
                <wux-checkbox title="Java" value="1" />
                <wux-checkbox title="PHP" value="2" />
            </wux-checkbox-group>
            <wux-radio-group name="radio" value="{{ radio }}" title="Radio" bind:change="onRadioChange">
                <wux-radio title="Java" value="1" />
                <wux-radio title="PHP" value="2" />
            </wux-radio-group>
            <wux-cell-group title="Switch">
                <wux-cell>
                    <wux-switch name="switch" slot="footer" value="{{ switch }}" bind:change="onSwitchChange" />
                </wux-cell>
            </wux-cell-group>
            <wux-cell-group title="Input">
                <wux-cell hover-class="none">
                    <wux-field name="input" initialValue="123">
                        <wux-input label="Input" />
                    </wux-field>
                </wux-cell>
            </wux-cell-group>
            <wux-cell-group title="Rater">
                <wux-cell hover-class="none">
                    <wux-field name="rater" initialValue="{{ 2 }}" slot="footer">
                        <wux-rater />
                    </wux-field>
                </wux-cell>
            </wux-cell-group>
            <wux-cell-group title="InputNumber">
                <wux-cell hover-class="none">
                    <wux-field name="inputNumber" initialValue="{{ 20 }}">
                        <wux-input-number />
                    </wux-field>
                </wux-cell>
            </wux-cell-group>
            <wux-cell-group title="Textarea">
                <wux-cell hover-class="none">
                    <wux-field name="textarea" initialValue="456">
                        <wux-textarea rows="3" />
                    </wux-field>
                </wux-cell>
            </wux-cell-group>
            <wux-cell-group title="Slider">
                <wux-cell hover-class="none">
                    <wux-field name="slider" initialValue="{{ [10, 80] }}">
                        <wux-slider />
                    </wux-field>
                </wux-cell>
            </wux-cell-group>
            <wux-cell-group title="Picker">
                <wux-field name="picker" initialValue="{{ picker }}">
                    <wux-picker options="{{ options1 }}" cascade bind:change="onValueChange">
                        <wux-cell title="Picker" is-link extra="{{ picker }}"></wux-cell>
                    </wux-picker>
                </wux-field>
            </wux-cell-group>
            <wux-cell-group title="DatePicker">
                <wux-field name="datePicker" initialValue="{{ datePicker }}">
                    <wux-date-picker bind:change="onDatePickerChange">
                        <wux-cell title="DatePicker" is-link extra="{{ datePicker }}"></wux-cell>
                    </wux-date-picker>
                </wux-field>
            </wux-cell-group>
            <wux-cell-group title="PopupSelect">
                <wux-field name="popupSelect" initialValue="{{ popupSelect }}">
                    <wux-popup-select options="{{ options2 }}" bind:change="onPopupSelectChange">
                        <wux-cell title="PopupSelect" is-link extra="{{ popupSelect }}"></wux-cell>
                    </wux-popup-select>
                </wux-field>
            </wux-cell-group>
            <view class="btn-area">
                <button formType="submit">Default Form Submit</button>
            </view>
        </form>
        <view class="sub-title">Wux Form</view>
        <wux-form id="wux-form" bind:change="onChange">
            <wux-field name="checkbox" initialValue="{{ checkbox }}">
                <wux-checkbox-group>
                    <wux-checkbox title="Java" value="1" />
                    <wux-checkbox title="PHP" value="2" />
                </wux-checkbox-group>
            </wux-field>
            <wux-field name="radio" initialValue="{{ radio }}">
                <wux-radio-group title="Radio">
                    <wux-radio title="Java" value="1" />
                    <wux-radio title="PHP" value="2" />
                </wux-radio-group>
            </wux-field>
            <wux-cell-group title="Switch">
                <wux-cell>
                    <wux-field name="switch" initialValue="{{ switch }}" valuePropName="inputChecked" slot="footer">
                        <wux-switch />
                    </wux-field>
                </wux-cell>
            </wux-cell-group>
            <wux-cell-group title="Input">
                <wux-cell hover-class="none">
                    <wux-field name="input" initialValue="123">
                        <wux-input label="Input" />
                    </wux-field>
                </wux-cell>
            </wux-cell-group>
            <wux-cell-group title="Rater">
                <wux-cell hover-class="none">
                    <wux-field name="rater" initialValue="{{ 2 }}" slot="footer">
                        <wux-rater />
                    </wux-field>
                </wux-cell>
            </wux-cell-group>
            <wux-cell-group title="InputNumber">
                <wux-cell hover-class="none">
                    <wux-field name="inputNumber" initialValue="{{ 20 }}">
                        <wux-input-number />
                    </wux-field>
                </wux-cell>
            </wux-cell-group>
            <wux-cell-group title="Textarea">
                <wux-cell hover-class="none">
                    <wux-field name="textarea" initialValue="456">
                        <wux-textarea rows="3" />
                    </wux-field>
                </wux-cell>
            </wux-cell-group>
            <wux-cell-group title="Slider">
                <wux-cell hover-class="none">
                    <wux-field name="slider" initialValue="{{ [10, 80] }}">
                        <wux-slider />
                    </wux-field>
                </wux-cell>
            </wux-cell-group>
            <wux-cell-group title="Picker">
                <wux-field name="picker" initialValue="{{ picker }}">
                    <wux-picker options="{{ options1 }}" cascade bind:change="onValueChange">
                        <wux-cell title="Picker" is-link extra="{{ picker }}"></wux-cell>
                    </wux-picker>
                </wux-field>
            </wux-cell-group>
            <wux-cell-group title="DatePicker">
                <wux-field name="datePicker" initialValue="{{ datePicker }}">
                    <wux-date-picker bind:change="onDatePickerChange">
                        <wux-cell title="DatePicker" is-link extra="{{ datePicker }}"></wux-cell>
                    </wux-date-picker>
                </wux-field>
            </wux-cell-group>
            <wux-cell-group title="PopupSelect">
                <wux-field name="popupSelect" initialValue="{{ popupSelect }}">
                    <wux-popup-select options="{{ options2 }}" bind:change="onPopupSelectChange">
                        <wux-cell title="PopupSelect" is-link extra="{{ popupSelect }}"></wux-cell>
                    </wux-popup-select>
                </wux-field>
            </wux-cell-group>
            <view class="btn-area">
                <button bindtap="onSubmit">Wux Form Submit</button>
                <button bindtap="onReset">Wux Form Reset</button>
            </view>
        </wux-form>
    </view>
</view>
```

```js
import { $wuxForm } from '../../dist/index'
import data from '../cascader/data'

Page({
    data: {
        checkbox: ['1'],
        radio: '1',
        switch: true,
        picker: [],
        datePicker: [],
        popupSelect: '猎人',
        options1: [],
        options2: ['法官', '医生', '猎人', '学生', '记者', '其他'],
    },
    onLoad() {
        this.setData({ options1: data })
    },
    onCheckboxChange(e) {
        const { value } = e.detail
        const data = this.data.checkbox
        const index = data.indexOf(value)
        const checkbox = index === -1 ? [...data, value] : data.filter((n) => n !== value)

        this.setData({ checkbox })
    },
    onRadioChange(e) {
        this.setData({ radio: e.detail.value })
    },
    onSwitchChange(e) {
        this.setData({ switch: e.detail.value })
    },
    onValueChange(e) {
        this.setData({ picker: e.detail.value })
    },
    onDatePickerChange(e) {
        this.setData({ datePicker: e.detail.value })
    },
    onPopupSelectChange(e) {
        this.setData({ popupSelect: e.detail.value })
    },
    formSubmit(e) {
        console.log('Default Form Submit \n', e.detail.value)
    },
    onSubmit() {
        const { getFieldsValue, getFieldValue, setFieldsValue } = $wuxForm()
        const value = getFieldsValue()

        console.log('Wux Form Submit \n', value)
    },
    onChange(e) {
        const { form, changedValues, allValues } = e.detail

        console.log('onChange \n', changedValues, allValues)
    },
    onReset() {
        const { getFieldsValue, setFieldsValue } = $wuxForm()
        const fields = getFieldsValue()

        for (let item in fields) {
            if ({}.hasOwnProperty.call(fields, item)) {
                if (Array.isArray(fields[item])) {
                    fields[item] = []
                    if (item === 'slider') {
                        fields[item] = [10, 80]
                    }
                } else if (typeof fields[item] === 'boolean') {
                    fields[item] = false
                } else if (typeof fields[item] === 'number') {
                    fields[item] = 0
                } else {
                    fields[item] = ''
                }
            }
        }

        setFieldsValue({
            ...fields,
        })
    },
})
```

## 视频演示

[Form](./_media/form.mp4 ':include :type=iframe width=375px height=667px')

## API

### Form props

| 参数 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| bind:change | `function` | 任一表单元素的值发生改变时的回调函数 | - |

### Field props

| 参数 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| name | `string` | 在表单中的字段名 | - |
| initialValue | `any` | 子节点的初始值 | - |
| valuePropName | `string` | 子节点的值的属性，如 Switch 的是 `inputChecked` | inputValue |
| trigger | `string` | 收集子节点的值的时机 | onChange |

### Form.method

| 参数 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| getFieldsValue | `function` | 获取一组输入控件的值，如不传入参数，则获取全部组件的值 | - |
| getFieldValue | `function` | 获取一个输入控件的值 | - |
| setFieldsValue | `function` | 设置一组输入控件的值 | - |
| setFields | `function` | 设置一组输入控件的值 | - |
| resetFields | `function` | 重置一组输入控件的值（为 initialValue）与状态，如不传入参数，则重置所有组件 | - |

!> 该组件主要依靠 JavaScript 主动调用，所以一般只需在 wxml 中添加一个组件，并设置 id 为 `#wux-form` 或其他，之后在 page.js 中调用 `$wuxForm(id)` 获取匹配到的第一个组件实例对象。

```
const { getFieldsValue, setFieldsValue } = $wuxForm()
const fields = getFieldsValue()
```