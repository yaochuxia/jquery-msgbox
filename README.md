## Message Box (浏览器信息提示框)


MsgBox函数参数
部分
描述
Prompt
必选。字符串表达式，显示在对话框中的消息。Prompt的最大长度大约为
1024个字符，由所用字符的字节大小决定。如果Prompt的内容超过一行，则可以在每一行之间用回车符（Chr(13)）、换行符（Chr(10)）或是回车与换行符的组合（Chr(13) & Chr(10)，即vbCrLf）将各行分隔开来。
Buttons
可选。数值表达式，是一些数值的总和，指定所显示的按钮的数目及形式、使用的图标样式（及声音），缺省按钮以及消息框的强制性等。如果省略，则其缺省值为0。具体数值见“参数设置值”表格。
Title
可选。字符串表达式，在对话框标题栏中显示的内容。如果省略Title，则将应用程序标题（App.Title）放在标题栏中。
Helpfile
可选。字符串表达式，用来向对话框提供上下文相关帮助的帮助文件。如果提供了Helpfile，则也必须提供Context。
Context
可选。数值表达式，由帮助文件的作者指定给适当的帮助主题的帮助上下文编号。如果提供了Context，则也必须提供Helpfile。
