import ErrorMessage from '@/components/tx/ErrorMessage'
import { Typography } from '@mui/material'
import ExternalLink from '@/components/common/ExternalLink'
import Link from 'next/link'
import { AppRoutes } from '@/config/routes'
import { useCurrentChain } from '@/hooks/useChains'

export const SunsetBanner = () => {
  const currentChain = useCurrentChain()

  // Swell Mainnet and Testnet will be sunset on June 30, 2026
  if (currentChain?.chainId === '1923' || currentChain?.chainId === '1924') {
    return (
      <ErrorMessage level="warning" title="Swell Support Sunsetting">
        <Typography display="inline" mr={1}>
          Dear users, Support for Swell Networks will end soon. Please withdraw your funds until June 1, 2026. For
          further details regarding the shutdown, please refer to this page (
          <ExternalLink
            href="https://x.com/swellnetworkio/status/2049065334536016382"
            sx={{ '& > span': { textDecoration: 'underline' } }}
          >
            Link
          </ExternalLink>
          ).
        </Typography>
      </ErrorMessage>
    )
  }

  // Warning should be visible across all other networks
  return (
    <ErrorMessage level="warning" title="Superchain Safe is merging with Protofire Safe!">
      <Typography display="inline" mr={1}>
        Your Safes and transaction history are already accessible at{' '}
        <ExternalLink href="https://app.safe.protofire.io/welcome" sx={{ '& > span': { textDecoration: 'underline' } }}>
          Protofire Safe!
        </ExternalLink>
        . <br />
        Export your local data via{' '}
        <Link style={{ fontWeight: 'bold', textDecoration: 'underline' }} href={AppRoutes.settings.data}>
          Settings {'>'} Data page{' '}
        </Link>
        (added Safes, address book, settings, etc.), <br /> and finalize any open transactions before <b>June 30</b>.
      </Typography>
    </ErrorMessage>
  )
}
