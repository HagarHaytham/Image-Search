import { useState } from "react"
const SearchQuery = ({onSearch}) => {
  const [text,setText] = useState('')

  const onSubmit = (e) =>{
      e.preventDefault()
      if (!text) {
          alert ('please add Text')
          return
      }

      onSearch({text})

      setText('')
      

  }
  return (
    <form className ='add-form' onSubmit = {onSubmit}>
        <div className="form-control">
            <label>Search Images</label>
            <input type="text" placeholder="Search " value={text} onChange={(e)=> setText(e.target.value)}/>
        </div>
        <input type="submit" value='Search' ></input>

      </form>
  )
}

export default SearchQuery