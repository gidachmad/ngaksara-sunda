export const getImage = (name) => {
  return new URL(`../assets/dashboard/${name}.svg`, import.meta.url).href
}

export const getThumbnailKelas = (name) => {
  return new URL(`../assets/Thumbnail/${name}.png`, import.meta.url).href
}

export const getKelasAksara = (name) => {
  return new URL(`../assets/aksara/${name}.png`, import.meta.url).href
}

export const getRarangkenThumb = (name) => {
  return new URL(`../assets/ngalagenaRarangken/${name}.png`, import.meta.url)
    .href
}
export const getRarangken = (name) => {
  return new URL(`../assets/rarangken/${name}.png`, import.meta.url).href
}
