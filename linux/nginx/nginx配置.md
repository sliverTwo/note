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
### windwos下相关命令
1. 验证配置是否正确 nginx -t
2. 查看nginx版本号 nginx -v
3. 启动nginx start nginx
4. 快速停止或关闭nginx nginx -s stop
5. 正常停止或关闭nginx nginx -s quit
6. 配置文件修改后重新加载配置文件 nginx -s reload
### 配置文件