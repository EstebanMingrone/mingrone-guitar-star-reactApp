import spinnerIcon from '../assets/spinner load.svg'

const Spinner = () => {
  return (
    <div className='spinnerContainer'>
        <img src={spinnerIcon}></img>
        <h2>Cargando...</h2>
    </div>
  )
}

export default Spinner