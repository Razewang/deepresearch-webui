/**
 * 用于从URL参数中提取配置信息并自动填充到配置存储中
 */
import { useConfigStore } from '../stores/config'
import type { ConfigAiProvider, ConfigWebSearchProvider } from '../stores/config'

/**
 * 从URL参数中解析配置信息并更新配置存储
 */
export function parseConfigFromUrlParams() {
  // 仅在客户端执行
  if (typeof window === 'undefined') return
  
  const { config } = useConfigStore()
  const urlParams = new URLSearchParams(window.location.search)
  
  // AI提供商配置
  const aiProvider = urlParams.get('aiProvider') as ConfigAiProvider
  if (aiProvider && ['openai-compatible', 'siliconflow', 'infiniai', 'openrouter', 'deepseek', 'ollama'].includes(aiProvider)) {
    config.ai.provider = aiProvider
  }
  
  const aiModel = urlParams.get('aiModel')
  if (aiModel) {
    config.ai.model = aiModel
  }
  
  const aiApiKey = urlParams.get('aiApiKey')
  if (aiApiKey) {
    config.ai.apiKey = aiApiKey
  }
  
  const aiApiBase = urlParams.get('aiApiBase')
  if (aiApiBase) {
    config.ai.apiBase = aiApiBase
  }
  
  const aiContextSize = urlParams.get('aiContextSize')
  if (aiContextSize && !isNaN(Number(aiContextSize))) {
    config.ai.contextSize = Number(aiContextSize)
  }
  
  // Web搜索提供商配置
  const webSearchProvider = urlParams.get('webSearchProvider') as ConfigWebSearchProvider
  if (webSearchProvider && ['tavily', 'firecrawl', 'google-pse'].includes(webSearchProvider)) {
    config.webSearch.provider = webSearchProvider
  }
  
  const webSearchApiKey = urlParams.get('webSearchApiKey')
  if (webSearchApiKey) {
    config.webSearch.apiKey = webSearchApiKey
  }
  
  const webSearchApiBase = urlParams.get('webSearchApiBase')
  if (webSearchApiBase) {
    config.webSearch.apiBase = webSearchApiBase
  }
  
  const googlePseId = urlParams.get('googlePseId')
  if (googlePseId) {
    config.webSearch.googlePseId = googlePseId
  }
  
  // 如果URL中包含showConfig=true参数，自动打开配置管理器
  return urlParams.get('showConfig') === 'true'
}