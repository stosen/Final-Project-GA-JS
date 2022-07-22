import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Search from './components/Search'
import Platform from './components/Platform'
import { BASE_URL } from './globals'

function App() {
  const [value, setValue] = useState('')
  const [platforms, setPlatforms] = useState([])

  const findPlatform = async () => {
    const res = await axios.get(`${BASE_URL}?url=${value}`)
    console.log(res)

    // setPlatforms(res.data.entitiesByUniqueId)
    // setPlatforms(res.data.entitiesByUniqueId)

    const obj = res.data.entitiesByUniqueId

    // const link = res.data.linksByPlatform
    // console.log(arr)
    const arr = []
    for (const thumbnailUrl in obj) {
      arr.push(obj[thumbnailUrl])
    }
    setPlatforms(arr)

    // const newArrs = []
    // for (const url in link) {
    //   newArrs.push(link[url])
    // }
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    setValue()
  }, [])

  return (
    <div className="App">
      <Search
        handleChange={handleChange}
        newInput={value}
        search={findPlatform}
      />
      <Platform platforms={platforms} />
    </div>
  )
}

export default App
