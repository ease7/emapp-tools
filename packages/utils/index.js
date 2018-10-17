class Utils {
  static get query() {
    let url = "";

    if (typeof window !== 'undefined') {
      url = window.location.href;
    }
    let index = url.indexOf('?')

    if (index >= 0) {
      let paramsStr = url.substr(url.indexOf('?') + 1)
      let array = paramsStr.split('&')
      let result = {}
      for (let index = 0; index < array.length; index++) {
        let item = array[index]
        let valueIndex = item.indexOf('=')
        let name = item.substr(0, valueIndex)
        let value = item.substr(valueIndex + 1)

        if (name) {
          result[name] = value
        }
      }

      return result
    } else {
      return {}
    }
  }
}


export default Utils;
