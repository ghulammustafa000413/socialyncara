
import { Inngest } from "inngest";

// Generate a client for SocialSyncAra
// Signing keys are managed via environment variables (INNGEST_SIGNING_KEY)
export const inngest = new Inngest({ id: "social-sync-ara" });
