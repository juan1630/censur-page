export const Login = () => {
    return(
        <article  className="login-main-section" >
            <div className="card">
            <section className="section-container-logo"  >
                <figure className="figure-main-logo" >
                    <img className="img-main-log" src="../../public/bs-1-hero.png" alt="Imagen logo censur" />
                </figure>
            </section>
            <section className="main-form" >
                <form >
                    <h2 className="tittle-text-login" > Inicia sesión </h2>
                    <div>

                            <div className="container-curp" >
                                <label htmlFor="curp"> CURP: </label>
                                <input type='text' name='curp' id="curp"  />
                            </div>

                            <div className="container-password" >
                                <label htmlFor="password"> PASSWORD: </label>
                                <input type='password' name='password' id="password"   />

                            </div>
                    </div>
                    <div>
                        <button> Ingresar </button>
                    </div>
                </form>
            </section>
            </div>
        </article>
    );
}