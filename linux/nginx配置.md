### 启动相关命令
```
	#启动/重启/停止
	/etc/init.d/nginx {start|restart|stop}
	# 基于服务的形式
	service nginx {start|stop|restart|reload|force-reload|status|configtest|rotate|upgrade}
	# 检查配置
	/usr/local/nginx/sbin/nginx -t
	# 修改配置后重新加载
	/usr/local/nginx/sbin/nginx -s reload
```
### 配置文件