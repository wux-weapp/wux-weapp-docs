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
        "wux-segmented-control": "../../dist/segmented-control/index",
        "wux-touch-view": "../../dist/touch-view/index",
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
        "wux-selectable": "../../dist/selectable/index",
        "wux-selector-group": "../../dist/selector-group/index",
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
        <wux-segmented-control values="{{ ['horizontal', 'vertical'] }}" bind:change="onSegmentedControlChange" />
        <wux-form
            id="wux-form"
            layout="{{ layout }}"
            title="{{ layout === 'horizontal' ? '水平布局表单' : '竖直布局表单' }}"
            validateMessages="{{ validateMessages }}"
            bind:change="onValuesChange"
            bind:fieldsChange="onFieldsChange"
        >
            <wux-field name="name" label="姓名" initialValue="WuxUI" rules="{{ [{ required: true, message: '姓名不能为空' }, { type: 'string', min: 2, message: '姓名最少2个字符' }] }}">
                <wux-input placeholder="请输入姓名" clear />
            </wux-field>
            <wux-field name="picker" label="城市" initialValue="{{ [] }}" trigger="onConfirm" rules="{{ [{ required: true, type: 'array' }] }}" isLink>
                <wux-picker options="{{ options1 }}" cascade bind:confirm="onPickerChange">
                    <wux-touch-view>{{ pickerLabel || '请选择城市' }}</wux-touch-view>
                </wux-picker>
            </wux-field>
            <wux-field name="address" label="地址" help="详情地址">
                <wux-textarea placeholder="请输入地址" hasCount rows="2" maxlength="100" clear />
            </wux-field>
            <wux-field name="checkbox" label="商品" initialValue="{{ [] }}" rules="{{ [{ required: true, max: 2, type: 'array' }] }}" >
                <wux-checkbox-group bind:change="onCheckboxChange">
                    <wux-checkbox title="兔头" value="1" />
                    <wux-checkbox title="兔腿" value="2" />
                    <wux-checkbox title="整兔" value="3" />
                </wux-checkbox-group>
            </wux-field>
            <wux-field name="radio" label="口味" initialValue="{{ '' }}" rules="{{ [{ required: true }] }}">
                <wux-radio-group withListComponent="{{ false }}" bind:change="onRadioChange">
                    <wux-radio title="烟熏" value="1" />
                    <wux-radio title="风干" value="2" />
                </wux-radio-group>
            </wux-field>
            <wux-field name="rater" label="辣度" initialValue="{{ 2 }}" childElementPosition="{{ layout === 'horizontal' ? 'right' : 'none' }}">
                <wux-rater />
            </wux-field>
            <wux-field name="inputNumber" label="数量" initialValue="{{ 2 }}" rules="{{ [{ min: 1, max: 5, type: 'number' }] }}" childElementPosition="{{ layout === 'horizontal' ? 'right' : 'none' }}">
                <wux-input-number />
            </wux-field>
            <wux-field name="slider" label="运费险" initialValue="{{ [10] }}">
                <wux-slider step="10" showMark />
            </wux-field>
            <wux-field name="switch" label="送货上门" initialValue="{{ switch }}" valuePropName="inputChecked" childElementPosition="{{ layout === 'horizontal' ? 'right' : 'none' }}">
                <wux-switch />
            </wux-field>
            <wux-field name="datePicker" label="送货日期（带清除图标）" initialValue="{{ [] }}" trigger="onConfirm" rules="{{ [{ required: true, type: 'array' }] }}" isLink="{{ !datePickerLabel }}" align="center" labelWrap>
                <wux-date-picker mode="date" bind:confirm="onDatePickerChange">
                    <wux-touch-view>{{ datePickerLabel || '请选择日期' }}</wux-touch-view>
                </wux-date-picker>
                <icon slot="arrow" type="clear" color="#B2B2B2" size="14" bindtap="onArrowClick" wx:if="{{ datePickerLabel }}" />
            </wux-field>
            <wux-field name="popupSelect" label="快递服务" initialValue="{{ '' }}" trigger="onConfirm" rules="{{ [{ required: true }] }}" isLink>
                <wux-popup-select options="{{ options2 }}" bind:confirm="onPopupSelectChange" >
                    <wux-touch-view>{{ popupSelectLabel || '请选择快递' }}</wux-touch-view>
                </wux-popup-select>
            </wux-field>
            <wux-field name="selectorGroup" label="付款方式" initialValue="{{ [] }}" rules="{{ [{ required: true }] }}">
                <wux-selector-group columns="2" options="{{ ['到柜支付', '先寄后付'] }}" />
            </wux-field>
            <wux-field name="code" label="验证码" rules="{{ [{ required: true }, { validator: 'checkCode' }] }}">
                <wux-input placeholder="请输入验证码" clear />
                <text slot="extra" style="color: #387ef5; padding-left: 12px;" bindtap="onSendCode">发送验证码</text>
            </wux-field>
            <wux-field name="password" label="密码" initialValue="" rules="{{ [{ required: true }, { validator: 'validateToNextPassword' }] }}">
                <wux-input placeholder="请输入密码" clear password visibilityToggle />
            </wux-field>
            <wux-field name="confirm" label="确认密码" initialValue="" rules="{{ [{ required: true }, { validator: 'compareToFirstPassword' }] }}">
                <wux-input placeholder="请输入确认密码" clear password visibilityToggle bind:blur="handleConfirmBlur" />
            </wux-field>
            <wux-field name="author" label="禁用" disabled>
                <wux-input placeholder="被禁用的输入框" />
            </wux-field>
            <wux-field name="website" label="只读" readOnly>
                <wux-input placeholder="只读模式的输入框" />
            </wux-field>
            <wux-field name="id" label="编号" initialValue="{{ '0001' }}" hidden>
                <wux-input />
            </wux-field>
            <wux-field name="email" label="邮箱" initialValue="" rules="{{ !checkEmail ? [] : [{ type: 'email', message: '输入的邮箱无效！' }, { required: true, message: '请输入您的邮箱！' }] }}">
                <wux-input placeholder="请输入邮箱" clear />
            </wux-field>
            <wux-field name="agreement" initialValue="{{ false }}" valuePropName="inputChecked">
                <wux-selectable bind:change="onSelectableChange">邮箱是必填的</wux-selectable>
            </wux-field>
            <view slot="footer" class="btn-area btn-area_auto">
                <button type="primary" bindtap="onSubmit">Wux Form Submit</button>
                <button bindtap="onReset">Wux Form Reset</button>
                <button bindtap="onFill">Fill in the code</button>
            </view>
        </wux-form>        
    </view>
