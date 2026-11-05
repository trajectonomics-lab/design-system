import { describe, expect, it } from "bun:test"
import { getTemplateInfo } from "./index"

describe("getTemplateInfo", () => {
	it("returns valid template metadata", () => {
		const info = getTemplateInfo()
		expect(info.name).toBe("@trajectonomics/design-system")
		expect(info.initialized).toBe(true)
	})

	it("returns a frozen object", () => {
		const info = getTemplateInfo()
		expect(Object.isFrozen(info)).toBe(true)
	})
})
