import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
	it("should have hello world", () => {
		render(<App />);

		const h1 = screen.getByRole("heading", { level: 1 });

		expect(h1).toHaveTextContent("Hello world!");
	});
});
