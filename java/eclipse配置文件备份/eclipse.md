## 设置
* eclipse添加模版代码块
```
	window->Prefrences->Java->Editor->Templates
	1. 导入类 ${:import(com.jfinal.aop.Duang)}
	2. 当前类类名${enclosing_type}
```
## 问题  
1. 覆盖jar包中的类后eclipse报错
```
	原因:jar加载的优先级比覆盖的类文件优先级高
	解决方法:项目右键-> Properties -> java Build Path -> Order and Export 中调整加载顺序
```
