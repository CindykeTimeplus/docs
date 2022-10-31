# 已知问题和限制

我们目前处于早期阶段。 请注意以下已知问题和限制。

## UI

* 您可以使用移动浏览器注册时间加云。 但只支持 Google Chrome 桌面浏览器才能使用 TimePlus 控制台。
* 同一工作区的用户将看到所有活动历史和定义，例如视图、 汇、 仪表盘。

## 后端

* 当您定义一个流或实际化视图时，您应该避免使用 `window_start` 和 `window end` 作为列名称。 这将与 `window start` and `window end` 的动态列名称 `tumble` `节点链接`, `会话` 窗口 您可以创建别名，同时创建物质化视图，例如 `选择 window_start, window_end 作为windowEnd, count(*) 作为tumbled(stream,10s) 从window start, window_end`
* `创建视图` 不支持 `json` 类型列。 当从 `json` 列的流中创建视图时，不能选择 `json` 列为整个列。 需要在视图定义中选择JSON文档的叶节点。