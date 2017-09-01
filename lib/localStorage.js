const storageKey = 'MILKYWAY_FANTASY_APP'
const defaultCache = {
  activeDraft: '',
  drafts: {}
}

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
  cache.drafts[draftName] = {
    ...data
  }
  cache.activeDraft = draftName
  localStorage.setItem(storageKey, JSON.stringify(cache))
}

function setActiveDraft (draftName) {
  const cache = getStorage()
  cache.activeDraft = draftName
  localStorage.setItem(storageKey, JSON.stringify(cache))
}

function deleteDraft (draftName) {
  const cache = getStorage()
  delete cache.drafts[draftName]
  if (cache.activeDraft === draftName) {
    cache.activeDraft = ''
  }
  localStorage.setItem(storageKey, JSON.stringify(cache))
  return cache
}

export default {
  getStorage,
  updateStorage,
  deleteDraft,
  setActiveDraft
}
