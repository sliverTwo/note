# 虚拟机安装centos7后的环境准备
1. 配置网络环境(使用桥接模式)
2. 创建用户
3. 安装 wget  yum -y install wget
4. 安装redis等服务器软件

## 网络配置
1. centos7安装后默认是不启动网卡的
2. 编辑网卡配置  vi /etc/sysconfig/network-scripts/ifcfg-ens33 
3. 修改ONBOOT=yes,wq保存
4. 重启网络服务 sudo service network restart
5. 输入ip addr进行查看(centos7 无ifconfig命令)
6. 参考配置
```
	TYPE=Ethernet
	PROXY_METHOD=none
	BROWSER_ONLY=no
	BOOTPROTO=static
	DEFROUTE=yes
	IPV4_FAILURE_FATAL=no
	IPV6INIT=yes
	IPV6_AUTOCONF=yes
	IPV6_DEFROUTE=yes
	IPV6_FAILURE_FATAL=no
	IPV6_ADDR_GEN_MODE=stable-privacy
	NAME=ens33
	UUID=8d46eeae-d890-459f-ae11-ec400bbb9424
	DEVICE=ens33
	ONBOOT=yes
	IPADDR=192.168.0.155
	NETMASK=255.255.255.0
	GATEWAY=192.168.0.1
	DNS1=192.168.0.1
	DNS2=114.114.114
	
```

2. 创建用户
```
	adduser sliver
	passwd sliver
	// 授权
	1. 查看授权文件所在地
	 whereis sudoers
	2. 添加写权限
	chmod -v u+w /etc/sudoers 
	3. 添加超级用户 
	vi /etc/sudoers
	4. 取消写权限
	chmod -v u-w /etc/sudoers 
```

## 参考
1. [Centos创建用户并授权](https://blog.csdn.net/bug4pie/article/details/79761443)