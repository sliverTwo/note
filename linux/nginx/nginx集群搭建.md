1. 下载ngingx.[niginx下载地址](http://nginx.org/en/download.html)
2. 启动nginx.  

	将下载的文件解压,打开命令行切换到包含nginx.exe的目录下,执行命令 start nginx,或者直接双击nginx.exe,浏览器访问localhost进行测试
3. 配置集群[nginx配置参考](https://www.cnblogs.com/liang-wei/p/5849771.html)  
	打开conf下面的nginx.conf文件进行配置,说明如下  
	
```
	# 运行用户,默认nginx,可不设置
	#user  nobody;
	# nginx 进程数,一般设置为和cpu核心数一样
	worker_processes  1;
	# 错误日志的存放目录
	#error_log  logs/error.log;
	#error_log  logs/error.log  notice;
	#error_log  logs/error.log  info;
	#最大文件打开数（连接），可设置为系统优化后的ulimit -HSn的结果
	worker_rlimit_nofile 51200;
	#进程pid存放位置
	#pid        logs/nginx.pid;
	# cpu亲和力配置，让不同的进程使用不同的cpu
	#worker_cpu_affinity 0001 0010 0100 1000 0001 00100100 1000;
	events {
		#epoll是多路复用IO(I/O Multiplexing)中的一种方式,但是仅用于linux2.6以上内核,可以大大提高nginx的性能
		# use epoll; 
		# 单个后台worker process进程的最大并发链接数
		worker_connections  1024;
	}


	http {
		#文件扩展名与类型映射表
		include       mime.types;
		#默认文件类型
		default_type  application/octet-stream;

		#log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
		#                  '$status $body_bytes_sent "$http_referer" '
		#                  '"$http_user_agent" "$http_x_forwarded_for"';

		#access_log  logs/access.log  main;

		sendfile        on;
		#tcp_nopush     on;

		#keepalive_timeout  0;
		keepalive_timeout  65;

		#gzip  on;

		server {
			listen       80;
			server_name  localhost;

			#charset koi8-r;

			#access_log  logs/host.access.log  main;

			location / {
				root   html;
				index  index.html index.htm;
			}

			#error_page  404              /404.html;

			# redirect server error pages to the static page /50x.html
			#
			error_page   500 502 503 504  /50x.html;
			location = /50x.html {
				root   html;
			}

			# proxy the PHP scripts to Apache listening on 127.0.0.1:80
			#
			#location ~ \.php$ {
			#    proxy_pass   http://127.0.0.1;
			#}

			# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
			#
			#location ~ \.php$ {
			#    root           html;
			#    fastcgi_pass   127.0.0.1:9000;
			#    fastcgi_index  index.php;
			#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
			#    include        fastcgi_params;
			#}

			# deny access to .htaccess files, if Apache's document root
			# concurs with nginx's one
			#
			#location ~ /\.ht {
			#    deny  all;
			#}
		}


		# another virtual host using mix of IP-, name-, and port-based configuration
		#
		#server {
		#    listen       8000;
		#    listen       somename:8080;
		#    server_name  somename  alias  another.alias;

		#    location / {
		#        root   html;
		#        index  index.html index.htm;
		#    }
		#}


		# HTTPS server
		#
		#server {
		#    listen       443 ssl;
		#    server_name  localhost;

		#    ssl_certificate      cert.pem;
		#    ssl_certificate_key  cert.key;

		#    ssl_session_cache    shared:SSL:1m;
		#    ssl_session_timeout  5m;

		#    ssl_ciphers  HIGH:!aNULL:!MD5;
		#    ssl_prefer_server_ciphers  on;

		#    location / {
		#        root   html;
		#        index  index.html index.htm;
		#    }
		#}

	}
```
