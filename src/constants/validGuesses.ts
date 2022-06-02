import { CONFIG } from './config'

export const VALIDGUESSES = [
 'aaniishnaa',
  'migizi',
  'ziigwan',
  'waabano',
  'wiingosh',   
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
