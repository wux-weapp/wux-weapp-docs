# Upload 上传

用于文件选择或相机拍照上传。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Upload",
  "usingComponents": {
    "wux-upload": "../../dist/upload/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">Upload</view>
    <view class="page__desc">上传</view>
  </view>
  <view class="page__bd page__bd_spacing">
    <view class="sub-title">Default</view>
    <wux-upload
      url="https://www.skyvow.cn/api/common/file"
      bind:change="onChange"
      bind:success="onSuccess"
      bind:fail="onFail"
      bind:complete="onComplete"
    >
      <button type="default">Click to Upload</button>
    </wux-upload>
    <view class="sub-title">Disabled</view>
    <wux-upload
      disabled
      url="https://www.skyvow.cn/api/common/file"
      bind:change="onChange"
      bind:success="onSuccess"
      bind:fail="onFail"
      bind:complete="onComplete"
    >
      <button disabled type="default">Click to Upload</button>
    </wux-upload>
    <view class="sub-title">Picture card & max = 4</view>
    <wux-upload
      listType="picture-card"
      defaultFileList="{{ fileList }}"
      max="4"
      url="https://www.skyvow.cn/api/common/file"
      bind:change="onChange"
      bind:success="onSuccess"
      bind:fail="onFail"
      bind:complete="onComplete"
      bind:preview="onPreview"
    >
      <text>Upload</text>
    </wux-upload>
    <view class="sub-title">ShowUploadList = false</view>
    <wux-upload
      listType="picture-card"
      showUploadList="{{ false }}"
      url="https://www.skyvow.cn/api/common/file"
      bind:change="onChange"
      bind:success="onSuccess"
      bind:fail="onFail"
      bind:complete="onComplete"
      bind:preview="onPreview"
    >
      <image src="{{ imageUrl }}" wx:if="{{ imageUrl }}" />
      <text wx:else>Upload</text>
    </wux-upload>
    <view class="sub-title">Progress = true</view>
    <progress percent="{{ progress }}" show-info />
    <wux-upload
      progress
      listType="picture-card"
      showUploadList="{{ false }}"
      url="https://www.skyvow.cn/api/common/file"
      bind:change="onChange"
      bind:success="onSuccess"
      bind:fail="onFail"
      bind:complete="onComplete"
      bind:progress="onProgress"
      bind:preview="onPreview"
    >
      <image src="{{ imageUrl }}" wx:if="{{ imageUrl }}" />
      <text wx:else>Upload</text>
    </wux-upload>
    <view class="sub-title">Remove</view>
    <wux-upload
      listType="picture-card"
      fileList="{{ fileList }}"
      controlled
      url="https://www.skyvow.cn/api/common/file"
      bind:change="onChange"
      bind:success="onSuccess"
      bind:fail="onFail"
      bind:complete="onComplete"
      bind:preview="onPreview"
      bind:remove="onRemove"
    >
      <text>Upload</text>
    </wux-upload>
  </view>
</view>
```

```js
Page({
  data: {
    fileList: [
      {
        uid: 0,
        status: 'uploading',
        url: 'http://cdn.skyvow.cn/qrcode.jpg',
      },
      {
        uid: 1,
        status: 'done',
        url: 'http://cdn.skyvow.cn/qrcode.jpg',
      },
      {
        uid: 2,
        status: 'error',
        url: 'http://cdn.skyvow.cn/qrcode.jpg',
      },
    ],
  },
  onChange(e) {
    console.log('onChange', e)
    const { file, fileList } = e.detail
    if (file.status === 'uploading') {
      this.setData({
        progress: 0,
      })
      wx.showLoading()
    } else if (file.status === 'done') {
      this.setData({
        imageUrl: file.url,
      })
    }

    // Controlled state should set fileList
    this.setData({ fileList })
  },
  onSuccess(e) {
    console.log('onSuccess', e)
  },
  onFail(e) {
    console.log('onFail', e)
  },
  onComplete(e) {
    console.log('onComplete', e)
    wx.hideLoading()
  },
  onProgress(e) {
    console.log('onProgress', e)
    this.setData({
      progress: e.detail.file.progress,
    })
  },
  onPreview(e) {
    console.log('onPreview', e)
    const { file, fileList } = e.detail
    wx.previewImage({
      current: file.url,
      urls: fileList.map((n) => n.url),
    })
  },
  onRemove(e) {
    const { file, fileList } = e.detail
    wx.showModal({
      content: '确定删除？',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            fileList: fileList.filter((n) => n.uid !== file.uid),
          })
        }
      },
    })
  },
})
```

## 视频演示

[Upload](./_media/upload.mp4 ':include :type=iframe width=375px height=667px')

## API

### Upload props

| 参数            | 类型       | 描述                                                                                                                     | 默认值                     |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| prefixCls       | `string`   | 自定义类名前缀                                                                                                           | wux-upload                 |
| max             | `number`   | 最大图片张数，设置为 -1 的时候不限制张数                                                                                 | -1                         |
| count           | `number`   | 从相册选图时，最多可以选择的图片张数                                                                                     | 9                          |
| defaultFileType | `string`   | 上传文件类型，可选值为 image、video                                                                                      | image                      |
| compressed      | `boolean`  | 是否压缩所选择的视频文件，当 `defaultFileType` 为 `video` 时才生效                                                       | true                       |
| maxDuration     | `number`   | 拍摄视频最长拍摄时间，单位秒。当 `defaultFileType` 为 `video` 时才生效                                                   | 60                         |
| camera          | `string`   | 默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效。当 `defaultFileType` 为 `video` 时才生效 | back                       |
| sizeType        | `array`    | original 原图，compressed 压缩图                                                                                         | ['original', 'compressed'] |
| sourceType      | `array`    | album 从相册选图，camera 使用相机                                                                                        | ['album', 'camera']        |
| url             | `string`   | 上传地址                                                                                                                 | -                          |
| name            | `string`   | 文件对应的 key                                                                                                           | file                       |
| header          | `object`   | HTTP 请求 Header, header 中不能设置 Referer                                                                              | {}                         |
| formData        | `object`   | HTTP 请求中其他额外的 form data                                                                                          | {}                         |
| uploaded        | `boolean`  | 默认的上传行为，`false` 时需要自行实现上传功能                                                                           | true                       |
| disabled        | `boolean`  | 是否禁用                                                                                                                 | false                      |
| progress        | `boolean`  | 是否监听上传进度变化                                                                                                     | false                      |
| listType        | `string`   | 上传列表的内建样式，可选值为 text、picture-card                                                                          | text                       |
| defaultFileList | `array`    | 默认已经上传的文件列表，当 `controlled` 为 `false` 时才生效                                                              | []                         |
| fileList        | `array`    | 已经上传的文件列表，当 `controlled` 为 `true` 时才生效                                                                   | []                         |
| controlled      | `boolean`  | 是否受控 [说明文档](controlled.md)                                                                                       | false                      |
| showUploadList  | `boolean`  | 是否展示上传文件列表                                                                                                     | true                       |
| showRemoveIcon  | `boolean`  | 是否展示删除图标                                                                                                         | true                       |
| bind:before     | `function` | 上传文件之前的回调函数                                                                                                   | -                          |
| bind:change     | `function` | 上传文件改变时的回调函数                                                                                                 | -                          |
| bind:success    | `function` | 上传文件成功时的回调函数                                                                                                 | -                          |
| bind:fail       | `function` | 上传文件失败时的回调函数                                                                                                 | -                          |
| bind:complete   | `function` | 上传文件完成时的回调函数                                                                                                 | -                          |
| bind:progress   | `function` | 监听上传进度变化的回调函数                                                                                               | -                          |
| bind:preview    | `function` | 点击文件时的回调函数                                                                                                     | -                          |
| bind:remove     | `function` | 点击删除图标时的回调函数                                                                                                 | -                          |

### Upload slot

| 名称 | 描述       |
| ---- | ---------- |
| -    | 自定义内容 |

### Upload externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |

### 返回参数

```
{
    file: { /* ... */ }, // 当前操作的文件对象
    fileList: [ /* ... */ ], // 当前的文件列表
}
```

```
{
    uid: 'uid', // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
    url: 'xx.png', // 文件地址
    status: 'done', // 状态，可选值为 uploading、done、error、remove
    res: { /* ... */ }, // 服务端响应内容，
}
```
