import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { theme } from "./_config/theme";

export function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
		</ThemeProvider>
	);
}
