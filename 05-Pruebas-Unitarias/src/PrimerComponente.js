import PropTypes from 'prop-types';
const PrimerComponente = ({saludo, subtitulo}) => {

    return (
    <>
    <h1>{saludo}</h1>
    <p>{subtitulo}</p>
    </>)

}

PrimerComponente.propTypes = {

    saludo:PropTypes.string.isRequired,
    
};

PrimerComponente.defaultProps = {

    subtitulo:'Soy un subtitulo'
}
export default PrimerComponente;
