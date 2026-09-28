'use client'

import { useEffect } from 'react'
import { rastrearRolagem } from '@/lib/rastrear-rolagem'

// Dispara o evento "RolagemPagina" do Meta Pixel (ver lib/rastrear-rolagem.ts).
export function RastreioRolagem() {
  useEffect(() => rastrearRolagem(), [])
  return null
}
