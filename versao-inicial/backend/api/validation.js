/* Aula 11 Projeto Base de Conhecimento - Backend: Funções de Validação */


module.exports = app => {

    //Verificar se o nome da categoria foi informado, se não, lança uma exceção com a mensagem passada como parâmetro
    function existsOrError(value, msg) {
        if(!value) throw msg
        if(Array.isArray(value) && value.length === 0) throw msg
        if(typeof value === 'string' && !value.trim()) throw msg
    }

    //Consulta se o nome da categoria já existe no banco de dados, se existir, lança uma exceção com a mensagem passada como parâmetro
    function notExistsOrError(value, msg) {
        try {
            existsOrError(value, msg)
        } catch(msg) {
            return
        }  
        throw msg
    }

    // Comparar a senha com a confirmação da senha, se forem diferentes, lança uma exceção com a mensagem passada como parâmetro
    function equalsOrError(valueA, valueB, msg) {
        if(valueA !== valueB) throw msg
    }

    return { existsOrError, notExistsOrError, equalsOrError }
}   