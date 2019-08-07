## [mysql 用户管理和权限设置](https://www.cnblogs.com/fslnet/p/3143344.html)
## jdbc连接参数
```
    useInformationSchema=true:获取表的注释信息
    zeroDateTimeBehavior=convertToNullL将00:00:00时间转换为null
    characterEncoding=UTF-8:设置字符编码
```
### mysql服务安装  [参考文档](https://www.cnblogs.com/lmh2072005/p/5656392.html)
	1. windows  
		1. mysql5.7 需要初始化生成data目录:
			1. mysqld --initialize-insecure自动生成无密码的root用户，
			2. mysqld --initialize自动生成带随机密码的root用户
		2. 安装 mysqld --install [ you service name] [--defaults-file="you config file"]
	2. linux
	3. 
    
### mysql主从复制 [参考文档](https://www.cnblogs.com/gl-developer/p/6170423.html)
### centos7重置mysql密码
1. 在/etc/my.cnf 的[mysqld]下添加skip-grant-tables
	```
		e.g.
		[mysqld]
		skip-grant-tables
		datadir=/var/lib/mysql
		socket=/var/lib/mysql/mysql.sock
	```
2. 重启mysql服务,service restart mysql
3. 登陆 mysql
4. 选择数据库 use mysql
5. 修改密码 update user set authentication_string =password('your_password') where user = 'root'
6. 刷新权限 flush privileges
7. 退出 exit
8. 删除或注释 skip-grant-tables
9. 重启mysql service mysql restart

### 参考链接
[mysql安装](https://www.cnblogs.com/lmh2072005/p/5656392.html)
