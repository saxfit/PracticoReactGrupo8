import './Candicont.css'
import Contador from './Contador'
export default function Candicont(prop){
    return (
        <section>
            <h2>{prop.candidato}</h2>
            <div className='contador'>
            <Contador/>
            </div>
        </section>
        
            )}