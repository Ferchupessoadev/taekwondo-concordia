import { useEffect } from "preact/hooks";
import { useTheme, } from "../hooks/useTheme";
import { Sun } from "./icons/Sun";
import { Moon } from "./icons/Moon";

export function ChangeTheme() {
	const [theme, setTheme, changeTheme] = useTheme("dark");

	const changeThemeToSystem = () => {
		window.matchMedia('(prefers-color-scheme: dark)').matches
			? setTheme((theme) => (theme = 'dark'))
			: setTheme((theme) => (theme = 'light'));
	};

	useEffect(() => {
		changeThemeToSystem()
	}, [])

	return (
		<>
			<button
				class="p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-lg dark:text-white text-white outline-none border-none"
				onClick={() => (theme == "dark" ? changeTheme("light") : changeTheme("dark"))}
			>
				{theme == "dark" ? <Moon class="w-6" /> : <Sun class="w-6 h-6 text-black" />}
			</button>
		</>
	);
}
