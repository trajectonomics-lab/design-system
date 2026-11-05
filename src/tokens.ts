/**
 * Primitive design tokens for Trajectonomics design system.
 * All tokens are immutable and deterministic.
 */

export interface Colors {
	readonly canvasCream: "#F3F0EE"
	readonly liftedCream: "#FCFBFA"
	readonly white: "#FFFFFF"
	readonly inkBlack: "#141413"
	readonly charcoal: "#262627"
	readonly slateGray: "#696969"
	readonly granite: "#555555"
	readonly graphite: "#565656"
	readonly dustTaupe: "#D1CDC7"
	readonly signalOrange: "#CF4500"
	readonly lightSignalOrange: "#F37338"
	readonly clayBrown: "#9A3A0A"
	readonly linkBlue: "#3860BE"
}

export const colors: Colors = Object.freeze({
	canvasCream: "#F3F0EE",
	liftedCream: "#FCFBFA",
	white: "#FFFFFF",
	inkBlack: "#141413",
	charcoal: "#262627",
	slateGray: "#696969",
	granite: "#555555",
	graphite: "#565656",
	dustTaupe: "#D1CDC7",
	signalOrange: "#CF4500",
	lightSignalOrange: "#F37338",
	clayBrown: "#9A3A0A",
	linkBlue: "#3860BE",
})

export type ColorToken = keyof Colors

export interface Radii {
	readonly none: "0px"
	readonly sm: "4px"
	readonly md: "8px"
	readonly lg: "16px"
	readonly xl: "20px"
	readonly hero: "40px"
	readonly pill: "9999px"
}

export const radii: Radii = Object.freeze({
	none: "0px",
	sm: "4px",
	md: "8px",
	lg: "16px",
	xl: "20px",
	hero: "40px",
	pill: "9999px",
})

export type RadiusToken = keyof Radii

export interface Spacing {
	readonly 0: "0px"
	readonly 1: "4px"
	readonly 2: "8px"
	readonly 3: "12px"
	readonly 4: "16px"
	readonly 5: "20px"
	readonly 6: "24px"
	readonly 8: "32px"
	readonly 10: "40px"
	readonly 12: "48px"
}

export const spacing: Spacing = Object.freeze({
	0: "0px",
	1: "4px",
	2: "8px",
	3: "12px",
	4: "16px",
	5: "20px",
	6: "24px",
	8: "32px",
	10: "40px",
	12: "48px",
})

export type SpacingToken = keyof Spacing
