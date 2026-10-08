# DYAI Agentic Library Framework

A separate DYAI project. This repository is **not** the DYAI Studio Blue website.

## Baseline

The initial baseline is the Product Owner-approved Claude Design artifact, preserved byte-for-byte.

| | |
|---|---|
| Canonical bootstrap artifact | `DYAI Agentic Library Framework.html` |
| Source artifact (original filename) | `DYAI Agentic Delivery Framework.html` |
| Approved baseline SHA-256 | `f4321da145c9dd7b36f189c49f42a6d04659c5bbb3378244b3dfcc7e1d7cd30c` |
| Size | 290450 bytes |

Only the filename changed during bootstrap; the content is identical to the approved source. Verify with:

```sh
shasum -a 256 -c SHA256SUMS
```

The artifact still names itself "DYAI Agentic Delivery Framework" internally. Renaming internal copy from "Delivery" to "Library", if desired, is **not** part of this bootstrap.

## Local preview

No build system exists yet. The HTML is self-contained except for its existing external Google Fonts requests (`fonts.googleapis.com`, `fonts.gstatic.com`).

```sh
python3 -m http.server 4183
```

Then open <http://127.0.0.1:4183/DYAI%20Agentic%20Library%20Framework.html>.

## Changes

Future changes must preserve the accepted baseline through normal version history: change the artifact in reviewed commits, never by rewriting this initial commit.
