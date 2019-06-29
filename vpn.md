# Shadowsocks 及其部署
## 基本原理
具体而言，Shadowsocks 将原来 ssh 创建的 Socks5 协议拆开成 Server 端和 Client 端，两个端分别安装在境外服务器和境内设备上。
```
	+------+     +------+     +=====+     +------+     +-------+
	| 设备  | <-> |Client| <-> | GFW | <-> |Server| <-> | 服务器 |
	+------+     +------+     +=====+     +------+     +-------+
```
## 服务端部署
1. 安装pip apt-get install python-pip。 注意:pip 的安装现在要求 python 版本大于等于 2.6，然后通过 pip 安装 shadowsocks
2. 安装shadowsocks pip install shadowsocks
3. 启动 ssserver -p PORT -k PASSWORD -m rc4-md5 --log-file /tmp/ss.log -d start
4. 使用配置文件启动 ssserver -c /etc/shadowsocks.json -d start
```
	基础配置
	{
	  "server": "YOUR_SERVER_IP",
	  "server_port": 8388,  
	  "local_address": "127.0.0.1",  
	  "local_port": 1080,  
	  "password": "PASSWORD",
	  "timeout": 300,  
	  "method":"aes-256-cfb",  
	}
	e.g 
	{
    "server":"0.0.0.0",
    "local_address":"127.0.0.1",
    "local_port":1080,
    "port_password":{
        "8989":"abcd8769501",
        "9999":"abcdJQKA"
    },
    "timeout":300,
    "method":"aes-256-cfb",
    "fast_open": false
	}	
```

## 参考链接
1. [Shadowsocks 原理简介及安装指南](https://www.barretlee.com/blog/2016/08/03/shadowsocks/)
2. [CentOS7.4搭建shadowsocks，以及配置BBR加速](https://blog.51cto.com/zero01/2064660)
3. [使用亚马逊AWS搭建免费的Shadowsocks服务器](http://celerysoft.github.io/2016-01-15.html)