import React from 'react'
import { Box, Button, Grid, List, ListItem, Stack, Typography } from '@mui/material'
import { WarningAmberOutlined, OpenInNewRounded } from '@mui/icons-material'
import css from './styles.module.css'

import WelcomeLogin from './WelcomeLogin'
import ChainIndicator from '@/components/common/ChainIndicator'
import useChains from '@/hooks/useChains'
import { PROTOFIRE_SAFE_URL } from '@/config/constants'

// Networks whose Safe support is moving from Superchain Safe to Protofire Safe.
const AFFECTED_NETWORK_NAMES = ['Cyber', 'Superseed', 'Soneium', 'Ink', 'Lisk', 'Metal L2']

const NetworkChip = ({ chainId, chainName }: { chainId: string; chainName: string }) => (
  <Stack
    direction="row"
    alignItems="center"
    gap={1}
    sx={{
      px: 1.5,
      py: 1,
      borderRadius: 1.5,
      border: '1px solid rgba(0, 0, 0, 0.12)',
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
    }}
  >
    <ChainIndicator chainId={chainId} onlyLogo inline />
    <Typography variant="body2" sx={{ fontWeight: 700, color: 'static.main' }}>
      {chainName}
    </Typography>
  </Stack>
)

const AffectedNetworks = () => {
  const { configs } = useChains()
  const affected = configs.filter((chain) => AFFECTED_NETWORK_NAMES.includes(chain.chainName))

  if (!affected.length) return null

  return (
    <>
      <Typography variant="h5" sx={{ mt: 1, fontWeight: 700, color: 'static.main' }}>
        Affected networks
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr' },
          gap: 1.5,
        }}
      >
        {affected.map((chain) => (
          <NetworkChip key={chain.chainId} chainId={chain.chainId} chainName={chain.chainName} />
        ))}
      </Box>
    </>
  )
}

const NewSafe = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row-reverse"
        sx={{
          p: 3,
          pb: 0,
          flex: 1,
        }}
      >
        <Grid item xs={12} lg={6}>
          <WelcomeLogin />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            flex: 1,
          }}
        >
          <div className={css.content}>
            <Typography
              variant="h1"
              sx={{
                fontSize: [32, null, 40],
                lineHeight: 1.1,
                letterSpacing: -1,
                color: 'static.main',
              }}
            >
              These networks have moved to Protofire Safe
            </Typography>

            <Stack
              direction="row"
              gap={1.5}
              alignItems="flex-start"
              sx={{
                my: 1,
                p: 2,
                borderRadius: 1.5,
                border: '1px solid #f5a623',
                backgroundColor: 'rgba(245, 166, 35, 0.12)',
              }}
            >
              <WarningAmberOutlined sx={{ color: '#e08600', mt: '2px' }} />
              <Box>
                <Typography sx={{ fontWeight: 700, color: 'static.main' }}>
                  Superchain Safe support for these networks is ending
                </Typography>
                <Typography variant="body2" sx={{ color: 'static.main' }}>
                  Continue on Protofire Safe — your accounts and funds are unchanged.
                </Typography>
              </Box>
            </Stack>

            <Typography variant="h5" sx={{ mt: 1, fontWeight: 700, color: 'static.main' }}>
              Why the change
            </Typography>
            <List sx={{ listStyleType: 'disc', pl: 3, py: 0, m: 0, color: 'static.main' }}>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                The Superchain Safe interface previously hosted for these networks by the Protofire team has been
                discontinued.
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                Protofire now provides one dedicated interface for them at app.safe.protofire.io.
              </ListItem>
            </List>

            <Typography sx={{ color: 'static.main' }}>
              Your Safe accounts, owners, and funds are unchanged — only the website URL is different. Your assets live
              on-chain and remain fully under your control.
            </Typography>

            <AffectedNetworks />

            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="contained"
                size="large"
                href={PROTOFIRE_SAFE_URL}
                target="_blank"
                rel="noreferrer noopener"
                endIcon={<OpenInNewRounded />}
              >
                Open Protofire Safe
              </Button>
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default NewSafe
