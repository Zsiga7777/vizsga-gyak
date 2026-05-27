// @vitest-environment happy-dom

import { renderToString } from "react-dom/server";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Navigation from "./components/Navigation";

describe("Kosár", () => {
    it("Tartalmazza a szöveget", () => {
        const html = renderToString(
            <BrowserRouter>
            <Navigation/>
            </BrowserRouter>
        )
        expect(html).toContain("Kosár")
    })
})