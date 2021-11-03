import { fileUpload } from "../../helpers/fileUpload";
import cloudinary from 'cloudinary';

cloudinary.config({ 
    cloud_name: 'fersan', 
    api_key: '689264176525166', 
    api_secret: 'lEOlrzpb_i41bK6tJoAKCbV-hHY',
    secure: true
  });

describe('Pruebas en fileUpload', () => {
    
    test('Debe de cargar un archivo y retornar el url', async(  ) => {
        const resp = await fetch('https://ichef.bbci.co.uk/news/640/cpsprodpb/F76F/production/_101934336_hi001487062.jpg');
        const blob = await resp.blob();
        const file = new File([blob], 'foto.png');
        const url = await fileUpload( file );
        expect(typeof url).toBe('string');
        
        // Borrar imagen por ID
        const  segments = url.split('/');
        console.log(segments);
        const imageId = segments[segments.length - 1].replace('.jpg','');
        console.log(imageId);
        
        
        //* Funcion para que no se generen mas imagenes subidas en cloudinary
        await cloudinary.v2.api.delete_resources(imageId, {}, ()=>{
            console.log('');
            
        });
    });

    test('Debe de cargar un archivo y retornar el url', async() => {
     
        const file = new File([], 'foto.png');
        const url = await fileUpload( file );
        
        expect(url).toBe(null);
    });
});
