/**
 * 复制数组
 */
function copyArray<T>(source: T[], array?: T[]): T[] {
  let index = -1
  const length = source.length
  if (!array) {
    array = new Array(length)
  }
  while (++index < length) {
    array[index] = source[index]
  }
  return array
}

/**
 * 随机排序数组/洗牌函数
 * https://github.com/lodash/lodash/blob/master/shuffle.js
 */
export function randomSortArray<T>(array: T[]): T[] {
  const length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  let index = -1
  const lastIndex = length - 1
  const result = copyArray(array)
  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1))
    const value = result[rand]
    result[rand] = result[index]
    result[index] = value
  }
  return result
}

/**
 * 防抖函数
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null

  return function (this: any, ...args: Parameters<T>): void {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
      timer = null
    }, delay)
  }
}

/**
 * 补0函数
 */
export function addZero(s: number | string): string {
  const num = typeof s === 'string' ? parseInt(s, 10) : s
  return num < 10 ? '0' + num : num.toString()
}

// 歌词项接口
export interface LyricItem {
  time: number
  text: string
}

/**
 * 歌词解析
 */
const timeExp = /\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/g

export function parseLyric(lrc: string): LyricItem[] {
  const lines = lrc.split('\n')
  const lyric: LyricItem[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const result = timeExp.exec(line)
    if (!result) {
      continue
    }

    const text = line.replace(timeExp, '').trim()
    if (text) {
      // 计算时间（毫秒转换为秒）
      const minutes = parseInt(result[1], 10)
      const seconds = parseInt(result[2], 10)
      const milliseconds = result[3]
        ? parseInt(result[3].length === 2 ? result[3] + '0' : result[3], 10)
        : 0

      const time = minutes * 60 + seconds + milliseconds / 1000

      lyric.push({
        time,
        text,
      })
    }
  }

  // 按时间排序
  return lyric.sort((a, b) => a.time - b.time)
}

/**
 * 时间格式化
 */
export function format(value: number): string {
  const minute = Math.floor(value / 60)
  const second = Math.floor(value % 60)
  return `${addZero(minute)}:${addZero(second)}`
}

/**
 * 判断是否是 Promise 对象
 */
export function isPromise<T = any>(v: any): v is Promise<T> {
  return v !== undefined && v !== null && typeof v.then === 'function'
}

/**
 * 静默处理 Promise（避免未处理的 Promise 警告）
 */
export function silencePromise<T>(value: Promise<T> | T): void {
  if (isPromise(value)) {
    value.then(null, () => {
      // 静默处理错误
    })
  }
}

/**
 * 判断 string 类型
 */
export function isString(v: any): v is string {
  return typeof v === 'string'
}

/**
 * http 链接转化成 https
 */
export function toHttps(url: string): string {
  if (!isString(url)) {
    return url
  }
  return url.replace('http://', 'https://')
}

/**
 * 生成范围随机数
 */
export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 深度克隆对象
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as unknown as T
  }

  if (obj instanceof Array) {
    return obj.map((item) => deepClone(item)) as unknown as T
  }

  if (typeof obj === 'object') {
    const cloned = {} as T
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key])
      }
    }
    return cloned
  }

  return obj
}

/**
 * 节流函数
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let lastCall = 0
  let timer: ReturnType<typeof setTimeout> | null = null

  return function (this: any, ...args: Parameters<T>): void {
    const now = Date.now()

    if (now - lastCall < delay) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        lastCall = now
        func.apply(this, args)
      }, delay)
      return
    }

    lastCall = now
    func.apply(this, args)
  }
}
