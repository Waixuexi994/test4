import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `书虫
- 由书虫提供,进行测试使用,每天官网开放免费限额使用,更新时间由Vx：SCFuYe003朋友圈通知
- [[Shift]] + [[Enter]] 换行。开头输入 [[空格]] 跳出更多 预设。[[↑]] 可编辑最近一次提问。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
