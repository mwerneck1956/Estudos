import 'styled-components'

//Sobrescrevendo definição de tipos do styled components
declare module 'styled-components'{
    export interface DefaultTheme{
        title : string;
        colors : {
            primary : string;
            secundary:  string;
            background : string;
            text : string;
        }   
    }
}