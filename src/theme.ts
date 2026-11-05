/**
 * Theme composition and contract validation for Trajectonomics design system.
 */
import { colors, radii } from "./tokens"

export enum ThemeErrorCode {
	INVALID_CANVAS = "INVALID_CANVAS",
	INVALID_INK = "INVALID_INK",
}

export class ThemeError extends Error {
	readonly code: ThemeErrorCode

	constructor(code: ThemeErrorCode, message: string) {
		super(`[${code}]: ${message}`)
		this.name = "ThemeError"
		this.code = code
	}
}

export interface ThemeConfig {
	readonly canvas: string
	readonly ink: string
	readonly radius?: string
}

export interface Theme {
	readonly canvas: string
	readonly ink: string
	readonly radius: string
}

export function createTheme(config: ThemeConfig): Theme {
	if (!config.canvas || config.canvas.trim().length === 0) {
		throw new ThemeError(ThemeErrorCode.INVALID_CANVAS, "Theme canvas color must be non-empty.")
	}
	if (!config.ink || config.ink.trim().length === 0) {
		throw new ThemeError(ThemeErrorCode.INVALID_INK, "Theme ink color must be non-empty.")
	}
	return Object.freeze({
		canvas: config.canvas.trim(),
		ink: config.ink.trim(),
		radius: config.radius?.trim() ?? radii.md,
	})
}

export const defaultTheme: Theme = createTheme({
	canvas: colors.canvasCream,
	ink: colors.inkBlack,
	radius: radii.md,
})
