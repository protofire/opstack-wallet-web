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

const ChainLogos = {
  [chains.eth]: '/images/networks/mainnet.svg',
  [chains.bnb]: '/images/networks/bnb.svg',
  [chains.oeth]: '/images/networks/optimism.svg',
  [chains.gno]: '/images/networks/gno.png',
  [chains.matic]: '/images/networks/polygon.svg',
  [chains.aurora]: '/images/networks/aurora.svg',
  [chains.base]: '/images/networks/base.svg',
  [chains.basegor]: '/images/networks/base.svg',
  [chains.basesep]: '/images/networks/base.svg',
  [chains.zkevm]: '/images/networks/polygon.svg',
  [chains.zksync]: '/images/networks/zksync.svg',
  [chains.celo]: '/images/networks/celo.svg',
  [chains.gor]: '/images/networks/gor.svg',
  [chains.arb1]: '/images/networks/arb.svg',
  [chains.avax]: '/images/networks/avax.svg',
  [chains.sep]: '/images/networks/sep.png',
  [chains.opsep]: '/images/networks/optimism.svg',
  [chains.mode]: '/images/networks/mode.png',
  [chains.modesep]: '/images/networks/mode-test.png',
  [chains['PGN']]: '/images/networks/pgn.svg',
  [chains.zora]: '/images/networks/zora.svg',
  [chains.zsep]: '/images/networks/zora.png',
  [chains.lisksep]: '/images/networks/lisksep.png',
  [chains.lisk]: '/images/networks/lisk.png',
  [chains.fraxtal]: '/images/networks/fraxtal.svg',
  [chains['fraxtal-testnet']]: '/images/networks/fraxtal-testnet.svg',
  [chains.redstone]: '/images/networks/redstone.png',
  [chains.garnet]: '/images/networks/garnet.png',
  [chains.cyeth]: '/images/networks/cyber.png',
  [chains.cysep]: '/images/networks/cyber.png',
  [chains.snaxchain]: '/images/networks/snaxchain.png',
}

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

export const getChainLogo = (chainId: string) => {
  const externalChainIdConfig = EXTERNAL_NETWORKS.find((chain) => chain.chainId === chainId)
  if (externalChainIdConfig && externalChainIdConfig.chainLogoUri) {
    return externalChainIdConfig.chainLogoUri
  }

  return ChainLogos[chainId]
}

export default chains
