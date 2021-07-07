import axios from "axios";

class Youtube {
    constructor(http) {
        this.youtube = http
    }

    async mostPopular(){
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults:2,
            }
        })
        return response.data.items;
    }
    
    async search(text) {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 2,
                type: 'video',
                q: text,
            },
        });
        return response.data.items.map(item => ({ ...item, id: item.id.videoId }));            
    }
}

export default Youtube;