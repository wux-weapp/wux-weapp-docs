![logo](_images/tinified/logo2.png ':size=128x128')

# Wux Weapp <small>3.11.3</small>

<!-- 背景 -->
<style>
section.cover,section.cover .anchor span {
	color: #fff
}
section.cover.has-mask .mask {
	display: none;
}
</style>
<style>
.github-corner {
    z-index: 10;
}
section.cover.show {
	position: relative;
	background-image: linear-gradient(to bottom, rgba(var(--theme-color-rgb), 0.45), #fff) !important
}
/* section.cover.show:after {
	content: "";
	position: absolute;
	top: 22px;
	right: 40px;
	width: 375px;
    max-width: 80%;
	height: 180px;
	z-index: 1;
	background-image: url(_images/tinified/party02.png);
	background-repeat: no-repeat;
	background-size: contain;
    filter: var(--filter);
} */
section.cover.show:before {
    content: "";
	position: absolute;
	top: 0;
	right: 0;
	width: 100vw;
	height: 100vh;
    z-index: 1;
	background-image: url(_images/tinified/214.jpg);
	background-position: top center;
	background-attachment: fixed;
	background-size: cover;
	background-repeat: no-repeat;
    filter: var(--filter);
}
@media (max-width: 767px) {
    section.cover.show:after {
        display: none;
        right: 0;
    }
}
</style>
<style>
.img-shields {
    font-size: 0;
}
.img-shields > a:not(:last-child) {
    display: inline-block;
    margin-right: 6px;
    margin-bottom: 6px;
}
</style>

<div class="img-shields">
    <a href="https://github.com/wux-weapp/wux-weapp/" target="_blank">
        <img alt="star this repo" src="https://img.shields.io/github/stars/wux-weapp/wux-weapp" />
    </a>
    <a href="https://github.com/wux-weapp/wux-weapp/fork" target="_blank">
        <img alt="fork this repo" src="https://img.shields.io/github/forks/wux-weapp/wux-weapp" />
    </a>
    <a href="https://circleci.com/gh/wux-weapp/wux-weapp" target="_blank">
        <img alt="circleci" src="https://img.shields.io/circleci/build/github/wux-weapp/wux-weapp/master.svg?label=circleci" />
    </a>
    <a href="https://travis-ci.org/wux-weapp/wux-weapp" target="_blank">
        <img alt="travis" src="https://img.shields.io/travis/wux-weapp/wux-weapp.svg?label=travis" />
    </a>
    <a href="https://github.com/wux-weapp/wux-weapp/actions" target="_blank">
        <img alt="github workflow" src="https://img.shields.io/github/actions/workflow/status/wux-weapp/wux-weapp/test.yml?label=github workflow" />
    </a>
    <br />
    <a href="https://www.npmjs.com/package/wux-weapp" target="_blank">
        <img alt="npm" src="https://img.shields.io/npm/v/wux-weapp.svg" />
    </a>
    <a href="https://www.npmjs.com/package/wux-weapp" target="_blank">
        <img alt="downloads" src="https://img.shields.io/npm/dm/wux-weapp.svg" />
    </a>
    <a href="https://www.npmjs.com/package/wux-weapp" target="_blank">
        <img alt="downloads" src="https://img.shields.io/npm/dt/wux-weapp.svg" />
    </a>
    <a href="https://www.npmjs.com/package/wux-weapp" target="_blank">
        <img alt="license" src="https://img.shields.io/npm/l/wux-weapp.svg" />
    </a>
    <br />
    <a href="https://github.com/wux-weapp/wux-weapp-sublime-snippets" target="_blank">
        <img alt="Snippets for Sublime" src="https://img.shields.io/badge/Snippets%20for-Sublime-blue" />
    </a>
    <a href="https://github.com/wux-weapp/wux-weapp-snippets" target="_blank">
        <img alt="Snippets for VScode" src="https://img.shields.io/badge/Snippets%20for-VScode-blue" />
    </a>
    <a href="https://github.com/wux-weapp/wux-weapp-atom-snippets" target="_blank">
        <img alt="Snippets for Atom" src="https://img.shields.io/badge/Snippets%20for-Atom-blue" />
    </a>
</div>

> 微信小程序 UI 组件库

- 组件化、可复用、易扩展

[GitHub](https://github.com/wux-weapp/wux-weapp/)
[Get Started](introduce)

[//]: #(![](_images/tinified/home_bg.jpg))
