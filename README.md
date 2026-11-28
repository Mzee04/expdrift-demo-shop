# expdrift-demo-shop

A tiny demo shop with one running Flagsmith experiment ("Checkout button test", flag `checkout_button`, metric event `checkout_completed`), used to show [ExpDrift](https://github.com/Mzee04/expdrift) on real pull requests.

ExpDrift runs on every PR (`.github/workflows/expdrift.yml`, pinned to a reviewed ExpDrift commit). It reads the running experiments from Flagsmith with GET requests only and comments when a PR would break one. A maintainer can reply `/expdrift apply` to get a separate fix PR. That ExpDrift workflow is *meant* to fail on the demo pull request — a failing check is the product demonstration, not a broken repo. The separate Tests workflow is the one that should stay green.

This is a demo fixture, not a product.
