# URL参数自动填充配置指南

## 功能介绍

Deep Research Web UI现在支持通过URL参数自动填充配置信息。用户可以通过特定链接打开应用并自动填充模型名称、API密钥、API Base URL等配置信息，无需手动输入。

## 支持的URL参数

### AI提供商配置

| 参数名 | 说明 | 可选值 |
| --- | --- | --- |
| `aiProvider` | AI提供商 | `openai-compatible`, `siliconflow`, `infiniai`, `openrouter`, `deepseek`, `ollama` |
| `aiModel` | 模型名称 | 任意字符串 |
| `aiApiKey` | API密钥 | 任意字符串 |
| `aiApiBase` | API基础URL | 任意有效URL |
| `aiContextSize` | 上下文大小 | 任意数字 |

### Web搜索提供商配置

| 参数名 | 说明 | 可选值 |
| --- | --- | --- |
| `webSearchProvider` | Web搜索提供商 | `tavily`, `firecrawl`, `google-pse` |
| `webSearchApiKey` | API密钥 | 任意字符串 |
| `webSearchApiBase` | API基础URL | 任意有效URL |
| `googlePseId` | Google PSE ID | 任意字符串 |

### 其他参数

| 参数名 | 说明 | 可选值 |
| --- | --- | --- |
| `showConfig` | 是否自动打开配置管理器 | `true`, `false` |

## 使用示例

以下是一些使用示例：

### 基本示例

```
https://your-deep-research-domain.com/?aiProvider=openai-compatible&aiModel=gpt-4&aiApiKey=your-api-key&aiApiBase=https://api.openai.com/v1
```

### 自动打开配置管理器

```
https://your-deep-research-domain.com/?aiProvider=openai-compatible&aiModel=gpt-4&aiApiKey=your-api-key&showConfig=true
```

### 完整配置示例

```
https://your-deep-research-domain.com/?aiProvider=openai-compatible&aiModel=gpt-4&aiApiKey=your-api-key&aiApiBase=https://api.openai.com/v1&aiContextSize=128000&webSearchProvider=tavily&webSearchApiKey=your-tavily-api-key&showConfig=true
```

## 注意事项

1. URL参数中的敏感信息（如API密钥）会被保存在浏览器的本地存储中，请确保在共享设备上使用后清除浏览器数据。
2. 为了安全起见，建议在可信环境中使用此功能。
3. 如果URL参数中的提供商不在支持列表中，该参数将被忽略。