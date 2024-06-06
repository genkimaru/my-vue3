// 自定义指令 - resize
const resizeDirective = {
  // 指令绑定到元素时被调用
  mounted(el, binding, vnode) {
    // 创建 ResizeObserver 实例
    const resizeObserver = new ResizeObserver((entries) => {
      // 遍历所有观察到的元素
      entries.forEach((entry) => {
        // 获取新的宽度和高度
        const { width, height } = entry.contentRect
        // 调用指令绑定的处理函数,传递新的宽度和高度
        binding.value({ width, height })
      })
    })

    // 开始观察元素
    resizeObserver.observe(el)

    // 保存观察者实例,以便在指令解绑时停止观察
    el.__resizeObserver__ = resizeObserver
  },

  // 指令与元素解绑时被调用
  unbind(el) {
    // 停止观察元素
    el.__resizeObserver__.disconnect()
  }
}
export default resizeDirective
