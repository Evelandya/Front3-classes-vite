# Practica clase 5!

### Practica de estilos

- Crea un componente `Item` que renderice un `li` y que reciba una prop `children`

- Crea un componente `Lista` que renderice un `ul` y que reciba una prop `children`

*Usando css modules:*

1. Elimina los estilos por defecto de la lista y el item

2. Haz que el item tenga borde, border-radius y un padding de 16px

3. Haz que los elementos de la lista esten uno al lado del otro, con un espacio de 16px entre ellos, y que si no hay espacio para mostrarlos en una sola fila, se muestren en varias filas. (flexbox)

4. Si el item se encuentra dentro de una clase global `compact-theme` haz que todos los paddings y separaciones se reduzcan a la mitad

- pueden corroborar que funcione mostrando en la app algo por el estilo

    ```jsx
    <Lista>
      <Item>Elantris</Item>
      <Item>El camino de los reyes</Item>
      <Item>El imperio final</Item>
      <Item>El pozo de la ascensión</Item>
      <Item>El héroe de las eras</Item>
      <Item>El aliento de los dioses</Item>
      <Item>Palabras radiantes</Item>
      <Item>Juramentada</Item>
    </Lista>
    <div className="compact-theme">
      <Lista>
        <Item>Elantris</Item>
        <Item>El camino de los reyes</Item>
        <Item>El imperio final</Item>
        <Item>El pozo de la ascensión</Item>
        <Item>El héroe de las eras</Item>
        <Item>El aliento de los dioses</Item>
        <Item>Palabras radiantes</Item>
        <Item>Juramentada</Item>
      </Lista>
    </div>
    <ul>
      <li>Elantris</li>
      <li>El camino de los reyes</li>
      <li>El imperio final</li>
      <li>El pozo de la ascensión</li>
      <li>El héroe de las eras</li>
      <li>El aliento de los dioses</li>
      <li>Palabras radiantes</li>
      <li>Juramentada</li>
    </ul>
    ```

    ```
    +--------------+----------------------------+----------------------+
    |              |                            |                      |
    |   Elantris   |   El camino de los reyes   |   El imperio final   |
    |              |                            |                      |
    +--------------+--------------+-------------+------------+---------+
    |                             |                          |
    |   El pozo de la ascensión   |   El héroe de las eras   |
    |                             |                          |
    +-----------------------------++------------------------++
    |                              |                        |
    |   El aliento de los dioses   |   Palabras radiantes   |
    |                              |                        |
    +-----------------+------------+------------------------+
    |                 |
    |   Juramentada   |
    |                 |
    +-----------------+

    +----------+------------------------+------------------+
    | Elantris | El camino de los reyes | El imperio final |
    +----------+--------------+---------+------------+-----+
    | El pozo de la ascensión | El héroe de las eras |
    +-------------------------++--------------------++
    | El aliento de los dioses | Palabras radiantes |
    +-------------+------------+--------------------+
    | Juramentada |
    +-------------+

    - Elantris
    - El camino de los reyes
    - El imperio final
    - El pozo de la ascensión
    - El héroe de las eras
    - El aliento de los dioses
    - Palabras radiantes
    - Juramentada
    ```
