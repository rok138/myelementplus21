function debounce(fn, delay) {
  var ctx;
  var args;
  var timer = null;

  var later = function () {
    fn.apply(ctx, args);
    // 当事件真正执行后，清空定时器
    timer = null;
  };

  return function () {
    ctx = this;
    args = arguments;
    // 当持续触发事件时，若发现事件触发的定时器已设置时，则清除之前的定时器
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    // 重新设置事件触发的定时器
    timer = setTimeout(later, delay);
  };
}
function throttle(fn, delay) {
  var ctx;
  var args;
  // 记录上次触发事件
  var previous = Date.now();

  var later = function () {
    fn.apply(ctx, args);
  };

  return function () {
    ctx = this;
    args = arguments;
    var now = Date.now();
    // 本次事件触发与上一次的时间比较
    var diff = now - previous - delay;

    // 如果隔间时间超过设定时间，即再次设置事件触发的定时器
    if (diff >= 0) {
      // 更新最近事件触发的时间
      previous = now;
      setTimeout(later, delay);
    }
  };
}
import {customRef } from 'vue'
function useDebouncedRef(value, delay = 200) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })}
export default { throttle, debounce, useDebouncedRef}