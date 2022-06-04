export const translateDictionary = {
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
    'sunday' : 'Domingo',
    'male': 'masculino',
    'female' : 'feminino',
    'cover_status' : 'capa',
    'core_status' :'miolo'

}

export const allStates = ['Acre - AC', 'Alagoas - AL',' Amapá - AP',' Amazonas - AM','Bahia - BA','Ceará - CE',
 'Distrito Federal - DF',
 'Espírito Santo	 -ES',
 'Goiás - GO',
 'Maranhão - MA',
 'Mato Grosso - MT',
 'Mato Grosso do Sul - MS',
 'Minas Gerais - MG',
 'Pará - PA',
 'Paraíba  - PB',
 'Paraná - PR',
 'Pernambuco - PE',
 'Piau -	 PI',
 'Rio de Janeiro - RJ',
 'Rio Grande do Norte - RN',
 'Rio Grande do Sul -	 RS',
 'Rondônia - RO',
 'Roraima - RR',
 'Santa Catarina - SC',
 'São Paulo  - SP',
 'Sergipe - SE',
 'Tocantins - TO '
]
export const allStatesInitials = [
' AC',
'AL',
'AP',
'AM',
'BA',
'CE',
'DF',
'ES',
'GO',
'MA',
'MT',
'MS',
'MG',
'PA',
'PB',
'PR',
 'PE',
 'PI',
 'RJ',
 'RN',
 'RS',
 'RO',
 'RR',
 'SC',
 'SP',
 'SE',
 'TO '
]


export function monthsTranslate (monthNumber){
    const monthsOfYear = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const month = monthsOfYear[monthNumber - 1]
    
    return month
}

