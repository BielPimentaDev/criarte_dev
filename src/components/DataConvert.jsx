

export default function dataTranslate (dataToTranslate){
    const translateDictionary = {
        '1' : 'Janeiro',
        '2' : 'Fevereiro',
        '3' : 'Março',
        '4' : 'Abril',
        '5' : 'Maio',
        '6' : 'Junho',
        '7' : 'Julho',
        '8' : 'Agosto',
        '9' : 'Setembro',
        '10' : 'Outubro',
        '11' : 'Novembro',        
        '12' : 'Dezembro',
        'monday': 'Segunda-feira',
        'tuesday': 'Terça-feira',
        'wednesday' : 'Quarta-feira',
        'thursday' : 'Quinta-feira',
        'friday' : 'Sexta-feira',
        'saturday' : 'Sábado',
        'sunday' : 'Domingo'
    }
    
    return translateDictionary[dataToTranslate]

}


export function monthsTranslate (monthNumber){
    const monthsOfYear = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const month = monthsOfYear[monthNumber - 1]
    
    return month
}
