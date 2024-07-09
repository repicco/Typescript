type Uuid = string | number | null

function logIn (uuid: Uuid, name: string) {
    // login
    console.log(`Id: ${uuid} - Bem vindo ${name}`)
}

function logUser (uuid: Uuid) {
    console.log(`Conta referente ao uuid: ${uuid}`)
}

logIn(1, 'João')
logIn(55, 'Maria')

logUser(1)

/* case 2 */
type Money = 'BRL' | 'EUR' | 'USD'

function buyItem(money: Money){
    console.log('Comprando com a moeda: ', money)
}

buyItem("USD")