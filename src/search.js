import axios from 'axios';
import logger from './logger';
import auth from './auth.json';

class Search{

    searchGoogle(msg){
        
    }

    searchUrbanDict(){

    }

    searchManga(){

    }

    searchYoutube(){

    }

    searchReddit(){
        
    }

    searchPicture(msg){
        let falias = /-searchpicture (.*)/ig.exec(msg.content);
        let salias = /-sp (.*)/ig.exec(msg.content);
        let searched = falias === null ? salias[1] : falias[1];
        axios.get(`https://api.unsplash.com/photos/random?query=${searched}&client_id=${auth.itoken}`)
            .then(res => {
                let url = res.data.urls.regular;
                msg.reply(`You Have Searched ${searched}, Here What I Found... ${url}`);
            })
            .catch(e => {
                logger.error(e.response.data);
                msg.reply(`I Could Not Found What You Have Searched, Try Google...`);
            });
    }

}

export default Search;