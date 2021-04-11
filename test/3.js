if (
	typeof process.env.CI_THREAD !== "undefined" && (
		process.env.CI_THREAD === "3" && !process.version.startsWith("v15")
	)
) {
	console.log("Skipping thread 3 tests for < v15!");
} else if (
	typeof process.env.CI_THREAD === "undefined" || (
		process.env.CI_THREAD === "3" && process.version.startsWith("v15")
	)
) {
	require("../src/test-template")(3);
}