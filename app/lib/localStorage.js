const storageKey = 'MILKYWAY_FANTASY_APP'
const defaultCache = {}

function getStorage () {
  let cache = JSON.parse(localStorage.getItem(storageKey))

  if (cache === null) {
    localStorage.setItem(storageKey, JSON.stringify(defaultCache))
    return defaultCache
  }

  return cache
}

function updateStorage (draftName, data) {
  const cache = getStorage()
  cache[draftName] = {
    ...data
  }
  localStorage.setItem(storageKey, JSON.stringify(cache))
}

function deleteDraft (draftName) {
  const cache = getStorage()
  delete cache[draftName]
  localStorage.setItem(storageKey, JSON.stringify(cache))
  return cache
}

export default {
  getStorage,
  updateStorage,
  deleteDraft
}
