# oLauncher Site

Marketing and commerce site for `oLauncher`.

Production site:

- [https://olauncher.tayueke.cn](https://olauncher.tayueke.cn)

## Scope

This repository contains the public website only:

- product landing pages
- pricing and purchase entry points
- install and activation guidance
- legal pages such as terms, privacy, and refund policy

The app and licensing backend live in separate repositories:

- App: [`oLauncher`](https://github.com/elisontz/oLauncher)
- Licensing service: [`olauncher-licensing-service`](https://github.com/elisontz/olauncher-licensing-service)

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Cloudflare Pages
- Paddle Checkout

## Current status

- The site is deployed on Cloudflare Pages.
- The custom domain `olauncher.tayueke.cn` is active.
- Paddle website review pages have been added.
- The final download URL is still intended to be updated when the release DMG is finalized.

## Local development

```bash
npm install
npm run dev
```

## Tests

```bash
npm test
```

## Cloudflare Pages build

```bash
npm run build
npm run pages:build
```

## Public configuration

These values are currently managed in `wrangler.toml` because this project deploys through Cloudflare Pages with Wrangler-managed public vars:

- `NEXT_PUBLIC_DOWNLOAD_URL`
- `NEXT_PUBLIC_PADDLE_ENV`
- `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN`
- `NEXT_PUBLIC_PADDLE_SINGLE_PRICE_ID`
- `NEXT_PUBLIC_PADDLE_DOUBLE_PRICE_ID`
- `NEXT_PUBLIC_SUPPORT_EMAIL`
- `NEXT_PUBLIC_CURRENT_VERSION`
