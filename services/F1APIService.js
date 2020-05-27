export class F1APIService {
    getSeasonInfo(year) {
        return new Promise(
            (resolve, reject) => {
                fetch(`https://ergast.com/api/f1/${year}.json`)
                .then(res => res.json())
                .then(seasonInfo => {
                    resolve(seasonInfo['MRData']['RaceTable']['Races'])
                })
                .catch(err => { 
                    console.error(err) 
                    reject("Erro ao buscar API")
                })
            }
        )
    }
    getSeasons(offset) {
        return new Promise(
            (resolve, reject) => {
                fetch(`http://ergast.com/api/f1/seasons.json?limit=10&offset=${offset}`)
                .then(res => res.json())
                .then(seassons => {
                    resolve(seassons['MRData']['SeasonTable']['Seasons'])
                })
                .catch(err => {
                    console.error(err)
                    reject("Erro ao buscar API")
                })
            }
        )
    }
}