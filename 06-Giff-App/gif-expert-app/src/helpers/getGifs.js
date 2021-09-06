

export const getGifs = async( category )=>{


    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=N8Cf1CkzsWIo20asLCPDWM5B69xLgQzR`;
    const resp = await fetch(url);
    // console.log(resp);
    const {data} = await resp.json();
    // console.log(data,'Toda la data');
    const gifs = data.map(img => {

        return{

            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url,
        }
    })

    return gifs;
}
