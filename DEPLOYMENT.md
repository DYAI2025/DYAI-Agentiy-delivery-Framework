# FLAD static deployment — release proposal

Canonical source: `DYAI Agentic Library Framework.html`. This approved prototype is preserved byte-for-byte. The build script verifies its checksum in `SHA256SUMS`, copies it to `dist/index.html`, and verifies byte equivalence.

## Cloudflare Pages

- Repository: `DYAI2025/DYAI-Agentiy-delivery-Framework`
- Production branch: `main` **after reviewed PR and CI pass**
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: `/`
- Desired Pages project: `dyai-flad`
- Desired custom hostname: `flad.dyai.cloud`

The hosting project, custom hostname, DNS and production deployment must be activated and verified separately. Nothing in this PR creates Cloudflare infrastructure or implies a live service.

## Release gates

1. Verify exact reviewed Git HEAD and passing workflow.
2. Inspect the rendered page at a Pages preview URL on desktop/mobile, check navigation, interaction, console and accessibility.
3. Make explicit that this is a **conceptual/static framework experience**: no production AGT/Governor status, no real execution, no private run evidence.
4. Ensure no private tokens, customer data or control-plane API endpoints leak into the public HTML.
5. Approve custom domain binding; verify certificate, HTTPS, navigation and response headers.
6. Roll back via Pages deployment rollback or domain deactivation on failure.

Slash is a different Next.js product and remains on its existing Render service. No infrastructure migration or VPS/ArchServer operation is included.
