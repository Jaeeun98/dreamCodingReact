class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method:'GET',
            redirect:'follow',
        };
    }

    mostPopular(){
        return fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=2&key=${this.key}`, 
            this.getRequestOptions    
        )
        .then(response => response.json())
        .then(result =>  result.items)
    }
    
    search(text){
        return fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=2&q=${text}&type=video&type=playlist&key=${this.key}`,
            this.getRequestOptions
            )
        .then(response => response.json())
        .then(result => 
            result.items.map(item => ({...item, id : item.id.videoId}))
            )
        .then(result =>  result.items)
        .catch(error => console.log('error', error));
    }
}

export default Youtube;