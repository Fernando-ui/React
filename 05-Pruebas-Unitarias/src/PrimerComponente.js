import PropTypes from 'prop-types';
const PrimerComponente = ({saludo, subtitulo}) => {

    return (
    <>
    <h1>{saludo}1</h1>
    <h1>{subtitulo}</h1>
    </>)

}

PrimerComponente.propTypes = {

    saludo:PropTypes.string.isRequired,
    
};

PrimerComponente.defaultProps = {

    subtitulo:'Soy un subtitulo'
}
export default PrimerComponente;
