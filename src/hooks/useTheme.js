import { useState, useEffect } from "preact/hooks";

export function useTheme(themeDefault) {
	const [theme, setTheme] = useState(themeDefault);

	useEffect(() => {
		const $html = document.querySelector("html");
		if (theme == "dark") {
			$html.classList.add("dark");
		} else {
			$html.classList.remove("dark");
		}
	}, [theme]);

	const changeTheme = (changeTotheme) => {
		setTheme((theme) => (theme = changeTotheme));
	};

	return [
		theme,
		setTheme,
		changeTheme
	];
}
