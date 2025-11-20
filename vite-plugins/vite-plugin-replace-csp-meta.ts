import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";

const PROD_CSP = {
	"default-src": "'self'",
	"script-src": "'self'",
	"style-src": "'self'",
	"img-src": "'self' data:",
	"connect-src": "'self' https://api.openai.com",
	"font-src": "'self'",
	"object-src": "'none'",
	"frame-src": "'none'",
	"media-src": "'self' https://hearthis.at https://*.hearthis.at blob:",
};

function cspObjectToString(csp: Record<string, string>): string {
	return Object.entries(csp)
		.map(([key, value]) => `${key} ${value}`)
		.join("; ");
}

const PROD_CSP_CONTENT = cspObjectToString(PROD_CSP);

export default function ReplaceCSPMetaPlugin(): Plugin {
	return {
		name: "vite-plugin-replace-csp-meta",
		apply: "build",
		closeBundle() {
			const indexPath = path.resolve(__dirname, "../dist/index.html");
			if (!fs.existsSync(indexPath)) {
				console.warn("[vite-plugin-replace-csp-meta] index.html not found");
				return;
			}

			const html = fs.readFileSync(indexPath, "utf-8");
			const metaRegex =
				/<meta[^>]*http-equiv=["']Content-Security-Policy["'][^>]*?>/is;
			const replacement = `<meta http-equiv="Content-Security-Policy" content="${PROD_CSP_CONTENT}" />`;
			const updated = html.replace(metaRegex, replacement);

			fs.writeFileSync(indexPath, updated, "utf-8");
			console.log(
				`[vite-plugin-replace-csp-meta] CSP meta tag updated for production to ${PROD_CSP_CONTENT}`,
			);
		},
	};
}
