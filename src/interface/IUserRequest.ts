interface IUserRequest{
    id: string,
    name: string,
    email: boolean,
    admin?: boolean,
    password: string
}
export{ IUserRequest }