1. win10输入法取消美式键盘  
	设置 -> 区域和语言(下方会显示所有安装的语言,删除非中国的语言) -> 右上角高级设置 -> 取消勾选[允许我为每个应用窗口使用不同的输入法]
2. 创建服务
```
	sc create [serviceName] binpath="运行服务所需要的二进制文件路径以及运行该二进制文件的命令行参数" start= auto depend= Tcpip  注意：在这个命令中，等号左边都没有空格，右边都有一个空格！
	e.g.
	sc create MySVNService binpath= "D:\DevInstall\Subversion\bin\svnserve.exe --service -r D:\DevRepository\Subversion" start= auto depend= Tcpip
```