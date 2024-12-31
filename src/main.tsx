import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager } from "styled-components";

// Verify root element exists
const rootElement = document.getElementById("root");
if (!rootElement) {
	throw new Error("Root element not found");
}

// Add basic styles to root element
rootElement.style.height = "100vh";
rootElement.style.width = "100vw";
rootElement.style.display = "flex";
rootElement.style.flexDirection = "column";

try {
	ReactDOM.createRoot(rootElement).render(
		<Suspense fallback={<div>Loading...</div>}>
			<BrowserRouter>
				<StyleSheetManager shouldForwardProp={(prop) => prop !== "shake"}>
					<App />
				</StyleSheetManager>
			</BrowserRouter>
		</Suspense>
	);
} catch (error) {
	console.error("Failed to render application:", error);
}
