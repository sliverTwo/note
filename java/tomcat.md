### tomcat服务安装
1. tomcat安装目录下打开命令行 执行 service install
### windows下tomcat修改命令行字符为UTF-8
1. 修改java的编码方式.  
    1. 在环境变量里面添加JAVA_TOOL_OPTIONS 值为 -Dfile.encoding=UTF-8
    2. 或在catalina.bat里面添加set "JAVA_OPTS=%JAVA_OPTS% -Dfile.encoding=UTF-8
2. 修改startup.bat文件
    1. 在首行添加chcp 65001
    2. 修改尾行call "%EXECUTABLE%" start %CMD_LINE_ARGS% 为 call "%EXECUTABLE%" run %CMD_LINE_ARGS%

### 参考文档
[windows下cmd命令行显示UTF8字符设置(CHCP命令)](https://www.cnblogs.com/jadyyummy/p/7543704.html)
[Tomcat乱码问题 catalina.bat设置为UTF-8 控制台出现乱码](https://blog.csdn.net/zhaoxny/article/details/79926333)