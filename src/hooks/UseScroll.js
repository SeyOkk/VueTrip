import { onMounted, onUnmounted, ref } from "vue";

export default function useScroll() {
  const isBottom = ref(false);

  const scrollFn = () => {
    const element = document.documentElement;
    // 可视窗口高度
    const clientHeight = element.clientHeight;
    // 距离顶部高度
    const scrollTop = element.scrollTop;
    // 可滚动高度
    const scrollHeight = element.scrollHeight;
    if (scrollHeight <= clientHeight + scrollTop) {
      isBottom.value = true;
    }
  };

  const eventName = "scroll";

  // 组件挂载
  onMounted(() => {
    // 绑定滚动事件
    window.addEventListener(eventName, scrollFn);
  });

  // 组件卸载
  onUnmounted(() => {
    window.removeEventListener(eventName, scrollFn);
  });

  return isBottom;
}
