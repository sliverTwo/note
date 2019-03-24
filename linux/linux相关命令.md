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