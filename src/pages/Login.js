import { View, Text } from 'react-native';
import PinPad from '../components/PinPad';

export default function Login() {
	return (
		<View
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<PinPad />
		</View>
	);
}
