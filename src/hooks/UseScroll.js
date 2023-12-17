import { onMounted, onUnmounted, ref } from "vue";

export default function useScroll() {
  const isBottom = ref(false);
  const scrollTop = ref(0);
  const clientHeight = ref(0);
  const scrollHeight = ref(0);

  const scrollFn = () => {
    const element = document.documentElement;
    // 可视窗口高度
    clientHeight.value = element.clientHeight;
    // 距离顶部高度
    scrollTop.value = element.scrollTop;
    // 可滚动高度
    scrollHeight.value = element.scrollHeight;
    if (scrollHeight.value <= clientHeight.value + scrollTop.value) {
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

  return { isBottom, scrollTop, scrollHeight, clientHeight };
}
