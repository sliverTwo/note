## 关于git远程连接多个仓库 
1、生成多个rsa密钥对
```
ssh-keygen -t rsa -C "邮箱"
```
2、配置config
```
# 配置github.com
Host github.com                 
    HostName github.com
    IdentityFile C:\Users\sliver\.ssh\github2
    PreferredAuthentications publickey
    User sliver

# 配置git.oschina.net 
Host git.oschina.net 
    HostName git.oschina.net
    IdentityFile C:\Users\sliver\.ssh\gitee2
    PreferredAuthentications publickey
    User sliver
# 配置公司gitlab  134.175.83.206
Host 134.175.83.206
    HostName 134.175.83.206
    IdentityFile C:\Users\sliver\.ssh\gitlab2
    PreferredAuthentications publickey
    User sliver
```
3、设置TortoiseGit
  3.1. 使用putty key generator工具将rsa密钥转换成ppk密钥  
  3.2. 将其添加至Pageant中  
  3.3 [参考链接](https://blog.csdn.net/bendanbaichi1989/article/details/17916795)
