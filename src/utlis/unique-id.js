// @flow

let lastId = localStorage.getItem('last-uniqueId') || 0

const getUniqueId = (prefix: string = 'slug-') => {
  //$FlowFixMe
  lastId++

  localStorage.setItem('last-uniqueId', lastId.toString())

  return `${prefix}${lastId}`
}

export default getUniqueId
