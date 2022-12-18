import React from 'react'

export const LoginPages = () => {
  return (
    <div className='container my-5 '>

      <div className='row'>

        <div className='col-md-6 border p-5'>
          <h2 className='mb-4'>Login</h2>

          <form>
            <input type="text" name="email" id="email" placeholder='email' className='form-control mb-2' />
            <input type="text" name="password" id="password" placeholder='contraseña' className='form-control mb-2' />

            <div className='d-grid'>
              <button className='btn btn-dark btn-sm'>Registrarse</button>
            </div>

          </form>

        </div>

        <div className='col-md-6 border p-5'>
          <h2 className='mb-4'>Registrarse</h2>

          <form>
            <input type="text" name="nombre" id="nombre" placeholder='nombre' className='form-control mb-2' />
            <input type="text" name="email" id="email" placeholder='email' className='form-control mb-2' />
            <input type="text" name="password" id="password" placeholder='contraseña' className='form-control mb-2' />
            <input type="text" name="password" id="password" placeholder='Repite la contraseña' className='form-control mb-2' />

            <div className='d-grid'>
              <button className='btn btn-dark btn-sm'>Registrarse</button>
            </div>

          </form>

        </div>

      </div>

    </div >
  )
}
