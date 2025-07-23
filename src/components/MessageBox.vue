<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="visible" class="message-box__overlay" @click.self="closeOnMaskClick && close()">
        <div class="message-box__container" :class="[`message-box--${type}`, { 'with-close': showClose }]">
          <div class="message-box__content">
            <div v-if="showIcon" class="message-box__icon">
              <svg v-if="type === 'success'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <svg v-else-if="type === 'error'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
              <svg v-else-if="type === 'warning'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <div class="message-box__body">
              <h3 v-if="title" class="message-box__title">{{ title }}</h3>
              <div class="message-box__message">
                <slot>{{ message }}</slot>
              </div>
            </div>
            <div v-if="showClose" class="message-box__close" @click="close">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          </div>
          <div v-if="showButtons" class="message-box__buttons">
            <button v-if="showCancelButton" class="message-box__button message-box__button--cancel" @click="handleCancel">
              {{ cancelButtonText }}
            </button>
            <button class="message-box__button message-box__button--confirm" @click="handleConfirm">
              {{ confirmButtonText }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
  name: 'MessageBox',
  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info',
      validator: (val) => ['success', 'warning', 'error', 'info'].includes(val)
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    showButtons: {
      type: Boolean,
      default: false
    },
    showCancelButton: {
      type: Boolean,
      default: false
    },
    confirmButtonText: {
      type: String,
      default: '确定'
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    closeOnEscape: {
      type: Boolean,
      default: true
    },
    closeOnMaskClick: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3000
    },
    callback: {
      type: Function,
      default: null
    },
    onClose: {
      type: Function,
      default: () => {}
    },
    onConfirm: {
      type: Function,
      default: () => {}
    },
    onCancel: {
      type: Function,
      default: () => {}
    }
  },
  emits: ['close', 'confirm', 'cancel'],
  setup(props, { emit, expose }) {
    const visible = ref(false);
    let timer = null;

    const keydownHandler = (e) => {
      if (props.closeOnEscape && e.key === 'Escape') {
        close();
      }
    };

    const close = () => {
      visible.value = false;
      emit('close');
      props.onClose();
      if (props.callback) props.callback({ action: 'close' });
    };

    const handleConfirm = () => {
      close();
      emit('confirm');
      props.onConfirm();
      if (props.callback) props.callback({ action: 'confirm' });
    };

    const handleCancel = () => {
      close();
      emit('cancel');
      props.onCancel();
      if (props.callback) props.callback({ action: 'cancel' });
    };

    const open = () => {
      visible.value = true;
      if (props.duration > 0 && !props.showButtons) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          close();
        }, props.duration);
      }
    };

    onMounted(() => {
      document.addEventListener('keydown', keydownHandler);
      open();
    });

    onBeforeUnmount(() => {
      document.removeEventListener('keydown', keydownHandler);
      clearTimeout(timer);
    });

    // 暴露方法供外部调用
    expose({
      visible,
      close,
      open
    });

    return {
      visible,
      close,
      handleConfirm,
      handleCancel,
    };
  }
});
</script>

<style lang="scss" scoped>
.message-box {
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    overflow: hidden;
  }

  &__container {
    position: relative;
    width: 90%;
    max-width: 420px;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    padding: 20px;
    
    @media (prefers-color-scheme: dark) {
      background-color: rgba(30, 30, 30, 0.8);
    }
    
    &.with-close {
      padding-right: 36px;
    }
  }

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__icon {
    flex-shrink: 0;
    margin-right: 16px;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }

  &__body {
    flex-grow: 1;
  }

  &__title {
    margin: 0 0 8px;
    font-size: 18px;
    font-weight: 600;
    color: var(--color-text);
  }

  &__message {
    font-size: 16px;
    line-height: 1.5;
    color: var(--color-text);
  }

  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      width: 20px;
      height: 20px;
      opacity: 0.6;
      transition: opacity 0.3s;
    }
    
    &:hover svg {
      opacity: 1;
    }
  }

  &__buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    gap: 12px;
  }

  &__button {
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
    border: none;
    outline: none;
    
    &--confirm {
      background-color: var(--color-primary);
      color: #fff;
      
      &:hover {
        background-color: var(--color-primary-dark);
      }
    }
    
    &--cancel {
      background-color: #f2f2f2;
      color: var(--color-text);
      
      &:hover {
        background-color: #e6e6e6;
      }
      
      @media (prefers-color-scheme: dark) {
        background-color: #333;
        color: #fff;
        
        &:hover {
          background-color: #444;
        }
      }
    }
  }

  // 根据类型设置颜色
  &--success {
    .message-box__icon svg {
      color: #4caf50;
    }
  }

  &--error {
    .message-box__icon svg {
      color: #f44336;
    }
  }

  &--warning {
    .message-box__icon svg {
      color: #ff9800;
    }
  }

  &--info {
    .message-box__icon svg {
      color: #2196f3;
    }
  }
}

// 过渡动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style> 