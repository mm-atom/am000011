# 渲染

设置数据，页面刷新渲染。首先开发者需要熟悉react的`jsx`语法.

需要注意的是，这是一个异步的操作。

## 示例

```tsx
import am1 from '@mmstudio/am000001';
import React from 'react';
import { Text, View } from 'react-native';

export default function tpl(a: <T>(action: string, ...args: unknown[]) => ((...args: unknown[]) => void), s: (...class_names: string[]) => {}, d: <T>(d: string) => T, mm: am1) {
	return (<View>
		<Text style={s('txt')} onPress={a<void>('a001')}>
			{d('txt')}{'\n'}{'\n'}
		</Text>
	</View>);
}
```

如果我们在响应`a001.ts`中进行渲染，重新设置`txt`的值，那么界面上显示的文字就会改变。

```ts
// 渲染
await(() => {
	const p1 = {
		txt: 'hello mmstudio'
	};	// 渲染的数据
	return am11(mm, p1);
})();
```
