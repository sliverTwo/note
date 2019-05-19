# 一些命令
1. document.body.contentEditable=true 是浏览器的内容可编辑
2. console.log 占位符：%s 字符串 %o 对象 %d 数字
3. console.table 更优雅的查看列表
4. console.time() 追踪时间
```
	const slowFunction = number =>  {
	console.time('slowFunction');
	// something slow or complex with the numbers. 
	// Factorials, or whatever.
	console.timeEnd('slowFunction');
	}
	console.time();

	for (i = 0; i < 100000; ++i) {
	  slowFunction(i);
	}
	console.timeEnd();
```
5. 获取元素的监听事件 getEventListeners(选择器)
```
	getEventListeners($(‘selector’))
	// 获取特定时间的侦听器
	getEventListeners($(‘selector’)).eventName[0].listener 
```
6. clear() 清空控制台和内存
7. $_  检索最后一个结果的值