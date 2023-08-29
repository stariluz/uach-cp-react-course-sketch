import infoStyles from './Info.module.css'
import whatsappQrCode from 'src/assets/whatsapp-qr-code.png'

const Info = () => {
  return <div className={`${infoStyles.container} col-12 col-sm-4 col-md-3 mb-4`}>
    <b>Con este proyecto aprenderemos:</b>
    <ol>
      <li>
        ¿Qué es React y su virtual DOM?
      </li>
      <li>
        Ecosistema de desarrollo
      </li>
      <li>¿Qué es un componente y como se subdivide?</li>
      <li>JSX y React Components</li>
      <li>Reactividad, estado e inmutabilidad</li>
      <li>Props</li>
      <li>Iniciación del proyecto con <i>Vite</i></li>
      <li>Renderizado condicional</li>
      <li>Renderizado de listas</li>
      <li>Manejo de eventos</li>
      <li>Formularios y <i>React Hook Form</i></li>
      <li>¿Qué son los Hooks?</li>
      <li>Hook: <i>useEffect</i></li>
      <li>Custom Hooks</li>
      <li>¿Qué son las referencias?</li>
      <li>Hook: useRef</li>
      <li>Hooks: forwardRef y useImperativeHandle</li>
      <li>Estilos en linea, CSS y módulos de CSS</li>
      <li>¿Cómo funciona el routing y el Client Side Routing?</li>
      <li>Ruteo con React Router DOM </li>
      <li>Manejo de rutas erróneas</li>
      <li>Rutas con parámetros</li>
      <li>Crear rutas anidadas</li>
      <li>Y más por agregar :D <span className="animated-dots"></span></li>
    </ol>
    <div className={`${infoStyles.qrContainer}`}>
      <label>¡Únete al grupo de whatsapp del curso!</label>
      <img src={whatsappQrCode} alt="Código QR de whatsapp" className={`${infoStyles.qrCode}`} />
    </div>
  </div>
}
export default Info;