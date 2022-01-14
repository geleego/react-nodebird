import React, { useEffect } from 'react';
import { Form, Input, Button, Card, Avatar } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';

const dummy = {
	isLoggedIn: true,
	imagePaths: [],
	mainPosts: [
		{
			User: {
				id: 1,
				nickname: 'gelee',
			},
			content: '첫 번째 게시글',
			img: '',
		},
	],
};

const Home = () => {
	let path;

	useEffect(() => {
		path = window.location.pathname;
	}, []);

	return (
		<>
			{dummy.isLoggedIn && (
				<Form style={{ marginBottom: 20 }} encType='multipart/form-data'>
					<Input.TextArea maxLength={140} placeholder='어떤 신기한 일이 있었나요?' />
					<div>
						<Input type='file' multiple hidden />
						<Button>이미지 업로드</Button>
						<Button type='primary' style={{ float: 'right' }} htmlType='submit'>
							업로드
						</Button>
					</div>
					<div>
						{dummy.imagePaths.map((v) => {
							return (
								<div key={v} style={{ display: 'inline-block' }}>
									<img src={path + v} style={{ width: '200px' }} alt={v}></img>
									<div>
										<Button>제거</Button>
									</div>
								</div>
							);
						})}
					</div>
				</Form>
			)}

			{dummy.mainPosts.map((c) => {
				return (
					<Card
						key={c.User.id}
						cover={c.img && <img alt='example' src={c.img} />}
						actions={[<RetweetOutlined key='retweet' />, <HeartOutlined key='heart' />, <MessageOutlined key='message' />, <EllipsisOutlined key='ellipsis' />]}
						extra={<Button>팔로우</Button>}>
						<Card.Meta avatar={<Avatar>{c.User.nickname[0]}</Avatar>} title={c.User.nickname} description={c.content} />
					</Card>
				);
			})}
		</>
	);
};

export default Home;
