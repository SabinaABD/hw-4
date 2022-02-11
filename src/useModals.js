const {useState} = require("react");
const useModals = () => {
    const [modalActive, setModalActive] = useState(false)

    const handleClick = (event) => {
        console.log(event)
        setModalActive(true)
    }

    return {handleClick}
}

export default useModals