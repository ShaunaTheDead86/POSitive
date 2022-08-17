import { View, Text, Button } from 'react-native';
import { useState } from 'react';
import MyButton from './myButton';

export default function PinPad(props) {
	const [PIN, setPIN] = useState('');
	const [auth, setAuth] = useState('');

	const verifyPIN = () => {
		PIN === '1234'
			? setAuth('Verified PIN, Logging you in')
			: setAuth('Invalid PIN, Please try again');
	};

	return (
		<View
			style={{
				display: 'flex',
				minWidth: 200,
				minHeight: 200,
			}}
		>
			<View
				style={{
					alignSelf: 'center',
				}}
			>
				<Text
					style={{
						fontSize: 20,
						fontWeight: '600',
						margin: 5,
					}}
				>
					Enter your PIN
				</Text>
			</View>
			<View
				style={{
					alignSelf: 'center',
				}}
			>
				<Text
					style={{
						minHeight: 20,
						fontSize: 20,
						fontWeight: '600',
						margin: 5,
					}}
				>
					{PIN}
				</Text>
			</View>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<MyButton
					text={'1'}
					color={'#88AADD'}
					grow={1}
					PIN={PIN}
					setPIN={setPIN}
					setAuth={setAuth}
				/>
				<MyButton
					text={'2'}
					color={'#88AADD'}
					grow={1}
					PIN={PIN}
					setPIN={setPIN}
					setAuth={setAuth}
				/>
				<MyButton
					text={'3'}
					color={'#88AADD'}
					grow={1}
					PIN={PIN}
					setPIN={setPIN}
					setAuth={setAuth}
				/>
			</View>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<MyButton
					text={'4'}
					color={'#88AADD'}
					PIN={PIN}
					setPIN={setPIN}
					setAuth={setAuth}
				/>
				<MyButton
					text={'5'}
					color={'#88AADD'}
					PIN={PIN}
					setPIN={setPIN}
					setAuth={setAuth}
				/>
				<MyButton
					text={'6'}
					color={'#88AADD'}
					PIN={PIN}
					setPIN={setPIN}
					setAuth={setAuth}
				/>
			</View>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<MyButton
					text={'7'}
					color={'#88AADD'}
					PIN={PIN}
					setPIN={setPIN}
					setAuth={setAuth}
				/>
				<MyButton
					text={'8'}
					color={'#88AADD'}
					PIN={PIN}
					setPIN={setPIN}
					setAuth={setAuth}
				/>
				<MyButton
					text={'9'}
					color={'#88AADD'}
					PIN={PIN}
					setPIN={setPIN}
					setAuth={setAuth}
				/>
			</View>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<MyButton
					text={'Delete'}
					color={'#FF5544'}
					PIN={PIN}
					setPIN={setPIN}
					setAuth={setAuth}
				/>

				<MyButton
					text={'Back'}
					color={'#FFAA22'}
					PIN={PIN}
					setPIN={setPIN}
					setAuth={setAuth}
				/>
				<MyButton
					text={'Enter'}
					color={'#55FF77'}
					PIN={PIN}
					setPIN={setPIN}
					setAuth={setAuth}
					verifyPIN={verifyPIN}
				/>
			</View>
			<View
				style={{
					alignSelf: 'center',
				}}
			>
				<Text
					style={{
						fontWeight: '600',
						color: '#FF5544',
					}}
				>
					{auth}
				</Text>
			</View>
		</View>
	);
}
