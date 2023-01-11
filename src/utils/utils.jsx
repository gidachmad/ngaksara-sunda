export const getImage = (name) => {
  const path = new URL(`../assets/dashboard/${name}.svg`, import.meta.url).href
  return path
}

export const getThumbnailKelas = (name) => {
  const path = new URL(`../assets/Thumbnail/${name}.png`, import.meta.url).href
  return path
}

export const getKelasAksara = (kelas, name) => {
  const path = new URL(`../assets/${kelas}/${name}`, import.meta.url).href
  return path
}
