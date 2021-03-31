import React from 'react';
import { Route } from 'react-router-dom';

interface Props {
	component: any;
	layout: any;
	path: string;
	exact: boolean
}

const PageRoute: React.FC<Props> = ({ component: Component, layout: Layout, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
                return (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                );
			}}
		/>
	);
};

export default PageRoute;
