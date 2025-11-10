import ErrorMessage from '@/components/tx/ErrorMessage'
import { Typography } from '@mui/material'
import ExternalLink from '@/components/common/ExternalLink'
import { useHasFeature } from '@/hooks/useChains'
import { FEATURES } from '@safe-global/utils/utils/chains'

export const SunsetWarning = (props: { chainName: string }) => {
  const isFeatureEnabled = useHasFeature(FEATURES.SUNSET_BANNER)

  if (!isFeatureEnabled) return null

  return (
    <ErrorMessage level="warning" title={`${props.chainName} Support Sunsetting`}>
      <Typography display="inline" mr={1}>
        Dear users, Support for {props.chainName} will end soon. Please withdraw your funds until November 17. Interaction with safes will remain available through the{' '}
        <ExternalLink href="https://docs.safe.global/advanced/cli-overview">Safe CLI</ExternalLink>.
      </Typography>
    </ErrorMessage>
  )
}
