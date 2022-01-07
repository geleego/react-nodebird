import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Signup = () => {
	return (
		<>
			<Head>
				<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/4.18.2/antd.css'></link>
			</Head>
			<AppLayout>
				<div>회원가입</div>
			</AppLayout>
		</>
	);
};

export default Signup;
