## centos7初始化安装启动网络
1. centos7安装后默认是不启动网卡的
2. 编辑网卡配置  vi /etc/sysconfig/network-scripts/ifcfg-ens33 
3. 修改ONBOOT=yes,wq保存
4. 重启网络服务 sudo service network restart
5. 输入ip addr进行查看(centos7 无ifconfig命令)