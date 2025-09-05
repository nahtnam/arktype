import { redirect } from "next/navigation"
import { generateMetadataClient } from "../../lib/generate-metadata.ts"

export const generateMetadata = generateMetadataClient.getMetadata(() => ({
	path: "/discord"
}))

export default function DiscordPage() {
	redirect("https://discord.com/invite/xEzdc3fJQC")
}
