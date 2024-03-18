import {
	QueryClient,
	QueryClientProvider as RQueryClientProvider,
} from "@tanstack/react-query";
import { memo, type ReactNode } from "react";

const queryClient = new QueryClient();

export const QueryClientProvider = memo(
	({ children }: { children: ReactNode }) => {
		return (
			<RQueryClientProvider client={queryClient}>
				{children}
			</RQueryClientProvider>
		);
	},
);
