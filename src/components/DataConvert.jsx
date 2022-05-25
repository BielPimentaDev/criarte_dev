

export function monthsTranslate (monthNumber){
    const monthsOfYear = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const month = monthsOfYear[monthNumber - 1]
    
    return month
}
