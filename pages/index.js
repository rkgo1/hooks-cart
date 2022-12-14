import { Box } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import App from '../comps/App'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Box sx={{ background: "#ccc" }}>
      <App />
    </Box>
  )
}
