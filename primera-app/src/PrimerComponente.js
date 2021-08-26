import PropTypes from 'prop-types';
const PrimerComponente = ( {saludo}) => {

    return (
    <>
    <h1>{saludo}</h1>
    </>)

}

PrimerComponente.propTypes = {

    saludo:PropTypes.string.isRequired
};
export default PrimerComponente;
