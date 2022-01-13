import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Input, Button, Row, Col, Card, Avatar } from 'antd';

const dummy = {
	nickname: 'gelee',
	post: [],
	followings: [],
	followers: [],
};

const AppLayout = ({ children }) => {
	return (
		<>
			<div>
				<Menu mode='horizontal'>
					<Menu.Item key='home'>
						<Link href='/'>
							<a>노드버드</a>
						</Link>
					</Menu.Item>
					<Menu.Item key='profile'>
						<Link href='/profile'>
							<a>프로필</a>
						</Link>
					</Menu.Item>
					<Menu.Item key='mail'>
						<Input.Search enterButton style={{ verticalAlign: 'middle' }} />
					</Menu.Item>
				</Menu>
				<Link href='/signup'>
					<a>
						<Button>회원가입</Button>
					</a>
				</Link>
				<Row>
					<Col xs={24} md={6}>
						<Card
							actions={[
								<div key='twit'>
									트윗
									<br />
									{dummy.post.length}
								</div>,
								<div key='following'>
									팔로윙
									<br />
									{dummy.followings.length}
								</div>,
								<div key='follower'>
									팔로워
									<br />
									{dummy.followers.length}
								</div>,
							]}>
							<Card.Meta avatar={<Avatar>{dummy.nickname[0]}</Avatar>} title={dummy.nickname} />
						</Card>
					</Col>
					<Col xs={24} md={12}>
						{children}
					</Col>
					<Col xs={24} md={6}></Col>
				</Row>
			</div>
		</>
	);
};

AppLayout.propTypes = {
	children: PropTypes.node,
};

export default AppLayout;
