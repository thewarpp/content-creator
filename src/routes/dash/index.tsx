import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dash/")({ component: Dashboard });

function Dashboard() {
	return <div>Test</div>;
}
