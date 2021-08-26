import PropTypes from 'prop-types';


const CounterApp = ({value}) => {

    return (
        <>
        <h1>Counter App</h1>
        <h2>{value}</h2>
        </>
    )

}

export default CounterApp;

CounterApp.propTypes = {
    value:PropTypes.number.isRequired,
}