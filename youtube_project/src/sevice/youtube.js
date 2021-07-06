class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method:'GET',
            redirect:'follow',
        };
    }

    async mostPopular(){
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=2&key=${this.key}`,
            this.getRequestOptions
        );
        const result_1 = await response.json();
        return result_1.items;
    }
    
    async search(text){
        try {
            const response = await fetch(
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=2&q=${text}&type=video&type=playlist&key=${this.key}`,
                this.getRequestOptions
            );
            const result_1 = await response.json();
            const result_2 = result_1.items.map(item => ({ ...item, id: item.id.videoId }));
            return result_2.items;
        } catch (error) {
            return console.log('error', error);
        }
    }
}

export default Youtube;