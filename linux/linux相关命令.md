## nginx
检查配置，同时也是输出配置文件所在位置
/usr/local/nginx/sbin/nginx -t
修改配置后重载
/usr/local/nginx/sbin/nginx -s reload
## 任务
```
后台运行任务
nohup 命令 > 输出存放文件 2>&1 &
nohup python 江西污水处理厂20190115152550_2.py > 5502.log 2>&1 &
查找任务id
ps aux |grep 关键字
```
## 解压 [linux解压war包的命令](https://www.cnblogs.com/wangcp-2014/p/6441790.html)
```
    unzip -d 指定目录
    unzip -oq common.war -d common
```
## 监控相关
    top 任务管理器
    df -h 查看存储使用情况
    free -h 查看内存使用情况
## vi命令
dd 删除一行
dw 删除一个单词
d$ 删除光标之后的部分