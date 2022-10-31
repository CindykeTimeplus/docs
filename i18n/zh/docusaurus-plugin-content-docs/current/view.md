# 视图{#views}

Timeplus有两种类型的视图：逻辑视图(或普通View)和物化视图(Materialized View)

## 查看

您可能有一些常见的查询，需要每周或每月运行多次。 您可以在 web UI 中将它们保存为“保存查询”。 您如何为您最喜欢的网站添加书签。 您可以在查询编辑器中加载已保存的查询，而不再键入。 但您不能在查询中提及已保存的查询。 那是你需要使用视图的时候。

您可以为所有类型的查询创建视图，并在其他查询中引用视图。

* 如果基于串流查询创建视图，您可以将视图视为虚拟流。 例如， `创建视图1为从my_stream中选择*，其中c1='a'` 将创建一个虚拟串流来筛选所有事件和 c1='a'。 您可以使用此视图作为另一个串流，例如 `通过 window_start` 从tumbled(view1,1m) 组中选择计数(*)，创建一个视图不会触发任何查询执行。 只有当其他查询引用时才能评估视图。
* 如果使用 [table()](functions#table) 函数用有边界的查询创建视图，视图可以是一个有边界的流，例如： `创建视图2 作为从表 (my_stream)中选择 *` 然后每次运行 `从视图2 中选择计数(*)` 将立即返回my_stream的当前行数，而不必等待将来的事件。

请注意，基于流查询而创建的视图，不能通过 `table(streaming_view)将视图转换为历史查询`

创建原版视图

```sql
创建查看[如果没有经验。 <view_name> as <SELECT ...>
```

删除原版视图

```sql
反向阅读[IFISTS] <view_name>
```



## 物化视图 Materialized View {#m_view}

物化视图是一种特殊的视图。 唯一不同的是，实际化的视图在创建后正在后台运行，结果流实际写入内部存储 ， 这就是为什么它被称为实现了。

要创建一个实际的视图，请单击“创建视图”页面中的“创建视图”按钮，并开启“有材料化视图”？ 切换按钮，并指定视图名称和 SQL。

创建实际化视图后， 内部时间plus在后台连续和逐步运行查询，并根据其基础流选择的语义发布计算结果。  每行都有一个 `__tp_version` 的时间戳版本。

使用物化视图的不同方式：

1. 流式查询：  `SELECT * FROM realized_view` 获取未来数据的结果。 这与意见相同。
2. 历史模式：  `SELECT * FROM table(realized_view)` 获取所有过去的结果用于实际化视图。
3. 历史记录 + 流式模式： `SELECT * FROM 实现了设置。搜索至'最早'` 获取所有过去的结果和未来的数据。
4. 预聚合模式： `SELECT * FROM table(realized_view) where __tp_version in (ELECT max(__tp_version) as m from table(realized_view))` 这立即返回最近的查询结果。 我们将提供新的语法来简化它。