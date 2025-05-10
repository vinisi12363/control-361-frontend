'use client'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { Label } from '@radix-ui/react-label'
import { Input } from '../../../components/ui/input'
import { Button } from '../../../components/ui/button'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

interface SearchListProps {
  filter: 'rastreados' | 'outros'
  onSearch: (search: string) => void
  onFilterChange: (filter: string) => void
}

export default function SearchList({ filter, onSearch, onFilterChange }: SearchListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500)

  useEffect(() => {
    if (debouncedSearchTerm !== '') {
      onSearch(debouncedSearchTerm)
    } else {
      onSearch('') 
    }
  }, [debouncedSearchTerm, onSearch])


  const handleFilterChange = (value: string) => {
    if (value !== filter) {
      onFilterChange(value)
    }
  }

  return (
    <div className="flex w-full justify-between items-center p-4 border-b-2 border-zinc-800 rounded-md">
      <div className="flex flex-row gap-3">
        <h2 className="font-semibold mb-2">Lista</h2>
        <RadioGroup.Root
          className="flex items-center gap-4"
          value={filter}
          onValueChange={handleFilterChange}
        >
          <div className="flex items-center space-x-2">
            <RadioGroup.Item
              value="rastreados"
              id="rastreados"
              className="w-5 h-5 rounded-full border border-blue-400 data-[state=checked]:bg-blue-500"
            />
            <Label htmlFor="rastreados" className="text-sm">Veículos Rastreados</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroup.Item
              value="outros"
              id="outros"
              className="w-5 h-5 rounded-full border border-blue-400 data-[state=checked]:bg-blue-500"
            />
            <Label htmlFor="outros" className="text-sm">Outros Veículos</Label>
          </div>
        </RadioGroup.Root>
      </div>

      <div className="flex items-center gap-2">
        <Input
          placeholder="Buscar por placa ou frota"
          className="w-64 bg-transparent border border-gray-600 text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button 
          variant={'default'}
          onClick={() => onSearch(searchTerm)}
        >
          Buscar
        </Button>
      </div>
    </div>
  )
}