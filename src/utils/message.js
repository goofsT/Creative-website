import { createVNode, render } from 'vue';
import MessageBox from '../components/MessageBox.vue';

// 创建包裹容器
let messageContainer = null;

const createContainer = () => {
  if (!messageContainer) {
    messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';
    document.body.appendChild(messageContainer);
  }
  return messageContainer;
};

// 创建并挂载消息组件
const createMessage = (options) => {
  const container = createContainer();
  
  // 创建包装div
  const div = document.createElement('div');
  container.appendChild(div);
  
  // 移除实例的方法
  const destroyInstance = () => {
    render(null, div);
    div.parentNode?.removeChild(div);
  };
  
  // 合并配置
  const mergedOptions = {
    ...options,
    onClose: () => {
      destroyInstance();
      if (options.onClose) options.onClose();
    },
    onConfirm: () => {
      if (options.onConfirm) options.onConfirm();
    },
    onCancel: () => {
      if (options.onCancel) options.onCancel();
    }
  };
  
  // 创建虚拟节点
  const vnode = createVNode(MessageBox, mergedOptions);
  
  // 渲染到DOM
  render(vnode, div);
  
  return {
    close: () => {
      if (vnode.component?.exposed?.close) {
        vnode.component.exposed.close();
      }
    }
  };
};

// 导出方法
const Message = {
  // 显示普通消息
  show(options) {
    if (typeof options === 'string') {
      return createMessage({ message: options });
    }
    return createMessage(options);
  },
  
  // 显示成功消息
  success(options) {
    if (typeof options === 'string') {
      return createMessage({ message: options, type: 'success' });
    }
    return createMessage({ ...options, type: 'success' });
  },
  
  // 显示警告消息
  warning(options) {
    if (typeof options === 'string') {
      return createMessage({ message: options, type: 'warning' });
    }
    return createMessage({ ...options, type: 'warning' });
  },
  
  // 显示错误消息
  error(options) {
    if (typeof options === 'string') {
      return createMessage({ message: options, type: 'error' });
    }
    return createMessage({ ...options, type: 'error' });
  },
  
  // 显示信息消息
  info(options) {
    if (typeof options === 'string') {
      return createMessage({ message: options, type: 'info' });
    }
    return createMessage({ ...options, type: 'info' });
  },
  
  // 显示确认对话框
  confirm(options) {
    if (typeof options === 'string') {
      return createMessage({ 
        message: options, 
        type: 'info', 
        showButtons: true, 
        showCancelButton: true,
        duration: 0 
      });
    }
    return createMessage({ 
      ...options, 
      showButtons: true, 
      showCancelButton: true,
      duration: 0
    });
  }
};

export default Message; 