## nginx
1. 检查配置，同时也是输出配置文件所在位置  
    /usr/local/nginx/sbin/nginx -t
2. 修改配置后重载  
    /usr/local/nginx/sbin/nginx -s reload

## 任务
```
后台运行任务
nohup [命令] > [输出存放文件] 2>&1 &
nohup python 江西污水处理厂20190115152550_2.py > 5502.log 2>&1 &
查找任务id
ps aux |grep 关键字
```
## 解压 
1. unzip -d 指定目录 
2. unzip -oq common.war -d common
3. 参考:[linux解压war包的命令](https://www.cnblogs.com/wangcp-2014/p/6441790.html)

## 监控相关
    top 任务管理器
    df -h 查看存储使用情况
    free -h 查看内存使用情况
## vi命令
1. dd 删除一行
2. dw 删除一个单词
3. d$ 删除光标之后的部分

## 端口开放
1. 查看端口占用情况 lsof -i tcp:80
2. 列出所有端口 netstat -ntlp  

### centos7
1. 查看对外开放的端口状态
```
    查询已开放的端口 netstat -anp
    查询指定端口是否已开 firewall-cmd --query-port=666/tcp
    提示 yes，表示开启；no表示未开启。
```
2. 启动防火墙:
```
    查看防火墙状态 systemctl status firewalld
    开启防火墙 systemctl start firewalld  
    关闭防火墙 systemctl stop firewalld
    开启防火墙 service firewalld start 
    若遇到无法开启
    先用：systemctl unmask firewalld.service 
    然后：systemctl start firewalld.service
```
3. 对外开发端口
```
    添加指定需要开放的端口：
    firewall-cmd --add-port=8/tcp --permanent
    重载入添加的端口：
    firewall-cmd --reload
    查询指定端口是否开启成功：
    firewall-cmd --query-port=123/tcp
    移除指定端口：
    firewall-cmd --permanent --remove-port=123/tcp
```
4. 安装iptables-services
```
    安装iptables-services ：
    yum install iptables-services 
    进入下面目录进行修改：
    /etc/sysconfig/iptables
```
5. 参考:[Linux下Centos7对外开放端口](https://blog.csdn.net/realjh/article/details/82048492#)

## 批量杀进程
命令: ps -ef|grep python|grep -v grep|cut -c 9-15|xargs kill -9  
说明
```
    管道符"|"用来隔开两个命令，管道符左边命令的输出会作为管道符右边命令的输入。下面说说用管道符联接起来的
    几个命令：
    "ps - ef"是linux 里查看所有进程的命令。这时检索出的进程将作为下一条命令"grep mcfcm_st"的输入。
    "grep mcfcm_st"的输出结果是，所有含有关键字"mcfcm_st"的进程，这是Oracle数据库中远程连接进程的共同特点。
    "grep -v grep"是在列出的进程中去除含有关键字"grep"的进程。
    "cut -c 9-15"是截取输入行的第9个字符到第15个字符，而这正好是进程号PID。
    "xargs kill -9"中的xargs命令是用来把前面命令的输出结果（PID）作为"kill -9"命令的参数，并执行该令。
    "kill -9"会强行杀掉指定进程，这样就成功清除了oracle的所有远程连接进程。其它类似的任务，只需要修改"grep python"中的关键字部分就可以了。
```
参考:[Linux下批量Kill多个进程](https://www.cnblogs.com/joshua317/p/9235811.html)

## 创建软链接
1. 创建 ln -s 源文件或目录  目标文件或目录
2. 删除 rm -rf 链接
3. 参考:[linux软链接的创建、删除和更新](https://blog.csdn.net/m290345792/article/details/78518360)

## mysql密码重置
### 5.7.6 之前的版本 
1. 修改配置文件 /etc/my.cnf 在[mysqld] 下面添加 skip-grant-tables 保存
2. 重启mysql /etc/init.d/mysql restart
3. 进入mysql 进行密码修改 
	```
		use mysql;
		update user set password=password("你的新密码") where user="root"; 
		flush privileges;
		quit
	```
4. 删除之前配置的skip-grant-tables 重启mysql.

### 5.7.6 之后的版本 
1. 修改配置文件 /etc/my.cnf 在[mysqld] 下面添加 skip-grant-tables 保存
2. 重启mysql /etc/init.d/mysql restart || service mysqld restart
3. 进入,将旧密码置空 use mysql, update user set authentication_string = '' where user = 'root';
4. 去除免密码登陆
5. 修改密码 ALTER USER 'root'@'localhost' IDENTIFIED BY 'abc123@xxx';//'abc123@xxx'  密码形式过于简单则会报错

### 参考:
1. [Linux重置MySQL 5.7之前版本的密码](https://blog.csdn.net/fmwind/article/details/81941790)
2. [Linux重置MySQL 5.7之后版本的密码](https://www.cnblogs.com/yaowen/p/9486997.html)

## DDOS检测
1. 检测是否受到SYN攻击 netstat -nap | grep SYN_RECV

### 参考
1. [简述TCP的三次握手过程](https://www.cnblogs.com/Qing-840/p/9283367.html)