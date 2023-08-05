
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import ThemeContext from './context/themeContext';

const queryClient = new QueryClient({
	defaultOptions: { queries: { retry: 0, refetchOnWindowFocus: false }, mutations: { retry: 0 } },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);


root.render(
	<StrictMode>
		<div dir="rtl">
			<QueryClientProvider client={queryClient}>
				<ThemeContext>
						<App />
				</ThemeContext>
			</QueryClientProvider>
		</div>
	</StrictMode>
);
