# 1. 由Python文件编译为.pyc文件
```
	python -m compileall  test.py 
```
# 2. .pyc的反编译，使用uncompyle
```
	最方便的就是使用pip安装 uncompyle：pip install uncompyle
	uncompyle6 --help 查看帮助 
	uncompyle6 models.pyc > models.py 将models.pyc反编译成py文件 
	uncompile -o . *.pyc 将当前文件夹中所有的pyc文件反编译成后缀名为.pyc_dis的源文件
```
参考链接:[Python .pyc的编译和反编译](https://blog.csdn.net/chpllp/article/details/76254927)