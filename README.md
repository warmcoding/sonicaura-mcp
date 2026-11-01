<div align="center">
  <img src="icon.svg" alt="Sonicaura Logo" width="64" />
  <h1>Sonicaura MCP</h1>
  <p><strong>Remote MCP server for audio stem separation, denoise, reverb, and MIDI export.</strong></p>

  [![Official MCP Registry](https://img.shields.io/badge/MCP_Registry-Official-blue)](https://registry.modelcontextprotocol.io/v0/servers?search=sonicaura-mcp)
  [![Smithery](https://img.shields.io/badge/Smithery-Listed-purple)](https://smithery.ai/server/@warmcoding/sonicaura-mcp)
</div>


Sonicaura processes audio using GPU-accelerated AI. It exposes atomic, 1-to-1 semantic tools optimized for LLM reasoning.

## Features

- **Stem Separation** — split a track into 2, 4, or 6 stems
- **Quick Splitter** — isolate any single instrument (guitar, piano, bass, drums)
- **Chord Recognition** — detect chord progressions from the track
- **MIDI Export** — convert isolated instruments into editable MIDI files
- **Denoise** — remove noise from music or aggressively clean up speech
- **Reverb** — add spatial reverb with presets: vocal_booth, studio_room, bathroom, concert_hall, church

## Endpoint

- **URL**: `https://api.sonicaurastudio.com/mcp`
- **Transport**: http (Streamable HTTP)
- **Auth**: OAuth 2.0

## Tools

| Tool | Description |
|---|---|
| `get_upload_url` | Get a presigned URL for large file uploads (bypasses LLM limits). |
| `extract_vocals` | 2 stems: isolate Vocals and Instrumental (Karaoke). |
| `split_4stems` | 4 stems: Vocals, Drums, Bass, Other. |
| `split_6stems` | 6 stems: Vocals, Guitar, Piano, Bass, Drums, Other. |
| `extract_single_instrument` | Quick Splitter: isolate a specific instrument. |
| `extract_chords` | AI Chord Recognition: detect chord progression. |
| `export_midi` | AI MIDI Export: convert an isolated instrument into MIDI. |
| `denoise_audio` | Remove noise (use `mode="music"` or `mode="speech"`). |
| `apply_reverb` | Add spatial reverb. |
| `check_task_status` | Poll a task (requires only `task_id`). Auto-detects all outputs. |
| `list_audio_tools` | List available capabilities. |
| `get_my_credits` | Check remaining credits. |
| `check_service_status` | Check server health. |

## Usage

Add the server to your MCP client config (Cursor, Claude Desktop, VS Code, etc.):

{
  "mcpServers": {
    "sonicaura": {
      "type": "http",
      "url": "https://api.sonicaurastudio.com/mcp"
    }
  }
}

Then ask your AI client things like:

- "Extract the vocals from this song"
- "Split this track into 6 stems"
- "Isolate the guitar track and export it as a MIDI file"
- "Detect the chords in this song"
- "Denoise this music but keep the background music"
- "Add studio reverb to this vocal"

## Web UI

Prefer a visual interface? Use the same engine from the browser:

- [Vocal Remover & Karaoke](https://www.sonicaurastudio.com/tools/ai-vocal)
- [Multitrack Splitter (2/4/6 stems)](https://www.sonicaurastudio.com/tools/vocal-separation)

## Credits & Pricing

Processing uses credits. Get an account and credits at [sonicaurastudio.com](https://www.sonicaurastudio.com)

## License

MIT