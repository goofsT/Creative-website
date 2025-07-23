import { ComponentPublicInstance } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: MessageAPI
  }
}

export type MessageType = 'success' | 'warning' | 'error' | 'info'

export interface MessageOptions {
  title?: string
  message?: string
  type?: MessageType
  showIcon?: boolean
  showClose?: boolean
  showButtons?: boolean
  showCancelButton?: boolean
  confirmButtonText?: string
  cancelButtonText?: string
  closeOnEscape?: boolean
  closeOnMaskClick?: boolean
  duration?: number
  callback?: (action: { action: string }) => void
  onClose?: () => void
  onConfirm?: () => void
  onCancel?: () => void
}

export interface MessageInstance {
  close: () => void
}

export interface MessageAPI {
  show: (options: MessageOptions | string) => MessageInstance
  success: (options: MessageOptions | string) => MessageInstance
  warning: (options: MessageOptions | string) => MessageInstance
  error: (options: MessageOptions | string) => MessageInstance
  info: (options: MessageOptions | string) => MessageInstance
  confirm: (options: MessageOptions | string) => MessageInstance
} 