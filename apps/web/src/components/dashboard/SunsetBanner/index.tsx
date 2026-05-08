import ErrorMessage from '@/components/tx/ErrorMessage'
import { Typography } from '@mui/material'
import ExternalLink from '@/components/common/ExternalLink'
import Link from 'next/link'
import { AppRoutes } from '@/config/routes'

export const SunsetBanner = () => {
  // Warning should be visible across all networks
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
