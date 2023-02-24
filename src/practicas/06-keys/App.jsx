const productos = [
  { id: 0, name: 'aspiradora' },
  { id: 1, name: 'televisor' },
  { id: 2, name: 'radio' },
  { id: 3, name: 'cocina' },
  { id: 4, name: 'heladera' },
  { id: 5, name: 'microondas' },
  { id: 6, name: 'lavarropas' },
  { id: 7, name: 'aire acondicionado' },
  { id: 8, name: 'cafetera' },
  { id: 9, name: 'licuadora' },
  { id: 10, name: 'tostadora' },
  { id: 11, name: 'plancha' },
  { id: 12, name: 'secarropas' },
  { id: 13, name: 'cortadora de pasto' },
]

const usuarios = [
  { nombre: 'john', edad: 25, email: 'john@egbert.com' },
  { nombre: 'rose', edad: 27, email: 'rose@lalonde.com' },
  { nombre: 'dave', edad: 25, email: 'dave@strider.com' },
  { nombre: 'jade', edad: 28, email: 'jade@harley.com' },
  { nombre: 'karkat', edad: 29, email: 'karkat@vantas.com' },
  { nombre: 'tavros', edad: 31, email: 'tavros@nitram.com' },
  { nombre: 'sollux', edad: 35, email: 'sollux@captor.com' },
  { nombre: 'nepeta', edad: 32, email: 'nepeta@leijon.com' },
  { nombre: 'kanaya', edad: 45, email: 'kanaya@maryam.com' },
  { nombre: 'terezi', edad: 52, email: 'terezi@pyrope.com' },
  { nombre: 'tavros', edad: 21, email: 'vriska@serket.com' },
  { nombre: 'equius', edad: 18, email: 'equius@zahhak.com' },
  { nombre: 'gamzee', edad: 18, email: 'gamzee@makara.com' },
  { nombre: 'eridan', edad: 32, email: 'eridan@ampora.com' },
  { nombre: 'feferi', edad: 34, email: 'feferi@peixes.com' },
  { nombre: 'aradia', edad: 33, email: 'aradia@medigo.com' },
]

const twitterAccounts = [
  '@john',
  '@rose',
  '@dave',
  '@jade',
  '@karkat',
  '@tavros',
  '@sollux',
  '@nepeta',
  '@kanaya',
  '@terezi',
  '@vriska',
  '@equius',
  '@gamzee',
  '@eridan',
  '@feferi',
  '@aradia',
]

const App = () => {
  return (
    <div>
      <div className='flex-column'>
        {productos.map((producto) => (
          <div key={producto.id}>{producto.name}</div>
        ))}
      </div>
      <hr />
      <div className='flex-column'>
        {usuarios.map((usuario) => (
          <div key={usuario.email}>{usuario.nombre}</div>
        ))}
      </div>
      <hr />
      <div className='flex-column'>
        {twitterAccounts.map((twitterAccount) => (
          <div key={twitterAccount}>{twitterAccount}</div>
        ))}
      </div>
    </div>
  )
}

export default App
