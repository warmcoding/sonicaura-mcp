<img src="icon.svg" alt="SonicAura Logo" width="64" />

[Smithery](https://smithery.ai/server/@warmcoding/sonicaura-mcp)

# sonicaura-mcp

Remote MCP server for audio stem separation, denoise, and reverb.

## What it does

SonicAura processes audio using GPU-accelerated AI:

- **Stem separation** — split a track into 2, 4, or 6 stems
  - `2stems`: vocals + no_vocals
  - `4stems`: vocals + drums + bass + other
  - `6stems`: vocals + guitar + bass + drums + piano + other
- **Denoise**
  - `music_denoise`: remove noise from music while keeping the instruments and vocals intact
  - `denoise`: aggressive speech cleanup for podcasts / interviews / voiceovers
- **Reverb** — add spatial reverb with presets: `vocal_booth`, `studio_room`, `bathroom`, `concert_hall`, `church`

## Endpoint

    https://api.sonicaurastudio.com/mcp

Transport: `http` (Streamable HTTP)
Auth: OAuth 2.0

## Tools

| Tool | Description |
|---|---|
| `list_audio_tools` | List available task types and metadata |
| `check_service_status` | Confirm service availability and credits |
| `get_upload_url` | Presigned URL for files larger than 1 MB |
| `upload_audio` | Base64 upload for files under 1 MB |
| `process_audio` | Submit a task (`music_denoise` \| `denoise` \| `reverb` \| `2stems` \| `4stems` \| `6stems`) |
| `extract_vocals` | Shortcut for `process_audio` with `task_type='2stems'` — extract vocals and instrumental |
| `check_task_status` | Poll a task |
| `get_my_credits` | Check remaining credits |

## Usage

Add the server to your MCP client config:

    {
      "mcpServers": {
        "audio-process": {
          "type": "http",
          "url": "https://api.sonicaurastudio.com/mcp"
        }
      }
    }

Then ask your client things like:

- "Extract the vocals from this song"
- "Remove the vocals and keep the instrumental"
- "Separate this song into 6 stems"
- "Isolate the guitar track"
- "Denoise this music but keep the background music"
- "Clean up the noise in this voice recording"
- "Add studio reverb to this vocal"

## Web UI

Prefer a visual interface? Use the same engine from the browser:

- **Vocal Remover & Karaoke** — https://www.sonicaurastudio.com/tools/ai-vocal
- **Multitrack Splitter (2/4/6 stems)** — https://www.sonicaurastudio.com/tools/vocal-separation

## Credits

Processing uses credits. Get an account and credits at https://www.sonicaurastudio.com


## License

MIT