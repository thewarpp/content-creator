import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/workspaces")({
	component: Workspaces,
});

function Workspaces() {
	return <div className="p-2">Hello from About!</div>;
}
