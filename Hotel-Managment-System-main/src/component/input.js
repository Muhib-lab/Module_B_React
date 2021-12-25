import '../component/css/style.css'

export default function Input(props) {

        const {type,ph,onchangehandle} = props
        return(
        <div className='all'>
            <input className='inp'  style={{padding:'5px 8px'}} type={type} placeholder={ph} onChange={onchangehandle} />
        </div>
        )
}