import useChains from '@/hooks/useChains'
import { type ReactElement } from 'react'
import { Chip, Box, useMediaQuery, useTheme } from '@mui/material'
import ChainIndicator from '../ChainIndicator'
import css from './styles.module.css'

const NetworkList = (): ReactElement => {
  const { configs } = useChains()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box>
      {configs
        .slice()
        .sort((a, b) => Number(a.isTestnet) - Number(b.isTestnet))
        .filter((c) => !isMobile || !c.isTestnet)
        .map((c) => (
          <Chip
            key={c.chainId}
            sx={({ palette }) => ({
              color: palette.logo.main,
              bgcolor: palette.background.default,
            })}
            variant="outlined"
            avatar={<ChainIndicator chainId={c.chainId} onlyLogo inline />}
            label={c.chainName}
            className={css.multiChainChip}
          />
        ))}
    </Box>
  )
}

export default NetworkList
