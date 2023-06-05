import { useEffect, useState } from "react"

const UseMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/menu')
            .then(res => res.json())
            .then(data => setMenu(data))
    },[])
    return [menu];
}
export default (UseMenu)