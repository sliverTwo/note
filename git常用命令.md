## 1.git常用命令
	初始化 git init
	提交至暂存区  git add 文件或目录名 eg：git add readme.txt git add .
	提交新的版本 git commit (其作用是将暂存区的数据提交到版本库,所以在执行此命令前先执行git add)
	查看日志 git log 格式化查看 git log --pretty=oneline
	查看状态 git status
	
	版本管理相关:
	版本回退 git reset --hard 版本号(git log查看到的那串字符) 
	回退到上个版本 git reset --hard HEAD^ (HEAD当前版本,HEAD^上个版本 HEAD^^上两个版本 HEAD~2上两个版本)
	查看命令日志 git reflog(e.g 用于错误回退版本后查找会退前的版本号)
	撤销修改 git checkout -- 需要撤销的文件名(恢复至上个版本,也可以用于文件误删恢复)
	撤销暂缓区的数据:git reset HEAD 文件名
	
	分支管理相关:
	创建分支 git branch 分支名称
	查看当前分支 git branch
	切换分支 git checkout 分支名称
	切换并创建分支 git checkout -b 新分支名称
	合并分支到当前分支 git merge 指定分支名
	非 Fast foeward模式合并（添加一次提交） git merge --no-ff -m "注释" 分支名
	删除分支 git branch -d 分支名称
	删除未合并的分支(强制删除) git branch -D 分支名
	git merge发送冲突解决:
		使用git status 查看冲突的文件 在文件中手动进行合并后提交 
		使用git log --graph --pretty=oneline --abbrev-commit查看分支解决的情况
		git log --graph 查看分支合并图
	暂存修改(用于当前开发未完成时需切换到其它分支是暂存当前分支状态) git stash
	查看暂存内容 git stash list
	状态恢复(stash内容未删除，需使用git stash drop 来删除) git stash apply  [指定stash]
	状态恢复同时删除stash git stash pop
	
	从版本库中删除文件 git rm 文件名(删除后需提交)
## 2. git一些概念
	工作区（Working Directory）git当前工作目录
	版本库（Repository） 隐藏的.git目录
	暂存区 git add后文件存储的区域
## 3.git远程命令
	生成ssh密钥
	ssh-keygen -t rsa -C "邮箱"（window生成的文件在"C:\User\用户名\.ssh"目录下,生成后需要将生成的公钥添加至远程仓库中,具体见链接）
	e.g ssh-keygen -t rsa -C "example@example.com" 
	关联远程库
	git remote add 远程库别名 地址:用户名/仓库名称
	e.g git remote add orgin git@github.com:sliver/note
	将内容推送至远程库
	git push -u 远程库别名 分支名 (git push  远程库别名 分支名)
	e.g git push -u origin master (git push origin master)
	从远程库克隆
	git clone 远程库连接
	e.g git clone git@github.com:sliverTwo/note.git
	查看远程库信息:
	git remote -v
	创建分支并关联远程分支
	git checkout -b 分支名 远程库/分支名
	git checkout -b dev origin/dev
	设置本地库与远程库的连接
	 git branch --set-upstream-to=远程库/分支名 本地分支名 (git branch --set-upstream-to 分支名 远程库/分支名)
	 git branch --set-upstream-to=origin/dev dev
	 变基操作(目前还不懂...)
	 git rebase 
	
链接:  
[密钥使用参考链接](参考: [廖雪峰的教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001374385852170d9c7adf13c30429b9660d0eb689dd43a000))
[廖雪峰的git教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)  
[git使用说明书](https://git-scm.com/book/zh/v2)
	