import validador from 'validator';


class FormValidator{

    constructor(validacao){
        this.validacao = validacao;
    }


    valida(state){
        /*Recuperando os dados*/
        const campoValor = state[this.validacao.campo.toString()];/*transformando o valor do campo do state que é passado como parâmetro para string, pois o validator é Strings only*/
        /*Recuperando o metodo do validator*/
        const metodoValidacao = validador[this.validacao.metodo];


        if(metodoValidacao(campoValor, [], state)){
            return false;
        }
        else{
            return true;
        }
    }

}

export default FormValidator;
