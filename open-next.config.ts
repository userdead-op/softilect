import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Basic Cloudflare Workers config.
// To enable R2 incremental cache later, import r2IncrementalCache and pass:
// incrementalCache: r2IncrementalCache
export default defineCloudflareConfig({});
