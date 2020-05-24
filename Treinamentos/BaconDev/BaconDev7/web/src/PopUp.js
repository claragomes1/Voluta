import M from 'materialize-css';

const PopUp = { 
    exibeMensagem: (status, msg) => {
        if(status === "error"){
            M.toast({html: msg, classes: 'cyan', displayLength: 2000});
        }
        
    }
}

export default PopUp;