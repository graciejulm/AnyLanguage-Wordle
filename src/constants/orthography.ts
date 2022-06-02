import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'aa',
  'b',
  'Ch',
  'D',
  'E',
  'G',
  'H',
  'I',
  'Ii',
  'J',
  'K',
  'M',
  'N',
  'O',
  'Oo',
  'P',
  'S',
  'Sh',
  'T',
  'W',
  'Y',
  'Z',
  'Zh',
  ''',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
