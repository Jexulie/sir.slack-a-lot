/* Spotify Api maybe */

class Music{

    constructor(){
        this.queue = []
    }

    addSong(){

    }

    removeSong(){

    }

    skipSong(){

    }

    removeDupes(){
        
    }

    shuffleQueue(){

    }

    clearQueue(){

    }

    showQueue(){

    }
    
    play(msg){
        if(this.queue.length < 1){
            msg.reply(`There is no Song in the Queue. Add SOME FIRST!!...`);
        }
    }

    stop(){

    }

    pause(){

    }

    resume(){
        
    }

    setVolume(){

    }

    showPlayingSong(){

    }

    loopQueue(){

    }

}

export default Music;