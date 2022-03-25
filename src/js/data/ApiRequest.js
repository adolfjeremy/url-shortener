import axios from "axios";

class ApiRequest {
    static async ShortingUrl(link) {
        const response = await axios.get(
            `https://api.shrtco.de/v2/shorten?url=${link}`
        );
        return response.data.result;
    }
}

export default ApiRequest;
