

export default function Input(props){

    const{type,ph,onchangehandle} = props

    return(
        <>

        <div className='all'>
            <input type={type} placeholder={ph} onchange={onchangehandle} />
        </div>


        </>
    )

}