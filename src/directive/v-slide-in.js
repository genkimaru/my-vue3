// 自定义指令 v-slide-in

const slideInDirective = {
    mounted(el, binding) {
      const options = binding.value || {};
      const defaultOptions = {
        duration: 600, // 动画持续时间,单位ms
        delay: 100, // 动画延迟时间,单位ms
        distance: '50px', // 下移的距离
        easing: 'ease' // 动画缓动函数
      };
  
      const finalOptions = { ...defaultOptions, ...options };
  
      let observer;
  
      const slideIn = () => {
        el.style.transform = `translateY(${finalOptions.distance})`;
        el.style.opacity = 0;
        el.style.transition = `all ${finalOptions.duration}ms ${finalOptions.easing} ${finalOptions.delay}ms`;
  
        // 强制重排,触发CSS过渡
        void el.offsetWidth;
  
        el.style.transform = 'translateY(0)';
        el.style.opacity = 1;
      };
  
      const handleIntersect = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            slideIn();
            observer.unobserve(el);
          }
        });
      };
  
      observer = new IntersectionObserver(handleIntersect, {
        rootMargin: '0px',
        threshold: 0.5 // 当元素进入视口50%时触发
      });
  
      observer.observe(el);
    },
    beforeUnmount(el) {
      if (observer) {
        observer.unobserve(el);
      }
    }
  };
export default slideInDirective;
  