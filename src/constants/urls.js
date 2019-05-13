export const URLS = {
  HOME: '/',
  CONVERT: '/convert',
  COMPARE: '/compare'
}

export const MENU_ITEMS = Object.keys(URLS)
  .map((keyName, index) => ({
    name: keyName,
    url: URLS[keyName]
  }))
  .filter(({ url }) => url !== URLS.HOME)
