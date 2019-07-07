## git常用命令
1. 初始化 git init
2. 提交至暂存区  git add 文件或目录名 eg：git add readme.txt git add .
3. 提交新的版本 git commit (其作用是将暂存区的数据提交到版本库,所以在执行此命令前先执行git add) -m 注释
4. 提交版本（自动添加修改的文件至暂缓区） git commit -a -m 注释
5. 修改上次提交 git commit --amend
6. 查看日志 git log
7. 格式化查看日志 git log --pretty=oneline
8. 指定查看日志条数 git log log -条数
9. 查看状态 git status

### 版本管理相关
1. 版本回退 git reset --hard 版本号(git log查看到的那串字符) 
2. 回退到上个版本 git reset --hard HEAD^ (HEAD当前版本,HEAD^上个版本 HEAD^^上两个版本 HEAD~2上两个版本)
3. 查看命令日志 git reflog(e.g 用于错误回退版本后查找会退前的版本号)
4. 撤销修改 git checkout -- 需要撤销的文件名(恢复至上个版本,也可以用于文件误删恢复)
5. 撤销暂缓区的数据:git reset HEAD 文件名

### 分支管理相关
1. 创建分支 git branch 分支名称
2. 查看当前分支 git branch
3. 切换分支 git checkout 分支名称
4. 切换并创建分支 git checkout -b 新分支名称
5. 合并分支到当前分支 git merge 指定分支名
6. 非 Fast foeward模式合并（添加一次提交） git merge --no-ff -m "注释" 分支名
7. 删除分支 git branch -d 分支名称
8. 删除未合并的分支(强制删除) git branch -D 分支名
9. git merge发送冲突解决:
	1. 使用git status 查看冲突的文件 在文件中手动进行合并后提交 
	2. 使用git log --graph --pretty=oneline --abbrev-commit查看分支解决的情况
	3. git log --graph 查看分支合并图
10. 暂存修改(用于当前开发未完成时需切换到其它分支是暂存当前分支状态) git stash
11. 查看暂存内容 git stash list
12. 状态恢复(stash内容未删除，需使用git stash drop 来删除) git stash apply  [指定stash]
13. 状态恢复同时删除stash git stash pop
14. 从版本库中删除文件 git rm 文件名(删除后需提交)
15. 从版本库中删除文件(不删除本地文件) git rm --cached 文件名(删除后需提交)
16. 更改文件名 git mv 原文件名 新文件名

###  标签相关
1. 当前提交打标签 git tag 标签名
2. 指定提交打标签 git tag  标签名 提交id
3. 查看已有标签 git tag
4. 查看标签详情 git show 标签名
5. 带说明的标签 git tag -a 标签名 -m 说明 [提交id]
6. 删除标签 git tag -d 标签名
7. 推送标签导远程服务器 git push 远程库别名 标签名 
8. 一次性全部推送  git push --tags
9. 删除远程标签 先删除本地标签 git tag -de 标签名 然后执行 git push 远程库别名 :refs/tags/标签名

###  个性化配置
1. 配置全局用户名 git config --global user.name "你的名字"
2. 配置全局邮箱 git config --global user.email "你的邮箱"
3. 开启颜色对比 git config --global color.ui true
4. 别名设置 git config --global alias 别名 命令名
5. 文件忽略相关
6. 强行添加忽略清单上的文件 git  add -f 文件
7. 查看忽略规则 git check-ignore -v 文件

## git一些概念
1. 项目配置文件路径 .git/config
2. 工作区（Working Directory）git当前工作目录
3. 版本库（Repository） 隐藏的.git目录
4. 暂存区 git add后文件存储的区域

## git远程命令

```
	1. 生成ssh密钥
		ssh-keygen -t rsa -C "邮箱"（window生成的文件在"C:\User\用户名\.ssh"目录下,生成后需要将生成的公钥添加至远程仓库中,具体见链接）
		e.g ssh-keygen -t rsa -C "example@example.com" 
	2. 关联远程库
		git remote add 远程库别名 地址:用户名/仓库名称
		e.g git remote add orgin git@github.com:sliver/note
	3. 将内容推送至远程库
		git push -u 远程库别名 分支名 (git push  远程库别名 分支名)
		e.g git push -u origin master (git push origin master)
	4. 从远程库克隆
		git clone 远程库连接
		e.g git clone git@github.com:sliverTwo/note.git
	5. 查看远程库信息:
		git remote -v
	6. 删除指定远程库连接信息
		git remote rm 远程库别名
	7. 创建分支并关联远程分支
		git checkout -b 分支名 远程库/分支名
		e.g git checkout -b dev origin/dev
	8.	设置本地库与远程库的连接
		 git branch --set-upstream-to=远程库/分支名 本地分支名 (git branch --set-upstream-to 分支名 远程库/分支名)
		 e.g git branch --set-upstream-to=origin/dev dev
	9. 变基操作(目前还不懂...)
		git rebase 
	10. 远程库的重命名
		git remote rename 原远程库别名 新远程库别名
		e.g git remote rename origin o
	11. 移除远程库
		git remote rm 远程库别名	
		e.g git remote rm origin	

```
	
## 链接:  
1. [文件忽略参考](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013758404317281e54b6f5375640abbb11e67be4cd49e0000)
2. [密钥使用参考链接](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001374385852170d9c7adf13c30429b9660d0eb689dd43a000)
3. [git服务器搭建](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/00137583770360579bc4b458f044ce7afed3df579123eca000)
4. [廖雪峰的git教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)  
5. [git使用说明书](https://git-scm.com/book/zh/v2)
