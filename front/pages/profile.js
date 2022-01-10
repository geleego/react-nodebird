import Head from 'next/head';
import React from 'react';
import AppLayout from '../components/AppLayout';

const Profile = () => {
	return (
		<>
			<Head>
				<title>NodeBird</title>
				<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/4.18.2/antd.css'></link>
			</Head>
			<AppLayout>
				<div>내 프로필</div>
			</AppLayout>
		</>
	);
};

export default Profile;
