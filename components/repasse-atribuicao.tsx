'use client'

import { useEffect } from 'react'
import { repassarAtribuicao } from '@/lib/repassar-atribuicao'

// Leva fbclid/UTMs do anúncio até o link de checkout da Eduzz (ver lib/repassar-atribuicao.ts).
export function RepasseAtribuicao() {
  useEffect(() => repassarAtribuicao(), [])
  return null
}
