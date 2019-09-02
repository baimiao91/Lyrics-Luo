---
sidebar: auto
sidebarDepth: 2
---
## Charles
- 简易介绍：Charles是一款抓包神器，因为他是基于 java 开发的，所以跨平台，Mac、Linux、Window下都是可以使用的，确保安装之前已经安装了JDK。Charles官网地址：[https://www.charlesproxy.com](https://www.charlesproxy.com)
---
### 配置须知
- 手机与电脑处于同一网络环境下(电脑映射一个WIFI是，手机链接`手动代理WIFI`)
- 手机配置完之后，下载一个证书
- charles软件的配置
---
### 配置过程
- 设置**手机环境**并且**下载证书**
    + **手动WIFI环境**(手机WiFi代理主机名即为查看的IP,随后端口就是**8888**)
        * ![查看computerIP](/Charles/look_ip1.png) ![查看computerIP_2](/Charles/look_ip2.png)
    + 手机wifi代理设置完之后访问**chls.pro/ssl 下载证书**，
        * ![证书过程_1](/Charles/证书过程1.png) ![证书过程_2](/Charles/证书过程2.png)
- 设置**Charles软件**环境
    + **AccessControlSettings**
        * ![AccessControlSettings1](/Charles/AccessControlSettings-1.png) ![AccessControlSettings2](/Charles/AccessControlSettings-2.png)
    + **SSLProxyingSettings**
        * ![SSLProxyingSettings1](/Charles/SSLProxyingSettings-1.png) ![SSLProxyingSettings2](/Charles/SSLProxyingSettings-2.png)
    
    **以上设置完毕后，Charles抓包设置就基本已经定型了**
---
### 映射问题
    简单来说，就是自己开发的页面如果想在App中显示，那么就要用到本地映射或远程映射
- **注:如若之前设置的访问路径影响到即将展示的效果**
    + **删除映射配置**
        * ![选择性关闭_1](/Charles/选择性关闭1.png) ![选择性关闭_2](/Charles/选择性关闭2.png)
- **本地映射（本地静态文件或页面展示）**
    + **映射本地静态文件，（注：线上文件夹下的访问的文件名，本地也需要与其对应）**
        * ![本地1](/Charles/localMap1.png) ![本地2](/Charles/localMap2.png)
- **远程映射 (本地开发起的服务准备替换)**
    + 与之一战
        * ![远程1](/Charles/remoteMap1.png) ![远程2](/Charles/remoteMap2.png)
#### 简单了解，献丑了
