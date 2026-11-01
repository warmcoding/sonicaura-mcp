import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
    { name: "sonicaura-mcp", version: "1.1.1" },
    { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [
        { name: "extract_vocals", description: "Isolate vocals and instrumental" },
        { name: "split_4stems", description: "Split into 4 stems" },
        { name: "split_6stems", description: "Split into 6 stems" },
        { name: "denoise_audio", description: "Remove noise from audio" }
    ]
}));

const transport = new StdioServerTransport();
await server.connect(transport);