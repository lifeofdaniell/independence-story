// PWA properties
const name = 'The Story of Nigeria'
const shortName = 'The Story of Nigeria'
const description = ''

export const getManifest = (manifest) => {
  return {
    name: (manifest && manifest.name) || name,
    short_name: (manifest && manifest.short_name) || shortName,
    description: (manifest && manifest.description) || description,
    background_color: '#ffffff',
    theme_color: '#57867d',
    lang: 'en'
  }
}
