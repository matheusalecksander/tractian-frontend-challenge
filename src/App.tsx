import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { theme } from "./_config/theme";
import { Main } from "./features/main";
import { CompaniesContextProvider } from "./contexts/companies.provider";

export function App() {
	return (
		<CompaniesContextProvider>
			<ThemeProvider theme={theme}>
				<Header />
				<Main />
			</ThemeProvider>
		</CompaniesContextProvider>
	);
}
