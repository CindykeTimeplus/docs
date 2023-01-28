# 公开测试版 2

我们很高兴地启动Timeplus Cloud公开测试版的第二阶段。 与 [邀请制测试版1](public-beta-1)相比，大多数后端和前端更改都是递增增强。

我们将不时更新测试版，并在此页面列出关键的增强措施。

(2023年)

## 1/20

* 查询结果的界面更新：
  * **无限滚动。** 对于流式查询和历史查询，较新的结果显示在底部。 您可以向上滚动查看之前的结果，然后单击底部的 **跳转到最新数据** 按钮继续查看最新结果。
  * **行详情**。 对于包含长文本或 JSON 的列，您可以单击 “眼睛” 按钮打开包含该行详细信息的侧面板。
  * **更新列摘要。** 对于数字列，列头中显示最小/最大/平均值。 数据范围是从查询开始到现在。 对于日期时间列，将显示起始/终止时间戳。 对于布尔列或字符串列，前 3 个值与百分比一起显示。
  * **快速筛选。** 您可以键入一些关键字来筛选结果，而无需重写 SQL。 它将对所有列执行简单的 `string#contains` 匹配。 暂不支持正则表达式或逻辑条件。
  * **显示/隐藏列。** 您可以通过新引入的 **设置** 按钮来隐藏某些列，而无需重写 SQL。 您也可以在此对话框中以 CSV 格式下载结果。
  * **调整列大小**. Timeplus 会根据列类型自动设置适当的初始列大小。 您可以随时通过拖放来调整列的大小。
* 更多图表类型和选项。 您可以选择折线图、面积图、柱形图、条形图、单值图和图表作为可视化类型。 每个图表都支持基本设置和高级设置。
* 一种内置 的针对JSON优化的数据类型，与将 JSON 另存为 `string` 并在查询时动态提取相比，查询性能更好。 适合于同一结构的 JSON 文档。 通过 `column.jsonpath` 访问该值（而不是用文本列的方式 `column:jsonpath` ）
* 我们开始弃用 `settings seek_to=..` 仍然支持时空旅行，你只需要在 WHERE 条件下使用 `_tp_time` 列，例如 `WHERE _tp_time>=now () -1h` 即可在 1 小时前进行时空旅行并显示此后的数据。 或者 `其中 _tp_time >= '2023-01-14'`  Timeplus 中的所有数据流都包含 `_tp_time` 作为事件时间。
* （实验性）除了 [Remote UDF](remote-udf)之外，现在你还可以使用 JavaScript 定义新函数。 支持标量函数和聚合函数。 有关详细信息，请查看 [JS UDF](js-udf) 文档。 