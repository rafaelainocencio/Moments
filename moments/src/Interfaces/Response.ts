export interface Response<T>{
    message?: string;
    data: T; // o data pode ser qualquer tipo (moment ou comment)
}
