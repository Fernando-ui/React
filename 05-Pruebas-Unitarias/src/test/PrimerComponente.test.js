import { render } from "@testing-library/react";
import PrimerComponente from "../PrimerComponente";
import '@testing-library/jest-dom/extend-expect';

describe('Pruebas en <PrimerComponente />', () => {

    test('Debe mostrar el mensaje "Hola, Soy Fernando" ', () => {
        
        const saludo = 'Hola, soy Fernando';
        const {getByText} = render(<PrimerComponente saludo={saludo}/>);
        expect(getByText(saludo)).toBeInTheDocument();
    })
    
})
