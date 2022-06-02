import { CONFIG } from './config'

export const VALIDGUESSES = [
 'aaniishnaa',
  'migizi',
  'ziigwan',
  'waabano',
  'waagosh',   
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