</view>
```

```js
import { $wuxForm } from '../../dist/index'
import data from '../cascader/data'

function getDateString(date = new Date) {
    return {
        year: date.getFullYear() + '',
        month: date.getMonth() + '',
        day: date.getDate() + '',
        hour: date.getHours() + '',
        minute: date.getMinutes() + '',
    }
}

const { year, month, day, hour, minute } = getDateString()

Page({
    data: {
        checkbox: ['1'],
        radio: '1',
        switch: true,
        picker: [],
        datePicker: [],
        // datePicker: [year, month, day, hour, minute],
        popupSelect: '',
        options1: [],
        options2: ['顺丰速运', '中通快递', '圆通快递', '申通快递', '韵达快递', '天天快递', '京东物流'],
        layout: 'horizontal',
        validateMessages: {
            required: '%s 字段为必填',
        },
        confirmDirty: false,
    },
    onLoad() {
        this.setData({ options1: data })
    },
    onSegmentedControlChange(e) {
        console.log(e)
        const { key, values } = e.detail
        const layout = values[key]

        this.setData({
            layout,
        })
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
    onPickerChange(e) {
        this.setData({ picker: e.detail.value, pickerLabel: e.detail.label })
    },
    onDatePickerChange(e) {
        this.setData({ datePicker: e.detail.value, datePickerLabel: e.detail.label })
    },
    onArrowClick() {
        const { setFieldsValue } = $wuxForm()
        setFieldsValue({ datePicker: [] })
        this.setValues({ datePicker: [] }, true)
    },
    onPopupSelectChange(e) {
        this.setData({ popupSelect: e.detail.value, popupSelectLabel: e.detail.label })
    },
    onSelectableChange(e) {
        this.setData({ checkEmail: e.detail.checked }, () => {
            const form = $wuxForm()
            form.validateFields(['email'], { force: true })
        })
    },
    formSubmit(e) {
        console.log('Default Form Submit \n', e.detail.value)
    },
    onSubmit() {
        const { validateFields } = $wuxForm()
        validateFields((err, values) => {
            if (!err) {
                wx.showModal({
                    content: JSON.stringify(values, null, 2),
                    showCancel: !1,
                })
                console.log('Received values of form: ', values);
            }
        })
    },
    onValuesChange(e) {
        const { changedValues, allValues } = e.detail
        this.setValues(changedValues)

        console.log('onValuesChange \n', changedValues, allValues)
    },
    onFieldsChange(e) {
        console.log('onFieldsChange \n', e.detail)
    },
    onReset() {
        const { getFieldsValue, resetFields } = $wuxForm()
        resetFields()
        const values = getFieldsValue()
        this.setValues({ ...values, checkEmail: false })

        console.log('Wux Form Reset \n', values)
    },
    onFill() {
        const { setFieldsValue } = $wuxForm()
        setFieldsValue({
            code: this.data.codeMSG || '1234',
        })
    },
    setValues(changedValues, clearLabel) {
        Object.keys(changedValues).forEach((field) => {
            this.setData(clearLabel ? {
                [field]: changedValues[field],
                [`${field}Label`]: null,
            }: {
                [field]: changedValues[field],
            })
        })
    },
    onSendCode() {
        const NUMBER_STRING = '0123456789';
        const randomNum = (min, max) => {
            return Math.floor(Math.random() * (max - min) + min);
        }
        const codeMSG = [...new Array(4)].map(_ => NUMBER_STRING[randomNum(0, NUMBER_STRING.length)]).join('')
      
        this.setData({
            codeMSG,
        })
        wx.showModal({
            content: `【WuxUI】验证码：${codeMSG}，有效期10分钟，请勿泄露。`,
            showCancel: !1,
        })
    },
    checkCode(rule, value) {
        if (!value) {
            return Promise.reject(new Error('验证码不能为空!'))
        }
        if (this.data.codeMSG && value === this.data.codeMSG) {
            return Promise.resolve()
        }
        return Promise.reject(new Error('验证码输入错误!'))
    },
    validateToNextPassword(rule, value, callback){
        const form = $wuxForm()
        if (value && this.data.confirmDirty) {
            form.validateFields(['confirm'], { force: true })
        }
        callback()
    },
    compareToFirstPassword(rule, value, callback) {
        const form = $wuxForm()
        if (value && value !== form.getFieldValue('password')) {
            callback('您输入的两个密码不一致！')
        } else {
            callback()
        }
    },
    handleConfirmBlur(e) {
        const { value } = e.detail
        this.setData({ confirmDirty: this.data.confirmDirty || !!value })
    },
})
```

## 视频演示

[Form](./_media/form.mp4 ':include :type=iframe width=375px height=667px')

## API

### Form props

| 参数        | 类型       | 描述                                 | 默认值 |
| ----------- | ---------- | ------------------------------------ | ------ |
| prefixCls | `string` | 自定义类名前缀，当 layout 不为 none 时才生效 | -      |
| cellGroupPrefixCls | `string` | 自定义 cellGroup 类名前缀，当 layout 不为 none 时才生效 | -      |
| title | `string` | 标题，当 layout 不为 none 时才生效 | -      |
| label | `string` | 描述，当 layout 不为 none 时才生效 | -      |
| mode               | `string`        | 支持默认和卡片两种模式，可选值为 default、card，当 layout 不为 none 时才生效 | default |
| bodyStyle          | `string,object` | 自定义样式，当 layout 不为 none 时才生效 | -                   |
| layout | `string` | 布局，可选值为 none、horizontal、vertical | none      |
| validateMessages | `object` | 默认验证字段的信息 | -      |
| requiredMarkStyle | `string` | 必填选填的标记样式，可选值为 asterisk、text-required、text-optional、none | asterisk      |
| asteriskText | `string` | 必填的符号 | *      |
| requiredText | `string` | 必填的文字 | 必填      |
| optionalText | `string` | 选填的文字 | 选填      |
| disabled           | `boolean`       | 是否禁用                                       | false              |
| readOnly           | `boolean`       | 是否只读                                       | false              |
| bind:change | `function` | 任一表单元素的值发生改变时的回调函数 | -      |

### Form slot

| 名称   | 描述           |
| ------ | -------------- |
| -      | 自定义内容     |
| footer | 自定义底部内容 |

### Field props

| 参数          | 类型     | 描述                                            | 默认值     |
| ------------- | -------- | ----------------------------------------------- | ---------- |
| prefixCls | `string` | 自定义类名前缀，当 layout 不为 none 时才生效 | -      |
| name          | `string` | 在表单中的字段名                                | -          |
| initialValue  | `any`    | 子节点的初始值                                  | -          |
| valuePropName | `string` | 子节点的值的属性，如 Switch 的是 `inputChecked` | inputValue |
| trigger       | `string` | 收集子节点的值的时机                            | onChange   |
| validate       | `array` | 自定义校验                            | []   |
| validateTrigger       | `string,array` | 设置字段校验的时机                            | onChange   |
| preserve       | `boolean` | 当字段被删除时保留字段值                            | false   |
| rules       | `array` | 校验规则，设置字段的校验逻辑                            | []   |
| validateFirst       | `boolean` | 当某一规则校验不通过时，是否停止剩下的规则的校验 | false   |
| hidden       | `boolean` | 是否隐藏整个字段                           | false   |
| childElementPosition       | `string` | 表单控件部分的位置，可选值为 none、normal、right | none   |
| validateStatus       | `string`   | 校验状态，如不设置，则会根据校验规则自动生成，可选值为 success、warning、error、validating | -       |
| required       | `boolean`   | 是否必选 | false       |
| help       | `string`   | 提示文本，内部使用 `popover` 组件展示 | -       |
| hasFeedback       | `boolean`   | 配合 validateStatus 属性使用，展示校验状态下的提示文本 | true       |
| label       | `string`   | 描述 | -      |
| labelWrap       | `boolean`   | 支持 label 标签的文本换行方式 | false      |
| extra               | `string`   | 右侧内容 | -              |
| isLink               | `boolean`  | 是否展示右侧箭头 | false            |
| align                | `string`   | 对齐方式，可选值为 flex-start、center | flex-start            |
| disabled           | `boolean`       | 是否禁用                                       | false              |
| readOnly           | `boolean`       | 是否只读                                       | false              |

### Form.method

| 参数           | 类型       | 描述                                                                        | 默认值 |
| -------------- | ---------- | --------------------------------------------------------------------------- | ------ |
| getFieldsValue | `function` | 获取一组输入控件的值，如不传入参数，则获取全部组件的值                      | -      |
| getFieldValue  | `function` | 获取一个输入控件的值                                                        | -      |
| setFieldsValue | `function` | 设置一组输入控件的值                                                        | -      |
| setFields      | `function` | 设置一组输入控件的值                                                        | -      |
| resetFields    | `function` | 重置一组输入控件的值（为 initialValue）与状态，如不传入参数，则重置所有组件 | -      |

!> 该组件主要依靠 JavaScript 主动调用，所以一般只需在 wxml 中添加一个组件，并设置 id 为 `#wux-form` 或其他，之后在 page.js 中调用 `$wuxForm(id)` 获取匹配到的第一个组件实例对象。

```js
const { getFieldsValue, setFieldsValue } = $wuxForm()
const fields = getFieldsValue()
```

### validateMessages

!> Form 为验证提供了默认的错误提示信息 ，你可以通过配置 validateMessages 属性，修改对应的提示模板。

```js
const validateMessages = {
  required: "'${name}' 是必选字段",
  // ...
};
<wux-form validateMessages="{{ validateMessages }}"/>;
```

### 校验规则

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| defaultField | `object` | 仅在 `type` 为 `array` 类型时有效，用于指定数组元素的校验规则 |
| enum | `any[]` | 是否匹配枚举中的值（需要将 `type` 设置为 `enum`） |
| len | `number` | string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度 |
| max | `number` | 必须设置 `type`：string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度 |
| message | `string` | 错误信息，不设置时会通过 validatemessages 自动生成 |
| min | `number` | 必须设置 `type`：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度 |
| pattern | `string` | 正则表达式匹配 |
| required | `boolean` | 是否为必选字段 |
| transform | `string` | 将字段值转换成目标值后进行校验 |
| type | `string` | 类型，常见有 `string`,`number`,`boolean`,`url`,`email`。更多请参考[此处](https://github.com/yiminghe/async-validator#type) |
| validateTrigger | `string,string[]` | 设置触发验证时机，必须是 Field 的 `validateTrigger` 的子集 |
| validator |  `string` |自定义校验，接收 Promise 作为返回值。[示例](#自定义表单验证)参考 |
| whitespace | `boolean` | 如果字段仅包含空格则校验不通过，只在 `type: 'string'` 时生效 |

更多高级用法可研究 [async-validator](https://github.com/yiminghe/async-validator)。

!> 注意：由于小程序 data 不支持传入 RegExp & function，所以在设置 rules 的 `pattern` & `transform` & `validator` 字段时需要传入字符串映射！！！

### 自定义表单验证

```js
Page({
  checkCode(rule, value) {
      if (!value) {
          return Promise.reject(new Error('验证码不能为空!'))
      }
      if (this.data.codeMSG && value === this.data.codeMSG) {
          return Promise.resolve()
      }
      return Promise.reject(new Error('验证码输入错误!'))
  },
  // ...
})

<wux-form layout="horizontal">
    <wux-field name="code" label="验证码" rules="{{ [{ required: true }, { validator: 'checkCode' }] }}">
        <wux-input placeholder="请输入验证码" clear />
        <text slot="extra" style="color: #387ef5; padding-left: 12px;" bindtap="onSendCode">发送验证码</text>
    </wux-field>
</wux-form>
```

### Field 如何配合 Picker / DatePicker / CascadePicker 使用？

在绝大多数情况下，我们需要实现的效果是，点击外层的 Field，会触发内部 Picker 的显示。但是，在 Field 上，怎么才能控制到 Picker 呢？或许你会想自己声明一个 data 来手动控制，例如：

```js
Page({
    data: {
        visible: false,
    },
    onOpen() {
        this.setData({
            visible: true,
        })
    },
    onClose() {
        this.setData({
            visible: false,
        })
    },
    onConfirm(e) {
        this.setData({ 
            birthdayLabel: e.detail.label,
        })
    },
})

<wux-date-picker
  visible="{{ visible }}"
  controlled
  mode="date"
  bind:visibleChange="onClose"
  bind:confirm="onConfirm"
/>
<wux-form layout="horizontal">
    <wux-field
        name="birthday"
        label="Birthday"
        initialValue="{{ [] }}"
        trigger="onConfirm"
        isLink
        bindtap="onOpen"
    >
        {{ birthdayLabel || '请选择日期' }}
    </wux-field>
</wux-form> 
```

但是这样写实在是太繁琐了，而且如果一个表单内存在多个 Picker 时，简直会令人崩溃。

所以 Form 提供了一个便捷方法。你可以在 Picker 内的嵌套 touchView 组件，内部会拦截其点击事件并触发 Picker 的显示及隐藏。

```js
Page({
    onConfirm(e) {
        this.setData({ 
            birthdayLabel: e.detail.label,
        })
    },
})

<wux-form layout="horizontal">
    <wux-field
        name="birthday"
        label="Birthday"
        initialValue="{{ [] }}"
        trigger="onConfirm"
        isLink
    >
        <wux-date-picker mode="date" bind:confirm="onConfirm">
            <wux-touch-view>{{ birthdayLabel || '请选择日期' }}</wux-touch-view>
        </wux-date-picker>
    </wux-field>
</wux-form> 
```
