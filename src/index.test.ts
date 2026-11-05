import { describe, expect, it } from "bun:test"
import {
	colors,
	createTheme,
	defaultTheme,
	radii,
	spacing,
	ThemeError,
	ThemeErrorCode,
} from "./index"

describe("Design Tokens", () => {
	it("exports frozen color tokens", () => {
		expect(colors.canvasCream).toBe("#F3F0EE")
		expect(colors.inkBlack).toBe("#141413")
		expect(colors.signalOrange).toBe("#CF4500")
		expect(Object.isFrozen(colors)).toBe(true)
	})

	it("exports frozen radius tokens", () => {
		expect(radii.hero).toBe("40px")
		expect(radii.pill).toBe("9999px")
		expect(Object.isFrozen(radii)).toBe(true)
	})

	it("exports frozen spacing tokens", () => {
		expect(spacing[1]).toBe("4px")
		expect(spacing[4]).toBe("16px")
		expect(Object.isFrozen(spacing)).toBe(true)
	})
})

describe("Theme Factory", () => {
	it("creates a frozen default theme with expected tokens", () => {
		expect(defaultTheme.canvas).toBe("#F3F0EE")
		expect(defaultTheme.ink).toBe("#141413")
		expect(defaultTheme.radius).toBe("8px")
		expect(Object.isFrozen(defaultTheme)).toBe(true)
	})

	it("creates a custom theme when valid properties are passed", () => {
		const custom = createTheme({
			canvas: "#FFFFFF",
			ink: "#000000",
			radius: "20px",
		})
		expect(custom.canvas).toBe("#FFFFFF")
		expect(custom.ink).toBe("#000000")
		expect(custom.radius).toBe("20px")
		expect(Object.isFrozen(custom)).toBe(true)
	})

	it("rejects theme creation with empty canvas", () => {
		expect(() => createTheme({ canvas: "", ink: "#000000" })).toThrow(ThemeError)
		try {
			createTheme({ canvas: "   ", ink: "#000000" })
		} catch (err) {
			expect(err).toBeInstanceOf(ThemeError)
			expect((err as ThemeError).code).toBe(ThemeErrorCode.INVALID_CANVAS)
		}
	})

	it("rejects theme creation with empty ink", () => {
		expect(() => createTheme({ canvas: "#FFFFFF", ink: "" })).toThrow(ThemeError)
		try {
			createTheme({ canvas: "#FFFFFF", ink: "   " })
		} catch (err) {
			expect(err).toBeInstanceOf(ThemeError)
			expect((err as ThemeError).code).toBe(ThemeErrorCode.INVALID_INK)
		}
	})
})
