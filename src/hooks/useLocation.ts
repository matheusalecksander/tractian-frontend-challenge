import { useState, useEffect, useCallback } from "react";

export function useLocation() {
	const [location, setLocation] = useState<URLSearchParams>(new URLSearchParams(window.location.search));

	const setQueryParam = useCallback(
		(key: string, value: string) => {
			const newSearchParams = new URLSearchParams(location);
			newSearchParams.set(key, value);
			const newUrl = `${window.location.origin}${window.location.pathname}?${newSearchParams.toString()}`;
			window.history.pushState(null, "", newUrl);
			setLocation(newSearchParams);
		},
		[location],
	);

	const getQueryParam = useCallback(
		(key: string) => {
			return location.get(key);
		},
		[location],
	);

	useEffect(() => {
		const updateLocation = () => {
			setLocation(new URLSearchParams(window.location.search));
		};

		updateLocation();

		const listener = () => {
			updateLocation();
		};

		window.addEventListener("popstate", listener);

		return () => {
			window.removeEventListener("popstate", listener);
		};
	}, []);

	return {
		location,
		setQueryParam,
		getQueryParam,
	};
}
