# Cascader 级联选择器

用于一组相关联的数据集合进行选择，例如省市区等。

## 使用指南

### 在 page.json 中引入组件

```json
{
    "navigationBarTitleText": "Cascader",
    "usingComponents": {
        "wux-cell-group": "../../dist/cell-group/index",
        "wux-cell": "../../dist/cell/index",
        "wux-cascader": "../../dist/cascader/index"
    }
}
```

### 示例

```html
<wux-cascader visible="{{ visible1 }}" default-value="{{ value1 }}" title="所在地区" options="{{ options1 }}" bind:close="onClose1" bind:change="onChange1" />
<wux-cascader visible="{{ visible2 }}" auto="{{ false }}" value="{{ value2 }}" title="所在地区" options="{{ options2 }}" bind:close="onClose2" bind:change="onChange2" bind:load="onLoadOptions" />

<view class="page">
    <view class="page__hd">
        <view class="page__title">Cascader</view>
        <view class="page__desc">级联选择器</view>
    </view>
    <view class="page__bd">
        <wux-cell-group title="Cascader">
            <wux-cell title="Default" extra="{{ title1 }}" bind:click="onOpen1"></wux-cell>
            <wux-cell title="Async" extra="{{ title2 }}" bind:click="onOpen2"></wux-cell>
        </wux-cell-group>
    </view>
</view>
```

## 视频演示

[Cascader](./_media/cascader.mp4 ':include :type=iframe width=375px height=667px')

## API

### Cascader props

| 参数 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | <code>array</code> | 默认值，当 auto 为 true 时才生效 | [] |
| value | <code>array</code> | 当前值，当 auto 为 false 时才生效 | [] |
| auto | <code>boolean</code> | 是否组件内部控制当前值 | true |
| title | <code>string</code> | 标题的文字 | - |
| options | <code>array</code> | 可选项数据源 | [] |
| options[].value | <code>string</code> | 属性值 | - |
| options[].label | <code>string</code> | 描述 | - |
| options[].isLeaf | <code>boolean</code> | 是否支持异步加载 | false |
| chooseTitle | <code>string</code> | 选择的标题文字 | 请选择 |
| visible | <code>boolean</code> | 是否显示组件 | false |
| bind:change | <code>function</code> | 选择完成后的回调函数 | - |
| bind:close | <code>function</code> | 隐藏浮层的回调函数 | - |
| bind:load | <code>function</code> | 异步加载选项的回调函数 | - |