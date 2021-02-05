class btc {
  constructor(selector) {
    
    this.version = '0.1.0'

    this[0] = document.querySelector(selector)
  }

  on() {
    // 使用方式
    // bt('#box').on('click', function() {}, false);
    let dom = this[0]
    dom.addEventListener(arguments[0], arguments[1], arguments[2] || false);
  }

  css() {
    let arg = arguments[0], domStyle = this[0].style
    if(typeof arg === 'string') {
      // 字符串查询样式
      return this[0].style[arg]
    }
    // 为对象时设置css样式
    for (const key in arg) {
      if (arg.hasOwnProperty(key)) {
        const value = arg[key];
        domStyle[key] = value
      }
    }
    return this
  }

  throttle(fun, wait) {
    // 节流，在wait秒内最多执行一次
    let timeout;

    return function() {
      if(new Date() - timeout > wait || !timeout) {
        timeout = new Date()
        fun.apply(this,  ...arguments)
      }
    }
  }

  debounce(fun, wait) {
    // 防抖，在停止调用的wait秒后执行
    let timeout;

    return function() {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        /**
         * debounce返回一个函数，函数的this指向调用对象
         * 所以要把fun的this指回去
         */
        fun.apply(this,  ...arguments)
      }, wait)
    }
  }

}

const bt = (selector) => new btc(selector)
bt.fn = btc.prototype

// 加
bt.add = (num1, num2) => {
  // 浮点数计算不准确，转成整数之后再计算
  num1.toString().split('.')
  return num1 + num2
}