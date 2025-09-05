import { generateMetadataClient } from "../../../../lib/generate-metadata.ts"

export const { DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT } =
	generateMetadataClient.revalidateWebhookHandler({
		webhookSecret: process.env.GENERATE_METADATA_WEBHOOK_SECRET
	})
