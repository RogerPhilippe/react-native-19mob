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
    getConstructors(year) {
        return new Promise(
            (resolve, reject) => {
                fetch(`http://ergast.com/api/f1/${year}/constructors.json`)
                .then(res => res.json())
                .then(constructors => {
                    resolve(constructors['MRData']['ConstructorTable']['Constructors'])
                })
                .catch(err => {
                    console.log(err)
                    reject('Erro ao tentar buscar construtores.')
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
    getPilotsWinners(year) {
        return new Promise(
            (resolve, reject) => {
                fetch(`http://ergast.com/api/f1/${year}/driverStandings.json`)
                .then(res => res.json())
                .then(pilotsWinners => {
                    resolve(pilotsWinners['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'])
                })
                .catch(err => {
                    console.log(err)
                    reject("Erro ao tentar buscar as pontuções dos pilotos.")
                })
            }
        )
    }
    getConstructorsWinners(year) {
        return new Promise(
            (resolve, reject) => {
                fetch(`http://ergast.com/api/f1/${year}/constructorStandings.json`)
                .then(res => res.json())
                .then(constructorsWinners => {
                    resolve(constructorsWinners['MRData']['StandingsTable']['StandingsLists'][0]['ConstructorStandings'])
                })
                .catch(err => {
                    console.log(err)
                    reject("Erro ao tentar buscar as pontuações das equipes.")
                })
            }
        )
    }
    getDriverStandings() {
        return new Promise(
            (resolve, reject) => {
                fetch('http://ergast.com/api/f1/driverstandings/1.json?limit=30&offset=50')
                .then(res => res.json())
                .then(pilots => {
                    resolve(pilots['MRData']['StandingsTable']['StandingsLists'])
                })
                .catch(err => {
                    console.log(err)
                    reject('Erro ao tentar buscar pilotos campeões.')
                })
            }
        )
    }
    getConstrtuctorsStandings() {
        return new Promise(
            (resolve, reject) => {
                fetch('http://ergast.com/api/f1/constructorStandings/1.json?limit=30&offset=42')
                .then(res => res.json())
                .then(constructors => {
                    resolve(constructors['MRData']['StandingsTable']['StandingsLists'])
                })
                .catch(err => {
                    console.log(err)
                    reject('Erro ao tentar buscar pilotos campeões.')
                })
            }
        )
    }
}