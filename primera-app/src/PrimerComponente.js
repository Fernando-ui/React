const PrimerComponente = () => {

    const saludo = 'Hola desde una variable';
    const obje = {
        nombre:'fer',
        apellido:'sosa'
    }

    return (
    <>
    <h1>Hola amigos{saludo}</h1>
    <pre>Adios amigos{JSON.stringify(obje,null,3)} </pre>
    </>)

}
export default PrimerComponente
