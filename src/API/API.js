import axios from 'axios'

export default{
    searchResult(search){
        return axios.get(process.env.VUE_APP_SERVER_SEARCH,
            {
            headers: {
                'x-rapidapi-key': '1461d33d23mshe6a8463197cdf26p12b41djsn3f52a158331d',
                'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
              },
            params: {query:search},
            },
            )
    }
}
