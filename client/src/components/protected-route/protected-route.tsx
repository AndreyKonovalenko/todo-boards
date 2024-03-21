import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useUserStore } from '../../services/user/user-store';

// import LoadingBage from '../loading-bage/loading-bage';

type TProps = {
	element: JSX.Element;
};

const ProtectedRoute = ({ element }: TProps): JSX.Element => {
	const user = useUserStore((state) => state.user);
	const navigate = useNavigate();
	const { pathname } = useLocation();

	useEffect(() => {
		if (!Boolean(user)) {
			navigate('/login', { state: { from: pathname }, replace: true });
		}
	}, [navigate, pathname, user]);

	// if (loading) {
	//   return (<LoadingBage/>);
	// }

	return Boolean(user) ? element : <></>;
};

export default ProtectedRoute;
