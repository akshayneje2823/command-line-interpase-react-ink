import React from 'react';
import {Text} from 'ink';

export default function App({name = 'Stranger', from = 'Earth..'}) {
	return (
		<Text>
			Hello, <Text color="red">{name} FROM {from} </Text>
		</Text>
	);
}
