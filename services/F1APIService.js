export class F1APIService {
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
    getPilots(year) {
        return new Promise(
            (resolve, reject) => {
                fetch(`https://ergast.com/api/f1/${year}/drivers.json`)
                .then(res => res.json())
                .then(pilots => {
                    resolve(pilots['MRData']['DriverTable']['Drivers'])
                })
                .catch(err => {
                    console.log(err)
                    reject("Erro ao tentar buscar pilotos.")
                })
            }
        )
    }
    getClassification(year, round) {

        return new Promise(
            (resolve, reject) => {
                fetch(`http://ergast.com/api/f1/${year}/${round}/qualifying.json`)
                .then(res => res.json())
                .then(classification => {
                    resolve(classification['MRData']['RaceTable']['Races'][0])
                })
                .catch(err => {
                    console.log(err)
                    reject("Erro ao buscar qualificações")
                })
            }
        )
    }
}