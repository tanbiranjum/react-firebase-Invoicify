import React from 'react'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default useQuery
