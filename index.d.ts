import Registry from 'prismarine-registry'

declare class Biome {
  id: number
  name: string
  category?: string
  precipitation?: string
  depth?: number
  dimension?: string
  displayName?: string
  color?: number
  rainfall: number
  temperature: number
  height?: number | null

  constructor(id: number)
}


/** @deprecated */
export declare function loader(mcVersion: string): typeof Biome
export declare function loader(registry: ReturnType<typeof Registry>): typeof Biome
