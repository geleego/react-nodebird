import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';

const NodeBird = ({ Component }) => {
	return (
		<>
			<Head>
				<title>NodeBird</title>
				<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/4.18.2/antd.css'></link>
			</Head>
			<AppLayout>
				<Component />
			</AppLayout>
		</>
	);
};

NodeBird.propTypes = {
	Component: PropTypes.elementType,
};

export default NodeBird;
