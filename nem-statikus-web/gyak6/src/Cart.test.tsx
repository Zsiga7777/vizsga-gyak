// @vitest-environment happy-dom

import { renderToString } from "react-dom/server";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Header from "./components/Header";

describe("Kosár", ()=>{
    it("Tartalmazza a megadott szöveget", () => {
        const html = renderToString(<BrowserRouter>
            <Header/>
        </BrowserRouter>)
        expect(html).toContain("Kosár")
    })
})