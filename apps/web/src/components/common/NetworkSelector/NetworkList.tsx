import useChains from '@/hooks/useChains'
import { type ReactElement } from 'react'
import { Chip, Box } from '@mui/material'
import ChainIndicator from '../ChainIndicator'
import css from './styles.module.css'

const NetworkList = (): ReactElement => {
  const { configs } = useChains()

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
      }}
    >
      {configs
        .slice()
        .sort((a, b) => Number(a.isTestnet) - Number(b.isTestnet))
        .map((c) => (
          <Chip
            key={c.chainId}
            sx={{ color: 'black' }}
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
