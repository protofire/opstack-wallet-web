import ErrorMessage from '@/components/tx/ErrorMessage'
import { Typography } from '@mui/material'
import ExternalLink from '@/components/common/ExternalLink'
import Link from 'next/link'
import { AppRoutes } from '@/config/routes'
import { useHasFeature } from '@/hooks/useChains'
import { FEATURES } from '@safe-global/utils/utils/chains'

export const SunsetBanner = () => {
  const showSunsetBanner = useHasFeature(FEATURES.SUNSET_BANNER)
  const showMigrationBanner = useHasFeature(FEATURES.MIGRATION_BANNER)

  if (showSunsetBanner) {
    return (
      <ErrorMessage level="warning" title="Swell Support Sunsetting">
        <Typography display="inline" mr={1}>
          Dear users, Support for Swell Networks will end soon. Please withdraw your funds until June 15, 2026. For
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
  } else if (showMigrationBanner) {
    // Warning should be visible across all Superchain networks
    return (
      <ErrorMessage level="warning" title="Superchain Safe is merging with Protofire Safe!">
        <Typography display="inline" mr={1}>
          Safe support for the Superchain networks (Cyber, Superseed, Soneium, Ink, Lisk and Metal L2) is moving to the
          Protofire Safe interface. <br />
          Please read the details and next steps on the{' '}
          <ExternalLink
            href="https://app.safe.protofire.io/superchain-migration"
            sx={{ '& > span': { textDecoration: 'underline' } }}
          >
            Superchain migration page
          </ExternalLink>
          , and export your local data via{' '}
          <Link style={{ fontWeight: 'bold', textDecoration: 'underline' }} href={AppRoutes.settings.data}>
            Settings {'>'} Data page{' '}
          </Link>
          (added Safes, address book, settings, etc.) before support ends.
        </Typography>
      </ErrorMessage>
    )
  } else {
    return null
  }
}
