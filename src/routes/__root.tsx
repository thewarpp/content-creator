import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="flex gap-2 p-2">
				<Link to="/" className="[&.active]:font-bold">
					Overview
				</Link>{" "}
				<Link to="/workspaces" className="[&.active]:font-bold">
					Workspaces
				</Link>
			</div>
			<hr />

			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
});
