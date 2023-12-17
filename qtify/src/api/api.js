import axios from 'axios';

async function fetch(){
    try{
    var data = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
    return data.data;}
    catch(e){
        console.log(e);
    }
    return [];
}

export const fetchNew = async ()=>{
    try{
        var data = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
        return data.data;}
        catch(e){
            console.log(e);
        }
        return [];
}


export const fetchSong = async ()=>{
    try{
        var data = await axios.get('https://qtify-backend-labs.crio.do/albums/songs');
        return data.data;}
        catch(e){
            console.log(e);
        }
        return [];
}

export default fetch;