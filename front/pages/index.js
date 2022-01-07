import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Home = () => {
	return (
		<>
			<Head>
				<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/4.18.2/antd.css'></link>
			</Head>
			<AppLayout>
				<div>Hello, Next!</div>
			</AppLayout>
		</>
	);
};

export default Home;
