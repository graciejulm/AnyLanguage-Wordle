import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'aa',
  'b',
  'ch',
  'd',
  'e',
  'g',
  'h',
  'i',
  'ii',
  'j',
  'k',
  'm',
  'n',
  'o',
  'oo',
  'p',
  's',
  'sh',
  't',
  'w',
  'y',
  'z',
  'zh',
  "'",
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
