import ErrorMessage from '@/components/tx/ErrorMessage'
import { Typography } from '@mui/material'
import ExternalLink from '@/components/common/ExternalLink'
import { useHasFeature } from '@/hooks/useChains'
import { FEATURES } from '@/utils/chains'

export const SunsetWarning = () => {
  const isFeatureEnabled = useHasFeature(FEATURES.SUNSET_BANNER)

  if (!isFeatureEnabled) return null

  return (
    <ErrorMessage level="warning" title="Soneium Minato testnet support discontinuation ">
      <Typography display="inline" mr={1}>
        Dear users, Support for Soneium Minato will end soon. Network will be delisted from Superchain Safe UI by the
        end of September 2025. All deployed safes are left intact and will be available for interaction through{' '}
        <ExternalLink href="https://docs.safe.global/advanced/cli-overview">Safe CLI</ExternalLink>.
      </Typography>
    </ErrorMessage>
  )
}
