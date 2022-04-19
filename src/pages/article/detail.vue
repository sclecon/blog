<template>
    <div id="article-detail">
        <el-row class="main">
            <el-col :span="16" :offset="4">
                <div class="text-align-center article-title padding-tb-50 margin-top-20">
                    <span class="cursor-pointer">{{article.title}}</span>
                </div>
                <div class="article-intro text-align-center">{{article.intro}}</div>
                <div class="article-author text-align-center margin-top-50">
                    <el-avatar :src="article.avatar" :size="'medium'"></el-avatar>
                    <span>by</span>
                    <span class="author-span cursor-pointer">{{article.author}}</span>
                    <span>{{article.date}}</span>
                </div>
                <div class="article-message margin-top-50 padding-top-20 border-top padding-bottom-30" v-html="article.message"></div>
            </el-col> 
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            article: {
                title: 'Office for Mac 下载安装激活详细步骤图文教程',
                intro: '有些同学不知道怎么下载 Office for Mac，特别是一些女同学，特写篇教程希望可以帮助到你们。',
                author: 'Pertim',
                avatar: 'https://static.facebstore.com/public/uploads/_/originals/g9sqh9gp.jpeg',
                date: '2021-09-12',
                message: `<div class="markdown line-numbers"><h2 id="在哪下载">在哪下载</h2><p>点击下面的链接，点击页面中的<code>立即下载</code>按钮会出现百度网盘/天翼网盘的下载链接，根据自己的需要进对应网盘下载。</p><p><a href="https://www.macwk.com/soft/office">Office for Mac下载地址</a></p><p><img src="https://cdn.macwk.com/public/uploads/_/originals/office-for-mac-install-step-screenshot-01.jpg"alt=""><img src="https://cdn.macwk.com/public/uploads/_/originals/office-for-mac-install-step-screenshot-02.jpg"alt=""></p><h2 id="进到网盘怎么下">进到网盘怎么下</h2><p>以百度网盘为例，进入网盘后会出现以下文件，按下图所示切换为列表模式把详细的文件名称显示出来，需要Office的哪个版本就下载哪个。</p><p><img src="https://cdn.macwk.com/public/uploads/_/originals/office-for-mac-install-step-screenshot-03.jpg"alt=""><img src="https://cdn.macwk.com/public/uploads/_/originals/office-for-mac-install-step-screenshot-04.jpg"alt=""><img src="https://cdn.macwk.com/public/uploads/_/originals/office-for-mac-install-step-screenshot-05.jpg"alt=""><img src="https://cdn.macwk.com/public/uploads/_/originals/office-for-mac-install-step-screenshot-06.jpg"alt=""><img src="https://cdn.macwk.com/public/uploads/_/originals/office-for-mac-install-step-screenshot-07.jpg"alt=""></p><h2 id="下载完怎么安装">下载完怎么安装</h2><blockquote><p>以下教程以Office 2019为例。</p></blockquote><ol><li>下载完成后是个.dmg格式的文件，双击打开下载的dmg包</li></ol><p><img src="https://cdn.macwk.com/public/uploads/_/originals/office-for-mac-install-step-screenshot-08.jpg"alt=""><img src="https://cdn.macwk.com/public/uploads/_/originals/office-for-mac-install-step-screenshot-09.jpg"alt=""></p><ol start="2"><li>dmg包打开后如下图所示，然后双击<code>安装</code>打开安装程序：</li></ol><p><img src="https://cdn.macwk.com/public/uploads/_/originals/office-for-mac-install-step-screenshot-10.jpg"alt=""></p><p>如果双击安装后出现以下任意一个提示：</p><ul><li>xxx已损坏，无法打开，你应该将它移到废纸篓解决办法</li><li>打不开xxx，因为它来自身份不明的开发者</li><li>打不开xxxx，因为Apple无法检查其是否包含恶意软件</li></ul><p>请按照此教程解决：<a href="https://www.macwk.com/article/macos-file-damage">点我查看</a><br><br></p><hr><br><ol start="3"><li>安装完成后，安装激活工具。</li></ol><p><img src="https://cdn.macwk.com/public/uploads/_/originals/office-for-mac-install-step-screenshot-11.jpg"alt=""></p><ol start="4"><li>恭喜你，激活成功，尽情享用吧！</li></ol><p><img src="https://cdn.macwk.com/public/uploads/_/originals/office-for-mac-install-step-screenshot-12.jpg"alt=""></p><h2 id="激活不成功解决">激活不成功解决</h2><p>如果安装后无法激活成功，那只有一种可能就是禁用了Office的激活服务。</p><p>如果你安装了CleanMyMac X这个软件，必须要卸载！这个软件会不经过你的允许自动停止某些应用的服务，目前CleanMyMac X已知的问题有：电脑变卡甚至失去响应，权限丢失，pd使用卡，one drive无限上传，office无法激活，todesk运行无法连接等。</p><p>可以下载安装App Cleaner&amp;Uninstaller Pro，通过它来卸载CleanMyMac X。</p><div class="list-item pa-15 b-a hover-shadow-5 radius-5x mb-30 align-items-center"><img class="w-64 mw-64 h-64 b-0 circle ma-0"src="https://cdn.macwk.com/public/uploads/_/originals/app-cleaner-7.png"><div class="list-body"><h3 class="mb-0 mt-0"><a href="/soft/app-cleaner-and-uninstaller-pro"target="_blank">App Cleaner&amp;Uninstaller Pro</a></h3><span class="fs-14">应用深度清理卸载工具</span></div><a href="/soft/app-cleaner-and-uninstaller-pro"class="btn btn-primary"target="_blank">免费下载</a></div><p>如果你没有安装CleanMyMac X，请检查是否安装了腾讯柠檬之类的系统优化工具，找到其启动管理功能，然后查找名称为<code>com.microsoft.office.licensingV2.helper</code>的启动服务，将其设置为启动。</p><p>当然了，你也可以使用上面我推荐给大家的App Cleaner&amp;Uninstaller Pro来管理。</p><p><img src="https://cdn.macwk.com/public/uploads/_/originals/office-for-mac-install-step-screenshot-13.jpg"alt=""></p><p>启用后重启一下电脑，一般就可以解决了。如果还不行，请重新安装一下激活工具，然后重启一下电脑。</p><p>小科普：Office和其它软件不太一样，这个软件的激活其实是微软官方提供的大客户批量激活工具，没错，这其实是个正版的软件。未来你可以使用其内置的更新工具进行升级。</p></div>`
            }
        }
    }
}
</script>

<style>
    .article-title{font-size: 60px;}
    .article-intro{font-size: 16px;color: #e5e5e5;}
    .article-author{height: 60px;line-height: 60px;color: #ccc;}
    .article-author span.author-span{padding: 5px;font-weight: 500;font-size: 18px;color: white;}
    .article-author .el-avatar--circle{vertical-align: middle;margin-right: 10px;}
</style>