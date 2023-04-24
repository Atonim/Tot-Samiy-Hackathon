import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import background from './img/fonk.png';

const App = () => {
	const [scheme, setScheme] = useState('bright_light')
	const [activePanel, setActivePanel] = useState('home');
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				setScheme(data.scheme)
			}
		});

		async function fetchFriends() { //Artyoma's API
			const token = await bridge.send("VKWebAppGetAuthToken", { 
				"app_id": 51438734, 
				"scope": "friends,status"
			  });
			  
			  const data = await bridge.send("VKWebAppCallAPIMethod", {
				method: "friends.get",
				request_id: "getFriends",
				params: {order: "random", count: "7", fields:'photo_200_orig', v:"5.131", access_token: token.access_token},
			});
				setFriends(data.response.items)
				return data.response.items
		}
		fetchFriends();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<ConfigProvider scheme={scheme}>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout>
						<SplitCol>
							<View activePanel={activePanel} style={{ backgroundImage: `url(${background})` }}>
								<Home id='home' friends = {friends}/>
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
