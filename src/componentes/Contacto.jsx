export default function Contacto (){
    return (
        <>
            <div className="padding">
                <form action="https://formspree.io/f/movklwgb" method="POST">
                    <h6>Completando el siguiente formulario podras enviarnos un mensaje directamente a nuestro correo y en un lapso de 48hs nosotras te responderemos</h6>
                    <fieldset>
                        <label>Nombre
                            <input type="text" name="nombre" required />
                        </label>
                        <label>Apellido
                            <input type="text" name="apellido" />
                        </label>
                        <label>Tu Email
                            <input type="email" name="email" required/>
                        </label>
                        <label>El mensaje
                            <textarea name="mensaje"></textarea>
                        </label>
                        <label>¿Que opinas de nuestro servicio?
                           <textarea name="opinion"></textarea>
                        </label>

                        <button type="submit">Enviar</button>
                    </fieldset>
                </form>
                <hr />
                <div className="cont-redes">
                    <p>Tambien pueden contactarnos a traves de:</p>
                    <a href="https://wa.me/542478420091" target="_blank"><img src="/img/logo_whatsapp.png" alt="" className="redes" /></a>
                    <a href="https://www.instagram.com/wings.lc"><img src="/img/logo_instagram.png" alt="" className="redes" /></a>
                </div>
                
            </div>
        </>
    )
}