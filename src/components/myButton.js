import { View, Button } from 'react-native';

export default function MyButton(props) {
	const onPress = () => {
		if (props.text === 'Delete') return props.setPIN(''), props.setAuth('');
		if (props.text === 'Enter') return props.verifyPIN();
		if (props.text === 'Back')
			return props.setPIN(props.PIN.slice(0, props.PIN.length - 1));
		if (props.PIN.length < 6) return props.setPIN(props.PIN + props.text);
		return props.setAuth('PINs can only be 6 digits long');
	};

	return (
		<View
			style={{
				display: 'flex',
				flexGrow: 1,
				backgroundColor: props.color,
			}}
		>
			<Button onPress={onPress} title={props.text} color={'#00000000'} />
		</View>
	);
}
