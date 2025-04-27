# URL Parameters Auto-fill Configuration Guide

## Feature Introduction

Deep Research Web UI now supports auto-filling configuration information through URL parameters. Users can open the application via a specific link and automatically fill in model names, API keys, API Base URLs, and other configuration information without manual input.

## Supported URL Parameters

### AI Provider Configuration

| Parameter | Description | Possible Values |
| --- | --- | --- |
| `aiProvider` | AI provider | `openai-compatible`, `siliconflow`, `infiniai`, `openrouter`, `deepseek`, `ollama` |
| `aiModel` | Model name | Any string |
| `aiApiKey` | API key | Any string |
| `aiApiBase` | API base URL | Any valid URL |
| `aiContextSize` | Context size | Any number |

### Web Search Provider Configuration

| Parameter | Description | Possible Values |
| --- | --- | --- |
| `webSearchProvider` | Web search provider | `tavily`, `firecrawl`, `google-pse` |
| `webSearchApiKey` | API key | Any string |
| `webSearchApiBase` | API base URL | Any valid URL |
| `googlePseId` | Google PSE ID | Any string |

### Other Parameters

| Parameter | Description | Possible Values |
| --- | --- | --- |
| `showConfig` | Automatically open config manager | `true`, `false` |

## Usage Examples

### Basic Example

```
https://your-deep-research-domain.com/?aiProvider=openai-compatible&aiModel=gpt-4&aiApiKey=your-api-key&aiApiBase=https://api.openai.com/v1
```

### Auto-open Config Manager

```
https://your-deep-research-domain.com/?aiProvider=openai-compatible&aiModel=gpt-4&aiApiKey=your-api-key&showConfig=true
```

### Complete Configuration Example

```
https://your-deep-research-domain.com/?aiProvider=openai-compatible&aiModel=gpt-4&aiApiKey=your-api-key&aiApiBase=https://api.openai.com/v1&aiContextSize=128000&webSearchProvider=tavily&webSearchApiKey=your-tavily-api-key&showConfig=true
```

## Important Notes

1. Sensitive information in URL parameters (such as API keys) will be saved in the browser's local storage. Make sure to clear browser data after use on shared devices.
2. For security reasons, it is recommended to use this feature in a trusted environment.
3. If a provider in the URL parameters is not in the supported list, that parameter will be ignored.