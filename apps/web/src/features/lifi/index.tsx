import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

type LifiSwapWidgetProps = {
  sell?: {
    asset: string
    amount: string
  }
}

const LifiSwapWidget = ({ sell }: LifiSwapWidgetProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set loaded state after component mounts
    setIsLoaded(true)
  }, [])

  return (
    <Box
      sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
    >
      {isLoaded ? (
        <>
          <Typography variant="h4" mb={2}>
            Lifi Swap Widget
          </Typography>
          {sell && (
            <Typography>
              Selling {sell.amount} of {sell.asset}
            </Typography>
          )}
        </>
      ) : (
        <Typography>Loading swap widget...</Typography>
      )}
    </Box>
  )
}

export default LifiSwapWidget
