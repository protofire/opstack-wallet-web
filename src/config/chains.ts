import type { ChainInfo } from '@safe-global/safe-gateway-typescript-sdk'
import { networks } from '@safe-global/protocol-kit/dist/src/utils/eip-3770/config'

/**
 * A static shortName<->chainId dictionary
 * E.g.:
 *
 * {
 *   eth: '1',
 *   gor: '5',
 *   ...
 * }
 */
type Chains = Record<string, string>

const chains = networks.reduce<Chains>((result, { shortName, chainId }) => {
  result[shortName] = chainId.toString()
  return result
}, {})

export type ExternalChainInfo = Pick<ChainInfo, 'chainId' | 'chainName' | 'shortName' | 'theme'> & {
  chainLogoUri?: string | null
  externalHref: string
}

export const EXTERNAL_NETWORKS: ExternalChainInfo[] = [
  {
    chainId: '8453',
    chainName: 'Base',
    chainLogoUri: 'https://safe-transaction-assets.safe.global/chains/8453/chain_logo.png',
    shortName: 'base',
    theme: {
      textColor: '#ffffff',
      backgroundColor: '#0052FF',
    },
    externalHref: 'https://app.safe.global/welcome/accounts?chain=base',
  },
  {
    chainId: '10',
    chainName: 'Optimism',
    chainLogoUri: 'https://safe-transaction-assets.safe.global/chains/10/chain_logo.png',
    shortName: 'oeth',
    theme: {
      textColor: '#ffffff',
      backgroundColor: '#F01A37',
    },
    externalHref: 'https://app.safe.global/welcome/accounts?chain=oeth',
  },
]

export default chains
