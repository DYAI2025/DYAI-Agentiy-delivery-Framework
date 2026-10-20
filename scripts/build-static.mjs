import { copyFile, mkdir, readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { join } from "node:path";

const source = "DYAI Agentic Library Framework.html";
const checksums = await readFile("SHA256SUMS", "utf8");
const entry = checksums.trim().split(/\r?\n/).find((line) => line.endsWith("  " + source));
if (!entry) throw new Error("Approved HTML checksum entry missing");
const expected = entry.slice(0, 64);
const original = await readFile(source);
const actual = createHash("sha256").update(original).digest("hex");
if (actual !== expected) throw new Error("Approved HTML artifact checksum mismatch");
await mkdir("dist", { recursive: true });
await copyFile(source, join("dist", "index.html"));
const output = await readFile(join("dist", "index.html"));
if (!output.equals(original)) throw new Error("Static output does not preserve approved HTML bytes");
console.log("FLAD static build PASS: dist/index.html byte-identical to approved source (" + actual + ")");
