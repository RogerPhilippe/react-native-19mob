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
}